> This page is not available in the selected language. The page is available in **German**. Please select other language to display.

> **Hinweis**<br>Mit der 365 business ERiC Version 17.8 wurde die Unterstützung für die Umsatzsteuerliche Organschaft auf Basis von [OPplus 365](https://www.gbedv.de/de/) hinzugefügt.<br>Bitte prüfen Sie, ob Sie über die aktuellste Version von 365 business ERiC verfügen um diese Funktion zu verwenden.

Bei der Umsatzsteuer ist eine Organschaft möglich. Die Umsätze der Organgesellschaften werden dabei beim Organträger versteuert.

Alle Unternehmen der Organschaft sind beim Finanzamt unter einer Steuernummer erfasst. Während für die Körperschaftsteuer und Gewerbesteuer auch für die Organgesellschaft jeweils eine Steuererklärung abzugeben ist, sind die Umsätze und Vorsteuern der Organgesellschaft und des Organträgers beim Organträger zusammenzurechnen und in einem Formular zu erklären.

Mit dem Microsoft Dynamics 365 Business Central Modul [OPplus 365](https://www.gbedv.de/de/) haben Sie die Möglichkeit eine Umsatzsteuerliche Organschaft abzubilden. Hierfür wird in der Bilanz und Umsatzsteuer Einrichtung von OPplus ein Code für die Organschaft angelegt. Alle Mandanten mit dem identischen Code werden in der Folge bei der Berechnung der Umsatzsteuervoranmeldung zusammengerechnet.

> **Hinweis**<br>Weitere Informationen finden sie in der [Dokumentation von OPplus 365](https://help.gbedv.de/de-DE/site/tax/#umsatzsteuer).

365 business ERiC unterstützt die Implementierung der umsatzsteuerlichen Organschaft in der Berechnung der [Umsatzsteuervoranmeldung](../elster-sales-vat-adv-notification). Dabei wird die konfigurierte MwSt.-Abrechnung des Organträgers verwendet um entsprechend in den Organgesellschaften (Mandanten) die Beträge zu ermitteln.

#### Wie wird die umsatzsteuerliche Organschaft in 365 business ERiC eingerichtet?

Es sind keine, über die notwendigen Einrichtungen in OPplus, hinausgehenden Einstellungen notwendig.

#### Gibt es Einschränkungen in der Funktionalität?

Die Anzeige der Posten aus den Organgesellschaften wird aktuell nicht unterstützt. Bitte verwenden Sie stattdessen die OPplus Funktion [MwSt.-Posten Kontennachweis](https://help.gbedv.de/de-DE/site/tax/#mwst-posten-kontennachweis).

Weitere Einschränkungen bestehen aktuell nicht.


### Siehe auch
 - [Umsatzsteuervoranmeldung](../elster-sales-vat-adv-notification)
 - [Dokumentation von OPplus 365](https://help.gbedv.de/de-DE/site/tax/#umsatzsteuer)