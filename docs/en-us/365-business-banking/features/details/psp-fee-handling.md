# Payment Service Provider Fees

## Business Value

Payment service providers (PSPs) frequently charge fees for processing payments through their platforms. These fees are typically deducted directly from payment transactions, which can lead to discrepancies between expected and actually received amounts. Managing and posting these fees in Microsoft Dynamics 365 Business Central can be complex and requires accurate tracking to ensure financial integrity and to correctly and completely settle open items (e.g., sales invoices).

## Feature Description
 
<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Good to know</strong>
    This feature is supported for all payment service providers (PSPs) integrated into 365 business Banking.
</div>

The payment service provider integration in 365 business Banking supports the automatic capture of fees charged by payment service providers for processing payments for all connected [payment service providers (PSPs)](../../payment-services.md). These fees are automatically extracted from imported payment transactions and recorded in Microsoft Dynamics 365 Business Central as separate transactions in the payment reconciliation journal.

Users can easily track the actually received amounts and associated fees and correctly and completely settle open items (e.g., sales invoices). The fees can also be automatically posted to general ledger accounts (e.g., banking service charges) or as additional customer ledger entries via [posting rules](../../bank-reconciliation-rules.md).

Overall, the automatic payment service provider fee capture feature in 365 business Banking helps reduce administrative overhead, improve the accuracy of financial data, and increase the efficiency of business processes.