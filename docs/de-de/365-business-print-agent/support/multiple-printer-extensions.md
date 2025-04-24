---
title: Problem bei mehreren Druckererweiterungen
---


#### Ursache

Sie erhalten die Meldung, dass mehrere Druckererweiterungen in Ihrem System installiert sind. Wir weisen Sie darauf hin, da dies zu Problemen führen kann, die unter Umständen die Verfügbarkeit und die Funktionalität des Druck in Microsoft Dynamics 365 Business Central beeinträchtigen kann.

Mehrere Druckererweiterungen können dazu führen, dass der Name eines Druckers mehrfach verwendet wird. Dies ist in Microsoft Dynamics 365 Business Central nicht unterstützt und führt zu Laufzeit-Fehlern, bei der Ausführung von Berichten und Belegen, wie beispielsweise:

![Fehlermeldung durch mehrere Druckererweiterungen](/assets/images/365-business-print-agent/6b6ff532-4054-48af-9a6a-625d224d6fee.png)

#### Lösung

Deinstallieren Sie alle Druckerweiterungen, außer 365 business Print Agent, aus Ihrer Microsoft Dynamics 365 Business Central Umgebung.  

<div class="alert alert-warn">
    <i class="fa-light fa-triangle-exclamation fa-lg"></i> <strong>Wichtig</strong>In Microsoft Dynamics 365 Business Central <strong>On-Premise</strong> Umgebungen werden auf dem Microsoft Dynamics 365 Business Central Server installierte Drucker automatisch hinzugefügt.<br>Bitte deinstallieren Sie die Drucker auf dem Microsoft Dynamics 365 Business Central Server.
</div>

##### Schritt 1: Erweiterungsverwaltung öffnen

Öffnen Sie die **Erweiterungsverwaltung** in Microsoft Dynamics 365 Business Central mit dem **Wie möchten Sie weiter verfahren?** Fenster (Alt+Q).

![Erweiterungsverwaltung suchen](/assets/images/365-business-print-agent/673e2550-12ba-4edd-8ed6-9931c0efab16.png)

##### Schritt 2: Druckererweiterung identifizieren

Finden Sie die Druckererweiterungen, die nicht der 365 business Print Agent sind. Der 365 business Print Agent ist die einzige Druckererweiterung, die in Ihrer Microsoft Dynamics 365 Business Central Umgebung installiert sein sollte. Typische Druckererweiterungen sind:

 - Universal Print Integration
 - PrintNode Integration

##### Schritt 3: Druckererweiterung(en) deinstallieren

Wählen Sie die Druckererweiterung(en) aus, die nicht der 365 business Print Agent sind, wählen Sie das Drei-Punkte-Symbol und wählen Sie **Deinstallieren**.

![alt text](/assets/images/365-business-print-agent/9b58144b-277d-4b9d-8830-ebceadb5e8e2.png)

##### Schritt 4: Confirm uninstallation

Bestätigen Sie die Deinstallation der Druckererweiterung, indem Sie **Deinstallieren** auswählen.