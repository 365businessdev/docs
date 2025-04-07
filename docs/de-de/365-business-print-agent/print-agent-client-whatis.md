---
title: Was ist der Print Agent Dienst?
---

Der Print Agent Service übernimmt die Kommunikation zwischen Microsoft Dynamics 365 Business Central (Direct Mode) oder 365 business Print Agent Cloud (Cloud Mode). Zusätzlich führt der Print Agent Service die empfangenen Druckaufträge von Microsoft Dynamics 365 Business Central aus.

Jeder Print Agent Service wird anhand einer Client-ID (GUID) identifiziert und überwacht den Online-Status Ihrer freigegebenen Drucker. 
Der Agent sollte auf einem Windows-System ausgeführt werden, auf dem Ihre Drucker installiert sind.

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg" style="--fa-secondary-color: #FF0000; --fa-primary-color: #111111; --fa-secondary-opacity: 0.7"></i> <strong>Hinweis:</strong>Der Print Agent Service ist in der Lage, mit jedem auf dem Client-Gerät (z.B. Druckserver) installierten Drucker zu arbeiten.<br>Die Freigabe von Netzwerkdruckern in 365 business Print Agent kann jedoch zu Zeitüberschreitungen führen, da die Antwort des tatsächlichen Druckers länger dauern kann. Dies ist ein häufiges Problem bei der Windows-Druckerverwaltung und kann unter Umständen nicht durch 365 business Print Agent gelöst werden.<br><br>Wir empfehlen dringend, 365 business Print Agent direkt auf Druckservern zu installieren, um lokal installierte Drucker freizugeben, anstatt Drucker von einem entfernten Druckserver freizugeben.
</div>

## Drucker mit Print Agent verbinden

Alle auf dem Client-Gerät installierten Drucker sind automatisch in der Ansicht **Drucker** der 365 business Print Agent Anwendung verfügbar.

![Shared Printer](/assets/images/365-business-print-agent/ad01eb85658694c75716cb5dbce514bd3763fb94b48e505c0288c2bcf8638737.png)  

Wählen Sie alle Drucker aus, die Sie für das Drucken aus Microsoft Dynamics 365 Business Central verfügbar machen möchten.

<div class="alert alert-warn">
    <i class="fa-light fa-triangle-exclamation fa-lg"></i> <strong>Wichtig:</strong>Bedenken Sie bitte, sobald ein Drucker freigegeben ist, dass die Aufhebung der Freigabe oder das Löschen des Druckers zu fehlgeschlagenen Druckaufträgen in Microsoft Dynamics 365 Business Central führen kann.<br>Verwalten Sie Ihre freigegebenen Drucker mit Bedacht.
</div>

## Die Aufgabe von Print Agent Service

Der Print Agent Service führt folgende Funktionen aus:

 1. Er verwaltet die Kommunikation zwischen Ihrem Client und Microsoft Dynamics 365 Business Central oder 365 business Print Agent Cloud.
 2. Initiiert Druckaufträge.
 3. Verwaltet freigegebene Drucker.
