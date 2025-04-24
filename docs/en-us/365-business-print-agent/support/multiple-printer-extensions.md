# Problem with multiple printer extensions

## Cause

You receive the message that multiple printer extensions are installed on your system. We inform you of this because it can cause issues that may affect the availability and functionality of printing in Microsoft Dynamics 365 Business Central.

Multiple printer extensions can result in a printer name being used multiple times. This is not supported in Microsoft Dynamics 365 Business Central and leads to runtime errors when executing reports and documents, such as:

![Error message due to multiple printer extensions](/assets/images/365-business-print-agent/6b6ff532-4054-48af-9a6a-625d224d6fee.png)

## Solution

Uninstall all printer extensions except for the 365 business Print Agent from your Microsoft Dynamics 365 Business Central environment.

<div class="alert alert-warn">
    <i class="fa-light fa-triangle-exclamation fa-lg"></i> <strong>Important</strong>In Microsoft Dynamics 365 Business Central <strong>On-Premise</strong> environments, printers installed on the Microsoft Dynamics 365 Business Central Server are automatically added.<br>Please uninstall the printers on the Microsoft Dynamics 365 Business Central Server.
</div>

### Step 1: Open Extension Management page

Open the **Extension Management** in Microsoft Dynamics 365 Business Central using **Tell me** window (Alt+Q).

![Extension Management page in Tell me window](/assets/images/365-business-print-agent/9e977878-0149-4d1b-9b43-27d176297c2c.png)

### Step 2: Identify printer extension

Identify the printer extensions that are not the 365 business Print Agent. The 365 business Print Agent is the only printer extension that should be installed in your Microsoft Dynamics 365 Business Central environment. Typical printer extensions are:

 - Universal Print Integration
 - PrintNode Integration

### Step 3: Uninstall printer extension(s)

Select the printer extension(s) that are not the 365 business Print Agent, select the three dots icon and choose **Uninstall**.

![Uninstall extension](/assets/images/365-business-print-agent/c58ed913-44db-4ecd-834a-fa68a29edd8b.png)

### Step 4: Confirm uninstallation

Confirm the uninstallation of the printer extension(s) by selecting **Uninstall**.

