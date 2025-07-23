# Dauerauftrag

Daueraufträge sind regelmäßige Zahlungen, die automatisch zu festgelegten Terminen ausgeführt werden. Sie sind nützlich für wiederkehrende Zahlungen wie Mieten, Abonnements oder andere regelmäßige Verpflichtungen.
In diesem Abschnitt erfahren Sie, wie Sie Daueraufträge in Microsoft Dynamics 365 Business Central einrichten und verwalten können.

![Daueraufträge](/assets/images/365-business-banking/standing-orders.en-US.png)

## Schritt-für-Schritt-Anleitung

1. Wählen Sie **Daueraufträge** in der Suche von Microsoft Dynamics 365 Business Central aus.
2. Wählen Sie die Aktion **Neu** aus, um einen neuen Dauerauftrag zu erstellen.
3. Geben Sie eine **Beschreibung** für den Dauerauftrag ein, um ihn später leichter identifizieren zu können.
4. Wählen Sie das **Bankkonto** aus, von dem die Zahlungen abgebucht werden sollen.
5. Wählen Sie den **Empfänger**, inklusive des Bankkontos des Empfängers, für den der Dauerauftrag eingerichtet wird.
6. Legen Sie die **Häufigkeit**, das **Startdatum** und optional ein **Enddatum** für den Dauerauftrag fest.
7. Geben Sie die **Nachricht an den Empfänger**, den **Betrag** und optional den **SEPA Purpose Code** ein, um den Zweck der Zahlung zu kennzeichnen.
8. Überprüfen Sie die eingegebenen Informationen und stellen Sie sicher, dass alle Angaben korrekt sind.
9. Wählen Sie die Aktion **Freigeben**, um den Dauerauftrag an die Bank zu übermitteln.


![Dauerauftrag](/assets/images/365-business-banking/standing-order.en-US.png)

Abhängig von der Bank und der Zahlungsform kann es erforderlich sein, eine TAN oder eine andere Authentifizierungsmethode zu verwenden, um die Zahlung zu bestätigen. In diesem Fall erscheint ein Dialog zur Bestätigung der Zahlung.

![Autorisierung des Dauerauftrags](/assets/images/365-business-banking/bank-payment-authentication.en-US.png)

1. Wählen Sie **Autorisieren**, um den Zahlungsvorgang zu bestätigen.
2. Folgen Sie den Anweisungen auf dem Bildschirm, um den Dauerauftrag zu autorisieren. Dies kann die Eingabe einer TAN oder die Bestätigung über eine Banking-App umfassen.
   ![Autorisierung des Dauerauftrags](/assets/images/365-business-banking/bank-payment-authentication-webform.en-US.png)
3. Nach erfolgreicher Autorisierung wird der Dauerauftrag gespeichert.
   ![Bestätigung des Dauerauftrags](/assets/images/365-business-banking/bank-payment-confirmation.en-US.png)
4. Wählen Sie **Schließen**, um den Dialog zu schließen.

Nach erfolgter Autorisierung und Speicherung des Dauerauftrags wird dieser im System erfasst und die Zahlungen werden automatisch zu den festgelegten Terminen ausgeführt. Der **Status** des Dauerauftrags wird auf **Freigegeben** gesetzt.