# Requirements

To use the **365 business Print Agent Config**, communication with various **365 business API services** is required.  
To ensure proper functionality, it may be necessary to configure appropriate **firewall settings**.

## Required Resources

The following **DNS names**, **ports**, and **protocols** are used for communication:

| DNS Name                         | Port | Protocol | Description                                                                  |
|----------------------------------|------|----------|------------------------------------------------------------------------------|
| `api.365businessapi.com`         | 443  | HTTPS    | API endpoint for automatic updates.                                          |
| `printagent.365businessapi.com`  | 443  | HTTPS    | API endpoint for functionality and license validation.                       |
| `license.365businessapi.com` | 443 | HTTPS | API endpoint for license verification and management. |
| `status.365businessdev.com`      | 443  | HTTPS    | Endpoint used for health checks.                                             |
| `docs.365businessdev.com`        | 443  | HTTPS    | Documentation accessible via the Print Agent Config.                         |
| `365businessdev.atlassian.net`   | 443  | HTTPS    | Support portal for technical inquiries and support tickets.                  |

<div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
	<strong>Info</strong>
    Please ensure that outbound HTTPS connections to the endpoints listed above are allowed by your infrastructure.
</div>
