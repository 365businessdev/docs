# UStVA - Umsatzsteuervoranmeldung

Umsatzsteuervoranmeldungen müssen von Unternehmern monatlich oder vierteljährlich abgegeben werden, um eine bereits entstandene Umsatzsteuer an das Finanzamt zu melden und abzuführen bzw. bei einem Vorsteuerüberschuss erstattet zu bekommen.

## Umsatzsteuerliche Organschaft

Mit der 365 business ERiC Version 17.8 wurde die Unterstützung für die Umsatzsteuerliche Organschaft auf Basis von [OPplus](https://www.continia.com/de/loesungen/opplus.md) hinzugefügt.

Weitere Informationen zur umsatzsteuerlichen Organschaft finden Sie [hier](opp-affiliation.md).

## So erstellen Sie eine USt.-Voranmeldung
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

![Umsatzsteuervoranmeldung](/assets/images/365-business-eric/elster-sales-vat-adv-notification.png)

## Infobox-Bereich

### Dateien

In den Dateien der ELSTER Steuerdaten werden sämtliche übertragenen und empfangenen Dateien zur aktuellen Umsatzsteuervoranmeldung gespeichert.
Hierzu zählen:

 - XML Übertragungsdokument - Die an ELSTER übertragene XML-Datei.
 - XML Übertragungsbestätigung - Die von ELSTER empfangene XML-Datei, nach der erfolgten Einreichung.
 - Übertragungsbestätigung - Die von ELSTER empfangene Übertragungsbestätigung im PDF-Format.

Weitere Informationen finden Sie [hier](elster-tax-statements.md#dateien).

### MwSt.-Abrechnungszeilen

Im Infobox-Bereich **MwSt.-Abrechnungszeilen** werden die für die ausgewählte Steuerdatenzeile verwendeten MwSt.-Abrechnungszeilen, inkl. der Betragsart und dem Betrag, angezeigt.

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i> <strong>Wichtiger Hinweis</strong> Der Betrag, entweder der MwSt.-Betrag oder die Bemessungsgrundlage, der Zeile in der MwSt.-Abrechnung. Bitte beachten Sie, dass dieser Betrag zum Zeitpunkt der Berechnung der ELSTER-Steuererklärung berechnet wird und der aktuelle Betrag in der MwSt.-Abrechnung abweichen kann.
</div>

### ELSTER Übertragung

Im Infobox-Bereich **ELSTER Übertragung** werden die wesentlichen Informationen zur elektronischen Übermittlung der ELSTER Steuerdaten zusammengefasst.

### Weitere Optionen
Zusätzlich zu den oben genannten Einstellungen können Sie folgende Optionen setzen:

| Name | Beschreibung |
| --- | --- |
| Testübertragung | Gibt an, dass diese Steuermeldung nur zu Testzwecken dient. Diese Steuerübertragung wird nach der Übermittlung von ELSTER gelöscht und nicht verarbeitet. |
| Berichtigte Anmeldung | Gibt an, dass es sich bei dieser Steuermeldung um eine korrigierte Mitteilung handelt. Nachdem Sie eine Steuermeldung für einen bestimmten Zeitraum erfolgreich übertragen haben, müssen Sie diese Option einstellen, damit Sie eine aktualisierte Steuermeldung übertragen können. |
| Erstattungsbetrag verrechnen | Gibt an, ob ein möglicher Erstattungsbetrag mit der Zahlungsgebühr auf dieser Umsatzsteuervoranmeldung verrechnet werden soll. |
| Lastschrifteinzug widerrufen | Gibt an, dass das Lastschriftmandat für diese Steuermeldung widerrufen wird. |

# Siehe auch
- [ELSTER Steuerdaten](elster-tax-statements.md)
- [MwSt.-Abrechnung Einrichtung](vat-statement-setup/vat-statement-setup.md)
- [Datenart - Zusammenfassende Meldung - Dokumentation](elster-recapulative-statement.md)
- [Datenart - Dauerfristverlängerung - Dokumentation](elster-permanent-time-limit-extension.md)
- [Datenart - Antrag auf Fristverlängerung - Dokumentation](elster-request-for-time-extension.md)
- [Datenart - Umsatzsteuererklärung - Dokumentation](elster-annual-vat-return.md)
- [Umsatzsteuerliche Organschaft](opp-affiliation.md)