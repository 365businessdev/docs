---
layout: default
title: changelog
permalink: /new-and-planned/changelog/365-business-pdf/
---

#### Version 20.4.62.18112

  - Do not export G/L Account Nos.
  - Deactivate ZUGFeRD Feature if E-Invoice app is installed
    - Skip processing for sales invoice / credit memo if E-Invoice app is installed
    - Add E-Invoice integration _(used with 365 business E-Invoice 25.1 or later)_
  - Add `ConcatenateDocument(List of [Text])` implementation in public API
  - Fix typos

#### Version 20.3.58.16613

 - Update ZUGFeRD / Factur-X implementation to version 2.3.0 (ZUGFeRD) / 1.0.07 (Factur-X) 

#### Version 20.2.51.14062

 - Feature #57892 - Add ZUGFeRD 2.1 / Factur-X 1.0.05 support (additional feature).
  - Support for Sales Invoice.
  - Support for Sales Credit Memo.
 - Update to 365 business API model v4
 - Add support for PDF security configuration in concatenate or stationery feature.
  - Password prompt 
  - Functional restriction, like print, edit or fill fields.
 - Add default compression from 365 business API to shrink file size of PDF files from Microsoft Dynamics 365 Business Central.

#### Version 20.1.19.11252

 - Fix blank code fields possible.
 - Add User, Company and Tenant licensing models.

> **Important**<br>With this release licensing is changed from pay-as-you-go to new licensing models.

#### Version 20.1.12.5629

 - Add Document Print Intent Configuration for
   - Stationery Configuration
   - Concatenate Configuration
 - Fix filtering for Concatenate Configuration.
 - Add Document Attachments (see [Documentation](https://docs.365businessdev.com/en-US/365-business-pdf/document-attachments/))
 - Fix multiple API request for concatenate multiple documents.

#### Version 20.0.6.5389

 - Redesign
 - Support for Microsoft Dynamics 365 Business Central 2022 Release Wave 1 (20)
 - Support for multiple concatenate documents.
 - Fix RDLC report support.

#### Version 15.0.8.0

 - Support for PDF service version 2.0
 - Add support for concatenate documents.

#### Version 14.0.0.0

 - Initial release
 - Support for PDF service version 1.0
 - Support for signing documents.
 - Support for apply stationery to documents.