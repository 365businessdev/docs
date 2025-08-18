# Payment Method Setup

The Payment Method Setup in Microsoft Dynamics 365 Business Central allows you to configure and manage various payment methods. You can select the payment methods relevant to your bank accounts and transactions and adjust them accordingly.

Using the **Payment Method** field, you can specify the desired payment method for outgoing payments. The basic payment methods are:

- SEPA Credit Transfer
- SEPA Instant Credit Transfer
- Direct Debit
- Standing Order

![Payment Method Setup](/assets/images/365-business-banking/payment-method-setup.en-US.png)

## Additional Payment Methods

In addition to the payment methods mentioned above, individual payment methods are derived from the main types based on the parameters set in the outgoing payment. Accordingly, you can also use the following payment methods:

- SEPA Scheduled Credit Transfer
- SEPA Bulk Credit Transfer
- SEPA Bulk Direct Debit

### SEPA Scheduled Credit Transfer

A SEPA Scheduled Credit Transfer is a **SEPA Credit Transfer** executed at a later date. You can set the execution date (**Posting Date**) in the Payment Journal. This payment method is useful for scheduling payments that are due at a later time.

### SEPA Bulk Credit Transfer

A SEPA Bulk Credit Transfer is a **SEPA Credit Transfer** that combines multiple payment recipients into a single transaction. This payment method is particularly useful when making multiple payments to different recipients simultaneously but want to post them together.

### SEPA Bulk Direct Debit

A SEPA Bulk Direct Debit is a **SEPA Direct Debit** that combines multiple payers into a single transaction. This payment method is particularly useful when collecting multiple direct debits from different accounts simultaneously but want to post them together.

