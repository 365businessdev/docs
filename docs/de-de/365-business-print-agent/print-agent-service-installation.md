# Print Agent Dienst auf Windows installieren

## Voraussetzungen

- **Betriebssystem**
  - Windows 10 oder neuer (64-bit)
  - Windows Server 2016 oder neuer (64-bit)
- **.NET 8.0**
- **Internetverbindung**
- [365 business Print Agent Service Installer](https://365businessapi.com/api/SoftwareDownload?AppId=c2e7d99c-d3c6-4ecc-9c6b-7be4048b41a9)

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg"></i>
    <strong>Gut zu wissen</strong>
	Wenn Sie den Print Agent im <b>Direct Connection</b> verwenden, stellen Sie sicher, dass der Service-Port von Ihrem Dynamics 365 Business Central-Tenant erreichbar ist.<br>
	Für SaaS-Umgebungen empfehlen wir dringend die Nutzung von **Print Agent Cloud**.
</div>

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i>
    <strong>Hinweis</strong>
	Um den Print Agent Service zu aktualisieren, laden Sie die <a href="https://365businessapi.com/api/SoftwareDownload?AppId=c2e7d99c-d3c6-4ecc-9c6b-7be4048b41a9">aktuelle Version</a> herunter und installieren Sie diese – Ihre <b>bisherigen Einstellungen bleiben erhalten</b>.
</div>

## Bevor Sie starten

Bitte lesen Sie den [Artikel](print-agent-whatis.md#architektur) um herauszufinden, um den passenden Verbindungsart für Ihr Szenario auszuwählen.

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg"></i>
    <strong>Gut zu wissen</strong>
	Bei angebundenen <b>Netzwerkdruckern</b> kann es jedoch zu <b>Zeitüberschreitungen</b> kommen, da die Antwortzeiten über das Netzwerk länger sind.<br>
	Dieses Verhalten ist eine Einschränkung der Windows-Druckerverwaltung und kann vom 365 business Print Agent nicht vollständig umgangen werden.<br><br>
	<b>Empfehlung:</b> Installieren Sie den Print Agent <b>direkt auf dem Druckserver</b> und geben Sie dort lokal installierte Drucker frei – anstatt auf freigegebene Drucker von einem entfernten Server zuzugreifen.
</div>

## Installation des Print Agent Service

 1. Laden Sie die [aktuelle Version](https://365businessapi.com/api/SoftwareDownload?AppId=c2e7d99c-d3c6-4ecc-9c6b-7be4048b41a9) herunter.
 2. Speichern Sie die ZIP-Datei auf dem System, das als **Druckserver mit 365 business Print Agent** dienen soll.
 3. Entpacken Sie den Inhalt (z.B. `C:\install`).
 4. Führen Sie die Setup-Datei aus und folgen Sie den Installationsanweisungen.

## Unterstützte Einrichtung beim ersten Start

Beim ersten Start der Anwendung wird automatisch ein Konfigurationsassistent gestartet:

 1. Öffnen Sie die **365 business Print Agent** Anwendung.
 2. Der **365 business Print Agent Konfigurations Wizard** wird automatisch gestartet.<br>
 ![Schritt1 1](/assets/images/365-business-print-agent/7fce036f0be32ae6276110bb38a0abc8f5b967f91b12364a4ba2c58292c2ace8.png)  
 3. Wählen Sie **Weiter**.
 4. Wählen Sie Ihre bevorzugte Verbindungsart (siehe [Dienstmodus](print-agent-whatis.md#architektur)).<br>
 ![Schritt 2](/assets/images/365-business-print-agent/c43ddc32c15333a24a27400b82d42c2511fe4f269bea578756a371f35b0e946d.png)  
 5. Wählen Sie **Weiter**.
 6. Fügen Sie die **Tentant-ID** ein, die Sie von der Seite **Print Agent Einnrichtung** in Microsoft Dynamics 365 Business Central kopiert haben.
 7. Geben Sie einen **Namen** an, um das Client-Gerät zu identifizieren.
 8. Wählen Sie **Weiter**.
 9. Der Dienst wird erstellt, konfiguriert und mit Ihrem Tenant verbunden.<br>
 ![Schritt 4](/assets/images/365-business-print-agent/61c0bdbed1a0465a3106089a86114b982c3d707fff7c245fc775988092e0dcf3.png)
 10. Schließen Sie die Einrichtung mit **Fertigstellen** ab.<br> 
 ![Schritt 5](/assets/images/365-business-print-agent/8f5fed48cbf63384f8984bd97134af87bd0bc11ddaeaeedebb56b60e6124e6d8.png)  

## Ändern der Verbindungsart

Im Folgenden wird beschrieben, wie Sie die Verbindungsart nachträglich ändern können.

### Einrichtung: Print Agent Cloud (empfohlen)

 1. Starten Sie die **365 business Print Agent** Anwendung.
 2. Wählen Sie **Einstellungen**.
 3. Wählen Sie **365 business Print Agent Cloud (empfohlen)**.
 4. Fügen Sie die **Tentant-ID** ein, die Sie von der Seite **Print Agent Einnrichtung** in Microsoft Dynamics 365 Business Central kopiert haben.
 5. Geben Sie einen **Namem** an, um das Client-Gerät zu identifizieren.
 6. Wählen Sie **Übernehmen** um den Agent einzurichten und den Dienst zu starten.
 

### Einrichtung: Direct Connection

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i>
    <strong>Hinweis</strong>
	Stellen Sie sicher, dass die Service-URL und der Port in Ihrer Umgebung von Dynamics 365 Business Central erreichbar sind.  
	Für SaaS empfehlen wir den <b>Print Agent Cloud</b> Modus.
</div>

 1. Starten Sie die **365 business Print Agent** Anwendung.
 2. Wählen Sie **Einstellungen**.
 3. Wählen Sie **365 business Print Agent Server**.
 4. Geben Sie die **Remote Adresse** an, an der sich der Print Agent-Dienst binden soll, oder lassen Sie Sternchen stehen, um jede verfügbare IP-Adresse Ihres Systems zu binden.
 5. Geben Sie den **Port** an, auf dem der Print Agent-Dienst lauschen soll (Standardport `60000`).
 6. Wählen Sie **Übernehmen**, um den Agent einzurichten und die Dienste zu starten.
