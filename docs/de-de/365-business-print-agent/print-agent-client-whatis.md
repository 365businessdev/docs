# Was ist der Print Agent Dienst?

Der **Print Agent Service** übernimmt die Kommunikation zwischen:

- Microsoft Dynamics 365 Business Central (Direct Connection Service Mode)  
- und der 365 business Print Agent Cloud (Print Agent Cloud Service Mode).

Er empfängt Druckaufträge aus Business Central und führt sie auf dem lokalen System aus.

Jeder Print Agent Service wird über eine eindeutige **Client-ID (GUID)** identifiziert und überwacht den Online-Status der freigegebenen Drucker.  
Der Print Agent sollte auf dem **Windows-System** installiert sein, auf dem auch die entsprechenden Drucker eingerichtet sind.

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg"></i>
    <strong>Gut zu wissen</strong>
	Der Print Agent Service kann mit allen Druckern arbeiten, die lokal auf dem System installiert sind.<br>
	Bei angebundenen <b>Netzwerkdruckern</b> kann es jedoch zu <b>Zeitüberschreitungen</b> kommen, da die Antwortzeiten über das Netzwerk länger sind.<br>
	Dieses Verhalten ist eine Einschränkung der Windows-Druckerverwaltung und kann vom 365 business Print Agent nicht vollständig umgangen werden.<br><br>
	<b>Empfehlung:</b> Installieren Sie den Print Agent <b>direkt auf dem Druckserver</b> und geben Sie dort lokal installierte Drucker frei – anstatt auf freigegebene Drucker von einem entfernten Server zuzugreifen.
</div>

## Drucker mit Print Agent verbinden

Alle auf dem System installierten Drucker erscheinen automatisch in der Ansicht **Drucker** der 365 business Print Agent Anwendung:

![Shared Printer](/assets/images/365-business-print-agent/ad01eb85658694c75716cb5dbce514bd3763fb94b48e505c0288c2bcf8638737.png)  

Wählen Sie die Drucker aus, die Sie für Microsoft Dynamics 365 Business Central verfügbar machen möchten.

<div class="alert alert-warn">
    <i class="fa-light fa-triangle-exclamation fa-lg"></i> <strong>Wichtig:</strong>
	Sobald ein Drucker freigegeben ist, kann das Entfernen der Freigabe oder das Löschen des Druckers zu <b>fehlgeschlagenen Druckaufträgen</b> führen.  
	Verwalten Sie freigegebene Drucker daher mit besonderer Sorgfalt.
</div>

## Aufgaben des Print Agent Service

Der Print Agent Service übernimmt folgende Aufgaben:

 1. Verwaltung der Kommunikation mit Dynamics 365 Business Central (Direct Connection / Print Agent Cloud).
 2. Ausführen eingehender Druckaufträge.
 3. Verwaltung und Überwachung freigegebener Drucker.
