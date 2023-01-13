<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Info:</strong>This page is not available in the selected language. The page is available in <b>German</b>. Please select other language to display.
</div>

<div class="alert alert-warn">
    <i class="fa-solid fa-lightbulb"></i> <strong>Wichtiger Hinweis:</strong> Die Seite <b>MwSt.-Berichte</b> ist für die elektronische Übermittlung der Zusammenfassenden Meldung veraltet. Bitte verwenden Sie stattdessen die <a href="../elster-tax-statements/"><b>ELSTER Steuerdaten</b></a>.<br><br>Weitere Informationen finden Sie hier: <b><a href="https://365businessdev.com/microsoft-dynamics-365-business-central/update-365-business-eric-elster-schnittstelle/" target="_blank"><b>https://365businessdev.com/microsoft-dynamics-365-business-central/update-365-business-eric-elster-schnittstelle/</b></a>.<br>
</div>

In der Seite MwSt.-Berichte werden die notwendigen Informationen für die Erstellung einer zusammenfassenden Meldung erfasst.
![MwSt.-Berichte](/assets/images/365-business-eric/vat-report-de.png)

Diese Informationen werden verwendet um eine XML-Datei zu erstellen, welche im Weiteren elektronisch an die deutschen Steuerbehörden geschickt wird.

Zu den Pflichtangaben für eine USt.-Voranmeldung zählen:

| Feldname | Beschreibung |
| --- | --- |
| Nr. | Gibt die Nummer des MwSt.-Berichts an. |
| MwSt.-Berichtstyp | Berichtigte zusammenfassende Meldungen werden mit dem Wert **Korrektur** angelegt. Neue zusammenfassende Meldungen werden mit **Standard** angelegt.
| Handelstyp | Gibt den Typ des Handels an, wie etwa Verkauf. |
| EU-Waren/-Dienstleistungen | Gibt an, welche Geschäftsarten der Bericht abdeckt, wie etwa Waren oder Dienste. |
| Berichtsperiodentyp | Gibt die Berichtsperiode für den MwSt.-Bericht an. |
| Berichtsperiodennummer | Gibt die MwSt.-Periode an. |
| Berichtsjahr | Gibt das Jahr an, das der MwSt.-Bericht abdeckt. |

Alle weiteren Felder und Informationen sind optional.

#### So übermitteln Sie Ihre MwSt.-Berichte elektronisch an die deutschen Steuerbehörden
Die Umsatzsteuervoranmeldung wird unter der Datenart **ZMDO** versandt. Der Versand erfolgt dabei über die ERiC Schnittstelle, mit Hilfe einer XML-Datei, sowie einem Zertifikat zur Authentifizierung gegenüber den deutschen Steuerbehörden.

Der Ablauf für die Erstellung und die elektronische Übermittlung eines Mwst.-Berichts bzw. einer zusammenfassenden Meldung ist wie folgt:

1. Erstellen Sie eine neuen MwSt.-Bericht und geben Sie die Pflichtinformationen (siehe oben) an. (_weitere Information_ [Erstellen von Mwst-Berichten.](https://docs.microsoft.com/de-de/dynamics365/business-central/localfunctionality/germany/how-to-create-vat-reports))
2. Klicken Sie auf "**XML-Datei erstellen...**" um die XML-Datei für die elektronische Übertragung vorzubereiten.
3. Klicken Sie auf "**XML-Datei übertragen**" um die zuvor erstellte XML-Datei an die deutschen Steuerbehörden zu versenden.

#### Diese Informationen erhalten Sie nach der erfolgten elektronischen Übermittlung

Nach der erfolgten Einreichung der zusammenfassenden Meldung erhalten Sie das **Übertragungsprotokoll (PDF-Datei)**, welches zusammen mit der XML-Datei an dem MwSt.-Bericht gespeichert wird.
Das Übertragungsprotokoll kann jederzeit über den Button **Übertragungsprotokoll (PDF-Datei) anzeigen** in dem jeweiligen MwSt.-Bericht aufgerufen werden.

Weiterhin werden, nach der erfolgten Übertragung, im Abschnitt **Elektronische Datenübermittlung** die ELSTER Rückgabewerte abgespeichert. Dabei werden folgende Informationen zurückgegeben:

| Feldname | Beschreibung |
| --- | --- |
| ELSTER Transfer Ticket Nr. | Bei dieser Nr. handelt es sich um eine eindeutige Quittungsnr. die vom ELSTER Server generiert wird und die erfolgreiche Einreichung quittiert. Zusätzlich kann die Ticket Nr. der Recherche beim Finanzamt dienen. |
| ELSTER Rückgabecode | Gibt den Status Code (0 = Erfolg) für die Einreichung vom ELSTER Server zurück. |
| ELSTER Rückgabemeldung | Gibt eine Klartextnachricht für den Rückgabecode an. |

### Siehe auch
- [ELSTER Steuerdaten](../elster-tax-statements)
- [Abkündigung Support für MwSt.-Berichte](https://365businessdev.com/microsoft-dynamics-365-business-central/update-365-business-eric-elster-schnittstelle/)
- [Erstellen von Mwst-Berichten. _(Microsoft Docs)_](https://docs.microsoft.com/de-de/dynamics365/business-central/localfunctionality/germany/how-to-create-vat-reports)
