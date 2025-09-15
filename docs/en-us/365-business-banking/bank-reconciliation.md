# Bank Account Reconciliation

With 365 business Banking, you can retrieve bank transactions and use them in the payment reconciliation in Microsoft Dynamics 365 Business Central. This enables efficient management of your bank accounts and seamless integration into your financial processes.

<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Good to know</strong>
    Retrieving bank transactions does not involve fetching account statements; instead, transactions are retrieved directly from the bank. This allows for faster and more accurate processing of your financial data, with additional information about the transactions that may not be included in account statements.
</div>

## Prerequisites

To retrieve bank transactions, you must first set up a banking user in Microsoft Dynamics 365 Business Central. This user is used to connect to your bank and has access to the banking features. Additionally, a connection to your bank or banks must be established. For more information, see the [Step-by-Step Guide to Bank Account Connection](banking-connection.md).

## Step-by-Step Guide

Follow these steps to retrieve bank transactions in 365 business Banking:

1. Select **Payment Reconciliation Journals** in the search bar of Microsoft Dynamics 365 Business Central.
2. Select the action **Retrieve Bank Transactions**.
3. Select the bank account for which you want to retrieve transactions.
   ![Select Bank Account for Bank Transaction Retrieval](/assets/images/365-business-banking/select-bank-account.en-US.png)
4. Select **OK** to start retrieving bank transactions.
5. Confirm the message that the bank transactions have been retrieved.
   ![Bank Transactions Retrieved](/assets/images/365-business-banking/bank-transactions-retrieved.en-US.png)

<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Good to know</strong>
    The import of bank transactions automatically checks for duplicate transactions and ignores them. This ensures that your payment reconciliation is always up-to-date and accurate.
</div>

### Splitting Bank Transaction Lines

In some cases, it may be necessary to split bank transaction lines to allocate them to multiple general ledger accounts. This can be the case, for example, with direct debits from the tax authority, where multiple taxes are included in a single transaction.

![Splitting Bank Transaction Lines](/assets/images/365-business-banking/split-bank-recon-lines1.en-US.png)

Follow these steps to split bank transaction lines:

1. Select the bank transaction line you want to split.
2. Select the action **Split Lines** in the **Line** group.
3. Split the bank transaction line into multiple lines by adjusting the respective amounts and, if necessary, changing the transaction text.
   ![Splitting Bank Transaction Lines](/assets/images/365-business-banking/split-bank-recon-lines2.en-US.png)
4. Select **OK** to save the changes.
   ![Splitting Bank Transaction Lines](/assets/images/365-business-banking/split-bank-recon-lines3.en-US.png)

<div class="alert alert-info">
   <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
   <strong>Info</strong>
   You can undo the splitting of bank transaction lines using the <strong>Undo Split Line</strong> action. This restores the original state of the bank transaction lines.
</div>

## Payment Reconciliation

After retrieving bank transactions, you can use them in payment reconciliation. The bank transactions are automatically matched to the open entries in Microsoft Dynamics 365 Business Central to enable efficient reconciliation. The Microsoft Dynamics 365 Business Central bank reconciliation (see [Managing and Reconciling Your Bank Accounts](https://learn.microsoft.com/en-us/dynamics365/business-central/bank-manage-bank-accounts)) is used and enhanced with additional features to achieve better results when matching bank transactions.

### Sender Identification

In addition to the Microsoft standard, the IBAN of the bank account from the bank transaction is used for sender identification during payment reconciliation. This allows for more accurate allocation of transactions to the respective accounts and improves the efficiency of reconciliation.

If the reconciliation is accepted and the bank reconciliation is posted, the master data (e.g., customer bank account) of the reconciled accounts (e.g., customer, vendor) is updated or supplemented to enable faster and more accurate allocation in future reconciliations.

<div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Note</strong>
    Newly created bank accounts (e.g., customer bank account) are created with the status <strong>New</strong>. This means that the bank account has been newly added and has not yet been verified. Verification of the bank account is required to ensure that the bank account information is correct and can be used for future transactions. Once the bank account has been verified, the status is changed to <strong>Released</strong>.
</div>

#### Example

You receive a payment from a customer to your bank account. The payment is allocated to the customer based on the purpose of the bank transaction. When you post the payment, it is checked whether the customer bank account already exists. If not, it is automatically created, and the bank account information (e.g., IBAN, BIC/SWIFT code) is taken from the bank transaction.

### Advanced Document No. and Purpose Identification

In addition to sender identification, the document number and purpose of the bank transaction are also used during payment reconciliation to improve the allocation to open entries. This allows for more accurate allocation of transactions to the respective accounts and improves the efficiency of reconciliation.

Beyond the Microsoft standard, the purpose is analyzed, and document numbers are extracted during payment reconciliation to optimize the allocation to open entries. Partial document numbers, up to four characters, are also considered to allow for more accurate allocation in batch payments.

To optimize the allocation of partial document numbers, you can define common context words that are considered during the analysis of the purpose and increase the weighting of a partial document number.

For more information, see the documentation on [Context Words](setup/context-words.md).

#### Example

Your document numbers are `25002019` and `25002021`. In the purpose of the bank transaction, the sender specifies `Invoice 25002019, 2021`. The document number `25002019` is automatically recognized as it matches the document number exactly. The partial document number `2021` is also recognized as a "weak" match and offered for reconciliation. By using context words, such as `Invoice`, the partial document number `2021` is recognized as a "strong" match and prioritized for reconciliation.

### Payment Code Mapping

As part of a SEPA payment, additional payment codes are transmitted alongside the purpose, which are used to identify the payment. These codes can be used during payment reconciliation to improve the allocation of bank transactions to open entries or general ledger accounts.

The following payment codes are supported:

- **ZKA Code**: The ZKA code, also known as the business transaction code, is used to identify the business transaction of the bank transaction. This code is usually provided by the bank and can be used to identify the type of transaction. For more information, see [ZKA Code](setup/zka-code.md).

- **SEPA Purpose Code**: The SEPA purpose code is used to identify the purpose of the SEPA transfer. This code is optional and can be used to specify the purpose of the payment. For more information, see [SEPA Purpose Code](setup/sepa-purpose-code.md).

On the **Payment Code Mapping** page, you can map payment codes to account type and account number. This allows for more accurate allocation of bank transactions to the respective accounts and improves the efficiency of reconciliation.

For more information, see the documentation on [Payment Code Mapping](payment-code-mapping.md).

As part of the automatic reconciliation of bank transactions, the payment code mapping is automatically considered. If a payment code is mapped, it is used when allocating the bank transaction to open entries or general ledger accounts. This improves the efficiency of reconciliation and reduces the manual effort required for allocating bank transactions.

![Payment Code Mapping in Payment Reconciliation Journal](/assets/images/365-business-banking/bank-reconciliation-payment-code-mapping.en-US.png)

## See Also

- [Automating Bank Account Reconciliation](bank-reconciliation-automation.md)
- [Setting Up Banking Users](banking-user-setup.md)
- [Establishing Bank Account Connections](banking-connection.md)
- [Payment Code Mapping](payment-code-mapping.md)
- [ZKA Code](setup/zka-code.md)
- [SEPA Purpose Code](setup/sepa-purpose-code.md)