# Associated Bank Accounts

## Business Value

When reconciling bank transactions with 365 business Banking, the assignment of the customer or vendor is made based on the sender IBAN or recipient IBAN of the bank transaction, using the customer or vendor bank account. This facilitates sender/recipient identification, speeds up the reconciliation process, and significantly increases matching accuracy.
In 365 business Banking, new bank accounts are created by default in Microsoft Dynamics 365 Business Central when a payment reconciliation journal line is posted with an unknown bank account of a customer or vendor. The new bank account is created with the relevant information from the payment reconciliation journal line or the bank transaction (see [Bank Reconciliation - Sender Identification](../../bank-reconciliation.md#sender-identification)).

To avoid incorrect assignments, e.g., in the case of internal transfers (e.g., in the case of erroneous transfers by the customer), you can manage associated bank accounts and assign these accounts to the reconciled customer. This prevents the creation of new bank accounts for these internal transfers and ensures that the assignment is correct.

## Feature Description

In the **General Ledger Setup**, within the **Bank** action group, you will find the **Associated Bank Accounts** action. This action opens the **Associated Bank Accounts** page, where you can manage bank accounts of associated companies to prevent the creation of new bank accounts for internal transfers (e.g., in the case of erroneous transfers by the customer) and assign these accounts to the reconciled customer.

![Associated bank accounts](/assets/images/365-business-banking/associated-bank-accounts.de-DE.png)

Defining associated bank accounts does not prevent the execution of [sender identification](../../bank-reconciliation.md#sender-identification), but ensures that associated bank accounts are not automatically assigned to new customers or vendors.
