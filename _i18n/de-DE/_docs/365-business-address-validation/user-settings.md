Benutzer Einstellungen dienen dazu das Verhalten der Adressvalidierung pro Benutzer zu spezifizieren bzw. anzupassen.

> **Hinweis**<br>Als Administrator, mit dem Berechtigungssatz `SUPER`, können Sie globale Einstellungen und Einstellungen anderer Benutzer verändern oder definieren.

![User Settings](/assets/images/365-business-address-validation/user-settings.en-US.png)

#### Welche Einstellungen werden unterstützt?

In der aktuellen Version werden folgende Einstellungen unterstützt:

| Einstellung | Beschreibung | Standardwert | Mindestversion |
| --- | --- | --- | --- |
| Adressänderungen immer anwenden | Gibt an, dass Änderungen durch die Adressvalidierung und -vervollständigung automatisch und ohne vorherige Prüfung über den [Adressdatenvergleich](../address-validation/) angewandt werden. | _Nein_ | 17.4 |

#### Was sind globale Einstellungen?

Globale Einstellungen werden für alle Benutzer im System angewandt, sofern diese nicht eine spezifische Einstellung vorgenommen haben. Bei globale Einstellungen bleibt der Wert im Feld `Benutzer ID` leer.

### Siehe auch 
 - [Einrichtung für Adressvalidierung](../setup/)
 - [Adressvalidierung](../address-validation/)