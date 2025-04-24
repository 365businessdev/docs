# Verbindungsart

Wie im Abschnitt **[Was ist 365 business Print Agent?](print-agent-whatis.md)** beschrieben, kann der 365 business Print Agent in zwei unterschiedlichen Verbindungsart / Dienstmodi betrieben werden.

Im Menü **Einstellungen** kann der Modus jederzeit gewechselt werden.

---

## 365 business Print Agent Cloud (empfohlen)

Die Verwendung der **365 business Print Agent Cloud** ist die empfohlene Variante.  
Sie erfordert minimale Einrichtung und ist sofort einsatzbereit.

### Schritte zur Einrichtung:

#### In Microsoft Dynamics 365 Business Central
1. Installieren Sie die App **365 business Print Agent** über den [Microsoft AppSource](https://appsource.microsoft.com).
2. Wählen Sie in der App den Dienstmodus **Print Agent Cloud**.
3. Klicken Sie auf **Print Agent authentifizieren** und kopieren Sie die **Tenant-ID** aus dem angezeigten Feld.

#### In der 365 business Print Agent Config

1. Öffnen Sie die **Einstellungen**.
2. Wählen Sie den Modus **365 business Print Agent Cloud**.
3. Fügen Sie die in Schritt 3 kopierte **Tenant-ID** ein.
4. Geben Sie einen **Namen** für den Cloud Client an.
5. Klicken Sie auf **Speichern**, um die Einrichtung zu starten.

Nach dem Speichern erscheint ein Dialog, der die Einrichtung visuell darstellt.  
Sobald dieser geschlossen ist und der **Service Status** ein grünes Häkchen zeigt, ist die Konfiguration abgeschlossen.

![Einstellung-Cloud](/assets/images/365-business-print-agent/config-tool/Settings_Cloud.PNG)

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg"></i>
    <strong>Gut zu wissen</strong>
	Bitte stellen Sie sicher, dass die Schritte in der richtigen Reihenfolge durchgeführt werden.<br/>
    Die Installation und Einrichtung der 365 business Print Agent App in Ihrem Microsoft Dynamics 365 Business Central <strong>muss vor</strong> der Konfiguration in der 365 business Print Agent Config Tool erfolgen.
</div>

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i>
    <strong>Hinweis</strong>
	Sollte Ihre Organisation einen <b>Proxy</b> für ausgehenden Datenverkehr verwenden, beachten Sie bitte diesen <a href="support/print-agent-proxy.md">Support-Artikel</a>.	
</div>

## 365 business Print Agent Server

Dieser Modus stellt eine **direkte Verbindung** zwischen Microsoft Dynamics 365 Business Central und dem lokalen System her.  
Aufgrund der erforderlichen Netzwerkkonfiguration (Firewall, Routing etc.) wird dieser Modus **nur für On-Premises-Umgebungen** empfohlen.  
Für SaaS-Tenants ist dieser Modus **nicht geeignet**!

### Schritte zur Einrichtung:

#### In Microsoft Dynamics 365 Business Central
1. Installieren Sie die App **365 business Print Agent** über den Microsoft AppSource.
2. Wählen Sie in der App den Dienstmodus **Direct Connection**.
3. Geben Sie einen Namen sowie die **Dienst-Adresse** (z. B. IP oder HTTPS-Adresse) und den **Port** Ihres Print Agent Servers ein.

#### In der 365 business Print Agent Config
1. Öffnen Sie die **Einstellungen**.
2. Wählen Sie den Modus **365 business Print Agent Server**.
3. Tragen Sie unter **Remote Adresse** den Hostnamen und Port ein, auf dem der Server lauschen soll.
4. Klicken Sie auf **Speichern**, um die Einrichtung zu starten.

Nach dem Speichern erscheint ein Dialog mit grafischer Darstellung.  
Sobald dieser geschlossen ist und der **Service Status** ein grünes Häkchen zeigt, ist die Konfiguration abgeschlossen.

![Einstellung-Server](/assets/images/365-business-print-agent/config-tool/Settings_Server.PNG)

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg"></i>
    <strong>Gut zu wissen</strong>
	Die Einrichtung des Servers ist damit abgeschlossen!<br><br>
	Für die Nutzung außerhalb Ihres Netzwerks sind zusätzliche Schritte notwendig – z. B. Firewall- und Router-Konfiguration. Bitte wenden Sie sich an Ihre IT-Abteilung oder Ihren Systemdienstleister.
</div>

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i>
    <strong>Hinweis</strong>
	Der Server kann optional mit dem <strong>HTTPS</strong>-Protokoll betrieben werden.<br/>
	Klicken Sie dafür auf <b>HTTPS Konfiguration</b> und wählen Sie eine der drei Zertifikatsarten:
	* PFX-Datei
    * PEM + Key-Datei
    * Windows-Zertifikatsspeicher
	
	Nach dem Speichern wird die HTTPS-Konfiguration automatisch übernommen.
</div>

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i>
    <strong>Hinweis</strong>
	Sollte Ihre Organisation einen <b>Proxy</b> für ausgehenden Datenverkehr verwenden, beachten Sie bitte diesen <a href="support/print-agent-proxy.md">Support-Artikel</a>.
</div>