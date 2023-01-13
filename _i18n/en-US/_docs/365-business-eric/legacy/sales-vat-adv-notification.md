<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Info:</strong>This page is not available in the selected language. The page is available in <b>German</b>. Please select other language to display.
</div>

<div class="alert alert-warn">
    <i class="fa-solid fa-lightbulb"></i> <strong>Wichtiger Hinweis:</strong> Die Seite <b>Umsatzsteuervoranmeldung</b> ist für die elektronische Übermittlung von Umsatzsteuervoranmeldungen veraltet. Bitte verwenden Sie stattdessen die <a href="../elster-tax-statements/"><b>ELSTER Steuerdaten</b></a>.<br><br>Die Seite <b>Umsatzsteuervoranmeldung</b> stammt aus der <i>ELSTER VAT Localization for Germany</i> Extension von Microsoft und wird im Rahmen der deutschen Lokalisation von Microsoft Dynamics 365 Business Central mit ausgeliefert. Die Erweiterung basiert auf der Logik und dem Prozess der offenen ELSTER Schnittstelle, welche bis Anfang Januar 2019 zur Verfügung stand. Am 11.10.2018 hat Microsoft bekanntgegeben die neue Schnittstelle <b>ERiC</b> nicht zu implementieren, jedoch weiterhin die Erstellung der notwendigen XML-Dateien bereitzustellen (<a href="https://docs.microsoft.com/de-de/archive/blogs/german_nav_developer/elster-schnittstelle-in-der-zukunft-ohne-uebermittlung-der-datei)">siehe *Elster Schnittstelle in der Zukunft ohne Übermittlung der Datei*</a>.<br><br>Am 25. Januar 2019 wurde die erste Version der <b>365 business ERiC</b> Extension öffentlich bereitgestellt und basiert seither auf der <i>ELSTER VAT Localization for Germany</i> Extension von Microsoft.<br><br>Mit der im Februar 2021 veröffentlichten Version 17.3 der <b>365 business ERiC</b> Extension hat sich diese Abhängigkeit gelöst und die Extension übernimmt nun auch die Generierung der notwendigen XML-Dateien.<br><br>Weitere Informationen finden Sie hier: <a href="https://365businessdev.com/microsoft-dynamics-365-business-central/update-365-business-eric-elster-schnittstelle/" target="_blank"><b>https://365businessdev.com/microsoft-dynamics-365-business-central/update-365-business-eric-elster-schnittstelle/</b></a>.<br>
</div>

In der Umsatzsteuervoranmeldung Karte werden die notwendigen Informationen für die Erstellung einer Umsatzsteuervoranmeldung erfasst.
![USt.-Voranmeldungskarte](/assets/images/365-business-eric/sales-vat-adv-notification-de.png)

Diese Informationen werden verwendet um eine XML-Datei zu erstellen, welche im Weiteren elektronisch an die deutschen Steuerbehörden geschickt wird.

Zu den Pflichtangaben für eine USt.-Voranmeldung zählen:

| Feldname | Beschreibung |
| --- | --- |
| Nr. | Gibt die Umsatzsteuervoranmeldungsnummer an. |
| Startdatum | Gibt das Anfangsdatum der Periode an, für die Sie die Umsatzsteuervoranmeldung erstellen und übertragen möchten. |
| MwSt.-Posten inkl. (Abgeschl.) | Gibt an, ob die Berechnung von Steuerbeträgen und Bemessungsgrundlagen nur geschlossene, offene oder offene und geschlossene Umsatzsteuerposten enthalten soll. |
| MwSt.-Posten inkl. (Periode) | Gibt an, ob die Berechnung von Steuerbeträgen und Bemessungsgrundlagen Umsatzsteuerposten mit einem Buchungsdatum innerhalb der Periode oder auch Umsatzsteuerposten mit einem Buchungsdatum vor dem Anfangsdatum der Periode enthalten soll. |
| Authentifizierung verwenden | Gibt an, ob signierte Daten an die Steuerbehörden gesendet werden.<br><br>_**Hinweis:**_ Seit Januar 2019 ist ausschließlich die signierte Übertragung von Daten zulässig. |
| Ansprechpartner für Finanzamt | Gibt den Namen des Ansprechpartners in Ihrem Unternehmen für Rückrufe von der Steuerbehörde an. |
| Kontakt Telefonnr. | Gibt die Telefonnummer der Person an, die die MwSt.-Abrechnung erstellt. |
| Kontakt-E-Mail | Gibt die E-Mail-Adresse der Person an, die die MwSt.-Abrechnung erstellt. |

Alle weiteren Felder und Informationen sind entweder optional oder obsolet. Obsolete Felder, wie bspw. das Feld *XSL-Dateiname*, stammen noch aus der ursprünglichen Lösung zu Zeiten der offenen ELSTER Schnittstelle.

#### So übermitteln Sie Ihre USt.-Voranmeldung elektronisch an die deutschen Steuerbehörden
Die Umsatzsteuervoranmeldung wird unter der Datenart **UStVA** versandt. Der Versand erfolgt dabei über die ERiC Schnittstelle, mit Hilfe einer XML-Datei, sowie einem Zertifikat zur Authentifizierung gegenüber den deutschen Steuerbehörden.

Der Ablauf für die Erstellung und die elektronische Übermittlung einer USt.-Voranmeldung ist wie folgt:

1. Erstellen Sie eine neue USt.-Voranmeldung und geben Sie die Pflichtinformationen (siehe oben) an. (_weitere Information_ [Umsatzsteuervoranmeldungen](https://docs.microsoft.com/de-de/dynamics365/business-central/localfunctionality/germany/how-to-set-up-and-export-sales-vat-advance-notifications))
2. Klicken Sie auf "**XML-Datei erstellen...**" um die XML-Datei für die elektronische Übertragung vorzubereiten.
3. Klicken Sie auf "**XML-Datei übertragen**" um die zuvor erstellte XML-Datei an die deutschen Steuerbehörden zu versenden.

#### Diese Informationen erhalten Sie nach der erfolgten elektronischen Übermittlung

Nach der erfolgten Einreichung der USt.-Voranmeldung erhalten Sie das **Übertragungsprotokoll (PDF-Datei)**, welches zusammen mit der XML-Datei an der USt.-Voranmeldung gespeichert wird.
Das Übertragungsprotokoll kann jederzeit über den Button **Übertragungsprotokoll (PDF-Datei) anzeigen** in der jeweiligen USt.-Voranmeldungskarte aufgerufen werden.

Weiterhin werden, nach der erfolgten Übertragung, im Abschnitt **Elektronische Datenübermittlung** die ELSTER Rückgabewerte abgespeichert. Dabei werden folgende Informationen zurückgegeben:

| Feldname | Beschreibung |
| --- | --- |
| ELSTER Transfer Ticket Nr. | Bei dieser Nr. handelt es sich um eine eindeutige Quittungsnr. die vom ELSTER Server generiert wird und die erfolgreiche Einreichung quittiert. Zusätzlich kann die Ticket Nr. der Recherche beim Finanzamt dienen. |
| ELSTER Rückgabecode | Gibt den Status Code (0 = Erfolg) für die Einreichung vom ELSTER Server zurück. |
| ELSTER Rückgabemeldung | Gibt eine Klartextnachricht für den Rückgabecode an. |

### Siehe auch
- [ELSTER Steuerdaten](../elster-tax-statements)
- [Abkündigung Support für USt.-Voranmeldungskarte](https://365businessdev.com/microsoft-dynamics-365-business-central/update-365-business-eric-elster-schnittstelle/)
- [Umsatzsteuervoranmeldungen _(Microsoft Docs)_](https://docs.microsoft.com/de-de/dynamics365/business-central/localfunctionality/germany/how-to-set-up-and-export-sales-vat-advance-notifications)
