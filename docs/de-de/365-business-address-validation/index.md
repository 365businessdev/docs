# 365 business Address Validation

Fehlerfreie Kundenstammdaten sind die Voraussetzung dafür, dass Sie Ihren Kunden auch wirklich erreichen. Adressen kommen auf vielen Wegen in Ihr Unternehmen: Sie werden via Telefon, Vertrieb, Briefkontakt, E-Mail, Internet etc. übermittelt und gespeichert. Dabei entstehen schnell Tippfehler oder Verhörer, die dann ungeprüft in den Datenbestand übernommen werden. Das kann weitreichende Folgen haben.

Stimmt die Datenbasis nicht, verpuffen Marketing-Aktionen wirkungslos, können Rechnungen nicht zugestellt werden, steigen die Rückläuferquoten und Streuverluste von Mailings. Die Folge: Kunden reagieren verärgert auf mangelhafte Adressierung, doppelte Anschreiben oder nicht erfolgte Lieferungen. Reklamationen führen nicht nur zu erhöhtem Aufwand im Service Center, sondern können Ihrem Image ernsthaft schaden. Und das wirkt sich schnell auf Ihren Umsatz aus.

![365 business Address Validation](/assets/images/365-business-address-validation/logo.png)  

Mit 365 business Address Validation können Sie Ihre Adressdaten innerhalb von Microsoft Dynamics 365 Business Central prüfen und automatisch vervollständigen lassen. Darüber hinaus bietet 365 business Address Validation, mit der Funktion der [Adressvorhersage](address-prediction.md), eine Funktion mit der Sie die Aufwände bei der Erfassung neuer Adressdaten reduzieren und gleichzeitig Ihre Adressqualität signifikant steigern können.
Damit werden Übermittlungsfehler wie Schreib-, Lese-, Hör- oder Tippfehler ausgeschlossen und unterstützt durch das System bereinigt.

## Welche Anwendungsbereiche werden unterstützt?

In der aktuellen Version werden folgende Anwendungsbereiche unterstützt:

| Anwendungsbereich | Adressvalidierung | Adressvorhersage | Bemerkung |
| --- | --- | --- | --- |
| **Kontakt** | Ja | Ja |  |
| **Debitor** | Ja | Ja |  |
| **Kreditor** | Ja | Ja |  |
| **Ressource** | Ja | Ja |  |
| **Mitarbeiter** |  | Ja | *Adressvalidierung ist aktuell nicht für Mitarbeiter verfügbar.* |
| **Verkaufsbelege** | Ja |  | *Adressvorhersage ist aktuell nicht für Verk.-Belege verfügbar.* |
| **Einkaufsbelege** | Ja |  | *Adressvorhersage ist aktuell nicht für Eink.-Belege verfügbar.* |

Die bereitgestellten Integrationen lassen sich über die Seite [Einrichtung für Adressvalidierung](setup.md) aktivieren und deaktivieren.<br>Erfahren Sie mehr unter [Einrichtung](setup.md).

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i> <strong>Hinweis</strong> Weitere Integrationen können über die bereitgestellte API unkompliziert angebunden werden.<br>Erfahren Sie mehr in unserer <a href="https://docs.365businessdev.com/de-DE/al-developer/365businessaddressvalidation/">Entwickler Dokumentation</a>.
</div>

## Wie funktioniert die Adressvorhersage?

Die Adressvorhersage ist direkt in die Standardseiten innerhalb von Microsoft Dynamics 365 Business Central integriert und muss nicht gesondert aufgerufen werden.
In der Regel ist die Funktion auf den Feldern **Name** und **Adresse** verfügbar.

![Adressvorhersage](/assets/images/365-business-address-validation/addressprediction.de-DE.gif)

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i> <strong>Hinweis</strong> Die Adressvorhersage im Feld <b>Name</b> sucht für Debitoren, Kreditoren und Unternehmenskontakte nach Unternehmen und Organisationen. Zusätzlich werden weitere Organisationsinformationen ermittelt und ggf. ergänzt.<br><br>Im Feld <b>Adresse</b> wird hingegen ausschließlich nach einer gültigen Postadresse gesucht.
</div>

Weitere Informationen zur [Adressvorhersage](address-prediction.md) finden Sie in der weiterführenden [Dokumentation](address-prediction.md).

## Wie funktioniert die Adressvalidierung?

Die Adressvalidierung findet automatisch statt und wird in Echtzeit nach Eingabe oder Änderung einer Adresse ausgeführt, sofern nicht bereits die [Adressvorhersage](address-prediction.md) genutzt wurde.

![Adressvalidierung](/assets/images/365-business-address-validation/addressvalidation.de-DE.gif)

Abhängig von den Einstellungen in der [**Einrichtung für Adressvalidierung**](setup.md) wird unter Umständen der [Adressdatenvergleich](address-validation.md#wie-kann-ich-die-adressdaten-prüfen-bevor-diese-angewandt-werden) angezeigt, der Ihnen erlaubt die Unterschiede bei der Validierung zu prüfen und die Adressänderung anzunehmen oder abzulehnen.

Weitere Informationen zur [Adressvalidierung](address-validation.md) finden Sie in der weiterführenden [Dokumentation](address-validation.md).

## Welche Länder und Sprachen werden unterstützt?

Die Adressvalidierung kann in den verschiedensten Sprachen und Schriftsätzen erfolgen, wie beispielsweise Arabisch, Griechisch, Kyrillisch oder Hangul. 
Auf Grund der umfangreichen Referenzdatenbanken zur Prüfung werden zudem weltweite Adressprüfungen unterstützt.
Der detaillierte, vielfach hausnummerngenaue Adressabgleich sorgt zusätzlich für eine hohe Qualität der Adressdaten.

# Siehe auch 
 - [Erste Schritte](get-started.md)
 - [Einrichtung für Adressvalidierung](setup.md)
 - [Adressvorhersage](address-prediction.md)
 - [Adressvalidierung](address-validation.md)
