# 365 business E-Invoice

`365 business E-Invoice` is based on Microsofts E-Document Framework and is a solution for sending and receiving electronic invoices, with Microsoft Dynamics 365 Business Central. E-Invoice is adding so-called **document format** and **service integration**, to enable sending and receiving electronic invoices.

The following document formats are supported:

 - Factur-X 1.0.07
 - ZUGFeRD 2.3.0 (EXTENDED)

The following service integrations are supported:

 - Microsoft 365 Mailbox

## Dependency

To be able to create your own implementation you have to add a dependency to the `365 business E-Invoice` app. You do this by adding the following to the `dependencies` node in your `app.json` file:

```json
    {
      "id": "cf38c5e4-71de-4e90-b544-4b1689e1db3f",
      "name": "365 business E-Invoice",
      "publisher": "365 business development",
      "version": "25.0.0.0"
    }
```

## Extendability

365 business E-Invoice is creating compliant electronic documents, for sales invoices and sales credit memos. In some business cases it may be necessary to extend the base functionality, for example for add additional fields to the electronic document. This can be done by creating a new extension, that extends the base functionality.

### E-Invoice Integration

The `bdev.E-Invoice Integration` codeunit is the main integration point for extending the base functionality. The codeunit provides event publisher to manipulate both the PDF document and the XML metadata, before the electronic document is created.

#### OnBeforeCreateZUGFeRDDocument - Event

The `OnBeforeCreateZUGFeRDDocument` event is triggered before creating ZUGFeRD document, to allow customizations to modify the XML or PDF document.

```al
    /// <summary>
    /// Event triggered before creating ZUGFeRD document, to allow customizations to modify the XML or PDF document
    /// </summary>
    /// <param name="sourceDocumentHeader">RecordRef with source document header, e.g. Sales Invoice Header.</param>
    /// <param name="pdfDoc">Temp Blob codeunit, containing the PDF document.</param>
    /// <param name="xmlDoc">XML Document, containing the created ZUGFeRD metadata XML.</param>
    [IntegrationEvent(false, false)]
    local procedure OnBeforeCreateZUGFeRDDocument(sourceDocumentHeader: RecordRef; var pdfDoc: Codeunit System.Utilities."Temp Blob"; var xmlDoc: XmlDocument)
```

| Parameter | Type | Description |
| --- | --- | --- |
| `sourceDocumentHeader` | RecordRef | The source document header |
| `pdfDoc` | Codeunit "Temp Blob" | The PDF document |
| `xmlDoc` | XmlDocument | The XML document |

##### Example - Add Buyer Trade Party Description

The following example demonstrates how to add a description to the buyer trade party in the XML metadata, before the ZUGFeRD document is created. This can be used to add additional information to the electronic document.

```al
    [EventSubscriber(ObjectType::Codeunit, Codeunit::"bdev.E-Invoice Integration", OnBeforeCreateZUGFeRDDocument, '', true, true)]
    local procedure AddBuyerTradePartyDescriptionOnBeforeCreateZUGFeRDDocument(sourceDocumentHeader: RecordRef; var pdfDoc: Codeunit "Temp Blob"; var xmlDoc: XmlDocument)
    begin
        AddBuyerTradePartyDescription(xmlDoc, GetBuyerTradePartyDescription(sourceDocumentHeader));
    end;

    local procedure AddBuyerTradePartyDescription(var xmlDoc: XmlDocument; buyerTradePartyDescription: Text)
    var
        buyerTradeParty: XmlNode;
        buyerTradePartyDescriptionElement: XmlElement;
        xmlNamespaceRAMLbl: Label 'urn:un:unece:uncefact:data:standard:ReusableAggregateBusinessInformationEntity:100', Locked = true;
        buyerTradePartyNameXPathTok: Label '/*[local-name()=''CrossIndustryInvoice'']/*[local-name()=''SupplyChainTradeTransaction'']/*[local-name()=''ApplicableHeaderTradeAgreement'']/*[local-name()=''BuyerTradeParty'']/*[local-name()=''Name'']', Locked = true;
    begin
        if (buyerTradePartyDescription = '') then
            exit;

        xmlDoc.SelectSingleNode(buyerTradePartyNameXPathTok, buyerTradeParty);
        buyerTradePartyDescriptionElement := XmlElement.Create('Description', xmlNamespaceRAMLbl, buyerTradePartyDescription);
        buyerTradeParty.AsXmlElement().AddAfterSelf(buyerTradePartyDescriptionElement);
    end;

    local procedure GetBuyerTradePartyDescription(sourceDocumentHeader: RecordRef): Text
    begin
        // Add your custom logic to get the buyer trade party description
        // For example, you can get the description from a custom field (ID: 50000) on the source document header:
        // exit(sourceDocumentHeader.Field(50000).Value());
        exit('Buyer Trade Party Description');
    end;
```

#### Example - Merge additional PDF document

The following example demonstrates how to merge an additional PDF document, for example Terms & Conditions, to the PDF document, before the electronic document is created.

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Notice:</strong>This example is utilizing <a href="../365businesspdf/README.md">365 business PDF</a> to merge the additional PDF document. If you are not using 365 business PDF, you can use any other PDF library to merge the additional PDF document.
</div>

```al
    [EventSubscriber(ObjectType::Codeunit, Codeunit::"bdev.E-Invoice Integration", 'OnBeforeCreateZUGFeRDDocument', '', false, false)]
    local procedure MergeAdditionalPdfOnBeforeCreateZUGFeRDDocument(sourceDocumentHeader: RecordRef; var pdfDoc: Codeunit "Temp Blob")
    var
        pdfApi: Codeunit "bdev.Pdf API";
    begin
        if (sourceDocumentHeader.Number() <> Database::"Sales Invoice Header") then
            exit;

        pdfApi.ConcatenateDocument(
            pdfDoc,
            GetAdditionalPDF(sourceDocumentHeader) // additional PDF document as Temp Blob
        );
    end;

    local procedure GetAdditionalPDF(salesInvoiceHdrRecRef: RecordRef) samplePdf: Codeunit "Temp Blob"
    var
        salesShipmentHdr: Record "Sales Shipment Header";
        salesShipmentHdrRecRef: RecordRef;
        stream: OutStream;
    begin
        // add your custom logic to get the additional PDF document
        // for example, you can create a PDF document from a sales shipment header:
        salesShipmentHdr.FindLast();
        salesShipmentHdrRecRef.GetTable(salesShipmentHdr);
        salesShipmentHdrRecRef.SetRecFilter();

        samplePdf.CreateOutStream(stream);
        Report.SaveAs(Report::"Standard Sales - Shipment", '', ReportFormat::Pdf, stream, salesShipmentHdrRecRef);

        exit(samplePdf);
    end;
```

#### OnAfterCreateZUGFeRDDocument - Event

The `OnAfterCreateZUGFeRDDocument` event is triggered before creating ZUGFeRD document, to allow customizations to modify the XML or PDF document.

```al
    /// <summary>
    /// Event triggered after creating ZUGFeRD document, to allow customizations to modify the created ZUGFeRD document
    /// </summary>
    /// <param name="sourceDocumentHeader">RecordRef with source document header, e.g. Sales Invoice Header.</param>
    /// <param name="zugferdDoc">Temp Blob codeunit, containing the created ZUGFeRD document.</param>
    [IntegrationEvent(false, false)]
    local procedure OnAfterCreateZUGFeRDDocument(sourceDocumentHeader: RecordRef; var zugferdDoc: Codeunit System.Utilities."Temp Blob")
```

| Parameter | Type | Description |
| --- | --- | --- |
| `sourceDocumentHeader` | RecordRef | The source document header |
| `zugferdDoc` | Codeunit "Temp Blob" | The Factur-X / ZUGFeRD document |


<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Important:</strong>Keep in mind, that any manipulations of the PDF document must be done before the actual electronic document is created, otherwise this would break the PDF/A-3 compliance and the electronic document would not be valid.<br>
    <br>
    Use only the <strong>OnBeforeCreateZUGFeRDDocument event publisher</strong> to manipulate the PDF document and the XML metadata, before the electronic document is created.
</div>

##### Example - Archive electronic Factur-X / ZUGFeRD document

The following example demonstrates how to archive the electronic Factur-X / ZUGFeRD document, after the electronic document is created. This can be used to store the electronic document in a document management system (DMS).

```al
    [EventSubscriber(ObjectType::Codeunit, Codeunit::"bdev.E-Invoice Integration", OnAfterCreateZUGFeRDDocument, '', true, true)]
    local procedure ArchiveZUGFeRDDocumentOnAfterCreateZUGFeRDDocument(sourceDocumentHeader: RecordRef; var zugferdDoc: Codeunit "Temp Blob")
    begin
        ArchiveZUGFeRDDocument(sourceDocumentHeader, zugferdDoc);
    end;

    local procedure ArchiveZUGFeRDDocument(sourceDocumentHeader: RecordRef; zugferdDoc: Codeunit "Temp Blob")
    begin
        // Add your custom logic to archive the electronic document
        // For example, you can store the electronic document in a document management system (DMS)
    end;
```