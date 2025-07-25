# Einrichtung

Durch die Installation von 365 business Sanction Screen ist die grundsätzliche Einrichtung bereits abgeschlossen und Sie sind bereit um die Sanktionslistenprüfung in Microsoft Dynamics 365 Business Central vorzunehmen.
Hierbei handelt es sich jedoch um eine Standardeinrichtung, die abhängig von den individuellen Anforderungen Ihres Unternehmens angepasst werden sollte.

## Bevor Sie starten

Bevor Sie mit der Sanktionslistenprüfung beginnen, sollten Sie folgende Punkte überprüfen:

- **Datenkataloge:** Überprüfen Sie die Datenkataloge, die für die Sanktionslistenprüfung verwendet werden sollen. 365 business Sanction Screen bietet eine umfassende Abdeckung von über 240 Datenquellen, die für die Sanktionslistenprüfung genutzt werden können. Weitere Informationen finden Sie [hier](data-sources.md).
- **Intervalle:** Überprüfen Sie die Intervalle, in denen die Sanktionslistenprüfung durchgeführt werden soll. 365 business Sanction Screen ermöglicht die vollständig automatisierte Sanktionsprüfung mit konfigurierbaren Intervallen für jede Entität.

## Prüfintervalle

Die Prüfintervalle bestimmen, wie oft die Sanktionslistenprüfung durchgeführt wird. Sie können die Prüfintervalle für jede Entität individuell konfigurieren, wobei folgende Empfehlungen gelten:

- **Kleine Unternehmen:** Einmal jährlich. Kleine Unternehmen mit geringem Risiko und wenigen Geschäftspartnern können eine jährliche Überprüfung durchführen.
- **Mittlere Unternehmen:** Halbjährlich. Unternehmen mittlerer Größe sollten ihre Handelspartner und Mitarbeiter alle sechs Monate überprüfen, um sicherzustellen, dass sie keine Geschäfte mit sanktionierten Personen oder Organisationen tätigen.
- **Große Unternehmen:** Vierteljährlich. Große Unternehmen mit umfangreichen internationalen Geschäftsbeziehungen sollten mindestens alle drei Monate eine Sanktionslistenprüfung durchführen.
- **Unternehmen mit hohem Risiko:** Monatlich. Unternehmen, die in Branchen mit hohem Risiko tätig sind oder viele internationale Transaktionen durchführen, sollten monatliche Überprüfungen in Betracht ziehen.
- **Unternehmen mit kritischen Geschäftsbereichen:** Wöchentlich. Unternehmen, die in besonders sensiblen oder regulierten Bereichen tätig sind, wie z.B. Finanzdienstleistungen oder Rüstungsindustrie, sollten wöchentliche Prüfungen durchführen.

## Einrichtung

Die **Sanction Screen Einrichtung** kann als zentraler Anlaufpunkt für die Konfiguration der Sanktionslistenprüfung in Microsoft Dynamics 365 Business Central genutzt werden. Hier können Sie die Prüfintervalle für jede Entität festlegen, die zu prüfenden Datenkataloge auswählen und Benachrichtigungen konfigurieren.
Zusätzlich finden Sie nützliche Informationen zur aktuellen Konfiguration und den durchgeführten Prüfungen.

![365 business Sanction Screen - Einrichtung](/assets/images/365-business-sanction-screen/sanctionscreen.setup.de-DE.png)

### Status ungeprüfter Datensätze

Über die Einstellung **Status ungeprüfter Datensätze** können Sie festlegen, wie Microsoft Dynamics 365 Business Central mit Datensätzen umgehen soll, die noch nicht geprüft wurden. Dies betrifft insbesondere neue Entitäten, die noch nicht auf Sanktionslisten geprüft wurden.

![Grundeinrichtung - Status ungeprüfter Datensätze](/assets/images/365-business-sanction-screen/94b5d4d1-13f9-4181-9cb0-741657a0f5d1.png)

#### Option - Keine Daten verfügbar

In dieser Einstellung wird der Status eines Datensatzes, der noch nicht geprüft wurde, als **Keine Daten verfügbar** angezeigt. Dies bedeutet, dass der Datensatz noch nicht auf Sanktionslisten geprüft wurde und keine Informationen zu möglichen Übereinstimmungen vorliegen.

![Keine Daten verfügbar](/assets/images/365-business-sanction-screen/4e761f85-3780-4008-aed3-692009a5c16b.png)

Bei der Verwendung, zum Beispiel in Verkaufsbelegen, wird der Anwender, abhängig von der Auswahl im [Trefferverhalten](#trefferverhalten), darüber informiert und muss bestätigen, dass der Datensatz auch ohne Prüfung weiterverarbeitet werden kann.

#### Option - Gesperrt

In dieser Einstellung wird der Status eines Datensatzes, der noch nicht geprüft wurde, als **Gesperrt** angezeigt. Dies bedeutet, dass der Datensatz nicht weiterverarbeitet werden kann, bis er auf Sanktionslisten geprüft wurde.

![Gesperrt](/assets/images/365-business-sanction-screen/221730ec-deea-46da-9001-be4424f37aee.png)

Bei der Verwendung, zum Beispiel in Verkaufsbelegen, erhält der Anwender eine Fehlermeldung, dass der Datensatz noch nicht geprüft wurde und nicht weiterverarbeitet werden kann. Der Treffer muss zunächst geprüft werden, um weiterzuarbeiten.

### Debitoren & Verkauf

In der Gruppe **Debitoren & Verkauf** können Sie festlegen, wie Microsoft Dynamics 365 Business Central mit möglichen Übereinstimmungen und Treffern bei der Sanktionslistenprüfung, innerhalb von Verkaufsbelegen und Debitoren umgehen soll.

| Feld | Beschreibung | Standard |
| --- | --- | --- |
| **Trefferverhalten** | Gibt an, wie Microsoft Dynamics 365 Business Central mit möglichen Übereinstimmungen bei der Sanktionslistenprüfung umgehen soll. | **Benachrichten** |

Weitere Optionen finden Sie unter [Trefferverhalten](setup.md#trefferverhalten).

### Kreditoren & Einkauf

In der Gruppe **Kreditoren & Einkauf** können Sie festlegen, wie Microsoft Dynamics 365 Business Central mit möglichen Übereinstimmungen und Treffern bei der Sanktionslistenprüfung, innerhalb von Einkaufsbelegen und Kreditoren umgehen soll.

| Feld | Beschreibung | Standard |
| --- | --- | --- |
| **Trefferverhalten** | Gibt an, wie Microsoft Dynamics 365 Business Central mit möglichen Übereinstimmungen bei der Sanktionslistenprüfung umgehen soll. | **Benachrichtigen** |

Weitere Optionen finden Sie unter [Trefferverhalten](setup.md#trefferverhalten).

### Trefferverhalten

Das **Trefferverhalten** bestimmt, wie Microsoft Dynamics 365 Business Central mit möglichen Übereinstimmungen bei der Sanktionslistenprüfung umgehen soll. Sie können das Verhalten für die Bereiche Debitoren & Verkauf und Kreditoren & Einkauf individuell festlegen.

Die Benachrichtigungen werden dabei in den Belegen der jeweiligen Bereiche (z.B. Verkaufsangebot, Verkaufsauftrag, Einkaufsbestellung) angezeigt und informieren den Anwender über mögliche Treffer.

| Verhalten | Beschreibung |
| --- | --- |
| **Keine** | Der Anwender erhält keine zusätzlichen Benachrichtigungen oder Warnungen. |
| **Benachrichtigen** | Der Anwender wird über mögliche Treffer informiert, kann jedoch weiterhin mit der Entität arbeiten. |
| **Warnen** | Der Anwender wird über mögliche Treffer informiert und erhält eine Bestätigungsabfrage, kann jedoch weiterhin mit der Entität arbeiten. |
| **Blockieren** | Der Anwender wird über mögliche Treffer informiert und kann nicht mit der Entität weiterarbeiten. Der Treffer muss geprüft werden und ggf. auf die Whitelist gesetzt werden, um weiterzuarbeiten. |

Darüber hinaus wird zusätzlich geprüft, ob die Entität bereits geprüft wurde (z.B. neuer Debitor). Sofern eine Benachrichtigungsoption ausgewählt wurde, wird der Anwender darüber informiert, dass die Entität noch nicht geprüft wurde und muss dies bestätigen.

### Screening-Intervall

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
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Gut zu wissen</strong>Im automatisierten Aufgabenwarteschlangenposten <strong>Sanktionsprüfung</strong> kann die Einstellung übersteuert werden, um abweichend vom Standard individuell Sonderprüfungen durchzuführen.
</div>

## Berechtigungen

Mit 365 business Sanction Screen werden zwei Berechtigungssätze bereitgestellt, die für die Sanktionslistenprüfung benötigt werden:

| Berechtigungssatz | Name | Beschreibung |
| --- | --- | --- |
| `BDEV.OS.BASIC` | Sanktionsprüfung - BASIS | Stellt die grundsätzlichen Berechtigungen zum Arbeiten mit 365 business Sanction Screen zur Verfügung. Dieser Berechtigungssatz sollte an **alle Benutzer** vergeben werden. |
| `BDEV.OS.WHITELIST` | Sanktionsprüfung - Whitelist | Berechtigt den Anwender dazu Sanktionstrefferposten auf die Whitelist zu setzen. |

## Siehe auch

- [Schrittanleitung](get-started.md)
- [Datenkataloge für Sanktionsprüfung](data-sources.md)
