# Stripe

Stripe is a payment service provider that enables businesses to accept and process payments online. With **365 business Banking**, you can connect your Stripe account directly to **Microsoft Dynamics 365 Business Central** to automatically retrieve transactions and include them in payment reconciliation.

Stripe allows you to accept payments from credit cards, debit cards, and other payment methods, both online and in mobile applications. Stripe offers a user-friendly API that enables developers to seamlessly integrate payment functionality into their applications.

## Prerequisites

- An active Stripe account.
- API credentials (Publishable Key and Secret Key) for the Stripe API. You can create these in your Stripe dashboard (see [Stripe API Keys](https://dashboard.stripe.com/apikeys)).

## Step-by-Step Guide

1. Select **Bank Accounts** in the search of Microsoft Dynamics 365 Business Central.
2. Create a new bank account or select an existing one.
3. In the **Bank Account Card**, under **Actions**, choose the action group **Account Connection** and select **Connect…**.
   ![Start connection](/assets/images/365-business-banking/connect-banking-provider.de-DE.png)
4. Select **Stripe** from the list.
   ![Select provider](/assets/images/365-business-banking/select-banking-provider.de-DE.png)
5. Confirm the confirmation prompt with **Yes**.
6. Enter the Secret API Key.  
   ![Enter credentials](/assets/images/365-business-banking/stripe-setup.de-DE.png)
7. Select the **Authenticate** action to check and activate access.

## Disconnect Account

To disconnect your Stripe account, follow these steps:

1. Select **Bank Accounts** in the search of Microsoft Dynamics 365 Business Central.
2. Select the bank account connected to Stripe.
3. In the **Bank Account Card**, under **Actions**, choose the action group **Account Connection** and select **Disconnect**.
4. Confirm the confirmation prompt with **Yes**.

