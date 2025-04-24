---
title: Unterstützung virtuelle Drucker
---

Die Nutzung von virtuellen Druckern, wie Microsoft Print to PDF oder Microsoft XPS Document Writer, ist in Kombination mit 365 business Print Agent nur eingeschränkt möglich, da wesentliche Informationen, wie z.B. Papierfächer, für virtuelle Drucker nicht vorhanden sind.
Der 365 business Print Agent verhindert daher die Nutzung von inkompatiblen virtuellen Druckern und zeigt diese als "Nicht nutzbar" an.

Wenn Sie dennoch die Funktion von 365 business Print Agent mit einem virtuellen Drucker testen möchten, empfehlen wir die Verwendung eines individuell installierten Microsoft XPS Document Writer (MXDW).

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg"></i> <strong>Wichtig</strong> Virtuelle Drucker rufen in der Regel einen "Speichern unter"-Dialog auf, um den Dateipfad anzugeben, unter dem der virtuelle Ausdruck gespeichert werden soll.<br>Da der Ausdruck durch den 365 business Print Agent als Dienst im Kontext des lokalen Systems ausgeführt wird, ist die Anzeige von Dialogen nicht möglich und führt zu Fehlern.<br><br>Daher ist es notwendig, einen eigenen Drucker zu installieren und die Dateiausgabe ohne zusätzliche Dialoge zu konfigurieren.
</div>

Der folgende Artikel beschreibt die Einrichtung eines einzelnen Microsoft XPS Document Writer (MXDW)-basierten Druckers.

## Zusammenfassung

Wenn Sie die Option "In Datei drucken" aus einer Anwendung heraus wählen, wird der Benutzer in einem Dialogfeld aufgefordert, den Speicherort und den Namen der zu speichernden Datei auszuwählen. Wenn Sie den Prozess "In Datei drucken" so automatisieren möchten, dass die Datei ohne Benutzerinteraktion gespeichert wird, führen Sie die folgenden Schritte aus.

1. Öffnen Sie die Geräte und Drucker.
2. Wählen Sie Drucker hinzufügen.
3. Klicken Sie auf Einen lokalen oder Netzwerkdrucker mit manuellen Einstellungen hinzufügen.<br>![Find a printer by other options dialog](/assets/images/365-business-print-agent/1062d8a1ab2ec8922f457cc23dd6c50d8f6b1bc0f58344d43481ea4b962d11eb.png)
4. Klicken Sie auf Einen neuen Anschluss erstellen: Lokaler Anschluss.<br>![Create a new port: Local Port](/assets/images/365-business-print-agent/7ab8a8f098dcb9c886ac9540a3b8e967fe476b3aa49d4d3628d833995079056e.png)
5. Sie erhalten ein Feld für den Anschlussnamen - geben Sie den Pfad und den Dateinamen ein, z. B. `C:\Temp\PrintJob.xps`.
6. Wählen Sie die Hersteller - `Microsoft`.
7. Wählen Sie den Drucker - `Microsoft XPS Document Writer v4`.<br>![Install the printer driver dialog](/assets/images/365-business-print-agent/9c5fc601bb9842bccf3df601502307b88455e37363aad807034ad5df2a3c9780.png)
8. Wählen Sie - Den aktuell installierten Treiber verwenden (empfohlen).
9. Geben Sie einen Namen für den Drucker ein.
10. Fertigstellen.
11. Teilen Sie den Drucker in der 365 business Print Agent Einrichtung mit Dynamics 365 Business Central.

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg"></i> <strong>Gut zu wissen</strong> In bestimmten Fällen kann es notwendig sein, die Lese- und Schreibberechtigungen auf das in Schritt 5 definierte Verzeichnis anzupassen, damit der virtuelle Drucker in der Lage ist, im Kontext des Benutzers des 365 business Print Agent Dienst, in das Verzeichnis zu schreiben.<br>Für Tests kann es daher Sinn machen den Benutzer zur Ausführung des 365 business Print Agent Dienst auf einen anderen Benutzer, mit Lese- und Schreibrechten auf das lokale Dateisystem, umzustellen.
</div>

Nach diesen Schritten werden alle Druckaufträge, die an diesen Drucker gesendet werden, automatisch an dem als Port angegebenen Ort gespeichert. Außerdem werden Druckaufträge, die über den 365 business Print Agent gesendet werden, an dem angegebenen Speicherort (siehe Schritt 5) gespeichert.