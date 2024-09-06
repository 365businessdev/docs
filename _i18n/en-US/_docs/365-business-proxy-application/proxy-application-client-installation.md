 
## Requirements

- Operating system
    - Windows 10 or higher (64-bit)
    - Windows Server 2016 or higher (64-bit)
- .NET 8.0
- Internet connection
- [365 business Proxy Application Client Installer](https://365businessapi.com/api/SoftwareDownload?AppId=da472ae3-fa8a-406f-bbea-c2aafd5f77d5)

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Note:</strong> To update your Proxy Application Client, download the <a href="https://365businessapi.com/api/SoftwareDownload?AppId=da472ae3-fa8a-406f-bbea-c2aafd5f77d5">latest version</a>. Your settings will be restored after the installation. 
</div>

## Before you start

Please [read the article](../proxy-application-whatis) to find out where to install the 365 business Proxy Application Client.

<div class="alert alert-notice">
    <i class="fa-solid fa-notes"></i> <strong>Good to know:</strong> Please note that to complete the installation of the 365 business Proxy Application Client, you need to specify the <strong>Tenant ID</strong> of your Microsoft Dynamics 365 Business Central environment.<br>
    <br>
    You can find this information in the <strong>Proxy Application Setup</strong>.<br>
    <br>
    For more information, please visit the page <a href="../get-started/">First steps</a>.
</div>

## Installation of the Proxy Application Client

 1. [Download](https://365businessapi.com/api/SoftwareDownload?AppId=da472ae3-fa8a-406f-bbea-c2aafd5f77d5) the latest version of the 365 business Proxy Application Client.
 2. save the downloaded ZIP file on the server or computer you want to use with 365 business Proxy Application.
 3. unzip the ZIP file (e.g. `C:\install`)
 4. start the setup file and follow the instructions
 5. enter the **Tenant ID** of your Microsoft Dynamics 365 Business Central environment and a **Name** for the client, which will help you to identify the client in Microsoft Dynamics 365 Business Central.
    ![Proxy Application Client Installation - Data Entry](/assets/images/365-business-proxy-application/c21483cf5f877db2cc391ffa37013ce6d0fca92b9ee7ecc22d7dbbf7d97403f6.png)
 6. *(Optional)* Enter a domain user and the password with which 365 business Proxy Application Client is to be operated.
    ![Proxy Application Client Installation - Login](/assets/images/365-business-proxy-application/bd510f87-83cc-471f-a2e8-bb1ef9dc428a.png)
    <div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Note:</strong> If you do not specify a user, 365 business Proxy Application Client will run in the <strong>Local System</strong> context.
    </div>
 7. after the installation is complete, the service is started automatically and is immediately available in Microsoft Dynamics 365 Business Central, in the **Proxy Application Clients** page.

## Install proxy application plugins

The plugins for 365 business Proxy Application are installed via Microsoft Dynamics 365 Business Central.

![Proxy Application Client Plugin Installation](/assets/images/365-business-proxy-application/proxyapp-installplugin-en-EN.gif)

 1. open Microsoft Dynamics 365 Business Central.
 2. open **Proxy Application Clients** page.
 3. select **Refresh** to load the available 365 business Proxy Application Clients.
 4. select the desired proxy application client based on the name you assigned in the previous step.
 5. select **Install plugins**.
 6. click **Next**.
 7. select the plugins (e.g. File Plugin) that you want to install.<br>
    ![Plugin Auswahl](/assets/images/365-business-proxy-application/2fd00b9a-6e91-4db9-9418-05a7cb61c22f.png)
 8. click **Next**.
 9. after the successful plugin installation click **Close**.


