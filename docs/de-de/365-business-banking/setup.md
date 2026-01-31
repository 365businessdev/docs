# Einrichtung

Bevor Sie mit der Verwendung von 365 business Banking beginnen können, müssen Sie einige grundlegenden Einstellungen in Microsoft Dynamics 365 Business Central vornehmen. Die Installation von 365 business Banking führt bereits zu einer grundlegenden Einrichtung, die Sie jedoch an Ihre spezifischen Anforderungen anpassen können.

## Finanzbuchhaltung Einrichtung

In der **Finanzbuchhaltung Einrichtung** finden Sie im Bereich **Banking** die Einstellungen für 365 business Banking. Hier werden folgende Optionen bereitgestellt:

| Feldname | Beschreibung | Standard-Wert |
| --- | --- | --- |
| Bankkonto-Diagramm Saldoart | Gibt die Art des Saldos an, der in Bankkonten Diagrammen verwendet werden soll. | Perioden-Saldo  |
| Verwendungszweck Überschreitungsoption | Legt fest, was zu tun ist, wenn mehrere Rechnungen bezahlt werden, aber die Zahlungsreferenz (Verwendungszweck) die maximale Länge überschreitet. |  |
| Zahlungsabstimungsbuch.-Blattzeile Buchung | Legt fest, wie Zahlungsabstimmungsbuch.-Blattzeilen mit Kontoart Sachkonto gebucht werden, wenn eine Buchungseinrichtung festgelegt ist. Wählen Sie aus, ob ein Verrechnungskonto verwendet oder direkt auf die Sachkonten gebucht werden soll. | Verrechnungskonto verwenden |
| Bankkonten erstellen | Legt fest, ob Bankkonten automatisch erstellt werden sollen, wenn Zahlungsabstimmungsbuch.-Blattzeilen für neue Debitoren- oder Kreditorenbankkonten angewendet werden. Diese Option führt zu einer höheren Rate automatisch abgeglichener Banktransaktionen, da mehr Bankkonten für den Abgleich zur Verfügung stehen. | Ja |
| Bankkonto Nr.-Serie | Legt die Nummernserie für Bankkonten fest. | _Microsoft Standard_ |
| Dauerauftrag Nr.-Serie | Legt die Nummernserie für Daueraufträge fest. | `SO00001` - `SO99999` |
| Zahlungsavis Nr.-Serie | Legt die Nummernserie für Zahlungsavis fest. | `RN00001` - `RN99999` |

### Bankkonto-Diagramm Saldoart

Die Option **Bankkonto-Diagramm Saldoart** legt fest, welche Art von Saldo in den Diagrammen der Bankkonten angezeigt wird. Sie können zwischen folgenden Optionen wählen:

- **Perioden-Saldo** (Standard)<br>
  Diese Option zeigt den Saldo basierend auf den Transaktionen innerhalb des angezeigten Zeitraums (z.B. Monat) an. Dies ist nützlich, um die finanzielle Entwicklung über einen bestimmten Zeitraum zu verfolgen.
- **Saldo bis Datum**<br>
  Diese Option zeigt den laufenden Saldo bis zu einem bestimmten Datum an. Dies ist hilfreich, um den aktuellen Kontostand zu einem bestimmten Zeitpunkt zu sehen.
- **Beide**<br>
  Diese Option zeigt sowohl den Perioden-Saldo als auch den Saldo bis Datum an, sodass Sie beide Perspektiven gleichzeitig betrachten können.

### Verwendungszweck Überschreitungsoption

Der Verwendungszweck ist in Banktransaktionen begrenzt auf 140 Zeichen. Dies kann in Fällen von Sammelüberweisungen bzw. dem Ausgleich von mehreren Rechnungen mit einer Zahlung dazu führen, dass der Verwendungszweck nicht ausreichend ist, um alle Belegnummern oder Belegreferenzen abzubilden.
Die Option **Verwendungszweck Überschreitungsoption** erlaubt es Ihnen, festzulegen, wie mit solchen Fällen umgegangen werden soll. Sie können dabei folgende Optionen wählen:

- **Zahlungsavis erstellen**<br>
  Die Option Zahlungsavis erstellen führt dazu, dass bei Zahlungen, bei denen die maximale Länge des Verwendungszwecks überschritten wird, automatisch ein Zahlungsavis für die betroffenen Posten erstellt wird.
- **Zahlung aufteilen** (Empfehlung)<br>
  Die Option Zahlung aufteilen führt dazu, dass bei Zahlungen, bei denen die maximale Länge des Verwendungszwecks überschritten wird, die Zahlung aufgeteilt wird. Dies bedeutet, dass alle zusätzlichen Posten, die nicht im Verwendungszweck enthalten sind, in separate Zahlungen aufgeteilt werden.

<div class="alert alert-success">
    <i class="fa-duotone fa-solid fa-question-circle fa-xl"></i>
    <strong>Wussten Sie schon?</strong>
    Zahlungsavise erschweren die Ausgleich bzw. die Zuordnung von eingehenden Zahlungen, da zusätzliche Referenznummern (Zahlungsavisnr.) gebildet werden, die im System des Zahlungsempfängers nicht bekannt sind und eine automatische Zuordnung erschweren.<br>
    Wir empfehlen die Verwendung der Option <strong>Zahlung aufteilen</strong>, um Ihren Geschäftspartnern die Zuordnung von Zahlungen zu erleichtern und einen hohen Grad der Automatisierung zu erreichen.
</div>

### Zahlungsabstimmungsbuch.-Blattzeile Buchung

Die Option **Zahlungsabstimmungsbuch.-Blattzeile Buchung** steuert, wie Zahlungsabstimmungsbuch.-Blattzeilen der Kontoart *Sachkonto* gebucht werden, wenn eine [Buchungseinrichtung](bank-reconciliation-posting-setup.md) (Buchungsgruppen und MwSt.-Einrichtung) hinterlegt ist.

Sie können zwischen folgenden Optionen wählen:

- **Verrechnungskonto verwenden** (Standard)  
  Bei dieser Methode wird die Zahlung zunächst gegen ein Verrechnungskonto gebucht.  
  Anschließend erstellt das System eine zusätzliche Buchung (technisch eine „Rechnung“), die den Aufwand bzw. Ertrag mithilfe der Buchungseinrichtung korrekt verbucht und gegen das Verrechnungskonto ausgleicht.  
  Dieses Verfahren ist die **empfohlene Einstellung**, da es eine lückenlose Nachverfolgbarkeit gewährleistet und die Zuordnung zwischen Zahlung und Aufwands-/Ertragsbuchung klar sichtbar macht.  
  Besonders bei MwSt.-pflichtigen Vorgängen, Bankgebühren, Korrekturen oder Abstimmungen bietet diese Methode höchste Transparenz.

- **Direktbuchung**  
  Bei dieser Methode wird die Zahlung **direkt auf das Sachkonto gebucht**, wobei die Buchungseinrichtung unmittelbar auf die *Postenart Zahlung* angewendet wird.  
  Dadurch entstehen die endgültigen Sach- und MwSt.-Posten bereits mit der Buchung der Zahlung.  
  Dies kann sinnvoll sein, wenn keine simulierten Forderungen/Verbindlichkeiten gewünscht sind und der Buchungsvorgang möglichst einfach gehalten werden soll.  
  Die Transparenz ist geringer, da Zahlung und Aufwand/Ertrag in einer einzigen Bewegung kombiniert werden.

#### Vergleich der Optionen

| Option | Vorteile | Nachteile | Typische Verwendung |
|--------|----------|-----------|----------------------|
| **Verrechnungskonto verwenden** (Standard) | Höchste Transparenz; klare Trennung von Zahlung und Aufwand/Ertrag; MwSt.-Behandlung eindeutig; ermöglicht spätere Korrekturen und Abstimmung | Mehr Buchungszeilen; leicht komplexer | Empfohlen für die meisten Unternehmen; MwSt.-pflichtige Vorgänge; Bankgebühren; Szenarien mit Abgrenzungen oder Buchungslogik über Sachkonten |
| **Direktbuchung** | Weniger Buchungszeilen; schneller Prozess; ideal für einfache Sachkonto-Zahlungen | Weniger nachvollziehbar; Zahlung und Aufwand in einem Posten kombiniert; MwSt.-Einrichtung wirkt direkt auf die Zahlung | Kleine Unternehmen; einfache Sachkontobuchungen ohne Abgrenzungen; Fälle ohne komplexe MwSt.-Logik |

<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Gut zu wissen</strong>
    Wenn <strong>Abgrenzungspläne</strong> verwendet werden, wird auch bei aktivierter Option <strong>Direktbuchung</strong>
    automatisch ein Verrechnungskonto genutzt.
    Dies ist notwendig, damit die Abgrenzungsbuchungen technisch korrekt erzeugt und periodengerecht verbucht werden können.
</div>

### Bankkonten erstellen

Die Option **Bankkonten erstellen** legt fest, ob Bankkonten automatisch erstellt werden sollen, wenn Zahlungsabstimmungsbuch.-Blattzeilen für neue Debitoren- oder Kreditorenbankkonten gebucht werden. Diese Option führt zu einer höheren Rate automatisch abgeglichener Banktransaktionen, da mehr Bankkonten für den Abgleich zur Verfügung stehen.

365 business Banking erstellt dabei automatisch neue Bankkonten in Microsoft Dynamics 365 Business Central, wenn eine Zahlungsabstimmungsbuch.-Blattzeile mit einem unbekannten Bankkonto eines Debitors oder Kreditors gebucht wird (siehe [Bankkontoabstimmung - Absender-Identifizierung](bank-reconciliation.md#absender-identifizierung)). Das neue Bankkonto wird dabei mit den relevanten Informationen aus der Zahlungsabstimmungsbuch.-Blattzeile bzw. der Banktransaktion angelegt.

#### Verbundene Bankkonten

In der **Finanzbuchhaltung Einrichtung**, in der Aktionsgruppe **Bank**, finden Sie die Aktion **Verbundene Bankkonten verwalten**. Diese Aktion öffnet die Seite **Verbundene Bankkonten**, in der Sie Bankkonten von verbundenen Unternehmen verwalten können, um zu verhindern, dass für interne Umbuchungen (bspw. bei fehlerhafter Überweisung durch den Debitor) ein neues Bankkonto erstellt und dem ausgeglichenen Debitor zugeordnet wird.

![Verbundene Bankkonten](/assets/images/365-business-banking/associated-bank-accounts.de-DE.png)

## Zahlungsformen

Die Zahlungsformen legen fest, welche Zahlungsarten für Ihre Bankkonten und Transaktionen verwendet werden können. Diese Einstellungen sind in der Seite **Zahlungsformen** zu finden. Hier können Sie die gewünschten Zahlungsarten auswählen und konfigurieren.

Weitere Informationen zur Einrichtung der Zahlungsformen finden Sie in der [Zahlungsform Einrichtung](setup/payment-method-setup.md).

## Banking Benutzer Einrichtung

Die Einrichtung des Banking Benutzers ist ein wichtiger Schritt, um eine sichere Verbindung zu Ihren Bankkonten herzustellen. Der Banking Benutzer ist für die Verbindung zu Ihren Bankkonten verantwortlich und ermöglicht es Ihnen, Transaktionen abzurufen und Zahlungen zu initiieren.

Weitere Informationen zur Einrichtung des Banking Benutzers finden Sie in der [Banking Benutzer Einrichtung](banking-user-setup.md).

## Weitere Einstellungen

Zusätzlich zu den oben genannten Einstellungen können Sie weitere Anpassungen vornehmen, um 365 business Banking optimal an Ihre Bedürfnisse anzupassen. Dazu gehören:

- **ZKA Codes**<br>
  ZKA Codes (Geschäftsvorfallcode, GV-Code) werden verwendet, um spezifische Geschäftsvorfälle zu kennzeichnen. Diese Codes können in der Seite **ZKA Codes** verwaltet werden.<br>
  Weitere Informationen finden Sie in der [ZKA Codes Einrichtung](setup/zka-code.md).
- **SEPA Purpose Codes**<br>
  SEPA Purpose Codes (Zahlungszweckcodes) werden verwendet, um den Zweck einer Zahlung zu kennzeichnen. Diese Codes können in der Seite **SEPA Purpose Codes** verwaltet werden.<br>
  Weitere Informationen finden Sie in der [SEPA Purpose Codes Einrichtung](setup/sepa-purpose-code.md).