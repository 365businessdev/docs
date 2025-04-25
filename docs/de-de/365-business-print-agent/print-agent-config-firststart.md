# Ersteinrichtung

Nach der erfolgreichen Installation von **365 business Print Config** werden Sie beim ersten Start automatisch durch einen Assistenten geführt.

Während dieses Prozesses legen Sie fest:
- welche Datenbank verwendet werden soll
- welche Verbindungsart (Direct Connection / Print Agent Cloud) der Print Agent nutzen soll

Sobald alle notwendigen Einstellungen abgeschlossen sind, wird die Datenbank erstellt und der zugehörige Dienst für die Kommunikation mit **Microsoft Dynamics 365 Business Central** konfiguriert.


<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Gut zu wissen</strong>
	Bitte stellen Sie sicher, dass Sie <strong>vor</strong> der Ersteinrichtung im 365 business Print Config die App "365 business Print Agent" aus dem Microsoft AppSource in Ihrem Microsoft Dynamics 365 Business Central Tenant installiert und eingerichtet haben.<br/>
    Nur so kann die Kommunikation zwischen dem lokal installierten Dienst und Ihrem Microsoft Dynamics 365 Business Central Tenant sichergestellt werden.
</div>
<br/>

## Beispiel für die Einrichtung der "365 business Print Agent Cloud"

<br/>

1. Der Assistent startet mit einer Einführung.<br/>
   ![Intro](/assets/images/365-business-print-agent/config-tool/wizard/wizard1.PNG) 

2. Auswahl der Datenbank:<br/>
   Es stehen **SQLite** und **Microsoft SQL Server** zur Auswahl. Bei mehr als 2000 Druckaufträgen pro Tag wird die Verwendung von Microsoft SQL Server empfohlen.<br/>
   ![Datenbank](/assets/images/365-business-print-agent/config-tool/wizard/wizard2.PNG) 

   <div class="alert alert-notice">
       <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Gut zu wissen</strong>
	   Die Nutzung von Microsoft SQL Server kann zusätzliche Lizenzkosten verursachen.
   </div>
   
   <div class="alert alert-info">
       <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Hinweis</strong>
	   Die Datenbank kann auch nachträglich geändert werden. <a href="print-agent-config-databases.md">Mehr erfahren</a>.
   </div>
   <br/>

3. Auswahl des Verbindungsart<br/>
   Empfohlen wird die Nutzung der **365 business Print Agent Cloud**, da diese Variante schnell einsatzbereit ist und minimalen Konfigurationsaufwand erfordert.<br/>
   ![CloudClient](/assets/images/365-business-print-agent/config-tool/wizard/wizard3.PNG) 
   
   <div class="alert alert-info">
       <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Hinweis</strong>
	    Ein späteres Ändern der Verbindungsart ist möglich. <a href="print-agent-config-connections.md">Hier</a> erfahren Sie mehr.
   </div><br/>

4. Eingabe Ihrer **Tenant-ID** und eines eindeutigen Namens für Ihren 365 business Print Agent Cloud Client.<br/>
   ![CloudClient](/assets/images/365-business-print-agent/config-tool/wizard/wizard4-cloud.PNG) 
   
   <div class="alert alert-info">
       <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Hinweis</strong>
	   Die <b>Tenant-ID</b> finden Sie in der "365 business Print Agent" App innerhalb von Microsoft Dynamics 365 Business Central.
   </div><br/>

5. Abschluss der Einrichtung: Der Dienst wird erstellt, konfiguriert und gestartet.<br/>
   ![CloudClient](/assets/images/365-business-print-agent/config-tool/wizard/wizard5-cloud.PNG) 

6. Der Assistent kann nun beendet werden.<br/>
![CloudClient](/assets/images/365-business-print-agent/config-tool/wizard/wizard6-cloud.PNG) 

<div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Hinweis</strong>
	Nach Abschluss des Assistenten wird empfohlen, mit der Freigabe von Druckern fortzufahren. <a href="print-agent-config-printers.md">Mehr erfahren</a>.
</div><br/>