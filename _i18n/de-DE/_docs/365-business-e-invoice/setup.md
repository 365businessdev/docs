
Der Empfang einer elektronischen Rechnung ist aktuell bereits über ein E-Mail-Postfach möglich. Alternativ können Rechnungen auch über eine elektronische Schnittstelle bereitgestellt oder zum Download angeboten werden.
<br/>
Wir empfehlen die Integration eines oder mehrerer E-Mail-Postfächer in Microsoft Business Central, um die automatische Verarbeitung von E-Rechnungen effizient zu gestalten.

### E-Beleg Import

#### E-Mail Postfächer einrichten

Um E-Rechnungen aus E-Mail Postfächern verarbeiten zu können, ist es erforderlich, diese Postfächer entsprechend zu konfigurieren.

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Hinweis:</strong>365 business E-Invoice unterstützt derzeit nur E-Mail Postfächer der Kontoart "Microsoft 365"! 
</div>

1. Öffnen Sie "365 business E-Invoice Einrichtung" über die Business Central Suche.
2. Klicken Sie auf "Neue Zeile" and im Anschluss auf die 3 Punkte im Feld "Name".
3. Im Fenster "E-Mail-Konten" wählen Sie ein bestende E-Mail-Konto oder klicken Sie auf die 3 Punkte und wählen dann "Neu" und "E-Mail-Konto hinzufügen".
4. Im Fenster "E-Mail einrichten" folgen Sie bitte den Anweisungen des Dialogs für die Kontoart "Microsoft 365" um das E-Mail Postfach einzurichten.

![365 business E-Invoice Mailbox](/assets/images/365-business-e-invoice/setup.png)  

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

#### E-Beleg Export

Nach der Installation von 365 business E-Invoice ist die App grundsätzlich dafür bereit, E-Rechnungen (PDF-Rechnungen inkl. ZUGFeRD Daten) zu erzeugen.<br/>
Alle erzeugten Rechnungen (ausser der PDF-Dateien, die über den Button "Drucken" erzeugt werden) sind somit automatisch ZUGFeRD-konform.

Wenn Sie die automatische Integration von ZUGFeRD-Daten deaktivieren möchten, gehen Sie wie folgt vor.

1. Öffnen Sie "365 business E-Invoice Einrichtung" über die Business Central Suche.
2. Deaktivieren Sie "ZUGFeRD E-Invoice Export aktivieren" unterhalb von "E-Beleg Export".
