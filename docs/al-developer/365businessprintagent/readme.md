# 365 Business Print Agent

The `365 Business Print Agent` app adds printing capabilities and integrates your printer infrastructure with Microsoft Dynamics 365 Business Central.

---

## App Dependencies

To create your own implementation, add a dependency to the `365 Business Print Agent` app by including the following in the `dependencies` node of your `app.json` file:

```json
{
  "id": "6fb30c19-f5d6-4e4c-b006-18fba4de1898",
  "name": "365 Business Print Agent",
  "publisher": "365 Business Development",
  "version": "18.0.0.0"
}
```

---

## Implementation

The `365 Business Print Agent` app provides an internal API codeunit to allow integration with custom-specific business processes. For example, you can print external PDF documents to a specified [Printer Configuration](https://docs.365businessdev.com/en-US/365-business-print-agent/printer-configuration/).

---

## Methods

### Overview

The `bdev.Print Agent` codeunit object provides the following public methods:

| Method | Description |
| --- | --- |
| <h7 id="isprinted-boolean">`IsPrinted(): Boolean`</h7> | Returns the status of the last print job execution. |
| <h7 id="printpdftext-codeunit-record">`PrintPdf(Text, Codeunit, Record)`</h7> | Prints a PDF document in Temp Blob at the specified Printer Configuration. |
| <h7 id="printpdftext-codeunit-integer-record">`PrintPdf(Text, Codeunit, Integer, Record)`</h7> | Prints the specified number of copies of the PDF document in Temp Blob at the specified Printer Configuration. |
| <h7 id="printpdfcodeunit-record">`PrintPdf(Codeunit, Record)`</h7> | Prints a PDF document in Temp Blob at the specified Printer Configuration. |
| <h7 id="printpdfcodeunit-integer-record">`PrintPdf(Codeunit, Integer, Record)`</h7> | Prints the specified number of copies of the PDF document in Temp Blob at the specified Printer Configuration. |
| <h7 id="printpdftext-instream-record">`PrintPdf(Text, InStream, Record)`</h7> | Prints a PDF document stream at the specified Printer Configuration. |
| <h7 id="printpdftext-instream-integer-record">`PrintPdf(Text, InStream, Integer, Record)`</h7> | Prints the specified number of copies of the PDF document stream at the specified Printer Configuration. |
| <h7 id="printpdfinstream-record">`PrintPdf(InStream, Record)`</h7> | Prints a PDF document stream at the specified Printer Configuration. |
| <h7 id="printpdfinstream-integer-record">`PrintPdf(InStream, Integer, Record)`</h7> | Prints the specified number of copies of the PDF document stream at the specified Printer Configuration. |
| <h7 id="printzpltext-text-record">`PrintZPL(Text, Text, Record)`</h7> | Sends Zebra Programming Language (ZPL) commands to the specified Printer Configuration. |
| <h7 id="printzpltext-record">`PrintZPL(Text, Record)`</h7> | Sends Zebra Programming Language (ZPL) commands to the specified Printer Configuration. |
| <h7 id="printrawtext-instream-record">`PrintRAW(Text, InStream, Record)`</h7> | Prints RAW data stream at the specified Printer Configuration. |
| <h7 id="printrawinstream-record">`PrintRAW(InStream, Record)`</h7>| Prints RAW data stream at the specified Printer Configuration. |
| <h7 id="printrawtext-record">`PrintRAW(Text, Record)`</h7> | Prints RAW data at the specified Printer Configuration. |

---

### Method Details

#### IsPrinted() procedure

**Description:** Returns the status of the last print job execution.

**Remarks:** Use `GetLastErrorText()` to get further information if a print job has not been executed successfully.

**Return:**
- `True` if the previous print job has been executed successfully.
- `False` otherwise.

**Example:**

```al
procedure MyCustomPrint(documentName: Text; var tempBlob: Codeunit "Temp Blob"; printerConfigurationCode: Text[250])
var
    printerConfiguration: Record "bdev.PrA Printer Configuration";
    printAgent: Codeunit "bdev.Print Agent";
    printJobFailedErr: Label 'The print job failed with the following error message: %1', Comment = '%1 = Error message';
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

    if (not printAgent.IsPrinted()) then
        Error(
            printJobFailedErr,
            GetLastErrorText()
        );
end;
```

#### PrintPdf(Text, Codeunit, Record) procedure

**Description:** Prints a PDF document in Temp Blob at the specified `bdev.PrA Printer Configuration`.

**Remarks:** The `documentName` parameter is used only for the history view in the 365 Business Print Agent application.

**Example:**

```al
printAgent.PrintPdf(documentName, tempBlob, printerConfiguration);
```

#### PrintPdf(Text, Codeunit, Integer, Record) procedure

**Description:** Prints the specified number of copies of the PDF document in Temp Blob at the specified `bdev.PrA Printer Configuration`.

**Remarks:**
- The `documentName` parameter is used only for the history view in the 365 Business Print Agent application.
- The `noOfCopies` parameter specifies the number of __additional__ copies to be printed. For example, if you want to print just the original document, specify `noOfCopies = 0`. To print the original document and one copy, specify `noOfCopies = 1`.

#### PrintPdf(Codeunit, Record) procedure

**Description:** Prints a PDF document in Temp Blob at the specified `bdev.PrA Printer Configuration`.

**Remarks:** If the `documentName` parameter is omitted, _External PDF Document_ will be used as the document name. The name of the document is displayed in the history view of the 365 Business Print Agent application.

#### PrintPdf(Codeunit, Integer, Record) procedure

**Description:** Prints the specified number of copies of the PDF document in Temp Blob at the specified `bdev.PrA Printer Configuration`.

**Remarks:**
- If the `documentName` parameter is omitted, _External PDF Document_ will be used as the document name. The name of the document is displayed in the history view of the 365 Business Print Agent application.
- The `noOfCopies` parameter specifies the number of __additional__ copies to be printed. For example, if you want to print just the original document, specify `noOfCopies = 0`. To print the original document and one copy, specify `noOfCopies = 1`.

#### PrintPdf(Text, InStream, Record) procedure

**Description:** Prints a PDF document stream at the specified `bdev.PrA Printer Configuration`.

**Remarks:** The `documentName` parameter is used only for the history view in the 365 Business Print Agent application.

**Example:**

```al
printAgent.PrintPdf(documentName, streamIn, printerConfiguration);
```

#### PrintPdf(Text, InStream, Integer, Record) procedure

**Description:** Prints the specified number of copies of the PDF document stream at the specified `bdev.PrA Printer Configuration`.

**Remarks:**
- The `documentName` parameter is used only for the history view in the 365 Business Print Agent application.
- The `noOfCopies` parameter specifies the number of __additional__ copies to be printed. For example, if you want to print just the original document, specify `noOfCopies = 0`. To print the original document and one copy, specify `noOfCopies = 1`.

**Example:**

```al
printAgent.PrintPdf(documentName, streamIn, noOfCopies, printerConfiguration);
```

#### PrintPdf(InStream, Record) procedure

**Description:** Prints a PDF document stream at the specified `bdev.PrA Printer Configuration`.

**Remarks:** If the `documentName` parameter is omitted, _External PDF Document_ will be used as the document name. The name of the document is displayed in the history view of the 365 Business Print Agent application.

**Example:**

```al
printAgent.PrintPdf(streamIn, printerConfiguration);
```

#### PrintPdf(InStream, Integer, Record) procedure

**Description:** Prints the specified number of copies of the PDF document stream at the specified `bdev.PrA Printer Configuration`.

**Remarks:**
- If the `documentName` parameter is omitted, _External PDF Document_ will be used as the document name. The name of the document is displayed in the history view of the 365 Business Print Agent application.
- The `noOfCopies` parameter specifies the number of __additional__ copies to be printed. For example, if you want to print just the original document, specify `noOfCopies = 0`. To print the original document and one copy, specify `noOfCopies = 1`.

**Example:**

```al
printAgent.PrintPdf(streamIn, noOfCopies, printerConfiguration);
```

#### PrintZPL(Text, Text, Record) procedure

**Description:** Sends ZPL commands to the specified `bdev.PrA Printer Configuration`.

> **Important**<br>Sending ZPL commands is only supported for Zebra printers. Sending ZPL commands to other printers may cause unforeseen errors.

**Remarks:** The `documentName` parameter is used only for the history view in the 365 Business Print Agent application.

**Additional Resources:**

Zebra Programming Language (ZPL) is the command language used by all ZPL-compatible printers. It is a command-based language used by the printers as instructions to create the images printed on the labels.
You can find ZPL Command Information and Details at the following link:

- https://supportcommunity.zebra.com/s/article/ZPL-Command-Information-and-DetailsV2

**Example:**

```al
printAgent.PrintZPL(documentName, zplCommands, printerConfiguration);
```

#### PrintZPL(Text, Record) procedure

**Description:** Sends ZPL commands to the specified `bdev.PrA Printer Configuration`.

> **Important**<br>Sending ZPL commands is only supported for Zebra printers. Sending ZPL commands to other printers may cause unforeseen errors.

**Remarks:**
- If the `documentName` parameter is omitted, _ZPL commands_ will be used as the document name. The name of the document is displayed in the history view of the 365 Business Print Agent application.
- The `zplCommands` parameter contains the ZPL commands to be sent to the printer.

**Additional Resources:**

Zebra Programming Language (ZPL) is the command language used by all ZPL-compatible printers. It is a command-based language used by the printers as instructions to create the images printed on the labels.
You can find ZPL Command Information and Details at the following link:

- https://supportcommunity.zebra.com/s/article/ZPL-Command-Information-and-DetailsV2

**Example:**

```al
printAgent.PrintZPL(zplCommands, printerConfiguration);
```

#### PrintRAW(Text, InStream, Record) procedure

**Description:** Prints RAW data stream at the specified `bdev.PrA Printer Configuration`.

<div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Info</strong> Available starting version 18.12.230.20314.
</div>

**Remarks:** The `documentName` parameter is used only for the history view in the 365 Business Print Agent application.

**Example:**

```al
printAgent.PrintRAW(documentName, stream, printerConfiguration);
```

#### PrintRAW(InStream, Record) procedure

**Description:** Prints RAW data stream at the specified `bdev.PrA Printer Configuration`.

<div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Info</strong> Available starting version 18.12.230.20314.
</div>

**Remarks:** If the `documentName` parameter is omitted, _External RAW Data_ will be used as the document name. The name of the document is displayed in the history view of the 365 Business Print Agent application.

**Example:**

```al
printAgent.PrintRAW(stream, printerConfiguration);
```

#### PrintRAW(Text, Record) procedure

**Description:** Prints RAW data at the specified `bdev.PrA Printer Configuration`.

<div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Info</strong> Available starting version 18.12.230.20314.
</div>

**Remarks:** If the `documentName` parameter is omitted, _External RAW Data_ will be used as the document name. The name of the document is displayed in the history view of the 365 Business Print Agent application.

**Example:**

```al
printAgent.PrintRAW(rawData, printerConfiguration);
```

---

## Events

### Overview

The `365 Business Print Agent` app provides a codeunit to subscribe to various events.

| Event Publisher | Description |
| --- | --- |
| [`PrintAgentClientOfflineEvent(Text, DateTime)`](#printagentclientofflineeventtext-datetime) | Event raised when a Print Agent Client goes offline. |
| [`PrinterOfflineEvent(Text, Text, Text)`](#printerofflineeventtext-text-text) | Event raised when a printer goes offline. |
| [`PrinterFailureEvent(Text, Text, Text)`](#printerfailureeventtext-text-text) | Event raised when a printer goes into failure mode. |

---

### Event Details

#### `PrintAgentClientOfflineEvent(Text, DateTime)`

**Description:** Event raised when a Print Agent Client goes offline.

**Parameters:**

| Parameter | Description |
| --- | --- |
| `printAgentName` | Name of the print agent client service. |
| `lastSeen` | Date/time the print agent client service was last seen. |

#### `PrinterOfflineEvent(Text, Text, Text)`

**Description:** Event raised when a printer goes offline.

**Parameters:**

| Parameter | Description |
| --- | --- |
| `printAgentName` | Name of the print agent client service hosting the printer. |
| `printerName` | Name of the printer. |
| `status` | Current status of the printer, e.g., 'Not available' or 'Offline'. |

#### `PrinterFailureEvent(Text, Text, Text)`

**Description:** Event raised when a printer goes into failure mode.

**Parameters:**

| Parameter | Description |
| --- | --- |
| `printAgentName` | Name of the print agent client service hosting the printer. |
| `printerName` | Name of the printer. |
| `status` | Current status of the printer, e.g., 'Low Toner'. |
