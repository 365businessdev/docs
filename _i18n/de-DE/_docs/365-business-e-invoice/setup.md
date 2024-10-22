
Für den Empfang einer elektronischen Rechnung reicht derzeit ein E-Mail-Postfach aus. Neben dem Versand per E-Mail kommen auch die Bereitstellung der Daten mittels elektronischer Schnittstelle oder ein Download in Betracht.<br/>
Wir empfehlen die Integration eines/mehrerer E-Mail-Postfächer für die automatische Verarbeitung der E-Rechnungen in Microsoft Business Central.

#### E-Mail Postfächer einrichten

Damit die Verarbeitung von E-Rechnungen aus E-Mail Postfächer erfolgen kann, müssen diese eingerichtet werden.

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Hinweis:</strong>365 business E-Invoice unterstützt derzeit nur E-Mail Postfächer der Kontoart "Microsoft 365"! 
</div>

1. Öffnen Sie "E-Belegdienste" über die Business Central Suche. 
2. Wählen Sie "365 ZUGFERD" aus und in dem folgenden Dialog "Einrichten der Dienstintegration".
3. Im Dialog "365 business E-Invoice Einrichtung" klicken Sie auf "Einrichtung E-Invoice-Mailbox" und wählen "Neue Zeile" und geben anschließend einen Namen für das E-Mail-Postfach ein (z.B. Rechnungspostfach).
4. In der Folge klicken Sie dann auf den Wert in der Spalte "E-Mail Adresse", ein weiteres Fenster öffnet sich in dem Sie ihr E-Mail Postfach definieren.
5. Klicken Sie auf die 3 Punkte und wählen dann "Neu" und "E-Mail-Konto hinzufügen".
6. Im Fenster "E-Mail einrichten" folgen Sie bitte den Anweisungen des Dialogs für die Kontoart "Microsoft 365" um das E-Mail Postfach einzurichten.

![365 business E-Invoice Mailbox](/assets/images/365-business-e-invoice/mailbox.png)  

<br/>
##### Optional: Aktivieren Sie den automatischen Import

Durch das Aktivieren des automatischen Imports, werden Rechnungen im ZUGFeRD-Format aus PDF-Dateien aus E-Mails automatisch verarbeitet.

<div class="alert alert-notice">
    <i class="fa-solid fa-notes"></i> <strong>Wichtig:</strong>Der Benutzer, welcher den automatischen Import aktiviert, muss zwingend Zugriff auf dieses Postfach haben, da sonst die E-Mails aufgrund von fehlender Berechtigung nicht abgerufen werden können.
</div>

1. Öffnen Sie "E-Belegdienste" über die Business Central Suche. 
2. Wählen Sie "365 ZUGFERD" aus.
3. Aktivieren Sie "Automatischer Import".
4. Setzen Sie die "Stapel-Startzeit", falls gewünscht (Uhrzeit, wann der Import erfolgen soll).
5. Setzen Sie "Minuten zwischen Ausführungen", falls gewünscht (wie häufig sollen die E-Mails abgerufen werden, 1440min = 24h).

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Hinweis:</strong>Da die Verarbeitung von E-Mails sehr leistungsintensiv ist, empfiehlt es sich, die Verarbeitung in der Nacht durchzuführen. Ebenso ist es empfehlenswert, dass die Zeit zwischen den Ausführungen nicht zu gering ist.
</div>

<br/>
#### Erstellung einer E-Rechnung 

Nach der Installation von 365 business E-Invoice ist die App grundsätzlich dafür bereit, E-Rechnungen (PDF-Rechnungen inkl. ZUGFeRD Daten) zu erzeugen.<br/>
Alle erzeugten Rechnungen (ausser der PDF-Dateien, die über den Button "Drucken" erzeugt werden) sind somit automatisch ZUGFeRD-konform.

Wenn Sie die automatische Integration von ZUGFeRD-Daten deaktivieren möchten, gehen Sie wie folgt vor.

1. Öffnen Sie "E-Belegdienste" über die Business Central Suche. 
2. Wählen Sie "365 ZUGFERD" aus und in dem folgenden Dialog "Einrichten der Dienstintegration".
3. Im Dialog "365 business E-Invoice Einrichtung" deaktivieren Sie "E-Rechnung erzeugen".
