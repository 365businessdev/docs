# Druckaufträge im Ereignisprotokoll

Standardmäßig werden Druckaufträge unter Windows oder Windows Server **nicht** im Ereignisprotokoll erfasst.  
Für bestimmte Anwendungsfälle – etwa zur **Fehleranalyse** oder zur **Überwachung von Druckaufträgen** – kann es jedoch sinnvoll sein, diese Protokollierung zu aktivieren.

---

## Schritt 1: Ereignisanzeige öffnen

1. Drücken Sie die Tasten `Windows` + `R`, um das **Ausführen**-Dialogfeld zu öffnen.
2. Geben Sie `eventvwr.msc` ein und bestätigen Sie mit `Enter`.  
   → Die **Ereignisanzeige** wird geöffnet.


## Schritt 2: Druckauftragsprotokollierung aktivieren

1. Navigieren Sie zu folgendem Pfad in der Ereignisanzeige:  
   `Anwendungs- und Dienstprotokolle` > `Microsoft` > `Windows` > `PrintService` > `Betriebsbereit`  
   _(Englisch: `Applications and Services Logs` > `Microsoft` > `Windows` > `PrintService` > `Operational`)_
2. Markieren Sie den Eintrag **Betriebsbereit**.
3. Klicken Sie im Menü **Aktion** auf **Protokoll aktivieren**.

![Ereignisanzeige - Druckauftragsprotokollierung aktivieren](/assets/images/365-business-print-agent/3025eb4d-7262-45a1-977a-b285901b1565.png)