> This page is currently not available in the selected language. The page is available in **English**. Please select other language to display.

The Print Agent Service handles the communication between Microsoft Dynamics 365 Business Central (Direct Mode) or 365 business Print Agent Cloud (Cloud Mode). Additionally the Print Agent Service is executing the received print jobs from Microsoft Dynamics 365 Business Central.

Each Print Agent Service is identified using a Client ID (GUID) and monitors the Online status of your shared printers. 
The agent should be running on a Windows system on which your printers are installed.

> **Good to know!**<br>Print Agent Service is able to work with every printer installed on the client device (e.g. print server).

## Connect printers to Print Agent

All installed printers on the client device are automatically available in the **Printer** view of the 365 business Print Agent application.

![Shared Printer](/assets/images/365-business-print-agent/ad01eb85658694c75716cb5dbce514bd3763fb94b48e505c0288c2bcf8638737.png)  

Select all printers which you want to make available for printing from Microsoft Dynamics 365 Business Central.

> **Important!**<br>Once a printer is shared please keep in mind, that revoke sharing or delete the printer may result in failing print jobs inside Microsoft Dynamics 365 Business Central.<br>Please be careful managing your shared printers.

## The role of Print Agent Service

The Print Agent Service performs following functions:

 1. Handles communication between your client and Microsoft Dynamics 365 Business Central or 365 business Print Agent Cloud.
 2. Initiates print jobs.
 3. Manage shared printers.