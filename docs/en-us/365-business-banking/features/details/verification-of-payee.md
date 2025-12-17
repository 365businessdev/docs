# Payee Verification (Verification of Payee - VoP)

## Business value

Since October 2025, payee verification (Verification of Payee - VoP) has been mandatory for transfers within the SEPA area, according to the EU Instant Payments Regulation. This prevents fraud and increases payment security by comparing the payee’s name with the information stored at the bank.

By specifying the [**Account Holder**](../../bank-payment-vop.md#how-can-i-manage-differing-account-holders) in the bank accounts of customers and vendors, 365 business Banking already allows companies to maintain different account holder and customer or vendor names. This ensures that payments are assigned and processed correctly while improving the transparency and traceability of payment processes.

With the extended support for payee verification (VoP) in 365 business Banking, companies can additionally ensure that bank accounts are validated before they are used and before payments are executed. This helps avoid errors and ensures that payments are processed correctly and securely. Furthermore, it reduces the risk of payment defaults and fraudulent activities, leading to improved financial security for the company.

## Feature description

The extended support for payee verification (VoP) in 365 business Banking enables the validation of bank accounts directly in Microsoft Dynamics 365 Business Central. The verification takes place in real time when a bank account is entered or modified for customers and vendors. When a bank account is entered or changed, 365 business Banking sends a request to the corresponding bank to verify the account holder’s name. If the account holder’s name does not match the information stored at the bank, you are notified and can take appropriate action.

Four different verification results can occur:

| Result | Description |
| --- | --- |
| **Match** | The IBAN and the name match completely. |
| **Close Match** | The name partially matches. There may be minor deviations or spelling errors. |
| **No Match** | The IBAN and the name do not match. |
| **No check possible** | The verification could not be performed, for example because the beneficiary bank does not participate in the VoP procedure. |

Depending on the result of the verification, you can decide whether to accept the bank account, correct it, or take further action before executing payments to that account.
