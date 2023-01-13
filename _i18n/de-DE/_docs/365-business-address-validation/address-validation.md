Bei der Adressvalidierung handelt es sich um eine, in Microsoft Dynamics 365 Business Central, implementierte Funktion zur Prüfung und ggf. Vervollständigung von bereits erfassten Adressen, sowie Adressen die bspw. über Schnittstellen (z.B. von Online Shops) an Microsoft Dynamics 365 Business Central übermittelt werden.

Mit Hilfe der Adressvalidierung ist es möglich den Datenbestand zu bereinigen und auf die Aktualität hin zu überprüfen.

![Adressvalidierung](/assets/images/365-business-address-validation/addressvalidation.de-DE.gif)

Die Adressvalidierung kann dabei über verschiedene Wege ausgeführt werden:

 - Automatische Validierung bei Adressänderung / -eingabe,
 - Manuelle Validierung über die Aktion *Adresse prüfen* und
 - Ausführung der Stapelverarbeitung (bspw. *Kontaktadressen prüfen*).

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Hinweis:</strong> Die automatische Validierung bei Adressänderung / -eingabe wird nur ausgeführt, wenn die <a href="../address-prediction/">Adressvorhersage</a> nicht verwendet wurde.
</div>

#### Wie kann ich die Adressdaten prüfen, bevor sie angewandt werden?

In der [Einrichtung für Adressvalidierung](../setup/) kann die **Adressenüberprüfung** aktiviert werden, um vor der Aktualisierung von Adressdaten die Originaladresse und die validierte Adresse vergleichen zu können.

![Adressenüberprüfung](/assets/images/365-business-address-validation/address-compare.de-DE.png)

##### Wie kann ich vorgeschlagene Adressdaten verändern?

Über den AssistEdit `...` Button neben dem jeweiligen Adressfeld kann der vorgeschlagene Feldwert manuell geändert werden. 365 business Address Validaition speichert diese manuelle Anpassung für die Zukunft um wiederholte Korrekturen zu verhindern.
Ihre manuelle Eingabe wird als Vorgabe definiert.

![Adressvalidierung](/assets/images/365-business-address-validation/address-compare.de-DE.gif)

#### Warum werden mehrere Adressen angezeigt?

In einigen Städten oder Orten werden zum Beispiel Straßennamen mehrfach verwendet und können so, ohne Angabe der korrekten Postleitzahl nicht eindeutig zugeordnet werden. Teilweise sind zudem Straßennamen sehr ähnlich und abgekürzte oder falsch geschriebene Straßennamen können so nicht eindeutig erkannt werden.

Werden bei der Validierung von Adressen mehrere Ergebnisse gefunden, die eventuell die korrekte Adresse sein könnten, wird die Seite **Adressvalidierungs-Ergebnisse** angezeigt. Diese Seite zeigt die potentiellen Adressen und erlaubt dem Anwender die korrekte Adresse auszuwählen.

### Siehe auch 
 - [Einrichtung für Adressvalidierung](setup/)
 - [Adressvorhersage](address-prediction/)