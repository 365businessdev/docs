# What is 365 business Print Agent?

365 business Print Agent is a modern printing solution developed for **Microsoft Dynamics 365 Business Central** to create a seamless printing environment in Microsoft Dynamics 365 Business Central. 
With the 365 business Print Agent you can access your printer infrastructure in Microsoft Dynamics 365 Business Central and create [printer-configuration.md](printer-configuration.md) for each printer within Microsoft Dynamics 365 Business Central.

![365 business Print Agent](/assets/images/365-business-print-agent/print-agent-logo.png)  

365 business Print Agent is supporting both **SaaS** environments and **On-Premises** environments of Microsoft Dynamics 365 Business Central.

It basically consists of at least two components:
- An App for Microsoft Dynamics 365 Business Central, available via Microsoft AppSource
- [Print Agent Service (Connector)](print-agent-client-whatis.md), a Windows service

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg"></i>
    <strong>Good to know</strong>365 business Print Agent supports every printer with Microsoft Windows compatible drivers or printer software.
</div>

## Architecture

365 business Print Agent is able to operate in two separate so-called Service Modes, the **365 business Print Agent Cloud** and the **Direct Connection** mode.

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i>
    <strong>Info</strong>The Print Agent Service and the app support both service modes. The mode can be changed at any time.<br>Please note: Existing configurations in Microsoft Dynamics 365 Business Central must be removed before switching.
</div>

#### Print Agent Cloud _(recommended)_

The **Print Agent Cloud** mode is the _recommended_ operating mode:
Setup is minimal, and no complex adjustments to firewalls or network routes are usually required. After installation and basic setup, the service is immediately ready for use.

Communication between the Print Agent Service and the cloud is realized via state-of-the-art technologies such as SignalR and all data is transmitted in transport-encrypted form.
 
![365 business Print Agent - Cloud Architecture](/assets/images/365-business-print-agent/595f77629b38af2a850494a4d1c0e75ab37d0bde234e206a427cfe5dc37d3180.png)

<div class="alert alert-info">
	<i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i>
    <strong>Info</strong>The 365 business Print Agent Cloud Service is hosted in Germany.<br>
	</strong>No print jobs or printer data are stored</strong>. (Except when using <strong>Secure Print</strong>!)<br>
	The service acts exclusively as an intermediary in real time.  
</div>

| Component | Description |
| --- | --- |
| Microsoft Dynamics 365 Business Central | Microsoft Dynamics 365 Business Central with installed 365 business Print Agent App |
| Print Agent Cloud | Cloud service that controls the communication between the app and one or more Print Agent Services | 
| Print Agent Service | Windows service that handles the communication between printers and the Print Agent Cloud |
| Printer | Printer that are shared via the Print Agent Service |


#### Direct Connection

The **Direct Connection** mode is only recommended for **On-Premise** environments. 
This mode is not ideal for SaaS environments, as additional firewall and network configurations are required to enable secure and reliable access from Microsoft Dynamics 365 Business Central SaaS environments.

![365 business Print Agent - Direct Connection Architecture](/assets/images/365-business-print-agent/cb88a62c787b05b43c69deba7535032968e75f8e42579e64d6c621cc7e994405.png)

| Component | Description |
| --- | --- |
| Microsoft Dynamics 365 Business Central | Microsoft Dynamics 365 Business Central with installed 365 business Print Agent App |
| Print Agent Service | Windows service that handles direct communication between the app and printers |
| Printer | Printer that are shared via the Print Agent Service |

#### How do I choose the right type of connection?

We recommend the **Print Agent Cloud** mode due to its simple setup.  

Here is an overview of the advantages and disadvantages:

| | Print Agent Cloud | Direktverbindung |
| --- | :---: | :---: |
| Support for Business Central Online (SaaS) | <i class="fa-duotone fa-thin fa-circle" style="--fa-secondary-color: #00b7c3"></i> | <i class="fa-duotone fa-thin fa-circle-half-stroke" style="--fa-secondary-color: #00b7c3"></i>* |
| Support for Business Central On-Premise | <i class="fa-duotone fa-thin fa-circle" style="--fa-secondary-color: #00b7c3"></i> | <i class="fa-duotone fa-thin fa-circle" style="--fa-secondary-color: #00b7c3"></i> |
| Running multiple Print Agent services | <i class="fa-duotone fa-thin fa-circle" style="--fa-secondary-color: #00b7c3"></i> | <i class="fa-duotone fa-thin fa-circle" style="--fa-secondary-color: #00b7c3"></i> |
| Secure Print Feature | <i class="fa-duotone fa-thin fa-circle" style="--fa-secondary-color: #00b7c3"></i> | <i class="fa-duotone fa-thin fa-circle" style="--fa-secondary-color: #ffffff"></i> |

<small>* Additional configuration is required to establish the connection from Business Central Online (SaaS) to the locally installed Print Agent Service</small>.

## Prerequisite

- **Operating System**  
  - Windows 10 oder höher (64-Bit)  
  - Windows Server 2016 oder höher (64-Bit)

- **Software**  
  - .NET 8.0

### See also

 - [What is the Print Agent Service?](print-agent-client-whatis.md)
