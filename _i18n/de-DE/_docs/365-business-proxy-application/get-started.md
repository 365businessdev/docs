In dieser Kurzanleitung wird erklärt, wie Sie 365 business Proxy Application aktivieren und eine Datei in Ihrem lokalen Dateisystem schreiben.

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Hinweis:</strong> Testen Sie den 365 business Proxy Application ohne Kosten in Sandbox-Umgebungen von Microsoft Dynamics 365 Business Central. Zusätzlich gibt es für Echt- und On-Premises-Umgebungen eine kostenlose 30-tägige Testphase ohne Funktionseinschränkungen.
</div>

## Voraussetzungen

 - Microsoft Dynamics 365 Business Central 2021 release wave 1 (18.0) oder neuer.
 - Ein Microsoft Windows-Clientgerät zur Ausführung von [365 business Proxy Application Client Dienst](../proxy-application-client-whatis).
 - Eine Internetverbindung

<div class="alert alert-notice">
    <i class="fa-solid fa-notes"></i> <strong>Wichtiger Hinweis:</strong>Diese Kurzanleitung enthält in Teilen AL Code, der eine gewisse Erfahrung in der Entwicklung von Erweiterungen für Microsoft Dynamics 365 Business Central voraussetzung.<br><br>Bitte wenden Sie sich an Ihren Partner oder unser Support-Team, wenn Sie Fragen zur spezifischen Implementierung in Ihrem System haben.
</div>

## Schritt 1: Installation von 365 business Proxy Application

Öffnen Sie den **Marketplace für Erweiterungen** in Microsoft Dynamics 365 Business Central und suchen Sie nach **365 business Proxy Application**.
Installieren Sie die App von Microsoft AppSource und warten Sie, bis die Installation abgeschlossen ist.

## Schritt 1.1: Proxy Application Einrichtung

Um 365 business Proxy Application einzurichten, öffnen Sie die Seite **Proxy Application Einrichtung** in Microsoft Dynamics 365 Business Central,

 1. Wählen Sie **Authentifizieren** um Ihre Microsoft Dynamics 365 Business Central Umgebung zu registrieren.
 3. Kopieren Sie den Wert **Tenant ID** indem Sie auf den Feldwert klicken.
    <div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Hinweis:</strong> Die Tenant ID wird verwendet, um den Proxy Application Dienst mit Ihrer Microsoft Dynamics 365 Business Central-Umgebung zu verknüpfen. Sie benötigen die Tenant ID später bei der Einrichtung des Proxy Application Client Dienstes.
    </div>
 4. Wählen Sie **Client herunterladen...** um den [365 business Proxy Application Client Dienst](../proxy-application-client-whatis/) herunterzuladen.

## Schritt 1.2: Installieren von 365 business Proxy Application Client Dienst

 1. Speichern Sie die heruntergeladene ZIP-Datei auf dem Server oder Computer, den Sie mit 365 business Proxy Application verwenden möchten.
 2. Entpacken Sie die ZIP-Datei (z.B. `C:\install`)
 3. Starten Sie die Setup Datei.<br/>[mehr erfahren](../proxy-application-service-installation/)
 4. Während der Installation geben Sie bitte die **Tenant ID** und einen **Namen** zur Identifizierung des Proxy Application Client ein.
    ![Proxy Application Client Setup](/assets/images/365-business-proxy-application/c21483cf5f877db2cc391ffa37013ce6d0fca92b9ee7ecc22d7dbbf7d97403f6.png)  

## Schritt 1.3: Proxy Application Client Plugins installieren

 1. Öffnen Sie den Windows Explorer auf dem Server oder Computer, auf dem Sie 365 business Proxy Application Client installiert haben.
 2. Navigieren Sie in das Plugin Verzeichnis (Standardmäßig `C:\ProgramData\365 business development GmbH\365 business Proxy Application\Client\Plugins`).
 3. Kopieren Sie die lizenzierten Plugins (`*.pkg` Datei) in das Plugin Verzeichnis.
 4. Starten Sie den Dienst **365 business Proxy Application Client**.

## Schritt 2: 365 business Proxy Application Clients aktivieren

Um auf die Proxy Application Clients direkt in Microsoft Dynamics 365 Business Central zugreifen zu können, müssen die Clients aktiviert werden.

 1. Öffnen Sie die  **Proxy Application Einrichtung** in Microsoft Dynamics 365 Business Central.
 2. Beim Öffnen der Seite werden automatisch alle verfügbaren 365 business Proxy Application Clients abgerufen und werden in der Einrichtung angezeigt:
    ![Proxy Application Setup](/assets/images/365-business-proxy-application/9c4905bab8db474caa704353d2772447fdcea02339e7dbb5ec2e138974df12dd.png)  
 3. Wählen Sie **Aktiviert** um einen Proxy Application Client für die Verwendung zu aktivieren.
 4. Klicken Sie auf den **Namen** des Proxy Application Client um die Karte zu öffnen.
 5. Kopieren Sie den Wert im Feld **Client ID**.
    <div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Hinweis:</strong> Die Client ID wird verwendet, um den Proxy Application Dienst zu adressieren. 365 business Proxy Application stellt zusätzlich Funktionen zur Verfügung um die Clients, die ein spezifisches Plugin unterstützen, zurückgibt. In dieser Kurzanleitung wird allerdings davon ausgegangen, dass die spezifische Client ID verwendet wird.
    </div>

## Schritt 3: Datei über Microsoft Dynamics 365 Business Central schreiben

In dieser Kurzanleitung wird erklärt, wie Sie mit Hilfe von 365 business Proxy Application eine Datei in Ihrem lokalen Dateisystem schreiben. Im folgenden wird eine AL-Erweiterung für Microsoft Dynamics 365 Business Central vorgenommen. Diese Kurzanleitung geht dabei davon aus, dass das AL-Projekt bereits existiert und nur um die Integration mit 365 business Proxy Application erweitert werden muss.

## Schritt 3.1: Abhängigkeit zu 365 business Proxy Application

Um auf die Funktionen in 365 business Proxy Application zugreifen zu können, muss Ihre AL-Erweiterung eine Abhängigkeit zu 365 business Proxy Application festlegen.

 1. Öffnen Sie das Application Manifest (`app.json`) in Visual Studio Code.  
 2. Ergänzen Sie folgenden Eintrag im JSON-Token `dependencies`:
    ```json
    [..],
    "dependencies": [
        {
        "id": "ae907ccb-e4a3-4594-9955-bd931031af8f",
        "name": "365 business Proxy Application",
        "publisher": "365 business development",
        "version": "18.0.0.0"
        }
    ],
    [..]
    ```
 3. Führen Sie den Befehl **AL: Download symbols** aus.

## Schritt 3.2: Datei mit 365 business Proxy Application schreiben

In dieser Kurzanleitung wird angenommen, dass eine Datei mit dem Inhalt "Hello World" als `test.txt` im Pfad `C:\temp` geschrieben werden soll.

 1. Öffnen Sie eine bestehende Codeunit oder erstellen Sie eine neuen AL-Datei, in der der AL-Code entwickelt werden kann.
 2. Fügen Sie folgenden AL-Code ein:
    ```al
    procedure WriteHelloWorldToFilesystem()
    var
        proxyApp: Codeunit "bdev.PRX Proxy Application";
        file: Codeunit "Temp Blob";
        stream: OutStream;
        clientId: Guid;
    begin
        // write "Hello World" into the text file
        file.CreateOutStream(stream, TextEncoding::UTF8);
        stream.WriteText('Hello World');

        // set client id from setup
        clientId := '15680e94-f5ad-45d3-9b5a-da2a25533a6b'; // Please use your client id, copied in step 2.5

        proxyApp.PostFile(
            clientId,
            'C:\temp\test.txt',
            file
        );
    end;
    ```
 3. Führen Sie die Funktion `WriteHelloWorldToFilesystem()` aus.

### Siehe auch

 - [Proxy Application Architektur](../proxy-application-whatis/#architecture)
 - [Was ist der Proxy Application Service?](../proxy-application-client-whatis/)
 - [Installation Proxy Application Service](../proxy-application-service-installation/)
 - [Proxy Application Einrichtung](../setup/)
