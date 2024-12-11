To use the 365 business API Cloud services, communication between Microsoft Dynamics 365 Business Central and the 365 business API is required. To ensure communication, it may be necessary to configure firewall settings.

<div class="alert alert-notice">
    <i class="fa-solid fa-notes"></i> <strong>Good to know:</strong> Firewall settings or similar are only required in Microsoft Dynamics 365 Business Central <strong>On-Premise</strong> environments.<br>
    In Microsoft Dynamics 365 Business Central <strong>Cloud</strong> environments, no firewall settings or other adjustments are required.
</div>

### Resources

In the context of communication between Microsoft Dynamics 365 Business Central and the 365 business API, the following DNS names, ports, and protocols are used:

| DNS Name | Port | Protocol | Description |
| --- | --- | --- | --- |
| `api.365businessapi.com` | `443` | `HTTPS` | API endpoint for accessing the 365 business API. |
| `license.365businessapi.com` | `443` | `HTTPS` | API endpoint for license verification and management. |

#### Deprecated Resources

<div class="alert alert-notice">
    <i class="fa-solid fa-notes"></i> <strong>Good to know:</strong> Please update your 365 business apps regularly to ensure you can use the latest features and improvements.
</div>

In older versions of the 365 business API and the 365 business API app for Microsoft Dynamics 365 Business Central, the following DNS names and ports may still be used:

| DNS Name | Port | Protocol | Description | Replaced by |
| --- | --- | --- | --- | --- |
| `365businessapi.com` | `443` | `HTTPS` | API endpoint used for backward compatibility. | `api.365businessapi.com` |
| `365businessapi.azurewebsites.net` | `443` | `HTTPS` | API endpoint used for backward compatibility. | `api.365businessapi.com` |
| `login.microsoftonline.com` | `443` | `HTTPS` | Endpoint for authentication with Microsoft Entra ID. | N/A |
| `api.businesscentral.dynamics.com` | `443` | `HTTPS` | API endpoint for license verification and management. | `license.365businessapi.com` |
