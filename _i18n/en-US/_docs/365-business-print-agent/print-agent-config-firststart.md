When you first launch 365 business Print Config after successfully installing it, a wizard will guide you through the initial setup process.
During the setup, you will define the database and the service mode to use.

Once all the necessary settings have been made, the database and service are created and configured to communicate with Microsoft Dynamics 365 Business Central.

<div class="alert alert-notice">
    <i class="fa-solid fa-notes"></i> <strong>Important:</strong>Please note that you must have completed the installation and setup of the "365 business Print Agent" app via the Microsoft AppSource in your Microsoft Dynamics 365 Business Central Tenant <strong>before</strong> you can perform initial setup in 365 business Print Config.<br/>This is required to ensure communication between your Microsoft Dynamics 365 Business Central tenant and the locally installed service.
</div>
<br/>


#### Example of how to set up "365 business Print Agent Cloud"
<br/>

1. The Assistant launches and informs about the upcoming tasks.<br/>
![Intro](/assets/images/365-business-print-agent/config-tool/wizard/wizard1_en.PNG) 

2. The next step is to select the database to use.<br/>There are 2 databases to choose from: SQLite and Microsoft SQL Server. Since the database is used to store the print jobs, we recommend to use Microsoft SQL Server for more than 2000 print jobs per day. <br/>
![Database](/assets/images/365-business-print-agent/config-tool/wizard/wizard2_en.PNG) 

   <div class="alert alert-notice">
       <i class="fa-solid fa-notes"></i> <strong>Important:</strong>The usage of a Microsoft SQL Server can cause license costs!  
   </div>
   
   <div class="alert alert-info">
       <i class="fa-solid fa-lightbulb"></i> <strong>Note:</strong>Switching back to the SQLite database is possible. <a href="../print-agent-config-databases/">Learn more</a>.
   </div><br/>

3. The next step is to select the service mode / connection type.<br/>We recommend using the 365 business Print Agent Cloud, as this mode reduces setup /configuration to a minimum and is ready to use immediately.<br/>
![CloudClient](/assets/images/365-business-print-agent/config-tool/wizard/wizard3_en.PNG) 
   <div class="alert alert-info">
       <i class="fa-solid fa-lightbulb"></i> <strong>Note:</strong>A later change of the service mode is possible. <a href="../print-agent-config-connections">Learn more</a>.
   </div><br/>

4. After selecting "365 business Print Agent Cloud", the next step is to enter your "Tenant ID" and a name to identify your 365 business Print Agent Cloud client.<br/>
![CloudClient](/assets/images/365-business-print-agent/config-tool/wizard/wizard4-cloud_en.PNG) 
   <div class="alert alert-info">
       <i class="fa-solid fa-lightbulb"></i> <strong>Note:</strong>The Tenant ID can be found in the 365 business Print Agent app in your Microsoft Dynamics 365 Business Central tenant.
   </div><br/>

5. Confirming the 365 business Print Agent Cloud Service settings will create and set up the database and service to communicate with your Microsoft Dynamics 365 Business Central tenant.<br/>
![CloudClient](/assets/images/365-business-print-agent/config-tool/wizard/wizard5-cloud_en.PNG) 

6. After successful setup, the wizard can be closed.<br/>
![CloudClient](/assets/images/365-business-print-agent/config-tool/wizard/wizard6-cloud_en.PNG) 

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Note:</strong>It is recommended to continue with the Printer Management after the wizard is finished.<a href="../print-agent-config-printers/">Learn more</a>.
</div><br/>