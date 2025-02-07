User licenses are restricted to individual users within a tenant. Each user requires their own license to access the apps and extensions of 365 business development.

## What are the benefits of the user license?

User licensing allows for flexible assignment of licenses to individual users. Each user receives their own license tailored to them. This enables individual licensing and use of the apps and extensions of 365 business development.

<div class="alert alert-warn">
    <i class="fa-solid fa-lightbulb"></i> <strong>Important Note:</strong> Please note that depending on the app or extension, licensing of all active users may be mandatory, otherwise functionality within Microsoft Dynamics 365 Business Central may be limited.
</div>

## Which users need to be licensed?

The counting of user licenses differs due to technical and licensing requirements between Business Central Online (SaaS) and Business Central On-Premise (Local).

### User Licensing Overview

The number of users to be licensed is determined differently depending on the environment type (see below). The **User Licensing Overview** page can be accessed from the **Extension License Management (365 business development)** and shows which users need to be licensed:

![User Licensing Overview](/assets/images/licensing/63a93fba-ca1a-471a-971e-687df1a6c25a.png)

### Microsoft Dynamics 365 Business Central - Online (SaaS)

When identifying the users to be licensed, all active users (`Status` = `Enabled`) in the Business Central environment are checked. This check may be performed regardless of whether the user actually accesses the apps and extensions of 365 business development. The users are then checked for the assigned Microsoft Dynamics 365 Business Central licenses (plan).
Users with the following plans are subject to licensing:

 - Dynamics 365 Business Central Basic Financials plan (including Embedded plan)
 - Dynamics 365 Business Central Team Member plan (including Embedded plan)
 - Dynamics 365 Business Central Essential plan (including Embedded plan)
 - Dynamics 365 Business Central Essential - Attach plan
 - Dynamics 365 Business Central Premium plan (including Embedded plan)
 - Dynamics 365 Business Central Device plan (including Embedded plan)
 - Dynamics 365 Business Central for IWs plan

<div class="alert alert-notice">
    <i class="fa-solid fa-notes"></i> <strong>Good to know:</strong> User licensing for the apps and extensions of 365 business development is based on the actual number of users in the Microsoft Dynamics 365 Business Central environment. Shared Microsoft Dynamics 365 Business Central licenses (e.g., Device plan) are not considered. Only the actually licensed users are counted, regardless of whether a shared or exclusive license is present.
</div>

Users with the following plans are not subject to licensing:

 - Delegated Admin agent - Partner plan
 - Delegated Helpdesk agent - Partner plan
 - Dynamics 365 Business Central External Accountant plan

### Microsoft Dynamics 365 Business Central - On-Premise (Local)

When identifying the users to be licensed, all active users (`Status` = `Enabled`) in the Business Central environment are checked. This check may be performed regardless of whether the user actually accesses the apps and extensions of 365 business development.

## What data is collected for license verification?

The verification of user licenses is carried out exclusively within your Microsoft Dynamics 365 Business Central environment. No data is transmitted to or stored by 365 business development. The license verification is based on the user data and licenses stored in your Business Central environment.

Only the determined number of users subject to licensing or licensed users is transmitted to 365 business development.
