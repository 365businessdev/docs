In dieser Kurzanleitung wird erklärt, wie Sie 365 business E-Invoice aktivieren und einrichten.

## Voraussetzungen

 - Microsoft Dynamics 365 Business Central 2024 release wave 1 (24.0) oder neuer.
 - Microsoft 365 Postfach *(optional, für Empfang von E-Rechnungen per E-Mail)*

<div class="alert alert-notice">
    <i class="fa-solid fa-notes"></i> <strong>Wichtiger Hinweis:</strong>Diese Kurzanleitung konzentriert sich auf den Empfang von E-Rechnungen im Factur-X - ZUGFeRD Format über die Microsoft 365 Postfach Integration.<br/>Für weitere Informationen zur Einrichtung besuchen Sie bitte die <a href="../setup/">Dokumentation</a>.
</div>

## Schritt 1: Installation von 365 business E-Invoice

Öffnen Sie den **Marketplace für Erweiterungen** in Microsoft Dynamics 365 Business Central und suchen Sie nach **365 business E-Invoice**.
Installieren Sie die App von Microsoft AppSource und warten Sie, bis die Installation abgeschlossen ist.

## Schritt 1.1: Microsoft 365 Postfach Integration einrichten

Um eingehende E-Belege aus Microsoft 365 Postfächern abrufen und verarbeiten zu können, ist es erforderlich, diese Postfächer entsprechend zu konfigurieren. Hierzu wird auf die <a href="https://learn.microsoft.com/de-de/dynamics365/business-central/admin-how-setup-email" target="_blank"><strong>E-Mail Konten</strong><i class="fa-solid fa-up-right-from-square" style="font-size: x-small; vertical-align: super; margin-left: 5px;"></i></a> Funktionalität von Microsoft Dynamics 365 Business Central zurückgegriffen.

 1. Öffnen Sie **365 business E-Invoice Einrichtung** über die Microsoft Dynamics 365 Business Central Suche.
 2. Klicken Sie auf **Neue Zeile** und im Anschluss auf den Assit Edit (...) im Feld **Name**, um die Auswahl der E-Mail Konten zu öffnen.
 3. Wählen Sie das E-Mail-Konto, dass Sie für den Rechnungsempfang nutzen möchten.
 4. Klicken Sie auf **OK** um die E-Mail-Konto Auswahl zu schließen.

## Schritt 1.2: Abruf von E-Belegen über E-Belegdienst automatisieren

Durch das Aktivieren des automatischen Imports, werden Einkaufsrechnungen und -gutschriften im Factur-X / ZUGFeRD-Format aus den eingehenden E-Mails automatisch verarbeitet.

 1. Öffnen Sie **E-Belegdienste** über die Business Central Suche. 
 2. Wählen Sie den E-Belegdienst aus (z.B. **365 ZUGFERD**).
 3. Prüfen Sie, dass **Microsoft 365 Postfach** im Feld **Dienstintegration** ausgewählt ist.
 4. Aktivieren Sie die Option **Automatischer Import**.
 5. Setzen Sie im Feld **Stapel-Startzeit**, falls gewünscht, die Uhrzeit, wann der Import erfolgen soll.
 6. Setzen Sie, falls gewünscht, das Intervall in dem die E-Mails abgerufen werden sollen im Feld **Minuten zwischen Ausführungen** (z.B. 1440min = 24h).

<div class="alert alert-notice">
    <i class="fa-solid fa-notes"></i> <strong>Gut zu wissen:</strong>Sie können den Abruf der E-Belege aus den konfigurierten Microsoft 365 Postfächern auch manuell auslösen. Hierzu können Sie die Aktion <strong>Empfangen</strong> im E-Belegdienst aufrufen.
</div>

## Schritt 2: E-Belege verarbeiten

Die Verarbeitung der E-Belege erfolgt automatisch durch den E-Belegdienst. Die E-Belege werden in Microsoft Dynamics 365 Business Central als Bestellungen, Einkaufsrechnungen oder -gutschriften angelegt.

Der grundsätzliche Verarbeitungsprozess für Bestellungen, Einkaufsrechnungen oder -gutschriften ist wie folgt:

 1. Öffnen Sie **E-Belege** über die Business Central Suche. 
 2. Öffnen Sie den E-Beleg, um die Details der Rechnung einzusehen.
    ![E-Beleg](/assets/images/365-business-e-invoice/65046632-540f-43f0-9ab0-23a809f0002d.png)
 3. Überprüfen Sie die E-Belege auf Vollständigkeit und korrigieren Sie ggf. fehlende Informationen.
 4. Klicken Sie auf den Drilldown-Link **Beleg** um die Bestellung, Einkaufsrechnung oder -gutschrift zu öffnen.
 5. Buchen Sie den Beleg.

![365 business E-Invoice](/assets/images/365-business-e-invoice/e-document-overview.png) 

Während der Verarbeitung von E-Belegen können Fehler auftreten, die die automatische Verarbeitung verhindern. Um problembehaftete E-Rechnungen zu identifizieren, verwenden Sie die Business Central Suche und rufen den Bereich **E-Belege** auf. Dort erkennen Sie Problemfälle an einem **Fehler**-Status in der **Status des elektronischen Belegs**-Spalte.

 1. Öffnen Sie **E-Belege** über die Business Central Suche. 
 2. Identifizieren Sie einen fehlerhaften Beleg und öffnen Sie diesen.
 3. In der Ansicht **E-Beleg** können Sie den Bereich **Fehlermeldungen** erweitern, um Details zu den vorliegenden Problemen zu sehen.

Mögliche Ursachen für Probleme sind vielfältig, wie beispielsweise:

 * Unbekannte Kreditoren
 * Fehlende Verknüpfung zwischen Ihren Artikeln und den Kreditorenartikeln
 * Fehlerhafte Zuordnung von Einheiten (Maßeinheiten) zu Artikeln.

## Schritt 2.1: E-Belege verarbeiten - Fehler bearbeiten

Um problembehaftete E-Belege zu bearbeiten wird über 365 business E-Invoice der **Importassistent** bereitgestellt. Dieser unterstützt Sie bei der schrittweisen Behebung der Probleme in Ihrem E-Beleg und ermöglicht Ihnen die manuelle Korrektur.

 1. Rufen Sie die Aktion **Importassistent** in dem E-Beleg auf.
 2. Der Importassistent unterstützt Sie bei der schrittweisen Behebung der Probleme (siehe [Import Assistent](../import-assistant/)).

### Siehe auch

 - [Einrichtung](../setup/)
 - [Import Assistent](../import-assistant/)