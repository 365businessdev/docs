# Datenbanken

Das **365 business Print Agent Config Tool** verwendet eine Datenbank, um freigegebene Drucker sowie verarbeitete Druckaufträge zu speichern.
Bei hohem Druckaufkommen (ab ca. **2.000 Druckaufträge pro Tag**) kann es bei der Verwendung der standardmäßig eingerichteten **SQLite-Datenbank** zu längeren Ladezeiten bei der Statistikverarbeitung kommen.
Sollten Sie in Ihrer Umgebung eine hohe Systemauslastung oder lange Ladezeiten feststellen, empfehlen wir den Wechsel auf **Microsoft SQL Server**.

Gehen Sie dazu wie folgt vor:

## 365 business Print Agent Config
1. Öffnen Sie den Menüpunkt **Datenbank** im 365 business Print Agent Config Tool.
2. Tragen Sie den **Microsoft SQL Server**, den gewünschten **Datenbank**, sowie **Benutzername und Passwort** ein.
3. Klicken Sie auf **Migrieren**, um die Daten auf den Microsoft SQL Server zu übertragen.

![Datenbank](/assets/images/365-business-print-agent/config-tool/Database_SQL.PNG)

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg" style="--fa-secondary-color: #FF0000; --fa-primary-color: #111111; --fa-secondary-opacity: 0.7"></i> <strong>Wichtig:</strong>
	Die Nutzung von Microsoft SQL Server kann zusätzliche Lizenzkosten verursachen.
</div>

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Hinweis:</strong>
	Abhängig von der Anzahl migrierter Druckaufträge kann die Migration <b>mehrere Stunden</b> dauern. Der Fortschritt wird während des gesamten Prozesses angezeigt.
</div>

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Hinweis:</strong>
	Ein späterer Wechsel der <b>Datenbank</b> ist jederzeit möglich.	
</div>



