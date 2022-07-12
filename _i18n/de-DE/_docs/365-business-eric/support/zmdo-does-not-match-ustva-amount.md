Dieser Artikel unterstützt Sie bei der Lösung der ELSTER Validierungsmeldung:

> Die Gesamtsumme stimmt nicht mit dem erwarteten Wert aus der Umsatzsteuervoranmeldung überein. Bitte überprüfen Sie die Einrichtung der MwSt.-Abrechnung und der MwSt.-Posten, damit die Beträge übereinstimmen. Ein nicht übereinstimmender Wert kann zu weiteren Rückfragen seitens des Finanzamtes führen.

#### Ursache

Nach der Berechnung der Zusammenfassenden Meldung wird die Gesamtsumme mit dem Betrag der Steuerkennzahl `41` (Rubrikennr.) aus der Umsatzsteuervoranmeldung bzw. MwSt.-Abrechnung für denselben Zeitraum verglichen. Wenn die Gesamtsumme abweichend ist wird die o.g. Warnmeldung ausgegeben.
In der Regel müssen die Beträge zwischen der Steuerkennzahl `41` (Steuerfreie Umsätze mit Vorsteuerabzug: Innergem. Lief. an Abnehmer mit USt-IdNr.) übereinstimmen, andernfalls kommt es unter Umständen zu entsprechenden Rückfragen durch das Finanzamt.

Die Ursache für abweichende Beträge kann unterschiedlich sein. Eine Möglichkeit ist bspw. dass ein nicht EU-Land (z.B. `GB`) innerhalb der MwSt.-Abrechnung für die UStVA verwendet wird:

![MwSt.-Posten](/assets/images/365-business-eric/zmdo-does-not-match-ustva-amount.vat-entries.png)

> **Hinweis**<br>Bei der Berechnung der Zusammenfassenden Meldung wird explizit auf das Kennzeichen `EU-Länder-/Regionscode` geprüft. Nur Länder mit einem entsprechenden Wert im Feld `EU-Länder-/Regionscode` werden als EU-Land angesehen.

#### Lösung

Korrigieren Sie die MwSt.-Abrechnung für die UStVA-Berechnung bzw. prüfen Sie die korrekte Zuweisung der `MwSt.-Geschäftsbuchungsgruppe` an den entsprechenden Debitoren.
