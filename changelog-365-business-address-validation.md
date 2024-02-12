---
layout: default
title: changelog
permalink: /new-and-planned/changelog/365-business-address-validation/
---

#### Version 18.10.121.13641

 - Task #57874 - Add `Address Validation Scope` setting.
 - Optimize known address detection.
 - Optimize Address Validation Batch visualization.
 - Fix issue #57871 - Show validation errors in bulk processing.
 - Task #57869 - Suggest preferred option for accept address data in bulk processing.
 - Fix issue #57875 - Auto-apply correct and validated address data.

##### Know issue

 - Address Prediction is not working properly, after collapse *Invoicing* tab in sales or purchase documents.

#### Version 18.9.111.12432

 - Fix licensing issue, for usage-based 365 business API customers.
 - Fix address data initialization infinity loop.

#### Version 18.9.102.11230

 - `Address Prediction API` for integration in custom entities.
 - Fix HTML decoded special characters in Address Prediction.
 - Perform validation on address prediction result.
 - Write Country/Region Code only if needed.
 - Respect UseCounty() in Address Data.
 - Do only replace non blank fields in user modification.
 - Only migrate complete address data.
 - Fix `AddOrUpdateAddressData()`
 - Update contact from vendor/customer on modify.
 - Add `OnIsAddressPredictionEnabledForTableNo()` event.
 - Add User, Company and Tenant licensing models.

> **Important**<br>With this release licensing is changed from pay-as-you-go to new licensing models.

#### Version 18.7.86.6114
 - Removed `Address Validation Status`.
 - Add `Address Data` Dictionary to support internal address checks w/o API consumption.
 - Add Address Prediction support for:
   - Sales Quote,
   - Sales Order,
   - Purchase Quote,
   - Purchase Order.
 - Add Address Validation support for:
   - Purchase Quote,
   - Purchase Order.
 - Update Permission Sets.
 - Add Address field text decoration.

#### Version 18.6.74.5706
 - Add translations es-ES, da-DK, fr-FR, nl-BE, nl-NL.
 - Fix Address Selection in Sales Order "Validate Address" action.
 - Add Address prediction service failure telemetry.

#### Version 18.6.72.5426

 > **Important**<br>365 business Address Validation requires Dynamics 365 Business Central 2021 Release Wave 1 (18) or later.

 - Compatibility update.

#### Version 17.6.70.5125

 - Address Prediction support for:
   - Contacts,
   - Customers,
   - Vendors,
   - Resources and
   - Employees.
 - Move setup to Address Validation Setup.
 - Add Address Validation Role Center.
 - Add Address Validation Permission Set (BASIC)
 - Add Address Validation Status List.
   - Add support to manually mark addresses as validated.

##### Known issues

 - Address Prediction is not working, after switch between *View* and *Edit* mode in a page.

#### Version 17.5.389.0

 - Add Address Validation User Settings.
 - Add Notification for address modification.
 - UI re-design for Address Verification.
 - Add events for 3rd-party integration.
 - Allow address validation with City or Post Code instead of both.

#### Version 17.4.34.3818

 - Add check for mandatory fields for address validation.
 - Fix County usage.
 - Updated Cust./Vendor Templates usage.
 - Added new documentation (https://docs.365businessdev.com/)
 - Fix tooltip descriptions.

#### Version 17.3.33.3727

 > **Important**<br>365 business Address Validation requires Dynamics 365 Business Central 2020 Release Wave 2 or later.

 - Optimize integration.

#### Version 15.1.7.0

 - Bulk Address Validation for:
   - Contacts,
   - Customers and
   - Vendors 

#### Version 15.0.63.0

 - Fix third-party interaction while address validation.
 - Add 365 business API Address Validation service version 2.0 support.

#### Version 15.0.48.0

 - Add Address Validation Support for Ressources.
 - Minor bugfixes.

#### Version 15.0.34.0

 - Initial release for Microsoft Dynamics 365 Business Central.
 - Address Validation on Record change for
   - Contacts,
   - Customers,
   - Vendors,
   - Sales Documents,
   - Ship-to Addresses,
   - Purchase Documents,
   - Order Addresses and
   - Alternative Addresses
