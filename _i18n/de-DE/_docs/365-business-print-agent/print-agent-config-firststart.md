Beim ersten Start nach der erfolgreichen Installation von 365 business Print Config werden Sie mit Hilfe eines Assistenten durch die Ersteinrichtung geführt.
Während der Einrichtung, definieren Sie die zu nutzende Datenbank und den zu verwendenen Service Modus.

Sind alle notwendigen Einstellungen vollzogen, wird die Datenbank und der entsprechende Dienst für die Kommunikation mit Microsoft 365 Business Central erstellt und konfiguriert.

<div class="alert alert-notice">
    <i class="fa-solid fa-notes"></i> <strong>Wichtig:</strong>Bitte beachten Sie, dass Sie <strong>vor</strong> der Ersteinrichtung im 365 business Print Config, die Installation und Einrichtung der "365 business Print Agent" App über den Microsoft AppSource in Ihrem Microsoft Dynamics 365 Business Central Tenant abgeschlossen haben müssen.<br/>
    Dies ist notwendig, um die Kommunikation zwischen Ihrem Microsoft Dynamics 365 Business Central Tenant und dem lokal installierten Service zu gewährleisten. 
</div>

Der empfohlene "365 business Print Agent Cloud" wird im folgenden beispielhaft konfiguriert.

1. Der Assistent startet und informiert über die kommenden Aufgaben.<br/>
![Intro](/assets/images/365-business-print-agent/config/wizard/wizard1.PNG) 

2. Im Folgenden erfolgt die Auswahl der Datenbank.<br/>Es stehen 2 Datenbanken zur Auswahl: SQLite und Microsoft SQL Server. Da die Datenbank unter anderem für das Speichern der Druckaufträge genutzt wird, empfehlen wir die Benutzung des Microsoft SQL Server ab ca. 2000 Druckaufträge / Tag. 
<br/>
![Datenbank](/assets/images/365-business-print-agent/config/wizard/wizard2.PNG) 

   <div class="alert alert-notice">
       <i class="fa-solid fa-notes"></i> <strong>Wichtig:</strong>Die Benutzung eines Microsoft SQL Server kann Lizenzkosten verursachen! 
   </div>
   
   <div class="alert alert-info">
       <i class="fa-solid fa-lightbulb"></i> <strong>Hinweis:</strong>Ein späteres Ändern der Datenbank ist natürich möglich. [Hier](../365-business-print-agent/print-agent-config-databases/) erfahren Sie mehr.
   </div>
   
3. Anschließend erfolgt die Auswahl des Service-Modus / Verbindungsart.<br/>Empfohlen wird die Benutzung der 365 business Print Agent Cloud, da in diesem Modus die Einrichtung/Konfiguration auf ein Minium reduziert wird und sofort einsatzbereit ist.
Im Feld "Tenant ID
<br/>
![CloudClient](/assets/images/365-business-print-agent/config/wizard/wizard3.PNG) 
   <div class="alert alert-info">
       <i class="fa-solid fa-lightbulb"></i> <strong>Hinweis:</strong>Ein späteres Ändern des Service Modus ist natürich möglich. [Hier](../365-business-print-agent/print-agent-config-connections/) erfahren Sie mehr.
   </div>

4. Nach der Auswahl "365 business Print Agent Cloud" müssen Sie im nächsten Schritt Ihre "Tenant ID", sowie einen Namen zur Identifikation Ihres 365 business Print Agent Cloud Clients eingeben.
<br/>
![CloudClient](/assets/images/365-business-print-agent/config/wizard/wizard4-cloud.PNG) 
   <div class="alert alert-info">
       <i class="fa-solid fa-lightbulb"></i> <strong>Hinweis:</strong>Die Tenant ID können Sie der "365 business Print Agent" App in Ihrem Microsoft Dynamics 365 Business Central Tenant entnehmen.
   </div>

5. Durch das Bestätigen der Einstellungen für den 365 business Print Agent Cloud Service, wird die Datenbank und der Service für die Kommunikation zu Ihrem Microsoft 365 Business Central Tenant erstellt und eingerichtet.
<br/>
![CloudClient](/assets/images/365-business-print-agent/config/wizard/wizard5-cloud.PNG) 

6. Nach erfolgreicher Einrichtung, ist der Assistent fertig und kann beendet werden.<br/>
![CloudClient](/assets/images/365-business-print-agent/config/wizard/wizard6-cloud.PNG) 

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Hinweis:</strong>Es wird empfohlen nach dem Beenden des Assistenten mit der Freigabe der Drucker fortzufahren. [Hier](../365-business-print-agent/print-agent-config-printers/) erfahren Sie mehr.
</div>