#### Cause

You receive the message that multiple printer extensions are installed on your system. We inform you of this because it can cause issues that may affect the availability and functionality of printing in Microsoft Dynamics 365 Business Central.

Multiple printer extensions can result in a printer name being used multiple times. This is not supported in Microsoft Dynamics 365 Business Central and leads to runtime errors when executing reports and documents, such as:

![Error message due to multiple printer extensions](/assets/images/365-business-print-agent/6b6ff532-4054-48af-9a6a-625d224d6fee.png)

#### Solution

Uninstall all printer extensions except for the 365 business Print Agent from your Microsoft Dynamics 365 Business Central environment.

<div class="alert alert-warn">
    <i class="fa-solid fa-triangle-exclamation"></i> <strong>Important:</strong>In Microsoft Dynamics 365 Business Central <strong>On-Premise</strong> environments, printers installed on the Microsoft Dynamics 365 Business Central Server are automatically added.<br>Please uninstall the printers on the Microsoft Dynamics 365 Business Central Server.
</div>