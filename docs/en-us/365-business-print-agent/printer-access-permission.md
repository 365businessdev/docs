# Printer Access Permission

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Note:</strong>
	This function is available from version <b>18.1</b> of the 365 business Print Agent.<br>
	Please make sure that you are using the latest version.
</div>

In certain scenarios - for example, in the case of geographically separated branches - it may be useful to restrict access to printers to certain users.  
This is done via **Printer Access Permissions** by assigning one or more [user groups](https://learn.microsoft.com/de-DE/dynamics365/business-central/ui-define-granular-permissions) to a printer.

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg" style="--fa-secondary-color: #FF0000; --fa-primary-color: #111111; --fa-secondary-opacity: 0.7"></i> <strong>Good to know:</strong>
	If <b>no</b> user groups are assigned, the printer and the associated printer settings are visible and usable for <b>all users</b> in Microsoft Dynamics 365 Business Central. <br>
	<br>
	Users with the authorization set <b>365 business Print Agent - Full Access</b> (<code>bdev.PRINTAGENTSETUP</code>) are considered administrative users and are excluded from the access restrictions.<br>
	This allows administrators to manage printers to which they themselves do not have access.
</div>

## What are Printer Access Permissions?

Printer access permissions restrict the **visibility** of printers and their configurations in Microsoft Dynamics 365 Business Central.
If a user **is not authorized**, the printer is not displayed in the **Printer Selections**.

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Important:</strong>
	Even if a user does not have access to a printer, this printer can still be accessed via <b>background processes</b>.
</div>

## How do I assign user groups to a printer?

 1. Open **Printer** page.
 2. Click on **More Options**.
 3. Select **Related** and **Printer Access Permissions...**.
 4. Add one or more **User Group Code**.
 5. Close the page.

### See also

 - [Assign Permissions to Users and Groups)](https://learn.microsoft.com/en-us/dynamics365/business-central/ui-define-granular-permissions)