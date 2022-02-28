> This page is not available in the selected language. The page is available in **German**. Please select other language to display.

Umsatzsteuervoranmeldungen müssen von Unternehmern monatlich oder vierteljährlich abgegeben werden, um eine bereits entstandene Umsatzsteuer an das Finanzamt zu melden und abzuführen bzw. bei einem Vorsteuerüberschuss erstattet zu bekommen.

#### Umsatzsteuerliche Organschaft

Mit der 365 business ERiC Version 17.8 wurde die Unterstützung für die Umsatzsteuerliche Organschaft auf Basis von [OPplus 365](https://www.gbedv.de/de/) hinzugefügt.

Weitere Informationen zur umsatzsteuerlichen Organschaft finden Sie [hier](../opp-affiliation/).

#### So erstellen Sie eine USt.-Voranmeldung
1. Wählen Sie **ELSTER Steuerdaten** in der Suche von Business Central.
2. Klicken Sie auf **Neu**.
3. Wählen Sie die Datenart **UStVA - Umsatzsteuervoranmeldung**.
4. Geben Sie eine **Beschreibung** ein.
5. Geben Sie ein **Startdatum** ein, für welches die Meldung gilt.<br><br>**Beispiel:**<br>Geben Sie 01.01.2021 an, wenn Sie eine USt.-Voranmeldung für Januar 2021 übermitteln möchten.
6. Wählen Sie die **Periodenlänge** aus.
7. Wählen Sie welcher MwSt.-Posten Status für die Berechnung genutzt werden soll.<br><br>**Beispiel:**<br>Wenn Sie die *MwSt.-Abrechnung* bereits gebucht haben sind die MwSt.-Posten ggf. abgeschlossen. Sollen die Posten trotzdem berücksichtigt werden, bspw. für eine berichtigte Meldung, so wählen Sie **Offen und geschlossen** im Feld **MwSt.-Posten inkl.**.
8. Wählen Sie welche Buchungsdaten bei der Ermittlung der MwSt.-Posten berücksichtigt werden müssen. In der Regel wählen Sie den Wert **Innerhalb Periode** aus.
9. Wenn Sie zusätzliche Informationen für die Bearbeitung an das Finanzamt senden möchten, können Sie diese im Feld **Zusätzliche Informationen** erfassen.
10. Klicken Sie auf **Berechnen**, um die Steuerkennzahlen für die Datenart zu berechnen.
11. Prüfen und korrigieren Sie bei Bedarf die ermittelten Werte der Steuerkennzahlen oder erfassen Sie weitere Steuerkennzahlen.
12. Klicken Sie auf **XML-Datei übertragen**, um die Steuerdatei einzureichen und elektronisch an die deutschen Steuerbehörden zu übermitteln.

#### Weitere Optionen
Zusätzlich zu den oben genannten Einstellungen können Sie folgende Optionen setzen:

| Name | Beschreibung |
| --- | --- |
| Testübertragung | Gibt an, dass diese Steuermeldung nur zu Testzwecken dient. Diese Steuerübertragung wird nach der Übermittlung von ELSTER gelöscht und nicht verarbeitet. |
| Berichtigte Anmeldung | Gibt an, dass es sich bei dieser Steuermeldung um eine korrigierte Mitteilung handelt. Nachdem Sie eine Steuermeldung für einen bestimmten Zeitraum erfolgreich übertragen haben, müssen Sie diese Option einstellen, damit Sie eine aktualisierte Steuermeldung übertragen können. |
| Erstattungsbetrag verrechnen | Gibt an, ob ein möglicher Erstattungsbetrag mit der Zahlungsgebühr auf dieser Umsatzsteuervoranmeldung verrechnet werden soll. |
| Lastschrifteinzug widerrufen | Gibt an, dass das Lastschriftmandat für diese Steuermeldung widerrufen wird. |

### Siehe auch
- [ELSTER Steuerdaten](../elster-tax-statements)
- [MwSt.-Abrechnung Einrichtung](../vat-statement-setup/)
- [Datenart - Zusammenfassende Meldung - Dokumentation](../elster-recapulative-statement/)
- [Datenart - Dauerfristverlängerung - Dokumentation](../elster-permanent-time-extension/)
- [Datenart - Antrag auf Fristverlängerung - Dokumentation](../elster-request-for-time-extension/)
- [Datenart - Umsatzsteuererklärung - Dokumentation](../elster-annual-vat-return/)
 - [Umsatzsteuerliche Organschaft](../opp-affiliation/)