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
| [`PrintPdf(Text, Codeunit, Record)`](#printpdftext-codeunit-record) | Print PDF file, stored in `Temp Blob` codeunit, at specified `bdev.Printer Configuration`. |
| [`PrintPdf(Codeunit, Record)`](#printpdftext-record) | Print PDF file, stored in `Temp Blob` codeunit, at specified `bdev.Printer Configuration`. |
| [`PrintPdf(Text, InStream, Record)`](#printpdftext-instream-record) | Print PDF file stream at specified `bdev.Printer Configuration`. |
| [`PrintPdf(InStream, Record)`](#printpdfinstream-record) | Print PDF file stream at specified `bdev.Printer Configuration`. |
| [`PrintZPL(Text, Text, Record)`](#printzpltext-text-record) | Send Zebra Programming Language (ZPL) commands to specified Printer Configuration. |
| [`PrintZPL(Text, Record)`](#printzpltext-record) | Send Zebra Programming Language (ZPL) commands to specified Printer Configuration. | 

#### `PrintPdf(Text, Codeunit, Record)`

Print PDF file, stored in `Temp Blob` codeunit, at specified `bdev.Printer Configuration`.

##### Remarks

The `documentName` parameter is used only for the history view in the 365 business Print Agent application.

##### Example

```al
printAgent.PrintPdf(documentName, tempBlob, printerConfiguration);
```

#### `PrintPdf(Codeunit, Record)`

Print PDF file, stored in `Temp Blob` codeunit, at specified `bdev.Printer Configuration`.

##### Remarks

If the `documentName` parameter is omitted, _External PDF Document_ will be used as the document name. The name of the document is displayed in the history view of the 365 business Print Agent application.

#### `PrintPdf(Text, InStream, Record)`

Print PDF file stream at specified `bdev.Printer Configuration`.

##### Remarks

The `documentName` parameter is used only for the history view in the 365 business Print Agent application.

##### Example

```al
printAgent.PrintPdf(documentName, streamIn, printerConfiguration);
```

#### `PrintPdf(InStream, Record)`

Print PDF file stream at specified `bdev.Printer Configuration`.

##### Remarks

If the `documentName` parameter is omitted, _External PDF Document_ will be used as the document name. The name of the document is displayed in the history view of the 365 business Print Agent application.

##### Example

```al
printAgent.PrintPdf(streamIn, printerConfiguration);
```

#### `PrintZPL(Text, Text, Record)`

Send ZPL commands to specified `bdev.Printer Configuration`.

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

Send ZPL commands to specified `bdev.Printer Configuration`.

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

local procedure GetPrinterConfiguration() PrinterConfiguration: Record "bdev.Printer Configuration"
begin
    PrinterConfiguration.Reset();
    PrinterConfiguration.SetRange(Enabled, true);
    PrinterConfiguration.FindFirst();
end;
```