In dieser Kurzanleitung wird erklärt, wie Sie 365 business Proxy Application in Ihrer Microsoft Dynamics 365 Business Central Umgebung installieren und einrichten.

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Hinweis:</strong> Testen Sie den 365 business Proxy Application, inkl. aller Standard Plugins, ohne Kosten in Sandbox-Umgebungen von Microsoft Dynamics 365 Business Central. Zusätzlich gibt es für Echt- und On-Premises-Umgebungen eine kostenlose 30-tägige Testphase ohne Funktionseinschränkungen.
</div>

## Voraussetzungen

 - Microsoft Dynamics 365 Business Central 2021 release wave 1 (18.0) oder neuer.
 - Ein Microsoft Windows-Clientgerät zur Ausführung von [365 business Proxy Application Client](https://365businessapi.com/api/SoftwareDownload?AppId=da472ae3-fa8a-406f-bbea-c2aafd5f77d5).
 - Eine Internetverbindung.

<div class="alert alert-notice">
    <i class="fa-solid fa-notes"></i> <strong>Wichtiger Hinweis:</strong>Diese Kurzanleitung beschreibt die Einrichtung und Inbetriebnahme von 365 business Proxy Application mit dem File-Plugin.<br/>Für weitere Informationen zur Einrichtung weiterer Plugins besuchen Sie bitte die <a href="../plugins/">Dokumentation</a>.
</div>

<br/>

## Schritt 1: Installation von 365 business Proxy Application

Öffnen Sie den **Marketplace für Erweiterungen** in Microsoft Dynamics 365 Business Central und suchen Sie nach **365 business Proxy Application**.
Installieren Sie die App von Microsoft AppSource und warten Sie, bis die Installation abgeschlossen ist.

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Hinweis:</strong>Die App Pakete für Ihre Microsoft Dynamics 365 Business Central <strong>On-Premise</strong> Umgebung finden Sie in unseren <a href="https://downloads.365businessdev.com/de-DE/365-business-proxy-application/" target="_blank">Downloads</a>.
</div>

<br/>

## Schritt 1.1: Proxy Application Einrichtung

Um den 365 business Proxy Application einzurichten, öffnen Sie die Seite **Proxy Application Einrichtung** in Microsoft Dynamics 365 Business Central.

 1. Wählen Sie **Authentifizieren** um Ihre Microsoft Dynamics 365 Business Central Umgebung mit 365 business Proxy Application Service zu verbinden.
 2. Kopieren Sie den Wert **Tenant ID** indem Sie auf den Feldwert klicken.
    <div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Hinweis:</strong> Gibt die Tenant-ID an, die zur Sicherung der Kommunikation zwischen dem Proxy Application Dienst und Microsoft Dynamics 365 Business Central verwendet wird.
    </div>
 4. Wählen Sie **Client herunterladen...** um  [365 business Proxy Application Client](../proxy-application-client-whatis/) herunterzuladen.

<br/>

## Schritt 1.2: Installieren von 365 business Proxy Application Client

 1. Speichern Sie die heruntergeladene ZIP-Datei auf dem Server oder Computer, den Sie mit 365 business Proxy Application verwenden möchten.
 2. Entpacken Sie die ZIP-Datei (z.B. `C:\install`)
 3. Starten Sie die Setup Datei und folgen Sie den Anweisungen.
 4. Geben Sie die **Tenant ID** aus dem vorherigen Schritt und einen **Namen** für den Client ein, der Ihnen dabei hilft den Client in Microsoft Dynamics 365 Business Central zu identifizieren.
 5. *(Optional)* Geben Sie einen Domänenbenutzer und das Kennwort ein, mit dem 365 business Proxy Application Client betrieben werden soll.
    <div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Hinweis:</strong> Wenn Sie keinen Benutzer angeben, wird 365 business Proxy Application Client im Kontext **Lokales System** ausgeführt.
    </div>

## Schritt 2: Proxy Application Client einrichten

 1. Microsoft Dynamics 365 Business Central öffnen.
 2. **Proxy Application Clients** Seite öffnen.
 3. Wählen Sie **Aktualisieren** um die verfügbaren 365 business Proxy Application Clients zu laden.
 4. Wählen Sie den gewünschten Proxy Application Client, an Hand des Namens den Sie im vorherigen Schritt vergeben haben.
 5. Wählen Sie **Plugins installieren**.
 6. Klicken Sie **Weiter**.
 7. Wählen Sie die Plugins (z.B. File Plugin), die Sie installieren möchten.
 8. Klicken Sie **Weiter**.
 9. Nach der erfolgten Plugin Installation klicken Sie **Schließen**.

## Schritt 2.1: Standard Clients für Plugin (Optional)

Um die Ansteuerung von Clients zu vereinfachen gibt es die Möglichkeit einen Standard Client für Plugins zu definieren. Hierdurch ermöglichen Sie 365 business Proxy Application automatisch den Client für das aktuelle Plugin auszuwählen.

 1. Microsoft Dynamics 365 Business Central öffnen.
 2. **Proxy Application Einrichtung** Seite öffnen.
 3. Wählen Sie **Zugehörig**.
 4. Wählen Sie **Standard Clients**.
 5. Wählen Sie das **Plugin** aus, für das Sie einen Standard Client festlegen möchten (z.B. File Plugin).
 6. Wählen Sie den **Namen** des Clients aus.

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Hinweis:</strong>Die Auswahl von Clients ist nur möglich, wenn auf dem Client bereits das ausgewählte Plugin installiert ist.
</div>

## Schritt 3: Implementierung File Plugin

Im folgenden wird die Implementierung des File Plugin beschrieben. Hierbei wird beispielhaft eine Datei geschrieben und anschließend wieder gelesen.

Eine detaillierte Dokumenation finden Sie in der [Plugin Dokumenation](../plugins/).

```al
local procedure WriteReadFileExample()
var
    filePath: Text;
begin
    filePath := WriteFile('Hello, World!');

    if (ReadFile(filePath) <> 'Hello, World!') then
        Error('The file content does not matcht.')
    else
        Message('The file has been written.');
end;

local procedure WriteFile(content: Text) filePath: Text
var
    proxyApp: Codeunit "bdev.PRX Proxy Application";
begin
    filePath := 'c:\temp\test.txt';

    // invoke Proxy Application plugin
    if (not proxyApp.PostFile(
        filePath,
        content
    )) then
        Error('Error: %1', GetLastErrorText());
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