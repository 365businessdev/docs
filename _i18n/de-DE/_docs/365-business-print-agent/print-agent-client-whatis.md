Der Print Agent Service übernimmt die Kommunikation zwischen Microsoft Dynamics 365 Business Central (Direct Mode) oder 365 business Print Agent Cloud (Cloud Mode). Zusätzlich führt der Print Agent Service die empfangenen Druckaufträge von Microsoft Dynamics 365 Business Central aus.

Jeder Print Agent Service wird anhand einer Client-ID (GUID) identifiziert und überwacht den Online-Status Ihrer freigegebenen Drucker. 
Der Agent sollte auf einem Windows-System ausgeführt werden, auf dem Ihre Drucker installiert sind.

> **Hinweis!**<br>Der Print Agent Service ist in der Lage, mit jedem auf dem Client-Gerät (z.B. Druckserver) installierten Drucker zu arbeiten.

## Drucker mit Print Agent verbinden

Alle auf dem Client-Gerät installierten Drucker sind automatisch in der Ansicht **Drucker** der 365 business Print Agent Anwendung verfügbar.

![Shared Printer](/assets/images/365-business-print-agent/ad01eb85658694c75716cb5dbce514bd3763fb94b48e505c0288c2bcf8638737.png)  

Wählen Sie alle Drucker aus, die Sie für das Drucken aus Microsoft Dynamics 365 Business Central verfügbar machen möchten.

> **Wichtig!**<br>Bedenken Sie bitte, sobald ein Drucker freigegeben ist, dass die Aufhebung der Freigabe oder das Löschen des Druckers zu fehlgeschlagenen Druckaufträgen in Microsoft Dynamics 365 Business Central führen kann.<br>Verwalten Sie Ihre freigegebenen Drucker mit Bedacht.

## Die Aufgabe von Print Agent Service

Der Print Agent Service führt folgende Funktionen aus:

 1. Er verwaltet die Kommunikation zwischen Ihrem Client und Microsoft Dynamics 365 Business Central oder 365 business Print Agent Cloud.
 2. Initiiert Druckaufträge.
 3. Verwaltet freigegebene Drucker.
