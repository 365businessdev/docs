---
title: Setup
---
The Print Agent Setup contains the configuration for the communication between Microsoft Dynamics 365 Business Central and 365 business Print Agent Service or Cloud, depending on the selected Service Mode.

![Print Agent Setup](/assets/images/365-business-print-agent/646d98fab6c688ad444f61f5397dce86873cda4a90db60986a40ba1eb3911ce9.png)

## Setup parameters

| Field Name | Group | Description |
| --- | --- | --- |
| Service Mode | Print Agent Service Connection | Specifies the operation mode for 365 business Print Agent communication. You can select between direct connection, using the 365 business Print Agent service or 365 business Print Agent Cloud service to connect to one or multiple 365 business Print Agent services with lower maintenance and without necessary network configurations.<br>We recommend to use 365 business Print Agent Cloud service for SaaS environments of Microsoft Dynamics 365 Business Central. |
| Enable Printer Configuration by Default | Defaults | Specifies that newly created printer configurations are enabled by default. This includes system-created printer configurations that are automatically created when a new printer is received from the Print Agent service. |
| Name | Print Agent Client Setup | Specifies the Name of the Print Agent service instance.<br>_(only applicable in Direct Connection service mode)_ |
| Service URL | Print Agent Client Setup | Specifies the Service URL to communicate with the Print Agent Service or to communicate with the Print Agent Cloud Service. In general you do not need to change this address from it's default address.<br>_(only applicable in Direct Connection service mode)_ |
| Service Port | Print Agent Client Setup | Specifies the TCP Port used to communicate with the Print Agent Service.<br>_(only applicable in Direct Connection service mode)_ |
| Authenticated | Print Agent Client Setup | Specifies whether the Print Agent service instance is authenticated with your Microsoft Dynamics 365 Business Central tenant or not.<br>_(only applicable in Direct Connection service mode)_ |
| Connection Status | Status | Shows the connection status of Print Agent Service. |
| Tenant ID | Status | Specifies the Tenant ID used to secure communications between Print Agent and Microsoft Dynamics 365 Business Central. |

## How to set up Print Agent for Cloud Service Mode?

 1. Select **Print Agent Cloud** as **Service Mode**.<br>[Learn more](print-agent-whatis.md#architecture)
 2. Select **Authenticate with Print Agent Service**.

## How to set up Print Agent for Direct Connection Service Mode?

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Note:</strong> The support to connect multiple Print Agent service instances was added with 365 business Print Agent version 18.2.<br>Please check if you have the latest version of 365 business Print Agent to use this feature.
</div>

 1. Select **Direct Connection** as **Service Mode**.<br>[Learn more](print-agent-whatis.md#architecture)
 2. Create new row in **Print Agent Client Setup** list.
 3. Specify **Name** of the Print Agent service instance.
 4. Specify **Service URL** (e.g. IP-Address of the hosting Print Agent service computer).
 5. Specify **Service Port** (default port `60000`).
 6. Select **Yes** at the confirmation dialog to authenticate with the Print Agent service instance.<br>![Confirmation dialog for Print Agent service authentication](/assets/images/365-business-print-agent/a35b2150c883bf9145a1c14e555a9e3bdd18c906ddcef52e7b14a4600699a44a.png)
 7. Repeat steps 2-6 for additional Print Agent service instances.

![Direct Connection - Print Agent Client Setup](/assets/images/365-business-print-agent/ad7903e49277a20398b0c18fa585552dcfe486312d657bc2c78b7e41f2b3d62b.png) 

### See also

 - [Print Agent Architecture](print-agent-whatis.md#architecture)
 - [What is Print Agent?](print-agent-whatis.md)
 - [What is the Print Agent Service?](print-agent-client-whatis.md)
