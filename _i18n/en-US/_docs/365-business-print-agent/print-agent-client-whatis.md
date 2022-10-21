The Print Agent Service is a component that handles the communication with Microsoft Dynamics 365 Business Central (Direct Mode) or 365 business Print Agent Cloud (Cloud Mode). Additionally the Print Agent Service is executing the received print jobs from Microsoft Dynamics 365 Business Central.

Each Print Agent Service is identified using a Client ID (GUID) and monitors the Online status of shared printers of your printer infrastructure. The agent should be installed on a computer running Windows where printers are installed to connect these printers with 365 business Print Agent Cloud or Microsoft Dynamics 365 Business Central.

> **Good to know!**<br>Print Agent Service is able to work with every printer installed on the client device (e.g. print server).

## Connect printers to Print Agent

All installed printers on the client device, where Print Agent Service is installed, are automatically available in the **Printer** view of the 365 business Print Agent application.

![Shared Printer](/assets/images/365-business-print-agent/ad01eb85658694c75716cb5dbce514bd3763fb94b48e505c0288c2bcf8638737.png)  

By selecting the checkmark in the starting column of the list of printers you are sharing the printer inside 365 business Print Agent and make it available from Microsoft Dynamics 365 Business Central.

> **Important!**<br>Once a printer is shared please keep in mind, that revoke sharing or delete the printer may result in failing print jobs inside Microsoft Dynamics 365 Business Central.<br>Please be careful managing your shared printers.

## The role of Print Agent Service

The Print Agent Service performs following main functions:

 1. Handle communication between Microsoft Dynamics 365 Business Central or 365 business Print Agent Cloud.
 2. Execute print jobs (actual printing).
 3. Manage shared printers.