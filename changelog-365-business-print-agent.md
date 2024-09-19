---
layout: default
title: changelog
permalink: /new-and-planned/changelog/365-business-print-agent/
---

#### Version 18.8.210.16509

 - Add native support for SATO printers
 - Side-by-side support for User Groups and Security Groups in Business Central 22 - 24
 - Fix "Not found" error message, when opening Print Agent Setup page
 - Add `encoding` parameter for `PrintZPL` procedures.

#### Version 18.8.201.13851

 - Fix custom paper kind usage in Assisted Setup
 - Add `bdev.Print Agent Events` codeunit
  - Add `PrintAgentClientOfflineEvent()` event
  - Add `PrinterOfflineEvent()` event
  - Add `PrinterFailureEvent()` event
 - Auto-fill custom paper width & height

<div class="alert alert-warn">
    <i class="fa-solid fa-triangle-exclamation"></i> <strong>Important:</strong>This version requires an update of the Dynamics 365 Business Central license.
</div>

#### Version 18.8.188.13754
 
 - Fix issue #57864 - Allow disabling printer status check.
 - Fix issue #57821 - Support for custom paper kinds, outside of valid .NET enum range.
 - Fix issue #57867 - Fix logic on "No. of Copies".

#### Version 18.7.177.13071

 - Task #3344 - Add "No. of Copies" setting in printer configuration.
 - General performance optimizations.

#### Version 18.6.172.11679

 - Fix issue #2946 - Update failing, if Print Agent client is offline.

#### Version 18.6.171.11584

 - Add option to direct print from Job Queue Entry.

#### Version 18.6.167.11458
 
 - Task #2660 - Migrate User Group to Security Group for Business Central 22.
 - Task #2831 - Error Message Collector for auto-enable printer configurations.
 - Fix issue #2832 - Rotation support for Print Agent cloud service mode.
 - Task #2896 - Export/Import Print Agent Setup (on-premises only).
 - Fix issue #2900 - Fix RunModal exception on licensing check at OnAfterSetupPrinter event.

#### Version 18.5.158.11287 

 - Task #2686 - Fix Entitlements.

#### Version 18.5.156.11208

 - Task #2686 - Support Microsoft - Per User Offer Plan licensing.
 - Add tenant licensing model.
 - Add max. wait time for async. print job execution.
 - Performance optimizations.

#### Version 18.5.148.10910

 - Task #2731 - Support for localized paper tray names.
 - Task #2732 - Implement async. print job execution.
 - Task #2762 - Add 90°, 180° and 270° rotation support.

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Important:</strong> Asynchronous print job executing is implemented with 365 business Print Agent service 1.4.0.0 and later. Please update 365 business Print Agent service instances to enable asynchronous print job execution.<br><br>
    <a href="https://365businessapi.com/api/SoftwareDownload?AppId=c2e7d99c-d3c6-4ecc-9c6b-7be4048b41a9">Get latest version</a>.
</div>

#### Version 18.4.135.9367

 - Task #2655 - Cross-tenant printer and printer configurations (DataPerCompany = false)
 - UI optimizations.

#### Version 18.3.133.9299

 - Fix issue #2664 - Support SATO Industrial label printers (incl. ZPL emulation support).
 - Enhancement #2654 - Option to auto-enable printer configurations.
 - Enhancement #2665 - "Do not show anymore" action for optional notifications.
 - Task #2658 - Support for virtual printers, like Microsoft XPS Document Writer (MXDW). See [documentation](https://docs.365businessdev.com/en-US/365-business-print-agent/support/setup-xps-printer/) for additional information.
 - UI optimizations.
 - Minor fixes in handling printer issues.
 - Enable / disable printer configuration actions in list views.
 - Fix issue #2667 - Fix false-positive message on failed Print Agent direct connection authentication.
 - Prevent from multiple set up Print Agent client in direct connection.

#### Version 18.2.111.8882

 - Fix issue #2647 - Overrule printer access permission for administrators, using the `BDEV.PRINTAGENTSETUP` permission set.
 - Fix issue #2648 - Tenant ID for Print Agent authentication is not synced.
 - Fix issue #2643 - Custom height/width fields not editable, when custom paper source selected in Configuration Page Range page.
 - Update permission set captions.

#### Version 18.2.106.8229 

 - Fix issue #2581 - Missing page link in User Group Member Factbox
 - Update reference to Extension License Manager.
 - Expose field "Printer ID" in Printer Configuration.

**365 business Print Agent service - Version 1.3.8.8403**

 - Added SQL Server database support, to introduce fail-over setup.
 - Added SQLite to SQL Server database migration.
 - Added advanced statistics in 365 business Print Agent application.
 - Added 365 business Print Agent stand-alone licensing option.
 - 365 business Print Agent application UI optimization.
 - Added service statistics in 365 business Print Agent application dashboard.
 - Overall performance optimizations.
 - Add print job status flag in history tab.

#### Version 18.2.100.7598

 - Fix issue #2575 - Paper source type is not displayed properly for user-defined types.
 - Fix issue #2579 - Available flag for printers is removed on "Toner low" status.
 - Changed sorting in paper source kind view.

#### Version 18.2.74.7325

 - Fix unregister Tenant from Print Agent Cloud on Service Mode change.
 - Fix issue #2547 - Error code `1008` - Error while printing.
 - Fix issue #2556 - User-defined paper source kind not recognized.
 - Add dialog when direct connection clients are queried.
 - Update printer status, after time-out of print job (related to network printers only).

#### Version 18.2.66.7209

 - Add Print Agent Client Setup for **Direct Connection** service mode.
 - Add support for multiple Print Agent service instances in **Direct Connection** mode.
 - Fix permission set `bdev.PRINTAGENT`.

#### Version 18.1.57.6944

 - Add `ZPL` emulation support for Zebra printers.
 - Fix `bdev.Print Agent` Codeunit (ID `5523742`) for versions prior Business Central 2022 release wave 1 (20.0).
 - Add custom page size configuration, including height and width.
 - Add Printer Access Permissions.
 - Add `PrintZPL()` to `bdev.Print Agent` Codeunit (ID `5523742`).

#### Version 18.0.43.6647

 - Add support for Printer status.
   - Get detailed online status from Printer.
   - Get direct feedback on print job.
 - Fix missing relation in Printer Configuration Wizard.
 - Add Copy to Clipboard Action for Tenant ID.

#### Version 18.0.36.6522

 - Add Print Agent view.
 - UI optimizations.
 - Add software outdating notification.
 - Add printer offline notification.

#### Version 18.0.33.6426

 - Add support for Print Agent Cloud service mode.

#### Version 18.0.30.6406

 - Initial release.