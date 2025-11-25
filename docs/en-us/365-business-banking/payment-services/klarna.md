# Klarna

<div class="alert alert-warn">
   <i class="fa-duotone fa-solid fa-triangle-exclamation fa-xl"></i>
   <strong>Attention</strong>
   The integration with Klarna is currently in beta phase. Some features may not yet be fully available or stable. We recommend evaluating this integration in a test environment first before deploying it in a production environment.
</div>

Klarna is a payment service provider that enables businesses to accept payments online. With Klarna, you can integrate various payment methods such as invoice payment, installment payment, and instant transfer. With **365 business Banking**, you can connect your Klarna account directly with **Microsoft Dynamics 365 Business Central** to automatically retrieve transactions and include them in payment reconciliation.

## Prerequisites

- An active Klarna account.

## Step-by-Step Guide

1. Select **Bank Accounts** in the Microsoft Dynamics 365 Business Central search.
2. Create a new bank account or select an existing one.
3. In the **Bank Account Card**, under **Actions**, select the action group **Account Connection** and **Connect...**.
   ![Start connection](/assets/images/365-business-banking/connect-banking-provider.de-DE.png)
4. Select **Klarna** from the list.
5. Confirm the confirmation dialog with **Yes**.
6. Click **Authenticate** to establish a connection between Klarna and 365 business Banking.

## Disconnect Account Connection

1. Select **Bank Accounts** in the Microsoft Dynamics 365 Business Central search.
2. Select the bank account whose connection you want to disconnect.
3. In the **Bank Account Card**, under **Actions**, select the action group **Account Connection** and **Disconnect...**.
4. Confirm the confirmation dialog with **Yes**.
