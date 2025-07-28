# Einrichtung

Bevor Sie mit der Verwendung von 365 business Banking beginnen können, müssen Sie einige grundlegenden Einstellungen in Microsoft Dynamics 365 Business Central vornehmen. Die Installation von 365 business Banking führt bereits zu einer grundlegenden Einrichtung, die Sie jedoch an Ihre spezifischen Anforderungen anpassen können.

## Finanzbuchhaltung Einrichtung

In der **Finanzbuchhaltung Einrichtung** finden Sie im Bereich **Banking** die Einstellungen für 365 business Banking. Hier werden folgende Optionen bereitgestellt:

| Feldname | Beschreibung | Standard-Wert |
| --- | --- | --- |
| Verwendungszweck Überschreitungsoption | Legt fest, was zu tun ist, wenn mehrere Rechnungen bezahlt werden, aber die Zahlungsreferenz (Verwendungszweck) die maximale Länge überschreitet. |  |
| Bankkonto Nr.-Serie | Legt die Nummernserie für Bankkonten fest. | _Microsoft Standard_ |
| Dauerauftrag Nr.-Serie | Legt die Nummernserie für Daueraufträge fest. | `SO00001` - `SO99999` |
| Zahlungsavis Nr.-Serie | Legt die Nummernserie für Zahlungsavis fest. | `RN00001` - `RN99999` |

## Zahlungsformen

Die Zahlungsformen legen fest, welche Zahlungsarten für Ihre Bankkonten und Transaktionen verwendet werden können. Diese Einstellungen sind in der Seite **Zahlungsformen** zu finden. Hier können Sie die gewünschten Zahlungsarten auswählen und konfigurieren.

Weitere Informationen zur Einrichtung der Zahlungsformen finden Sie in der [Zahlungsform Einrichtung](setup/payment-method-setup.md).

## Banking Benutzer Einrichtung

Die Einrichtung des Banking Benutzers ist ein wichtiger Schritt, um eine sichere Verbindung zu Ihren Bankkonten herzustellen. Der Banking Benutzer ist für die Verbindung zu Ihren Bankkonten verantwortlich und ermöglicht es Ihnen, Transaktionen abzurufen und Zahlungen zu initiieren.

Weitere Informationen zur Einrichtung des Banking Benutzers finden Sie in der [Banking Benutzer Einrichtung](banking-user-setup.md).

## Weitere Einstellungen

Zusätzlich zu den oben genannten Einstellungen können Sie weitere Anpassungen vornehmen, um 365 business Banking optimal an Ihre Bedürfnisse anzupassen. Dazu gehören:

- **ZKA Codes**: ZKA Codes (Geschäftsvorfallcode, GV-Code) werden verwendet, um spezifische Geschäftsvorfälle zu kennzeichnen. Diese Codes können in der Seite **ZKA Codes** verwaltet werden.
  Weitere Informationen finden Sie in der [ZKA Codes Einrichtung](setup/zka-code.md).
- **SEPA Purpose Codes**: SEPA Purpose Codes (Zahlungszweckcodes) werden verwendet, um den Zweck einer Zahlung zu kennzeichnen. Diese Codes können in der Seite **SEPA Purpose Codes** verwaltet werden.
  Weitere Informationen finden Sie in der [SEPA Purpose Codes Einrichtung](setup/sepa-purpose-code.md).