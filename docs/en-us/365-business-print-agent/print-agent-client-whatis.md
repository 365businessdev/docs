# What is the Print Agent Service?

The **Print Agent Service** handles the communication between:

- Microsoft Dynamics 365 Business Central (Direct Connection Service Mode) 
- and the 365 business Print Agent Cloud (Print Agent Cloud Service Mode).

It receives print jobs from Business Central and executes them on the local system.

Each Print Agent Service is identified by a unique **Client ID (GUID)** and monitors the online status of the shared printers.  
The Print Agent should be installed on the **Windows system** on which the corresponding printers are set up.

<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Good to know</strong>
	The Print Agent Service can work with all printers that are installed locally on the system.<br>
	Enabling <b>network printers</b> can lead to <b>timeouts</b>, as the response times over the network are longer. <br>
	This behavior is a limitation of Windows printer management and cannot be completely circumvented by the 365 business Print Agent.<br><br>
	<b>Recommendation:</b> Install the Print Agent <b>directly on the print server</b> and share locally installed printers there - instead of accessing shared printers from a remote server.
</div>

## Connect Printers to Print Agent

All printers installed on the system automatically appear in the **Printer** view of the 365 business Print Agent application:

![Shared Printer](/assets/images/365-business-print-agent/ad01eb85658694c75716cb5dbce514bd3763fb94b48e505c0288c2bcf8638737.png) 

Select the printers you want to make available for Microsoft Dynamics 365 Business Central.

<div class="alert alert-warn">
    <i class="fa-duotone fa-solid fa-triangle-exclamation fa-xl"></i>
	<strong>Attention</strong>
	Once a printer is shared, removing the share or deleting the printer can lead to <b>failed print jobs</b>.  
	Therefore, manage shared printers with special care.
</div>

## Tasks of the Print Agent Service

The Print Agent Service performs the following tasks:

 1. Management of communication with Dynamics 365 Business Central (Direct Connection / Print Agent Cloud).
 2. Executing incoming print jobs.
 3. Management and monitoring of approved printers.
