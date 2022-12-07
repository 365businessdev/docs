> This page is not available in the selected language. The page is available in **German**. Please select other language to display.

> **Hinweis**<br>Mit der 365 business ERiC Version 17.10 wurde die Unterstützung für One-Stop-Shop (OSS) hinzugefügt.<br>Bitte prüfen Sie, ob Sie über die aktuellste Version von 365 business ERiC verfügen um diese Funktion zu verwenden.

Der One-Stop-Shop (OSS) und die Fernverkäufe ab dem 01.07.2021 sind die größte Reform der Umsatzsteuer für den EU-Onlinehandel und sollen den innergemeinschaftlichen Handel endlich vereinfachen. Die Besteuerung erfolgt ab einem Gesamtwert von 10.000 € im Bestimmungsland, die bisherigen Lieferschwellen entfallen. Die Mehrwertsteuer muss nur noch bei einer zentralen Registrierungsstelle pro Land angemeldet werden, Umsatzsteueranmeldungen in einzelnen Ländern werden damit überflüssig.

>**Hinweis:**<br>Aktuell wird die elektronische Übermittlung, mit Hilfe der ELSTER Rich Client (ERiC) Bibliothek, nicht unterstützt. Das BZSt hat zum Zweck der elektronischen Meldung im Onlineportal "Mein BOP" einen CSV-Import zur Verfügung gestellt.

#### Wie erfolgt die Übermittlung der One-Stop-Shop (OSS) Meldung?

Die Meldung für One-Stop-Shop (OSS) erfolgt über das [**Mein BOP**](https://www.elster.de/bportal/login/softpse) Onlineportal des Bundeszentralamt für Steuern (BZSt). Die elektronische Meldung erfolgt dabei über eine OSS CSV-Datei, die die relevanten Informationen enthält.

> **Gut zu wissen:**<br>Der Upload der Daten, mittels CSV-Datei, im Mein BOP Onlineportal führt noch nicht zur Übermittlung der Daten an das BZSt. Es besteht nach dem Upload die Möglichkeit, die Daten einzeln zu überprüfen und bei Bedarf zu ändern.

Da es zum aktuellen Zeitpunkt keine Unterstützung der elektronischen Übermittlung durch die ELSTER Rich Client (ERiC) Bibliothek gibt, ist es leider nicht möglich die Daten **direkt** aus Microsoft Dynamics 365 Business Central zu übermitteln.
Stattdessen muss die CSV-Datei manuell im Mein BOP Onlineportal hochgeladen werden.

#### Wie erhalte ich die OSS CSV-Datei?

Mit der Version 17.10 von 365 business ERiC wird die Steuerdatenart One-Stop-Shop (OSS) unterstützt. Dabei wird, auf Basis einer speziellen MwSt.-Abrechnung, die CSV-Datei in Microsoft Dynamics 365 Business Central erstellt und kann anschließend exportiert werden.

#### Welche Einrichtung ist für die Berechnung der One-Stop-Shop (OSS) Werte erforderlich?

Die Berechnung der One-Stop-Shop (OSS) Werte erfolgt auf Basis der in der [ELSTER Einrichtung](../setup/) festgelegten MwSt.-Abrechnung.

![OSS MwSt.-Abrechnung](/assets/images/365-business-eric/cacd50a60a6113e35c9371fb5e86bdc83d421bc2f9fd4e8329bc7810d526da60.png)

> **Gut zu wissen:**<br>Es ist empfehlenswert für jedes EU-Mitgliedsland eine entsprechende MwSt.-Geschäftsbuchungsgruppe (z.B. `B2C-AT` für Privatverkäufe nach Österreich) anzulegen und entsprechende Sachkonten für die Verbuchung zu verwenden.

Für die Berechnung werden alle MwSt.-Abrechnungszeilen mit der Art **MwSt.-Posten-Summe**, unabhängig von Ihrer Rubrikennr. analysiert. Die zu Grunde liegenden MwSt.-Posten werden anschließend, abhängig von Ihrem Steuersatz, der USt. ID-Nr. und dem Länder ISO-Code, gruppiert und als ELSTER Steuerdatenzeile berechnet.

##### MwSt.-Buchungsmatrix Einrichtung

In der MwSt.-Buchungsmatrix Einrichtung wurde das Feld `MwSt.-Art` hinzugefügt, in der festgelegt wird ob es sich um einen ermäßigten oder normalen Mehrwertsteuersatz handelt.
Diese Angabe ist für die OSS Meldung erforderlich

![MwSt.-Buchungsmatrix Einrichtung](/assets/images/365-business-eric/87595300685965a54d95ac2fa299bed22aec81fed15d8ab7791c80edd2b81aed.png)  

#### Welche OSS-Satzarten werden unterstützt?

One-Stop-Shop (OSS) sieht vier sogenannte Satzarten vor, die die unterschiedlichen Transaktionsarten darstellen:

| Satzart | Beschreibung | 
| --- | --- | 
| Warenlieferungen an Endkunden aus Deutschland | In dieser Satzart werden grenzüberschreitende B2C-Verkäufe, die aus Deutschland ausgeführt wurden, gemeldet. Es handelt sich hierbei ausschließlich um die Lieferung von Waren. | 
| Dienstleistungen | In dieser Satzart werden grenzüberschreitende B2C-Verkäufe von **Dienstleistungen**, die aus Deutschland heraus erbracht wurden, gemeldet. | 
| Lieferungen von Waren an Endkunden aus anderen Mitgliedstaaten | In dieser Satzart werden grenzüberschreitende B2C-Verkäufe, die bspw. aus Lagern im EU-Ausland bedient wurden, gemeldet.<br><br>_**Hinweis:** Diese Satzart wird aktuell nicht unterstützt._ |
| Dienstleistungen einer ausländischen Betriebsstätte in der EU | In dieser Satzart werden Dienstleistungen gemeldet, die von einer festen Niederlassung im EU-Ausland erbracht wurde.<br><br>_**Hinweis:** Diese Satzart wird aktuell nicht unterstützt._ |

> **Hinweis:** In der aktuellen Version von 365 business ERiC werden nur die Satzarten "Warenlieferungen an Endkunden aus Deutschland" und "Dienstleistungen" unterstützt.<br><br>Wir arbeiten an der Implementierung der weiteren Satzarten.

#### Wie ermittelt 365 business ERiC die OSS-Satzart?

Grundsätzlich werden an Hand der eingerichteten MwSt.-Abrechnung die MwSt.-Posten ermittelt, die für die Berechnung herangezogen werden. Über das Kennzeichen **EU Service** wird in der Folge nach der Satzart "Warenlieferungen an Endkunden aus Deutschland" oder "Dienstleistungen" differenziert.

#### So erstellen Sie eine One-Stop-Shop (OSS) CSV-Datei

![One-Stop-Shop (OSS) in der ELSTER Steuerdaten Karte](/assets/images/365-business-eric/873e116f44dfd2428f2452de4fb82662d3d168beaa3b3a7cfef23f3debeddf5c.png)  

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