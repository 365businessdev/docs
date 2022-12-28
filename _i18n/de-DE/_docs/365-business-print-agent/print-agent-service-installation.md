## Voraussetzungen

 - Betriebssystem
   - Windows 10 oder neuer (64-bit)
   - Windows Server 2016 oder neuer (64-bit)
 - .NET 6.0
 - Internetverbindung.
 - [365 business Print Agent Service Installer](https://365businessapi.com/api/SoftwareDownload?AppId=c2e7d99c-d3c6-4ecc-9c6b-7be4048b41a9)

> **Wichtig**<br>Wenn Sie den Print Agent Service im Direktverbindungsmodus verwenden, stellen Sie bitte sicher, dass der Service-Port über das Internet von Ihrem Microsoft Dynamics 365 Business Central-Tentant verfügbar ist.<br>Wir empfehlen dringend, Print Agent Cloud für SaaS-Umgebungen von Microsoft Dynamics 365 Business Central zu verwenden.

> **Hinweis**<br>Um Ihren Print Agent Service zu aktualisieren, laden Sie die [neuste Version](https://365businessapi.com/api/SoftwareDownload?AppId=c2e7d99c-d3c6-4ecc-9c6b-7be4048b41a9) herunter. Nach der Installation werden Ihre Einstellungen wiederhergestellt. 

## Bevor Sie starten

Bitte [lesen Sie den Artikel](../print-agent-whatis/) um herauszufinden, welchen Dienstmodus Sie für Ihr Szenario wählen sollten.

## Installation von Print Agent Service

 1. [Download](https://365businessapi.com/api/SoftwareDownload?AppId=c2e7d99c-d3c6-4ecc-9c6b-7be4048b41a9) der neusten Version von Print Agent Service.
 2. Speichern Sie die heruntergeladene ZIP-Datei auf dem Server oder Computer, den Sie als _Druckserver_ mit 365 business Print Agent verwenden möchten.
 3. Entpacken Sie den Inhalt der ZIP-Datei (z.B. `C:\install`)
 4. Führen Sie die Setup-Datei aus und folgen Sie den Schritten, um den Print Agent Service zu installieren und zu starten.

## Unterstützte Einrichtung

Beim ersten Start der 365 business Print Agent-Anwendung wird die unterstützte Einrichtung automatisch gestartet und hilft Ihnen bei der Einrichtung der Grundeinstellungen.

 1. Starten Sie die **365 business Print Agent** Applikation.
 2. Beim ersten Start wird automatisch der **365 business Print Agent Konfigurations Wizard** ausgeführt.<br>
 ![Schritt1 1](/assets/images/365-business-print-agent/7fce036f0be32ae6276110bb38a0abc8f5b967f91b12364a4ba2c58292c2ace8.png)  
 3. Wählen Sie **Weiter**.
 4. Wählen Sie Ihre bevorzugte Verbindungsart (siehe [Dienstmodus](../print-agent-whatis/#architecture)).<br>
 ![Schritt 2](/assets/images/365-business-print-agent/c43ddc32c15333a24a27400b82d42c2511fe4f269bea578756a371f35b0e946d.png)  
 5. Wählen Sie **Weiter**.
 6. Fügen Sie die Tentant-ID ein, die Sie von der Seite **Print Agent Einnrichtung** in Microsoft Dynamics 365 Business Central kopiert haben.
 7. Geben Sie einen **Name** an, um das Client-Gerät zu identifizieren.
 8. Wählen Sie **Weiter**.
 9. Der Windows Dienst wird automatisch erstellt und konfiguriert. Außerdem wird die Tenant Registrierung für Ihr Client-Gerät durchgeführt.<br>
 ![Schritt 4](/assets/images/365-business-print-agent/61c0bdbed1a0465a3106089a86114b982c3d707fff7c245fc775988092e0dcf3.png)
 1.  Wählen Sie **Fertigstellen**.<br> 
 ![Schritt 5](/assets/images/365-business-print-agent/8f5fed48cbf63384f8984bd97134af87bd0bc11ddaeaeedebb56b60e6124e6d8.png)  


## Print Agent Service für Print Agent Cloud Service-Modus einrichten

Um Print Agent Service und Ihren Microsoft Dynamics 365 Business Central-Tenant in Print Agent Cloud zu verbinden, müssen Sie die **Tenant ID** auf der Seite **Print Agent Einrichtung** in Microsoft Dynamics 365 Business Central angeben. Siehe [hier](../setup/) für weitere Informationen.

 1. Starten Sie die **365 business Print Agent** Applikation.
 2. Wählen Sie **Konfiguration**.
 3. Wählen Sie **365 business Print Agent Cloud (empfohlen)**.
 4. Fügen Sie die Tentant-ID ein, die Sie von der Seite **Print Agent Einnrichtung** in Microsoft Dynamics 365 Business Central kopiert haben.
 5. Geben Sie einen **Name** an, um das Client-Gerät zu identifizieren.
 6. Wählen Sie **Übernehmen** um den Agent einzurichten und den Dienst zu starten
 

## Print Agent Service für Direct Connection Service Mode einrichten

> **Wichtig**<br>Bitte stellen Sie sicher, dass die Service-URL und der Service-Port in Ihrer Microsoft Dynamics 365 Business Central-Umgebung verfügbar sind.<br>Wir empfehlen dringend, Print Agent Cloud für SaaS-Umgebungen von Microsoft Dynamics 365 Business Central zu verwenden.

 1. Starten Sie die **365 business Print Agent** Applikation.
 2. Wählen Sie **Konfiguration**.
 3. Wählen Sie **365 business Print Agent Server**.
 4. Geben Sie die **Remote Adresse** an, an der sich der Print Agent-Dienst binden soll, oder lassen Sie Sternchen stehen, um jede verfügbare IP-Adresse Ihres Systems zu binden.
 5. Geben Sie den **Port** an, auf dem der Print Agent-Dienst lauschen soll (Standardport `60000`).
 6. Wählen Sie **Übernehmen**, um den Agent einzurichten und die Dienste zu starten.
