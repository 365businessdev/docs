> **Note**<br>This feature was added with 365 business Print Agent version 18.1.<br>Please check if you have the latest version of 365 business Print Agent to use this feature.

In some environments, e.g. with locally separated branch offices, it can make sense to make printers accessible only for certain users. This can be achieved via the **Printer Access Permissions** by assigning one or more [user groups](https://learn.microsoft.com/en-US/dynamics365/business-central/ui-define-granular-permissions) to a printer.

> **Good to know**<br>If no user groups are assigned to a printer, this printer and the associated printer settings are accessible to all users in Microsoft Dynamics 365 Business Central.

## What are Printer Access Permissions?

Printer access permissions restrict the visibility of printers and printer settings within Microsoft Dynamics 365 Business Central. If a printer is not accessible by the current user, the respective printer will not be displayed in printer selections.

> **Important**<br>Regardless of the printer selection, it is also possible to print on a printer without assigned printer access authorization, e.g. via background processes.

## How do I assign user groups to a printer?

 1. Open **Printer** page.
 2. Select **More Options**.
 3. Select **Related** and **Printer Access Permissions...**.
 4. Select **User Group Code** you want to assign to access the printer.
 5. Close the page.

### See also

 - [Assign Permissions to Users and Groups)](https://learn.microsoft.com/en-us/dynamics365/business-central/ui-define-granular-permissions)