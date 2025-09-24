# 365 business Banking Changelog

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
