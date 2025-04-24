# Setup

The address validation setup contains the configuration for the integration of address validation and prediction in Microsoft Dynamics 365 Business Central.

After installation, the basic setup and some setup parameters are already set automatically according to the most common wishes and requirements as part of the installation routines.

![Address Validation Setup](/assets/images/365-business-address-validation/setup.en-US.png)

## Setup parameters

| Field Name | Group | Description | Default Value |
| --- | --- | --- | --- |
| Address Validation enabled | Address Validation | Enables or disables the automatic address validation functionality. | Disabled |
| Address Validation Scope | Address Validation | Specifies the type of sessions the address validation feature is scoped to. A distinction can be made between: <ul><li><strong>All</strong> - Automatic address validation is activated for all session types.</li><li><strong>Only enabled for client sessions with user interface</strong> - Automatic address validation is only activated for session types with a user interface, such as the Web Client.</li><li><strong>Only enabled for sessions without user interface</strong> - Automatic address validation is only activated for session types without a user interface, such as Web Services or the Task Scheduler.</li></ul> | All |
| Address Verification | Address Validation | Enables the additional manual address verification. If turned on, an additional comparison  window will appear every time the address validation has been changed or completed the address data. The user can decide, based on the comparison to apply the changes or not.<br><br>Find out more at [Address Validation](address-validation.md). | Enabled |
| Contact | Address Validation | Enables or disables automatic address validation for contacts. | Enabled |
| Customer | Address Validation | Enables or disables automatic address validation for customers. | Enabled |
| Vendor | Address Validation | Enables or disables automatic address validation for vendors. | Enabled |
| Sales Documents | Address Validation | Enables or disables automatic address validation for sales documents, such as sales orders, quotes, and invoices. | Enabled |
| Ship-To Address | Address Validation | Enables or disables automatic address validation for delivery to addresses. | Disabled |
| Purchase Documents | Address Validation | Enables or disables automatic address validation for purchasing documents, such as purchase orders, requests, and invoices. | Enabled |
| Order Address | Address Validation | Enables or disables automatic address validation for order addresses. | Disabled |
| Alternate Address | Address Validation | Enables or disables automatic address validation for alternate addresses. | Disabled |
| Address Prediction enabled | Address Prediction | Enables or disables the complete functionality of address prediction. | Enabled |
| Max. No. of Predictions | Address Prediction | Specifies the maximum number of address predictions shown in the drop down auto complete functionality. | 4 |
| Contact | Address Prediction | Enables the address prediction for Contacts. | Enabled |
| Customer | Address Prediction | Enables the address prediction for Customers. | Enabled |
| Vendor | Address Prediction | Enables the address prediction for Vendors. | Enabled |
| Sales Documents | Address Prediction | Enables or disables address prediction for sales documents, such as sales orders, quotes, and invoices. | Enabled |
| Ship-To Address | Address Prediction | Enables or disables address prediction for delivery to addresses. | Disabled |
| Purchase Documents | Address Prediction | Enables or disables address prediction for purchasing documents, such as purchase orders, requests, and invoices. | Enabled |
| Employee | Address Prediction | Enables the address prediction for Employees. | Enabled |

## Permissions

There are two permission sets included with 365 business Address Validation:

![Permission Sets](/assets/images/365-business-address-validation/permissions.de-DE.png)

With the **ADDRESSVALIDATION** permission set, users are given full access to address validation, prediction, and setup for address validation.

With the **ADDRVALIDATION-BASIC** permission set, users get access to the objects necessary to run address validation and prediction. However, setup data cannot be changed.

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i> <strong>Note: <br>Please note that the authorization sets do not include permissions for standard tables, such as Customer, Vendor and Contact.<br>These permissions should be assigned separately via individual or standard authorization sets, if necessary.
</div>