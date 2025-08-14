# SEPA Lastschrift

In diesem Abschnitt erfahren Sie, wie Sie SEPA-Lastschrift in Microsoft Dynamics 365 Business Central durchführen können. SEPA (Single Euro Payments Area) ermöglicht es Unternehmen, Zahlungen in Euro innerhalb des SEPA-Raums effizient und kostengünstig zu tätigen. Beim Lastschriftverfahren verwenden Sie die vorherige Ermächtigung, in Form des SEPA Mandats, um Zahlungen von den Konten Ihrer Kunden einzuziehen.

<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Gut zu wissen</strong>
    Microsoft Dynamics 365 Business Central unterstützt die Ausführung von SEPA-Lastschriften über die <strong>Zlg.-Ausg. Buch.-Blätter</strong> und über die <strong>Lastschriften</strong>. Beide Varianten werden vollumfänglich von 365 business Banking unterstützt, wir empfehlen jedoch die Verwendung der Seite <strong>Lastschriften</strong>.
</div>

## Schritt-für-Schritt-Anleitung - SEPA Lastschrift

Um Lastschriften zu initiieren, verwenden Sie die Seite **Lastschriften** in Microsoft Dynamics 365 Business Central. Hier können Sie neue Lastschriften erstellen, an die Bank übertragen und den Zahlungseingang buchen.

![SEPA Lastschriften](/assets/images/365-business-banking/direct-debit-collection.en-US.png)

Gehen Sie wie folgt vor, um Zahlungen in 365 business Banking zu initiieren:

1. Wählen Sie **Lastschriften** in der Suche von Microsoft Dynamics 365 Business Central aus.
2. Wählen Sie **Neu** und **Lastschrift erstellen**.
3. Wählen Sie die Optionen zur Erstellung der Lastschriften.
   ![Lastschrift erstellen](/assets/images/365-business-banking/create-direct-debit-collection.en-US.png)
4. Wählen Sie **OK**, um die Lastschriften zu erstellen.
5. Prüfen Sie die erstellten Lastschriften.
6. Wählen Sie die Aktion **Zahlungen durchführen**, um die Lastschrift zu verarbeiten.
7. Wählen Sie **Zahlungseingänge buchen...**, um die Zahlungseingänge der Lastschriften zu buchen.

Abhängig von der Bank und der Zahlungsform kann es erforderlich sein, eine TAN oder eine andere Authentifizierungsmethode zu verwenden, um die Zahlung zu bestätigen. In diesem Fall erscheint ein Dialog zur Bestätigung der Zahlung.

![Autorisierung der Zahlung](/assets/images/365-business-banking/bank-payment-authentication.en-US.png)

1. Wählen Sie **Autorisieren**, um den Zahlungsvorgang zu bestätigen.
2. Folgen Sie den Anweisungen auf dem Bildschirm, um die Zahlung zu autorisieren. Dies kann die Eingabe einer TAN oder die Bestätigung über eine Banking-App umfassen.
   ![Autorisierung der Lastschrift](/assets/images/365-business-banking/bank-payment-authentication-webform.en-US.png)
3. Nach erfolgreicher Autorisierung wird die Lastschrift verarbeitet und abgeschlossen.
   ![Bestätigung der Lastschrift](/assets/images/365-business-banking/bank-payment-confirmation.en-US.png)
4. Wählen Sie **Schließen**, um den Dialog zu schließen und zur Zahlungsabwicklung zurückzukehren.

## Schritt-für-Schritt-Anleitung - Zlg.-Ausg. Buch.-Blätter

Um Lastschriften zu initiieren werden Zlg.-Ausg. Buch.-Blätter in Microsoft Dynamics 365 Business Central verwendet. Dabei wird dem Buch.-Blatt ein **Bankkonto** und eine **Zahlungsform** zugeordnet (siehe [Zlg.-Ausg. Buch.-Blätter](../payment-journal.md)). Die Zahlungsform bestimmt, ob es sich um eine SEPA-Lastschrift handelt.

Gehen Sie wie folgt vor, um Zahlungen in 365 business Banking zu initiieren:

1. Wählen Sie **Zlg.-Ausg. Buch.-Blätter** in der Suche von Microsoft Dynamics 365 Business Central aus.
2. Wählen Sie ein vorhandenes Buch.-Blatt für Ihr Bankkonto und Ihre Zahlungsform aus oder erstellen Sie ein neues Buch.-Blatt.
3. Wählen Sie die Aktion **Buch.-Blatt bearbeiten**, um das Buch.-Blatt zu bearbeiten.
4. Erfassen Sie die Buch.-Blattzeilen für Ihre Zahlungen, oder verwenden Sie die Aktion **Zahlungsvorschlag** um automatisch Zahlungsvorschläge zu generieren.
5. Überprüfen Sie die Buch.-Blattzeilen und stellen Sie sicher, dass alle Informationen korrekt sind. Prüfen Sie insbesondere die Beträge, Verwendungszwecke und das Bankkonto Empfänger.
6. Wählen Sie die Aktion **Zahlungen durchführen und buchen**, um die Lastschrift zu verarbeiten und die Buchung abzuschließen.
7. Bestätigen Sie die Durchführung der Zahlungen und die Buchung des Buch.-Blattes.

Abhängig von der Bank und der Zahlungsform kann es erforderlich sein, eine TAN oder eine andere Authentifizierungsmethode zu verwenden, um die Zahlung zu bestätigen. In diesem Fall erscheint ein Dialog zur Bestätigung der Zahlung.

![Autorisierung der Zahlung](/assets/images/365-business-banking/bank-payment-authentication.en-US.png)

1. Wählen Sie **Autorisieren**, um den Zahlungsvorgang zu bestätigen.
2. Folgen Sie den Anweisungen auf dem Bildschirm, um die Zahlung zu autorisieren. Dies kann die Eingabe einer TAN oder die Bestätigung über eine Banking-App umfassen.
   ![Autorisierung der Lastschrift](/assets/images/365-business-banking/bank-payment-authentication-webform.en-US.png)
3. Nach erfolgreicher Autorisierung wird die Lastschrift verarbeitet und abgeschlossen.
   ![Bestätigung der Lastschrift](/assets/images/365-business-banking/bank-payment-confirmation.en-US.png)
4. Wählen Sie **Schließen**, um den Dialog zu schließen und zur Zahlungsabwicklung zurückzukehren.

Nach der Bestätigung und Ausführung der Lastschrift werden die Buch.-Blattzeilen im Zlg.-Ausg. Buch.-Blatt verbucht. Sofern die Aktion **Zahlungen durchführen und buchen** verwendet wurde, erfolgt die Buchung automatisch. Andernfalls müssen Sie die Buch.-Blattzeilen über die Aktion **Buchen** im Zlg.-Ausg. Buch.-Blatt manuell buchen.