# Install Print Agent Service on Windows

## Prerequisites

 - Operating System
   - Windows 10 or later (64-bit)
   - Windows Server 2016 or later (64-bit)
 - .NET 8.0
 - An internet connection.
 - [365 business Print Agent Service Installer](https://365businessapi.com/api/SoftwareDownload?AppId=c2e7d99c-d3c6-4ecc-9c6b-7be4048b41a9)

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg"></i> <strong>Important</strong>If you use Print Agent Service in Direct Connection mode please make sure the Service Port is available through internet from your Microsoft Dynamics 365 Business Central tenant.<br>We strongly recommend to use Print Agent Cloud for SaaS environments of Microsoft Dynamics 365 Business Central.
</div>

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i> <strong>Note</strong> To update your Print Agent Service download and install the <a href="https://365businessapi.com/api/SoftwareDownload?AppId=c2e7d99c-d3c6-4ecc-9c6b-7be4048b41a9">latest version</a>. After the installation your settings are restored. 
</div>

## Before you start

Please [read this article](print-agent-whatis.md) to determine which Service Mode you should choose for your scenario.

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg"></i> <strong>Remarks</strong> Sharing network printers in 365 business Print Agent may cause timeouts as the actual printer takes longer to respond. This is a common problem with Windows printer management and cannot be solved by 365 business Print Agent.<br><br>We strongly recommend installing 365 business Print Agent directly on print servers to share locally installed printers instead of sharing printers from a remote print server.
</div>

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
 4. Select your preferred connection type (see [service mode](print-agent-whatis.md#architecture)).<br>
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

To connect Print Agent Service and your Microsoft Dynamics 365 Business Central tenant in Print Agent Cloud you need to specify the **Tenant ID** from **Print Agent Setup** page in Microsoft Dynamics 365 Business Central. See [here](setup.md) for additional information.

 1. Start the **365 business Print Agent** application.
 2. Select **Configuration**.
 3. Select **365 business Print Agent Cloud (recommended)**.
 4. Paste the Tenant ID copied from **Print Agent Setup** page in Microsoft Dynamics 365 Business Central.
 5. Specify a **Name** to identify the client device.
 6. Select **Apply** to set up the agent and start the services.

## Set up Print Agent Service for Direct Connection Service Mode

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i> <strong>Important</strong> Please make sure the Service URL and Service Port is available from your Microsoft Dynamics 365 Business Central environment.<br>We strongly recommend to use Print Agent Cloud for SaaS environments of Microsoft Dynamics 365 Business Central.
</div>

 1. Start the **365 business Print Agent** application.
 2. Select **Configuration**.
 3. Select **365 business Print Agent Server**.
 4. Specify **Remote Address** to the name the Print Agent service should bind, or leave asterisks to bind every available IP address of your system.
 5. Specify the **Port** the Print Agent service should listen on (default port `60000`).
 6. Select **Apply** to set up the agent and start the services.
