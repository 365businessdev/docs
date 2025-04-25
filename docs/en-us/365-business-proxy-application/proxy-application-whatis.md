# What is 365 business Proxy Application?

**365 business Proxy Application** is a powerful extension for Microsoft Dynamics 365 Business Central.  
It enables **secure and seamless access to local resources** – whether from the cloud (SaaS) or from On-Premises environments – fully aligned with the [*Universal Code Initiative*](https://www.microsoft.com/en-us/dynamics-365/blog/it-professional/2022/10/28/the-dynamics-365-business-central-universal-code-initiative-is-live.md).

Whether it's **file systems**, **printers**, **storage lifts**, **scales**, or **card readers** – the flexible and extensible [plugin system](plugins.md) offers unlimited integration possibilities.

![365 business Proxy Application](/assets/images/365-business-proxy-application/proxy-application-logo.png)

365 business Proxy Application supports both **Microsoft Dynamics 365 Business Central SaaS** and **On-Premises deployments**.

---

## Components

365 business Proxy Application consists of three core components:

| Component                     | Description |
|------------------------------|-------------|
| **Microsoft Dynamics 365 Business Central App** | App available on Microsoft AppSource, installed directly in Business Central |
| **Proxy Application Service** | Cloud service that securely mediates between the app and local clients |
| **Proxy Application Client**  | Local service that runs plugins and communicates with the cloud service |

---

## Architecture

The solution is designed for **easy setup without complex firewall or network configurations**.  
The only requirement is an active **internet connection**. Data is transmitted securely using **TLS encryption** via **SignalR**.

![Proxy Application Architecture](/assets/images/365-business-proxy-application/proxy-application-architecture.png)

<div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Note</strong>
    The 365 business Proxy Application cloud service is hosted in Germany and stores <b>no persistent data</b>.<br>
    It acts as a broker, establishing an encrypted real-time connection to the Proxy Application Client.
</div>

---
## Requirements

- **Operating System**  
  - Windows 10 or later (64-bit)  
  - Windows Server 2016 or later (64-bit)

- **Software**  
  - .NET 8.0

### See also

- [What is 365 business Proxy Application Client?](proxy-application-client-whatis.md)
- [What are 365 business Proxy Application plugins?](plugins.md)


