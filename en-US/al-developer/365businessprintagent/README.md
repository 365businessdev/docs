# 365 business Print Agent

The `365 business Print Agent` app is adding printing capabilities and integrate your printer infrastructure to Microsoft Dynamics 365 Business Central.

## App Dependencies

To be able to create your own implementation you have to add a dependency to the `365 business Print Agent` app. You do this by adding the following to the `dependencies` node in your `app.json` file:

```json
    {
      "id": "6fb30c19-f5d6-4e4c-b006-18fba4de1898",
      "name": "365 business Print Agent",
      "publisher": "365 business development",
      "version": "18.0.0.0"
    }
```

## Implementation

The `365 business Print Agent` app is providing an internal API codeunit to allow integration custom specific business processes. For example you can print external PDF documents to a specified [Printer Configuration](https://docs.365businessdev.com/en-US/365-business-print-agent/printer-configuration/).

### Methods

The `bdev.Print Agent` codeunit object is providing the following public methods:

| Method | Description |
| --- | --- |
| [`IsPrinted(): Boolean`](#isprinted-boolean) | Returns the status of the last print job execution. |
| [`PrintPdf(Text, Codeunit, Record)`](#printpdftext-codeunit-record) | Print PDF file, stored in `Temp Blob` codeunit, at specified `bdev.PrA Printer Configuration`. |
| [`PrintPdf(Text, Codeunit, Integer, Record)`](#printpdftext-codeunit-integer-record) | Print specified number of copies of the PDF file, stored in `Temp Blob` codeunit, at specified `bdev.PrA Printer Configuration`. |
| [`PrintPdf(Codeunit, Record)`](#printpdftext-record) | Print PDF file, stored in `Temp Blob` codeunit, at specified `bdev.PrA Printer Configuration`. |
| [`PrintPdf(Codeunit, Integer, Record)`](#printpdftext-integer-record) | Print specified number of copies of the PDF file, stored in `Temp Blob` codeunit, at specified `bdev.PrA Printer Configuration`. |
| [`PrintPdf(Text, InStream, Record)`](#printpdftext-instream-record) | Print PDF file stream at specified `bdev.PrA Printer Configuration`. |
| [`PrintPdf(Text, InStream, Integer, Record)`](#printpdftext-instream-integer-record) | Print specified number of copies of the PDF file stream at specified `bdev.PrA Printer Configuration`. |
| [`PrintPdf(InStream, Record)`](#printpdfinstream-record) | Print PDF file stream at specified `bdev.PrA Printer Configuration`. |
| [`PrintPdf(InStream, Integer, Record)`](#printpdfinstream-integer-record) | Print specified number of copies of the PDF file stream at specified `bdev.PrA Printer Configuration`. |
| [`PrintZPL(Text, Text, Record)`](#printzpltext-text-record) | Send Zebra Programming Language (ZPL) commands to specified Printer Configuration. |
| [`PrintZPL(Text, Record)`](#printzpltext-record) | Send Zebra Programming Language (ZPL) commands to specified Printer Configuration. | 

#### `IsPrinted(): Boolean`

Returns the status of the last print job execution.

##### Remarks

Use GetLastErrorText() to get further information, if a print job has not been executed successfully.

##### Return

True if previous print job has been executed successfully. Otherwise false.

##### Example

```al
procedure MyCustomPrint(documentName: Text; var tempBlob: Codeunit "Temp Blob"; printerConfigurationCode: Text[250])
var
    printerConfiguration: Record "bdev.PrA Printer Configuration";
    printAgent: Codeunit "bdev.Print Agent";
    printJobFailedErr: Label 'The print job failed with following error message: %1', Comment = '%1 = Error message';
begin
    if (not printerConfiguration.Get(printerConfigurationCode)) then
        exit;

    if (not printerConfiguration.Enabled) then
        exit;

    printAgent.PrintPdf(
        documentName,
        tempBlob,
        printerConfiguration
    );

    if (not printAgent.IsPrinter()) then
        Error(
            printJobFailedErr,
            GetLastErrorText()
        );
end;
```

#### `PrintPdf(Text, Codeunit, Record)`

Print PDF file, stored in `Temp Blob` codeunit, at specified `bdev.PrA Printer Configuration`.

##### Remarks

The `documentName` parameter is used only for the history view in the 365 business Print Agent application.

##### Example

```al
printAgent.PrintPdf(documentName, tempBlob, printerConfiguration);
```

#### `PrintPdf(Text, Codeunit, Integer, Record)`

Print specifed number of copies of the PDF file, stored in `Temp Blob` codeunit, at specified `bdev.PrA Printer Configuration`.

##### Remarks

The `documentName` parameter is used only for the history view in the 365 business Print Agent application.

`noOfCopies` parameter specifies the number of __additional__ copies to be printed. For example if you want to print just the original document specify `noOfCopies` = 0, but to print the original document and one copy of the document specify `noOfCopies` = 1.

#### `PrintPdf(Codeunit, Record)`

Print PDF file, stored in `Temp Blob` codeunit, at specified `bdev.PrA Printer Configuration`.

##### Remarks

If the `documentName` parameter is omitted, _External PDF Document_ will be used as the document name. The name of the document is displayed in the history view of the 365 business Print Agent application.

#### `PrintPdf(Codeunit, Integer, Record)`

Print specified number of copies of the PDF file, stored in `Temp Blob` codeunit, at specified `bdev.PrA Printer Configuration`.

##### Remarks

If the `documentName` parameter is omitted, _External PDF Document_ will be used as the document name. The name of the document is displayed in the history view of the 365 business Print Agent application.

`noOfCopies` parameter specifies the number of __additional__ copies to be printed. For example if you want to print just the original document specify `noOfCopies` = 0, but to print the original document and one copy of the document specify `noOfCopies` = 1.

#### `PrintPdf(Text, InStream, Record)`

Print PDF file stream at specified `bdev.PrA Printer Configuration`.

##### Remarks

The `documentName` parameter is used only for the history view in the 365 business Print Agent application.

##### Example

```al
printAgent.PrintPdf(documentName, streamIn, printerConfiguration);
```

#### `PrintPdf(Text, InStream, Integer, Record)`

Print specified number of copies of the PDF file stream at specified `bdev.PrA Printer Configuration`.

##### Remarks

The `documentName` parameter is used only for the history view in the 365 business Print Agent application.

`noOfCopies` parameter specifies the number of __additional__ copies to be printed. For example if you want to print just the original document specify `noOfCopies` = 0, but to print the original document and one copy of the document specify `noOfCopies` = 1.

##### Example

```al
printAgent.PrintPdf(documentName, streamIn, noOfCopies, printerConfiguration);
```

#### `PrintPdf(InStream, Record)`

Print PDF file stream at specified `bdev.PrA Printer Configuration`.

##### Remarks

If the `documentName` parameter is omitted, _External PDF Document_ will be used as the document name. The name of the document is displayed in the history view of the 365 business Print Agent application.

##### Example

```al
printAgent.PrintPdf(streamIn, printerConfiguration);
```

#### `PrintPdf(InStream, Integer, Record)`

Print PDF file stream at specified `bdev.PrA Printer Configuration`.

##### Remarks

If the `documentName` parameter is omitted, _External PDF Document_ will be used as the document name. The name of the document is displayed in the history view of the 365 business Print Agent application.

`noOfCopies` parameter specifies the number of __additional__ copies to be printed. For example if you want to print just the original document specify `noOfCopies` = 0, but to print the original document and one copy of the document specify `noOfCopies` = 1.

##### Example

```al
printAgent.PrintPdf(streamIn, noOfCopies, printerConfiguration);
```

#### `PrintZPL(Text, Text, Record)`

Send ZPL commands to specified `bdev.PrA Printer Configuration`.

> **Important**<br>Sending ZPL commands is only supported for Zebra printers. Sending ZPL commands to other printers may cause unforeseen errors to occur.

##### Remarks

The `documentName` parameter is used only for the history view in the 365 business Print Agent application.

##### Additional Resources

Zebra Programming Language (ZPL) is the command language used by all ZPL compatible printers. It is a command based language used by the printers as instructions to create the images printed on the labels.
You find ZPL Command Information and Details at the following link:

- https://supportcommunity.zebra.com/s/article/ZPL-Command-Information-and-DetailsV2

##### Example

```al
printAgent.PrintZPL(documentName, zplCommands, printerConfiguration);
```

#### `PrintZPL(Text, Record)`

Send ZPL commands to specified `bdev.PrA Printer Configuration`.

> **Important**<br>Sending ZPL commands is only supported for Zebra printers. Sending ZPL commands to other printers may cause unforeseen errors to occur.

##### Remarks

If the `documentName` parameter is omitted, _ZPL commands_ will be used as the document name. The name of the document is displayed in the history view of the 365 business Print Agent application.

##### Additional Resources

Zebra Programming Language (ZPL) is the command language used by all ZPL compatible printers. It is a command based language used by the printers as instructions to create the images printed on the labels.
You find ZPL Command Information and Details at the following link:

- https://supportcommunity.zebra.com/s/article/ZPL-Command-Information-and-DetailsV2

##### Example

```al
printAgent.PrintZPL(zplCommands, printerConfiguration);
```

### Example

#### Print external PDF documents from Record Link

```al
procedure PrintRecordLink(recordLink: Record "Record Link")
var
    printAgent: Codeunit "bdev.Print Agent";
    pdfDocumentStream: InStream;
begin
    if (not recordLink.URL1.EndsWith('.pdf')) then
        Error('Unsupported file type. Direct printing is only available for PDF files.');

    pdfDocumentStream := DownloadPdfDocumentFromUrl(recordLink.URL1);
    printAgent.PrintPdf(recordLink.Description, pdfDocumentStream, GetPrinterConfiguration());
end;

local procedure DownloadPdfDocumentFromUrl(url: Text) pdfDocumentStream: InStream
var
    client: HttpClient;
    response: HttpResponseMessage;
begin
    if (not client.Get(url, response)) then
        Error('Downloading PDF document from URL failed.');

    if (not response.IsSuccessStatusCode()) then
        Error(response.ReasonPhrase());

    if (not response.Content.ReadAs(pdfDocumentStream)) then
        Error('Failed to read content.');
end;

local procedure GetPrinterConfiguration() PrinterConfiguration: Record "bdev.PrA Printer Configuration"
begin
    PrinterConfiguration.Reset();
    PrinterConfiguration.SetRange(Enabled, true);
    PrinterConfiguration.FindFirst();
end;
```

## Events

Additionally `365 business Print Agent` app is providing an codeunit to subscribe to various events.

### Event Publisher

The `bdev.Print Agent Events` codeunit object is providing the following event publisher:

| Event Publisher | Description |
| --- | --- |
| [`PrintAgentClientOfflineEvent(Text, DateTime)`](#printagentclientofflineeventtext-datetime) | Event raised when a Print Agent Client goes offline. |
| [`PrinterOfflineEvent(Text, Text, Text)`](#printerofflineeventtext-text-text) | Event raised when a printer goes offline. |
| [`PrinterFailureEvent(Text, Text, Text)`](#printerfailureeventtext-text-text) | Event raised when a printer goes into failure mode. |

#### `PrintAgentClientOfflineEvent(Text, DateTime)`

Event raised when a Print Agent Client goes offline.

##### Parameter

| Parameter | Description |
| --- | --- |
| `printAgentName` | Name of the print agent client service. | 
| `lastSeen` | Date/time the print agent client service was last seen. | 

#### `PrinterOfflineEvent(Text, Text, Text)`

Event raised when a printer goes offline.

##### Parameter

| Parameter | Description |
| --- | --- |
| `printAgentName` | Name of the print agent client service, hosting the printer. | 
| `printerName` | Name of the printer. | 
| `status` | Current status of the printer, e.g. 'Not available' of 'Offline'. |

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Good to know:</strong>Status can be a comma separated list of status values. Refer to Enum 'bdev.Printer Status' for list of possible status.
</div>

#### `PrinterFailureEvent(Text, Text, Text)`

Event raised when a printer goes into failure mode.

##### Parameter

| Parameter | Description |
| --- | --- |
| `printAgentName` | Name of the print agent client service, hosting the printer. | 
| `printerName` | Name of the printer. | 
| `status` | Current status of the printer, e.g. 'Low Toner'. |

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Good to know:</strong>Status can be a comma separated list of status values. Refer to Enum 'bdev.Printer Status' for list of possible status.
</div>
