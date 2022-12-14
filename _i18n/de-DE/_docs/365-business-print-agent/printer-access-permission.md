> **Hinweis**<br>Diese Funktion wurde mit der 365 business Print Agent Version 18.1 hinzugefügt.<br>Bitte prüfen Sie, ob Sie über die aktuellste Version von 365 business Print Agent verfügen um diese Funktion zu verwenden.

In einigen Umgebungen, bspw. bei örtlich getrennten Niederlassungen, kann es sinnvoll sein Drucker nur für bestimmte Benutzer zugänglich zu machen. Dies kann über die **Drucker-Zugriffsberechtigungen** erreicht werden, indem einem Drucker eine oder mehrere [Benutzergruppen](https://learn.microsoft.com/de-DE/dynamics365/business-central/ui-define-granular-permissions) zugeordnet werden.

> **Gut zu wissen**<br>Sofern keine Benutzergruppen zu einem Drucker zugewiesen sind, ist dieser Drucker und die zugehörigen Druckereinstellungen, für alle Benutzer in Microsoft Dynamics 365 Business Central zugänglich.

## Was sind Drucker-Zugriffsberechtigungen?

Drucker-Zugriffsberechtigungen schränken die Sichtbarkeit von Druckern und Druckereinstellungen innerhalb von Microsoft Dynamics 365 Business Central ein. Ist ein Drucker mit dem aktuellen Benutzer nicht zugriffsberechtigt, so wir der jeweilige Drucker in Druckerauswahlen nicht angezeigt.

> **Wichtig**<br>Unabhängig von der Druckerauswahl kann auch ohne zugewiesene Drucker-Zugriffsberechtigung, bspw. über Hintergrundprozesse, auf einem Drucker gedruckt werden.

## Wie weise ich einem Drucker Benutzergruppen zu?

 1. Öffnen Sie die Seite **Drucker**.
 2. Klicken Sie auf **Weitere Optionen**.
 3. Klicken Sie auf **Zugehörig** und **Drucker-Zugriffsberechtigungen...**.
 4. Wählen Sie den **Benutzergruppen Code** aus.
 5. Schließen Sie die Seite.

### Siehe auch

 - [Zuweisen von Berechtigungen zu Benutzern und Gruppen (Microsoft Learn)](https://learn.microsoft.com/de-DE/dynamics365/business-central/ui-define-granular-permissions)