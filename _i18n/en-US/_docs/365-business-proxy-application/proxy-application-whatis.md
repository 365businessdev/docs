 
365 business Proxy Application is a powerful extension for Microsoft Dynamics 365 Business Cntral that allows you to securely and easily integrate your local resources and systems into Microsoft Dynamics 365 Business Central from the cloud or from on-premise systems, in compliance with the [*Universal Code Initiative*](https://www.microsoft.com/en-us/dynamics-365/blog/it-professional/2022/10/28/the-dynamics-365-business-central-universal-code-initiative-is-live/). From file access to the control of printers, warehouse lifts, scales or card readers. With the flexible and individually expandable [plugin system of 365 business Proxy Application](../plugins/) there are no limits.

![365 business Proxy Application](/assets/images/365-business-proxy-application/proxy-application-logo.png)

365 business Proxy Application supports both SaaS and on-premise environments of Microsoft Dynamics 365 Business Central.

Proxy Application essentially consists of three components, the Microsoft Dynamics 365 Business Central App, which is available via Microsoft AppSource, the [Proxy Application Client](../proxy-application-client-whatis/) and the 365 business Proxy Application Service.

## Architecture

365 business Proxy Application is optimized for use in Business Central Online (SaaS), but is also fully usable in Business Central On-Premise environments.
Proxy Application is designed to minimize the setup required to provide the functionality and connection of Microsoft Dynamics 365 Business Central. As a rule, no complex adjustments to firewalls or network routes are necessary, only an Internet connection is required.

Communication between the proxy application client and the service is realized via state-of-the-art technologies such as SignalR and all data is fully transport-encrypted.

![Proxy Application Architecture](/assets/images/365-business-proxy-application/proxy-application-architecture.png)

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Note:</strong> The 365 business Proxy Application Cloud Service is hosted in Germany and does not store any data. The service acts as an intermediary and establishes a real-time connection to the Proxy Application Client.<br>Your data is completely secure and is never stored or analyzed for any reason.
</div>

| Component | Description |
| --- | --- |
| Microsoft Dynamics 365 Business Central | Microsoft Dynamics 365 Business Central with 365 business Proxy Application App installed. |
| Proxy Application Service | Cloud service that handles communication between the 365 business Proxy Application App and one or more Proxy Application Clients. The service acts as an intermediary and forwards the received data directly to the addressed Proxy Application Client. | 
| Proxy Application Client | A service that executes the installed plugins and establishes the data connection to the Proxy Application Server. |

## Prerequisites

- Operating system
    - Windows 10 or higher (64-bit)
    - Windows Server 2016 or higher (64-bit)
- .NET 6.0
- Internet connection

### See also

- [What is 365 business Proxy Application Client?](../proxy-application-client-whatis/)
- [What are 365 business Proxy Application plugins?](../plugins/)


