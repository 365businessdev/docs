---
title: Get Started
---
#### How do I connect to my Microsoft Dynamics 365 Business Central instance?

After launching the application, the Connection Manager appears by entering the connection details to the Microsoft Dynamics 365 Business Central Server instance.

![Connection Manager](/assets/images/365-business-al-extension-manager/connection-manager.de-DE.png)

The settings can then be saved.

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Note:</strong> For the communication an activated OData-/API-Service and Development Service at the Microsoft Dynamics 365 Business Central Server instance is required.
</div>

Pressing `Connect` will connect to the server instance and download and display the installed extensions.

##### How do I connect to a Business Central instance behind a reverse proxy?

In the Connection Manager, select `Use Traefik` to connect to a Microsoft Dynamics 365 Business Central Server instance running behind a Traefik reverse proxy.

Use only the actual instance name as the instance name. Additions specified as part of the reverse proxy rules will be applied automatically.

##### How do I connect to a Microsoft SaaS sandbox?

Currently, connecting to a Microsoft SaaS Sandbox is not supported for Microsoft Dynamics 365 Business Central.

#### What is the 365 business Automation API app?

When connecting to a Microsoft Dynamics 365 Business Central service instance, a check is made to see if the '365 business Automation API' app extension is installed. This app provides additional functionality for installation, uninstallation and dependency diagrams.

The extension can be installed directly by calling 'Install App Automation API'. This is recommended because otherwise, for example, server runtime information cannot be read by the service.

#### How do I install extensions via AL Extension Manager?

To install one or more extensions or partner apps, please proceed as follows:

1. After connecting to a Microsoft Dynamics 365 Business Central Server instance, click the `upload extension` action in the ribbon.<br>![Upload Extension](/assets/images/365-business-al-extension-manager/upload-extension-button.de-DE.png).

2. A file selection dialog opens, where you can now select as many `*.app` files as you like.

3. The application analyzes the extensions and reads out the dependencies and conditions, such as server runtime version.<br>![Upload Extensions](/assets/images/365-business-al-extension-manager/upload-extension-view.de-DE.png)<br>
   <div class="alert alert-info">
       <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Note:</strong>This will show you warnings and errors directly. So you see for example before the actual installation whether all dependencies are fulfilled or the server runtime version is compatible with the runtime version of the extension. 
   </div>

4. Click on `Upload` to install the selected extensions or partner apps.

#### How do I uninstall extensions via AL Extension Manager?

Clicking on the button `Remove Extension` in the main window of the AL Extension Manager uninstalls the selected extension in Microsoft Dynamics 365 Business Central and unpublishes it*, checking if any dependent extensions are also uninstalled.

![Uninstall dependencies](/assets/images/365-business-al-extension-manager/unpublish-extension.de-DE.png)

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg" style="--fa-secondary-color: #FF0000; --fa-primary-color: #111111; --fa-secondary-opacity: 0.7"></i> <strong>Important:</strong>In order to unpublish an extension, the <code>365 business App Automation API</code> extension (included) is required.
</div>

Here, all dependencies are taken into account and resolved accordingly. If it is necessary to uninstall other AL extensions, the user will be informed accordingly and the uninstallation will be performed automatically.