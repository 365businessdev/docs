# Get Started

This quick guide explains how to activate 365 business Print Agent and set up a printer.

<div class="alert alert-info">
 <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i>
    <strong>Info</strong>
Test the 365 business Print Agent <strong>free of charge in sandbox environments</strong> of Microsoft Dynamics 365 Business Central. <br>
In addition, there is a <strong>free 30-day trial period for real and on-premises environments</strong> without functional restrictions.
</div>
<br/>

## Prerequisites

 - Microsoft Dynamics 365 Business Central 2021 release wave 1 (18.0) or newer.
 - A Microsoft Windows system (Windows Server 2016 or higher recommended) to run [365 business Print Agent Service](print-agent-client-whatis.md) 
 - An internet connection 

<div class="alert alert-notice">
	<i class="fa-light fa-hand-point-up fa-lg" style="--fa-secondary-color: #FF0000; --fa-primary-color: #111111; --fa-secondary-opacity: 0. 7"></i> <strong>Important note:</strong>
	This quick guide focuses on the <strong>Print Agent Cloud</strong> service mode.<br/>
	For setting up the direct connection, please visit the <a href="setup.md">documentation</a>.
</div>

<br>

## Step 1: Installation of 365 business Print Agent

Open the **Extension Marketplace** in Microsoft Dynamics 365 Business Central and search for **365 business Print Agent**.
Install the app from Microsoft AppSource and wait until the installation is complete.

---

## Step 1.1: Print Agent Setup

Open the **Print Agent Setup** page in Microsoft Dynamics 365 Business Central:

 1. Select **Print Agent Cloud** as **Service Mode**.<br/>
	[Learn more](print-agent-whatis.md#architecture)<br/>
	![Print Agent Setup - Service Mode Selection](/assets/images/365-business-print-agent/646d98fab6c688ad444f61f5397dce86873cda4a90db60986a40ba1eb3911ce9.png)
 2. Select **Authenticate Print Agent**.
 3. Copy the **Tenant ID** value by clicking on the field value.
    
	<div class="alert alert-info">
		<i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i>
    <strong>Info</strong>
		The Tenant ID links the Print Agent Service to your Microsoft Dynamics 365 Business Central environment.<br>
		You will need the Tenant ID later when setting up the Print Agent Service.
    </div>
	
 4. Select **Download software...** to download the [365 business Print Agent Service](print-agent-client-whatis.md).

---

## Step 1.2: Install 365 business Print Agent service

 1. Save the downloaded ZIP file on the Windows system that you want to use as _print server_ with 365 business Print Agent
 2. Unzip the ZIP file (e.g. `C:\install`)
 3. Run the setup file.<br/>
	[learn more](print-agent-service-installation.md) 

---

## Step 1.3: Print Agent Service Setup

 1. Start the **365 business Print Agent** application.
 2. Select **Configure**.
 3. Select **365 business Print Agent Cloud (recommended)**.
 4. Insert the **Tentant ID** from step 1.1.
 5. Specify a **Name** to identify the client.
 6. Select **Apply** to complete the setup. 

---

## Step 2: Set up Printers

To be able to use printers directly in Microsoft Dynamics 365 Business Central, they must be activated.

 1. Open the **365 business Print Agent** application.
 2. Select **Printer** to display all available printers.
 3. Activate all printers that you want to share with **Microsoft Dynamics 365 Business Central**.
    ![Shared Printer](/assets/images/365-business-print-agent/ad01eb85658694c75716cb5dbce514bd3763fb94b48e505c0288c2bcf8638737.png)	

---

## Step 2.1: Get shared Printers

 1. Open the **Printers** in Microsoft Dynamics 365 Business Central.
 2. Select **Get Shared Printers...** to retrieve the shared printers.
    ![Printers page actions](/assets/images/365-business-print-agent/567d50c1f1eb153215a9880611e4bf22f762cf6e6899086d80325209fc99ce9a.png)

---

## Step 2.2: Enable Printer Configuration

<div class="alert alert-notice">
	<i class="fa-light fa-hand-point-up fa-lg"></i>
    <strong>Good to know</strong>
	Shared printers are not directly available in Microsoft Dynamics 365 Business Central. <br>
	Instead, you must create <a href="printer-configuration.md">Printer Configurations</a>, which can then be selected in the <strong>Printer Selection</strong> or in the <strong>Report Request Page</strong>.<br><br/>
	A Printer Configuration is created by the system automatically for each printer, based on the available features of the printer.
</div>

 1. Select **Printer Configurations**.
 2. Select **Edit**.
 3. Verify the system-created configuration.
 4. Select **Enabled** to enable the printer setting.

---

## Step 3: Assign Printer Configuration

To make optimal use of the printers, we recommend setting up a printer (configuration) for specific reports or users.
The configuration is done in Microsoft Dynamics 365 Business Central on the standard **Printer Selection** page.

 1. Open **Printer selection**.  
 2. Select a **User ID** or leave the field empty (for all users).
 3. Enter a **Report ID** or leave it blank (for all reports).
 4. Select the **Printer Name**.
 
<div class="alert alert-info">
	<i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i>
    <strong>Info</strong>
	You can see all enabled printers (configurations) on the **Printer Management** page. <br>
	From here you can open printer configuration or set a printer (configuration) as default.<br>
	<img src="/assets/images/365-business-print-agent/f66b313410695f3a550f126155fc3b9d6abf9c663c5840e9d2c1887948fbfd41.png">
</div>

---

### See also

 - [Print Agent Architecture](print-agent-whatis.md#architecture)
 - [What is the Print Agent Service?](print-agent-client-whatis.md)
 - [Installing Print Agent Service](print-agent-service-installation.md)
 - [Print Agent Setup](setup.md)
 - [Printer](printer.md)
 - [Printer Configuration](printer-configuration.md)
