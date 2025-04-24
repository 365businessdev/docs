# Drucker-Zugriffsberechtigungen

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i> <strong>Hinweis</strong> Diese Funktion wurde mit der 365 business Print Agent Version 18.1 hinzugefügt.<br>Bitte prüfen Sie, ob Sie über die aktuellste Version von 365 business Print Agent verfügen um diese Funktion zu verwenden.
</div>

In einigen Umgebungen, bspw. bei örtlich getrennten Niederlassungen, kann es sinnvoll sein Drucker nur für bestimmte Benutzer zugänglich zu machen. Dies kann über die **Drucker-Zugriffsberechtigungen** erreicht werden, indem einem Drucker eine oder mehrere [Benutzergruppen](https://learn.microsoft.com/de-DE/dynamics365/business-central/ui-define-granular-permissions) zugeordnet werden.

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg"></i> <strong>Gut zu wissen</strong>Sofern keine Benutzergruppen zu einem Drucker zugewiesen sind, ist dieser Drucker und die zugehörigen Druckereinstellungen, für alle Benutzer in Microsoft Dynamics 365 Business Central zugänglich.<br>
    <br>
    Benutzer die, den Berechtigungssatz "365 business Print Agent - Full Access" (<code>bdev.PRINTAGENTSETUP</code>) verwenden gelten als administrative Benutzer und werden von der Einschränkung der Auswahl von Druckern, über die Drucker-Zugriffsberechtigungen, ausgenommen.<br>
    Dies soll Administratoren ermöglichen Drucker, auf die Sie generell keinen Zugriff haben, anderen Benutzern zuzuweisen.
</div>

## Was sind Drucker-Zugriffsberechtigungen?

Drucker-Zugriffsberechtigungen schränken die Sichtbarkeit von Druckern und Druckereinstellungen innerhalb von Microsoft Dynamics 365 Business Central ein. Ist ein Drucker mit dem aktuellen Benutzer nicht zugriffsberechtigt, so wir der jeweilige Drucker in Druckerauswahlen nicht angezeigt.

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i> <strong>Wichtig</strong> Unabhängig von der Druckerauswahl kann auch ohne zugewiesene Drucker-Zugriffsberechtigung, bspw. über Hintergrundprozesse, auf einem Drucker gedruckt werden.
</div>

## Wie weise ich einem Drucker Benutzergruppen zu?

 1. Öffnen Sie die Seite **Drucker**.
 2. Klicken Sie auf **Weitere Optionen**.
 3. Klicken Sie auf **Zugehörig** und **Drucker-Zugriffsberechtigungen...**.
 4. Wählen Sie den **Benutzergruppen Code** aus.
 5. Schließen Sie die Seite.

# Siehe auch

 - [Zuweisen von Berechtigungen zu Benutzern und Gruppen (Microsoft Learn)](https://learn.microsoft.com/de-DE/dynamics365/business-central/ui-define-granular-permissions)