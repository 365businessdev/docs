---
title: Einrichtung
---

Der Empfang einer elektronischen Rechnung ist aktuell bereits über E-Mail-Postfächer möglich. Alternativ können Rechnungen auch über eine elektronische Schnittstelle bereitgestellt oder zum Download angeboten werden.

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Gut zu wissen:</strong>Wir empfehlen die Integration eines oder mehrerer Microsoft 365-Postfächer in Microsoft Dynamics 365 Business Central, um die automatische Verarbeitung von E-Belegen effizient zu gestalten und mit geringen Einstiegshürden zu starten.
</div>

### Bevor Sie starten

Bitte beachten Sie, dass für die Erstellung und Verarbeitung von E-Belegen u.U. die Einrichtung und Ergänzung einiger Stammdaten in Microsoft Dynamics 365 Business Central erforderlich ist. Hierzu zählen unter anderem:

 - Firmendaten (z.B. Name, Adresse, Steuernummer, USt-IdNr.)
 - Zahlungsformen (ZUGFeRD Zahlungsmethode)
 - Einheiten (Internationaler Standardcode)


<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg" style="--fa-secondary-color: #FF0000; --fa-primary-color: #111111; --fa-secondary-opacity: 0.7"></i> <strong>Sprechen Sie uns an!</strong>Wir unterstützen Sie bei der Überprüfung Ihrer Einrichtung in Microsoft Dynamics 365 Business Central.<br>
    <br>
    <a href="https://365businessdev.com/kontakt/" target="_blank">Sprechen Sie uns gerne an</a>.
</div>

### E-Belegdienst

![E-Belegdienst Einrichtung](/assets/images/365-business-e-invoice/61affa1b-0386-40cb-9bf7-92e855b75a8d.png)

Die Seite **E-Belegdienste** erlaubt die Festlegung von unterstützten **Belegformaten** und **Dienstintegrationen**, sowie die Einrichtung der Parameter für die Importlogik und -prüfung. Durch 365 business E-Invoice werden die folgenden Erweiterungen vorgenommen:

 - **Belegformat:** Factur-X 1.0.07 - ZUGFeRD 2.3.0 - EXTENDED (EN 16931)
 - **Dienstintegration:** Microsoft 365 Postfach

#### Was ist das E-Belegdienst Belegformat?

Das Belegformat definiert die Struktur und den Inhalt der elektronischen Belege. 365 business E-Invoice unterstützt den Import und Export von elektronischen Belegen im Factur-X 1.0.07 - ZUGFeRD 2.3.0 - EXTENDED (EN 16931) Format.

#### Was ist die E-Belegdienst Dienstintegration?

Die Dienstintegration definiert die Schnittstelle, über die elektronische Belege empfangen und versendet werden. 365 business E-Invoice unterstützt die Dienstintegration "Microsoft 365 Postfach".

##### Werden abweichende Dienstintegrationen unterstützt?

Ja, auch andere Dienstintegrationen werden für die Verarbeitung mit dem Belegformat Factur-X 1.0.07 - ZUGFeRD 2.3.0 - EXTENDED (EN 16931) unterstützt. 
Bitte prüfen Sie jedoch vorab, in welchem Datenformat bzw. Belegformat die Daten über die Dienstintegration bereitgestellt werden.

### E-Invoice Einrichtung

In der 365 business E-Invoice Einrichtung können zusätzliche Parameter angegeben werden, um die Verarbeitung von E-Belegen zu optimieren. Hierzu zählen u.a. die Konfiguration der zu überwachenden E-Mail Postfächer, das Anhängen der Factur-X - ZUGFeRD XML-Metadaten Datei (XML) und des PDF-Belegs.

![365 business E-Invoice Mailbox](/assets/images/365-business-e-invoice/setup.png)  

| Feld | Beschreibung |
| --- | --- |
| ZUGFeRD XML an Dokument anhängen | Gibt an, ob die ZUGFeRD-XML-Metadaten-Datei an das erstellte Dokument angehängt wird. |
| ZUGFeRD PDF an Dokument anhängen | Gibt an, ob das ZUGFeRD-PDF an das erstellte Dokument angehängt wird. |
| ZUGFeRD E-Invoice Export aktivieren | Legt fest, ob Verkaufsrechnungen und Gutschriften im Factur-X - ZUGFeRD Format erstellt werden, wenn der Benutzer die Druckaktion aufruft. |

### E-Beleg Import

Der Empfang von elektronischen Belegen (Import) wird von 365 business E-Invoice im Factur-X / ZUGFeRD-Format unterstützt. Dies ermöglicht Unternehmen, eingehende E-Belege direkt in Microsoft Dynamics 365 Business Central zu verarbeiten. Direkt nach der Installation von 365 business E-Invoice ist die App grundsätzlich dafür bereit, E-Belege (z.B. PDF-Rechnungen mit eingebetteten Factur-X / ZUGFeRD Daten) zu verarbeiten.

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Gut zu wissen:</strong>Während der Installation von 365 business E-Invoice wird ein E-Belegdienst mit dem Code <strong>365 ZUGFERD</strong> angelegt und vollständig konfiguriert.
</div>

![E-Belegdienst Einrichtung](/assets/images/365-business-e-invoice/61affa1b-0386-40cb-9bf7-92e855b75a8d.png)

1. Öffnen Sie **E-Belegdienste** über die Microsoft Dynamics 365 Business Central Suche.
2. Wählen Sie den E-Belegdienst aus (z.B. **365 ZUGFERD**).
3. Wählen Sie **Factur-X 1.0.07 - ZUGFeRD 2.3.0 - EXTENDED (EN 16931)** im Feld **Belegformat** aus.
4. Wählen Sie, falls gewünscht, **Microsoft 365 Postfach** im Feld **Dienstintegration** aus.
5. Überprüfen Sie die Parameter im Bereich **Importierte Parameter**, gem. den Anforderungen Ihres Unternehmens.

#### Dienstintegration: Microsoft 365 Postfach einrichten

Um eingehende E-Belege aus Microsoft 365 Postfächern abrufen und verarbeiten zu können, ist es erforderlich, diese Postfächer entsprechend zu konfigurieren. Hierzu wird auf die <a href="https://learn.microsoft.com/de-de/dynamics365/business-central/admin-how-setup-email" target="_blank"><strong>E-Mail Konten</strong></a> Funktionalität von Microsoft Dynamics 365 Business Central zurückgegriffen.

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Hinweis:</strong>365 business E-Invoice unterstützt derzeit nur E-Mail Postfächer der Kontoart "Microsoft 365".
</div>

![365 business E-Invoice Mailbox](/assets/images/365-business-e-invoice/setup.png)  

1. Öffnen Sie **365 business E-Invoice Einrichtung** über die Microsoft Dynamics 365 Business Central Suche.
2. Klicken Sie auf **Neue Zeile** und im Anschluss auf den Assit Edit (...) im Feld **Name**, um die Auswahl der E-Mail Konten zu öffnen.
3. Wählen Sie das E-Mail-Konto oder klicken Sie auf Weitere Aktionen (...) und wählen dann **Neu** und **E-Mail-Konto hinzufügen**.
   1. Im Fenster **E-Mail einrichten** folgen Sie bitte den Anweisungen des Dialogs für die Kontoart **Microsoft 365** um das E-Mail Postfach einzurichten.
4. Klicken Sie auf **OK** um die E-Mail-Konto Auswahl zu schließen.

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Gut zu wissen:</strong>Für Versand von E-Belegen werden unabhängig von der Einrichtung in der E-Invoice Einrichtung die konfigurierten E-Mail Konten gem. der E-Mail Szenarien verwendet.
</div>

#### Optional: Aktivieren Sie den automatischen Import

Durch das Aktivieren des automatischen Imports, werden Einkaufsrechnungen und -gutschriften im Factur-X / ZUGFeRD-Format aus den eingehenden E-Mails automatisch verarbeitet.

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg" style="--fa-secondary-color: #FF0000; --fa-primary-color: #111111; --fa-secondary-opacity: 0.7"></i> <strong>Wichtig:</strong>Der Benutzer, welcher den automatischen Import aktiviert, muss zwingend Zugriff auf dieses Postfach haben, da sonst die E-Mails aufgrund von fehlender Berechtigung nicht abgerufen werden können.
</div>

1. Öffnen Sie **E-Belegdienste** über die Business Central Suche. 
2. Wählen Sie den E-Belegdienst aus (z.B. **365 ZUGFERD**).
3. Wählen Sie **Microsoft 365 Postfach** im Feld **Dienstintegration** aus.
4. Aktivieren Sie die Option **Automatischer Import**.
5. Setzen Sie im Feld **Stapel-Startzeit**, falls gewünscht, die Uhrzeit, wann der Import erfolgen soll.
6. Setzen Sie, falls gewünscht, das Intervall in dem die E-Mails abgerufen werden sollen im Feld **Minuten zwischen Ausführungen** (z.B. 1440min = 24h).

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Hinweis:</strong>Da die Verarbeitung von E-Mails sehr leistungsintensiv ist, empfiehlt es sich, die Verarbeitung in der Nacht durchzuführen. Ebenso ist es empfehlenswert, dass die Zeit zwischen den Ausführungen nicht zu gering ist.
</div>

### E-Beleg Export

Der Versand von elektronischen Belegen (Export) wird von 365 business E-Invoice im Factur-X / ZUGFeRD-Format unterstützt. Dies ermöglicht Unternehmen, ausgehende E-Belege direkt aus Microsoft Dynamics 365 Business Central zu versenden. Direkt nach der Installation von 365 business E-Invoice ist die App grundsätzlich dafür bereit, E-Rechnungen (z.B. PDF-Rechnungen mit eingebetteten Factur-X / ZUGFeRD Daten) zu versenden.

Es bestehen zwei Arten des E-Belegexports:

 - **Erweiterter E-Beleg-Serviceflow:** Der erweiterte E-Beleg-Serviceflow ermöglicht es, E-Belege automatisiert beim Buchen, direkt aus Microsoft Dynamics 365 Business Central, zu versenden. Hierbei wird der E-Beleg bei der Buchung des Verkaufsbeleg (z.B. Verkaufsrechnung) erzeugt und über den integrierten Microsoft Dynamics 365 Business Central Workflow, gem. des hinterlegten E-Belegdienst versendet.
 - **Buchen und senden:** Der E-Beleg kann auch manuell über die Aktion *Buchen und senden* erzeugt und versendet werden. Hierbei wird, sofern die Option aktiviert ist, die elektronische Rechnung oder Gutschrift direkt aus dem Verkaufsbeleg (z.B. Verkaufsrechnung) heraus versendet.

#### Erweiterter E-Beleg-Serviceflow

Der erweiterte E-Beleg-Serviceflow wird über die **Belegsendeprofile** in Microsoft Dynamics 365 Business Central konfiguriert. Die Belegsendeprofile können im Anschluss Debitoren oder Verkaufsbelegen zugewiesen werden. Für die Verwendung von E-Belegdiensten, wie z.B. 365 business E-Invoice, ist es erforderlich, dass die Belegsendeprofile entsprechend konfiguriert sind.

| Sendeoption | Beschreibung | Wert | 
| --- | --- | --- |
| Elektronischer Beleg | Legt fest, ob der Beleg als elektronischer Beleg gesendet wird, den der Debitor in sein System importieren kann, wenn Sie die Schaltfläche "Buchen und senden" wählen. Zur Verwendung dieser Option müssen Sie auch das Feld "Elektronisches Format" ausfüllen. Alternativ kann die Datei auf der Festplatte gespeichert werden. | Erweiterter E-Beleg-Serviceflow |
| Serviceflowcode für elektronischen Beleg | Gibt den elektronischen Serviceflow an, der zum Senden von Belegen verwendet wird. | *MS-EDOCTOS-01* |

![Belegsendeprofil](/assets/images/365-business-e-invoice/b9de9320-498e-4f51-af40-d87844ed27b3.png)

Das Feld **Serviceflowcode für elektronischen Beleg** referenziert auf den Workflow, der für den Versand des elektronischen Belegs verwendet wird. Der Workflow *MS-EDOCTOS-01* wird durch Microsoft bereitgestellt, es können jedoch auch weitere Workflows mit abweichenden Bedingungen angelegt werden.

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Mehr erfahren:</strong>Erfahren Sie mehr über <a href="https://learn.microsoft.com/de-de/dynamics365/business-central/across-workflow" target="_blank">Workflows in Microsoft Dynamics 365 Business Central</a>.
</div>

![Workflows](/assets/images/365-business-e-invoice/e27eb5c8-0ecb-4bff-810a-7dd858a27e08.png)

##### E-Belegdienst im E-Beleg-Serviceflow einrichten

Standardmäßig verwendet der erweiterte E-Beleg-Serviceflow den E-Belegdienst **E-BELEGE**, welche von Microsoft automatisch bereitgestellt wird. Um den E-Belegdienst zu konfigurieren, gehen Sie wie folgt vor:

1. Öffnen Sie **Workflows** über die Business Central Suche.
2. Wählen Sie den Workflow **An einen Dienst senden** (Code *MS-EDOCTOS-01*) aus.
3. Wählen Sie im Abschnitt **Workflowschritte**, in der Spalte **Dann Antwort**, die Zeile **Send E-Document using setup: ...**.
   ![E-Beleg Workflow](/assets/images/365-business-e-invoice/9f15977c-da6e-4cad-87af-ff615c3e43d9.png)
4. Wählen Sie in der **Workflowreaktion** den **E-Belegdienst** aus (z.B. **365 ZUGFERD**).
5. Klicken Sie auf **OK** um die Auswahl zu bestätigen.

#### Buchen und senden

Der E-Beleg kann auch manuell über die Aktion *Buchen und senden*, bzw. aus dem gebuchten Beleg heraus über *Per E-Mail senden*, erzeugt und versendet werden. Dabei werden keine ausgehenden E-Belege erzeugt, sondern die elektronische Rechnung oder Gutschrift direkt aus dem Beleg heraus über den Microsoft Dynamics 365 Business Central Standard versendet.

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Hinweis:</strong>Die Option <strong>ZUGFeRD E-Invoice Export aktivieren</strong> in der <strong>E-Invoice Einrichtung</strong> muss aktiviert sein, damit die Verkaufsrechnungen und -gutschriften automatisch in elektronische Factur-X - ZUGFeRD Dateien umgewandelt werden.
</div>

### Siehe auch

 - <a href="https://learn.microsoft.com/de-de/dynamics365/business-central/admin-how-setup-email" target="_blank">E-Mail einrichten</a>
 - <a href="https://learn.microsoft.com/de-de/dynamics365/business-central/across-workflow" target="_blank">Workflows in Microsoft Dynamics 365 Business Central</a>