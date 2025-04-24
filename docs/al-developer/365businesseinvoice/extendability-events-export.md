# 365 business E-Invoice Extendability Events

365 business E-Invoice offers multiple integration and extensibility points, to allow you to customize the solution to your needs. The following sections describe the available events for customizing the export of electronic documents.

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i>
    <strong>Info</strong>Typically, customization is required through special business requirements, such as adding additional fields to the electronic document. The following examples are provided to demonstrate how to use the events and how to customize the electronic document.<br>
    <br>
    The examples are not intended to be used as-is, but rather as a starting point for your own implementation. You can use the examples as a reference to create your own customizations.
</div>

## OnBeforeCreateZUGFeRDDocument - Event

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

### Implementation

Use the following code to implement the `OnBeforeCreateZUGFeRDDocument` event. The event is triggered before creating the ZUGFeRD document, to allow customizations to modify the XML or PDF document.

```al
    [EventSubscriber(ObjectType::Codeunit, Codeunit::"bdev.E-Invoice Integration", OnBeforeCreateZUGFeRDDocument, '', true, true)]
    local procedure EInvoiceIntegrationOnBeforeCreateZUGFeRDDocument(sourceDocumentHeader: RecordRef; var pdfDoc: Codeunit System.Utilities."Temp Blob"; var xmlDoc: XmlDocument)
    begin
        // Custom logic before creating ZUGFeRD document
    end;

```al
    [EventSubscriber(ObjectType::Codeunit, Codeunit::"bdev.E-Invoice Integration", OnBeforeCreateZUGFeRDDocument, '', true, true)]
    local procedure EInvoiceIntegrationOnBeforeCreateZUGFeRDDocument(sourceDocumentHeader: RecordRef; var pdfDoc: Codeunit System.Utilities."Temp Blob"; var xmlDoc: XmlDocument)
    begin
        // Custom logic before creating ZUGFeRD document
        // This is where you can modify the XML or PDF document before it's created
        // For example, you can add custom fields or modify existing ones
        // You can also log the source document header information for debugging purposes
    end;
```

### Example - Add Buyer Trade Party Description

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

### Example - Merge additional PDF document

The following example demonstrates how to merge an additional PDF document, for example Terms & Conditions, to the PDF document, before the electronic document is created.

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i>
    <strong>Info</strong>This example is utilizing <a href="../365businesspdf/readme.md">365 business PDF</a> to merge the additional PDF document. If you are not using 365 business PDF, you can use any other PDF library to merge the additional PDF document.
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

## OnAfterCreateZUGFeRDDocument - Event

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
    <i class="fa-light fa-hand-point-up fa-lg"></i>
    <strong>Good to know</strong>Keep in mind, that any manipulations of the PDF document must be done before the actual electronic document is created, otherwise this would break the PDF/A-3 compliance and the electronic document would not be valid.<br>
    <br>
    Use only the <strong>OnBeforeCreateZUGFeRDDocument event publisher</strong> to manipulate the PDF document and the XML metadata, before the electronic document is created.
</div>

### Implementation

Use the following code to implement the `OnAfterCreateZUGFeRDDocument` event. The event is triggered after creating ZUGFeRD document, to allow customizations to modify the created ZUGFeRD document.

```al
    [EventSubscriber(ObjectType::Codeunit, Codeunit::"bdev.E-Invoice Integration", OnAfterCreateZUGFeRDDocument, '', true, true)]
    local procedure EInvoiceIntegrationOnAfterCreateZUGFeRDDocument(sourceDocumentHeader: RecordRef; var zugferdDoc: Codeunit "Temp Blob")
    begin
        // Custom logic to handle the created ZUGFeRD document can be added here.
        // For example, you can save the document to a specific location like SharePoint or a Document Management System.
    end;
```

### Example - Archive electronic Factur-X / ZUGFeRD document

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

## OnBeforeCreateXml - Event

The `OnBeforeCreateXml` event is triggered before creating XML document for ZUGFeRD / Factur-X export, to allow customizations to structured data in header and line model.

```al
    /// <summary>
    /// Event triggered before creating XML document for ZUGFeRD / Factur-X export, to allow customizations on header and line level.
    /// </summary>
    /// <param name="header">XML Document header model.</param>
    /// <param name="line">XML Document line model.</param>
    /// <param name="salesInvCrMemoHeaderRecRef">RecordRef with source document header, e.g. Sales Invoice Header.</param>
    [IntegrationEvent(false, false)]
    local procedure OnBeforeCreateXml(var header: Record "bdev.E-Invoice Header Model"; var line: Record "bdev.E-Invoice Line Model"; salesInvCrMemoHeaderRecRef: RecordRef)
    begin
    end;
```

| Parameter | Type | Description |
| --- | --- | --- |
| `header` | Record "bdev.E-Invoice Header Model" | The XML document header model |
| `line` | Record "bdev.E-Invoice Line Model" | The XML document line model |
| `salesInvCrMemoHeaderRecRef` | RecordRef | The source document header |

### Implementation

Use the following code to implement the `OnBeforeCreateXml` event. The event is triggered before creating XML document for ZUGFeRD / Factur-X export, to allow customizations to structured data in header and line model.

```al
    [EventSubscriber(ObjectType::Codeunit, Codeunit::"bdev.E-Invoice Integration", OnBeforeCreateXml, '', true, true)]
    local procedure EInvoiceIntegrationOnBeforeCreateXml(var header: Record "bdev.E-Invoice Header Model" temporary; var line: Record "bdev.E-Invoice Line Model" temporary; salesInvCrMemoHeaderRecRef: RecordRef)
    begin
        // Custom logic to handle the created ZUGFeRD document can be added here.
        // For example, you can save the document to a specific location like SharePoint or a Document Management System.
    end;
```

### Example - Add billing period from Subscription Billing to Sales Invoice

The following example demonstrates how to add a billing period to the sales invoice in the XML metadata, before the electronic document is created. This can be used to add additional information to the electronic document.

```al
    [EventSubscriber(ObjectType::Codeunit, Codeunit::"bdev.E-Invoice Integration", OnBeforeCreateXml, '', true, true)]
    local procedure AddBillingPeriodOnBeforeCreateXml(var header: Record "bdev.E-Invoice Header Model"; var line: Record "bdev.E-Invoice Line Model"; salesInvCrMemoHeaderRecRef: RecordRef)
    begin
        AddBillingPeriodFromSalesInvoice(header, salesInvCrMemoHeaderRecRef);
    end;

    local procedure AddBillingPeriodFromSalesInvoice(var header: Record "bdev.E-Invoice Header Model"; salesInvCrMemoHeaderRecRef: RecordRef)
    var
        billingPeriodFrom, billingPeriodTo : Date;
    begin
        if (salesInvCrMemoHeaderRecRef.Number() <> Database::"Sales Invoice Header") then
            exit;

        // get billing period from the source document
        Evaluate(billingPeriodFrom, salesInvCrMemoHeaderRecRef.Field(8053).Value()); // Recurring Billing from
        Evaluate(billingPeriodTo, salesInvCrMemoHeaderRecRef.Field(8054).Value()); // Recurring Billing to

        if (billingPeriodFrom = 0D) or (billingPeriodTo = 0D) then
            exit;

        header.BillingPeriodFrom := billingPeriodFrom;
        header.BillingPeriodTo := billingPeriodTo;
    end;
```

## OnAfterAddDocumentInformationToXml - Event

The `OnAfterAddDocumentInformationToXml` event is triggered after adding document information to XML document for ZUGFeRD / Factur-X export, to allow adding additional notes to the electronic document.

```al
    /// <summary>
    /// Event triggered after adding document information to the XML document for ZUGFeRD / Factur-X export.
    /// </summary>
    /// <param name="currNode">XML Element where the document information is added.</param>
    /// <param name="header">XML Document header model.</param>
    [IntegrationEvent(false, false)]
    local procedure OnAfterAddDocumentInformationToXml(var currNode: XmlElement; var header: Record "bdev.E-Invoice Header Model")
    begin
    end;
```

| Parameter | Type | Description |
| --- | --- | --- |
| `currNode` | XmlElement | The XML element where the document information is added |
| `header` | Record "bdev.E-Invoice Header Model" | The XML document header model |

### Implementation

Use the following code to implement the `OnAfterAddDocumentInformationToXml` event. The event is triggered after adding document information to XML document for ZUGFeRD / Factur-X export, to allow adding additional notes to the electronic document.

```al
    [EventSubscriber(ObjectType::Codeunit, Codeunit::"bdev.E-Invoice Integration", OnAfterAddDocumentInformationToXml, '', true, true)]
    local procedure EInvoiceIntegrationOnAfterAddDocumentInformationToXml(var currNode: XmlElement; var header: Record "bdev.E-Invoice Header Model")
    begin
        // Custom logic to handle the created ZUGFeRD document can be added here.
        // For example, you can save the document to a specific location like SharePoint or a Document Management System.
    end;
```

### Example - Add additional notes to the XML document

The following example demonstrates how to add additional notes to the XML document, after the document information is added to the XML document. This can be used to add additional information to the electronic document.

```al
    [EventSubscriber(ObjectType::Codeunit, Codeunit::"bdev.E-Invoice Integration", OnAfterAddDocumentInformationToXml, '', true, true)]
    local procedure AddAdditionalNotesOnAfterAddDocumentInformationToXml(var currNode: XmlElement; var header: Record "bdev.E-Invoice Header Model")
    begin
        AddAdditionalNotes(currNode, header);
    end;

    local procedure AddAdditionalNotes(var currNode: XmlElement; var header: Record "bdev.E-Invoice Header Model")
    var
        additionalNotes: Text;
        newNode: XmlElement;
    begin
        additionalNotes := GetAdditionalNotes(header);
        if (additionalNotes = '') then
            exit;

        AddIncludedNote(
            currNode, 
            additionalNotes, 
            'ACB' // Subject Code, see [Code Lists](https://ec.europa.eu/digital-building-blocks/sites/display/DIGITAL/Code+lists)
        );
    end;

    local procedure GetAdditionalNotes(header: Record "bdev.E-Invoice Header Model"): Text
    begin
        // Add your custom logic to get the additional notes
        // For example, you can get the additional notes from a custom field (ID: 50000) on the source document header:
        // exit(header.Field(50000).Value());
        exit('Additional Notes');
    end;

    local procedure AddIncludedNote(var currNode: XmlElement; content: Text; subjectCode: Text)
    var
        newNode: XmlElement;
        namespace: Label 'urn:un:unece:uncefact:data:standard:ReusableAggregateBusinessInformationEntity:100', Locked = true;
    begin
        AddElement(currNode, newNode, 'IncludedNote', namespace);
        currNode := newNode;
        AddElement(currNode, newNode, 'Content', content, namespace);
        if (subjectCode <> '') then
            AddElement(currNode, newNode, 'SubjectCode', subjectCode, namespace);
        currNode.GetParent(currNode);
    end;

    local procedure AddElement(var currNode: XmlElement; var newNode: XmlElement; name: Text; nodeText: Text; namespace: Text): Boolean
    begin
        newNode := XmlElement.Create(name, namespace, nodeText);
        exit(currNode.Add(newNode));
    end;
```

## OnBeforeAddCompanyInformationToXml - Event

The `OnBeforeAddCompanyInformationToXml` event is triggered before adding company information to the XML document for ZUGFeRD / Factur-X export, to allow customizations to modify the company information.

```al
    /// <summary>
    /// Event triggered before adding company information to the XML document for ZUGFeRD / Factur-X export.
    /// </summary>
    /// <param name="sb">TextBuilder instance containing the company information.</param>
    /// <param name="header">XML Document header model.</param>
    [IntegrationEvent(false, false)]
    local procedure OnBeforeAddCompanyInformationToXml(var sb: TextBuilder; var header: Record "bdev.E-Invoice Header Model")
    begin
    end;
```

| Parameter | Type | Description |
| --- | --- | --- |
| `sb` | TextBuilder | The TextBuilder instance containing the company information |
| `header` | Record "bdev.E-Invoice Header Model" | The XML document header model |

### Implementation

Use the following code to implement the `OnBeforeAddCompanyInformationToXml` event. The event is triggered before adding company information to the XML document for ZUGFeRD / Factur-X export, to allow customizations to modify the company information.

```al
    [EventSubscriber(ObjectType::Codeunit, Codeunit::"bdev.E-Invoice Integration", OnBeforeAddCompanyInformationToXml, '', true, true)]
    local procedure EInvoiceIntegrationOnBeforeAddCompanyInformationToXml(var sb: TextBuilder; var header: Record "bdev.E-Invoice Header Model")
    begin
        // Custom logic to add or modify company information in the XML document
        // For example, you can add additional company information like department or register information
    end;
```

## OnAfterAddCompanyInformationToXml - Event

The `OnAfterAddCompanyInformationToXml` event is triggered after adding company information to the XML document for ZUGFeRD / Factur-X export, to allow customizations to modify the company information.

```al
    /// <summary>
    /// Event triggered after adding company information to the XML document for ZUGFeRD / Factur-X export.
    /// </summary>
    /// <param name="currNode">XML Element where the company information is added.</param>
    /// <param name="header">XML Document header model.</param>
    [IntegrationEvent(false, false)]
    local procedure OnAfterAddCompanyInformationToXml(var currNode: XmlElement; var header: Record "bdev.E-Invoice Header Model")
    begin
    end;
```

| Parameter | Type | Description |
| --- | --- | --- |
| `currNode` | XmlElement | The XML element where the company information is added |
| `header` | Record "bdev.E-Invoice Header Model" | The XML document header model |

### Implementation

Use the following code to implement the `OnAfterAddCompanyInformationToXml` event.

```al
    [EventSubscriber(ObjectType::Codeunit, Codeunit::"bdev.E-Invoice Integration", OnAfterAddCompanyInformationToXml, '', true, true)]
    local procedure EInvoiceIntegrationOnAfterAddCompanyInformationToXml(var currNode: XmlElement; var header: Record "bdev.E-Invoice Header Model")
    begin
        // Custom logic to add or modify company information in the XML document
        // For example, you can add additional company information like department or register information
    end;
```

## OnAfterAddLineToXml - Event

The `OnAfterAddLineToXml` event is triggered after adding sales invoice or credit memo line to the XML document for ZUGFeRD / Factur-X export, to allow customizations to modify the line information.

```al
    /// <summary>
    /// Event triggered after adding sales invoice or credit memo line to the XML document for ZUGFeRD / Factur-X export.
    /// </summary>
    /// <param name="currNode">XML Element where the sales invoice line is added.</param>
    /// <param name="header">XML Document header model.</param>
    /// <param name="line">XML Document line model.</param>
    [IntegrationEvent(false, false)]
    local procedure OnAfterAddLineToXml(var currNode: XmlElement; var header: Record "bdev.E-Invoice Header Model"; var line: Record "bdev.E-Invoice Line Model")
    begin
    end;
```

| Parameter | Type | Description |
| --- | --- | --- |
| `currNode` | XmlElement | The XML element where the sales invoice line is added |
| `header` | Record "bdev.E-Invoice Header Model" | The XML document header model |
| `line` | Record "bdev.E-Invoice Line Model" | The XML document line model |

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg"></i>
    <strong>Good to know</strong>We recommend to integration with <a href="#onbeforeinsertsalesinvoicecrmemoheadertomodel---event">OnBeforeInsertSalesInvoiceCrMemoHeaderToModel - Event</a> or <a href="#onbeforeinsertsalesinvoicecrmemolinetomodel---event">OnBeforeInsertSalesInvoiceCrMemoLineToModel - Event</a> to add additional information directly to the models, instead manipulating the XML document. This is more efficient and less error-prone.
</div>

### Implementation

Use the following code to implement the `OnAfterAddLineToXml` event. The event is triggered after adding sales invoice or credit memo line to the XML document for ZUGFeRD / Factur-X export, to allow customizations to modify the line information.

```al
    [EventSubscriber(ObjectType::Codeunit, Codeunit::"bdev.E-Invoice Integration", OnAfterAddLineToXml, '', true, true)]
    local procedure EInvoiceIntegrationOnAfterAddLineToXml(var currNode: XmlElement; var header: Record "bdev.E-Invoice Header Model"; var line: Record "bdev.E-Invoice Line Model")
    begin
        // Custom logic to add or modify line information in the XML document
        // For example, you can add additional line information like department or register information
    end;
```

## OnBeforeInsertSalesInvoiceCrMemoHeaderToModel - Event

The `OnBeforeInsertSalesInvoiceCrMemoHeaderToModel` event is triggered before inserting sales invoice or credit memo header into the model for ZUGFeRD / Factur-X export, to allow customizations to modify the header information.

```al
    /// <summary>
    /// Event triggered before inserting sales invoice or credit memo header into the model for ZUGFeRD / Factur-X export.
    /// </summary>
    /// <param name="header">XML Document header model.</param>
    /// <param name="salesInvCrMemoHeaderRecVariant">RecordRef with source document header, e.g. Sales Invoice Header.</param>
    /// <remarks>
    /// This event allows customization of the header data.
    /// </remarks>
    [IntegrationEvent(false, false)]
    local procedure OnBeforeInsertSalesInvoiceCrMemoHeaderToModel(var header: Record "bdev.E-Invoice Header Model"; salesInvCrMemoHeaderRecVariant: Variant)
    begin
    end;
```

| Parameter | Type | Description |
| --- | --- | --- |
| `header` | Record "bdev.E-Invoice Header Model" | The XML document header model |
| `salesInvCrMemoHeaderRecVariant` | Variant | The source document header |

### Implementation

Use the following code to implement the `OnBeforeInsertSalesInvoiceCrMemoHeaderToModel` event. The event is triggered before inserting sales invoice or credit memo header into the model for ZUGFeRD / Factur-X export, to allow customizations to modify the header information.

```al
    [EventSubscriber(ObjectType::Codeunit, Codeunit::"bdev.E-Invoice Integration", OnBeforeInsertSalesInvoiceCrMemoHeaderToModel, '', true, true)]
    local procedure EInvoiceIntegrationOnBeforeInsertSalesInvoiceCrMemoHeaderToModel(var header: Record "bdev.E-Invoice Header Model"; salesInvCrMemoHeaderRecVariant: Variant)
    begin
        // Custom logic to add or modify header information in the XML document
        // For example, you can add additional header information like department or register information
    end;
```

### Example - Add billing period from Subscription Billing to Sales Invoice

The following example demonstrates how to add a billing period to the sales invoice in the XML metadata, before the electronic document is created. This can be used to add additional information to the electronic document.

```al
    [EventSubscriber(ObjectType::Codeunit, Codeunit::"bdev.E-Invoice Integration", OnBeforeInsertSalesInvoiceCrMemoHeaderToModel, '', true, true)]
    local procedure AddBillingPeriodOnBeforeInsertSalesInvoiceCrMemoHeaderToModel(var header: Record "bdev.E-Invoice Header Model"; salesInvCrMemoHeaderRecVariant: Variant)
    var
        salesInvHeader: Record "Sales Invoice Header";
        dataTypeMgmt: Codeunit "Data Type Management";
        salesInvCrMemoHeaderRecRef: RecordRef;
    begin
        if (not dataTypeMgmt.GetRecordRef(salesInvCrMemoHeaderRecVariant, salesInvCrMemoHeaderRecRef)) then
            exit;
        
        if (salesInvCrMemoHeaderRecRef.Number() <> Database::"Sales Invoice Header") then
            exit;

        salesInvCrMemoHeaderRecRef.SetTable(salesInvHeader);
        salesInvHeader.SetRecFilter();

        AddBillingPeriodFromSalesInvoice(header, salesInvHeader);
    end;

    local procedure AddBillingPeriodFromSalesInvoice(var header: Record "bdev.E-Invoice Header Model"; salesInvHeader: Record "Sales Invoice Header")
    begin
        if (salesInvHeader."Recurring Billing from" = 0D) or (salesInvHeader."Recurring Billing to" = 0D) then
            exit;

        header.BillingPeriodFrom := salesInvHeader."Recurring Billing from";
        header.BillingPeriodTo := salesInvHeader."Recurring Billing to";
    end;
```

## OnBeforeInsertSalesInvoiceCrMemoLineToModel - Event

The `OnBeforeInsertSalesInvoiceCrMemoLineToModel` event is triggered before inserting sales invoice or credit memo line into the model for ZUGFeRD / Factur-X export, to allow customizations to modify the line information.

```al
    /// <summary>
    /// Event triggered before inserting sales invoice or credit memo line into the model for ZUGFeRD / Factur-X export.
    /// </summary>
    /// <param name="line">XML Document line model.</param>
    /// <param name="salesInvCrMemoHeaderRecVariant">RecordRef with source document header, e.g. Sales Invoice Header.</param>
    /// <param name="salesInvCrMemoLineRecVariant">RecordRef with source document line, e.g. Sales Invoice Line.</param>
    /// <remarks>
    /// This event allows customization of the line data.
    /// </remarks>
    [IntegrationEvent(false, false)]
    local procedure OnBeforeInsertSalesInvoiceCrMemoLineToModel(var line: Record "bdev.E-Invoice Line Model"; salesInvCrMemoHeaderRecVariant: Variant; salesInvCrMemoLineRecVariant: Variant)
    begin
    end;
```

| Parameter | Type | Description |
| --- | --- | --- |
| `line` | Record "bdev.E-Invoice Line Model" | The XML document line model |
| `salesInvCrMemoHeaderRecVariant` | Variant | The source document header |
| `salesInvCrMemoLineRecVariant` | Variant | The source document line |

### Implementation

Use the following code to implement the `OnBeforeInsertSalesInvoiceCrMemoLineToModel` event. The event is triggered before inserting sales invoice or credit memo line into the model for ZUGFeRD / Factur-X export, to allow customizations to modify the line information.

```al
    [EventSubscriber(ObjectType::Codeunit, Codeunit::"bdev.E-Invoice Integration", OnBeforeInsertSalesInvoiceCrMemoLineToModel, '', true, true)]
    local procedure EInvoiceIntegrationOnBeforeInsertSalesInvoiceCrMemoLineToModel(var line: Record "bdev.E-Invoice Line Model"; salesInvCrMemoHeaderRecVariant: Variant; salesInvCrMemoLineRecVariant: Variant)
    begin
        // Custom logic to add or modify line information in the XML document
        // For example, you can add additional line information like department or register information
    end;
```