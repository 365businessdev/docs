> This page is currently not available in the selected language. The page is available in **English**. Please select other language to display.

The Print Agent Setup contains the configuration for the communication between Microsoft Dynamics 365 Business Central and 365 business Print Agent Service or Cloud, depending on the selected Service Mode.

![Print Agent Setup](/assets/images/365-business-print-agent/e8147ed3f3a4ba5810c3843510ab68734ce904d7857a0f0b3c60b90851aeae41.png)

## Setup parameters

| Field Name | Group | Description |
| --- | --- | --- |
| Service Mode | Print Agent Service Connection | Specifies the operation mode for 365 business Print Agent communication. You can select between direct connection, using the 365 business Print Agent service, or 365 business Print Agent Cloud service to connect to one or multiple 365 business Print Agent services with lower maintenance and without necessary Firewall configurations. We recommend to use 365 business Print Agent Cloud service for SaaS environments of Microsoft Dynamics 365 Business Central. |
| Service URL | Print Agent Service Connection | Specifies the Service URL to communicate with the Print Agent Service or to communicate with the Print Agent Cloud Service. In general you do not need to change this address from it's default address. |
| Service Port | Print Agent Service Connection | Specifies the TCP Port used to communicate with the Print Agent Service.<br>_(only applicable in Direct Connection service mode)_ |
| Connection Status | Status | Shows the connection status between Print Agent and Microsoft Dynamics 365 Business Central. |
| Tenant ID | Status | Specifies the Tenant ID used to secure communications between Print Agent and Microsoft Dynamics 365 Business Central. |

## How to set up Print Agent for Cloud Service Mode?

 1. Select **Print Agent Cloud** as **Service Mode**.<br>[Learn more](../print-agent-whatis/#architecture)
 2. Select **Authenticate with Print Agent Service**.

## How to set up Print Agent for Direct Connection Service Mode?

 1. Select **Direct Connection** as **Service Mode**.<br>[Learn more](../print-agent-whatis/#architecture)
 2. Specify **Service URL** (e.g. IP-Address of the hosting Print Agent Service computer).
 3. Specify **Service Port** (default port `60000`).
 4. Select **Authenticate with Print Agent Service**.

### See also

 - [Print Agent Architecture](../print-agent-whatis/#architecture)
 - [What is Print Agent?](../print-agent-whatis/)
 - [What is the Print Agent Service?](../print-agent-client-whatis/)