# Frequently Asked Questions (FAQ)

In the following section, you will find answers to frequently asked questions about 365 business Banking.

<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Good to know</strong>
    Your question is not listed here?<br>
    Feel free to contact us via our <a href="https://servicedesk.365businessdev.com/" target="_blank">Service Desk</a>, we are happy to help.
</div>

## General

### How does 365 business Banking work?

365 business Banking integrates all payment transactions directly into Microsoft Dynamics 365 Business Central. You can connect bank accounts, retrieve account statements, create and send payments—all from your familiar environment, without external portals or tools.

Learn more at [What is 365 business Banking](banking-whatis.md).

### Do I need additional software or a banking app?

No, 365 business Banking works entirely within Business Central. The bank connection is made via the certified finAPI interface, no additional software required.

### Which bank accounts can I connect?

You can connect all bank accounts that have a PSD2-compliant interface. This includes almost all banks in the SEPA area (especially Germany and Austria).

Learn more at [Supported Banks](supported-banks.md).

---

## Security

### How secure is the solution?

The connection is made via **finAPI**, a **BaFin-regulated PSD2 interface**. All data is transmitted encrypted and processed in compliance with GDPR. No sensitive data is permanently stored outside your Business Central environment.

### What is finAPI?

finAPI GmbH is one of the leading providers of Open Banking and Open Finance solutions in Germany. As a BaFin-licensed account information and payment initiation service, finAPI focuses on software solutions for the aggregation and analysis of financial data for innovative financial applications.
finAPI provides the PSD2-compliant bank connection for 365 business Banking.

### Where is my data stored?

Your data is stored exclusively in your Microsoft Dynamics 365 Business Central environment. Processing in the 365 business API takes place without persistent storage of data or access information.

### How secure is my data?

The security of your data is our top priority. We use state-of-the-art security measures to protect your data and prevent unauthorized access. Additionally, the password for banking user authentication is stored exclusively in your Microsoft Dynamics 365 Business Central environment and cannot be viewed by us or other third parties (e.g., finAPI).

---

## Features

### Which payment types does the app support?

365 business Banking supports:

* SEPA transfers
* SEPA instant transfers
* SEPA direct debits (CORE and B2B)
* Standing orders

Learn more at [Payments](bank-payment.md).

### Can account statements be retrieved automatically?

Yes, account transactions can be retrieved automatically and imported into Business Central.

Learn more at [Automate Bank Account Reconciliation](bank-reconciliation-automation.md).

---

## Onboarding

### How can I use existing bank accounts from Microsoft Dynamics 365 Business Central?

The process for connecting bank accounts takes existing bank accounts in Microsoft Dynamics 365 Business Central into account and matches them via IBAN.

### My bank accounts already have bank entries, what should I do to avoid importing duplicates?

We recommend using the `Last Statement Date` field to specify from which date bank entries should be imported. This ensures that only new transactions are imported and no duplicates occur. For example, if you last imported transactions up to June 30, 2025, enter this date or July 1, 2025 (recommended) in the `Last Statement Date` field.

### How do I set up a bank account?

After installing the app, you can create new connections via the **"Connect Bank Accounts"** page. Select the bank, authenticate via web form, and authorize the connection.

### What happens if MFA (e.g., smsTAN) is required?

The app automatically detects web form requests. In this case, a notice is displayed, and the web form opens in a new window for authentication.

### Can I manage multiple bank accounts at the same time?

Yes, you can connect and manage any number of bank accounts separately. Multi-bank functionality is fully supported.

---

## Licensing & Trial

### Is there a trial version?

Yes! You can test **365 business Banking free of charge for 30 days** with full functionality—no automatic renewal, no risk.

### How is licensing handled after the trial period?

Various licensing methods are available.

Learn more about [Licensing](../licensing/index.md)

---

## Support

### Where can I find technical documentation?

The complete documentation can be found at:
[https://docs.365businessdev.com/de-de/365-business-banking](https://docs.365businessdev.com/de-de/365-business-banking)

### How can I contact support?

If you have questions or technical issues, you can reach our support team at:
📧 [support@365businessdev.com](mailto:support@365businessdev.com)
