# Get Started

This quick guide explains how to install and set up 365 business Proxy Application in your Microsoft Dynamics 365 Business Central environment.

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i>
    <strong>Info</strong> Test the 365 business Proxy Application, including all standard plugins, at no cost in sandbox environments of Microsoft Dynamics 365 Business Central. In addition, there is a free 30-day trial period without functional restrictions for real and on-premises environments.
</div>

## Prerequisites

 - Microsoft Dynamics 365 Business Central 2021 release wave 1 (18.0) or newer.
 - A Microsoft Windows client device to run [365 business Proxy Application Client](https://365businessapi.com/api/SoftwareDownload?AppId=da472ae3-fa8a-406f-bbea-c2aafd5f77d5).
 - An internet connection.

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg"></i>
    <strong>Good to know</strong>This quick guide describes the setup and commissioning of 365 business Proxy Application with the file plugin.<br/>For more information on setting up other plugins, please visit the <a href="plugins.md">documentation</a>.
</div>

<br/>

## Step 1: Installation of 365 business Proxy Application

Open the **Marketplace for Extensions** in Microsoft Dynamics 365 Business Central and search for **365 business Proxy Application**.
Install the app from Microsoft AppSource and wait until the installation is complete.

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i>
    <strong>Info</strong>The app packages for your Microsoft Dynamics 365 Business Central <strong>On-Premise</strong> environment can be found in our <a href="https://downloads.365businessdev.com/de-DE/365-business-proxy-application/" target="_blank">Downloads</a>.
</div>

<br/>

### Step 1.1: Proxy application setup

To set up the 365 business Proxy Application, open the **Proxy Application Setup** page in Microsoft Dynamics 365 Business Central.

 1. select **Authenticate** to connect your Microsoft Dynamics 365 Business Central environment to 365 business Proxy Application Service.
 2. copy the **Tenant ID** value by clicking on the field value.
    <div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i>
    <strong>Info</strong> Specifies the Tenant ID used to secure the communication between the Proxy Application Service and Microsoft Dynamics 365 Business Central.
    </div>
 4. select **Download client...** to download [365 business Proxy Application Client](proxy-application-client-whatis.md).

<br/>

### Step 1.2: Installing 365 business Proxy Application Client

 1. save the downloaded ZIP file on the server or computer you want to use with 365 business Proxy Application.
 2. unpack the ZIP file (e.g. `C:\install`)
 3. start the setup file and follow the instructions
 4. enter the **Tenant ID** from the previous step and a **Name** for the client, which will help you to identify the client in Microsoft Dynamics 365 Business Central.
 5. *(Optional)* Enter a domain user and the password with which 365 business Proxy Application Client is to be operated.
    <div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i>
    <strong>Info</strong> If you do not specify a user, 365 business Proxy Application Client will run in the <strong>Local System</strong> context.
    </div>

## Step 2: Set up Proxy Application Client

To be able to access the Proxy Application Clients directly in Microsoft Dynamics 365 Business Central, the clients must be activated.

 1. open the **Proxy Application Setup** in Microsoft Dynamics 365 Business Central.
 2. when opening the page, all available 365 business Proxy Application Clients are automatically retrieved and displayed in the setup:
    ![Proxy Application Setup](/assets/images/365-business-proxy-application/9c4905bab8db474caa704353d2772447fdcea02339e7dbb5ec2e138974df12dd.png)  
 3. select **Enabled** to enable a proxy application client for use.
 4. click on the **Name** of the Proxy Application Client to open the map.
 5. in the Proxy Application Client card you will find the **Client ID** field.
    <div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i>
    <strong>Info</strong> The Client ID is used to address the Proxy Application service. 365 business Proxy Application provides additional functions to return the clients that support a specific plugin. In this quick guide, however, it is assumed that the specific client ID is used.
    </div>

### Step 2.1: Install Proxy Application Client Plugins

![Proxy Application Client Plugin Installation](/assets/images/365-business-proxy-application/proxyapp-installplugin-de-DE.gif)

 1. open Microsoft Dynamics 365 Business Central.
 2. open **Proxy Application Clients** page.
 3. select **Refresh** to load the available 365 business Proxy Application Clients.
 4. select the desired proxy application client based on the name you assigned in the previous step.
 5. select **Install plugins**.
 6. click **Next**.
 7. select the plugins (e.g. File Plugin) that you want to install.<br>
    ![Plugin Selection](/assets/images/365-business-proxy-application/2fd00b9a-6e91-4db9-9418-05a7cb61c22f.png)
 8. click **Next**.
 9. after the successful plugin installation, click **Close**.

### Step 2.2: Standard clients for plugin *(Optional)*

To simplify the control of clients, it is possible to define a standard client for plugins. This allows you to enable 365 business Proxy Application to automatically select the client for the current plugin.

 1. open Microsoft Dynamics 365 Business Central.
 2. open **Proxy Application Setup** page.
 3. select **Associated**.
 4. select **Standard Clients**.
 5. select the **Plugin** for which you want to set a default client (e.g. File Plugin).
 6. select the **Name** of the client.

![Proxy Application Setup - Default Client for Plugin](/assets/images/365-business-proxy-application/3fafd304-0799-4d9a-a079-a6a13e1a27ff.png)

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i>
    <strong>Info</strong>The selection of clients is only possible if the selected plugin is already installed on the client.
</div>

## Step 3: Implementing the file plugin

This quick guide explains how to write a file to your local file system using 365 business Proxy Application. The following is an AL extension for Microsoft Dynamics 365 Business Central. This quick guide assumes that the AL project already exists and only needs to be extended to include integration with 365 business Proxy Application.

### Step 3.1: Dependency on 365 business Proxy Application

To be able to access the functions in 365 business Proxy Application, your AL extension must define a dependency to 365 business Proxy Application.

 1. open the application manifest (`app.json`) in Visual Studio Code.  
 2. add the following entry to the JSON token `dependencies`:
    ```json
    [..],
    "dependencies": [
        {
        "id": ‘ae907ccb-e4a3-4594-9955-bd931031af8f’,
        "name": ‘365 business Proxy Application’,
        "publisher": ‘365 business development’,
        "version": "18.0.0.0"
        }
    ],
    [..]
    ```
 3. execute the command **AL: Download symbols**.

### Step 3.2: AL implementation

In the following, a file is written as an example and then read again. This quick guide assumes that a file with the content "Hello, World!" is to be written as `test.txt` in the path `C:\temp`.

Detailed documentation can be found in the [Plugin documentation](plugins.md).

 1. open an existing code unit or create a new AL file in which the AL code can be developed
 2. insert the following AL code:
    ```al
    procedure WriteAndReadHelloWorldFile()
    var
        proxyApp: Codeunit "bdev.PRX Proxy Application";
        file: Codeunit "Temp Blob";
        filePath: Text;
        sampleText: Label 'Hello, World!', Locked = true;
    begin
        // write "Hello World" into the text file
        CreateFileInTempBlob(file, sampleText);

        // set file path
        filePath := 'c:\temp\test.txt';

        // write file to filesystem
        if (not proxyApp.PostFile(
            filePath,
            file
        )) then
            Error('Failed to write file!\Error: %1', GetLastErrorText());

        Clear(file); // reset temp blob

        // read file from filesystem
        file := proxyApp.GetFile(
            filePath
        );

        // compare content with expected content
        if (ReadContentFromTempBlob(file) <> sampleText)then
            Error('The file content does not match.')
        else
            Message('The file has been written.');
    end;

    local procedure CreateFileInTempBlob(var file: Codeunit "Temp Blob", fileContent: Text)
    var
        stream: OutStream;
    begin
        file.CreateOutStream(stream, TextEncoding::UTF8);
        stream.WriteText(fileContent);
    end;


    local procedure ReadFile(filePath: Text): Text
    var
        proxyApp: Codeunit "bdev.PRX Proxy Application";
        file: Codeunit "Temp Blob";
    begin
        // invoke Proxy Application plugin
        file := proxyApp.GetFile(
            filePath
        );

        exit(ReadContentFromTempBlob(file));
    end;
    ```
 3. execute the function `WriteAndReadHelloWorldFile()`.

# See also

 - [Proxy Application Architecture](proxy-application-whatis.md#architecture)
 - [What is the Proxy Application Service](proxy-application-client-whatis.md)
 - [Proxy Application Service Installation](proxy-application-client-installation.md)
 - [Proxy Application Setup](setup.md)


