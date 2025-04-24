#  LPD / LPR Unterstützung

Der **365 business Print Agent** unterstützt die Kommunikation über das **Line Printer Daemon Protocol (LPD)** für alle Drucker, die **ZPL (Zebra Programming Language)** emulieren.

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i>
    <strong>Hinweis</strong>
	Das <b>Line Printer Daemon Protocol (LPD)</b> ist ein Netzwerkprotokoll, das ursprünglich in den 1980er Jahren von der University of California, Berkeley entwickelt wurde.
	Es dient zur Verwaltung und Übertragung von Druckaufträgen über ein Netzwerk, insbesondere in UNIX-Umgebungen.
</div>

---

## Problem

Der **365 business Print Agent** nutzt für den LPD-Druck das von Microsoft bereitgestellte Tool **LPR**, welches in den **Windows Server Editionen** enthalten ist.

---

## Lösung

Installieren Sie das Windows-Feature **LPR-Portmonitor**, um den LPR-Dienst unter Windows Server bereitzustellen.

![LPRPortMonitor](/assets/images/365-business-print-agent/LPRInstall.PNG)

---

## Testdruck durchführen

Vergewissern Sie sich nach der Installation, dass der Drucker korrekt eingerichtet ist, und testen Sie den Druckvorgang mit folgendem Befehl:

```cmd
lpr -S IP_Adresse_Server -P "Drucker Name" -o l "Datei_zu_drucken"

lpr -S 10.1.0.10 -P "ZDesigner ZD420-203dpi ZPL" -o l "c:\Users\Administrator\Documents\HelloWorld.zpl"
```

---

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg"></i>
    <strong>Gut zu wissen</strong>
	Achten Sie darauf, dass der Druckername korrekt angegeben ist.
</div>