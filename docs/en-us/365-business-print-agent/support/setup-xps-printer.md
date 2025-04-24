# Virtual Printer Support

The **365 business Print Agent** only provides limited support for virtual printers such as **Microsoft Print to PDF** or **Microsoft XPS Document Writer**.  
This limitation exists because virtual printers do not provide essential attributes like paper trays or supported paper sizes that are required in the context of Business Central.

Therefore, the 365 business Print Agent blocks the use of incompatible virtual printers and marks them as **Unavailable** in the printer list.

If you still want to test the functionality with a virtual printer, we recommend setting up a **manually installed Microsoft XPS Document Writer (MXDW)**.

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Important</strong>
	Virtual printers typically trigger a <b>Save As</b> dialog to specify a file path.<br>
	Since print jobs handled by the 365 business Print Agent run under the <b>Local System</b> account, displaying dialogs is not possible and will result in errors.<br><br>
	To avoid this, a virtual printer must be manually configured with a fixed output path.
</div>

---

## Setting Up a Microsoft XPS Document Writer (MXDW)

The following is the recommended procedure for setting up a **virtual printer with automatic file output**:

### Step-by-Step Guide

1. Open **Devices and Printers**.
2. Click on **Add a printer**.
3. Select **Add a local or network printer with manual settings**<br>
   ![Add Printer Dialog](/assets/images/365-business-print-agent/1062d8a1ab2ec8922f457cc23dd6c50d8f6b1bc0f58344d43481ea4b962d11eb.png)
4. Choose **Create a new port**, select **Local Port** as the type<br>  
   ![Local Port](/assets/images/365-business-print-agent/7ab8a8f098dcb9c886ac9540a3b8e967fe476b3aa49d4d3628d833995079056e.png)
5. In the **Port Name** field, specify the full path and file name for the output, e.g. `C:\Temp\PrintJob.xps`
6. Select the manufacturer: **Microsoft**
7. Select the printer: **Microsoft XPS Document Writer v4**<br>
   ![Driver Selection](/assets/images/365-business-print-agent/9c5fc601bb9842bccf3df601502307b88455e37363aad807034ad5df2a3c9780.png)
8. Click **Use the driver that is currently installed (recommended)**
9. Enter a name for the printer.
10. Complete the setup by clicking **Finish**.
11. Share this printer in the **365 business Print Agent Setup** in Microsoft Dynamics 365 Business Central.

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Good to know:</strong>
	Ensure that the directory specified in Step 5 has <b>read and write permissions</b> for the user running the 365 business Print Agent service.<br>
	For testing purposes, you may temporarily run the service under a user account with full access to that path.
</div>

---

## Result

After successful setup, all print jobs sent to this virtual printer will be **automatically saved to the defined path**.  
This includes all jobs sent from Microsoft Dynamics 365 Business Central via the 365 business Print Agent.