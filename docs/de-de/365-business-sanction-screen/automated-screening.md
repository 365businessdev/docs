# Automatisierte Prüfung (Aufgabenwarteschlange)

365 business Sanction Screen unterstützt die automatiesierte Sanktionslistenprüfung in Microsoft Dynamics 365 Business Central. Die automatisierte Sanktionslistenprüfung ermöglicht es Ihnen, die Sanktionslistenprüfung für alle unterstützten Entitäten automatisch durchzuführen.

## Bevor Sie starten

In der Seite **Sanction Screen Einrichtung** können Sie die Prüfintervalle für jede Entität festlegen, die zu prüfenden Datenkataloge auswählen und Benachrichtigungen konfigurieren. Zusätzlich finden Sie nützliche Informationen zur aktuellen Konfiguration und den durchgeführten Prüfungen.

![365 business Sanction Screen - Einrichtung](/assets/images/365-business-sanction-screen/sanctionscreen.setup.de-DE.png)

Prüfen Sie vor der Einrichtung der automatisierten Sanktionslistenprüfung, ob die **Sanction Screen Einrichtung** korrekt konfiguriert ist. Nur so können Sie sicherstellen, dass die automatisierte Sanktionslistenprüfung korrekt durchgeführt wird.

## Automatisierte Sanktionslistenprüfung einrichten

Gehen Sie wie folgt vor, um die automatisierte Sanktionslistenprüfung in Microsoft Dynamics 365 Business Central einzurichten:

1. Öffnen Sie die Seite **Aufgabenwarteschlangenposten** über die Microsoft Dynamics 365 Business Central Suche.
2. Wählen Sie die Zeile **Sanktionsprüfung** aus.
3. Wählen Sie die Aktionsgruppe **Aufgabenwarteschlange** und anschließend **Berichtsanfrageseite** aus.
4. Nehmen Sie die gewünschten Einstellungen für die automatisierte Sanktionslistenprüfung vor.<br>
   ![365 business Sanction Screen - Automatisierte Sanktionslistenprüfung](/assets/images/365-business-sanction-screen/sanctionscreen.screening-job.de-DE.png)
5. Wählen Sie **OK**, um die Einstellungen zu speichern.
6. Nehmen Sie die gewünschten Einstellungen zur Wiederholung der automatisierten Sanktionslistenprüfung vor.
7. Wählen Sie die Aktion **Status auf 'Bereit' festlegen**, um den Aufgabenwarteschlangenposten zu aktivieren.

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i> <strong>Hinweis</strong>Zur optimalen Gewährleistung der Sanktionslistenprüfung empfehlen wir, die Prüfintervalle der einzelnen Entitäten (z.B. Debitor) in der <strong>Sanction Screen Einrichtung</strong> zu konfigurieren.
</div>

# Siehe auch

- [Einrichtung](setup.md)
- [Datenkataloge für Sanktionsprüfung](data-sources.md)