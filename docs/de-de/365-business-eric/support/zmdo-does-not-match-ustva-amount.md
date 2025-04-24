---
title: ELSTER Validierungsmeldung
---
Dieser Artikel unterstützt Sie bei der Lösung der ELSTER Validierungsmeldung:

> Die Gesamtsumme stimmt nicht mit dem erwarteten Wert aus der Umsatzsteuervoranmeldung überein. Bitte überprüfen Sie die Einrichtung der MwSt.-Abrechnung und der MwSt.-Posten, damit die Beträge übereinstimmen. Ein nicht übereinstimmender Wert kann zu weiteren Rückfragen seitens des Finanzamtes führen.

#### Ursache

Nach der Berechnung der Zusammenfassenden Meldung wird die ermittelte Gesamtsumme mit der Umsatzsteuervoranmeldung, bzw. der MwSt.-Abrechnung, für denselben Zeitraum verglichen. In der zusammenfassenden Meldung sind folgende Umsatzarten, die zusammengefasst in der Umsatzsteuervoranmeldung deklariert wurden, zu übermitteln:
 - Innergemeinschaftliche Lieferungen gem. § 4 Nr. 1 Buchst. b UStG an Abnehmer mit USt-IdNr. (UStVA-Steuerkennzahl `41`)
 - Nicht steuerbare sonstige Leistungen gem. § 18b Satz 1 Nr. 2 UStG (UStVA-Steuerkennzahl `21`)
 - Lieferungen des ersten Abnehmers bei innergemeinschaftlichen Dreiecksgeschäften gem. § 25b Abs. 2 UStG (UStVA-Steuerkennzahl `42`)

Die Summe der beiden Meldungen sollte grundsätzlich übereinstimmen. Ist dies nicht der Fall wird die o.g. Warnmeldung ausgegeben, um den Anwender auf mögliche Unstimmigkeiten hinzuweisen.

Die Ursachen für abweichende Beträge können unterschiedlich sein. Eine Möglichkeit ist bspw. dass ein nicht EU-Land (z.B. `GB`) innerhalb der MwSt.-Abrechnung für die UStVA verwendet wird:

![MwSt.-Posten](/assets/images/365-business-eric/zmdo-does-not-match-ustva-amount.vat-entries.png)

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i> <strong>Hinweis</strong> Bei der Berechnung der Zusammenfassenden Meldung wird explizit auf das Kennzeichen <code>EU-Länder-/Regionscode</code> geprüft. Nur Länder mit einem entsprechenden Wert im Feld <code>EU-Länder-/Regionscode</code> werden als EU-Land angesehen.
</div>

#### Lösung

Korrigieren Sie die MwSt.-Abrechnung für die UStVA-Berechnung bzw. prüfen Sie die korrekte Zuweisung der `MwSt.-Geschäftsbuchungsgruppe` an den entsprechenden Debitoren und MwSt.-Posten.
