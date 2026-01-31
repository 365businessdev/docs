# Shopify

<div class="alert alert-warn">
   <i class="fa-duotone fa-solid fa-triangle-exclamation fa-xl"></i>
   <strong>Attention</strong>
   The integration with Shopify is currently in beta phase. Some features may not yet be fully available or stable. We recommend evaluating this integration in a test environment first before deploying it in a production environment.
</div>

Shopify is an e-commerce platform that enables businesses to create and manage online stores. With **365 business Banking**, you can connect your Shopify account directly to **Microsoft Dynamics 365 Business Central** to automatically retrieve transactions and include them in payment reconciliation.

## Prerequisites

- An active Shopify account.

## Step-by-Step Guide

1. Select **Bank Accounts** in the search of Microsoft Dynamics 365 Business Central.
2. Create a new bank account or select an existing one.
3. In the **Bank Account Card**, under **Actions**, select the **Account Connection** action group and **Connect...**.
   ![Start connection](/assets/images/365-business-banking/connect-banking-provider.de-DE.png)
4. Select **Shopify** from the list.
   ![Select Shopify connection](/assets/images/365-business-banking/select-shopify-provider.de-DE.png)
5. Confirm the confirmation prompt with **Yes**.
6. Enter the **Shop Name** of your Shopify shop (e.g., `myshop` for `myshop.myshopify.com`).
7. Click **Authenticate** to establish the connection between Shopify and 365 business Banking.
8. In the opening browser window, select the **Continue to Authorization** action.
   ![Shopify authorization](/assets/images/365-business-banking/connect-shopify.de-DE.png)
9.  Sign in with your Shopify credentials.
10. Confirm the installation of the **365 business Banking** app in your Shopify shop.
    ![Shopify app installation](/assets/images/365-business-banking/install-shopify-app.de-DE.png)

    <div class="alert alert-warn">
        <i class="fa-duotone fa-solid fa-triangle-exclamation fa-xl"></i>
        <strong>Note</strong>
        Since the <strong>365 business Banking</strong> app for Shopify was developed exclusively for integration with Microsoft Dynamics 365 Business Central, it is currently "<i>not verified</i>" by Shopify.<br>
        Shopify explicitly provides this status for apps that are not developed for the general public, but for use in connection with a specific software solution, such as Microsoft Dynamics 365 Business Central in this case.
    </div>

11.  After successful installation, a confirmation of successful authorization appears.
    ![Shopify authorization successful](/assets/images/365-business-banking/connect-shopify-success.de-DE.png)
12.  Return to Microsoft Dynamics 365 Business Central. The connection is now established.

### Updating the Account Connection

It may be necessary to update the account connection, for example, if **365 business Banking** has installed additional features in your Shopify shop or if you want to adjust the permissions of the existing connection.

To update the account connection, proceed as follows:

1. Select **Bank Accounts** in the search of Microsoft Dynamics 365 Business Central.
2. Select the bank account whose connection you want to update.
3. In the **Bank Account Card**, under **Actions**, select the **Account Connection** action group and **Settings**.
4. Click **Authenticate** to update the connection between Shopify and 365 business Banking.
5. Follow the instructions in the browser to update the connection. (Analogous to steps 8-11 of the previous guide.)

## Disconnect Account Connection

1. Select **Bank Accounts** in the search of Microsoft Dynamics 365 Business Central.
2. Select the bank account whose connection you want to disconnect.
3. In the **Bank Account Card**, under **Actions**, select the **Account Connection** action group and **Disconnect...**.
4. Confirm the confirmation prompt with **Yes**.
