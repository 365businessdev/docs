Als Teil der 365 business Address Validation App wird das Rollencenter *Adressvalidierung* ausgeliefert. Das Rollencenter gibt Ihnen einen Überblick über die Adressdatenqualität der in der [Einrichtung für Adressvalidierung](../setup/) aktivierten Integrationen.

![Adressvalidierung Rollencenter](/assets/images/365-business-address-validation/rolecenter.de-DE.png)

Über die Stapel im Rollencenter (z.B. *Kontakte*) erhalten Sie einen schnellen Überblick über die Anzahl der geprüften und ungeprüften Adressdaten in Microsoft Dynamics 365 Business Central. Diese Ansicht ist gerade in Bezug auf die Anbindung von Fremdsystemen, wie Online Shops oder Marktplätzen, interessant, da neue und ggf. ungeprüfte Adressen direkt angezeigt werden.

Mit einem Klick auf die jeweiligen Stapel, oder über die Suche  gelangen Sie in Ansicht **Status der Adressvalididerung**, welche die geprüften und ungeprüften Adressdaten anzeigt.

>**Hinweis**<br>Über den Status der Adressvalidierung werden ausschließlich Tabellen überwacht, für die, die Adressvalidierung in der [Einrichtung für Adressvalidierung](../setup/) aktiviert ist.

![Status der Adressvalidierung](/assets/images/365-business-address-validation/address-validation-status.de-DE.png)

In der Ansicht Status der Adressvalididerung finden Sie jeweils die zuletzt erfasste Adresse, des jeweiligen Datensatz und können mit einem Klick auf die Spalte **Datensatz** den zugehörigen Quelldatensatz anzeigen. Weiterhin haben Sie hier die Möglichkeit eine Adresse manuell überprüfen zu lassen, indem die Aktion **Adresse überprüfen** ausgewählt wird.

#### Kann ich Adressen manuell prüfen, um eine weitere Validierung zu verhindern?

In einigen Fällen kann es Sinn machen einen Adresse manuell zu prüfen. Dies kann ebenfalls über die Ansicht Status der Adressvalididerung geschehen. Hierzu steht unter Aktionen die Aktion **Adresse manuell geprüft** zur Verfügung. Bis zur nächsten Änderung an dem Quelldatensatz erfolgt keine weitere Prüfung und der Adressdatensatz wird als **Geprüft** gekennzeichnet.

### Siehe auch 
 - [Einrichtung für Adressvalidierung](setup/)
 - [Adressvalidierung](address-validation/)