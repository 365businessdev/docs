# Setup

The **Print Agent Setup** contains the configuration for the communication between Microsoft Dynamics 365 Business Central and the 365 business Print Agent Service or the cloud, depending on the selected service mode.

![Print Agent Setup](/assets/images/365-business-print-agent/646d98fab6c688ad444f61f5397dce86873cda4a90db60986a40ba1eb3911ce9.png)

## Setup Parameters

| Field name | Group | Description |
|:---|:---|:---|:---|
| **Service Mode** | Print Agent service connection | Specifies the service mode for communication with the 365 business Print Agent. You can choose between direct connection or Print Agent Cloud. The latter enables a connection to one or more Print Agents with less configuration effort.<br>For Microsoft Dynamics 365 Business Central <strong>SaaS environments</strong>, we recommend Print Agent Cloud. |
| **Enable Printer Configuration by Default** | Defaults | Specifies that newly created printer configuration are activated by default. This includes printer configurations automatically created by the system for newly recognized printers. |
| **Name** | Print Agent Service Setup | Specifies the name of the Print Agent service instance. This field is used to distinguish individual instances.<br>_(only relevant for direct connection service mode)_ |
| **Service URL** | Print Agent Service Setup | Specifies the service URL for communication with the Print Agent Cloud Service. As a rule, this address does not need to be adjusted.<br>_(only relevant for direct connection service mode)_ |
| **Service Port** | Print Agent service setup | Specifies the TCP port used for communication with the Print Agent service.<br>_(only relevant for direct connection service mode)_ |
| **Authenticated** | Print Agent Service Setup | Indicates whether the Print Agent service instance is connected to the Microsoft Dynamics 365 Business Central tenant.<br>_(only relevant for direct connection service mode)_ |
| **Connection Status** | Status | Shows the current connection status between Print Agent and Microsoft Dynamics 365 Business Central. |
| **Tenant ID** | Status | Specifies the Tenant ID used to secure the communication between Print Agent and Microsoft Dynamics 365 Business Central. |

<br>

## Setting up the Print Agent Cloud service mode

 1. Select **Print Agent Cloud** as **Service Mode**.
	<br>[Learn more](print-agent-whatis.md#architecture)
 2. Click **Authenticate with Print Agent**.

<br>

## Set up direct connection as service mode

<div class="alert alert-info">
	<i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Note:</strong>
	Support for multiple Print Agent Service Instances was introduced with version 18.2 of the 365 business Print Agent.<br>
	Please make sure you are using the latest version to use this feature.
</div>

 1. Select **Direct connection** as **Service mode**.
	<br>[Learn more](print-agent-whatis.md#architecture)
 2. Create a new row in the **Print Agent Client Setup** list.
 3. Enter the **Name** of the Print Agent Service Instance.
 4. Enter the **Service URL** (e.g. the IP address of the server on which the Print Agent service is installed).
 5. Enter the **Service Port** (default: TCP port `60000`).
 6. **Confirm the question** about the authentication of the Print Agent Service Instance.<br> 
	![Confirm Print Agent service authentication](/assets/images/365-business-print-agent/a35b2150c883bf9145a1c14e555a9e3bdd18c906ddcef52e7b14a4600699a44a.png)
 7. Repeat steps 2-6 for further Print Agent Service Instances.


![Direct Connection - Print Agent Client Setup](/assets/images/365-business-print-agent/ad7903e49277a20398b0c18fa585552dcfe486312d657bc2c78b7e41f2b3d62b.png) 

### See also

 - [Print Agent Architecture](print-agent-whatis.md#architecture)
 - [What is 365 business Print Agent?](print-agent-whatis.md)
 - [What is the Print Agent Service?](print-agent-client-whatis.md)
