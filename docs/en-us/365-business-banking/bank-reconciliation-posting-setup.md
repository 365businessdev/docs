# Posting setup

This section explains how to perform the posting setup in the bank reconciliation process to determine how bank transactions should be posted in Microsoft Dynamics 365 Business Central.

The posting setup includes the definition of:

- Posting type
- General Business Posting Group
- VAT Business Posting Group
- General Product Posting Group
- VAT Product Posting Group

![Posting setup in the bank reconciliation sheet.](/assets/images/365-business-banking/bank-reconciliation-posting-setup.de-DE.png)

These settings help ensure that bank transactions are posted correctly and comply with accounting and tax regulations. The posting setup can be applied individually per bank transaction or based on predefined [Reconciliation Rules](bank-reconciliation-rules.md).

<div class="alert alert-success">
    <i class="fa-duotone fa-solid fa-question-circle fa-xl"></i>
    <strong>Did you know?</strong>
    Learn more about <strong>Reconciliation Rules</strong> in the <a href="bank-reconciliation-rules.md">related section</a>.
</div>

## What can the posting setup be used for?

The posting setup is used to ensure that bank transactions are posted correctly in Microsoft Dynamics 365 Business Central. By defining the parameters listed above, you can:
- Set the posting type to determine how the transaction is posted (e.g., purchase, sale).
- Assign the Business Posting Group and VAT Business Posting Group to use the correct accounts for the posting.
- Define the Product Posting Group and VAT Product Posting Group to ensure the correct tax rates and accounts are used for the products or services related to the bank transaction.

Correct posting setup can improve the accuracy of your financial data and help ensure compliance with legal requirements.

![Posting preview](/assets/images/365-business-banking/bank-reconciliation-posting-setup-post-preview.de-DE.png)

<div class="alert alert-warn">
    <i class="fa-duotone fa-solid fa-triangle-exclamation fa-xl"></i>
    <strong>Warning</strong>
    Note that incorrect posting setup can result in erroneous postings that may affect your financial reports and tax returns. Make sure to review the posting setup carefully and consult your accountant or tax advisor if necessary.
</div>

# See also

- [Reconciliation Rules](bank-reconciliation-rules.md)