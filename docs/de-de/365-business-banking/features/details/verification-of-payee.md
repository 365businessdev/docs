# Empfängerüberprüfung (Verification of Payee - VoP)

## Geschäftswert

Seit Oktober 2025 ist die Empfängerüberprüfung (Verification of Payee - VoP) gemäß der EU-Instant-Payments-Verordnung für Überweisungen im SEPA-Raum verpflichtend. Diese Maßnahme dient dazu, Betrug zu verhindern und die Sicherheit von Zahlungen zu erhöhen, indem der Name des Zahlungsempfängers mit den bei der Bank hinterlegten Informationen abgeglichen wird.

Durch die Angabe des [**Kontoinhabers**](../../bank-payment-vop.md#wie-kann-ich-abweichende-kontoinhaber-verwalten) in den Bankkonten von Debitoren und Kreditoren ermöglicht 365 business Banking Unternehmen bereits die abweichende Pflege von Kontoinhaber und Debitor- und Kreditornamen. Dies stellt sicher, dass Zahlungen korrekt zugeordnet und verarbeitet werden, während gleichzeitig die Transparenz und Nachverfolgbarkeit der Zahlungsprozesse verbessert wird.

Mit der erweiterten Unterstützung der Empfängerüberprüfung (VoP) in 365 business Banking können Unternehmen zusätzlich sicherstellen, dass Bankkonten vor der Verwendung und Zahlungsausführung auf ihre Gültigkeit überprüft werden. Dies hilft, Fehler zu vermeiden und sicherzustellen, dass Zahlungen korrekt und sicher abgewickelt werden. Weiterhin wird das Risiko von Zahlungsausfällen und betrügerischen Aktivitäten reduziert, was zu einer verbesserten finanziellen Sicherheit für das Unternehmen führt.

## Funktionsbeschreibung

Die erweiterte Unterstützung der Empfängerüberprüfung (VoP) in 365 business Banking erlaubt die Überprüfung von Bankkonten auf ihre Gültigkeit, direkt in Microsoft Dynamics 365 Business Central. Die Überprüfung erfolgt in Echtzeit, direkt bei der Eingabe oder Änderung eines Bankkontos für Debitoren und Kreditoren.
Wenn ein Bankkonto eingegeben oder geändert wird, sendet 365 business Banking eine Anfrage an die entsprechende Bank, um den Namen des Kontoinhabers zu überprüfen. Sollte der Name des Kontoinhabers nicht mit den bei der Bank hinterlegten Informationen übereinstimmen, werden Sie benachrichtigt und können entsprechende Maßnahmen ergreifen.

Dabei können vier verschiedene Ergebnisse der Überprüfung auftreten:

| Ergebnis | Beschreibung |
| --- | --- |
| **Match** | Die IBAN und der Name stimmen vollständig überein. |
| **Close Match** | Der Name stimmt teilweise überein. Es gibt möglicherweise kleine Abweichungen oder Schreibfehler. |
| **No Match** | Die IBAN und der Name stimmen nicht überein. |
| **Keine Check möglich** | Die Überprüfung konnte nicht durchgeführt werden, z. B. weil die Empfängerbank nicht am VoP-Verfahren teilnimmt. |

![VOP Status](/assets/images/365-business-banking/vop/vop-log-entries.de-DE.png)

Je nach Ergebnis der Überprüfung können Sie entscheiden, ob Sie das Bankkonto akzeptieren, korrigieren oder weitere Maßnahmen ergreifen möchten, bevor Sie Zahlungen an dieses Konto ausführen.