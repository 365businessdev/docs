# Umsatzsteuererklärung

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i>
    <strong>Info</strong>This page is not available in the selected language. The page is available in <b>German</b>. Please select other language to display.
</div>

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i>
    <strong>Info</strong> Die Berechnung und Übermittlung von Umsatzsteuererklärungen wurden mit der 365 business ERiC Version 17.6 eingeführt.<br>Bitte prüfen Sie, ob Sie über die aktuellste Version von 365 business ERiC verfügen.
</div>

Die Umsatzsteuererklärung hat jedes Unternehmen bzw. jeder umsatzsteuerpflichtige und selbständig Tätige einmal im Jahr zu erstellen. Bei der Umsatzsteuererklärung werden alle Formen des entgeltlichen Tätigwerdens eines Unternehmens erfasst. Umsatzsteuern fallen sowohl auf Verkäufe als auch auf Dienstleistungen an. Die Abgabefrist ist der 31. Mai des Folgejahres.

## So erstellen Sie eine Umsatzsteuererklärung
1. Wählen Sie **ELSTER Steuerdaten** in der Suche von Business Central.
2. Klicken Sie auf **Neu**.
3. Wählen Sie die Datenart **USt - Umsatzsteuererklärung**.
4. Geben Sie eine **Beschreibung** ein.
5. Geben Sie ein **Startdatum** ein, für welches die Meldung gilt.<br><br>**Beispiel:**<br>Geben Sie 01.01.2021 an, wenn Sie die Umsatzsteuererklärung für das Kalenderjahr 2021 übermitteln möchten.
6. Geben Sie, falls abweichend vom 31.12, ein **Enddatum** ein.
7. Wählen Sie welcher MwSt.-Posten Status für die Berechnung genutzt werden soll.<br><br>**Beispiel:**<br>Wenn Sie die *MwSt.-Abrechnung* bereits gebucht haben sind die MwSt.-Posten ggf. abgeschlossen. Sollen die Posten trotzdem berücksichtigt werden, bspw. für eine berichtigte Meldung, so wählen Sie **Offen und geschlossen** im Feld **MwSt.-Posten inkl.**.
8. Wählen Sie welche Buchungsdaten bei der Ermittlung der MwSt.-Posten berücksichtigt werden müssen. In der Regel wählen Sie den Wert **Innerhalb Periode** aus.
9. Wenn Sie zusätzliche Informationen für die Bearbeitung an das Finanzamt senden möchten, können Sie diese im Feld **Zusätzliche Informationen** erfassen.
10. Klicken Sie auf **Berechnen**, um die Steuerkennzahlen für die Datenart zu berechnen.
11. Prüfen und korrigieren Sie bei Bedarf die ermittelten Werte der Steuerkennzahlen oder erfassen Sie weitere Steuerkennzahlen.
12. Klicken Sie auf **XML-Datei übertragen**, um die Steuerdatei einzureichen und elektronisch an die deutschen Steuerbehörden zu übermitteln.

## Weitere Optionen
Zusätzlich zu den oben genannten Einstellungen können Sie folgende Optionen setzen:

| Name | Beschreibung |
| --- | --- |
| Testübertragung | Gibt an, dass diese Steuermeldung nur zu Testzwecken dient. Diese Steuerübertragung wird nach der Übermittlung von ELSTER gelöscht und nicht verarbeitet. |
| Berichtigte Anmeldung | Gibt an, dass es sich bei dieser Steuermeldung um eine korrigierte Mitteilung handelt. Nachdem Sie eine Steuermeldung für einen bestimmten Zeitraum erfolgreich übertragen haben, müssen Sie diese Option einstellen, damit Sie eine aktualisierte Steuermeldung übertragen können. |
| Erstattungsbetrag verrechnen | Gibt an, ob ein möglicher Erstattungsbetrag mit der Zahlungsgebühr auf dieser Umsatzsteuervoranmeldung verrechnet werden soll. |

## Einschränkungen
In der aktuellen Version der USt.-Erklärung für 365 business ERiC gibt es funktionale Einschränkungen, die die Abgabe gewisser Steuervorfälle nicht erlauben. Diese Einschränkungen werden in kommenden Version von 365 business ERiC aufgehoben. Für weitere Informationen prüfen Sie bitte die Seite [New and Planned](../../changelog/changelog.md).

| Funktion | Beschreibung |
| --- | --- |
| Anlagen | Die Abgabe von Anlagen (bspw. Anlage UN) wird aktuell nicht unterstützt. |
| 2. Zeitraum | Die Angabe vom "2. Zeitraum" (Vordruckzeile 21) wird aktuell nicht unterstützt. |
| Ergänzende Angaben | Die Angabe von ergänzenden Informationen in einem separaten Dokument mit der Überschrift "Ergänzende Angaben zur Steuererklärung" (Vordruckzeile 27) wird aktuell nicht unterstützt. |

# Siehe auch
- [ELSTER Steuerdaten](elster-tax-statements.md)
- [Datenart - Umsatzsteuervoranmeldung - Dokumentation](elster-sales-vat-adv-notification.md)
- [Datenart - Zusammenfassende Meldung - Dokumentation](elster-recapulative-statement.md)
- [Datenart - Dauerfristverlängerung - Dokumentation](elster-permanent-time-limit-extension.md)
- [Datenart - Antrag auf Fristverlängerung - Dokumentation](elster-request-for-time-extension.md)
- [New and Planned](../../changelog/changelog.md)