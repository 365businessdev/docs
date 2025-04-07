---
title: One-Stop-Shop (OSS)
---

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Info:</strong>This page is not available in the selected language. The page is available in <b>German</b>. Please select other language to display.
</div>

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Hinweis:</strong> Mit der 365 business ERiC Version 17.10 wurde die Unterstützung für One-Stop-Shop (OSS) hinzugefügt.<br>Bitte prüfen Sie, ob Sie über die aktuellste Version von 365 business ERiC verfügen um diese Funktion zu verwenden.
</div>

Der One-Stop-Shop (OSS) und die Fernverkäufe ab dem 01.07.2021 sind die größte Reform der Umsatzsteuer für den EU-Onlinehandel und sollen den innergemeinschaftlichen Handel endlich vereinfachen. Die Besteuerung erfolgt ab einem Gesamtwert von 10.000 € im Bestimmungsland, die bisherigen Lieferschwellen entfallen. Die Mehrwertsteuer muss nur noch bei einer zentralen Registrierungsstelle pro Land angemeldet werden, Umsatzsteueranmeldungen in einzelnen Ländern werden damit überflüssig.

>**Hinweis:**<br>Aktuell wird die elektronische Übermittlung, mit Hilfe der ELSTER Rich Client (ERiC) Bibliothek, nicht unterstützt. Das BZSt hat zum Zweck der elektronischen Meldung im Onlineportal "Mein BOP" einen CSV-Import zur Verfügung gestellt.

#### Wie erfolgt die Übermittlung der One-Stop-Shop (OSS) Meldung?

Die Meldung für One-Stop-Shop (OSS) erfolgt über das [**Mein BOP**](https://www.elster.de/bportal/login/softpse) Onlineportal des Bundeszentralamt für Steuern (BZSt). Die elektronische Meldung erfolgt dabei über eine OSS CSV-Datei, die die relevanten Informationen enthält.

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Gut zu wissen:</strong> Der Upload der Daten, mittels CSV-Datei, im Mein BOP Onlineportal führt noch nicht zur Übermittlung der Daten an das BZSt. Es besteht nach dem Upload die Möglichkeit, die Daten einzeln zu überprüfen und bei Bedarf zu ändern.
</div>

Da es zum aktuellen Zeitpunkt keine Unterstützung der elektronischen Übermittlung durch die ELSTER Rich Client (ERiC) Bibliothek gibt, ist es leider nicht möglich die Daten **direkt** aus Microsoft Dynamics 365 Business Central zu übermitteln.
Stattdessen muss die CSV-Datei manuell im Mein BOP Onlineportal hochgeladen werden.

#### Wie erhalte ich die OSS CSV-Datei?

Mit der Version 17.10 von 365 business ERiC wird die Steuerdatenart One-Stop-Shop (OSS) unterstützt. Dabei wird, auf Basis einer speziellen MwSt.-Abrechnung, die CSV-Datei in Microsoft Dynamics 365 Business Central erstellt und kann anschließend exportiert werden.

#### Welche Einrichtung ist für die Berechnung der One-Stop-Shop (OSS) Werte erforderlich?

Die Berechnung der One-Stop-Shop (OSS) Werte erfolgt auf Basis der in der [ELSTER Einrichtung](setup.md) festgelegten MwSt.-Abrechnung.

![OSS MwSt.-Abrechnung](/assets/images/365-business-eric/cacd50a60a6113e35c9371fb5e86bdc83d421bc2f9fd4e8329bc7810d526da60.png)

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Gut zu wissen:</strong> Es ist empfehlenswert für jedes EU-Mitgliedsland eine entsprechende MwSt.-Geschäftsbuchungsgruppe (z.B. <code>B2C-AT</code> für Privatverkäufe nach Österreich) anzulegen und entsprechende Sachkonten für die Verbuchung zu verwenden.
</div>

Für die Berechnung werden alle MwSt.-Abrechnungszeilen mit der Art **MwSt.-Posten-Summe**, unabhängig von Ihrer Rubrikennr. analysiert. Die zu Grunde liegenden MwSt.-Posten werden anschließend, abhängig von Ihrem Steuersatz, der USt. ID-Nr. und dem Länder ISO-Code, gruppiert und als ELSTER Steuerdatenzeile berechnet.

##### MwSt.-Buchungsmatrix Einrichtung

In der MwSt.-Buchungsmatrix Einrichtung wurde das Feld `MwSt.-Art` hinzugefügt, in der festgelegt wird ob es sich um einen ermäßigten oder normalen Mehrwertsteuersatz handelt.
Diese Angabe ist für die OSS Meldung erforderlich

![MwSt.-Buchungsmatrix Einrichtung](/assets/images/365-business-eric/87595300685965a54d95ac2fa299bed22aec81fed15d8ab7791c80edd2b81aed.png)  

#### Welche OSS-Satzarten werden unterstützt?

One-Stop-Shop (OSS) sieht vier sogenannte Satzarten vor, die die unterschiedlichen Transaktionsarten darstellen:

| Satzart | Beschreibung | 
| --- | --- | 
| Umsätze für vom Inland aus durchgeführte Warenlieferungen | In dieser Satzart werden grenzüberschreitende B2C-Verkäufe, die aus Deutschland ausgeführt wurden, gemeldet. Es handelt sich hierbei ausschließlich um die Lieferung von Waren. | 
| Dienstleistungen | In dieser Satzart werden grenzüberschreitende B2C-Verkäufe von **Dienstleistungen**, die aus Deutschland heraus erbracht wurden, gemeldet. | 
| Umsätze für aus anderen Mitgliedstaaten durchgeführte Warenlieferungen | In dieser Satzart werden grenzüberschreitende B2C-Verkäufe, die bspw. aus Lagern im EU-Ausland bedient wurden, gemeldet. |
| Umsätze einer festen Niederlassung - Dienstleistungen | In dieser Satzart werden Dienstleistungen gemeldet, die von einer festen Niederlassung im EU-Ausland erbracht wurde. |

#### Wie ermittelt 365 business ERiC die OSS-Satzart?

Grundsätzlich werden an Hand der eingerichteten MwSt.-Abrechnung die MwSt.-Posten ermittelt, die für die Berechnung herangezogen werden. Über das Kennzeichen **EU Service** wird in der Folge nach der Satzart "Umsätze für vom Inland aus durchgeführte Warenlieferungen" oder "Dienstleistungen" differenziert.

Darüber hinaus wird über den Lagerort in der Verk.-Rechnung oder Verk.-Gutschrift ermittelt, ob es sich um eine inländische Niederlassung oder eine Niederlassung in einem anderen EU-Mitgliedsland handelt.

#### So erstellen Sie eine One-Stop-Shop (OSS) CSV-Datei

![One-Stop-Shop (OSS) in der ELSTER Steuerdaten Karte](/assets/images/365-business-eric/e50b77efbd5c68e9cc9a6509adb5d4118f4ec9337b4cf769988c6860b2ee15fb.png)

1. Wählen Sie **ELSTER Steuerdaten** in der Suche von Business Central.
2. Klicken Sie auf **Neu**.
3. Wählen Sie die Datenart **OSS - One-Stop-Shop (OSS)**.
4. Geben Sie eine **Beschreibung** ein.
5. Geben Sie ein **Startdatum** ein, für welches die Meldung gilt.<br><br>**Beispiel:**<br>Geben Sie 01.01.2021 an, wenn Sie eine OSS CSV-Datei für Januar 2021 erstellen möchten.
6. Wählen Sie welcher MwSt.-Posten Status für die Berechnung genutzt werden soll.<br><br>**Beispiel:**<br>Wenn Sie die *MwSt.-Abrechnung* bereits gebucht haben sind die MwSt.-Posten ggf. abgeschlossen. Sollen die Posten trotzdem berücksichtigt werden, bspw. für eine berichtigte Meldung, so wählen Sie **Offen und geschlossen** im Feld **MwSt.-Posten inkl.**.
7. Wählen Sie welche Buchungsdaten bei der Ermittlung der MwSt.-Posten berücksichtigt werden müssen. In der Regel wählen Sie den Wert **Innerhalb Periode** aus.
8. Klicken Sie auf **Berechnen**, um die Steuerkennzahlen für die Datenart zu berechnen.
9. Prüfen und korrigieren Sie bei Bedarf die ermittelten Werte oder erfassen Sie weitere Steuerkennzahlen.
10. Klicken Sie auf **Datei exportieren**, um die OSS CSV-Datei herunterzuladen und im **Mein BOP** Onlineportal hochzuladen.