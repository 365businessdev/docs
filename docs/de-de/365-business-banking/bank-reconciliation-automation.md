# Bankkontoabstimmung automatisieren

Das Abrufen von Banktransaktionen und der automatische Abgleich kann mit 365 business Banking automatisiert werden. Dies ermöglicht eine regelmäßige Aktualisierung der Banktransaktionen und eine nahtlose Integration in Ihre Finanzprozesse. Hierzu wird pro Bankkonto ein Aufgabenwarteschlangenposten erstellt, der regelmäßig die Banktransaktionen abruft, das Zahlungsabstimmungsbuch.-Blatt aktualisiert und die Banktransaktionen automatisch abgleicht.

<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Gut zu wissen</strong>
    Sofern die Bank eine Multi-Faktor-Authentifizierung erfordert, wird der Aufgabenwarteschlangenposten automatisch pausiert, damit die Authentifizierung manuell durchgeführt werden kann. Nach erfolgreicher Authentifizierung kann der Aufgabenwarteschlangenposten fortgesetzt werden, um die Banktransaktionen weiterhin automatisch abzurufen und abzugleichen.<br>
    Abhängig von der Bank kann die Häufigkeit der Multi-Faktor-Authentifizierung variieren, liegt jedoch in der Regel zwischen 30 und 90 Tagen.
</div>

### Schritt-für-Schritt-Anleitung

Gehen Sie wie folgt vor, um die Automatisierung für das Abrufen von Banktransaktionen einzurichten:

1. Wählen Sie **Bankkonten** in der Suche von Microsoft Dynamics 365 Business Central aus.
2. Wählen Sie das Bankkonto aus, für das Sie die Automatisierung einrichten möchten.
3. Wählen Sie unter **Aktionen** die Aktion **Banktransaktionsabruf automatisieren**.
4. Geben Sie die gewünschten Filter und die Option für den automatischen Abgleich an.
   ![Banktransaktionsabruf automatisieren](/assets/images/365-business-banking/retrieve-bank-transactions.en-US.png)
5. Wählen Sie **OK**, um die Einstellungen zu bestätigen.
6. Wählen Sie **Ja**, um den erstellten Aufgabenwarteschlangenposten anzuzeigen.
   ![Aufgabenwarteschlangenposten anzeigen](/assets/images/365-business-banking/retrieve-bank-transactions-open-job-queue-entry.en-US.png)
7. Überprüfen Sie den Aufgabenwarteschlangenposten und stellen Sie sicher, dass die Einstellungen korrekt sind.
8. Wählen Sie **Status auf 'Bereit' festlegen**, um die Automatisierung zu aktivieren.


<div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Hinweis</strong>
    Der Aufgabenwarteschlangenposten wird standardmäßig auf täglichen Abruf eingestellt. Sie können jedoch die Häufigkeit des Abrufs anpassen, indem Sie die Einstellungen im Aufgabenwarteschlangenposten ändern.
</div>
