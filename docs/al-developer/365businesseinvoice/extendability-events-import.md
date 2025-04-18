# 365 business E-Invoice Extendability Events

## OnAfterDownloadEDocument - Event

The `OnAfterDownloadEDocument` event is triggered after downloading the document from the Microsoft 365 mailbox using E-Document framework. This event allows you to get the received document for further processing or validation.

```al
    /// <summary>
    /// Event triggered after downloading the document from the Microsoft 365 mailbox.
    /// </summary>
    /// <param name="eDocument">Record with the E-Document data.</param>
    /// <param name="document">Temp Blob codeunit containing the downloaded document.</param>
    [IntegrationEvent(false, false)]
    local procedure OnAfterDownloadEDocument(var eDocument: Record Microsoft.eServices.EDocument."E-Document"; var document: Codeunit System.Utilities."Temp Blob")
    begin
    end;
```

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `eDocument` | Record "E-Document" | The E-Document record containing the downloaded document. |
| `document` | "Temp Blob" codeunit | The Temp Blob codeunit containing the downloaded document. |

