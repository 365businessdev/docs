# Installation in Dynamics 365 Business Central On-Premise

For Microsoft Dynamics 365 Business Central On-Premise environments, so-called Runtime Packages are provided. These are precompiled extensions that you can directly install in your Microsoft Dynamics 365 Business Central environment.

<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Good to know</strong> It is important to use the correct version for the platform version of Microsoft Dynamics 365 Business Central you are using. Runtime Packages are only compatible with the version they were compiled for.<br>Using them in a different version may lead to errors.
</div>

## Installation

The installation of extensions in Microsoft Dynamics 365 Business Central On-Premise environments is done via Windows PowerShell. To simplify the installation and reduce the potential for errors, we provide a PowerShell script, the **365 business development App Installer**, which you can use to install our extensions for Microsoft Dynamics 365 Business Central.

## Download

The **365 business development App Installer** is available on our GitHub page. There you can find the source code of the PowerShell script and download it. The 365 business development App Installer is licensed under the MIT license. This means you can use the script for your own purposes as long as you comply with the license terms.

<span style="padding-left: 10px;"><a href="https://365businessdev.github.io/downloads/assets/Install-Apps.ps1" target="_blank">365 business development App Installer</a></span>

## Usage

This section explains how to use the **365 business development App Installer** to install our extensions in Microsoft Dynamics 365 Business Central On-Premise environments.

<div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Info</strong> Please note that the 365 business development App Installer must be run in a PowerShell session with elevated privileges (Administrator).<br>
    <br>
    The execution must take place on the Microsoft Dynamics 365 Business Central server, as the Microsoft Dynamics 365 Business Central PowerShell modules are required for the installation.
</div>

 1. Download the <a href="https://365businessdev.github.io/downloads/assets/Install-Apps.ps1" target="_blank">365 business development App Installer</a>.
 2. Start **Microsoft PowerShell** or **Microsoft Dynamics 365 Administration Shell** as Administrator.
 3. Navigate to the download location (e.g., `C:\Run`).
 4. Run the `Install-Apps.ps1` PowerShell script.
	```ps1
	PS C:\Run> .\Install-Apps.ps1 -appIds @(
        "fcfc9bac-8f9b-402f-9e64-30a8287bc78f", # Extension License Manager
        "6fb30c19-f5d6-4e4c-b006-18fba4de1898"  # 365 business Print Agent
    )
	```
 5. Select the Microsoft Dynamics 365 Business Central service instance (_only if more than one instance is installed_).

<div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Info</strong> You can find the Application ID and the full command for the 365 business development App Installer on the respective product's download page.<br>
    <br>
    Go to the <a href="https://downloads.365businessdev.com/" target="_blank">365 business development Downloads</a>.
</div>

### Possible Issues

#### PowerShell Execution Policy

Depending on your setup, you may need to allow the execution of the PowerShell script `Install-Apps.ps1`. Use the `Set-ExecutionPolicy` CmdLet to allow execution. For more information, visit the [documentation](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.security/set-executionpolicy).

```ps1
PS C:\Run> Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Force
```

## How It Works

The **365 business development App Installer** essentially performs the following steps:

1. Identifies the Microsoft Dynamics 365 Business Central service instances installed on the current computer.
2. Selects the Microsoft Dynamics 365 Business Central service instance for installation (_only if more than one instance is found_).
3. Identifies the platform version.
4. Downloads the correct version of the extensions/apps to be installed.
5. Installs the extensions/apps.
6. Synchronizes the schema of the extensions/apps.
7. Updates the extensions/apps (_if an earlier version was already installed_).
8. Uninstalls the old version of the extensions/apps (_if an earlier version was already installed_).

### Example

```console
365 business development App Installer

Checking Prerequisites . . .
Microsoft Dynamics 365 Business Central administration shell is already loaded.

Server Instance BC220 found.

Getting Service Information from BC220


ServerInstance : MicrosoftDynamicsNavServer$BC220
DisplayName    : Dynamics 365 Business Central Server [BC220]
State          : Running
ServiceAccount : NT AUTHORITY\SYSTEM
Version        : 22.0.54512.0
Default        : True


Microsoft Dynamics 365 Business Central version: 22.0.54157.54635

Downloading apps for corresponding service version 22.0.54157.54635 . . .
Invoke download for app id fcfc9bac-8f9b-402f-9e64-30a8287bc78f
Url: https://365businessapi.com/api/SoftwareDownload?AppId=fcfc9bac-8f9b-402f-9e64-30a8287bc78f&version=22.0.54157.54635

Invoke download for app id 6fb30c19-f5d6-4e4c-b006-18fba4de1898
Url: https://365businessapi.com/api/SoftwareDownload?AppId=6fb30c19-f5d6-4e4c-b006-18fba4de1898&version=22.0.54157.54635

Apps to install:
	- C:\Users\Administrator\AppData\Local\Temp\tmp709B.tmp.app
	- C:\Users\Administrator\AppData\Local\Temp\tmp73A9.tmp.app

Running installation for app file C:\Users\Administrator\AppData\Local\Temp\tmp709B.tmp.app . . .
Publishing Extension License Manager on Server Instance BC220
	Version: 1.2.24.8827
Sync schema for Extension License Manager on Server Instance BC220
Install Extension License Manager on Server Instance BC220
Successfully installed Extension License Manager on BC220.

Running installation for app file C:\Users\Administrator\AppData\Local\Temp\tmp73A9.tmp.app . . .
Publishing 365 business Print Agent on Server Instance BC220
	Version: 18.3.125.9182
Sync schema for 365 business Print Agent on Server Instance BC220
Install 365 business Print Agent on Server Instance BC220
Successfully installed 365 business Print Agent on BC220.


Process finished.
```