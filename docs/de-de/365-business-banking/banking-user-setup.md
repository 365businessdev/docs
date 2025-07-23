# Banking Benutzer einrichten

Die Authentifizierung gegenüber der Bank erfolgt über die [finAPI](https://www.finapi.io/). Um 365 business Banking nutzen zu können, müssen Sie zunächst einen Benutzer in Microsoft Dynamics 365 Business Central einrichten. Dieser Benutzer wird für die Verbindung zu Ihrer Bank verwendet und hat alleinigen Zugriff auf die Banking-Funktionen.

<div class="alert alert-warn">
    <i class="fa-duotone fa-solid fa-triangle-exclamation fa-xl"></i>
    <strong>Achtung</strong>
    Die Benutzerinformationen werden ausschließlich in Microsoft Dynamics 365 Business Central gespeichert. Das Password wird dabei verschlüsselt und ist nicht einsehbar. Bitte stellen Sie sicher, dass Sie die Zugangsdaten sicher aufbewahren.<br>
    Es ist uns nicht möglich, die Benutzerinformationen oder das Passwort zu ändern oder zurückzusetzen. Sollten Sie das Passwort vergessen haben, müssen Sie den Benutzer löschen und neu anlegen.
</div>

## Schritt-für-Schritt-Anleitung

Gehen Sie wie folgt vor, um einen Banking-Benutzer in Microsoft Dynamics 365 Business Central einzurichten:

1. Wählen Sie **Banking Benutzer Einrichtung** in der Suche von Microsoft Dynamics 365 Business Central aus.
2. Vergeben Sie ein **sicheres Passwort** und speichern Sie dies an einem sicheren Ort, außerhalb von Microsoft Dynamics 365 Business Central.
3. Geben Sie die **E-Mail Adresse** des Benutzers ein.
4. Geben Sie die **Telefonnr.** des Benutzers ein.
5. Wählen Sie die Aktion **Authentifizieren** aus, um den Banking-Benutzer zu erstellen.

![Banking User Setup](/assets/images/365-business-banking/banking-user-setup.en-US.png)

<div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Hinweis</strong>
    Die <strong>Banking Benutzer ID</strong> wird automatisch generiert und entspricht der Microsoft Entra ID Tenant ID.<br>Diese ID kann nicht verändert werden.
</div>

<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Gut zu wissen</strong>
    Die E-Mail Adresse und die Telefonnr. dienen der Kommunikation mit finAPI und werden verwendet, wenn Rückfragen oder auffällige Ereignisse auftreten.
</div>

