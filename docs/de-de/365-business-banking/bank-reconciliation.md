# Banktransaktionen abrufen

Mit 365 business Banking können Sie Banktransaktionen abrufen und in der Zahlungsabstimmung in Microsoft Dynamics 365 Business Central verwenden. Dies ermöglicht eine effiziente Verwaltung Ihrer Bankkonten und eine nahtlose Integration in Ihre Finanzprozesse. 

<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Gut zu wissen</strong>
    Beim Abruf der Banktransaktionen handelt es sich nicht um eine Abruf von Kontoauszügen, stattdessen werden die Transaktionen direkt von der Bank abgerufen. Dies ermöglicht eine schnellere und genauere Verarbeitung Ihrer Finanzdaten, mit zusätzlichen Informationen zu den Transaktionen, die in den Kontoauszügen möglicherweise nicht enthalten sind.
</div>

## Voraussetzungen

Um Banktransaktionen abrufen zu können, müssen Sie zunächst einen Banking-Benutzer in Microsoft Dynamics 365 Business Central einrichten. Dieser Benutzer wird für die Verbindung zu Ihrer Bank verwendet und hat Zugriff auf die Banking-Funktionen. Zudem muss eine Verbindung zu Ihrer Bank oder Ihren Banken hergestellt sein. Weitere Informationen finden Sie in der [Schritt-für-Schritt-Anleitung zur Bankkontoverbindung](banking-connection.md).

## Schritt-für-Schritt-Anleitung

Gehen Sie wie folgt vor, um Banktransaktionen in 365 business Banking abzurufen:

1. Wählen Sie **Zahlungsabstimmungsbuch.-Blätter** in der Suche von Microsoft Dynamics 365 Business Central aus.
2. Wählen Sie die Aktion **Banktransaktionen abrufen** aus.
3. Wählen Sie das Bankkonto aus, für das Sie die Transaktionen abrufen möchten.
   ![Bankkonto für Banktransaktionsabruf auswählen](/assets/images/365-business-banking/select-bank-account.en-US.png)
4. Wählen Sie **OK**, um den Abruf der Banktransaktionen zu starten.
5. Bestätigen Sie die Meldung, dass die Banktransaktionen abgerufen wurden.
   ![Banktransaktionen abgerufen](/assets/images/365-business-banking/bank-transactions-retrieved.en-US.png)

<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Gut zu wissen</strong>
    Der Import der Banktransaktionen prüft automatisch, ob Transaktionen bereits importiert wurden und ignoriert entsprechende Dubletten. Dies stellt sicher, dass Ihre Zahlungsabstimmung immer aktuell und genau ist.
</div>

## Zahlungsabstimmung

Nach dem Abruf der Banktransaktionen können Sie diese in der Zahlungsabstimmung verwenden. Die Banktransaktionen werden automatisch den offenen Posten in Microsoft Dynamics 365 Business Central zugeordnet, um eine effiziente Abstimmung zu ermöglichen. Dabei wird die Microsoft Dynamics 365 Business Central Bankabstimmung (siehe [Verwalten und Abstimmen Ihrer Bankkonten](https://learn.microsoft.com/de-de/dynamics365/business-central/bank-manage-bank-accounts)) verwendet, und um zusätzliche Funktionen ergänzt, um ein besseres Ergebnis beim Abgleich der Banktransaktionen zu erzielen.

### Identifizierung der Kontoart

Ergänzend zum Microsoft Standard, wird bei der Zahlungsabstimmung, zur Identifizierung der Kontoart, die IBAN des Bankkontos aus der Banktransaktion verwendet. Dies ermöglicht eine genauere Zuordnung der Transaktionen zu den entsprechenden Konten und verbessert die Effizienz der Abstimmung.

Sofern der Ausgleich akzeptiert und die Bankabstimmung gebucht wird, werden die Stammdaten (z.B. Debitor Bankkonto) der ausgeglichenen Konten (z.B. Debitor, Kreditor) aktualisiert bzw. ergänzt, um bei zukünftigen Abstimmungen eine schnellere und genauere Zuordnung zu ermöglichen. 

<div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Hinweis</strong>
    Neu angelegte Bankkonten (z.B. Debitor Bankkonto) werden mit dem Status <strong>Neu</strong> erstellt. Dies bedeutet, dass das Bankkonto neu hinzugefügt und noch nicht überprüft wurde. Eine Überprüfung des Bankkontos ist erforderlich, um sicherzustellen, dass die Bankkontoinformationen korrekt sind und das Konto für zukünftige Transaktionen verwendet werden kann. Sobald das Bankkonto überprüft wurde, wird der Status auf <strong>Freigegeben</strong> geändert.
</div>

#### Beispiel

Sie erhalten eine Zahlung von einem Debitor auf Ihr Bankkonto. Die Zahlung wird an hand des Verwendungszwecks der Banktransaktion dem Debitor zugeordnet. Wenn Sie die Zahlung verbuchen, wird geprüft, ob das Debitor Bankkonto bereits existiert. Falls nicht, wird es automatisch erstellt und die Bankkontoinformationen (u.A. IBAN, BIC/SWIFT Code) werden aus der Banktransaktion übernommen. 

### Zahlungscode Zuweisung

Im Rahmen einer SEPA Zahlung werden neben dem Verwendungszweck zusätzliche Zahlungscodes übermittelt, die zur Identifizierung der Zahlung verwendet werden. Im Rahmen der Zahlungsabstimmung können diese Codes verwendet werden, um die Zuordnung der Banktransaktionen zu den offenen Posten oder Sachkonten zu verbessern.

Folgende Zahlungscodes werden unterstützt:

- **ZKA Code**: Der ZKA Code, auch Geschäftsvorfallcode genannt, wird verwendet, um den Geschäftsvorfall der Banktransaktion zu identifizieren. Dieser Code wird in der Regel von der Bank bereitgestellt und kann zur Identifizierung der Art der Transaktion verwendet werden.
  Weitere Informationen, siehe [ZKA Code](payment-codes/zka-code.md).

- **SEPA Purpose Code**: Der SEPA Purpose Code wird verwendet, um den Zweck der SEPA Überweisung zu identifizieren. Dieser Code ist optional und kann verwendet werden, um den Zweck der Zahlung zu spezifizieren.
  Weitere Informationen, siehe [SEPA Purpose Code](payment-codes/sepa-purpose-code.md).

Über die Seite **Zahlungscode Zuweisung** kann eine Zuordnung von Zahlungscodes zu Kontoart und Kontonr. vorgenommen werden. Dies ermöglicht eine genauere Zuordnung der Banktransaktionen zu den entsprechenden Konten und verbessert die Effizienz der Abstimmung.

Weitere Informationen finden Sie in der Dokumentation zur [Zahlungscode Zuordnung](payment-code-mapping.md).

## Automatisierung

Das Abrufen von Banktransaktionen und der automatische Abgleich kann mit 365 business Banking automatisiert werden. Dies ermöglicht eine regelmäßige Aktualisierung der Banktransaktionen und eine nahtlose Integration in Ihre Finanzprozesse. Hierzu wird pro Bankkonto ein Aufgabenwarteschlangenposten erstellt, der regelmäßig die Banktransaktionen abruft, das Zahlungsabstimmungsbuch.-Blatt aktualisiert und die Banktransaktionen automatisch abgleicht.

### Schritt-für-Schritt-Anleitung

Gehen Sie wie folgt vor, um die Automatisierung für das Abrufen von Banktransaktionen einzurichten:

1. Wählen Sie **Bankkonten** in der Suche von Microsoft Dynamics 365 Business Central aus.
2. Wählen Sie das Bankkonto aus, für das Sie die Automatisierung einrichten möchten.
3. Wählen Sie unter **Aktionen** die Aktion **Banktransaktionsabruf automatisieren**.
4. Geben Sie die gewünschten Filter und die Option für den automatischen Abgleich an.
   ![Banktransaktionsabruf automatisieren](/assets/images/365-business-banking/retrieve-bank-transactions.en-US.png)
5. Wählen Sie **OK**, um die Einstellungen zu bestätigen.
6. Wählen Sie **Ja**, um den erstellten Aufgabenwarteschlangenposten anzuzeigen.
   ![Aufgabenwarteschlangenposten anzeigen](/assets/images/365-business-banking/retrieve-bank-transactions-open-job-queue-entry.en-US.png)
7. Überprüfen Sie den Aufgabenwarteschlangenposten und stellen Sie sicher, dass die Einstellungen korrekt sind.
8. Wählen Sie **Status auf 'Bereit' festlegen**, um die Automatisierung zu aktivieren.


<div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Hinweis</strong>
    Der Aufgabenwarteschlangenposten wird standardmäßig auf täglichen Abruf eingestellt. Sie können jedoch die Häufigkeit des Abrufs anpassen, indem Sie die Einstellungen im Aufgabenwarteschlangenposten ändern.
</div>

# Siehe auch

- [Banking Benutzer einrichten](banking-user-setup.md)
- [Bankkontoverbindung herstellen](banking-connection.md)
- [Banktransaktionen abrufen](banking-retrieve-transactions.md)
- [Zahlungscode Zuordnung](payment-code-mapping.md)
- [ZKA Code](payment-codes/zka-code.md)
- [SEPA Purpose Code](payment-codes/sepa-purpose-code.md)