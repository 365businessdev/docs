# Erste Schritte

Herzlich willkommen bei 365 business Banking, der einfachen und sicheren Lösung für die Verwaltung Ihrer Bankkonten und Banktransaktionen in Microsoft Dynamics 365 Business Central. In diesem Abschnitt erfahren Sie, wie Sie 365 business Banking einrichten und nutzen können, um Ihre Bankgeschäfte effizient zu verwalten.

## Voraussetzungen

- Microsoft Dynamics 365 Business Central 2021 release wave 1 (18.0) oder neuer.
- Ein aktives Bankkonto bei einer unterstützten Bank (siehe [Unterstützte Banken](supported-banks.md)).

## Schritt 1: Installation von 365 business Banking

Öffnen Sie den **Marketplace für Erweiterungen** in Microsoft Dynamics 365 Business Central und suchen Sie nach **365 business Banking**. Installieren Sie die App von Microsoft AppSource und warten Sie, bis die Installation abgeschlossen ist.

Alternativ verwenden Sie den nachfolgenden Link, um **365 business Banking** direkt aus Microsoft AppSource zu installieren:  
[365 business Banking installieren | Microsoft AppSource](https://appsource.microsoft.com/de-de/product/DynamicsBC/PUBID.business_development_christoph_krieg%7CAID.365businessbanking%7CPAPPID.2ddb5a5d-a539-46f7-8c68-2e37cf7d0dfb?modalAppId=PUBID.business_development_christoph_krieg%7CAID.365businessbanking%7CPAPPID.2ddb5a5d-a539-46f7-8c68-2e37cf7d0dfb&signInModalType=2&ctaType=2)

## Schritt 2: Banking Benutzer einrichten

Um Bankkonten zu verbinden, Banktransaktionen abzurufen und Zahlungen zu initiieren, müssen Sie einen Banking Benutzer in Microsoft Dynamics 365 Business Central einrichten. Gehen Sie dazu wie folgt vor:

1. Wählen Sie **Banking Benutzer Einrichtung** in der Suche von Microsoft Dynamics 365 Business Central aus.
2. Vergeben Sie ein **sicheres Passwort** und speichern Sie dies an einem sicheren Ort, außerhalb von Microsoft Dynamics 365 Business Central.
3. Geben Sie die **E-Mail Adresse** des Benutzers ein.
4. Geben Sie die **Telefonnr.** des Benutzers ein.
5. Wählen Sie die Aktion **Authentifizieren** aus, um den Banking-Benutzer zu erstellen.

Weitere Informationen zur Einrichtung des Banking-Benutzers finden Sie in der [Banking Benutzer Einrichtung](banking-user-setup.md).

## Schritt 2.1: Bankkontoverbindung herstellen

Um Banktransaktionen abzurufen und Zahlungen zu initiieren, müssen Sie eine Verbindung zu Ihrer Bank herstellen. Dies erfolgt über die [finAPI](https://www.finapi.io/), die als Schnittstelle zwischen Microsoft Dynamics 365 Business Central und Ihrer Bank fungiert.

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

## Schritt 3: Banktransaktionen abrufen

Nach der erfolgreichen Verbindung zu Ihrer Bank können Sie Banktransaktionen abrufen. Der Abruf erfolgt mit Hilfe der Zahlungsabstimmungsbuch.-Blätter in Microsoft Dynamics 365 Business Central.

Gehen Sie wie folgt vor, um Banktransaktionen in 365 business Banking abzurufen:

1. Wählen Sie **Zahlungsabstimmungsbuch.-Blätter** in der Suche von Microsoft Dynamics 365 Business Central aus.
2. Wählen Sie die Aktion **Banktransaktionen abrufen** aus.
3. Wählen Sie das Bankkonto aus, für das Sie die Transaktionen abrufen möchten.
   ![Bankkonto für Banktransaktionsabruf auswählen](/assets/images/365-business-banking/select-bank-account.en-US.png)
4. Wählen Sie **OK**, um den Abruf der Banktransaktionen zu starten.
5. Bestätigen Sie die Meldung, dass die Banktransaktionen abgerufen wurden.
   ![Banktransaktionen abgerufen](/assets/images/365-business-banking/bank-transactions-retrieved.en-US.png)

## Schritt 3.1: Ausgleich der Banktransaktionen

Nach dem Abruf der Banktransaktionen können Sie diese in der Zahlungsabstimmung verwenden. Die Banktransaktionen werden automatisch den offenen Posten in Microsoft Dynamics 365 Business Central zugeordnet, um eine effiziente Abstimmung zu ermöglichen. Dabei wird die Microsoft Dynamics 365 Business Central Bankabstimmung verwendet, um zusätzliche Funktionen ergänzt, um ein besseres Ergebnis beim Abgleich der Banktransaktionen zu erzielen.

Prüfen Sie die zugeordneten Banktransaktionen und nehmen Sie gegebenenfalls Anpassungen vor. Sobald Sie mit der Zuordnung zufrieden sind, können Sie den Ausgleich der Banktransaktionen buchen.
 
<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Gut zu wissen</strong>
    Verwenden Sie die <strong><a href="bank-reconciliation-rules.md">Kontierungsregeln</a></strong>, um den Ausgleich von Banktransaktionen zu automatisieren und zu optimieren. Die Kontierungsregeln ermöglichen es Ihnen, komplexe Kriterien festzulegen, um Transaktionen automatisch den richtigen Sachkonten zuzuordnen und erweiterte Buchungseinstellungen zu definieren.
</div>

## Schritt 3.2: Zahlungen buchen und Bankkonto abstimmen

1. Wählen Sie die Aktion **Zahlungen buchen und Bankkonto abstimmen** aus, um die ausgewählten Banktransaktionen zu buchen und das Bankkonto abzustimmen.
2. Bestätigen Sie die Buchung der Zahlungen und die Abstimmung des Bankkontos.
3. Überprüfen Sie die Buchungsdetails und stellen Sie sicher, dass alle Informationen korrekt sind.
4. Wählen Sie **OK**, um die Buchung abzuschließen.

## Schritt 4: Zahlungen initiieren

Um Zahlungen zu initiieren werden Zlg.-Ausg. Buch.-Blätter in Microsoft Dynamics 365 Business Central verwendet. Dabei wird dem Buch.-Blatt ein **Bankkonto** und eine **Zahlungsform** zugeordnet. Die Zahlungsform bestimmt, ob es sich um eine SEPA-Überweisung, eine SEPA-Echtzeitüberweisung oder eine SEPA-Lastschrift handelt.

Gehen Sie wie folgt vor, um Zahlungen in 365 business Banking zu initiieren:

1. Wählen Sie **Zlg.-Ausg. Buch.-Blätter** in der Suche von Microsoft Dynamics 365 Business Central aus.
2. Wählen Sie ein vorhandenes Buch.-Blatt für Ihr Bankkonto und Ihre Zahlungsform aus oder erstellen Sie ein neues Buch.-Blatt.
3. Wählen Sie die Aktion **Buch.-Blatt bearbeiten**, um das Buch.-Blatt zu bearbeiten.
4. Erfassen Sie die Buch.-Blattzeilen für Ihre Zahlungen, oder verwenden Sie die Aktion **Zahlungsvorschlag** um automatisch Zahlungsvorschläge zu generieren.
5. Überprüfen Sie die Buch.-Blattzeilen und stellen Sie sicher, dass alle Informationen korrekt sind. Prüfen Sie insbesondere die Beträge, Verwendungszwecke und das Bankkonto Empfänger.
6. Wählen Sie die Aktion **Zahlungen durchführen und buchen**, um die Zahlungen zu verarbeiten und die Buchung abzuschließen.
7. Bestätigen Sie die Durchführung der Zahlungen und die Buchung des Buch.-Blattes.

## Schritt 4.1: Bestätigung der Zahlungen

Abhängig von der Bank und der Zahlungsform kann es erforderlich sein, eine TAN oder eine andere Authentifizierungsmethode zu verwenden, um die Zahlung zu bestätigen. In diesem Fall erscheint ein Dialog zur Bestätigung der Zahlung.

![Autorisierung der Zahlung](/assets/images/365-business-banking/bank-payment-authentication.en-US.png)

1. Wählen Sie **Autorisieren**, um den Zahlungsvorgang zu bestätigen.
2. Folgen Sie den Anweisungen auf dem Bildschirm, um die Zahlung zu autorisieren. Dies kann die Eingabe einer TAN oder die Bestätigung über eine Banking-App umfassen.
   ![Autorisierung der Zahlung](/assets/images/365-business-banking/bank-payment-authentication-webform.en-US.png)
3. Nach erfolgreicher Autorisierung wird die Zahlung verarbeitet und abgeschlossen.
   ![Bestätigung der Zahlung](/assets/images/365-business-banking/bank-payment-confirmation.en-US.png)
4. Wählen Sie **Schließen**, um den Dialog zu schließen und zur Zahlungsabwicklung zurückzukehren.

## Schritt 4.2: Zahlungsausgang buchen

Nach der Bestätigung und Ausführung der Zahlung wird die Zahlung im Zlg.-Ausg. Buch.-Blatt verbucht. Sofern die Aktion **Zahlungen durchführen und buchen** verwendet wurde, erfolgt die Buchung automatisch. Andernfalls müssen Sie die Zahlung über die Aktion **Buchen** im Zlg.-Ausg. Buch.-Blatt manuell buchen.

## Siehe auch

- [Banking Benutzer einrichten](banking-user-setup.md)
- [Bankkontoverbindung herstellen](banking-connection.md)
- [Bankkontoabstimmung](bank-reconciliation.md)
- [Zahlungen](bank-payment.md)
