# SEPA Überweisung

In diesem Abschnitt erfahren Sie, wie Sie SEPA-Überweisungen in Microsoft Dynamics 365 Business Central durchführen können. SEPA (Single Euro Payments Area) ermöglicht es Unternehmen, Zahlungen in Euro innerhalb des SEPA-Raums effizient und kostengünstig zu tätigen.

## SEPA Überweisungsarten

In Microsoft Dynamics 365 Business Central können Sie verschiedene Arten von SEPA-Überweisungen durchführen:

- **SEPA-Überweisung**: Standardüberweisung für Zahlungen in Euro innerhalb des SEPA-Raums.
- **SEPA-Echtzeitüberweisung**: Schnelle Überweisung, die in Echtzeit verarbeitet wird, sofern die Bank dies unterstützt.
- **SEPA-Terminüberweisung**: Überweisung, die zu einem späteren Zeitpunkt ausgeführt wird, basierend auf dem festgelegten Ausführungsdatum.
- **SEPA-Sammelüberweisung**: Überweisung, bei der mehrere Zahlungen in einer einzigen Transaktion zusammengefasst werden.

## Schritt-für-Schritt-Anleitung

Um Zahlungen zu initiieren werden Zlg.-Ausg. Buch.-Blätter in Microsoft Dynamics 365 Business Central verwendet. Dabei wird dem Buch.-Blatt ein **Bankkonto** und eine **Zahlungsform** zugeordnet (siehe [Zlg.-Ausg. Buch.-Blätter](../payment-journal.md)). Die Zahlungsform bestimmt, ob es sich um eine SEPA-Überweisung, eine SEPA-Echtzeitüberweisung oder eine SEPA-Sammelüberweisung handelt.

Gehen Sie wie folgt vor, um Zahlungen in 365 business Banking zu initiieren:

1. Wählen Sie **Zlg.-Ausg. Buch.-Blätter** in der Suche von Microsoft Dynamics 365 Business Central aus.
2. Wählen Sie ein vorhandenes Buch.-Blatt für Ihr Bankkonto und Ihre Zahlungsform aus oder erstellen Sie ein neues Buch.-Blatt.
3. Wählen Sie die Aktion **Buch.-Blatt bearbeiten**, um das Buch.-Blatt zu bearbeiten.
4. Erfassen Sie die Buch.-Blattzeilen für Ihre Zahlungen, oder verwenden Sie die Aktion **Zahlungsvorschlag** um automatisch Zahlungsvorschläge zu generieren.
5. Überprüfen Sie die Buch.-Blattzeilen und stellen Sie sicher, dass alle Informationen korrekt sind. Prüfen Sie insbesondere die Beträge, Verwendungszwecke und das Bankkonto Empfänger.
6. Wählen Sie die Aktion **Zahlungen durchführen und buchen**, um die Zahlungen zu verarbeiten und die Buchung abzuschließen.
7. Bestätigen Sie die Durchführung der Zahlungen und die Buchung des Buch.-Blattes.

Abhängig von der Bank und der Zahlungsform kann es erforderlich sein, eine TAN oder eine andere Authentifizierungsmethode zu verwenden, um die Zahlung zu bestätigen. In diesem Fall erscheint ein Dialog zur Bestätigung der Zahlung.

![Autorisierung der Zahlung](/assets/images/365-business-banking/bank-payment-authentication.en-US.png)

1. Wählen Sie **Autorisieren**, um den Zahlungsvorgang zu bestätigen.
2. Folgen Sie den Anweisungen auf dem Bildschirm, um die Zahlung zu autorisieren. Dies kann die Eingabe einer TAN oder die Bestätigung über eine Banking-App umfassen.
   ![Autorisierung der Zahlung](/assets/images/365-business-banking/bank-payment-authentication-webform.en-US.png)
3. Nach erfolgreicher Autorisierung wird die Zahlung verarbeitet und abgeschlossen.
   ![Bestätigung der Zahlung](/assets/images/365-business-banking/bank-payment-confirmation.en-US.png)
4. Wählen Sie **Schließen**, um den Dialog zu schließen und zur Zahlungsabwicklung zurückzukehren.

Nach der Bestätigung und Ausführung der Zahlung wird die Zahlung im Zlg.-Ausg. Buch.-Blatt verbucht. Sofern die Aktion **Zahlungen durchführen und buchen** verwendet wurde, erfolgt die Buchung automatisch. Andernfalls müssen Sie die Zahlung über die Aktion **Buchen** im Zlg.-Ausg. Buch.-Blatt manuell buchen.