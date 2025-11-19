# Reconciliation Rules

With 365 business Banking you can define advanced reconciliation rules for the bank reconciliation process to automate the matching of bank transactions. The **Reconciliation Rules** go beyond the text-to-account mapping available in Microsoft Dynamics 365 Business Central and allow you to define more complex criteria to automatically assign transactions to the correct general ledger accounts.

In addition, reconciliation rules allow you to specify dimensions to apply and to define field values in custom fields that should be used when creating posting lines.

![Reconciliation Rules](/assets/images/365-business-banking/reconciliationRule.de-DE.png)

## What criteria can be used in reconciliation rules?

Reconciliation rules can use various criteria to identify bank transactions and assign them automatically. These include, among others:

- **Matching text**: A text pattern that must be contained in the bank transaction description.
- **ZKA Code**: The [ZKA Code](setup/zka-code.md) of the bank transaction.
- **SEPA Purpose Code**: The [SEPA Purpose Code](setup/sepa-purpose-code.md) of the bank transaction.
- **Bank account no.**: The bank account number on which the transaction occurred.
- **Business partner IBAN**: The IBAN of the business partner associated with the bank transaction.

## Step-by-step guide

Follow these steps to define reconciliation rules in 365 business Banking:

1. Select **Bank Reconciliation Journals** in the Microsoft Dynamics 365 Business Central search.
2. Open the desired bank reconciliation journal.
3. Select the bank transaction for which you want to create a reconciliation rule.
4. Choose **Reconciliation Rules** on the ribbon.
    ![Reconciliation Rules](/assets/images/365-business-banking/reconciliationRules.de-DE.png)
    <div class="alert alert-notice">
          <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
          <strong>Good to know</strong>
          By selecting the bank transaction beforehand, the relevant fields in the reconciliation rule are automatically populated with the corresponding values from the transaction.<br>
          <br>
          In addition to the criteria, the fields for the posting setup (posting type, business posting group, VAT business posting group, product posting group, VAT product posting group) are prefilled with the values from the selected bank transaction, as well as the chosen dimensions.
     </div>
5. Set the desired criteria and posting settings in the reconciliation rule.
   ![Reconciliation Rules](/assets/images/365-business-banking/reconciliationRule.de-DE.png)
6. Close the **Reconciliation Rules** page.
7. Select **Yes** to apply the reconciliation rules to the current bank reconciliation journal.

# See also

- [Posting Setup](bank-reconciliation-posting-setup.md)
- [ZKA Code](setup/zka-code.md)
- [SEPA Purpose Code](setup/sepa-purpose-code.md)