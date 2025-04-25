---
title: User License
---
User licenses are restricted to individual users within a tenant. Each user requires their own license to access the apps and features of 365 business development.

## What are the benefits of a user license?

User licensing allows for flexible assignment of licenses to individual users. Each user receives their own license, granting them permission to use the app or feature.

<div class="alert alert-warn">
    <i class="fa-duotone fa-solid fa-triangle-exclamation fa-xl"></i>
	<strong>Important</strong>
	Please note that depending on the app or feature, licensing all active users may be mandatory, otherwise functionality within Microsoft Dynamics 365 Business Central may be limited.
</div>

## Which users need to be licensed?

The counting of user licenses differs due to technical and licensing requirements between Business Central Online (SaaS) and Business Central On-Premise (Local).

### User Licensing Overview

The number of users to be licensed is determined differently depending on the environment type (see below). The **User Licensing Overview** page can be accessed from the **Extension License Management (365 business development)** and shows which users need to be licensed:

![User Licensing Overview](/assets/images/licensing/63a93fba-ca1a-471a-971e-687df1a6c25a.png)

### Microsoft Dynamics 365 Business Central - Online (SaaS)

When identifying users to be licensed, all active users (`Status` = `Enabled`) in the Business Central environment are checked. This check may occur regardless of whether the user actually accesses the apps and features of 365 business development. Users are then checked against the assigned Microsoft Dynamics 365 Business Central licenses (Plan).

<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Good to know</strong> User licensing for the apps and features of 365 business development is based on the actual number of users in the Microsoft Dynamics 365 Business Central environment. Shared Microsoft Dynamics 365 Business Central licenses (e.g., Device plan) are not considered. Only the actually licensed users are counted, regardless of whether a shared or exclusive license is present.
</div>

Users with the following plans are required to be licensed:

 - Dynamics 365 Business Central Basic Financials plan (including Embedded plan)
 - Dynamics 365 Business Central Team Member plan (including Embedded plan)
 - Dynamics 365 Business Central Essential plan (including Embedded plan)
 - Dynamics 365 Business Central Essential - Attach plan
 - Dynamics 365 Business Central Premium plan (including Embedded plan)
 - Dynamics 365 Business Central Device plan (including Embedded plan)
 - Dynamics 365 Business Central for IWs plan

<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Good to know</strong> Users with the following plans are not required to be licensed:
    <ul>
        <li>Delegated Admin agent - Partner plan</li>
        <li>Delegated Helpdesk agent - Partner plan</li>
        <li>Dynamics 365 Business Central External Accountant plan</li>
    </ul>
</div>

### Microsoft Dynamics 365 Business Central - On-Premise (Local)

When identifying users to be licensed, all active users (`Status` = `Enabled`) in the Business Central environment are checked. This check may occur regardless of whether the user actually accesses the apps and features of 365 business development.

## What data is collected for license verification?

The verification of user licenses is performed exclusively within your Microsoft Dynamics 365 Business Central environment. No data is transmitted to or stored by 365 business development. The license verification is based on the user data and licenses stored in your Business Central environment.

Only the determined number of users required to be licensed or already licensed is transmitted to 365 business development.
