Bevor Sie [ELSTER Steuerdatenarten](../elster-tax-data-type/) verwalten und elektronisch übermitteln können, müssen die Regeln und Werte konfiguriert werden, die die Berechnung und Übermittlung an die deutschen Steuerbehörden für den Mandanten definieren.

#### Grundeinrichtung
Die 365 business ERiC App unterstützt Sie bei der Einrichtung und nimmt einige Einrichtungen automatisch vor. Bspw. werden automatisch Nummernserien, für die Nummerierung der einzelnen Steuerdatenarten, und ELSTER Datenarten Konfigurationen vorgenommen. Darüber hinaus prüft die Installation, ob bereits eine MwSt.-Abrechnung für die Berechnung von Umsatzsteuerdaten zur Verfügung steht und wählt diese automatisiert aus.

Folgende Informationen dienen als Grundeinrichtung:

| Feldname | Gruppe | Beschreibung | Standard-Wert |
| --- | --- | --- | --- |
| Umsatzsteuervoranmeldung Nr.-Serie | Nummerierung | Gibt die Nummernserie an, die für die Umsatzsteuervoranmeldung verwendet wird. | USTVA (USTVA0001 - USTVA9999)|
| Zusammenfassende Meldung Nr.-Serie | Nummerierung | Gibt die Nummernserie an, die für die Zusammenfassende Meldung verwendet wird. | ZMDO (ZMDO0001 - ZMDO9999)|
| Dauerfristverlängerung Nr.-Serie | Nummerierung | Gibt die Nummernserie an, die für die Dauerfristverlängerung verwendet wird. | USTDV (USTDV0001 - USTDV9999)|
| Fristverlängerung Nr.-Serie | Nummerierung | Gibt die Nummernserie an, die für die Fristverlängerung verwendet wird. | FRISTV (FRISTV0001 - FRISTV9999)|
| UStVA MwSt.-Abrechnung Vorlage | Umsatzsteuervoranmeldung | Legt die Vorlage für die MwSt.-Abrechnung fest, die für die Berechnung der Steuerzahlen und -werte verwendet werden soll. | *Ermittlung an Hand der existierenden MwSt.-Abrechnungen* | 
| UStVA MwSt.-Abrechnung Name | Umsatzsteuervoranmeldung | Legt den Namen der MwSt.-Abrechnung fest, der für die Berechnung der Steuerzahlen und -werte verwendet werden soll. | *Ermittlung an Hand der existierenden MwSt.-Abrechnungen* |

#### Zertifikat
Ab dem 01.01.2013 kann die Umsatzsteuervoranmeldung, der Antrag auf Dauerfristverlängerung, die Anmeldung auf Sondervorauszahlung und die Lohnsteueranmeldung nur noch mit elektronischem Zertifikat übermittelt werden.
Unabhängig von der für die Übermittlung ausgewählten Software ist hierfür die Registrierung in [Mein ELSTER](https://www.elster.de/eportal/start) zwingend notwendig.

Das ELSTER-Zertifikat (PFX-Datei) erhalten Sie nach Abschluss der Registrierung im ElsterOnline-Portal per E-Mail. Den Aktivierungscode zum erstmaligen Login erhalten Sie per Post von der Finanzverwaltung.

Das ELSTER-Zertifikat muss in Business Central gespeichert werden, damit die Steuerdatenmeldungen digital signiert werden können und Sie gegenüber den Steuerbehörden authentifiziert werden.

#### Wie speichere ich mein ELSTER-Zertifikat in Business Central?
1. Öffnen Sie die ELSTER Einrichtung über die Business Central Suche.
2. Klicken Sie auf **Zertifikat-Datei hochladen (PFX)**.
3. Wählen Sie die ELSTER-Zertifikat Datei auf Ihrem lokalen Computer aus.
4. Klicken Sie **OK**.

Neben dem ELSTER-Zertifikat muss auch die Zertifikat PIN in Business Central gespeichert werden. 

1. Öffnen Sie die ELSTER Einrichtung über die Business Central Suche.
2. Klicken Sie auf **Zertifikat PIN setzen**.
3. Geben Sie das Zertifikatspasswort ein.
4. Besätigen Sie das Zertifikatspasswort, indem Sie es erneut eingeben.
5. Klicken Sie **OK**.