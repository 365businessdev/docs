# Einrichtung

Die **Print Agent Einrichtung** enthält die Konfiguration für die Kommunikation zwischen Microsoft Dynamics 365 Business Central und dem 365 business Print Agent Service oder der Cloud, je nach gewähltem Dienstmodus.

![Print Agent Einrichtung](/assets/images/365-business-print-agent/646d98fab6c688ad444f61f5397dce86873cda4a90db60986a40ba1eb3911ce9.png)

## Einrichtungsparameter

| Feldname | Gruppe | Beschreibung |
|:---|:---|:---|
| **Dienstmodus** | Print Agent Dienstverbindung | Legt den Dienstmodus für die Kommunikation mit dem 365 business Print Agent fest. Sie können zwischen der direkten Verbindung oder Print Agent Cloud wählen. Letzterer ermöglicht eine Verbindung zu einem oder mehreren Print Agents mit geringerem Konfigurationsaufwand.<br>Für <strong>SaaS-Umgebungen</strong> von Microsoft Dynamics 365 Business Central empfehlen wir von Print Agent Cloud. |
| **Druckeinstellungen automatisch aktivieren** | Vorgaben | Gibt an, dass neu erstellte Druckeinstellungen standardmäßig aktiviert werden. Dazu zählen auch vom System automatisch erzeugte Druckeinstellungen bei neu erkannten Druckern. |
| **Name** | Print Agent Diensteinrichtung | Gibt den Namen der Print Agent-Dienstinstanz an. Dieses Feld dient zur Unterscheidung einzelner Instanzen.<br>_(nur relevant bei Dienstmodus Direktverbindung)_ |
| **Dienst-Adresse** | Print Agent Diensteinrichtung | Gibt die Service-URL für die Kommunikation mit dem Print Agent Cloud Service an. In der Regel muss diese Adresse nicht angepasst werden.<br>_(nur relevant bei Dienstmodus Direktverbindung)_ |
| **Dienst-Port** | Print Agent Diensteinrichtung | Gibt den TCP-Port an, der für die Kommunikation mit dem Print Agent-Dienst verwendet wird.<br>_(nur relevant bei Dienstmodus Direktverbindung)_ |
| **Authentifiziert** | Print Agent Diensteinrichtung | Gibt an, ob die Print Agent-Dienstinstanz mit dem Microsoft Dynamics 365 Business Central Tenant verbunden ist.<br>_(nur relevant bei Dienstmodus Direktverbindung)_ |
| **Verbindungsstatus** | Status | Zeigt den aktuellen Verbindungsstatus zwischen Print Agent und Microsoft Dynamics 365 Business Central an. |
| **Tenant ID** | Status | Gibt die Tenant-ID an, die für die Absicherung der Kommunikation zwischen Print Agent und Microsoft Dynamics 365 Business Central verwendet wird. |

<br>

## Einrichtung des Print Agent Cloud-Dienstmodus

 1. Wählen Sie **Print Agent Cloud** als **Dienstmodus**.
	<br>[Mehr erfahren](print-agent-whatis.md#architektur)
 2. Klicken Sie **Print Agent authentifizieren**.

<br>

## Einrichtung der Direktverbindung als Dienstmodus

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i>
    <strong>Hinweis</strong>
	Die Unterstützung für mehrere Print Agent-Dienstinstanzen wurde mit Version 18.2 des 365 business Print Agent eingeführt.<br>
	Bitte stellen Sie sicher, dass Sie die aktuelle Version verwenden, um diese Funktion nutzen zu können.
</div>

 1. Wählen Sie **Direktverbindung** als **Dienstmodus**.
	<br>[Mehr erfahren](print-agent-whatis.md#architektur)
 2. Erstellen Sie eine neue Zeile in der **Print Agent Diensteinrichtung**.
 3. Geben Sie den **Namen** der Print Agent-Dienstinstanz an.
 4. Tragen Sie die **Dienst-Adresse** ein (z.B. die IP-Adresse des Servers, auf dem der Print Agent-Dienst installiert ist).
 5. Geben Sie den **Dienst-Port** an (Standard: TCP-Port `60000`).
 6. Bestätigen Sie die Frage zur Authentifizierung der Print Agent-Dienstinstanz.<br>  
   ![Bestätigung Print Agent-Dienst Authentifizierung](/assets/images/365-business-print-agent/a35b2150c883bf9145a1c14e555a9e3bdd18c906ddcef52e7b14a4600699a44a.png)
 7. Wiederholen Sie die Schritte 2–6 für weitere Print Agent-Dienstinstanzen.


![Direktverbindung - Print Agent Diensteinrichtung](/assets/images/365-business-print-agent/ad7903e49277a20398b0c18fa585552dcfe486312d657bc2c78b7e41f2b3d62b.png)  

### Siehe auch

 - [Print Agent Architektur](print-agent-whatis.md#architektur)
 - [Was ist 365 business Print Agent?](print-agent-whatis.md)
 - [Was ist der Print Agent Dienst?](print-agent-client-whatis.md)