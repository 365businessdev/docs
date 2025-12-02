# Buchungseinrichtung 

In diesem Abschnitt erfahren Sie, wie Sie im Prozess der Zahlungsabstimmung die Buchungseinrichtung vornehmen können, um festzulegen, wie Banktransaktionen in Microsoft Dynamics 365 Business Central gebucht werden sollen.

Die Buchungseinrichtung umfasst die Definition von:

- Buchungsart
- Geschäftsbuchungsgruppe
- MwSt.-Geschäftsbuchungsgruppe
- Produktbuchungsgruppe
- MwSt.-Produktbuchungsgruppe
- Abgrenzungsplan

![Buchungseinrichtung im Zahlungsabstimmungsbuch.-Blatt](/assets/images/365-business-banking/bank-reconciliation-posting-setup.de-DE.png)

Diese Einstellungen helfen dabei, die korrekte Verbuchung von Banktransaktionen sicherzustellen und die Einhaltung der Buchhaltungs- und Steuervorschriften zu gewährleisten. Die Buchungseinrichtung kann dabei individuell pro Banktransaktion oder basierend auf vordefinierten [Kontierungsregeln](bank-reconciliation-rules.md) vorgenommen werden.

<div class="alert alert-success">
    <i class="fa-duotone fa-solid fa-question-circle fa-xl"></i>
    <strong>Wussten Sie schon?</strong>
    Erfahren Sie mehr über <strong>Kontierungsregeln</strong> im <a href="bank-reconciliation-rules.md">entsprechenden Abschnitt</a>.
</div>

## Wofür kann die Buchungseinrichtung verwendet werden?

Die Buchungseinrichtung wird verwendet, um sicherzustellen, dass Banktransaktionen korrekt in Microsoft Dynamics 365 Business Central verbucht werden. Durch die Definition der oben genannten Parameter können Sie:
- Die Buchungsart festlegen, um zu bestimmen, wie die Transaktion verbucht wird (z.B. Einkauf, Verkauf).
- Die Geschäftsbuchungsgruppe und MwSt.-Geschäftsbuchungsgruppe zuweisen, um die richtigen Konten für die Buchung zu verwenden.
- Die Produktbuchungsgruppe und MwSt.-Produktbuchungsgruppe definieren, um sicherzustellen, dass die richtigen Steuersätze und Konten für die Produkte oder Dienstleistungen verwendet werden, die mit der Banktransaktion verbunden sind.

Durch die korrekte Buchungseinrichtung können Sie die Genauigkeit Ihrer Finanzdaten verbessern und die Einhaltung gesetzlicher Vorschriften sicherstellen.

![Buchungsvorschau](/assets/images/365-business-banking/bank-reconciliation-posting-setup-post-preview.de-DE.png)

<div class="alert alert-warn">
    <i class="fa-duotone fa-solid fa-triangle-exclamation fa-xl"></i>
    <strong>Achtung</strong>
    Bitte beachten Sie, dass eine falsche Buchungseinrichtung zu fehlerhaften Buchungen führen kann, die Ihre Finanzberichte und Steuererklärungen beeinträchtigen können. Stellen Sie sicher, dass Sie die Buchungseinrichtung sorgfältig überprüfen und gegebenenfalls mit Ihrem Buchhalter oder Steuerberater abstimmen.
</div>

### Zahlungsabstimmungsbuch.-Blattzeile Buchung

Über die Einstellung **Zahlungsabstimmungsbuch.-Blattzeile Buchung** in der **Finanzbuchhaltung Einrichtung** steuern Sie, wie **Sachkonten** im Zahlungsabstimmungsbuch.-Blatt gebucht werden, wenn eine Buchungseinrichtung definiert ist.

Sie können dabei folgende Optionen wählen:

#### **Verrechnungskonto verwenden** (Standard)

Diese Methode erzeugt neben der Zahlung eine zusätzliche Buchung (technisch eine „Rechnung“), die den Aufwand bzw. Ertrag mithilfe der Buchungseinrichtung korrekt verbucht und anschließend über ein Verrechnungskonto ausgleicht.

**Vorteile:**

- Höchste Transparenz  
- Zahlung und Aufwand/Ertrag klar getrennt  
- Korrekte MwSt.-Behandlung in allen Szenarien  
- Ideal bei Bankgebühren, MwSt.-pflichtigen Buchungen und Abstimmungsprozessen  

Diese Einstellung wird für die meisten Unternehmen empfohlen.

#### **Direktbuchung**

Die Zahlung wird direkt auf das Sachkonto gebucht. Die Buchungseinrichtung wird dabei direkt auf die *Postenart Zahlung* angewendet, sodass Aufwands-/Ertragsposten und MwSt.-Einträge in einem Schritt erzeugt werden.

**Vorteile:**

- Weniger Buchungszeilen  
- Schneller und einfacher Prozess

### Vergleich der Optionen

| Option | Vorteile | Nachteile | Typische Anwendungsfälle |
|--------|----------|-----------|---------------------------|
| **Verrechnungskonto verwenden** (Standard) | Maximale Nachvollziehbarkeit; saubere Trennung von Zahlung und Aufwand/Ertrag; klare MwSt.-Abbildung; beste Grundlage für Abstimmung & Korrekturen | Mehr Buchungszeilen | Empfohlen in allen regulären Fällen, v. a. bei MwSt.; Bankgebühren; wiederkehrenden Geschäftsvorfällen |
| **Direktbuchung** | Weniger Posten; schnelle Verbuchung | Weniger transparent; MwSt.-Logik wirkt direkt auf Zahlung; mögliche Konflikte, wenn das Sachkonto eigene MwSt.-Felder hat | Kleine Unternehmen; einfache Sachkontenzahlungen; Vorgänge ohne Abgrenzung |

<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Gut zu wissen</strong>
    Wenn ein <strong>Abgrenzungsplan</strong> verwendet wird, nutzt das System auch bei gewählter <strong>Direktbuchung</strong> automatisch ein Verrechnungskonto, da Abgrenzungen technisch nicht direkt über Bankkonten erzeugt werden können.
</div>

## Abgrenzungsplan

Neben den o.g. Buchungseinstellungen können Sie zusätzlich einen Abgrenzungsplan festlegen. Mit dem Abgrenzungsplan können Sie festlegen, ob der durch die Banktransaktion entstehende Aufwand periodengerecht über mehrere Monate verteilt werden soll.  
Dies ist besonders hilfreich bei Zahlungen, die mehrere zukünftige Perioden betreffen – beispielsweise:

- Jahresversicherungen  
- Software- oder Lizenzgebühren
- Wartungsrechnungen  
- Vorauszahlungen für Dienstleistungen

Wird ein **Abgrenzungscode** in der Zahlungsabstimmungsbuch.-Blattzeile hinterlegt, erzeugt 365 business Banking automatisch einen Abgrenzungsplan zur ausgewählten Zeile. Dieser Abgrenzungsplan kann anschließend über den _AssistEdit_ oder die Aktion **Rechnungsabgrenzungsplan** individuell angepasst werden.

![Abgrenzungscode](/assets/images/365-business-banking/bank-reconciliation-posting-setup-deferral.de-DE.png)

Die anschließende Abgrenzung erfolgt vollständig durch den Microsoft Dynamics 365 Business Central Standard, im Rahmen der Buchung über die o.g. Buchungseinstellungen.

![Buchungsvorschau mit Abgrenzungscode](/assets/images/365-business-banking/bank-reconciliation-posting-setup-deferral-preview.de-DE.png)

<div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Hinweis</strong>
    Abgrenzungen sind <strong>nur sinnvoll</strong>, wenn die Banktransaktion einen Aufwand erzeugt (z. B. eine automatisch erstellte Sachkontenbuchung oder Kreditorenrechnung).<br>
    Eine reine Zahlung ohne Aufwandsbuchung kann nicht abgegrenzt werden.
</div>

## Schritt-für-Schritt-Anleitung

Im folgenden Abschnitt beschreiben wir, die Buchung einer Lastschrift mit Buchungseinrichtung und Abgrenzungsplan. Dabei gehen wir von folgendem Szenario aus:
- Eine Lastschrift über 1.200 € für ein jährlich abgerechnetes Softwareabonnement wird von Ihrem Bankkonto abgebucht.
- Das Softwareabonnement soll über 12 Monate abgegrenzt werden.
- Die Buchungs erfolgt über den Kreditor.

1. Öffnen Sie das **Zahlungsabstimmungsbuch.-Blatt** in 365 business Banking.
2. Wählen Sie die Banktransaktion für das Softwareabonnement aus.
3. Wählen Sie im Feld **Kontoart** die Option **Kreditor**.
4. Geben Sie im Feld **Kontonr.** die Kreditorennr. ein oder wählen Sie den Kreditor aus, der das Softwareabonnement bereitstellt.
5. Wählen Sie im Feld **Buchungsart** die Option **Einkauf**.
   <div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
       <strong>Hinweis</strong>
        Die Geschäftsbuchungsgruppe und MwSt.-Geschäftsbuchungsgruppe werden automatisch aus dem Kreditorenstamm übernommen.<br>Passen Sie diese bei Bedarf an.
   </div>
6. Wählen Sie im Feld **Produktbuchungsgruppe** die entsprechende Produktbuchungsgruppe für das Softwareabonnement aus.
7. Überprüfen Sie das Feld **MwSt.-Produktbuchungsgruppe** und passen Sie es bei Bedarf an.
8. Wählen Sie im Feld **Abgrenzungscode** den entsprechenden Abgrenzungsplan aus, der die Verteilung der Kosten über 12 Monate definiert.
9. _Optional_
    Verwenden Sie den AssistEdit im Feld **Abgrenzungscode** oder die Aktion **Rechnungsabgrenzungsplan**, um den Abgrenzungsplan zu überprüfen oder individuell anzupassen.
10. Wählen Sie die Aktion **Zahlungen buchen und Bankkonto abstimmen...**, um die Buchung durchzuführen und die Banktransaktion abzustimmen.

# Siehe auch

- [Kontierungsregeln](bank-reconciliation-rules.md)