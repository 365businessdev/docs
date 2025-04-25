# Print Plugin

The **Print Plugin** of the 365 business Proxy Application enables the printing of PDF documents.

It is one of the **Standard Plugins** and can be installed directly via the **Proxy Application Clients** page in Microsoft Dynamics 365 Business Central.

<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Good to know</strong>
	Are you looking for a <b>fully integration</b> of your local printer infrastructure in <b>Microsoft Dynamics 365 Business Central</b>?<br>
	Would you like to connect regular printers or label printers and control them natively from Microsoft Dynamics 365 Business Central?<br><br>
	Then <a href="https://365businessdev.com/produkte-loesungen/365-business-print-agent/" target="_blank">365 business Print Agent</a> is the right solution for you!<br>
	Find out more and <a href="https://calendly.com/365businessdev" target="_blank">book a free, no-obligation demonstration</a>.
</div>

---

## AL integration

All functions are provided via the code unit `bdev.PRX Proxy Application` (ID 5523630).

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

---

### Print local file (*Print*)

```al
success: Boolean := Print([clientId: Guid,] printerName: Text, filePath: Text)
```

**Parameter**

 - `clientId: Guid` (Optional)<br>
   Specifies the ID of the proxy application client on which the operation is to be executed.
 - `printerName: Text`<br>
   Specifies the name of the printer.
 - `filePath: Text`<br>
   Specifies the document to be printed (e.g. PDF file).

**Returns

Returns `true` if the print job was successfully created.



