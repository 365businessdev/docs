---
title: Abonnenten
---

Als Abonnenten werden die Mitglieder einer Abonnentenliste bezeichnet. Abonnenten werden in Microsoft Dynamics 365 Business Central als Kontakt verwaltet. Jeder Abonnent repräsentiert dabei in Microsoft Dynamics 365 Business Central einen Kontakt, wobei dieser Kontakt auch in anderen Abonnentenlisten wiederverwendet werden kann.

In der Seite Abonnenten können Sie den Abonnentstatus ändern und das Abonnent starten (_Subscribe_) oder beenden (_Unsubscribe_). Weiterhin können Sie die Mailchimp Tags (Label) aufrufen und Ihre Abonnenten mit frei wählbaren oder wiederverwendbaren Schlagwörter organisieren.

Sämtliche Änderungen werden direkt an Mailchimp übertragen und es Bedarf keiner manuellen Synchronisation.

![Abonnenten](/assets/images/365-business-mailchimp-integration/audience-de.png)

#### Wie erstelle ich neue Abonnenten?

1. Öffnen Sie die Seite **Abonnentenliste** und wählen Sie die gewünschte Abonnentenliste aus.
2. Klicken Sie auf die Aktion **Abonnenten** oder die Abonnentenlistennr. um die Seite **Abonnenten** zu öffnen.
3. Klicken Sie auf **Neu**.
4. Wählen Sie im Feld **Kontakt Nr.** den gewünschten Kontakt aus, oder erstellen Sie einen neuen Kontakt.

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Hinweis:</strong>Neue Abonnenten erhalten, je nach Konfiguration in Mailchimp, ggf. automatisch eine Opt-In Benachrichtung von Mailchimp. Bis diese vom potentiellen Abonnenten bestätigt wurde befindet sich der Abonnementstatus im Status "Ausstehend".
</div>

#### Wie lösche ich einen Abonnenten?

1. Öffnen Sie die Seite **Abonnentenliste** und wählen Sie die gewünschte Abonnentenliste aus.
2. Klicken Sie auf die Aktion **Abonnenten** oder die Abonnentenlistennr. um die Seite **Abonnenten** zu öffnen.
3. Wählen Sie den Abonnenten aus und klicken Sie auf **Löschen**.

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Hinweis:</strong>Bitte beachten Sie, dass Abonnenten in Mailchimp nicht gelöscht, sondern nur bereinigt werden. Dies soll verhindern, dass die Abonnenten, trotz vorheriger Abmeldung, erneut eingetragen und versehentlich kontaktiert werden.<br><br>Wir empfehlen Ihnen stattdessen den <b>Abonnementstatus</b> zu ändern.
</div>

#### Wie ändere ich den Abonnementstatus eines Abonnenten?

1. Öffnen Sie die Seite **Abonnentenliste** und wählen Sie die gewünschte Abonnentenliste aus.
2. Klicken Sie auf die Aktion **Abonnenten** oder die Abonnentenlistennr. um die Seite **Abonnenten** zu öffnen.
3. Je nach aktuellem Abonnementstatus ist die Aktion **Abonnenment beenden** (_Unsubscribe_) oder **Abonnieren** (_Subscribe_) sichtbar. Gehen Sie folgt vor:<br>
    - Klicken Sie auf die Aktion **Abonnenment beenden** um das Abonnement für den Abonnenten zu beenden.<br>
    - Klicken Sie auf die Aktion **Abonnieren** um das Abonnement für Abonnenten zu beginnen.<br>
        <div class="alert alert-notice">
            <i class="fa-light fa-hand-point-up fa-lg" style="--fa-secondary-color: #FF0000; --fa-primary-color: #111111; --fa-secondary-opacity: 0.7"></i> <strong>Wichtig:</strong>Bitte beachten Sie, dass in diesem Fall kein nachweisbares Opt-In vorliegt.
        </div>

#### Wie füge ich Tags (Label) zu einem Abonnenten hinzu?

![Abonnenten Tags](/assets/images/365-business-mailchimp-integration/audience-tag-de.png)

1. Öffnen Sie die Seite **Abonnentenliste** und wählen Sie die gewünschte Abonnentenliste aus.
2. Klicken Sie auf die Aktion **Abonnenten** oder die Abonnentenlistennr. um die Seite **Abonnenten** zu öffnen.
3. Wählen Sie den Abonnenten aus.
4. Klicken Sie auf die Aktion **Tags**.
5. Geben Sie einen neuen Tag im Feld **Tag** aus, oder wählen Sie einen bestehenden Tag aus.
    <div class="alert alert-info">
        <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Hinweis:</strong>Neue Tags werden automatisch angelegt und müssen nicht vor der Verwendung manuell erstellt werden.
    </div>

### Siehe auch
 - [Abonnentenlisten](audience-lists.md)