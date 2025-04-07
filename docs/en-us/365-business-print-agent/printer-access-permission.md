---
title: Printer Access Permission
---
<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Note:</strong> This feature was added with 365 business Print Agent version 18.1.<br>Please check if you have the latest version of 365 business Print Agent to use this feature.
</div>

In some environments, e.g. with locally separated branch offices, it can make sense to make printers accessible only for certain users. This can be achieved via the **Printer Access Permissions** by assigning one or more [user groups](https://learn.microsoft.com/en-US/dynamics365/business-central/ui-define-granular-permissions) to a printer.

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg" style="--fa-secondary-color: #FF0000; --fa-primary-color: #111111; --fa-secondary-opacity: 0.7"></i> <strong>Good to know:</strong>If no user groups are assigned to a printer, this printer and the associated printer settings are accessible to all users in Microsoft Dynamics 365 Business Central.<br>
    <br>
    Users who use the "365 business Print Agent - Full Access" (<code>bdev.PRINTAGENTSETUP</code>) permission set are considered administrative users and are exempt from restricting the selection of printers via the printer access permissions.<br>
    This is to allow administrators to assign printers that you generally do not have access to to other users.
</div>

## What are Printer Access Permissions?

Printer access permissions restrict the visibility of printers and printer settings within Microsoft Dynamics 365 Business Central. If a printer is not accessible by the current user, the respective printer will not be displayed in printer selections.

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Important:</strong> Regardless of the printer selection, it is also possible to print on a printer without assigned printer access authorization, e.g. via background processes.
</div>

## How do I assign user groups to a printer?

 1. Open **Printer** page.
 2. Select **More Options**.
 3. Select **Related** and **Printer Access Permissions...**.
 4. Select **User Group Code** you want to assign to access the printer.
 5. Close the page.

### See also

 - [Assign Permissions to Users and Groups)](https://learn.microsoft.com/en-us/dynamics365/business-central/ui-define-granular-permissions)