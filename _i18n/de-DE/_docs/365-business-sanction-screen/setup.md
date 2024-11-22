Durch die Installation von 365 business Sanction Screen ist die grundsätzliche Einrichtung bereits abgeschlossen und Sie sind bereit um die Sanktionslistenprüfung in Microsoft Dynamics 365 Business Central vorzunehmen.
Hierbei handelt es sich jedoch um eine Standardeinrichtung, die abhängig von den individuellen Anforderungen Ihres Unternehmens angepasst werden sollte.

### Bevor Sie starten

Bevor Sie mit der Sanktionslistenprüfung beginnen, sollten Sie folgende Punkte überprüfen:

- **Datenkataloge:** Überprüfen Sie die Datenkataloge, die für die Sanktionslistenprüfung verwendet werden sollen. 365 business Sanction Screen bietet eine umfassende Abdeckung von über 240 Datenquellen, die für die Sanktionslistenprüfung genutzt werden können. Weitere Informationen finden Sie [hier](data-sources/).
- **Intervalle:** Überprüfen Sie die Intervalle, in denen die Sanktionslistenprüfung durchgeführt werden soll. 365 business Sanction Screen ermöglicht die vollständig automatisierte Sanktionsprüfung mit konfigurierbaren Intervallen für jede Entität.

#### Prüfintervalle

Die Prüfintervalle bestimmen, wie oft die Sanktionslistenprüfung durchgeführt wird. Sie können die Prüfintervalle für jede Entität individuell konfigurieren, wobei folgende Empfehlungen gelten:

- **Kleine Unternehmen:** Einmal jährlich. Kleine Unternehmen mit geringem Risiko und wenigen Geschäftspartnern können eine jährliche Überprüfung durchführen.
- **Mittlere Unternehmen:** Halbjährlich. Unternehmen mittlerer Größe sollten ihre Handelspartner und Mitarbeiter alle sechs Monate überprüfen, um sicherzustellen, dass sie keine Geschäfte mit sanktionierten Personen oder Organisationen tätigen.
- **Große Unternehmen:** Vierteljährlich. Große Unternehmen mit umfangreichen internationalen Geschäftsbeziehungen sollten mindestens alle drei Monate eine Sanktionslistenprüfung durchführen.
- **Unternehmen mit hohem Risiko:** Monatlich. Unternehmen, die in Branchen mit hohem Risiko tätig sind oder viele internationale Transaktionen durchführen, sollten monatliche Überprüfungen in Betracht ziehen.
- **Unternehmen mit kritischen Geschäftsbereichen:** Wöchentlich. Unternehmen, die in besonders sensiblen oder regulierten Bereichen tätig sind, wie z.B. Finanzdienstleistungen oder Rüstungsindustrie, sollten wöchentliche Prüfungen durchführen.

### Einrichtung

Die **Sanction Screen Einrichtung** kann als zentraler Anlaufpunkt für die Konfiguration der Sanktionslistenprüfung in Microsoft Dynamics 365 Business Central genutzt werden. Hier können Sie die Prüfintervalle für jede Entität festlegen, die zu prüfenden Datenkataloge auswählen und Benachrichtigungen konfigurieren.
Zusätzlich finden Sie nützliche Informationen zur aktuellen Konfiguration und den durchgeführten Prüfungen.

![365 business Sanction Screen - Einrichtung](/assets/images/365-business-sanction-screen/sanctionscreen.setup.de-DE.png)

#### Debitoren & Verkauf

In der Gruppe **Debitoren & Verkauf** können Sie festlegen, wie Microsoft Dynamics 365 Business Central mit möglichen Übereinstimmungen und Treffern bei der Sanktionslistenprüfung, innerhalb von Verkaufsbelegen und Debitoren umgehen soll.

| Feld | Beschreibung | Standard |
| --- | --- | --- |
| **Trefferverhalten** | Gibt an, wie Microsoft Dynamics 365 Business Central mit möglichen Übereinstimmungen bei der Sanktionslistenprüfung umgehen soll. | **Benachrichten** |

<div class="alert alert-info">
	<i class="fa-solid fa-lightbulb"></i> <strong>Hinweis:</strong>In der aktuellen Version stehen die Optionen <i>Benachrichtigen</i> und <i>Keine</i> zur Verfügung.<br>
    <br>
    In zukünftigen Versionen von 365 business Sanction Screen werden weitere Optionen zur Verfügung stehen, um die Behandlung von Treffern bei der Sanktionslistenprüfung weiter zu differenzieren.<br>
    <br>
    Bitte prüfen Sie regelmäßig auf Updates und neue Funktionen.
</div>

#### Kreditoren & Einkauf

In der Gruppe **Kreditoren & Einkauf** können Sie festlegen, wie Microsoft Dynamics 365 Business Central mit möglichen Übereinstimmungen und Treffern bei der Sanktionslistenprüfung, innerhalb von Einkaufsbelegen und Kreditoren umgehen soll.

| Feld | Beschreibung | Standard |
| --- | --- | --- |
| **Trefferverhalten** | Gibt an, wie Microsoft Dynamics 365 Business Central mit möglichen Übereinstimmungen bei der Sanktionslistenprüfung umgehen soll. | **Benachrichtigen** |

#### Screening-Intervall

Das **Screening-Intervall** bestimmt, wie oft die Sanktionslistenprüfung durchgeführt wird. Sie können das Intervall für jede Entität individuell festlegen.

| Intervall | Beschreibung |
| --- | --- |
| **Jährlich** | Die Prüfung erfolgt innerhalb eines Jahres, nach der letzten Prüfung. |
| **Halbjährlich** | Die Prüfung erfolgt innerhalb von sechs Monaten, nach der letzten Prüfung. |
| **Vierteljährlich** | Die Prüfung erfolgt innerhalb von drei Monaten, nach der letzten Prüfung. |
| **Monatlich** | Die Prüfung erfolgt innerhalb eines Monats, nach der letzten Prüfung. |
| **Wöchentlich** | Die Prüfung erfolgt innerhalb einer Woche, nach der letzten Prüfung. |
| **Manuell** | Die Prüfung erfolgt ausschließlich manuell durch den Anwender. |

<div class="alert alert-notice">
    <i class="fa-solid fa-notes"></i> <strong>Gut zu wissen:</strong>Im automatisierten Aufgabenwarteschlangenposten <strong>Sanktionsprüfung</strong> kann die Einstellung übersteuert werden, um abweichend vom Standard individuell Sonderprüfungen durchzuführen.
</div>

### Berechtigungen

Mit 365 business Sanction Screen werden zwei Berechtigungssätze bereitgestellt, die für die Sanktionslistenprüfung benötigt werden:

| Berechtigungssatz | Name | Beschreibung |
| --- | --- | --- |
| `BDEV.OS.BASIC` | Sanktionsprüfung - BASIS | Stellt die grundsätzlichen Berechtigungen zum Arbeiten mit 365 business Sanction Screen zur Verfügung. Dieser Berechtigungssatz sollte an **alle Benutzer** vergeben werden. |
| `BDEV.OS.WHITELIST` | Sanktionsprüfung - Whitelist | Berechtigt den Anwender dazu Sanktionstrefferposten auf die Whitelist zu setzen. |

### Siehe auch

- [Schrittanleitung](../get-started/)
- [Datenkataloge für Sanktionsprüfung](../data-sources/)
