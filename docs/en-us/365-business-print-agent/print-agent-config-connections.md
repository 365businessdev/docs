# Connection Type

As described in the section **[What is 365 business Print Agent?](print-agent-whatis.md)**, the 365 business Print Agent can be operated in two different connection or service modes.

The mode can be switched at any time via the **Settings** menu.

---

## 365 business Print Agent Cloud (Recommended)

Using the **365 business Print Agent Cloud** is the recommended option.  
It requires minimal setup and is ready to use immediately.

### Setup Steps:

#### In Microsoft Dynamics 365 Business Central
1. Install the **365 business Print Agent** app from [Microsoft AppSource](https://appsource.microsoft.com).
2. In the App, select the service mode **Print Agent Cloud**.
3. Click **Authenticate Print Agent** and copy the **Tenant-ID** from the displayed field.

#### In the 365 business Print Agent Config

1. Open the **Configuration** menu.
2. Select the mode **365 business Print Agent Cloud**.
3. Paste the **Tenant-ID** copied in step 3.
4. Assign a **Name** to the Cloud Client.
5. Click **Save** to start the setup.

A dialog will appear, showing the progress visually.  
Once it closes and the **Service Status** shows a green checkmark, the setup is complete.

![Settings-Cloud](/assets/images/365-business-print-agent/config-tool/Settings_Cloud_en.PNG)

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg" style="--fa-secondary-color: #FF0000; --fa-primary-color: #111111; --fa-secondary-opacity: 0.7"></i> <strong>Important:</strong>
	Please make sure the steps are followed in the correct order.<br/>
    The installation and setup of the 365 business Print Agent App in Microsoft Dynamics 365 Business Central <strong>must be completed before</strong> configuring it in the 365 business Print Agent Config Tool.
</div>

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Note:</strong>
	If your organization requires a <b>Proxy</b> for outbound internet traffic, please refer to this <a href="support/print-agent-proxy.md">support article</a>.
</div>

## 365 business Print Agent Server

This mode creates a **Direct Connection** between Microsoft Dynamics 365 Business Central and your local system.  
Due to the required network configuration (firewalls, routing, etc.), this mode is **only recommended for On-Premises environments**.  
It is **not suitable for SaaS Tenants**!

### Setup Steps:

#### In Microsoft Dynamics 365 Business Central
1. Install the **365 business Print Agent** app from [Microsoft AppSource](https://appsource.microsoft.com).
2. In the app, select the service mode **Direct Connection**.
3. Enter a name as well as the **Service Address** (e.g. IP or HTTPS address) and **Port** of your 365 business Print Agent Server.

#### In the 365 business Print Agent Config
1. Open the **Configuration** menu.
2. Select the mode **365 business Print Agent Server**.
3. Under **Remote Address**, enter the hostname and port the server should bind to.
4. Click **Save** to start the setup.

A visual dialog will appear to illustrate the setup progress.  
Once closed and the **Service Status** shows a green checkmark, the configuration is complete.

![Settings-Server](/assets/images/365-business-print-agent/config-tool/Settings_Server_en.PNG)

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg" style="--fa-secondary-color: #FF0000; --fa-primary-color: #111111; --fa-secondary-opacity: 0.7"></i> <strong>Important:</strong>
	The 365 business Print Agent Server is now completed!<br>
	However, to make the server accessible outside your network, additional steps are required (e.g., firewall and routing configuration). Please contact your IT department or system administrator.
</div>

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Note:</strong>
	The server can optionally run using the <strong>HTTPS</strong> protocol.<br/>
	Click <b>HTTPS Configuration</b> and choose from three certificate options:
	* PFX file
    * PEM + Key file
    * Windows certificate store
	
	
	After saving, the HTTPS configuration will be applied automatically.
</div>

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Note:</strong>
	If your organization requires a <b>Proxy</b> for outbound internet traffic, please refer to this <a href="support/print-agent-proxy.md">support article</a>.
</div>