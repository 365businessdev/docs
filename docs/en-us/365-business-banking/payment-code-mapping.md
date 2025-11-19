# Payment Code Mapping

<div class="alert alert-warn">
    <i class="fa-duotone fa-solid fa-triangle-exclamation fa-xl"></i>
    <strong>Attention</strong>
    The payment code mapping feature has been deprecated and will no longer be available in future versions of 365 business Banking.<br>
    Instead, use the <a href="bank-reconciliation-rules.html"><strong>Reconciliation Rules</strong></a> to enable more accurate mapping of bank transactions to the corresponding accounts and improve reconciliation efficiency.
</div>

As part of a SEPA payment, additional payment codes are transmitted alongside the payment reference, which are used to identify the payment. These codes can be used during payment reconciliation to improve the assignment of bank transactions to open items or general ledger accounts.

The following payment codes are supported:

- **ZKA Code**: The ZKA Code, also known as the business transaction code, is used to identify the business transaction of the bank transaction. This code is usually provided by the bank and can be used to identify the type of transaction.
  For more information, see [ZKA Code](setup/zka-code.md).

- **SEPA Purpose Code**: The SEPA Purpose Code is used to identify the purpose of the SEPA transfer. This code is optional and can be used to specify the purpose of the payment.
  For more information, see [SEPA Purpose Code](setup/sepa-purpose-code.md).

On the **Payment Code Mapping** page, payment codes can be assigned to account type and account number. This enables more accurate assignment of bank transactions to the corresponding accounts and improves the efficiency of reconciliation.

![Payment Code Mapping](/assets/images/365-business-banking/payment-code-mapping.en-US.png)

Both the ZKA Code and the SEPA Purpose Code are optional. If you use these codes, you can improve the assignment of bank transactions to open items or general ledger accounts and increase the efficiency of reconciliation.

## See Also

- [Bankkontoabstimmung](bank-reconciliation.md)
- [ZKA Code](setup/zka-code.md)
- [SEPA Purpose Code](setup/sepa-purpose-code.md)