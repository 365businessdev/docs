---
layout: default
title: changelog
permalink: /new-and-planned/changelog/365-business-eric/
---

#### Version 17.10.151.6871

 - Add One-Stop-Shop (OSS) support (CSV-Export)
 - Update to ERiC 37.2 (2023 Update)
 - Prevent Tax Data from modifications after transmission.
 - Add VAT Date Type support (BC21 or later)
 - Fix infinite loop in Password dialog for PFX certificate.
 - Update `FRISTVERLAENGERUNG` schema to version 21.

#### Version 17.9.132.5631

 - Fix CR/LF in Company Information
 - Add Recapitulative Stmt. Total Group in ELSTER Tax Data Card
 - Check Recapitulative Stmt. Amount with Sales Adv. Notification Amount (Tax Figure `41`)
 - Fix translation
 - Fix Validation Message handling prior submission

#### Version 17.9.125.5182

 - Fiscal Year 2022 update (ELSTER schema change) for USt 2022.
 - Update manufacturer id in ELSTER XML file.
 - Add actions from standard sales vat adv. notif. card.
 - Add visibility control for Calculate action.
 - Remove legacy code

#### Version 17.8.102.4714

 - Fix error message "Analysis Setup is empty" if OPplus is installed but Trial Balance and VAT module is not licensed.

#### Version 17.8.98.4682

 - Add OPplus Affiliation (Organschaft) support
 - Add additional VAT Business Posting Group Filter for Recapulative Statement calculation

#### Version 17.8.92.4457

 - Add ELSTER User Certificates feature
 - Add Copy VAT Statement to Company feature
 - Add Copy ELSTER Setup to Company feature
 - Fix issue #1936 - verification error message for ZMDO verification (introduced in version 17.7.78.4114)
 - Fix issue #1913 - Annual VAT Return (USt) Period Length display (month instead of year)
 - Fix issue #1911 - Notification title length exceeded (translation issue)

#### Version 17.7.82.4330

 - Fix automated tests (false-positive test)

#### Version 17.7.78.4114

 > **Important**<br>To be able to submit Tax Data for fiscal year 2022 you need to update to this version or later.

 - Fiscal Year 2022 update (ELSTER schema change)
 - Fix "Show Entries" action (DrillDown) in Tax Data Lines, for ZMDO data type, if VAT Registration No. is empty
 - Visualize mandatory fields in Tax Data Line
 - Add additional verification for ZMDO Tax Data Lines
 - Add additional Support URLs for ELSTER validation messages
 - Fix set ERiC Figure Code for Tax Data Type if not properly set while installation
 - Fix TableRelation in ELSTER Setup

#### Version 17.6.67.3691
 - Add support for Annual VAT Return (USt)
 - Add additional validation error handling procedures to support customer in solving issues

#### Version 17.5.53.2489
 - Add ELSTER Validation Error to Tax Data Card
 - Retrieve Validation Errors from ELSTER
 - Fix overflow issues in Data Supplier and Company Information

#### Version 17.4.46.2218
 - Add support for undefined VAT Statement Line Amount Type.\
   *(see CRONUS Demo Company Setup.)*

#### Version 17.3.45.2186
 - Minor bugfix Recapulative Statement (ZMDO)
 - Added Tax Figure `50` and `37` for Sales VAT Adv. Notification (UStVA) Submission 2021

#### Version 17.3.42.2083
 - *ELSTER Tax Data*
   - New User Interface.
   - Added Tax Figure Calculation.
   - Data Migration from Sales VAT Adv. Notification (UStVA) & VAT Reports (ZMDO).
   - Added Tax Data File (for XML Submission Document & Submission Confirmation).
 - Added support for Premanent Time Limit Extension (Dauerfristverlängerung).
 - Added support for Request of Time Extension (Fristverlängerung).
 - Optimzed validation error handling.

 >**Important**<br>
 With this release we announce that we will discontinue support for the ELSTER VAT Localization for Germany Extension and VAT reports.<br>It is planned to remove the support completely with the 2022 release.

#### Version 15.1.71.0
 - Added support for Recapulative Statement (VAT Report / ZMDO).

#### Version 15.0.32.0
 - Initial release for Microsoft Dynamics 365 Business Central.
 - Support for Sales VAT Adv. Notification Submission.
