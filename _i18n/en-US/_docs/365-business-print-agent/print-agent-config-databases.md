The 365 business Print Agent Config Tool uses a database to store the shared printers, as well as the processed print jobs.

Due to an increased print volume (more than 2000 print jobs per day), longer loading times may occur when running statistics using the SQLite database (which is selected by default during the initial setup).

If you experience long runtimes in your environment, we recommend switching to Microsoft SQL Server.
<br/>To do this, proceed as follows:

#### 365 business Print Agent Config 
1. Open the menu item "Database" in the 365 business Print Agent Config.
2. Enter the Microsoft SQL Server to be used, a database name and user & password.
3. Click on "Migrate" to transfer the data to the Microsoft SQL Server.

![Database](/assets/images/365-business-print-agent/config-tool/Database_SQL_en.PNG)

<div class="alert alert-notice">
    <i class="fa-solid fa-notes"></i> <strong>Important:</strong>The usage of a Microsoft SQL Server can cause license costs! 
</div>

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Note:</strong>Depending on the number of print jobs to be migrated, a migration may take several hours. You will be kept informed of the current processing status during the entire process.
</div>

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Note:</strong>Switching back to the SQLite database is possible.
</div>



