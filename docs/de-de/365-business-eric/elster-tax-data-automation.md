# ELSTER Steuerdaten Automatisierung

Mit der **ELSTER Steuerdaten Automatisierung** können Sie wiederkehrende ELSTER Steuerdaten automatisiert erstellen und an die deutschen Steuerbehörden übermitteln. Damit sparen Sie Zeit und reduzieren den Aufwand für die Erstellung und Übermittlung von Steuerdaten.

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i> <strong>Hinweis</strong> Die Steuerdaten Automatisierung wird für die folgenden Steuerdatenarten unterstützt:<ul><li>Umsatzsteuervoranmeldung</li><li>Zusammenfassende Meldung</li></ul>
</div>

## So richten Sie die ELSTER Steuerdaten Automatisierung ein

1. Öffnen Sie die Seite **ELSTER Einrichtung**
2. Wählen Sie **Weitere Aktionen**
3. Wählen Sie **Steuerdaten Automatisierung erstellen**
   ![Steuerdaten Automatisierung erstellen in ELSTER Einrichtung](/assets/images/365-business-eric/53fb6613-802b-4c11-b25a-eba552b13f89.png)
4. Geben Sie das **Früheste(s) Startdatum/-uhrzeit** und das Wiederholungsintervall in der Karte für Aufgabenwarteschlangenposten an.
5. Wählen Sie **Aufgabenwarteschlange** und **Berichtsanfrageseite** aus, um die Berechnungs- und Übermittlungsparameter festzulegen.
   ![Berechnungs- und Übermittlungsparamter](/assets/images/365-business-eric/e4af7292-870d-4454-9419-d061ec89c105.png)
6. Wählen Sie **Status auf 'Bereit' festlegen**, um den Aufgabenwarteschlangenposten zu aktivieren.

### Optionen

Sie haben im Rahmen der ELSTER Steuerdaten Automatisierung die Möglichkeit die einzelnen Schritte über die **Berichtsanfrageseite** festzulegen.

![Berechnungs- und Übermittlungsparamter](/assets/images/365-business-eric/e4af7292-870d-4454-9419-d061ec89c105.png)

#### Steuerdaten berechnen

Hiermit können Sie die Steuerdaten für die ELSTER Steuerdaten Automatisierung berechnen. Die Berechnung erfolgt auf Basis der in der **ELSTER Einrichtung** hinterlegten Parameter.

#### XML-Datei übertragen

Hiermit können Sie die Steuerdaten für die ELSTER Steuerdaten Automatisierung an die deutschen Steuerbehörden übermitteln. Die Übermittlung erfolgt auf Basis der im vorherigen Schritt berechneten Steuerdaten.

#### MwSt. abrechnen und buchen

Hiermit wird, nach erfolgter und erfolgreicher Übermittlung der Steuerdaten, die MwSt. für den aktuellen Monat abgerechnet und gebucht. 

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i> <strong>Hinweis</strong> Nach Aktivierung der Option <strong>MwSt. abrechnen und buchen</strong>, wird die Berichtsanfrageseite des Berichts aufgerufen und erlaubt die Festlegung der Optionen.<br>
    <br>
    Bitte beachten Sie, dass einzelne Optionen, wie bspw. das Start-, End-, MwSt.- und Buchungsdatum, sowie die Belegnr. zur tatsächlichen Ausführungszeit aktualisiert werden.
</div>