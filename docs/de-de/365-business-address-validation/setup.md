# Einrichtung

Die Einrichtung für Adressvalidierung enthält die Konfiguration zur Integration der Adressvalidierung und -vorhersage in Microsoft Dynamics 365 Business Central.

Nach erfolgter Installation sind bereits, im Rahmen der Installationsroutinen, die Grundeinrichtung und einige Einrichtungsparameter gem. der häufigsten Wünsche und Anforderungen automatisch gesetzt.

![Einrichtung für Adressvalidierung](/assets/images/365-business-address-validation/setup.de-DE.png)

## Einrichtungsparameter

| Feldname | Gruppe | Beschreibung | Standardwert |
| --- | --- | --- | --- |
| Adressvalidierung aktiviert | Adressvalidierung | Aktiviert oder deaktiviert die automatische Adressvalidierungsfunktion. | Deaktiviert |
| Anwendungsbereich für Adressvalidierung | Adressvalidierung | Gibt die Art der Sitzungen an, bei denen das Addressvalidierung Feature angewandt wird. Hierbei kann unterschieden werden nach: <ul><li><strong>Alle</strong> - Die automatische Adressvalidierung ist für alle Sitzungsarten aktiviert.</li><li><strong>Nur aktiviert für Client-Sitzungen mit Benutzeroberfläche</strong> - Die automatische Adressvalidierung ist nur für Sitzungsarten mit Benutzeroberfläche, wie dem Web Client, aktiviert.</li><li><strong>Nur aktiviert für Sitzungen ohne Benutzeroberfläche</strong> - Die automatische Adressvalidierung ist nur für Sitzungsarten ohne Benutzeroberfläche, wie Web Services oder dem Task Scheduler, aktiviert.</li></ul> | Alle |
| Adressüberprüfung | Adressvalidierung | Aktiviert oder deaktiviert die zusätzliche Adressüberprüfung, nachdem die Adressvalidierung eine abweichende Adresse gefunden hat, die zur Eingabe passt.<br><br>Erfahren Sie mehr unter [Adressvalidierung](address-validation.md). | Aktiviert |
| Kontakt | Adressvalidierung | Aktiviert oder deaktiviert die automatische Adressüberprüfung für Kontakte. | Aktiviert |
| Debitor | Adressvalidierung | Aktiviert oder deaktiviert die automatische Adressüberprüfung für Debitoren. | Aktiviert |
| Kreditor | Adressvalidierung | Aktiviert oder deaktiviert die automatische Adressüberprüfung für Kreditoren. | Aktiviert |
| Verkaufsbelege | Adressvalidierung | Aktiviert oder deaktiviert die automatische Adressüberprüfung für Verkaufsbelege, wie Verkaufsaufträge, -angebote und -rechnungen. | Aktiviert |
| Lieferadresse | Adressvalidierung | Aktiviert oder deaktiviert die automatische Adressüberprüfung für Lief.-an Adressen. | Deaktiviert |
| Einkaufsbelege | Adressvalidierung | Aktiviert oder deaktiviert die automatische Adressüberprüfung für Einkaufsbelege, wie Einkaufsbestellungen, -anfragen und -rechnungen. | Aktiviert |
| Auftragsadressen | Adressvalidierung | Aktiviert oder deaktiviert die automatische Adressüberprüfung für Auftragsadressen. | Deaktiviert |
| Alternative Adressen | Adressvalidierung | Aktiviert oder deaktiviert die automatische Adressüberprüfung für Alternative Adressen. | Deaktiviert |
| Adressvorhersage aktiviert | Adressvorhersage | Aktiviert oder deaktiviert die komplette Adressvorhersagefunktion. | Aktiviert |
| Kontakt | Adressvorhersage | Aktiviert oder deaktiviert die Adressvorhersage für Kontakte. | Aktiviert |
| Debitor | Adressvorhersage | Aktiviert oder deaktiviert die Adressvorhersage für Debitoren. | Aktiviert |
| Kreditor | Adressvorhersage | Aktiviert oder deaktiviert die Adressvorhersage für Kreditoren. | Aktiviert |
| Verkaufsbelege | Adressvorhersage | Aktiviert oder deaktiviert die Adressvorhersage für Verkaufsbelege, wie Verkaufsaufträge, -angebote und -rechnungen. | Aktiviert |
| Lieferadresse | Adressvorhersage | Aktiviert oder deaktiviert die Adressvorhersage für Lief.-an Adressen. | Deaktiviert |
| Einkaufsbelege | Adressvorhersage | Aktiviert oder deaktiviert die Adressvorhersage für Einkaufsbelege, wie Einkaufsbestellungen, -anfragen und -rechnungen. | Aktiviert |
| Mitarbeiter | Adressvorhersage | Aktiviert oder deaktiviert die Adressvorhersage für Mitarbeiter. | Aktiviert |
| Ressource | Adressvorhersage | Aktiviert oder deaktiviert die Adressvorhersage für Ressourcen. | Aktiviert |

## Berechtigungen

Im Lieferumfang von 365 business Address Validation befinden sich zwei Berechtigungssätze:

![Berechtigungssätze](/assets/images/365-business-address-validation/permissions.de-DE.png)

Mit dem Berechtigungssatz **ADDRESSVALIDATION** erhalten die Anwender vollen Zugriff auf die Adressvalidierung, -vorhersage und Einrichtung für Adressvalidierung.

Mit dem Berechtigungssatz **ADDRVALIDATION-BASIC** erhalten die Anwender Zugriff auf die notwendigen Objekte zur Ausführung der Adressvalidierung und -vorhersage. Einrichtungsdaten können jedoch nicht verändert werden.

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i>
    <strong>Hinweis</strong>Bitte beachten Sie, dass die Berechtigungssätze keine Berechtigungen für Standard-Tabellen, wie Debitor, Kreditor und Kontakt, enthalten.<br>Diese Berechtigungen sollten, sofern notwendig, separat über individuelle oder Standardberechtigungsätze vergeben werden.
</div>