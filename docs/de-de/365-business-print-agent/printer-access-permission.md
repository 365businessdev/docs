# Drucker-Zugriffsberechtigungen

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i> <strong>Hinweis:</strong>
	Diese Funktion ist ab Version <b>18.1</b> des 365 business Print Agent verfügbar.<br>
	Bitte stellen Sie sicher, dass Sie die aktuelle Version verwenden.
</div>

In bestimmten Szenarien – etwa bei räumlich getrennten Niederlassungen – kann es sinnvoll sein, den Zugriff auf Drucker auf bestimmte Benutzer zu beschränken.  
Dies geschieht über **Drucker-Zugriffsberechtigungen**, indem einem Drucker eine oder mehrere [Benutzergruppen](https://learn.microsoft.com/de-DE/dynamics365/business-central/ui-define-granular-permissions) zugewiesen werden.

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg"></i> <strong>Gut zu wissen:</strong>
	Werden <b>keine</b> Benutzergruppen zugewiesen, ist der Drucker samt zugehöriger Druckereinstellungen für <b>alle Benutzer</b> in Microsoft Dynamics 365 Business Central sichtbar und nutzbar.<br>
    <br>
	Benutzer mit dem Berechtigungssatz <b>365 business Print Agent – Full Access</b> (<code>bdev.PRINTAGENTSETUP</code>) gelten als administrative Benutzer und sind von den Zugriffsbeschränkungen ausgenommen.<br>
    So können Administratoren auch Drucker verwalten, auf die sie selbst keinen Zugriff haben.
</div>

## Was sind Drucker-Zugriffsberechtigungen?

Drucker-Zugriffsberechtigungen beschränken die **Sichtbarkeit** von Druckern und deren Konfigurationen in Microsoft Dynamics 365 Business Central.
Ist ein Benutzer **nicht berechtigt**, wird der Drucker in den **Druckerauswahlen** nicht angezeigt.

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i> <strong>Wichtig:</strong>
	Auch wenn ein Benutzer keinen Zugriff auf einen Drucker hat, kann dieser Drucker dennoch über <b>Hintergrundprozesse</b> angesteuert werden.
</div>

## Wie weise ich einem Drucker Benutzergruppen zu?

 1. Öffnen Sie die Seite **Drucker**.
 2. Klicken Sie auf **Weitere Optionen**.
 3. Wählen Sie **Zugehörig** und **Drucker-Zugriffsberechtigungen...**.
 4. Fügen Sie einen oder mehrere **Benutzergruppen Code** aus.
 5. Schließen Sie die Seite.

### Siehe auch

 - [Zuweisen von Berechtigungen zu Benutzern und Gruppen (Microsoft Learn)](https://learn.microsoft.com/de-DE/dynamics365/business-central/ui-define-granular-permissions)