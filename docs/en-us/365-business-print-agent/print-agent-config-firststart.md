# Quick Setup

After successful installation of **365 business Print Config**, a setup wizard will guide you through the initial configuration upon first launch.

During this process, you define:
- which database to use
- which Connection Type (Direct Connection / Print Agent Cloud) the Print Agent should operate with

Once all required settings have been completed, the database is created and the communication service for **Microsoft Dynamics 365 Business Central** is configured.

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg"></i> <strong>Important:</strong>
	Before starting the initial setup in 365 business Print Config, please <b>ensure you have installed and set up</b> the "365 business Print Agent" app from Microsoft AppSource in your Microsoft Dynamics 365 Business Central tenant.<br/>
    This is required to enable communication between your on-premise service and the Business Central tenant.
</div>
<br/>


## Example: Setup of "365 business Print Agent Cloud"

<br/>

1. The wizard starts and provides an introduction.<br/>
   ![Intro](/assets/images/365-business-print-agent/config-tool/wizard/wizard1_en.PNG) 

2. Select a database:
   Choose between **SQLite** and **Microsoft SQL Server**. If you expect more than 2000 print jobs per day, we recommend using Microsoft SQL Server.<br/>
   ![Database](/assets/images/365-business-print-agent/config-tool/wizard/wizard2_en.PNG) 

   <div class="alert alert-notice">
       <i class="fa-light fa-hand-point-up fa-lg"></i> <strong>Important:</strong>
	   When using Microsoft SQL Server, additional license costs may be incurred.
   </div>
   
   <div class="alert alert-info">
       <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i> <strong>Note:</strong>
	   You can change the database at a later stage. <a href="print-agent-config-databases.md">Learn more</a>.
   </div><br/>

3. Select the Connection Type:<br>
   ![CloudClient](/assets/images/365-business-print-agent/config-tool/wizard/wizard3_en.PNG) 
   
   <div class="alert alert-info">
       <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i> <strong>Note:</strong>
	   You can change the service mode later. <a href="print-agent-config-connections.md">Learn more</a>.
   </div><br/>

4. Enter your **Tenant-ID** and a unique name for your 65 business Print Agent Cloud Client.<br>
   ![CloudClient](/assets/images/365-business-print-agent/config-tool/wizard/wizard4-cloud_en.PNG) 
   
   <div class="alert alert-info">
       <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i> <strong>Note:</strong>
	   You can find the <b>Tenant-ID</b> in the "365 business Print Agent" app within Microsoft Dynamics 365 Business Central.
   </div><br/>

5. Confirm the configuration to create, initialize and start the service.<br>
   ![CloudClient](/assets/images/365-business-print-agent/config-tool/wizard/wizard5-cloud_en.PNG) 

6. After successful setup, the wizard can be closed.<br/>
   ![CloudClient](/assets/images/365-business-print-agent/config-tool/wizard/wizard6-cloud_en.PNG) 

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i> <strong>Note:</strong>
	After completing the wizard, we recommend proceeding with printer sharing. <a href="print-agent-config-printers.md">Learn more</a>.
</div><br/>