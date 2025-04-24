# Erste Schritte 

In dieser Kurzanleitung wird erklärt, wie Sie 365 business Proxy Application in Ihrer Microsoft Dynamics 365 Business Central Umgebung installieren und einrichten.

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i> <strong>Hinweis</strong> Testen Sie den 365 business Proxy Application, inkl. aller Standard Plugins, ohne Kosten in Sandbox-Umgebungen von Microsoft Dynamics 365 Business Central. Zusätzlich gibt es für Echt- und On-Premises-Umgebungen eine kostenlose 30-tägige Testphase ohne Funktionseinschränkungen.
</div>

## Voraussetzungen

 - Microsoft Dynamics 365 Business Central 2021 release wave 1 (18.0) oder neuer.
 - Ein Microsoft Windows-Clientgerät zur Ausführung von [365 business Proxy Application Client](https://365businessapi.com/api/SoftwareDownload?AppId=da472ae3-fa8a-406f-bbea-c2aafd5f77d5).
 - Eine Internetverbindung.

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg"></i> <strong>Wichtiger Hinweis</strong>Diese Kurzanleitung beschreibt die Einrichtung und Inbetriebnahme von 365 business Proxy Application mit dem File-Plugin.<br/>Für weitere Informationen zur Einrichtung weiterer Plugins besuchen Sie bitte die <a href="plugins.md">Dokumentation</a>.
</div>

<br/>

## Schritt 1: Installation von 365 business Proxy Application

Öffnen Sie den **Marketplace für Erweiterungen** in Microsoft Dynamics 365 Business Central und suchen Sie nach **365 business Proxy Application**.
Installieren Sie die App von Microsoft AppSource und warten Sie, bis die Installation abgeschlossen ist.

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i> <strong>Hinweis</strong>Die App Pakete für Ihre Microsoft Dynamics 365 Business Central <strong>On-Premise</strong> Umgebung finden Sie in unseren <a href="https://downloads.365businessdev.com/de-DE/365-business-proxy-application/" target="_blank">Downloads</a>.
</div>

<br/>

### Schritt 1.1: Proxy Application Einrichtung

Um den 365 business Proxy Application einzurichten, öffnen Sie die Seite **Proxy Application Einrichtung** in Microsoft Dynamics 365 Business Central.

 1. Wählen Sie **Authentifizieren** um Ihre Microsoft Dynamics 365 Business Central Umgebung mit 365 business Proxy Application Service zu verbinden.
 2. Kopieren Sie den Wert **Tenant ID** indem Sie auf den Feldwert klicken.
    <div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i> <strong>Hinweis</strong> Gibt die Tenant-ID an, die zur Sicherung der Kommunikation zwischen dem Proxy Application Dienst und Microsoft Dynamics 365 Business Central verwendet wird.
    </div>
 4. Wählen Sie **Client herunterladen...** um  [365 business Proxy Application Client](proxy-application-client-whatis.md) herunterzuladen.

<br/>

### Schritt 1.2: Installieren von 365 business Proxy Application Client

 1. Speichern Sie die heruntergeladene ZIP-Datei auf dem Server oder Computer, den Sie mit 365 business Proxy Application verwenden möchten.
 2. Entpacken Sie die ZIP-Datei (z.B. `C:\install`)
 3. Starten Sie die Setup Datei und folgen Sie den Anweisungen.
 4. Geben Sie die **Tenant ID** aus dem vorherigen Schritt und einen **Namen** für den Client ein, der Ihnen dabei hilft den Client in Microsoft Dynamics 365 Business Central zu identifizieren.
 5. *(Optional)* Geben Sie einen Domänenbenutzer und das Kennwort ein, mit dem 365 business Proxy Application Client betrieben werden soll.
    <div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i> <strong>Hinweis</strong> Wenn Sie keinen Benutzer angeben, wird 365 business Proxy Application Client im Kontext <strong>Lokales System</strong> ausgeführt.
    </div>

## Schritt 2: Proxy Application Client einrichten

Um auf die Proxy Application Clients direkt in Microsoft Dynamics 365 Business Central zugreifen zu können, müssen die Clients aktiviert werden.

 1. Öffnen Sie die  **Proxy Application Einrichtung** in Microsoft Dynamics 365 Business Central.
 2. Beim Öffnen der Seite werden automatisch alle verfügbaren 365 business Proxy Application Clients abgerufen und werden in der Einrichtung angezeigt:
    ![Proxy Application Einrichtung](/assets/images/365-business-proxy-application/9c4905bab8db474caa704353d2772447fdcea02339e7dbb5ec2e138974df12dd.png)  
 3. Wählen Sie **Aktiviert** um einen Proxy Application Client für die Verwendung zu aktivieren.
 4. Klicken Sie auf den **Namen** des Proxy Application Client um die Karte zu öffnen.
 5. In der Proxy Application Client Karte finden Sie das Feld **Client ID**.
    <div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i> <strong>Hinweis</strong> Die Client ID wird verwendet, um den Proxy Application Dienst zu adressieren. 365 business Proxy Application stellt zusätzlich Funktionen zur Verfügung um die Clients, die ein spezifisches Plugin unterstützen, zurückgibt. In dieser Kurzanleitung wird allerdings davon ausgegangen, dass die spezifische Client ID verwendet wird.
    </div>

### Schritt 2.1: Proxy Application Client Plugins installieren

![Proxy Application Client Plugin Installation](/assets/images/365-business-proxy-application/proxyapp-installplugin-de-DE.gif)

 1. Microsoft Dynamics 365 Business Central öffnen.
 2. **Proxy Application Clients** Seite öffnen.
 3. Wählen Sie **Aktualisieren** um die verfügbaren 365 business Proxy Application Clients zu laden.
 4. Wählen Sie den gewünschten Proxy Application Client, an Hand des Namens den Sie im vorherigen Schritt vergeben haben.
 5. Wählen Sie **Plugins installieren**.
 6. Klicken Sie **Weiter**.
 7. Wählen Sie die Plugins (z.B. File Plugin), die Sie installieren möchten.<br>
    ![Plugin Auswahl](/assets/images/365-business-proxy-application/2fd00b9a-6e91-4db9-9418-05a7cb61c22f.png)
 8. Klicken Sie **Weiter**.
 9.  Nach der erfolgten Plugin Installation klicken Sie **Schließen**.

### Schritt 2.2: Standard Clients für Plugin *(Optional)*

Um die Ansteuerung von Clients zu vereinfachen gibt es die Möglichkeit einen Standard Client für Plugins zu definieren. Hierdurch ermöglichen Sie 365 business Proxy Application automatisch den Client für das aktuelle Plugin auszuwählen.

 1. Microsoft Dynamics 365 Business Central öffnen.
 2. **Proxy Application Einrichtung** Seite öffnen.
 3. Wählen Sie **Zugehörig**.
 4. Wählen Sie **Standard Clients**.
 5. Wählen Sie das **Plugin** aus, für das Sie einen Standard Client festlegen möchten (z.B. File Plugin).
 6. Wählen Sie den **Namen** des Clients aus.

![Proxy Application Einrichtung - Standard Client für Plugin](/assets/images/365-business-proxy-application/3fafd304-0799-4d9a-a079-a6a13e1a27ff.png)

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i> <strong>Hinweis</strong>Die Auswahl von Clients ist nur möglich, wenn auf dem Client bereits das ausgewählte Plugin installiert ist.
</div>

## Schritt 3: Implementierung File Plugin

In dieser Kurzanleitung wird erklärt, wie Sie mit Hilfe von 365 business Proxy Application eine Datei in Ihrem lokalen Dateisystem schreiben. Im folgenden wird eine AL-Erweiterung für Microsoft Dynamics 365 Business Central vorgenommen. Diese Kurzanleitung geht dabei davon aus, dass das AL-Projekt bereits existiert und nur um die Integration mit 365 business Proxy Application erweitert werden muss.

### Schritt 3.1: Abhängigkeit zu 365 business Proxy Application

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

### Schritt 3.2: AL Implementierung

Im folgenden wird beispielhaft eine Datei geschrieben und anschließend wieder gelesen. In dieser Kurzanleitung wird angenommen, dass eine Datei mit dem Inhalt "Hello, World!" als `test.txt` im Pfad `C:\temp` geschrieben werden soll.

Eine detaillierte Dokumenation finden Sie in der [Plugin Dokumenation](plugins.md).

 1. Öffnen Sie eine bestehende Codeunit oder erstellen Sie eine neuen AL-Datei, in der der AL-Code entwickelt werden kann.
 2. Fügen Sie folgenden AL-Code ein:
    ```al
    procedure WriteAndReadHelloWorldFile()
    var
        proxyApp: Codeunit "bdev.PRX Proxy Application";
        file: Codeunit "Temp Blob";
        filePath: Text;
        sampleText: Label 'Hello, World!', Locked = true;
    begin
        // write "Hello World" into the text file
        CreateFileInTempBlob(file, sampleText);

        // set file path
        filePath := 'c:\temp\test.txt';

        // write file to filesystem
        if (not proxyApp.PostFile(
            filePath,
            file
        )) then
            Error('Failed to write file!\Error: %1', GetLastErrorText());

        Clear(file); // reset temp blob

        // read file from filesystem
        file := proxyApp.GetFile(
            filePath
        );

        // compare content with expected content
        if (ReadContentFromTempBlob(file) <> sampleText)then
            Error('The file content does not matcht.')
        else
            Message('The file has been written.');
    end;

    local procedure CreateFileInTempBlob(var file: Codeunit "Temp Blob", fileContent: Text)
    var
        stream: OutStream;
    begin
        file.CreateOutStream(stream, TextEncoding::UTF8);
        stream.WriteText(fileContent);
    end;


    local procedure ReadFile(filePath: Text): Text
    var
        proxyApp: Codeunit "bdev.PRX Proxy Application";
        file: Codeunit "Temp Blob";
    begin
        // invoke Proxy Application plugin
        file := proxyApp.GetFile(
            filePath
        );

        exit(ReadContentFromTempBlob(file));
    end;
    ```
 3. Führen Sie die Funktion `WriteAndReadHelloWorldFile()` aus.

# Siehe auch

 - [Proxy Application Architektur](proxy-application-whatis.md#architektur)
 - [Was ist der Proxy Application Service?](proxy-application-client-whatis.md)
 - [Installation Proxy Application Service](proxy-application-client-installation.md)
 - [Proxy Application Einrichtung](setup.md)