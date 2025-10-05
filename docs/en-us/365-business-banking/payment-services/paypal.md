# PayPal

PayPal is a globally leading online payment service that enables businesses and individuals to send and receive payments securely and easily. With **365 business Banking**, you can connect your PayPal account directly to **Microsoft Dynamics 365 Business Central** to automatically retrieve transactions and include them in payment reconciliation.

## Prerequisites

- An active PayPal account.
- API credentials (Client ID and Client Secret) for the PayPal REST API. You can create these in your PayPal developer account (see [PayPal Developer Account](https://developer.paypal.com/dashboard/applications/live)).

## Step-by-Step Guide

1. Select **Bank Accounts** in the search of Microsoft Dynamics 365 Business Central.
2. Create a new bank account or select an existing one.
3. In the **Bank Account Card**, under **Actions**, choose the action group **Account Connection** and select **Connect…**.
   ![Start connection](/assets/images/365-business-banking/connect-banking-provider.de-DE.png)
4. Select **PayPal** from the list.
   ![Select provider](/assets/images/365-business-banking/select-banking-provider.de-DE.png)
5. Confirm the confirmation prompt with **Yes**.
6. Enter the Client ID and Client Secret from the **API Credentials** page under **REST API apps**.  
   ![Enter credentials](/assets/images/365-business-banking/paypal-setup.de-DE.png)
7. Select the **Authenticate** action to check and activate access.
   ![Authenticate](/assets/images/365-business-banking/paypal-authentication-successful.de-DE.png)

## Disconnect Account

To disconnect your PayPal account, follow these steps:

1. Select **Bank Accounts** in the search of Microsoft Dynamics 365 Business Central.
2. Select the bank account that is connected to PayPal.
3. In the **Bank Account Card**, under **Actions**, choose the action group **Account Connection** and select **Disconnect**.
4. Confirm the confirmation prompt with **Yes**.

