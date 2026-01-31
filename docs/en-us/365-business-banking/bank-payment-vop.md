# Verification of Payee (VoP)

Since October 2025, the Verification of Payee (VoP) has been mandatory for SEPA transfers in Germany. This measure aims to prevent fraud and increase payment security by matching the payee's name with the information stored at the bank.

365 business Banking supports Verification of Payee for SEPA transfers to ensure your payments comply with legal requirements. When you initiate a SEPA transfer, the payee's name is automatically checked. If the payee's name does not match the information held by the bank, you will be notified and can take appropriate action.

The verification takes place in real time during the transfer process, so you are immediately informed if there are any discrepancies. This helps avoid errors and ensures your payments are processed correctly and securely.

![Verification of Payee (VoP) Warning](/assets/images/365-business-banking/vop-warning.png)

## Verification of Payee (VoP) directly in 365 business Banking

Additionally, the **Verification of Payee (VoP)** feature is available in 365 business Banking. With this function, you can verify your master data (e.g., customer and vendor accounts) directly in Microsoft Dynamics 365 Business Central for consistency with the information stored at the bank.
 
<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Good to know</strong>
    The Verification of Payee (VoP) in 365 business Banking is a paid feature that can also be licensed separately from 365 business Banking.<br>Please note that using Verification of Payee (VoP) may incur additional costs.<br>
    <br>
    For more information on licensing and pricing models, please contact your Microsoft partner or 365 business development support.
</div>

The verification results are displayed clearly, allowing you to quickly identify whether the stored names are correct or if adjustments are required.

![Verification of Payee (VoP) in 365 business Banking](/assets/images/365-business-banking/vop/cust-bank-acc.de-DE.png)

### What statuses are there?

The Verification of Payee (VoP) in 365 business Banking has the following statuses:

| Status | Description |
|--------|--------------|
| _Empty_ | The bank account is not a SEPA bank account or incomplete information is available. |
| ⚪ | Verification of Payee (VoP) has not yet been performed for this bank account. The account holder has not been verified against the bank data. |
| ◯ | Verification of Payee (VoP) is not available for this bank account. Possible reasons include technical limitations, unsupported countries, banks, or account types. |
| 🔴 | Verification of Payee (VoP) has failed. The specified account holder does not match the name reported by the bank. This may indicate an incorrect or potentially risky payment. |
| 🟡 | Verification of Payee (VoP) has detected a partial match. The specified account holder differs slightly from the name reported by the bank. Please check the details before further processing. | 
| 🟢 | Verification of Payee (VoP) was successful. The specified account holder matches the name returned by the bank. |

#### What happens in case of a failed verification?

In case of a failed Verification of Payee (VoP) in 365 business Banking, the status '🔴' is displayed. This means that the specified account holder does not match the name reported by the bank. In this case, you should verify the stored information and correct it if necessary to ensure your payments are processed correctly. 

<div class="alert alert-warn">
    <i class="fa-duotone fa-solid fa-triangle-exclamation fa-xl"></i>
    <strong>Note</strong>
    Please note that the execution of SEPA transfers to recipients with failed Verification of Payee (VoP) is not actively prevented.<br>
    365 business Banking only informs you about the mismatch, so you can take appropriate action.<br>
    <br>
    <img src="/assets/images/365-business-banking/vop/vop-warning-pmt-journal.de-DE.png" alt="VoP Warning in Payment Journal">
</div>

#### What happens in case of a partial match?

In case of a partial match, the status '🟡' is displayed. This means that the specified account holder differs slightly from the name reported by the bank. In this case, the system offers to update the account holder name with the name returned by the bank.

![VoP Partial Match](/assets/images/365-business-banking/vop/vop-close-match-qst.de-DE.png)

## What happens in case of a mismatch?

If the payee's name does not match the information held by the bank, you will receive a warning. In this case, you can review the transfer and correct it if necessary before it is executed. This gives you the opportunity to fix errors and ensure your payment goes to the correct recipient.

## How can I manage differing account holders?

365 business Banking allows you to manage differing account holders. A typical use case is when you regularly make payments to a recipient whose name differs from the name held by the bank (for example, company names or trade names).

In these cases, you can enter a differing name in the **Account Holder** field on the customer or vendor bank account, which 365 business Banking will use when initiating SEPA transfers.

![Vendor bank account card](/assets/images/365-business-banking/vendor-bank-account.de-DE.png)

### Step-by-step guide

Follow these steps to enter a differing account holder. The example below uses a vendor bank account:

1. Select **Vendors** in the Microsoft Dynamics 365 Business Central search.
2. Open the card of the desired vendor.
3. Choose the **Vendor** action menu and the **Bank Accounts** action.
4. Open the vendor's desired bank account.
5. Check the **Account Holder** field. Enter the differing name here that should be used for recipient verification.

<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Good to know</strong>
    Verification of Payee (VoP) is intended to protect against fraud and increase the security of processing SEPA transfers.<br>
    Please make changes to the Account Holder field only if you are sure the differing name is correct and used regularly.
</div>
