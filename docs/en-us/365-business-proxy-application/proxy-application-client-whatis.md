# What is the Proxy Application Client?

The **365 business Proxy Application Client** is a Windows service that runs local [plugins](plugins.md) and establishes a secure connection to the **Proxy Application Cloud Service**.

Each client is uniquely identified by a **Client ID (GUID)** and is responsible for executing the tasks specifically addressed to it by Microsoft Dynamics 365 Business Central.

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg"></i>
    <strong>Good to know</strong>
    By default, the 365 business Proxy Application Client runs under the <strong>Local System</strong> account.<br>
    Some plugins (e.g. the File Plugin) may require execution under a domain user account.
</div>

---

## Responsibilities of the 365 business Proxy Application Client

The Proxy Application Client performs two core functions:

1. Establishes and manages secure communication with the **365 business Proxy Application Cloud Service**
2. Executes installed **plugins** and processes incoming jobs (e.g. writing files)

---

## See also

- [What is 365 business Proxy Application?](proxy-application-whatis.md)
- [What are 365 business Proxy Application Plugins?](plugins.md)

