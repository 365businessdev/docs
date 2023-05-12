Wie im Punkt **[Was ist Print Agent?](../print-agent-whatis/)** beschrieben, kann der 365 business Print Agent in zwei unterschiedlichen Dienst-Modi betrieben werden.

Unter dem Menüpunkt **Einstellungen** kann der Dienstmodus, falls gewünscht, jederzeit gewechselt werden.

### 365 business Print Agent Cloud (empfohlen)

Die Nutzung der 365 business Print Agent Cloud ist die empfohlene Methode.
Der Vorteil dieser ist, dass die Einrichtung auf ein Minimum reduziert und sofort einsatzbereit ist.

Folgende Schritte sind notwendig, um über die 365 business Print Agent Cloud zu drucken:

#### Microsoft Dynamics 365 Business Central
1. Installieren Sie die "365 business Print Agent" App über den Microsoft AppSource in Ihrem Microsoft Dynamics 365 Business Central Tenant.
2. Nach der Installation wählen Sie in der 365 business Print Agent App den Dienstmodus "Print Agent Cloud" aus.
3. Wählen Sie "Print Agent authentifizieren" und kopieren Sie den Wert "Tenant ID" aus dem Feld.

#### 365 business Print Agent Config 
4. Öffnen Sie den Menüpunkt "Einstellungen" im 365 business Print Agent Config aus.
5. Wählen Sie "365 business Print Agent Cloud".
6. Fügen Sie die, im Punkt 3 kopierte "Tenant ID" im entsprechenden Feld ein.
7. Geben Sie Ihrem Cloud Client einen Namen.
8. Klicken Sie auf "Speichern" um die Einrichtung zu starten.

Im nachfolgenden Dialog wird die Einrichtung grafisch dargestellt. Sobald dieser Dialog geschlossen ist und der "Service Status" einen grünen Haken zeigt, ist die Einrichtung abgeschlossen.

![Einstellung-Cloud](/assets/images/365-business-print-agent/config-tool/Settings_Cloud.PNG)

<div class="alert alert-notice">
    <i class="fa-solid fa-notes"></i> <strong>Wichtig:</strong>Sollte die Konfiguration mit einem Fehler beendet werden, prüfen Sie bitte, ob die Reihenfolge der Schritte eingehalten wurde.<br/> Es muss zwingend zuerst die Installation & Einrichtung der "365 business Print Agent" App in Ihrem Microsoft Dynamics 365 Business Central Tenant erfolgen, bevor die Konfiguration im "365 business Print Agent Config" erfolgen kann.
</div>

### 365 business Print Agent Server

Durch die Auswahl des 365 business Print Agent Server wird eine direkte Verbindung zwischen Microsoft Dynamics 365 Business Central und dem aktuellen System aufgebaut.
Aufgrund des großen Aufwands bei der Konfiguration von Firewalls, Netzwerkrouten etc. wird diese Verbindung nur bei der Benutzung Ihrer eigenen On-Premises-Umgebungen empfohlen, nicht aber für die Benutzung von Microsoft Dynamics 365 Business Central SaaS-Umgebungen!


Folgende Schritte sind notwendig, um über die 365 business Print Agent Server zu drucken:

#### Microsoft Dynamics 365 Business Central
1. Installieren Sie die "365 business Print Agent" App über den Microsoft AppSource in Ihrem Microsoft Dynamics 365 Business Central Tenant.
2. Nach der Installation wählen Sie in der 365 business Print Agent App den Dienstmodus "Direct Connection" aus.
3. Geben Sie einen Namen, sowie die "Dienst-Adresse" und den "Dienst-Port" an. Diese entsprechen der IP oder der http(s) Adresse zu Ihrem internen 365 business Print Agent Server.

#### 365 business Print Agent Config 
4. Öffnen Sie den Menüpunkt "Einstellungen" im 365 business Print Agent Config aus.
5. Wählen Sie "365 business Print Agent Server".
6. Im Feld "Remote Adresse" geben Sie bitte den Hostname und Port an, an die der 365 business Print Agent Server gebunden werden soll.
7. Klicken Sie auf "Speichern" um die Einrichtung zu starten.

Im nachfolgenden Dialog wird die Einrichtung grafisch dargestellt. Sobald dieser Dialog geschlossen ist und der "Service Status" einen grünen Haken zeigt, ist die Einrichtung abgeschlossen.

![Einstellung-Server](/assets/images/365-business-print-agent/config-tool/Settings_Server.PNG)

<div class="alert alert-notice">
    <i class="fa-solid fa-notes"></i> <strong>Wichtig:</strong>Die Konfiguration des 365 business Print Agent Server ist damit abgeschlossen. Damit dieser aber von außerhalb Ihres Netzwerkes verfügbar ist, sind weitere Schritte notwendig (Konfiguration von Firewalls, Netzwerkrouten etc.). Bitte kontaktieren Sie Ihren Netzwerk-/Systemadministrator oder Dienstleister.
</div>

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Hinweis:</strong>Es ist ebenfalls möglich, den Server mit dem <strong>HTTPS</strong> Protokoll zu betreiben. Dazu klicken Sie auf den Button "HTTPS Konfiguration". Im folgenden Dialog können Sie zwischen 3 unterschiedlichen Arten wählen, wie Sie das notwendige Zertifikat einbinden. Es besteht die Möglichkeit ein Zertifikat über PFX Datei, über PEM und Key Datei oder über den Microsoft Windows Zertifikatsspeicher einzubinden.<br/>
    Nach dem Übernehmen der Einstellungen und anschließendem "Speichern" wird die Einrichtung für die HTTPS Konfiguration durchgeführt.
</div>