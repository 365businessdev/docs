---
title: What is the Print Agent Service?
---
The Print Agent Service handles the communication between Microsoft Dynamics 365 Business Central (Direct Mode) or 365 business Print Agent Cloud (Cloud Mode). Additionally the Print Agent Service is executing the received print jobs from Microsoft Dynamics 365 Business Central.

Each Print Agent Service is identified using a Client ID (GUID) and monitors the Online status of your shared printers. 
The agent should be running on a Windows system on which your printers are installed.

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg" style="--fa-secondary-color: #FF0000; --fa-primary-color: #111111; --fa-secondary-opacity: 0.7"></i> <strong>Good to know:</strong>Print Agent Service is able to work with every printer installed on the client device (e.g. print server).<br>Sharing network printers in 365 business Print Agent may cause timeouts as the actual printer takes longer to respond. This is a common problem with Windows printer management and cannot be solved by 365 business Print Agent.<br><br>We strongly recommend installing 365 business Print Agent directly on print servers to share locally installed printers instead of sharing printers from a remote print server.
</div>

## Connect printers to Print Agent

All installed printers on the client device are automatically available in the **Printer** view of the 365 business Print Agent application.

![Shared Printer](/assets/images/365-business-print-agent/ad01eb85658694c75716cb5dbce514bd3763fb94b48e505c0288c2bcf8638737.png)  

Select all printers which you want to make available for printing from Microsoft Dynamics 365 Business Central.

<div class="alert alert-warn">
    <i class="fa-light fa-triangle-exclamation fa-lg"></i> <strong>Important:</strong>Once a printer is shared please keep in mind, that revoke sharing or delete the printer may result in failing print jobs inside Microsoft Dynamics 365 Business Central.<br>Please be careful managing your shared printers.
</div>

## The role of Print Agent Service

The Print Agent Service performs following functions:

 1. Handles communication between your client and Microsoft Dynamics 365 Business Central or 365 business Print Agent Cloud.
 2. Initiates print jobs.
 3. Manage shared printers.
