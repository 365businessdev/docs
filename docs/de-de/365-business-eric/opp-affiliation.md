---
title: Organgesellschaft
---

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Hinweis:</strong> Mit der 365 business ERiC Version 17.8 wurde die Unterstützung für die Umsatzsteuerliche Organschaft auf Basis von <a href="https://www.continia.com/de/loesungen/opplus/">OPplus</a> hinzugefügt.<br>Bitte prüfen Sie, ob Sie über die aktuellste Version von 365 business ERiC verfügen um diese Funktion zu verwenden.
</div>

Bei der Umsatzsteuer ist eine Organschaft möglich. Die Umsätze der Organgesellschaften werden dabei beim Organträger versteuert.

Alle Unternehmen der Organschaft sind beim Finanzamt unter einer Steuernummer erfasst. Während für die Körperschaftsteuer und Gewerbesteuer auch für die Organgesellschaft jeweils eine Steuererklärung abzugeben ist, sind die Umsätze und Vorsteuern der Organgesellschaft und des Organträgers beim Organträger zusammenzurechnen und in einem Formular zu erklären.

Mit dem Microsoft Dynamics 365 Business Central Modul [OPplus](https://www.continia.com/de/loesungen/opplus.md) haben Sie die Möglichkeit eine Umsatzsteuerliche Organschaft abzubilden. Hierfür wird in der Bilanz und Umsatzsteuer Einrichtung von OPplus ein Code für die Organschaft angelegt. Alle Mandanten mit dem identischen Code werden in der Folge bei der Berechnung der Umsatzsteuervoranmeldung zusammengerechnet.

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Hinweis:</strong> Weitere Informationen finden Sie in der <a href="https://help.gbedv.de/de-DE/site/tax/#umsatzsteuer">Dokumentation von OPplus</a>.
</div>

365 business ERiC unterstützt die Implementierung der umsatzsteuerlichen Organschaft in der Berechnung der [Umsatzsteuervoranmeldung](elster-sales-vat-adv-notification.md). Dabei wird die konfigurierte MwSt.-Abrechnung des Organträgers verwendet um entsprechend in den Organgesellschaften (Mandanten) die Beträge zu ermitteln.

#### Wie wird die umsatzsteuerliche Organschaft in 365 business ERiC eingerichtet?

Es sind keine, über die notwendigen Einrichtungen in OPplus, hinausgehenden Einstellungen notwendig.

#### Gibt es Einschränkungen in der Funktionalität?

Die Anzeige der Posten aus den Organgesellschaften wird aktuell nicht unterstützt. Bitte verwenden Sie stattdessen die OPplus Funktion [MwSt.-Posten Kontennachweis](https://help.gbedv.de/de-DE/site/tax/#mwst-posten-kontennachweis).

Weitere Einschränkungen bestehen aktuell nicht.


### Siehe auch
 - [Umsatzsteuervoranmeldung](elster-sales-vat-adv-notification.md)
 - [Dokumentation von OPplus](https://help.gbedv.de/de-DE/site/tax/#umsatzsteuer)