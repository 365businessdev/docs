Standardmäßig werde Druckaufträge von Windows oder Windows Server nicht im Ereignisprotokoll aufgezeichnet. In einigen Fällen kann es jedoch hilfreich sein, die Druckaufträge im Ereignisprotokoll zu protokollieren. Dies kann beispielsweise bei der Fehlersuche oder bei der Überwachung des Druckauftragsstatus hilfreich sein. In diesem Artikel wird beschrieben, wie Sie die Protokollierung von Druckaufträgen im Ereignisprotokoll aktivieren können.

## Schritt 1: Öffnen Sie die Ereignisanzeige

1. Drücken Sie die `Windows`-Taste und `R` auf Ihrer Tastatur, um das Dialogfeld "Ausführen" zu öffnen.
2. Geben Sie `eventvwr.msc` in das Dialogfeld ein und drücken Sie `Enter`. Dadurch wird die Ereignisanzeige geöffnet.

## Schritt 2: Aktivieren Sie die Protokollierung von Druckaufträgen

1. Navigieren Sie in der Ereignisanzeige zu `Anwendungs- und Dienstprotokolle` > `Microsoft` > `Windows` > `PrintService` > `Betriebsbereit`.<br>
   _Hinweis:_ In englischen Versionen von Windows lautet der Pfad `Applications and Services Logs` > `Microsoft` > `Windows` > `PrintService` > `Operational`.
2. Markieren Sie den Eintrag `Betriebsbereit`.
3. Wählen Sie im Menü `Aktion` die Option `Protokoll aktivieren`.

![Ereignisanzeige - Druckauftragsprotokollierung aktivieren](/assets/images/365-business-print-agent/3025eb4d-7262-45a1-977a-b285901b1565.png)