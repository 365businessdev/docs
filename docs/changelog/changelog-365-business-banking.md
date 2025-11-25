# 365 business Banking Changelog

## Version 18.1.331.22403

- Add feature #61920 Reconciliation Rules
- Add feature #61992 SEPA Payment Import
- Add feature #62648 Set ending balance in Payment Recon. Journal (regular bank account only)
- Fix issue #62735 PayPal transaction ID is not unique

## Version 18.1.309.22016

- Preserve bank transaction details on transfer unapplied bank acc. recon. lines to new statement
- Add fee description handling for PayPal transactions in bank transaction model
- Clear banking user token on password change
- Prevent bank acc. recon. lines to be applied multiple times through automation

## Version 18.1.301.21939

- Add feature #62190 Mollie Banking Provider integration
- Fix issue #62307 Post bank acc. recon journal and not using BNK bank account.

## Version 18.1.291.21895

- Fix end date calculation for get transactions from PayPal
- Add validation for Gen. Journal Batch type in Bal. Account No. validation
- Clear access token if invalid from banking user deletion or unauthorized response
- Add temporary record to manage filters in CarryOutPayment procedure
- Fix pagination for Stripe balance transactions, after first retrival
- Fix issue #62286 Update Banking Provider for existing Bank Accounts

## Version 18.1.282.21685

- Add feature #62149 Stripe & PayPal Banking Provider integration
- Add feature #62191 Transfer unapplied payment journal lines to new statement

## Version 18.0.271.21552

- Add feature #62103 Auto Split Bank Recon. Line
- Fix issue #62108 Text overflow for `differentCreditor` / `differentDebitor`
- Disable fuzzy matching for document number to reduce false positives
- Add feature #62100 XS2A, FinTS & Web Scraping Bank Interface implementation

## Version 18.0.247.21447

- Add feature #62013 365 business Banking Webform control add-in
  - Add support for for Microsoft Dynamics 365 Business Central 2021 release wave 1 (18.0) or newer.
- Fix non-updating bank account chart in bank account list
- Add error handling for invalid bank account and bank transaction data
- Improve performance of bank transaction retrieval and payment reconciliation
- Update tooltip texts for better user guidance

## Version 18.0.242.21422

- Add feature #62023 Additional payment instructions and metrics logging
  - Log metrics for payment instructions processing
  - MSFT per-user plan licensing cumulative payment instructions
- Fix issue #62026 Create Banking User ID based on Tenant ID, Environment Name & Company System ID
- Fix issue while date handling in CapabilitiesFromJson to use TryGetDateTimeFromJson for improved error handling
- Change field types for differentDebitor and differentCreditor to `Text[200]` for improved data handling

## Version 18.0.222.21338

- Initial Release of 365 business Banking for Microsoft Dynamics 365 Business Central 2025 release wave 1 (26.0) or newer.
