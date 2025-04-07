---
title: Datenbanken
---

Das 365 business Print Agent Config Tool benutzt eine Datenbank zum Speichern der freigegebenen Drucker, sowie der verarbeiteten Druckaufträge.

Durch ein erhöhtes Druckvolumen (ab ca. 2000 Druckaufträge / Tag) kann es bei der Aufbereitung von Statistiken bei Benutzung der (standardmäßig, bei der Ersteinrichtung ausgewählten) SQLite Datenbank zu längeren Ladezeiten kommen.

Sollten Sie in Ihrer Umgebung lange Laufzeiten feststellen, empfehlen wir den Wechsel zum Microsoft SQL Server.
<br/>Dazu gehen Sie wie folgt vor:

#### 365 business Print Agent Config 
1. Öffnen Sie den Menüpunkt "Datenbank" im 365 business Print Agent Config aus.
2. Geben Sie den zu nutzenden Microsoft SQL Server, einen Datenbank Namen, sowie Benutzer und Passwort an.
3. Klicken Sie auf "Migrieren", um die Daten auf den Microsoft SQL Server zu übertragen.

![Datenbank](/assets/images/365-business-print-agent/config-tool/Database_SQL.PNG)

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg" style="--fa-secondary-color: #FF0000; --fa-primary-color: #111111; --fa-secondary-opacity: 0.7"></i> <strong>Wichtig:</strong>Die Benutzung eines Microsoft SQL Server kann Lizenzkosten verursachen! 
</div>

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Hinweis:</strong>Je nach Anzahl der zu migrierenden Druckaufträge kann eine Migration mehrere Stunden dauern. Sie werden während des gesamten Prozesses über den aktuellen Verarbeitungsstand informiert.
</div>

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Hinweis:</strong>Ein Wechsel zurück zur SQLite Datenbank ist natürlich möglich.
</div>



