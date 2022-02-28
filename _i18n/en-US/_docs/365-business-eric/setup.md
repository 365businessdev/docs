> This page is not available in the selected language. The page is available in **German**. Please select other language to display.

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
| Umsatzsteuererklärung Nr.-Serie | Nummerierung | Gibt die Nummernserie an, die für die Umsatzsteuererklärung verwendet wird. | UST (UST0001 - UST9999)|
| UStVA MwSt.-Abrechnung Vorlage | Umsatzsteuervoranmeldung | Legt die Vorlage für die MwSt.-Abrechnung fest, die für die Berechnung der Steuerzahlen und -werte verwendet werden soll. | *Ermittlung an Hand der existierenden MwSt.-Abrechnungen* | 
| UStVA MwSt.-Abrechnung Name | Umsatzsteuervoranmeldung | Legt den Namen der MwSt.-Abrechnung fest, der für die Berechnung der Steuerzahlen und -werte verwendet werden soll. | *Ermittlung an Hand der existierenden MwSt.-Abrechnungen* |
| Organschaft | Umsatzsteuervoranmeldung | Zeigt an, ob die ausgewählte MwSt.-Abrechnung eine Organschaft verwendet oder nicht.<br><br>_**Hinweis:** Dieses Feld wird nur angezeigt, wenn OPplus installiert ist. Weitere Informationen finden sie [hier](../opp-affiliation/)._ |  |
| Dauerfristverlängerung MwSt.-Abrechnung Vorlage | Dauerfristverlängerung | Legt die Vorlage für die MwSt.-Abrechnung fest, die für die Berechnung der Steuerzahlen und -werte verwendet werden soll. |  | 
| Dauerfristverlängerung MwSt.-Abrechnung Name | Dauerfristverlängerung | Legt den Namen der MwSt.-Abrechnung fest, der für die Berechnung der Steuerzahlen und -werte verwendet werden soll. |  |
| MwSt.-Geschäftsbuchungsgruppe Filter | Zusammenfassende Meldung | Ermöglicht die Angabe zusätzlicher MwSt.-Buchungsgruppenfilter für die Berechnung der zusammenfassenden Meldung. |  |
| Umsatzsteuererklärung MwSt.-Abrechnung Vorlage | Umsatzsteuererklärung | Legt die Vorlage für die MwSt.-Abrechnung fest, die für die Berechnung der Steuerzahlen und -werte verwendet werden soll. |  | 
| Umsatzsteuererklärung MwSt.-Abrechnung Name | Umsatzsteuererklärung | Legt den Namen der MwSt.-Abrechnung fest, der für die Berechnung der Steuerzahlen und -werte verwendet werden soll. |  |
| Besteuerungsart | Umsatzsteuererklärung / Besteuerung | Gibt die von Ihrem Unternehmen verwendete Besteuerungsart an. |  |
| USt.-Vorrauszahlungen Sachkontonr. | Umsatzsteuererklärung / Sachkonten | Gibt das Sachkonto für USt.-Vorrauszahlungen (z.B. `1780` (SKR03)) an. |  |
| USt.-Vorrauszahlungen 1/11 Sachkontonr. | Umsatzsteuererklärung / Sachkonten | Gibt das Sachkonto für USt.-Vorrauszahlungen 1/11 bzw. Sondervorrauszahlungen (z.B. `1781` (SKR03)) an. |  |


#### Zertifikat
Ab dem 01.01.2013 kann die Umsatzsteuervoranmeldung, der Antrag auf Dauerfristverlängerung, die Anmeldung auf Sondervorauszahlung und die Lohnsteueranmeldung nur noch mit elektronischem Zertifikat übermittelt werden.
Unabhängig von der für die Übermittlung ausgewählten Software ist hierfür die Registrierung in [Mein ELSTER](https://www.elster.de/eportal/start) zwingend notwendig.

Das ELSTER-Zertifikat (PFX-Datei) erhalten Sie nach Abschluss der Registrierung im ElsterOnline-Portal per E-Mail. Den Aktivierungscode zum erstmaligen Login erhalten Sie per Post von der Finanzverwaltung.

Das ELSTER-Zertifikat, üblicherweise das Organisationszertifikat, muss in Business Central gespeichert werden, damit die Steuerdatenmeldungen digital signiert werden können und Sie gegenüber den Steuerbehörden authentifiziert werden.

#### Wie speichere ich mein ELSTER-Zertifikat in Business Central?
1. Öffnen Sie die ELSTER Einrichtung über die Business Central Suche.
2. Klicken Sie auf **Zertifikat-Datei hochladen (PFX)**.
3. Wählen Sie die ELSTER-Zertifikat Datei auf Ihrem lokalen Computer aus.
4. Klicken Sie **OK**.

Neben dem ELSTER-Zertifikat muss auch die Zertifikat PIN in Business Central gespeichert werden. 

1. Öffnen Sie die ELSTER Einrichtung über die Business Central Suche.
2. Klicken Sie auf **Zertifikat PIN setzen**.
3. Geben Sie das Zertifikatspasswort ein.
4. Bestätigen Sie das Zertifikatspasswort, indem Sie es erneut eingeben.
5. Klicken Sie **OK**.

#### Benutzerzertifikate

> **Hinweis**<br>Mit der 365 business ERiC Version 17.8 wurden zusätzlich zum Organisationszertifikat, das in der ELSTER Einrichtung hinterlegt werden kann, sogenannte [Benutzerzertifikate](../user-certificates/) eingeführt.<br>Bitte prüfen Sie, ob Sie über die aktuellste Version von 365 business ERiC verfügen.

Wenn verschiedene Anwender die Steuerdatenmeldungen an das Finanzamt vornehmen und die Anwender über persönliche Zertifikate verfügen, so kann das Zertifikat als [Benutzerzertifikat](../user-certificates/) hinterlegt werden.

### Siehe auch
 - [Benutzerzertifikate](../user-certificates/)
 - [Umsatzsteuerliche Organschaft](../opp-affiliation/)