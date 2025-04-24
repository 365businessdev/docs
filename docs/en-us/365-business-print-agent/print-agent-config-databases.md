# Databases

The **365 business Print Agent Config Tool** uses a database to store shared printers and processed print jobs.
If your environment has a high print volume (starting at approx. **2,000 print jobs per day**), you may experience slower performance when generating statistics using the default **SQLite** database.
In such cases, we recommend switching to **Microsoft SQL Server**.

To do this, follow these steps:

## 365 business Print Agent Config
1. Open the **Database** section in the 365 business Print Agent Config Tool.
2. Enter the **Microsoft SQL Server** instance, desired **Database**, and your **Username and Password**.
3. Click **Migrate** to transfer the data to Microsoft SQL Server.

![Database](/assets/images/365-business-print-agent/config-tool/Database_SQL_en.PNG)

<div class="alert alert-notice">
    <i class="fa-light fa-triangle-exclamation fa-lg"></i> <strong>Important:</strong>
	When using Microsoft SQL Server, additional license costs may be incurred.
</div>

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i>
    <strong>Info</strong>
	Depending on the number of print jobs being migrated, the migration process can take <b>several hours</b>. You will be informed about the progress throughout.
</div>

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i>
    <strong>Info</strong>
    You can change the <b>database type</b> at any time.
</div>



