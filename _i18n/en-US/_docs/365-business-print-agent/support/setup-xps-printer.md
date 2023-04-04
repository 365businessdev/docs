The use of virtual printers, such as Microsoft Print to PDF or Microsoft XPS Document Writer, is only possible to a limited extent in combination with 365 business Print Agent, as essential information, such as paper trays, does not exist for virtual printers.
365 business Print Agent therefore prevents incompatible virtual printers and displays them as "Not usable".

If you still want to test the function of 365 business Print Agent with a virtual printer, we recommend using an individually installed Microsoft XPS Document Writer (MXDW).

<div class="alert alert-notice">
    <i class="fa-solid fa-lightbulb"></i> <strong>Important</strong> Virtual printers usually call a "Save As" dialog to specify the file path where the virtual printout should be saved.<br>Since the printout is executed by the 365 business Print Agent as a service, in the context of the local system, the display of dialogs is not possible and leads to errors.<br><br>Therefore it is necessary to install an individual printer and configure the file output without additional dialogs.
</div>

The following article describes the setup for an individual Microsoft XPS Document Writer (MXDW) based printer.

## Summary

When choosing the option to Print to File from an application, the user is prompted with a dialog to choose the location and name of the file to be saved. If it is desired to automate the print to file process in such a way as to save the file without user interaction, follow below steps.

1. Go to Devices and Printers.
2. Click on Add Printers.
3. Click on Add a local or network printer with manual settings.<br>![Find a printer by other options dialog](/assets/images/365-business-print-agent/1062d8a1ab2ec8922f457cc23dd6c50d8f6b1bc0f58344d43481ea4b962d11eb.png)
4. Click on Create a new port: Local Port.<br>![Create a new port: Local Port](/assets/images/365-business-print-agent/7ab8a8f098dcb9c886ac9540a3b8e967fe476b3aa49d4d3628d833995079056e.png)
5. You will get a Port Name Box - Type in Path and the file name. for example, `C:\Temp\PrintJob.xps`.
6. Select the Manufacturer - `Microsoft`.
7. Select Printers - `Microsoft XPS Document Writer v4`.<br>![Install the printer driver dialog](/assets/images/365-business-print-agent/9c5fc601bb9842bccf3df601502307b88455e37363aad807034ad5df2a3c9780.png)
8. Select - Use the driver that is currently installed (recommended).
9. Type a name for the printer.
10. Finish.
11. Share the Printer in 365 business Print Agent configuration tool.

<div class="alert alert-notice">
    <i class="fa-solid fa-lightbulb"></i> <strong>Good to know:</strong> In certain cases, it may be necessary to adjust the read and write permissions to the directory defined in step 5, so that the virtual printer is able to write to the directory in the context of the 365 business Print Agent service user.<br>For tests, it may therefore make sense to switch the user for running the 365 business Print Agent service to another user with read and write permissions to the local file system.

Translated with www.DeepL.com/Translator (free version)
</div>

After these steps, any print jobs sent to this printer will automatically be saved to the location specified as the port. Additionally print jobs sent using 365 business Print Agent will work ans save the print out at the specified (see step 5) location.