---
title: Drucker
---

Auf der Seite **Drucker** in Microsoft Dynamics 365 Business Central finden Sie alle freigegebenen Drucker der 365 business Print Agent Dienste. 

![Drucker](/assets/images/365-business-print-agent/87afe451377b606dffb0d548cac691fcc4c6bdbf02744a21204a1ee825389a30.png)  

Freigegebene Drucker sind für Benutzer in Microsoft Dynamics 365 Business Central nicht direkt nutzbar. Stattdessen ist es notwendig, ein [Druckereinstellungen](printer-configuration.md) zu erstellen, die in der **Druckerauswahl** oder in der Berichtsaufrufseite zugewiesen bzw. ausgewählt werden können.
Sie können beliebig viele Druckereinstellungen, basierend auf den Funktionen Ihres Druckers, anlegen um verschiedene Druckszenarien (z.B. Duplex-Druck) umzusetzen.

Bei der Anlage eines Druckers, über die Aktion **Freigegebene Drucker holen**, wird automatisch eine durch das System generierte Druckereinstellung erstellt, welche alle verfügbaren Funktionalitäten Ihres Druckers enthält.

## Welche Drucker werden unterstützt?

Print Agent unterstützt als Windows kompatiblen Drucker. Zusätzlich unterstüzt Print Agent, durch die `Zebra (ZPL)` Emulation, die native Kommunikation mit [Zebra Druckern](https://www.zebra.com) über die Zebra Programming Language (ZPL). Dabei werden PDF Dateien, vor der Übermittlung an den Drucker, in native ZPL Steuerzeichen übersetzt.

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg" style="--fa-secondary-color: #FF0000; --fa-primary-color: #111111; --fa-secondary-opacity: 0.7"></i> <strong>Bemerkung:</strong> Die Freigabe von Netzwerkdruckern in 365 business Print Agent kann zu Zeitüberschreitungen führen, da die Antwort des tatsächlichen Druckers länger dauern kann. Dies ist ein häufiges Problem bei der Windows-Druckerverwaltung und kann unter Umständen nicht durch 365 business Print Agent gelöst werden.<br><br>Wir empfehlen dringend, 365 business Print Agent direkt auf Druckservern zu installieren, um lokal installierte Drucker freizugeben, anstatt Drucker von einem entfernten Druckserver freizugeben.
</div>

#### Wie wird die ZPL Emulation für Drucker aktiviert?

In der Print Agent Anwendung finden Sie die Liste der aktuell installierten Drucker und können diese für die Verwendung über 365 business Print Agent freigeben. In der Spalte `Emulation` können Sie, abweichend vom `Standard`, die Option `Zebra (ZPL)` aktivieren um die ZPL Emulation, und damit die PDF-zu-ZPL Konvertierung, sowie die direkte Kommunikation über ZPL Steuerzeichen zu nutzen.

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Gut zu wissen:</strong> In der Regel ist der Druck über ZPL Steuerzeichen, verglichen mit dem PDF-Druck, auf einem Zebra Label Drucker wesentlich schneller und liefert bessere Druckergebnisse.<br>Wir empfehlen, beim Einsatz von Zebra Druckern die <code>Zebra (ZPL)</code> Emulation zu aktivieren.
</div>

![Print Agent Emulation Auswahl](/assets/images/365-business-print-agent/f3a6d3399196eee57e21ab24063897c7fb91e03c05e08c8cd7dbc8538804ef53.png)

## Wie erkenne ich, dass Drucker nicht verfügbar sind oder Störungen vorliegen?

Durch Wartungsarbeiten, Software Updates oder Störungen können freigegebene Drucker unter Umständen nicht zur Verfügung stehen. In der Seite **Drucker** werden nicht verfügbare Drucker (z.B. __Offline__) und Drucker mit Störungen (z.B. __Papierstau__) optisch hervorgehoben und in der Spalte **Status** wird der letzte bekannte Status des Druckers angezeigt.

![Nicht verfügbarer Drucker](/assets/images/365-business-print-agent/d0b9f0f4f2d7ac5404b0414ce7a9c9827fc102a43e91af13d1636e411b4dbd7d.png)

<div class="alert alert-warn">
    <i class="fa-light fa-triangle-exclamation fa-lg"></i> <strong>Wichtig:</strong>Der Drucker Status wird vom Windows Druckdienst ermittelt. Unter Umständen ist dieser Status nicht immer aktuell, da der Windows Druckdienst nur bei Bedarf den Status eines Druckers prüft. Werden während des Drucks Probleme festgetellt, so wird der Status direkt aktualisiert, wenn jedoch ohne aktiven Druckauftrag ein Eingriff am Drucker vorgenommen wird, so kann der aktuelle Status vom tatsächlichen Status abweichen.
</div>

Zusätzlich finden Sie in der Seite [Print Agents](print-agent-clients.md) in Microsoft Dynamics 365 Business Central eine Liste der bekannten Print Agent Dienste (Instanzen) und deren Online Status.

### Siehe auch  

 - [Druckereinstellungen](printer-configuration.md)
 - [Print Agents](print-agent-clients.md)