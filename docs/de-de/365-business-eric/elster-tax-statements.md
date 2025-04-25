# ELSTER Steuerdaten

Unter **ELSTER Steuerdaten** werden alle Anträge und Einreichungen zu [ELSTER Steuerdatenarten](elster-tax-data-type.md) zusammengefasst. 

![ELSTER Steuerdaten](/assets/images/365-business-eric/elster-tax-data-list-de.png)

Die Liste erlaubt die Filterung nach [Datenarten](elster-tax-data-type.md), sowie über die Microsoft Dynamics 365 Business Central Standard Filter.

## Arbeiten mit ELSTER Steuerdaten
Sie erstellen ELSTER Steuerdaten um diese an die deutschen Steuerbehörden elektronisch zu übermitteln und Ihre jeweiligen Meldepflichten gegenüber Ihrem Finanzamt bzw. dem Bundeszentralamt für Steuern zu erfüllen.

Sie können für alle auf der Seite [ELSTER Steuerdatenarten](elster-tax-data-type.md) beschriebenen Datenarten elektronische Übermittlungen vornehmen.

Die **ELSTER Steuerdaten** erlauben die Erfassung von Steuerdaten für verschiedene [Datenarten](elster-tax-data-type.md) und stellen Ihnen zudem eine historische Übersicht der übermittelten bzw. eingereichten Steuerdaten zur Verfügung.<br>
Die Berechnung der Bemessungsgrundlagen und MwSt.-Beträge werden dabei von der 365 business ERiC Extension unterstützt und die entsprechenden Steuerkennzahlen mit Ihren Werten vor der Versendung an die deutschen Steuerbehörden dargestellt.

## So erstellen Sie eine ELSTER Steuerdatei
1. Wählen Sie **ELSTER Steuerdaten** in der Suche von Business Central.
2. Klicken Sie auf **Neu**.
3. Es erscheint nun die Auswahl der unterstützten [Datenarten](elster-tax-data-type.md).<br><br>Wählen Sie die Datenart für die Sie eine ELSTER Steuerdatei erstellen möchten.
4. Geben Sie eine **Beschreibung** ein.
5. Geben Sie ein **Startdatum** ein, für welches die Meldung gilt.<br><br>**Beispiel:**<br>Geben Sie 01.01.2021 an, wenn Sie eine USt.-Voranmeldung für Januar 2021 übermitteln möchten.
6. Geben Sie die weiteren datenartspezifischen Optionen in den Gruppen **Berechnung** und **Optionen** ein.<br><br>Weitere Informationen entnehmen Sie bitte der jeweiligen Datenart-Dokumentation.
7. Klicken Sie auf **Berechnen**, um die Steuerkennzahlen für die Datenart zu berechnen.
8. Prüfen und korrigieren Sie bei Bedarf die ermittelten Werte der Steuerkennzahlen oder erfassen Sie weitere Steuerkennzahlen.
9. Klicken Sie auf **XML-Datei übertragen**, um die Steuerdatei einzureichen und elektronisch an die deutschen Steuerbehörden zu übermitteln.

Die Datenartspezifische Dokumentation finden Sie hier:

| Datenart  | Dokumentation |
| --- | --- |
| **USt.-Voranmeldung** | [Dokumentation](elster-sales-vat-adv-notification.md) | 
| **Zusammenfassende Meldung** | [Dokumentation](elster-recapulative-statement.md) | 
| **Dauerfristverlängerung** | [Dokumentation](elster-permanent-time-limit-extension.md) | 
| **Antrag auf Fristverlängerung** | [Dokumentation](elster-request-for-time-extension.md) | 
| **Umsatzsteuererklärung** | [Dokumentation](elster-annual-vat-return.md) |
| **One-Stop-Shop (OSS)** | [Dokumentation](bop-one-stop-shop.md) |

### Dateien
Auf Basis der erfassten Daten wird ein sogenanntes **XML Übertragungsdokument** (*kurz XML-Datei*) erstellt. Diese Datei wird im rechten Bereich der ELSTER Steuerdaten Karte im Bereich **Dateien** angezeigt und kann heruntergeladen werde.

Darüber hinaus werden auch die Rückmeldungen der ELSTER Server, nach erfolgter Übertragung, an die ELSTER Steuerdaten angehangen. Üblicherweise sind dies folgende Dateien:
 - **XML Übertragungsbestätigung**<br>Die XML Übertragungsbestätigt enthält die ELSTER Transfer Ticketnummer, den Rückgabecode und die Rückgabemeldung.
 - **Übertragungsbestätigung**<br>Hierbei handelt es sich um eine PDF-Datei, die das Steuerdatendokument repräsentiert und die übermittelten Werte enthält. Dieses Dokument dient zum Nachweis der erfolgten Übertragung.

<div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Hinweis</strong> Abweichend zu den sonstigen Steuerdatenarten wird bei der Steuerdatenart <b>One-Stop-Shop (OSS)</b> keine XML-Datei erstellt und es steht aktuell keine elektronische Übermittlung zur Verfügung.<br>Stattdessen wird für die Steuerdatenart <b>One-Stop-Shop (OSS)</b> eine CSV-Datei erstellt, welche im Onlineportal "Mein BOP" importiert werden kann.
</div>

# Siehe auch
 - [ELSTER Steuerdatenarten](elster-tax-data-type.md)
 - [Datenart - USt.-Voranmeldung - Dokumentation](elster-sales-vat-adv-notification.md)
 - [Datenart - Zusammenfassende Meldung - Dokumentation](elster-recapulative-statement.md)
 - [Datenart - Dauerfristverlängerung - Dokumentation](elster-permanent-time-limit-extension.md)
 - [Datenart - Antrag auf Fristverlängerung - Dokumentation](elster-request-for-time-extension.md)
 - [Datenart - Umsatzsteuererklärung - Dokumentation](elster-annual-vat-return.md)
 - [Datenart - One-Stop-Shop (OSS) - Dokumentation](bop-one-stop-shop.md)
