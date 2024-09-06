 
The **Print** plugin in 365 business Proxy Application offers the possibility to access images from the local file system, as well as available network drives or UNC paths.

<div class="alert alert-notice">
    <i class="fa-solid fa-notes"></i> <strong>Good to know:</strong> Are you looking for a fully integrated connection to your local printer infrastructure in Microsoft Dynamics 365 Business Central? Do you want to connect regular printers or label printers and control them natively from Microsoft Dynamics 365 Business Central?
    <br>Then <a href="https://365businessdev.com/produkte-loesungen/365-business-print-agent/" target="_blank">365 business Print Agent</a> is the right solution for you! Find out more and <a href="https://calendly.com/365businessdev" target="_blank">book a free, no-obligation demonstration</a>.
</div>

The Print Plugin is one of the standard plugins of 365 business Proxy Application and can be installed directly via the **Proxy Application Clients** page.

## Functions

### Print (*Print*)

```al
success: Boolean := Print([clientId: Guid,] printerName: Text, file: Codeunit "Temp Blob")
```

**Parameter**

 - `clientId: Guid` (Optional)<br>
   Specifies the ID of the proxy application client on which the operation is to be executed.
 - `printerName: Text`<br>
   Specifies the name of the printer.
 - `file: Codeunit "Temp Blob"`<br>
   Specifies the document to be printed (e.g. PDF file).

**Return**

Returns `true` if the print job was successfully created.

### Print Loakele file (*Print*)

```al
success: Boolean := Print([clientId: Guid,] printerName: Text, filePath: Text)
```

**Parameter**

 - `clientId: Guid` (Optional)<br>
   Specifies the ID of the proxy application client on which the operation is to be executed.
 - `printerName: Text`<br>
   Specifies the name of the printer.
 - `filePath: Text`<br>
   Specifies the path or UNC path for which the file list is to be retrieved.

**Returns

Returns `true` if the print job was successfully created.



