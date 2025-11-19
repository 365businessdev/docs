# Verification of Payee (VOP)

Since October 2025, the Verification of Payee (VOP) has been mandatory for SEPA transfers in Germany. This measure aims to prevent fraud and increase payment security by matching the payee's name with the information stored at the bank.

365 business Banking supports Verification of Payee for SEPA transfers to ensure your payments comply with legal requirements. When you initiate a SEPA transfer, the payee's name is automatically checked. If the payee's name does not match the information held by the bank, you will be notified and can take appropriate action.

The verification takes place in real time during the transfer process, so you are immediately informed if there are any discrepancies. This helps avoid errors and ensures your payments are processed correctly and securely.

![Verification of Payee Warning](/assets/images/365-business-banking/vop-warning.png)

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
    Recipient verification (VOP) is intended to protect against fraud and increase the security of processing SEPA transfers.<br>
    Please make changes to the Account Holder field only if you are sure the differing name is correct and used regularly.
</div>
