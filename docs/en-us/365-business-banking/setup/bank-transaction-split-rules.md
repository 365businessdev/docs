# Bank Transaction Split Rules

In some cases, it may be necessary to split bank transaction lines to allocate amounts to multiple general ledger accounts. This can occur, for example, with direct debits from tax authorities or with loans (principal and interest), where multiple amounts are included in a single transaction.

In addition to manually splitting bank transaction lines, as described in the [step-by-step guide to retrieving bank transactions](../bank-reconciliation.md#splitting-bank-transaction-lines), you can also set up automatic split rules. These rules allow you to automatically split certain transactions based on predefined criteria.
The rules are applied when retrieving bank transactions and help optimize and automate the payment reconciliation process.

## Step-by-Step Guide

Follow these steps to set up bank transaction split rules in 365 business Banking:

1. Select **Bank Transaction Split Rules** in the search of Microsoft Dynamics 365 Business Central.
2. Click **New** to create a new split rule.
3. Enter the **Code** and **Description** for the rule to uniquely identify it.
4. If necessary, set filters for the rule to determine which bank account and/or which business partner IBAN the rule should apply to.
5. On the **Assignment** tab, define the rule for allocation:
    - **Search Type in Purpose**: Choose where in the transaction purpose to search for the keyword (Contains, Starts with, Regular Expression).
    - **Search Pattern**: Enter the search pattern or regular expression (if "Regular Expression" is selected) that should be found in the transaction purpose.
    - **Behavior on Deviation**: Specify how the rule should be applied if the search pattern is not found (Skip, Create remainder line, Distribute proportionally).
6. Create the **lines** for the individual amounts expected when the rule is applied.

![Bank Transaction Split Rule](/assets/images/365-business-banking/bank-transaction-split-rule.de-DE.png)

### Split Rule Lines

In the lines of the split rule, you define the individual amounts expected when the rule is applied. Each line represents a partial amount of the total transaction and contains the following fields:

- **Label / Search Pattern**: Specifies a label or search pattern to be found in the transaction purpose to identify the amount.
- **Amount Recognition**: Indicates whether the amount should be recognized **After the Label** (directly after the search pattern) or using its own regular expression (**Regular Expression**).
- **Occurrence**: Specifies whether the first, last, or every occurrence of the search pattern should be considered.
- **G/L Account No.**: Specifies the general ledger account to which the amount should be allocated (optional).

#### What happens if a line is not found?

In some cases, not every partial amount can be clearly identified from the transaction purpose. However, the split is known and can be defined, for example, with a **fixed amount** or a **percentage**. In this case, you can specify the percentage or fixed amount in the **If not found** field.

<div class="alert alert-info">
     <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
     <strong>Note</strong>
     Using split rules with fixed amounts or percentages can be useful, for example, for loans (principal and interest), where the amounts are known but not always included in the transaction purpose.
</div>