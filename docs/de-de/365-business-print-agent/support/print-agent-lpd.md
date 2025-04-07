---
title: LPD / LPR Unterstützung
---

Der 365 business Print Agent unterstützt die Kommunikation über das Line Printer Daemon Protocol (LPD) für alle Drucker, die ZPL emulieren.

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Hinweis:</strong>Das Line Printer Daemon Protocol (LPD) ist ein Netzwerkprotokoll, das ursprünglich in den 1980er Jahren von der University of California, Berkeley entwickelt wurde. Es dient zur Verwaltung und Übertragung von Druckaufträgen über ein Netzwerk, insbesondere in UNIX-Umgebungen.
</div>
<br>
#### Problem
Der 365 business Print Agent verwendet für den Druck über LPD das von Microsoft in den Windows Server Editionen bereitgestellte Tool „LPR“.

#### Lösung
Um "LPR" unter Windows Server Betriebssystemen bereitzustellen, installieren Sie das Feature "LPR-Portmonitor".

![LPRPortMonitor](/assets/images/365-business-print-agent/LPRInstall.PNG)

Um sicherzustellen, dass 'LPR' korrekt installiert und der Drucker ordnungsgemäß eingerichtet ist, empfiehlt es sich, einen Testdruck durchzuführen.

```cmd

lpr -S IP_Adresse_Server -P "Drucker Name" -o l "Datei_zu_drucken"

lpr -S 10.1.0.10 -P "ZDesigner ZD420-203dpi ZPL" -o l "c:\Users\Administrator\Documents\HelloWorld.zpl"

```

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg" style="--fa-secondary-color: #FF0000; --fa-primary-color: #111111; --fa-secondary-opacity: 0.7"></i> <strong>Wichtig:</strong>Stellen Sie sicher, dass der Druckername korrekt angegeben ist.
</div>
