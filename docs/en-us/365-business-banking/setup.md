# Setup

Before you can start using 365 business Banking, you need to configure some basic settings in Microsoft Dynamics 365 Business Central. The installation of 365 business Banking already provides a basic setup, which you can customize to meet your specific requirements.

## General Ledger Setup

In the **General Ledger Setup**, under the **Banking** section, you will find the settings for 365 business Banking. The following options are available:

| Field Name | Description | Default Value |
| --- | --- | --- |
| Payment Reference Overflow Option | Specifies what to do if multiple invoices are paid, but the payment reference exceeds the maximum length. |  |
| Bank Account No. Series | Specifies the number series for bank accounts. | _Microsoft Standard_ |
| Standing Order No. Series | Specifies the number series for standing orders. | `SO00001` - `SO99999` |
| Payment Advice No. Series | Specifies the number series for payment advices. | `RN00001` - `RN99999` |

### Payment Reference Overflow Option

The payment reference in bank transactions is limited to 140 characters. In cases of batch payments or settling multiple invoices with one payment, this may result in the payment reference being insufficient to include all document numbers or references.
The **Payment Reference Overflow Option** allows you to define how to handle such cases. You can choose from the following options:

- **Create Payment Advice**<br>
  The Create Payment Advice option automatically generates a payment advice for the affected items when payments exceed the maximum length of the payment reference.
- **Split Payment** (Recommended)<br>
  The Split Payment option divides the payment into separate transactions for any additional items not included in the payment reference when the maximum length is exceeded.

<div class="alert alert-success">
    <i class="fa-duotone fa-solid fa-question-circle fa-xl"></i>
    <strong>Did you know?</strong>
    Payment advices complicate the reconciliation of incoming payments, as additional reference numbers (payment advice numbers) are created, which are not known in the recipient's system and complicate automatic allocation.<br>
    We recommend using the <strong>Split Payment</strong> option to make it easier for your business partners to allocate payments and to achieve a high degree of automation.
</div>

## Payment Methods

The payment methods determine which types of payments can be used for your bank accounts and transactions. These settings can be found on the **Payment Methods** page, where you can select and configure the desired payment types.

For more information on setting up payment methods, see the [Payment Method Setup](setup/payment-method-setup.md) documentation.

## Banking User Setup

Setting up the Banking User is an important step in establishing a secure connection to your bank accounts. The Banking User is responsible for connecting to your bank accounts and allows you to retrieve transactions and initiate payments.

For more information on setting up the Banking User, see the [Banking User Setup](banking-user-setup.md) documentation.

## Additional Settings

In addition to the settings mentioned above, you can make further adjustments to optimally tailor 365 business Banking to your needs. These include:

- **ZKA Codes**<br>
  ZKA codes (Business Transaction Code, GV-Code) are used to identify specific business transactions. These codes can be managed on the **ZKA Codes** page.<br>
  For more information, see the [ZKA Codes Setup](setup/zka-code.md) documentation.
- **SEPA Purpose Codes**<br>
  SEPA Purpose Codes are used to indicate the purpose of a payment. These codes can be managed on the **SEPA Purpose Codes** page.<br>
  For more information, see the [SEPA Purpose Codes Setup](setup/sepa-purpose-code.md) documentation.