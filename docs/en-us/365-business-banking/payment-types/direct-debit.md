# SEPA Direct Debit

In this section, you will learn how to perform SEPA direct debit in Microsoft Dynamics 365 Business Central. SEPA (Single Euro Payments Area) enables businesses to make payments in euros within the SEPA area efficiently and cost-effectively. In the direct debit process, you use prior authorization, in the form of the SEPA mandate, to collect payments from your customers' accounts.

<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Good to know</strong>
    Microsoft Dynamics 365 Business Central supports the execution of SEPA direct debits via the <strong>Payment Journals</strong> and <strong>Direct Debits</strong>. Both options are fully supported by 365 business Banking, but we recommend using the <strong>Direct Debits</strong> page.
</div>

## Step-by-Step Guide - SEPA Direct Debit

To initiate direct debits, use the **Direct Debits** page in Microsoft Dynamics 365 Business Central. Here, you can create new direct debits, transfer them to the bank, and post the payment receipt.

![SEPA Direct Debits](/assets/images/365-business-banking/direct-debit-collection.en-US.png)

Follow these steps to initiate payments in 365 business Banking:

1. Select **Direct Debits** in the search bar of Microsoft Dynamics 365 Business Central.
2. Select **New** and **Create Direct Debit**.
3. Choose the options for creating the direct debits.
   ![Create Direct Debit](/assets/images/365-business-banking/create-direct-debit-collection.en-US.png)
4. Select **OK** to create the direct debits.
5. Review the created direct debits.
6. Select the action **Process Payments** to process the direct debit.
7. Select **Post Payment Receipts...** to post the payment receipts of the direct debits.

Depending on the bank and the payment method, it may be necessary to use a TAN or another authentication method to confirm the payment. In this case, a dialog will appear to confirm the payment.

![Payment Authorization](/assets/images/365-business-banking/bank-payment-authentication.en-US.png)

1. Select **Authorize** to confirm the payment process.
2. Follow the on-screen instructions to authorize the payment. This may include entering a TAN or confirming via a banking app.
   ![Direct Debit Authorization](/assets/images/365-business-banking/bank-payment-authentication-webform.en-US.png)
3. After successful authorization, the direct debit is processed and completed.
   ![Direct Debit Confirmation](/assets/images/365-business-banking/bank-payment-confirmation.en-US.png)
4. Select **Close** to close the dialog and return to payment processing.

## Step-by-Step Guide - Payment Journals

To initiate direct debits, use the Payment Journals in Microsoft Dynamics 365 Business Central. Assign a **Bank Account** and a **Payment Method** to the journal (see [Payment Journals](../payment-journal.md)). The payment method determines whether it is a SEPA direct debit.

Follow these steps to initiate payments in 365 business Banking:

1. Select **Payment Journals** in the search bar of Microsoft Dynamics 365 Business Central.
2. Select an existing journal for your bank account and payment method or create a new journal.
3. Select the action **Edit Journal** to edit the journal.
4. Enter the journal lines for your payments, or use the action **Suggest Payments** to automatically generate payment suggestions.
5. Review the journal lines and ensure all information is correct. Pay special attention to amounts, purposes, and the recipient's bank account.
6. Select the action **Process Payments and Post** to process the direct debit and complete the posting.
7. Confirm the execution of the payments and the posting of the journal.

Depending on the bank and the payment method, it may be necessary to use a TAN or another authentication method to confirm the payment. In this case, a dialog will appear to confirm the payment.

![Payment Authorization](/assets/images/365-business-banking/bank-payment-authentication.en-US.png)

1. Select **Authorize** to confirm the payment process.
2. Follow the on-screen instructions to authorize the payment. This may include entering a TAN or confirming via a banking app.
   ![Direct Debit Authorization](/assets/images/365-business-banking/bank-payment-authentication-webform.en-US.png)
3. After successful authorization, the direct debit is processed and completed.
   ![Direct Debit Confirmation](/assets/images/365-business-banking/bank-payment-confirmation.en-US.png)
4. Select **Close** to close the dialog and return to payment processing.

After confirming and executing the direct debit, the journal lines in the Payment Journal are posted. If the action **Process Payments and Post** was used, the posting is done automatically. Otherwise, you must manually post the journal lines using the action **Post** in the Payment Journal.