# 365 business E-Invoice Changelog

## Version 25.2.393.20399

- Fix remove Description from ApplicableTradePaymentDiscountTerms
- Do not export lines with zero quantity
- Fix GetVATAmntLines() for multiple VAT rates

## Version 25.2.389.20073

- Fix BasisPeriodMeasure XML namespace
- Optimize ZUGFeRD Export Validation
- Feature #61346 Add support for "Charge (Item)", implemented as Document Level `SpecifiedTradeAllowanceCharge`

## Version 25.2.387.19971

- Add support for Service Participant ID (Routing ID / Leitweg ID)
- Compatibility fix for Microsoft Dynamics 365 Business Central 2025 Release Wave 1 (26.2)

## Version 25.2.383.19533

- Fix issue #61164 - Sending E-Document through Extended E-Document Service Flow (Document Sending Profile) fails

## Version 25.2.379.19451

- Feature #61093 Implement E-Document Service Integration V2 _(applies to Business Central 2025 Release Wave 1 or newer)_
- Feature #59942 Add common ZUGFeRD / Factur-X structured header and line model for import and export
  - Add extensibility events (see [AL Developer - E-Invoice](https://docs.365businessdev.com/al-developer/365businesseinvoice/readme) for more information)

## Version 25.1.306.18251

- Added support for vendor creation from E-Invoice document.
  - Includes support for bank account creation.
- Added structured XML data viewer for E-Invoice documents, to support pure XML E-Documents (e.g. XRechnung).
- Added raw XML data viewer for E-Invoice documents.
- Added support for E-Invoice document validation.
- Added Unit of Measure (UoM) code mapping for E-Invoice documents.

## Version 25.0.229.17287

- Initial Release of 365 business E-Invoice for Microsoft Dynamics 365 Business Central 2024 release wave 2 (25.0) or newer.