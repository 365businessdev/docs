Tenant licenses are restricted to a Microsoft Entra ID tenant. With the tenant license, all environments, including all tenants and users, within the tenant are licensed.

## What are the benefits of the tenant license?

Tenant licensing includes all environments, tenants, and users within the Microsoft Entra ID tenant. With the tenant license, all environments, including all tenants and users, are licensed. This enables simple and cost-effective licensing for tenants that includes all environments, tenants, and users.

### Tenant Licensing in Microsoft Dynamics 365 Business Central - On-Premise (Local)

In Microsoft Dynamics 365 Business Central On-Premise deployments, a tenant license covers a specific environment, i.e., a Microsoft Dynamics 365 Business Central database. With the tenant license, all tenants and users within the environment are licensed.

## What data is collected for license verification?

For the verification of the tenant license, the Microsoft Entra ID tenant ID is used. This ID is a unique ID created during the setup of the Microsoft Entra ID tenant environment. The ID is used for licensing the environment, tenants, and users.

The tenant ID and the tenant name (onmicrosoft.com domain) are transmitted to 365 business development for license verification.

### Tenant ID in Microsoft Dynamics 365 Business Central - On-Premise (Local)

In Microsoft Dynamics 365 Business Central On-Premise environments, a Microsoft Entra ID tenant ID may not be available. In this case, a random ID (GUID) is generated that uniquely identifies the environment. This ID is used for licensing the environment, tenants, and users.

The generated tenant ID and the DNS name of the server on which Microsoft Dynamics 365 Business Central is installed are transmitted to 365 business development for license verification.