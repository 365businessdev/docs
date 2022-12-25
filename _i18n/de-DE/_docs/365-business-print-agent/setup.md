Die Print Agent Einrichtung enthält die Konfiguration für die Kommunikation zwischen Microsoft Dynamics 365 Business Central und dem 365 business Print Agent Service oder der Cloud, je nach gewähltem Service Mode.

![Print Agent Einrichtung](/assets/images/365-business-print-agent/e8147ed3f3a4ba5810c3843510ab68734ce904d7857a0f0b3c60b90851aeae41.png)

## Einrichtungsparameter

| Feldname | Gruppe | Beschreibung |
| --- | --- | --- |
| Dienstmodus | Print Agent Dienstverbindung | Legt den Dienstmodus für die 365 business Print Agent-Kommunikation fest. Sie können zwischen der direkten Verbindung über den 365 business Print Agent und dem 365 business Print Agent Cloud-Dienst wählen, um eine Verbindung zu einem oder mehreren 365 business Print Agents mit geringerem Wartungsaufwand und ohne notwendige Firewallkonfigurationen herzustellen.<br>Wir empfehlen die Verwendung des 365 business Print Agent Cloud-Dienst für SaaS-Umgebungen von Microsoft Dynamics 365 Business Central. |
| Dienst-Adresse | Print Agent Dienstverbindung | Gibt die Service-URL für die Kommunikation mit dem Print Agent Cloud Service an. In der Regel brauchen Sie diese Adresse nicht zu ändern, da es sich um die Standardadresse handelt. |
| Dienst-Port | Print Agent Dienstverbindung | Dient zur Angabe des TCP-Port, der für die Kommunikation mit dem Print Agent-Dienst verwendet wird.<br>_(nur anwendbar bei Verwendung des Dienstmodus Direktverbindung)_ |
| Verbindungsstatus | Status | Zeigt den Verbindungsstatus zwischen Print Agent und Microsoft Dynamics 365 Business Central an. |
| Tenant ID | Status | Gibt die Tenant-ID an, die zur Sicherung der Kommunikation zwischen Print Agent und Microsoft Dynamics 365 Business Central verwendet wird. |

## Wie wird der Print Agent Cloud-Dienstmodus eingerichtet?

 1. Wählen Sie **Print Agent Cloud** als **Dienstmodus**.<br>[Mehr erfahren](../print-agent-whatis/#architecture)
 2. Klicken Sie **Print Agent authentifizieren**.

## Wie wird Direktverbindung als Dienstmodus eingerichtet?

 1. Wählen Sie **Direktverbindung** als **Dienstmodus**.<br>[Mehr erfahren](../print-agent-whatis/#architecture)
 2. Geben Sie die **Dienst-Adresse** (z.B. IP-Adresse des Server, auf dem der Print Agent-Dienst installiert ist) an.
 3. Geben Sie den **Dienst-Port** (Standard TCP-Port `60000`) an.
 4. Klicken Sie **Print Agent authentifizieren**.

### Siehe auch

 - [Print Agent Architektur](../print-agent-whatis/#architecture)
 - [Was ist Print Agent?](../print-agent-whatis/)
 - [Was ist der Print Agent Dienst?](../print-agent-client-whatis/)