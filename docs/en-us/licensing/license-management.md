---
title: License Management
---
License management takes place entirely within Microsoft Dynamics 365 Business Central. All essential management tasks can be performed directly by you. In this section, you will learn how to manage your licenses.

During the installation of Microsoft Dynamics 365 Business Central apps, the **365 business development License** extension is automatically installed. This extension adds license management and verification to Microsoft Dynamics 365 Business Central.

You can access the license management through the **Extension License Management (365 business development)** page:

![Extension License Management (365 business development)](/assets/images/licensing/2bfb6450-3d5b-478a-824d-dc4088eb3fca.png)

## Extension License Management

The extension license management provides information about the installed 365 business development apps and features and displays the following information:

| Column | Description |
| --- | --- |
| **App Name** | Indicates the name of the app. |
| **Feature Name** | Indicates the name of the app's feature. |
| **Description** | Provides a brief description of the feature. |
| **Licensing** | Indicates the current licensing method of the feature. |
| **Documentation URL** | Link to the feature's documentation. |
| **Support URL** | Link to the feature's support page. |

Additionally, the essential information about licensing is displayed at the bottom of the page:

 - Tenant ID
 - Tenant Name
 - Number of Users
 - Number of Companies

The extension license management also offers the following functions:

| Function | Description | More Information |
| --- | --- | --- |
| **License Information** | Displays the current license information. | [View License Information](#view-license-information) |
| **Update License Information** | Updates the license information. | [Update License Information](#update-license-information) |
| **User Licensing Overview** | Opens the overview of users to be licensed. | [User Licensing Overview](license-methods/user-license.md) |
| **Company Licensing Overview** | Opens the overview of companies to be licensed. | [Company Licensing Overview](license-methods/company-license.md) |
| **Website** | Opens the app or feature's website. |  |
| **Documentation** | Opens the app or feature's documentation. |  |
| **Support** | Opens the app or feature's support page. |  |

During the trial period, the following functions are available:

| Function | Description | More Information |
| --- | --- | --- |
| **Extend Trial Period** | Extends the trial period by another 10 days. | [Extend Trial Period](#extend-trial-period) |
| **Activate License** | Starts the license activation wizard. | [Activate License](/license-management/activate-license.md) |

After license activation, the following functions are available:

| Function | Description | More Information |
| --- | --- | --- |
| **Assign Microsoft Partner** | Assigns the Microsoft partner who provided the license. | [Assign Microsoft Partner](#assign-microsoft-partner) |
| **Spending Limit** | Opens the page to set spending limits. | [Spending Limit](/license-management/spending-limit.md) |
| **Automatic License Assignment** | Activates automatic license assignment. | [License Assignment](/license-management/assign-license.md) |
| **Manual License Assignment** | Deactivates automatic license assignment. | [License Assignment](/license-management/assign-license.md) | 
| **Assign Company/User License** | Opens the page to assign user or company licenses for manual license assignment. | [License Assignment](/license-management/assign-license.md) |
| **Invoices** | Displays the invoices. | [View Invoices](invoicing/invoices.md) |
| **Terminate License** | Terminates the license at the next possible date. | [Terminate License](/license-management/terminate-license.md) |

### View License Information

With the **Details** action, you can view the license information. This view provides all essential information about the license status of the app, extension, or feature.

### Update License Information

With the **Update License Information** action, you can request an update of the data from the 365 business development license server. This is particularly necessary if a license change has been made and this change is not yet displayed in Microsoft Dynamics 365 Business Central.

### Extend Trial Period

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg"></i>
    <strong>Good to know</strong> Each 365 business development app is provided with a 30-day trial period. During this trial period, you can test the app or feature without restrictions.<br>
    <br>
    Need more time?<br>
    No problem! <a href="https://365businessdev.com/contact/" target="_blank">Contact</a> us regarding an extension of your trial period.
</div>

With the **Extend Trial Period** action, you can extend the trial period by another 10 days. This function is only available during the trial period.

### Assign Microsoft Partner

Typically, 365 business development apps and features are provided through a Microsoft partner. With the **Assign Microsoft Partner** action, you can assign the Microsoft partner who provided the license.

This function is only available after license activation and is used to transfer licensing in case of partner changes.