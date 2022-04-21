Die Einrichtung für Adressvalidierung enthält die Konfiguration zur Integration der Adressvalidierung und -vorhersage in Microsoft Dynamics 365 Business Central.

Nach erfolgter Installation sind bereits, im Rahmen der Installationsroutinen, die Grundeinrichtung und einige Einrichtungsparameter gem. der häufigsten Wünsche und Anforderungen automatisch gesetzt.

![Einrichtung für Adressvalidierung](/assets/images/365-business-address-validation/setup.de-DE.png)

#### Einrichtungsparameter

| Feldname | Gruppe | Beschreibung | Standardwert |
| --- | --- | --- | --- |
| Adressvalidierung aktiviert | Adressvalidierung | Aktiviert oder deaktiviert die komplette Adressvalidierungsfunktion. | Aktiviert |
| Adressüberprüfung | Adressvalidierung | Aktiviert oder deaktiviert die zusätzliche Adressüberprüfung, nachdem die Adressvalidierung eine abweichende Adresse gefunden hat, die zur Eingabe passt.<br><br>Erfahren Sie mehr unter [Adressvalidierung](../address-validation/). | Aktiviert |
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
| Mitarbeiter | Adressvorhersage | Aktiviert oder deaktiviert die Adressvorhersage für Mitarbeiter. | Aktiviert |

#### Berechtigungen

Im Lieferumfang von 365 business Address Validation befinden sich zwei Berechtigungssätze:

![Berechtigungssätze](/assets/images/365-business-address-validation/permissions.de-DE.png)

Mit dem Berechtigungssatz **ADDRESSVALIDATION** erhalten die Anwender vollen Zugriff auf die Adressvalidierung, -vorhersage und Einrichtung für Adressvalidierung.

Mit dem Berechtigungssatz **ADDRVALIDATION-BASIC** erhalten die Anwender Zugriff auf die notwendigen Objekte zur Ausführung der Adressvalidierung und -vorhersage. Einrichtungsdaten können jedoch nicht verändert werden.

>**Hinweis**<br>Bitte beachten Sie, dass die Berechtigungssätze keine Berechtigungen für Standard-Tabellen, wie Debitor, Kreditor und Kontakt, enthalten.<br>Diese Berechtigungen sollten, sofern notwendig separat über individuelle oder Standardberechtigungsätze vergeben werden.