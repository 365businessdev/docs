# Drucker

Auf der Seite **Drucker** in Microsoft Dynamics 365 Business Central finden Sie alle freigegebenen Drucker der 365 business Print Agent-Dienste.

![Drucker](/assets/images/365-business-print-agent/87afe451377b606dffb0d548cac691fcc4c6bdbf02744a21204a1ee825389a30.png)  

Freigegebene Drucker sind für Benutzer in Microsoft Dynamics 365 Business Central nicht direkt nutzbar. Stattdessen ist es notwendig, eine [Druckereinstellung](printer-configuration.md) zu erstellen, die in der **Druckerauswahl** oder auf der Berichtsaufrufseite zugewiesen bzw. ausgewählt werden kann.
Sie können beliebig viele Druckereinstellungen basierend auf den Funktionen Ihres Druckers anlegen, um verschiedene Druckszenarien (z. B. Duplex-Druck) abzubilden.

Bei der Anlage eines Druckers über die Aktion **Freigegebene Drucker holen** wird automatisch eine durch das System generierte Druckereinstellung erstellt, welche alle verfügbaren Funktionalitäten Ihres Druckers enthält.

## Welche Drucker werden unterstützt?

365 business Print Agent unterstützt **alle Windows-kompatiblen Drucker**.<br>
Zusätzlich unterstützt 365 business Print Agent, durch die **Zebra (ZPL)**- und **SATO (SBPL)-Emulation**, die native Kommunikation. Dabei werden PDF-Dateien vor der Übermittlung an den Drucker in native Steuerzeichen übersetzt, was die Verarbeitung beschleunigen kann.

<div class="alert alert-notice">
	<i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Gut zu wissen</strong>
	Bei der Freigabe von Netzwerkdruckern in 365 business Print Agent kann zu Zeitüberschreitungen führen, da die Antwort des tatsächlichen Druckers länger dauern kann.<br>
	Dies ist ein bekanntes Problem bei der Windows-Druckerverwaltung und kann unter Umständen nicht durch 365 business Print Agent gelöst werden.<br><br>
	<strong>Empfehlung:</strong> Installieren Sie 365 business Print Agent direkt auf Druckservern und geben Sie lokal installierte Drucker frei, anstatt Drucker von einem entfernten Druckserver zu verwenden.
</div>

<br>

### Wie wird die ZPL- / SBPL-Emulation für Drucker aktiviert?

In der **365 business Print Agent** Anwendung finden Sie die Liste der aktuell installierten Drucker und können diese für die Verwendung über 365 business Print Agent freigeben.  
In der Spalte **Emulation** können Sie – abweichend vom **Standard** – die Option **Zebra (ZPL)** oder **SATO (SBPL)** aktivieren, um die Emulation (PDF-Konvertierung) und die direkte Kommunikation über ZPL-/SBPL-Steuerzeichen zu nutzen.

<div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Hinweis</strong>
	Der Druck über ZPL- / SBPL-Emulation ist in der Regel deutlich schneller als der PDF-Druck und liefert bessere Druckergebnisse.<br><br>
	<strong>Empfehlung:</strong> Aktivieren Sie bei Einsatz von Zebra oder SATO Drucker die entsprechende Emulation.
</div>
<br>

![Print Agent Emulation Auswahl](/assets/images/365-business-print-agent/f3a6d3399196eee57e21ab24063897c7fb91e03c05e08c8cd7dbc8538804ef53.png)
<br>

## Wie erkenne ich, dass Drucker nicht verfügbar sind oder Störungen vorliegen?

Durch Wartungsarbeiten, Software-Updates oder Störungen können freigegebene Drucker unter Umständen nicht zur Verfügung stehen.  
Auf der Seite **Drucker** werden nicht verfügbare Drucker (z. B. __Offline__) und Drucker mit Störungen (z. B. __Papierstau__) optisch hervorgehoben. In der Spalte **Status** wird der zuletzt bekannte Status des Druckers angezeigt.

![Nicht verfügbarer Drucker](/assets/images/365-business-print-agent/d0b9f0f4f2d7ac5404b0414ce7a9c9827fc102a43e91af13d1636e411b4dbd7d.png)

<div class="alert alert-warn">
    <i class="fa-duotone fa-solid fa-triangle-exclamation fa-xl"></i>
	<strong>Achtung</strong>
	Der Druckerstatus wird vom Windows-Druckdienst ermittelt. Dieser Status ist möglicherweise nicht immer aktuell, da der Windows-Druckdienst nur bei Bedarf eine Statusprüfung durchführt.<br>
	Werden während eines Druckauftrags Probleme festgestellt, wird der Status unmittelbar aktualisiert.<br>
	Erfolgen Änderungen am Drucker ohne aktiven Druckauftrag, kann der angezeigte Status vom tatsächlichen Status abweichen.
</div>

Zusätzlich finden Sie auf der Seite [Print Agents](print-agent-clients.md) in Microsoft Dynamics 365 Business Central eine Übersicht der bekannten Print Agent-Dienste (Instanzen) und deren Online-Status.


### Siehe auch  

 - [Druckereinstellungen](printer-configuration.md)
 - [Print Agents](print-agent-clients.md)