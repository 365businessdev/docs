# Erste Schritte

In dieser Kurzanleitung wird erklärt, wie Sie eine Sanktionslistenprüfung für einen Debitor in Microsoft Dynamics 365 Business Central durchführen. Grundsätzlich ist dabei der Aufbau in allen unterstützten Entitäten (z.B. Kreditor, Kontakt, Mitarbeiter) identisch und kann entsprechend dieser Kurzanleitung angewandt werden.

<div class="alert alert-info">
	<i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Hinweis</strong>Zur optimalen Gewährleistung der Sanktionslistenprüfung empfehlen wir, die Prüfintervalle der einzelnen Entitäten (z.B. Debitor) in der <strong>Sanction Screen Einrichtung</strong> zu konfigurieren und die <a href="automated-screening.md">automatisierte Prüfung</a> zu verwenden.
</div>

## Voraussetzungen

 - Microsoft Dynamics 365 Business Central 2021 release wave 1 (18.0) oder neuer.

## Schritt 1: Installation von 365 business Sanction Screen

Öffnen Sie den **Marketplace für Erweiterungen** in Microsoft Dynamics 365 Business Central und suchen Sie nach **365 business Sanction Screen**.
Installieren Sie die App von Microsoft AppSource und warten Sie, bis die Installation abgeschlossen ist.

## Schritt 2: Sanktionsprüfungsergebnisse

Nach der Installation von 365 business Sanction Screen in Microsoft Dynamics 365 Business Central können Sie die Sanktionslistenprüfung für Debitor, Kreditoren, uvm. durchführen. Dabei wird die Entität auf mögliche Übereinstimmungen mit den Sanktionslisten geprüft und Ihnen die Ergebnisse angezeigt.

Weiterhin finden Sie im Infobereich der Kartenansichten die Ansicht **Sanktionsprüfung**, die Ihnen einen Überblick über die durchgeführten Prüfungen und mögliche Treffer gibt.

### Sanktionsprüfungsergebnisse - Mögliche Treffer gefunden

Wenn im Rahmen der Sanktionsprüfung mögliche Treffer gefunden wurden, wird in der Infobox folgendes angezeigt:

![Sanktionsprüfungsergebnisse - Mögliche Treffer gefunden](/assets/images/365-business-sanction-screen/sanctionscreen.indicator.de-DE.png)

### Sanktionsprüfungsergebnisse - Keine Treffer gefunden

Wenn im Rahmen der Sanktionsprüfung keine Treffer gefunden wurden, wird in der Infobox folgendes angezeigt:

![Sanktionsprüfungsergebnisse - Keine Treffer gefunden](/assets/images/365-business-sanction-screen/sanctionscreen.indicator-good.de-DE.png)

<div class="alert alert-info">
	<i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Hinweis</strong>Sofern der Datensatz bislang noch nicht geprüft wurde, wird dies ebenfalls entsprechend in der Infobox dargestellt. Führen Sie in diesem Fall die Sanktionslistenprüfung für den Datensatz durch, bzw. warten Sie, bis die <a href="automated-screening.md">automatisierte Prüfung</a> durchgeführt wurde.
</div>

## Schritt 3: Sanktionslistenprüfung für einen Debitor durchführen

1. Öffnen Sie die Seite **Debitoren** in Microsoft Dynamics 365 Business Central.
2. Wählen Sie den gewünschten **Debitor** aus.
3. Wählen Sie die Aktion **Sanktionsprüfung...** aus.

<div class="alert alert-info">
	<i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Hinweis</strong>War die Sanktionslistenprüfung erfolgreich und es wurden keine möglichen Übereinstimmungen gefunden erscheint folgende Meldung:<br>
    <img src="/assets/images/365-business-sanction-screen/sanctionscreen-no-matches-message.de-DE.png"><br>
    In diesem Fall ist keine weitere Bearbeitung notwendig.
</div>

### Schritt 3.1: Sanktionslistentreffer prüfen

1. Wurden mögliche Übereinstimmungen gefunden, erscheint folgende Meldung:<br>
    <img src="/assets/images/365-business-sanction-screen/sanctionscreen-matches-found-message.de-DE.png"><br>
    <br>
    Wählen Sie **OK**, um die möglichen Übereinstimmungen zu prüfen.
2. In der Seite **Sanktionstrefferposten** werden Ihnen die möglichen Übereinstimmungen angezeigt.
3. Wählen Sie den **Sanktionstreffer** aus, um weitere Informationen zu erhalten.

<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Gut zu wissen</strong>In der Detailansicht des Sanktionstrefferposten können Sie über die Aktion <strong>Zusätzliche Informationen abrufen...</strong> weitere Informationen, wie den Sanktionsgrund, die sanktionierende Behörde und mehr abrufen.
</div>

### Schritt 3.2: Sanktionslistentreffer bearbeiten

1. Wenn es sich bei dem Sanktionstreffer um eine **falsche Übereinstimmung** handelt, wählen Sie die Aktion **Treffer auf die Whitelist setzen...** aus.
2. In der Seite **Treffer auf die Whitelist setzen** können Sie den Sanktionstrefferposten auf die Whitelist setzen, um zukünftige Übereinstimmungen zu vermeiden. Hierfür müssen Sie eine Begründung eingeben und die Aktion mit **OK** bestätigen.<br>
   ![Treffer auf die Whitelist setzen](/assets/images/365-business-sanction-screen/sanctionscreen-whitelist-entry.de-DE.png)

<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Gut zu wissen</strong>Der Berechtigungssatz <strong>Sanktionsprüfung - Whitelist</strong> wird benötigt, um einen Sanktionstrefferposten auf die Whitelist zu setzen.
</div>

## Siehe auch

- [Einrichtung](setup.md)
- [Datenkataloge für Sanktionsprüfung](data-sources.md)
- [Automatisierte Sanktionslistenprüfung](automated-screening.md)