# 365 business Banking Changelog

## Version 18.2.398.23725

- Add feature #63856 Shopify Private App Support

## Version 18.2.397.23679

- Add Connection ID to find existing banking bank accounts #63766 Multi-Currency IBAN
- Fix default licensing method
- Fix issue #63812 PayPal error to many transactions

## Version 18.2.394.23593

- Fix issue #63714 SEPA Collective Direct Debit does not work
- Add task #63715 Hide domestic capabilities if not applicable
- Fix feature registration on upgrade, for additional features
- Add feature #63766 Multi-Currency IBAN support

## Version 18.2.391.23494

- Add feature #63128 Verification of Payee
- Add feature #63306 Get Bank Account logo from Bank
- Fix issue #63528 Drill-Down in Role Center Cues does not work
- Unify procedure to set up bank account image #63306
- Add feature #63573 Get additional bank accounts
- Refactor transaction ID generation in Klarna transactions to use SHA256 hash for uniqueness
- Fix payment method translation in Pmt. Journal report #61925
- Add feature 'Balance to Date' in bank account chart
- Add feature #63129 Set up associated bank accounts
- Add feature #63130 Additional match fields
- Fix issue #63624 Posting Type cannot be cleared
- Remove 'Beta' version for Klarna provider #62749
- Add feature #62750 Shopify Payment support
- Improve feature #62149 PayPal transaction retrieval

## Version 18.1.367.22763

- Task #63060 Execution date editable in SEPA Payment Import processing
- Add feature #63077 End-to-End Refernce in Payment Journal
  - Task #63077 Set End-to-End Reference with Suggest Vendor Pmts
- Add feature #61925 Print Payment Journal

## Version 18.1.361.22734

- Fix issue #63037 SEPA 'B2B' collective direct debit not supported returned from FinTS server.
- Add feature licensing checks in banking procedures #63038
- Add GUI feedback for retrieving Klarna transactions and payouts

## Version 18.1.357.22522

- Add feature #62828 Bank Account Reconciliation Line Posting option
- Fix issue #61920 Purchase Document number check
- Fix issue #62826 Klarna "API Key" with extended length of 255 characters
- Fix issue #62827 Copy VAT Setup to Jnl. Lines w/ additional posting setup specified

## Version 18.1.345.22472

- Add feature #61923 Bank Reconciliation Posting Setup with Deferral Schedule
- Add Sender Customer Reference, End-to-End Reference and Transaction ID as payment matching criteria
- Fix issue #62799 Application Method "Apply-to Oldest" is failing with Bank Reconciliation Posting Setup

## Version 18.1.336.22408

- Add feature #62749 Klarna payment service support (BETA)
- Fix GetClearingGLAccountNo() is invoked for bank acc. recon. lines applied to document #61920

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
