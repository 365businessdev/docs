# Partial Posting Payment Reconciliation Journal

## Business Value

Payment reconciliation journals can contain a large number of bank transactions that affect both accounts receivable and accounts payable. In Microsoft Dynamics 365 Business Central Standard, payment reconciliation journals can only be posted completely, which may lead to longer processing times and thus does not enable transparent financial reporting and efficient dunning management.

## Function Description

With the integrated partial posting function for payment reconciliation journals in 365 business Banking, you can post payment reconciliation journals even when they are only partially reconciled.
All unreconciled bank transactions from the current payment reconciliation journal are transferred to a new payment reconciliation journal, allowing you to process them at a later time.

No additional configurations are required to use this function. As soon as you post a payment reconciliation journal with incompletely reconciled bank transactions, a new payment reconciliation journal containing the unreconciled bank transactions is automatically created after appropriate user confirmation.