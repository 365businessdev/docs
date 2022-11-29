365 business Print Agent is a modern print solution designed for Microsoft Dynamics 365 Business Central, to introduce seamless printing experience in Microsoft Dynamics 365 Business Central. 365 business Print Agent allows you to access your printer infrastructure in Microsoft Dynamics 365 Business Central and specify [Printer Configurations](../printer-configuration/) for each printer which can be assigned or directly used within Microsoft Dynamics 365 Business Central.

![365 business Print Agent](/assets/images/365-business-print-agent/print-agent-logo.png)  

Print Agent is supporting both SaaS environments and On-Premise environments of Microsoft Dynamics 365 Business Central to access your printer infrastructure.

Print Agent basically consists of at least two components, the Microsoft Dynamics 365 Business Central app, available through Microsoft AppSource, and the [Print Agent Service](../print-agent-client-whatis/) (connector). Print Agent supports every printer with Microsoft Windows compatible drivers or printer software.

## Architecture

365 business Print Agent is able to operate in two separate so-called Service Modes, the 365 business Print Agent Cloud and the Direct Connection mode.

> **Good to know!**<br>365 business Print Agent service and the 365 business Print Agent app support both service modes and the modes can be switched every time, after initial set up.<br>Please keep in mind, that existing configurations will be removed prior changing the service mode in Microsoft Dynamics 365 Business Central.

#### Print Agent Cloud _(recommended)_

Using the 365 business Print Agent Cloud is the most _recommended_ way to operate Print Agent, because the necessary setup is reduced to a minimum and usually no complex adjustments to firewalls or network routes are necessary. Basically the 365 business Print Agent Cloud is usually up-and-running out-of-the-box after installation and basic set up.

Communication between the Print Agent Service and the Cloud is implemented via state-of-the-art technologies, such as SignalR, and all data is transmitted in transport encrypted form.

![365 business Print Agent - Cloud Architecture](/assets/images/365-business-print-agent/dac49de2188026388c10da8f28100d6b562b6bed375acee85c8a0f64d53142bc.png)  

> **Good to know!**<br>The 365 business Print Agent Cloud service is hosted in Germany and does not store any print job or printer data. The service acts like a relay and creates a real-time connection to the Print Agent Service (connector).<br>Your data is absolutely safe and will never be stored or analyzed for any reason.

| Component | Description |
| --- | --- |
| Microsoft Dynamics 365 Business Central | Microsoft Dynamics 365 Business Central with the 365 business Print Agent app installed. |
| Print Agent Cloud | Cloud print service that handles the communication between the 365 business Print Agent app and one or more Print Agent Service to process print jobs. | 
| Print Agent Service | A service that handles communication between printers and the Print Agent Cloud. |
| Printer | A printer that needs to be shared using the 365 business Print Agent service (connector). |

#### Direct Connection

The direct connection mode of 365 business Print Agent is only recommended for on-premises environments of Microsoft Dynamics 365 Business Central, due to the much higher effort to configure firewalls, network routes and many more, to allow a secure and reliable access from Microsoft Dynamics 365 Business Central SaaS environments.

![365 business Print Agent - Direct Connection Architecture](/assets/images/365-business-print-agent/76cc532b71007675a8cfd27fc522b1175b08a9ea4f5d7543bf1eae6fe4b401db.png)  

| Component | Description |
| --- | --- |
| Microsoft Dynamics 365 Business Central | Microsoft Dynamics 365 Business Central with the 365 business Print Agent app installed. |
| Print Agent Service | A service that handles communication between printers and the 365 business Print Agent app. |
| Printer | A printer that needs to be shared using the 365 business Print Agent service (connector). |

#### How to decide Service Mode?

Using the 365 Business Print Agent Cloud is the most _recommended_ way to run Print Agent, as the necessary setup is kept to a minimum and typically does not require complex adjustments to firewalls or network routes.
Nevertheless, we would like to show you a few advantages and disadvantages of the respective service modes here to help you decide.

| | Print Agent Cloud | Direct Connection |
| --- | :---: | :---: |
| Support for Business Central Online (SaaS) | <img src="/assets/fontawesome/circle-full.svg"> | <img src="/assets/fontawesome/circle-half.svg">* |
| Support for Business Central On-Premises | <img src="/assets/fontawesome/circle-full.svg"> | <img src="/assets/fontawesome/circle-full.svg"> |
| Running multiple Print Agent services | <img src="/assets/fontawesome/circle-full.svg"> | <img src="/assets/fontawesome/circle-empty.svg"> |


Note * - Additionall configuration is necessary to secure connection from Business Central Online (SaaS) to locally installed Print Agent service.

## Prerequisite

 - Operating System
   - Windows 10 or later (64-bit)
   - Windows Server 2016 or later (64-bit)
 - .NET 6.0

### See also

 - [What is the Print Agent Service?](../print-agent-client-whatis/)
