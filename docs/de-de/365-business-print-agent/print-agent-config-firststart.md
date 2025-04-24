# Ersteinrichtung

Beim ersten Start nach der erfolgreichen Installation von 365 business Print Config werden Sie durch einen Assistenten durch die Ersteinrichtung begleitet.
Während der Einrichtung definieren Sie die zu nutzende Datenbank und den zu verwendenden Dienstmodus.

Sind alle notwendigen Einstellungen vollzogen, wird die Datenbank und der entsprechende Dienst für die Kommunikation mit Microsoft Dynamics 365 Business Central erstellt und konfiguriert.

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg"></i> <strong>Wichtig</strong>Bitte beachten Sie, dass Sie <strong>vor</strong> der Ersteinrichtung im 365 business Print Config, die Installation und Einrichtung der "365 business Print Agent" App über den Microsoft AppSource in Ihrem Microsoft Dynamics 365 Business Central Tenant abgeschlossen haben müssen.<br/>
    Dies ist notwendig, um die Kommunikation zwischen Ihrem Microsoft Dynamics 365 Business Central Tenant und dem lokal installierten Service zu gewährleisten. 
</div>
<br/>


## Beispiel für die Einrichtung von "365 business Print Agent Cloud"
<br/>

1. Der Assistent startet und informiert über die kommenden Aufgaben.<br/>
![Intro](/assets/images/365-business-print-agent/config-tool/wizard/wizard1.PNG) 

2. Im Folgenden erfolgt die Auswahl der Datenbank.<br/>Es stehen 2 Datenbanken zur Auswahl: SQLite und Microsoft SQL Server. Da die Datenbank unter anderem für das Speichern der Druckaufträge genutzt wird, empfehlen wir die Benutzung des Microsoft SQL Server ab ca. 2000 Druckaufträge / Tag. <br/>
![Datenbank](/assets/images/365-business-print-agent/config-tool/wizard/wizard2.PNG) 

   <div class="alert alert-notice">
       <i class="fa-light fa-hand-point-up fa-lg"></i> <strong>Wichtig</strong>Die Benutzung eines Microsoft SQL Server kann Lizenzkosten verursachen! 
   </div>
   
   <div class="alert alert-info">
       <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i> <strong>Hinweis</strong>Ein späteres Ändern der Datenbank ist möglich. <a href="print-agent-config-databases.md">Hier</a> erfahren Sie mehr.
   </div><br/>

3. Anschließend erfolgt die Auswahl des Dienstmodus / Verbindungsart.<br/>Empfohlen wird die Benutzung der 365 business Print Agent Cloud, da in diesem Modus die Einrichtung/Konfiguration auf ein Minimum reduziert wird und sofort einsatzbereit ist.<br/>
![CloudClient](/assets/images/365-business-print-agent/config-tool/wizard/wizard3.PNG) 
   <div class="alert alert-info">
       <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i> <strong>Hinweis</strong>Ein späteres Ändern des Dienstmodus ist möglich. <a href="print-agent-config-connections.md">Hier</a> erfahren Sie mehr.
   </div><br/>

4. Nach der Auswahl "365 business Print Agent Cloud" müssen Sie im nächsten Schritt Ihre "Tenant ID", sowie einen Namen zur Identifikation Ihres 365 business Print Agent Cloud Clients eingeben.<br/>
![CloudClient](/assets/images/365-business-print-agent/config-tool/wizard/wizard4-cloud.PNG) 
   <div class="alert alert-info">
       <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i> <strong>Hinweis</strong>Die Tenant ID können Sie der "365 business Print Agent" App in Ihrem Microsoft Dynamics 365 Business Central Tenant entnehmen.
   </div><br/>

5. Durch das Bestätigen der Einstellungen für den 365 business Print Agent Cloud Service, wird die Datenbank und der Service für die Kommunikation zu Ihrem Microsoft Dynamics 365 Business Central Tenant erstellt und eingerichtet.<br/>
![CloudClient](/assets/images/365-business-print-agent/config-tool/wizard/wizard5-cloud.PNG) 

6. Nach der erfolgreichen Einrichtung kann der Assistent beendet werden.<br/>
![CloudClient](/assets/images/365-business-print-agent/config-tool/wizard/wizard6-cloud.PNG) 

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i> <strong>Hinweis</strong>Es wird empfohlen nach dem Beenden des Assistenten mit der Freigabe der Drucker fortzufahren. <a href="print-agent-config-printers.md">Hier</a> erfahren Sie mehr.
</div><br/>