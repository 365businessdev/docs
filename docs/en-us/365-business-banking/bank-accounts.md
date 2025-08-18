# Bank Accounts

365 business Banking allows you to manage your bank accounts easily and securely. You can add, edit, and delete bank accounts, as well as retrieve transactions and initiate payments. Various account types are supported depending on the connected bank (see [Banks](supported-banks.md)).

Among others, you can manage the following account types:

<ul>
<i aria-hidden="true" class="fas fa-check"></i> Bank accounts (checking, savings, and business accounts)<br>
<i aria-hidden="true" class="fas fa-check"></i> Securities accounts<br>
<i aria-hidden="true" class="fas fa-check"></i> Loan accounts<br>
<i aria-hidden="true" class="fas fa-check"></i> Credit cards<br>
<i aria-hidden="true" class="fas fa-check"></i> Building savings accounts<br>
<i aria-hidden="true" class="fas fa-check"></i> Cooperative shares (e.g., at Volks- and Raiffeisenbanken)
</ul>

## Bank Account

Bank accounts are the foundation for managing your bank transactions. You can add and manage bank accounts in Microsoft Dynamics 365 Business Central to initiate payments and retrieve bank transactions.

![Bank Account](/assets/images/365-business-banking/bank-account.en-US.png)

## Authorization and Security

The connection to your bank accounts is established via [finAPI GmbH](https://www.finapi.io/), which provides a secure and reliable interface to various banks in Germany and Europe. Authentication is performed through the 365 business API, ensuring that your data is protected and no sensitive information is cached or processed.

Access to your bank accounts is managed through a banking user that you create in Microsoft Dynamics 365 Business Central. This user is responsible for connecting to your bank accounts and allows you to retrieve transactions and initiate payments. The user is stored exclusively in your Microsoft Dynamics 365 Business Central, and no data or access credentials are stored or shared with third parties.

For more information, see [Banking User Setup](banking-user-setup.md).

## See Also

- [Bank Integration with 365 business Banking](banking-howitworks.md)
- [Banks](supported-banks.md)
- [Banking User Setup](banking-user-setup.md)