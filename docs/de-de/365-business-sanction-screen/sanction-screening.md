# Sanktionsprüfung

Sanktionsprüfungen können mit 365 business Sanction Screen in Microsoft Dynamics 365 Business Central für verschiedene Entitäten durchgeführt werden. Die Ergebnisse der Prüfungen werden in der jeweiligen Kartenansicht angezeigt und können weiter bearbeitet werden.

## Arten der Sanktionsprüfungen

365 business Sanction Screen sieht zwei Arten von Sanktionsprüfungen vor:

- Manuelle Sanktionsprüfung
- Automatisierte Sanktionsprüfung

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i>
    <strong>Hinweis</strong>Zur optimalen Gewährleistung der Sanktionslistenprüfung empfehlen wir, die Prüfintervalle der einzelnen Entitäten (z.B. Debitor) in der <strong>Sanction Screen Einrichtung</strong> zu konfigurieren und die <a href="automated-screening.md">automatisierte Prüfung</a> zu verwenden.
</div>

## Unterstützte Entitäten & Belege

Folgenden Microsoft Dynamics 365 Business Central Entitäten werden von 365 business Sanction Screen unterstützt:

- Debitor
  - Bankkonto
  - Lief.-an Adressen
- Kreditor
  - Bankkonto
  - Zahlungsempfängeradressen
  - Bestelladressen
- Kontakt
- Bankkonto
- Mitarbeiter

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i>
    <strong>Hinweis</strong>Die Sanktionsprüfung mit 365 business Sanction Screen kann individuell für benutzerdefinierte Entitäten erweitern.<br>Weitere Informationen finden Sie <a href="../../al-developer/al-developer.md">hier</a>.
</div>

Zusätzlich werden folgende Belege unterstützt:

- Verkaufsbelege
  - Verkaufsangebot
  - Verkaufsauftrag
  - Verkaufsrechnung
  - Verkaufsgutschrift
- Einkaufsbelege
  - Einkaufsangebot
  - Einkaufsbestellung

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg"></i>
    <strong>Gut zu wissen</strong>Bei der Sanktionsprüfung von Belegen werden die verschiedenen Adressen (z.B. Lief.-an Adresse), sofern abweichend, einzeln geprüft. Dabei wird zusätzlich geprüft, ob die Adresse bereits geprüft wurde (z.B. Debitoradresse) und die entsprechende Quelle angezeigt:<br>
    <img src="/assets/images/365-business-sanction-screen/sanction-screen-with-sources.de-DE.png" alt="Sanktionsprüfung mit Quellenangabe">
</div>

## Sanktionsprüfung durchführen

Gehen Sie wie folgt vor, um eine Sanktionsprüfung für durchzuführen:

1. Öffnen Sie die Seite (z.B. Debitoren) in Microsoft Dynamics 365 Business Central.
2. Wählen Sie den gewünschten Datensatz aus.
3. Gehen Sie mit der Maus über die Sanktionsprüfungsanzeige und wählen Sie die Aktion **Sanktionsprüfung starten** aus.

![Sanktionsprüfung starten](/assets/images/365-business-sanction-screen/sanction-screen-check.de-DE.gif)

<div class="alert alert-info">
	<i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i>
    <strong>Hinweis</strong>War die Sanktionslistenprüfung erfolgreich und es wurden keine möglichen Übereinstimmungen gefunden erscheint folgende Meldung:<br>
    <img src="/assets/images/365-business-sanction-screen/sanctionscreen-no-matches-message.de-DE.png"><br>
    In diesem Fall ist keine weitere Bearbeitung notwendig.
</div>

### Sanktionslistentreffer prüfen

Wurden mögliche Übereinstimmungen gefunden, erscheint folgende Meldung:

![Sanktionsprüfungsergebnisse - Mögliche Treffer gefunden](/assets/images/365-business-sanction-screen/sanctionscreen-matches-found-message.de-DE.png)

Zum Prüfen der möglichen Übereinstimmungen gehen Sie wie folgt vor:

1. In der Seite **Sanktionstrefferposten** werden Ihnen die möglichen Übereinstimmungen angezeigt.
2. Wählen Sie den **Sanktionstreffer** aus, um weitere Informationen zu erhalten.

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg"></i>
    <strong>Gut zu wissen</strong>In der Detailansicht des Sanktionstrefferposten können Sie über die Aktion <strong>Zusätzliche Informationen abrufen...</strong> weitere Informationen, wie den Sanktionsgrund, die sanktionierende Behörde und mehr abrufen.
</div>

### Sanktionslistentreffer bearbeiten

Wenn es sich bei dem Sanktionstreffer um eine **falsche Übereinstimmung** handelt, gehen Sie wie folgt vor:

1. wählen Sie die Aktion **Treffer auf die Whitelist setzen...** aus.
2. In der Seite **Treffer auf die Whitelist setzen** können Sie den Sanktionstrefferposten auf die Whitelist setzen, um zukünftige Übereinstimmungen zu vermeiden. Hierfür müssen Sie eine Begründung eingeben und die Aktion mit **OK** bestätigen.<br>
   ![Treffer auf die Whitelist setzen](/assets/images/365-business-sanction-screen/sanctionscreen-whitelist-entry.de-DE.png)

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg"></i>
    <strong>Gut zu wissen</strong>Der Berechtigungssatz <strong>Sanktionsprüfung - Whitelist</strong> wird benötigt, um einen Sanktionstrefferposten auf die Whitelist zu setzen.
</div>

# Siehe auch

- [Einrichtung](setup.md)
- [Datenkataloge für Sanktionsprüfung](data-sources.md)
- [Automatisierte Sanktionslistenprüfung](automated-screening.md)
