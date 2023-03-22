---
layout: default
title: changelog
permalink: /new-and-planned/changelog/365-business-print-agent/
---

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