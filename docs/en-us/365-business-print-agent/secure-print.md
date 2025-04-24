# Secure Print

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg"></i> <strong>Good to know</strong> The <strong>Secure Print Feature</strong> for the 365 business Print Agent is a paid add-on.<br>
    Please check under <strong>Extension License Management (365 business development)</strong> if you have purchased the license for the Secure Print Feature.
</div>

**Secure Print** is a feature of the 365 business Print Agent that allows print jobs to be secured and only released after authentication at the printer. This feature is particularly useful when confidential documents need to be printed and uncontrolled access to the printer should be avoided.

## Setting up Secure Print

Some preparations are necessary to use Secure Print.
The setup of Secure Print consists of two elements:

 - Setting up Secure Print users
 - Activating Secure Print in the printer settings

### Setting up Secure Print users

When setting up Secure Print users, the Microsoft Dynamics 365 Business Central users are linked to the Microsoft Entra ID object ID. This link is necessary to enable authentication and assignment of sent print jobs.

1. Navigate to the **365 business Print Agent Setup** page.
2. Select the **Related** menu item and **Secure Print Users**.
   ![Secure Print Setup Action](/assets/images/365-business-print-agent/secure-print-setup.en-US.png)
3. Select the user you want to enable for Secure Print.
4. Enter the Microsoft Entra ID object ID of the user.
   ![Secure Print User Setup](/assets/images/365-business-print-agent/secure-print-user-setup.en-US.png)

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i> <strong>Note</strong> You can find the user's Entra ID object ID in the Microsoft Entra administration.<br>
    For more information on setting up Secure Print users, click <a href="https://learn.microsoft.com/en-US/partner-center/account-settings/find-ids-and-domain-names#find-the-user-object-id" target="_blank">here</a>.
</div>

### Activating Secure Print in the printer settings

After setting up the Secure Print users, you can activate Secure Print in the printer settings where you want to use Secure Print.

1. Navigate to the **365 business Print Agent Setup** page.
2. Select the **Related** menu item and **Printers**.
3. Select the printer for which you want to activate Secure Print.
4. Select the printer setting you want to configure for Secure Print.
5. Disable the printer setting to make changes.
6. Enable the **Secure Print** option.
   ![Printer Settings - Secure Print](/assets/images/365-business-print-agent/printer-configuration-secure-print.en-US.png)
7. Enable the printer setting.

After activating Secure Print for a printer setting, all print jobs for this printer will be secured and must be released via the Print Agent app on your mobile device.

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg"></i> <strong>Good to know</strong> Users who are not set up for Secure Print cannot use printer settings with Secure Print.
</div>

# See also

- [Find user object ID (Microsoft Learn)](https://learn.microsoft.com/en-US/partner-center/account-settings/find-ids-and-domain-names#find-the-user-object-id)