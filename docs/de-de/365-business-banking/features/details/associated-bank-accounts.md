# Verbundene Bankkonten

## Geschäftswert

Beim Ausgleich von Banktransaktionen mit 365 business Banking wird, abhängig von der Absender IBAN oder der Empfänger IBAN der Banktransaktion, die Zuordnung des Debitors oder Kreditors, anhand des Debitor- oder Kreditorbankkonto, vorgenommen. Dies erleichtert die Absender/Empfänger-Identifizierung, beschleunigt den Ausgleichsprozess und erhöht die Treffergenauigkeit signifikant.
In 365 business Banking werden standardmäßig neue Bankkonten in Microsoft Dynamics 365 Business Central erstellt, wenn eine Zahlungsabstimmungsbuch.-Blattzeile mit einem unbekannten Bankkonto eines Debitors oder Kreditors gebucht wird. Das neue Bankkonto wird mit den relevanten Informationen aus der Zahlungsabstimmungsbuch.-Blattzeile oder der Banktransaktion erstellt (siehe [Bankkontoabstimmung - Absender-Identifizierung](../../bank-reconciliation.md#absender-identifizierung)).

Um fehlerhafte Zuordnungen zu vermeiden, z. B. bei internen Überweisungen (z. B. bei fehlerhaften Überweisungen durch den Debitor), können Sie verbundene Bankkonten verwalten und diese Konten dem abgeglichenen Debitor zuweisen. Dies verhindert die Erstellung neuer Bankkonten für diese internen Überweisungen und stellt sicher, dass die Zuordnung korrekt erfolgt.

## Funktionsbeschreibung

In der **Finanzbuchhaltung Einrichtung**, innerhalb der Aktionsgruppe **Bank**, finden Sie die Aktion **Verbundene Bankkonten**. Diese Aktion öffnet die Seite **Verbundene Bankkonten**, auf der Sie Bankkonten verbundener Unternehmen verwalten können, um die Erstellung neuer Bankkonten für interne Überweisungen zu verhindern (z. B. bei fehlerhaften Überweisungen durch den Debitor) und diese Konten dem abgeglichenen Debitor zuzuweisen.

![Verbundene Bankkonten](/assets/images/365-business-banking/associated-bank-accounts.de-DE.png)

Die Festlegung verbundener Bankkonten verhindert nicht dir Durchführung der [Absender-Identifizierung](../../bank-reconciliation.md#absender-identifizierung), sondern stellt sicher, dass verbundene Bankkonten nicht automatisch neuen Debitoren oder Kreditoren zugewiesen werden.