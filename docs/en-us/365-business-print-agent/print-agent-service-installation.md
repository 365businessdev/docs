# Install Print Agent Service on Windows

## Prerequisites

- **Operating system**
  - Windows 10 or newer (64-bit)
  - Windows Server 2016 or newer (64-bit)
- **.NET 8.0**
- **Internet connection**
- [365 business Print Agent Service Installer](https://365businessapi.com/api/SoftwareDownload?AppId=c2e7d99c-d3c6-4ecc-9c6b-7be4048b41a9)

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg" style="--fa-secondary-color: #FF0000; --fa-primary-color: #111111; --fa-secondary-opacity: 0.7"></i> <strong>Important:</strong>
	If you use the Print Agent in the <b>Direct Connection</b>, make sure that the service port is accessible from your Dynamics 365 Business Central tenant.<br>
	For SaaS environments, we strongly recommend the use of **Print Agent Cloud**.
</div>

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Note:</strong>
	To update your Print Agent Service download the <a href="https://365businessapi.com/api/SoftwareDownload?AppId=c2e7d99c-d3c6-4ecc-9c6b-7be4048b41a9">current version</a> and install it - your <b>previous settings will be retained</b>.
</div>

## Before you start

Please read the [article](print-agent-whatis.md#architecture) to find out how to choose the right connection type for your scenario.

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg" style="--fa-secondary-color: #FF0000; --fa-primary-color: #111111; --fa-secondary-opacity: 0.7"></i> <strong>Remarks:</strong>
	Enabling <b>network printers</b> can lead to <b>timeouts</b>, as the response times over the network are longer. <br>
	This behavior is a limitation of Windows printer management and cannot be completely circumvented by the 365 business Print Agent.<br><br>
	<b>Recommendation:</b> Install the Print Agent <b>directly on the print server</b> and share locally installed printers there - instead of accessing shared printers from a remote server.
</div>

##  Installing the Print Agent Service

 1. Download the [current version](https://365businessapi.com/api/SoftwareDownload?AppId=c2e7d99c-d3c6-4ecc-9c6b-7be4048b41a9).
 2. Save the ZIP file on the system that is to serve as **Print Server with 365 business Print Agent**.
 3. Unzip the content of the ZIP-file (e.g. `C:\install`)
 4. Run the setup file and follow the installation instructions.

## Assisted Setup on first start

A configuration wizard will automatically start when you first open the application:

 1. Start the **365 business Print Agent** application.
 2. The **365 business Print Agent Configuration Wizard** will launch automatically.<br>
 ![Step 1](/assets/images/365-business-print-agent/7fce036f0be32ae6276110bb38a0abc8f5b967f91b12364a4ba2c58292c2ace8.png)  
 3. Click **Next**.
 4. Choose your preferred connection type (see [service mode](print-agent-whatis.md#architecture)).<br>
 ![Step 2](/assets/images/365-business-print-agent/c43ddc32c15333a24a27400b82d42c2511fe4f269bea578756a371f35b0e946d.png)  
 5. Click **Next**.
 6. Paste the **Tenant-ID** copied from **Print Agent Setup** page in Microsoft Dynamics 365 Business Central.
 7. Enter a **name** to identify the client device.
 8. Click **Next**.
 9. Windows Service will be created, configured, and connected to your tenant.<br>
 ![Step 4](/assets/images/365-business-print-agent/61c0bdbed1a0465a3106089a86114b982c3d707fff7c245fc775988092e0dcf3.png)
 1.  Click **Finish**.<br>
 ![Step 5](/assets/images/365-business-print-agent/8f5fed48cbf63384f8984bd97134af87bd0bc11ddaeaeedebb56b60e6124e6d8.png)  


## Changing the Connection Mode

The following explains how to change the connection type later.

### Setup: Print Agent Cloud (Recommended)

To connect Print Agent Service and your Microsoft Dynamics 365 Business Central tenant in Print Agent Cloud you need to specify the **Tenant ID** from **Print Agent Setup** page in Microsoft Dynamics 365 Business Central. See [here](setup.md) for additional information.

 1. Start the **365 business Print Agent** application.
 2. Select **Settings**.
 3. Select **365 business Print Agent Cloud (recommended)**.
 4. Paste the **Tenant-ID** copied from **Print Agent Setup** page in Microsoft Dynamics 365 Business Central.
 5. Enter a **name** to identify the client device.
 6. Select **Apply** to set up the agent and start the service.

## Setup: Direct Connection

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Important:</strong>
	Ensure that the service URL and port are reachable from your Dynamics 365 Business Central environment.<br>
	For SaaS, we recommend using the <b>Print Agent Cloud</b> Mode.
</div>

 1. Start the **365 business Print Agent** application.
 2. Select **Settings**.
 3. Select **365 business Print Agent Server**.
 4. Specify the **Remote Address** where the Print Agent Service should bind, or leave an asterisk to bind to all available IP addresses on your system.
 5. Specify the **Port** the Print Agent Service should listen on (default port `60000`).
 6. Select **Apply** to set up the agent and start the services.
