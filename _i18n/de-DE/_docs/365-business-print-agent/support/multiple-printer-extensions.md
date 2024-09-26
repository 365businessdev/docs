#### Ursache

Sie erhalten die Meldung, dass mehrere Druckererweiterungen in Ihrem System installiert sind. Wir weisen Sie darauf hin, da dies zu Problemen führen kann, die unter Umständen die Verfügbarkeit und die Funktionalität des Druck in Microsoft Dynamics 365 Business Central beeinträchtigen kann.

Mehrere Druckererweiterungen können dazu führen, dass der Name eines Druckers mehrfach verwendet wird. Dies ist in Microsoft Dynamics 365 Business Central nicht unterstützt und führt zu Laufzeit-Fehlern, bei der Ausführung von Berichten und Belegen, wie beispielsweise:

![Fehlermeldung durch mehrere Druckererweiterungen](/assets/images/365-business-print-agent/6b6ff532-4054-48af-9a6a-625d224d6fee.png)

#### Lösung

Deinstallieren Sie alle Druckerweiterungen, außer 365 business Print Agent, aus Ihrer Microsoft Dynamics 365 Business Central Umgebung.  

<div class="alert alert-warn">
    <i class="fa-solid fa-triangle-exclamation"></i> <strong>Wichtig:</strong>In Microsoft Dynamics 365 Business Central <strong>On-Premise</strong> Umgebungen werden auf dem Microsoft Dynamics 365 Business Central Server installierte Drucker automatisch hinzugefügt.<br>Bitte deinstallieren Sie die Drucker auf dem Microsoft Dynamics 365 Business Central Server.
</div>