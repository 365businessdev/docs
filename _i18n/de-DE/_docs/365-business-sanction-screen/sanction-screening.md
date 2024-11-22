Sanktionsprüfungen können mit 365 business Sanction Screen in Microsoft Dynamics 365 Business Central für verschiedene Entitäten durchgeführt werden. Die Ergebnisse der Prüfungen werden in der jeweiligen Kartenansicht angezeigt und können weiter bearbeitet werden.

### Arten der Sanktionsprüfungen

365 business Sanction Screen sieht zwei Arten von Sanktionsprüfungen vor:

- Manuelle Sanktionsprüfung
- Automatisierte Sanktionsprüfung

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Hinweis:</strong>Zur optimalen Gewährleistung der Sanktionslistenprüfung empfehlen wir, die Prüfintervalle der einzelnen Entitäten (z.B. Debitor) in der <strong>Sanction Screen Einrichtung</strong> zu konfigurieren und die <a href="../automated-screening/">automatisierte Prüfung</a> zu verwenden.
</div>

### Unterstützte Entitäten

Folgenden Microsoft Dynamics 365 Business Central Entitäten werden von 365 business Sanction Screen unterstützt:

- Debitor
- Kreditor
- Kontakt
- Bankkonto
- Mitarbeiter

<div class="alert alert-notice">
    <i class="fa-solid fa-notes"></i> <strong>Gut zu wissen:</strong>365 business Sanction Screen wird kontinuierlich weiterentwickelt und um zusätzliche Entitäten erweitert. Bitte prüfen Sie regelmäßig auf Updates und neue Funktionen.<br>
    Darüber hinaus können Sie die Sanktionsprüfung individuell für benutzerdefinierte Entitäten erweitern. Weitere Informationen finden Sie <a href="../../al-developer/">hier</a>.
</div>

### Sanktionsprüfung durchführen

Gehen Sie wie folgt vor, um eine Sanktionsprüfung für durchzuführen:

1. Öffnen Sie die Seite (z.B. Debitoren) in Microsoft Dynamics 365 Business Central.
2. Wählen Sie den gewünschten Datensatz aus.
3. Wählen Sie die Aktion **Sanktionsprüfung...** aus, um die Sanktionsprüfung zu starten.

<div class="alert alert-info">
	<i class="fa-solid fa-lightbulb"></i> <strong>Hinweis:</strong>War die Sanktionslistenprüfung erfolgreich und es wurden keine möglichen Übereinstimmungen gefunden erscheint folgende Meldung:<br>
    <img src="/assets/images/365-business-sanction-screen/sanctionscreen-no-matches-message.de-DE.png"><br>
    In diesem Fall ist keine weitere Bearbeitung notwendig.
</div>

#### Sanktionslistentreffer prüfen

Wurden mögliche Übereinstimmungen gefunden, erscheint folgende Meldung:

![Sanktionsprüfungsergebnisse - Mögliche Treffer gefunden](/assets/images/365-business-sanction-screen/sanctionscreen-matches-found-message.de-DE.png)

Zum Prüfen der möglichen Übereinstimmungen gehen Sie wie folgt vor:

1. In der Seite **Sanktionstrefferposten** werden Ihnen die möglichen Übereinstimmungen angezeigt.
2. Wählen Sie den **Sanktionstreffer** aus, um weitere Informationen zu erhalten.

<div class="alert alert-notice">
    <i class="fa-solid fa-notes"></i> <strong>Gut zu wissen:</strong>In der Detailansicht des Sanktionstrefferposten können Sie über die Aktion <strong>Zusätzliche Informationen abrufen...</strong> weitere Informationen, wie den Sanktionsgrund, die sanktionierende Behörde und mehr abrufen.
</div>

#### Sanktionslistentreffer bearbeiten

Wenn es sich bei dem Sanktionstreffer um eine **falsche Übereinstimmung** handelt, gehen Sie wie folgt vor:

1. wählen Sie die Aktion **Treffer auf die Whitelist setzen...** aus.
2. In der Seite **Treffer auf die Whitelist setzen** können Sie den Sanktionstrefferposten auf die Whitelist setzen, um zukünftige Übereinstimmungen zu vermeiden. Hierfür müssen Sie eine Begründung eingeben und die Aktion mit **OK** bestätigen.<br>
   ![Treffer auf die Whitelist setzen](/assets/images/365-business-sanction-screen/sanctionscreen-whitelist-entry.de-DE.png)

<div class="alert alert-notice">
    <i class="fa-solid fa-notes"></i> <strong>Gut zu wissen:</strong>Der Berechtigungssatz <strong>Sanktionsprüfung - Whitelist</strong> wird benötigt, um einen Sanktionstrefferposten auf die Whitelist zu setzen.
</div>

### Siehe auch

- [Einrichtung](../setup/)
- [Datenkataloge für Sanktionsprüfung](../data-sources/)
- [Automatisierte Sanktionslistenprüfung](../automated-screening/)
