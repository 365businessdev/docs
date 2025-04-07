---
title: Einrichtung
---

Die Print Agent Einrichtung enthält die Konfiguration für die Kommunikation zwischen Microsoft Dynamics 365 Business Central und dem 365 business Print Agent Service oder der Cloud, je nach gewähltem Service Mode.

![Print Agent Einrichtung](/assets/images/365-business-print-agent/646d98fab6c688ad444f61f5397dce86873cda4a90db60986a40ba1eb3911ce9.png)

## Einrichtungsparameter

| Feldname | Gruppe | Beschreibung |
| --- | --- | --- |
| Dienstmodus | Print Agent Dienstverbindung | Legt den Dienstmodus für die 365 business Print Agent-Kommunikation fest. Sie können zwischen der direkten Verbindung über den 365 business Print Agent und dem 365 business Print Agent Cloud-Dienst wählen, um eine Verbindung zu einem oder mehreren 365 business Print Agents mit geringerem Wartungsaufwand und ohne notwendige Firewallkonfigurationen herzustellen.<br>Wir empfehlen die Verwendung des 365 business Print Agent Cloud-Dienst für SaaS-Umgebungen von Microsoft Dynamics 365 Business Central.|
| Druckeinstellungen automatisch aktivieren | Vorgaben | Gibt an, dass neu erstellte Druckeinstellungen standardmäßig aktiviert werden. Dazu gehören auch vom System erstellte Druckeinstellungen, die automatisch erstellt werden, wenn ein neuer Drucker vom Print Agent-Dienst empfangen wird. |
| Name | Print Agent Diensteinrichtung | Gibt den Namen der Print Agent-Dienst Instanz an. Dieses Feld dient zur Unterscheidung der einzelnen Print Agent-Dienst Instanzen.<br>_(nur anwendbar bei Verwendung des Dienstmodus Direktverbindung)_ |
| Dienst-Adresse | Print Agent Diensteinrichtung | Gibt die Service-URL für die Kommunikation mit dem Print Agent Cloud Service an. In der Regel brauchen Sie diese Adresse nicht zu ändern, da es sich um die Standardadresse handelt.<br>_(nur anwendbar bei Verwendung des Dienstmodus Direktverbindung)_ |
| Dienst-Port | Print Agent Diensteinrichtung | Dient zur Angabe des TCP-Port, der für die Kommunikation mit dem Print Agent-Dienst verwendet wird.<br>_(nur anwendbar bei Verwendung des Dienstmodus Direktverbindung)_ |
| Authentifiziert | Print Agent Diensteinrichtung | Gibt an, ob die Print Agent-Dienst Instanz mit dem Microsoft Dynamics 365 Business Central Tenant verbunden ist oder nicht.<br>_(nur anwendbar bei Verwendung des Dienstmodus Direktverbindung)_ |
| Verbindungsstatus | Status | Zeigt den Verbindungsstatus zwischen Print Agent und Microsoft Dynamics 365 Business Central an. |
| Tenant ID | Status | Gibt die Tenant-ID an, die zur Sicherung der Kommunikation zwischen Print Agent und Microsoft Dynamics 365 Business Central verwendet wird. |

## Wie wird der Print Agent Cloud-Dienstmodus eingerichtet?

 1. Wählen Sie **Print Agent Cloud** als **Dienstmodus**.<br>[Mehr erfahren](print-agent-whatis.md#architektur)
 2. Klicken Sie **Print Agent authentifizieren**.

## Wie wird Direktverbindung als Dienstmodus eingerichtet?

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Hinweis:</strong> Die Unterstützung für die Verbindung mehrerer Print Agent-Dienst Instanzen wurde mit 365 business Print Agent Version 18.2 hinzugefügt.<br>Bitte überprüfen Sie, ob Sie die neueste Version von 365 business Print Agent verwenden, um diese Funktion zu nutzen.
</div>

 1. Wählen Sie **Direktverbindung** als **Dienstmodus**.<br>[Mehr erfahren](print-agent-whatis.md#architektur)
 2. Erstellen Sie eine neue Zeile in der **Print Agent Diensteinrichtung**.
 3. Geben Sie den **Namen** der Print Agent-Dienst Instanz an.
 4. Geben Sie die **Dienst-Adresse** (z.B. IP-Adresse des Server, auf dem der Print Agent-Dienst installiert ist) an.
 5. Geben Sie den **Dienst-Port** (Standard TCP-Port `60000`) an.
 6. Bestätigen Sie die Frage nach der Authentifizierung mit der Print Agent-Dienst Instanz.<br>![Bestätigung Print Agent-Dienst Authentifizierung](/assets/images/365-business-print-agent/a35b2150c883bf9145a1c14e555a9e3bdd18c906ddcef52e7b14a4600699a44a.png)
 8. Wiederholen Sie die Schritte 2-6 für weitere Print Agent-Dienst Instanzen.

![Direktverbindung - Print Agent Diensteinrichtung](/assets/images/365-business-print-agent/ad7903e49277a20398b0c18fa585552dcfe486312d657bc2c78b7e41f2b3d62b.png)  

### Siehe auch

 - [Print Agent Architektur](print-agent-whatis.md#architektur)
 - [Was ist Print Agent?](print-agent-whatis.md)
 - [Was ist der Print Agent Dienst?](print-agent-client-whatis.md)