> This page is currently not available in the selected language. The page is available in **English**. Please select other language to display.

## Prerequisites

 - Operating System
   - Windows 10 or later (64-bit)
   - Windows Server 2016 or later (64-bit)
 - .NET 6.0
 - An internet connection.
 - [365 business Print Agent Service Installer](https://365businessapi.com/api/SoftwareDownload?AppId=c2e7d99c-d3c6-4ecc-9c6b-7be4048b41a9)

> **Important**<br>If you use Print Agent Service in Direct Connection mode please make sure the Service Port is available through internet from your Microsoft Dynamics 365 Business Central tenant.<br>We strongly recommend to use Print Agent Cloud for SaaS environments of Microsoft Dynamics 365 Business Central.

> **Note**<br>To update your Print Agent Service download and install the [latest version](https://365businessapi.com/api/SoftwareDownload?AppId=c2e7d99c-d3c6-4ecc-9c6b-7be4048b41a9). After the installation your settings are restored. 

## Before you start

Please [read this article](../print-agent-whatis/) to determine which Service Mode you should choose for your scenario.

## Install Print Agent Service software

 1. [Download](https://365businessapi.com/api/SoftwareDownload?AppId=c2e7d99c-d3c6-4ecc-9c6b-7be4048b41a9) the latest version of Print Agent Service.
 2. Save the downloaded ZIP-file to the server or computer you want to use as _print server_ with 365 business Print Agent.
 3. Extract the content of the ZIP-file (e.g. `C:\install`)
 4. Run the setup file and follow the steps to install and launch the Print Agent Service.

## Assisted Setup

During the first start of the 365 business Print Agent application, the assisted setup is started automatically and helps you to perform the basic set up.

 1. Start the **365 business Print Agent** application.
 2. During first start the **365 business Print Agent Configuration Wizard** runs automatically.<br>
 ![Step 1](/assets/images/365-business-print-agent/7fce036f0be32ae6276110bb38a0abc8f5b967f91b12364a4ba2c58292c2ace8.png)  
 3. Select **Next**.
 4. Select your preferred connection type (see [service mode](../print-agent-whatis/#architecture)).<br>
 ![Step 2](/assets/images/365-business-print-agent/c43ddc32c15333a24a27400b82d42c2511fe4f269bea578756a371f35b0e946d.png)  
 5. Select **Next**.
 6. Paste the Tenant ID copied from **Print Agent Setup** page in Microsoft Dynamics 365 Business Central.
 7. Specify a **Name** to identify the client device.
 8. Select **Next**.
 9. Windows service will automatically be created and configured. Additionally the tenant registration for your client device will be performed.<br>
 ![Step 4](/assets/images/365-business-print-agent/61c0bdbed1a0465a3106089a86114b982c3d707fff7c245fc775988092e0dcf3.png)
 1.  Select **Finish**.<br> 
 ![Step 5](/assets/images/365-business-print-agent/8f5fed48cbf63384f8984bd97134af87bd0bc11ddaeaeedebb56b60e6124e6d8.png)  


## Set up Print Agent Service for Print Agent Cloud Service Mode

To connect Print Agent Service and your Microsoft Dynamics 365 Business Central tenant in Print Agent Cloud you need to specify the **Tenant ID** from **Print Agent Setup** page in Microsoft Dynamics 365 Business Central. See [here](../setup/) for additional information.

 1. Start the **365 business Print Agent** application.
 2. Select **Configuration**.
 3. Select **365 business Print Agent Cloud (recommended)**.
 4. Paste the Tenant ID copied from **Print Agent Setup** page in Microsoft Dynamics 365 Business Central.
 5. Specify a **Name** to identify the client device.
 6. Select **Apply** to set up the agent and start the services.

## Set up Print Agent Service for Direct Connection Service Mode

> **Important**<br>Please make sure the Service URL and Service Port is available from your Microsoft Dynamics 365 Business Central environment.<br>We strongly recommend to use Print Agent Cloud for SaaS environments of Microsoft Dynamics 365 Business Central.

 1. Start the **365 business Print Agent** application.
 2. Select **Configuration**.
 3. Select **365 business Print Agent Server**.
 4. Specify **Remote Address** to the name the Print Agent service should bind, or leave asterisks to bind every available IP address of your system.
 5. Specify the **Port** the Print Agent service should listen on (default port `60000`).
 6. Select **Apply** to set up the agent and start the services.