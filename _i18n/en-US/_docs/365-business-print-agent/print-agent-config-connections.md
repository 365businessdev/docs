As explained in the section "[What is Print Agent?](../print-agent-whatis/)", the 365 business Print Agent can be run in two different service modes.

The service mode can be changed at any time under the "Settings" menu.

### 365 business Print Agent Cloud (recommended)

Using the 365 business Print Agent Cloud is the recommended method.
The advantage is that it minimizes setup and is ready to use.

The following steps are required to print using the 365 business Print Agent Cloud:

#### Microsoft Dynamics 365 Business Central
1. Install the "365 Business Print Agent" app from the Microsoft AppSource in your Microsoft Dynamics 365 Business Central tenant.
2. After installation, select the "Print Agent Cloud" mode of operation in the 365 business Print Agent app.
3. Select "Authenticate Print Agent" and copy the value "Tenant ID" from the field.

#### 365 business Print Agent Config 
4. In 365 business Print Agent Config, open the "Settings" menu.
5. Select "365 business Print Agent Cloud" option.
6. Paste the "Tenant ID" you copied in step 3 into the appropriate field.
7. Give your Cloud Client a name.
8. Click "Save" to start the setup process.

The following dialog shows the setup process. When this dialog is closed and the "Service Status" displays a green check mark, the setup is complete.

![Settings-Cloud](/assets/images/365-business-print-agent/config/Settings_Cloud_en.PNG)

<div class="alert alert-notice">
    <i class="fa-solid fa-notes"></i> <strong>Important:</strong>If the configuration fails, check that you have followed the steps in the correct order.<br/>Before you can configure in "365 business Print Agent Config", you must first install and set up the 365 business Print Agent app in your Microsoft Dynamics 365 Business Central tenant.
</div>

### 365 business Print Agent Server

Selecting the 365 Business Print Agent Server will establish a direct connection between Microsoft Dynamics 365 Business Central and the current system.
Due to the complexity of configuring firewalling, network routing, etc., this connection is only recommended for use with your own on-premises environment, not for use with Microsoft Dynamics 365 Business Central SaaS environments!


The following steps are required to print using the 365 Business Print Agent Server:

#### Microsoft Dynamics 365 Business Central
1. Install the "365 Business Print Agent" app from the Microsoft AppSource in your Microsoft Dynamics 365 Business Central tenant.
2. Select the "Direct Connection" option, afert installation of the 365 business Print Agent app.
3. Enter a name, the service address and the service port. These correspond to the IP or http(s) address of your internal 365 business Print Agent Server instance.

#### 365 business Print Agent Config 
4. In 365 business Print Agent Config, open the "Settings" menu.
5. Select "365 business Print Agent Server" option.
6. Enter your hostname and port in the "Remote Address" field, on which the 365 business Print Agent Server instance should bind.
7. Click "Save" to start the setup process.

The following dialog shows the setup process. When this dialog is closed and the "Service Status" displays a green check mark, the setup is complete.

![Settings-Server](/assets/images/365-business-print-agent/config/Settings_Server_en.PNG)

<div class="alert alert-notice">
    <i class="fa-solid fa-notes"></i> <strong>Important:</strong>The 365 business Print Agent Server is now configured. However, in order to make it available from outside your network, further steps are necessary (configuration of firewalls, network routes, etc.). Please contact your network/system administrator or service provider for more information.
</div>

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Note:</strong>It is also possible to operate the server using the <strong>HTTPS</strong> protocol. To do this, press the "HTTPS Configuration" button. In the following dialog, you can select between 3 different ways to include the required certificate. You can use a PFX file, a PEM and key file or the Microsoft Windows certificate store.<br/>After applying the settings and clicking "Save", the HTTPS configuration will be set up.
</div>