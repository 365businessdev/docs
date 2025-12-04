# Transit Accounts for Payments

## Business Value

Many companies use transit accounts to manage payments before they are posted to the final destination account. This is particularly useful for companies that process a large number of payments and need to ensure that they are correctly allocated and processed. The support of transit accounts in 365 business Banking enables companies to make their payment processes more efficient and improve the accuracy of payment reconciliation.
 
<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Good to know</strong>
    Transit accounts and corresponding postings only make sense for G/L entries, as the Microsoft Dynamics 365 Business Central standard does not support entry status (Open/Closed) for G/L entries.<br>
    In bank entries, transactions that have not been executed can be identified via the <strong>Open</strong> field.
</div>

By using transit accounts, companies can also exercise better control over their payment processes at the G/L account level and ensure that all payments are properly processed before being posted to the final destination account.

## Functional Description

With the transit accounts feature in 365 business Banking, companies can define an additional account for transit postings in the **Bank Account Posting Groups**. This account is used to temporarily capture payments before they are posted to the final destination account. When a payment is made (see [Payments](../../bank-payment.md)), the bank entry (`Open` = `Yes`) and the associated G/L entry are posted to the defined transit account.
Once the payment has been successfully processed and captured via the payment reconciliation journal, the G/L entry is automatically transferred from the transit account to the final destination account. This ensures that all payments are correctly allocated and processed while simultaneously improving the transparency and traceability of payment processes.
