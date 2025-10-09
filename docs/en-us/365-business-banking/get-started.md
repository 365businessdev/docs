# Getting Started

Welcome to 365 business Banking, the simple and secure solution for managing your bank accounts and transactions in Microsoft Dynamics 365 Business Central. In this section, you will learn how to set up and use 365 business Banking to efficiently manage your banking activities.

## Prerequisites

- Microsoft Dynamics 365 Business Central 2021 release wave 1 (18.0) or later.
- An active bank account with a supported bank (see [Supported Banks](supported-banks.md)).

## Step 1: Installing 365 business Banking

Open the **Extension Marketplace** in Microsoft Dynamics 365 Business Central and search for **365 business Banking**. Install the app from Microsoft AppSource and wait for the installation to complete.

Alternatively, use the following link to install **365 business Banking** directly from Microsoft AppSource:  
[Install 365 business Banking | Microsoft AppSource](https://appsource.microsoft.com/en-US/product/DynamicsBC/PUBID.business_development_christoph_krieg%7CAID.365businessbanking%7CPAPPID.2ddb5a5d-a539-46f7-8c68-2e37cf7d0dfb?modalAppId=PUBID.business_development_christoph_krieg%7CAID.365businessbanking%7CPAPPID.2ddb5a5d-a539-46f7-8c68-2e37cf7d0dfb&signInModalType=2&ctaType=2)

## Step 2: Setting Up a Banking User

To connect bank accounts, retrieve transactions, and initiate payments, you need to set up a banking user in Microsoft Dynamics 365 Business Central. Follow these steps:

1. Select **Banking User Setup** in the search bar of Microsoft Dynamics 365 Business Central.
2. Set a **secure password** and store it in a safe place outside of Microsoft Dynamics 365 Business Central.
3. Enter the **email address** of the user.
4. Enter the **phone number** of the user.
5. Select the action **Authenticate** to create the banking user.

For more information on setting up the banking user, see [Banking User Setup](banking-user-setup.md).

## Step 2.1: Establishing a Bank Account Connection

To retrieve transactions and initiate payments, you need to connect to your bank. This is done via [finAPI](https://www.finapi.io/), which acts as an interface between Microsoft Dynamics 365 Business Central and your bank.

Follow these steps to establish your bank account connection in 365 business Banking:

1. Select **Bank Accounts** in the search bar of Microsoft Dynamics 365 Business Central.
2. Select the action **Connect Bank Accounts** in the **Banking** group.
   ![Connect Bank Accounts](/assets/images/365-business-banking/connect-bank-accounts.en-US.png)
3. Select **Next** to start the connection process.
4. Enter the bank name, BIC/SWIFT code, or IBAN of your bank account to select your bank.
   ![finAPI Web Form](/assets/images/365-business-banking/finAPI-webform.en-US.png)
5. Log in with your bank credentials. This may vary depending on the bank, but typically requires your account number and PIN.
6. Follow the on-screen instructions to establish the connection to your bank. This may include confirming security questions or entering a TAN code.
7. Select the accounts you want to connect and confirm your selection.
8. After a successful connection, the number of connected accounts will be displayed.
   ![Connected Bank Accounts](/assets/images/365-business-banking/connected-bank-accounts.en-US.png)
9. Select **Finish** to import the bank accounts and complete the connection.

## Step 3: Retrieving Bank Transactions

After successfully connecting to your bank, you can retrieve bank transactions. This is done using the Payment Reconciliation Journals in Microsoft Dynamics 365 Business Central.

Follow these steps to retrieve bank transactions in 365 business Banking:

1. Select **Payment Reconciliation Journals** in the search bar of Microsoft Dynamics 365 Business Central.
2. Select the action **Retrieve Bank Transactions**.
3. Select the bank account for which you want to retrieve transactions.
   ![Select Bank Account for Bank Transaction Retrieval](/assets/images/365-business-banking/select-bank-account.en-US.png)
4. Select **OK** to start retrieving bank transactions.
5. Confirm the message that the bank transactions have been retrieved.
   ![Bank Transactions Retrieved](/assets/images/365-business-banking/bank-transactions-retrieved.en-US.png)

## Step 3.1: Reconciling Bank Transactions

After retrieving bank transactions, you can use them in payment reconciliation. The bank transactions are automatically matched to the open entries in Microsoft Dynamics 365 Business Central to enable efficient reconciliation. The Microsoft Dynamics 365 Business Central bank reconciliation is used and enhanced with additional features to achieve better results when matching bank transactions.

Review the matched bank transactions and make adjustments if necessary. Once you are satisfied with the matching, you can post the reconciliation of the bank transactions.

## Step 3.2: Posting Payments and Reconciling Bank Accounts

1. Select the action **Post Payments and Reconcile Bank Account** to post the selected bank transactions and reconcile the bank account.
2. Confirm the posting of payments and the reconciliation of the bank account.
3. Review the posting details and ensure all information is correct.
4. Select **OK** to complete the posting.

## Step 4: Initiating Payments

To initiate payments, Payment Journals are used in Microsoft Dynamics 365 Business Central. A **Bank Account** and a **Payment Method** are assigned to the journal. The payment method determines whether it is a SEPA transfer, SEPA instant transfer, or SEPA direct debit.

Follow these steps to initiate payments in 365 business Banking:

1. Select **Payment Journals** in the search bar of Microsoft Dynamics 365 Business Central.
2. Select an existing journal for your bank account and payment method or create a new journal.
3. Select the action **Edit Journal** to edit the journal.
4. Enter the journal lines for your payments, or use the action **Suggest Payments** to automatically generate payment suggestions.
5. Review the journal lines and ensure all information is correct. Pay special attention to amounts, purposes, and the recipient's bank account.
6. Select the action **Process Payments and Post** to process the payments and complete the posting.
7. Confirm the execution of the payments and the posting of the journal.

## Step 4.1: Confirming Payments

Depending on the bank and the payment method, it may be necessary to use a TAN or another authentication method to confirm the payment. In this case, a dialog will appear to confirm the payment.

![Payment Authorization](/assets/images/365-business-banking/bank-payment-authentication.en-US.png)

1. Select **Authorize** to confirm the payment process.
2. Follow the on-screen instructions to authorize the payment. This may include entering a TAN or confirming via a banking app.
   ![Payment Authorization](/assets/images/365-business-banking/bank-payment-authentication-webform.en-US.png)
3. After successful authorization, the payment is processed and completed.
   ![Payment Confirmation](/assets/images/365-business-banking/bank-payment-confirmation.en-US.png)
4. Select **Close** to close the dialog and return to payment processing.

## Step 4.2: Posting Payment Outflows

After confirming and executing the payment, it is posted in the Payment Journal. If the action **Process Payments and Post** was used, the posting is done automatically. Otherwise, you must manually post the payment using the action **Post** in the Payment Journal.

## See Also

- [Setting Up Banking Users](banking-user-setup.md)
- [Establishing Bank Account Connections](banking-connection.md)
- [Bank Account Reconciliation](bank-reconciliation.md)
- [Payments](bank-payment.md)
