# Bankkontoverbindung herstellen

Um Banktransaktionen bzw. Kontoumsätze abzurufen und Zahlungen zu initiieren, müssen Sie zunächst eine Verbindung zu Ihrer Bank herstellen. Diese Verbindung erfolgt über die [finAPI](https://www.finapi.io/), die als Schnittstelle zwischen Microsoft Dynamics 365 Business Central und Ihrer Bank fungiert.

Bei der Bankkontoverbindung handelt es sich um einen einmaligen Prozess, der es Ihnen ermöglicht, Ihre Bankkonten in 365 business Banking zu integrieren. Nach der erfolgreichen Verbindung können Sie Banktransaktionen automatisiert abrufen und Zahlungen direkt aus Microsoft Dynamics 365 Business Central heraus initiieren.

## Voraussetzungen

Bevor Sie mit der Bankkontoverbindung beginnen, stellen Sie sicher, dass Sie einen [Banking-Benutzer in Microsoft Dynamics 365 Business Central eingerichtet](banking-user-setup.md) haben. Sollte die Einrichtung des Benutzers noch nicht erfolgt sein, erscheint die Einrichtung automatisch, wenn Sie die Bankkontoverbindung herstellen möchten.

## Schritt-für-Schritt-Anleitung

Gehen Sie wie folgt vor, um Ihre Bankkontoverbindung in 365 business Banking herzustellen:

1. Wählen Sie **Bankkonten** in der Suche von Microsoft Dynamics 365 Business Central aus.
2. Wählen Sie die Aktion **Bankkonten verbinden** in der Gruppe **Banking** aus.
   ![Bankkonten verbinden](/assets/images/365-business-banking/connect-bank-accounts.en-US.png)
3. Wählen Sie **Weiter**, um den Verbindungsprozess zu starten.
4. Geben Sie den Banknamen, die BIC/SWIFT Code oder die IBAN Ihres Bankkontos ein, um Ihre Bank auszuwählen.
   ![finAPI Web Form](/assets/images/365-business-banking/finAPI-webform.en-US.png)
5. Melden Sie sich mit Ihren Bankzugangsdaten an. Dies kann je nach Bank unterschiedlich sein, in der Regel benötigen Sie jedoch Ihre Kontonummer und PIN.
6. Folgen Sie den Anweisungen auf dem Bildschirm, um die Verbindung zu Ihrer Bank herzustellen. Dies kann die Bestätigung von Sicherheitsfragen oder die Eingabe eines TAN-Codes umfassen.
7. Wählen Sie die Konten aus, die Sie verbinden möchten, und bestätigen Sie Ihre Auswahl.
8. Nach erfolgreicher Verbindung wird die Anzahl der verbundenen Konten angezeigt.
   ![Bankkonten verbunden](/assets/images/365-business-banking/connected-bank-accounts.en-US.png)
9. Wählen Sie **Fertigstellen**, um die Bankkonten zu importieren und die Verbindung abzuschließen.

<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Gut zu wissen</strong>
    Die Bankkontoverbindung kann beliebig oft ausgeführt werden, um weitere Bankkonten zu verbinden. Bei der erneuten Verbindung werden keine Daten gelöscht, sondern lediglich neue Konten hinzugefügt. Bestehende Konten werden aktualisiert, wenn sich deren Informationen geändert haben.
</div>

### Bankkonten importieren

Nach der erfolgreichen Verbindung zu Ihrer Bank werden die Bankkonten automatisch in Microsoft Dynamics 365 Business Central importiert.

Sollten Sie bereits Bankkonten in Microsoft Dynamics 365 Business Central eingerichtet haben, können Sie diese Konten mit der finAPI verbinden, um die Vorteile von 365 business Banking zu nutzen. Gehen Sie dazu wie unten beschrieben vor. Beim Import der Bankkonten erfolgt ein Abgleich, mit Hilfe der IBAN, um doppelte Einträge zu vermeiden. Falls ein Bankkonto bereits in Microsoft Dynamics 365 Business Central vorhanden ist, wird dieses aktualisiert, anstatt ein neues Konto zu erstellen.

<div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Hinweis</strong>
    Bitte beachten Sie, dass bei bestehende Bankkonten in Microsoft Dynamics 365 Business Central die <a href="https://learn.microsoft.com/de-de/dynamics365/business-central/bank-how-reconcile-bank-accounts-separately" target="_blank">Bankkontoabstimmung</a> durchgeführt sein muss, um sicherzustellen, dass die Kontoumsätze korrekt sind und keine doppelten Posten importiert werden.<br>
    Alternativ können Sie über das Feld <strong>Datum letzter Auszug</strong> in der Bankkonto-Karte festlegen, ab wann neue Kontoumsätze abgerufen werden sollen.
</div>

Im Rahmen des Imports der Bankkonten werden die folgenden Informationen abgerufen:

- **Kontoname**: Der Name des Bankkontos.
- **IBAN**: Die Internationale Bankkontonummer, die zur Identifikation des Kontos verwendet wird.
- **BIC/SWIFT Code**: Der Bank Identifier Code, der zur Identifikation der Bank verwendet wird.
- **Kontowährung**: Die Währung, in der das Bankkonto geführt wird.
- **Bankkontonummer**: Die durch die Bank vergebene Nummer des Bankkontos.
- **Kontoart**: Die Art des Bankkontos (z. B. Girokonto, Sparkonto).

Zustätzlich werden die Informationen der Bank (z.B. Adresse) abgerufen und in der Bankkonto-Karte gespeichert.

## Bankkonten aktualisieren

Wenn sich die Informationen zu einem bereits verbundenen Bankkonto ändern, können Sie die Verbindung aktualisieren, um die neuesten Daten abzurufen. Gehen Sie dazu wie folgt vor:

1. Wählen Sie **Bankkonten** in der Suche von Microsoft Dynamics 365 Business Central aus.
2. Wählen Sie die Aktion **Bankkonten abrufen** in der Gruppe **Banking** aus.

## Bankkontoverbindung entfernen

Wenn Sie eine Bankkontoverbindung entfernen möchten, gehen Sie wie folgt vor:

1. Wählen Sie **Bankkonten** in der Suche von Microsoft Dynamics 365 Business Central aus.
2. Wählen Sie das Bankkonto aus, das Sie entfernen möchten.
3. Wählen Sie die Aktion **Löschen** aus.
