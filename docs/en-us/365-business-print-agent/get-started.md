---
title: Get Started
---
This quick start guide explains how to enable 365 business Print Agent and set up a printer.

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Good to know:</strong> Explore 365 business Print Agent with no costs in Sandbox environments of Microsoft Dynamics 365 Business Central. Additionally for production and on-premises environments there is a free 30-days trial period with no feature limitations.
</div>

## Prerequisites

 - Microsoft Dynamics 365 Business Central 2021 release wave 1 (18.0) or later.
 - A Microsoft Windows client device for running [365 business Print Agent Service](print-agent-client-whatis.md).
 - An internet connection.

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg fa-lg" style="--fa-secondary-color: #FF0000; --fa-primary-color: #111111; --fa-secondary-opacity: 0.7"></i> <strong>Important:</strong>This quick start guide is focusing on Print Agent Cloud service mode.<br>For additional information about set up Direct Connection service mode please visit <a href="setup.md">documentation</a>.
</div>

## Step 1: Install 365 business Print Agent

Open the **Extension Marketplace** in Microsoft Dynamics 365 Business Central and search for **365 business Print Agent**.
Install the app from Microsoft AppSource and wait until installation is completed.

## Step 1.1: Print Agent Setup

To set up Print Agent open the **Print Agent Setup** page in Microsoft Dynamics 365 Business Central,

 1. Select **Print Agent Cloud** as **Service Mode**.<br>[Learn more](print-agent-whatis.md#architecture)<br>![Print Agent Setup - Service Mode Selection](/assets/images/365-business-print-agent/646d98fab6c688ad444f61f5397dce86873cda4a90db60986a40ba1eb3911ce9.png)
 2. Select **Authenticate with Print Agent Service**.
 3. Copy the **Tenant ID** value by selecting the field value.
    <div class="alert alert-info"><i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Note:</strong> The Tenant ID is used to couple the Print Agent service with your Microsoft Dynamics 365 Business Central environment. You'll need the Tenant ID later in set up Print Agent service.</div>
 4. Select **Download Service...** to download the latest version of [365 business Print Agent service](print-agent-client-whatis.md).

## Step 1.2: Install 365 business Print Agent service

 1. Save the downloaded ZIP-file to the server or computer you want to use as _print server_ with 365 business Print Agent.
 2. Extract the content of the ZIP-file (e.g. `C:\install`)
 3. Run the setup file.<br>[Learn more](print-agent-service-installation.md)

## Step 1.3: Print Agent Service Setup

 1. Start the **365 business Print Agent** application.
 2. Select **Configuration**.
 3. Select **365 business Print Agent Cloud (recommended)**.
 4. Paste the Tenant ID copied in step 1.1.
 5. Specify a **Name** to identify the client device.
 6. Select **Apply** to complete your set up of your 365 business Print Agent service.

## Step 2: Set up printers

To set up and use printers directly in Microsoft Dynamics 365 Business Central you've to specify which printers, you want to share with Microsoft Dynamics 365 Business Central.

 1. Open **365 business Print Agent** application.
 2. Select **Printer** to view all available printers on your client device.
 3. Select each printer you want to share with Microsoft Dynamics 365 Business Central.
    ![Shared Printer](/assets/images/365-business-print-agent/ad01eb85658694c75716cb5dbce514bd3763fb94b48e505c0288c2bcf8638737.png)  

## Step 2.1: Get shared printers

 1. Open Microsoft Dynamics 365 Business Central.
 2. Open **Printers** page.
 3. Select **Get Shared Printer...** to retrieve the shared printers.
    ![Printers page actions](/assets/images/365-business-print-agent/567d50c1f1eb153215a9880611e4bf22f762cf6e6899086d80325209fc99ce9a.png)

## Step 2.2: Enable Printer Configuration

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg" style="--fa-secondary-color: #FF0000; --fa-primary-color: #111111; --fa-secondary-opacity: 0.7"></i> <strong>Good to know:</strong>Shared printers are not directly available in Microsoft Dynamics 365 Business Central. Instead it's necessary to create <a href="printer-configuration.md">Printer Configurations</a> which will be assigned in <b>Printer Selection</b> or selected in Report Request Page. You can create multiple printer configurations based on the capabilities you want to use in a specific scenario (e.g. duplex-mode).<br><br>For each printer a system-created printer configuration is automatically created. This configuration is created with the available features of the printer.
</div>

 1. Select **Printer Configurations**.
 2. Select **Edit**.
 3. Verify the system-created configuration.
 4. Select **Enabled** to activate the printer configuration.

## Step 3: Assign Printer Configuration

To get the most out of direct printing capabilities it's good to set up a printer (configuration) for specific reports or users. The configuration takes place in Microsoft Dynamics 365 Business Central standard page **Printer Selection**.

 1. Open **Print Selection**.
 2. Select **User ID** or leave blank to assign the printer (configuration) for every user.
 3. Specify **Report ID** or leave blank to assign the printer (configuration) for every report.
 4. Select **Printer Name** by choosing from the Drop-down menu.

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Good to know:</strong> Microsoft Dynamics 365 Business Central provides a additional page, called <b>Printer Management</b>. Here you find every printer (configuration) enabled in Print Agent. From here you can easily open the printer configuration or set the selected printer (configuration) as default.<br><img src="/assets/images/365-business-print-agent/f66b313410695f3a550f126155fc3b9d6abf9c663c5840e9d2c1887948fbfd41.png">
</div>

### See also

 - [Print Agent Architecture](print-agent-whatis.md#architecture)
 - [What is the Print Agent Service?](print-agent-client-whatis.md)
 - [Installing Print Agent Service](print-agent-service-installation.md)
 - [Print Agent Setup](setup.md)
 - [Printer](printer.md)
 - [Printer Configuration](printer-configuration.md)
