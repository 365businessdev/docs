# Bank Integration with 365 business Banking

With 365 business Banking, you can streamline your banking processes and optimize integration with Microsoft Dynamics 365 Business Central. This extension allows you to directly connect bank accounts, automate the retrieval of bank transactions, and efficiently manage payments.

The bank integration is facilitated through [finAPI GmbH](https://www.finapi.io/), which provides a secure and reliable interface to various banks in Germany. This enables you to retrieve your financial data in real-time and initiate payments directly from Microsoft Dynamics 365 Business Central.

365 business Banking distinguishes between Account Information (AIS) and Payment Initiation (PIS).

## Account Information (AIS)

The Account Information Service (AIS) allows you to retrieve bank transactions in real-time and monitor your account balances. finAPI provides reliable access to bank accounts via the PSD2-compliant XS2A interface, the European standard for Open Banking. This enables secure and stable connections to payment accounts such as checking accounts.

Additionally, finAPI supports the German FinTS protocol (formerly HBCI). FinTS allows access to numerous additional accounts that are often not accessible via the XS2A interface. These include savings accounts, building society accounts, credit card accounts, and securities accounts. If neither the XS2A interface nor FinTS is available, finAPI uses web scraping as a fallback method to ensure comprehensive data access in these cases.

Depending on the bank, country, and available interface, the following accounts and data sources can be connected:

<ul>
<i aria-hidden="true" class="fas fa-check"></i> Bank accounts (checking, savings, and business accounts)<br>
<i aria-hidden="true" class="fas fa-check"></i> Securities accounts<br>
<i aria-hidden="true" class="fas fa-check"></i> Credit accounts<br>
<i aria-hidden="true" class="fas fa-check"></i> Credit cards<br>
<i aria-hidden="true" class="fas fa-check"></i> Building society accounts<br>
<i aria-hidden="true" class="fas fa-check"></i> Cooperative shares (e.g., at Volks- and Raiffeisenbanken)
</ul>

## Payment Initiation (PIS)

The Payment Initiation Service (PIS) allows you to initiate payments directly from Microsoft Dynamics 365 Business Central. finAPI ensures that these payments are processed securely and reliably by using the PSD2-compliant XS2A interface. Depending on the country and connected bank, finAPI supports various account-to-account payments. Payments can be made not only in euros but also in other local currencies such as Romanian Leu, Czech Koruna, or British Pounds. Supported payment types include SEPA payments within the European payment area as well as payments to or from the United Kingdom.

The supported payment types include:

<ul>
<i aria-hidden="true" class="fas fa-check"></i> Transfers<br>
<i aria-hidden="true" class="fas fa-check"></i> Instant transfers<br>
<i aria-hidden="true" class="fas fa-check"></i> Scheduled transfers<br>
<i aria-hidden="true" class="fas fa-check"></i> Standing orders<br>
<i aria-hidden="true" class="fas fa-check"></i> Bulk transfers<br>
<i aria-hidden="true" class="fas fa-check"></i> Direct debits<br>
<i aria-hidden="true" class="fas fa-check"></i> Bulk direct debits
</ul>

## Resources

As part of the communication between Microsoft Dynamics 365 Business Central and finAPI, the 365 business API is used for authentication and securing communication. No data is stored or processed during this process.

![Resources](/assets/images/365-business-banking/resources.en-US.png)

The following DNS names, ports, and protocols are used:

| DNS Name | Port | Protocol | Description |
| --- | --- | --- | --- |
| `api.365businessapi.com` | `443` | `HTTPS` | API endpoint for accessing the 365 business API. |
| `license.365businessapi.com` | `443` | `HTTPS` | API endpoint for license verification and management. |
