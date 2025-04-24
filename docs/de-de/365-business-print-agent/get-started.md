# Erste Schritte

In dieser Kurzanleitung wird erklärt, wie Sie 365 business Print Agent aktivieren und einen Drucker einrichten.

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i> <strong>Hinweis:</strong>
	Testen Sie den 365 business Print Agent <strong>kostenlos in Sandbox-Umgebungen</strong> von Microsoft Dynamics 365 Business Central.<br>
	Zusätzlich gibt es eine <strong>kostenlose 30-tägige Testphase für Echt- und On-Premises-Umgebungen</strong> ohne Funktionseinschränkungen.
</div>
<br/>

## Voraussetzungen

 - Microsoft Dynamics 365 Business Central 2021 release wave 1 (18.0) oder neuer.
 - Ein Microsoft Windows-System (Windows Server 2016 oder höher empfohlen) zur Ausführung von [365 business Print Agent Service](print-agent-client-whatis.md) 
 - Eine Internetverbindung

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg"></i> <strong>Wichtiger Hinweis:</strong>
	Diese Kurzanleitung konzentriert sich auf den Dienstmodus <strong>Print Agent Cloud</strong>.<br/>
	Für die Einrichtung der Direktverbindung besuchen Sie bitte die <a href="setup.md">Dokumentation</a>.
</div>

<br/>

## Schritt 1: Installation von 365 business Print Agent

Öffnen Sie den **Marketplace für Erweiterungen** in Microsoft Dynamics 365 Business Central und suchen Sie nach **365 business Print Agent**.
Installieren Sie die App von Microsoft AppSource und warten Sie, bis die Installation abgeschlossen ist.

---

## Schritt 1.1: Print Agent Einrichtung

Öffnen Sie die Seite **Print Agent Einrichtung** in Microsoft Dynamics 365 Business Central:

 1. Wählen Sie **Print Agent Cloud** als **Dienstmodus**.<br/>
	[Mehr erfahren](print-agent-whatis.md#architektur)<br/>
	![Print Agent Einrichtung - Dienstmodus Auswahl](/assets/images/365-business-print-agent/646d98fab6c688ad444f61f5397dce86873cda4a90db60986a40ba1eb3911ce9.png)
 2. Wählen Sie **Print Agent authentifizieren**.
 3. Kopieren Sie den Wert **Tenant ID**, indem Sie auf den Feldwert klicken.
    
	<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i> <strong>Hinweis:</strong>
	Die Tenant ID verknüpft den Print Agent-Dienst mit Ihrer Microsoft Dynamics 365 Business Central-Umgebung.<br>
	Sie benötigen die Tenant ID später bei der Einrichtung des Print Agent-Dienstes.
    </div>
	
 4. Wählen Sie **Software herunterladen...** um den [365 business Print Agent Service](print-agent-client-whatis.md) herunterzuladen.

---

## Schritt 1.2: Installieren des 365 business Print Agent Service

 1. Speichern Sie die heruntergeladene ZIP-Datei auf dem Windows System, das Sie als _Druckserver_ mit 365 business Print Agent verwenden möchten.
 2. Entpacken Sie die ZIP-Datei (z.B. `C:\install`)
 3. Starten Sie die Setup Datei.<br/>
	[mehr erfahren](print-agent-service-installation.md)

---

## Schritt 1.3: Print Agent Service Einrichtung

 1. Starten Sie die **365 business Print Agent** Anwendung.
 2. Wählen Sie **Konfigurieren**.
 3. Wählen Sie **365 business Print Agent Cloud (empfohlen)**.
 4. Fügen Sie die **Tentant ID** aus Schritt 1.1 ein.
 5. Bestimmen Sie einen **Namen**, um den Client zu identifizieren.
 6. Wählen Sie **Übernehmen**, um die Einrichtung abzuschließen.

---

## Schritt 2: Drucker einrichten

Um Drucker direkt in Microsoft Dynamics 365 Business Central verwenden zu können, müssen diese freigegeben werden.

 1. Öffnen Sie die **365 business Print Agent** Anwendung.
 2. Wählen Sie **Drucker**, um alle verfügbaren Drucker anzuzeigen.
 3. Wählen Sie alle Drucker aus, die Sie für **Microsoft Dynamics 365 Business Central** freigeben möchten.
    ![Shared Printer](/assets/images/365-business-print-agent/ad01eb85658694c75716cb5dbce514bd3763fb94b48e505c0288c2bcf8638737.png)  

---

## Schritt 2.1: Freigegebene Drucker abrufen

 1. Öffnen Sie die **Drucker** in Microsoft Dynamics 365 Business Central.
 2. Wählen Sie **Freigegebene Drucker holen...**, um die freigegbenen Drucker abzurufen.
    ![Printers page actions](/assets/images/365-business-print-agent/567d50c1f1eb153215a9880611e4bf22f762cf6e6899086d80325209fc99ce9a.png)

---

## Schritt 2.2: Aktivieren der Druckereinstellung

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg"></i> <strong>Gut zu wissen:</strong>
	Freigegebene Drucker sind in Microsoft Dynamics 365 Business Central nicht direkt verfügbar.<br>
	Stattdessen müssen Sie <a href="printer-configuration.md">Druckereinstellungen</a> erstellen, die dann in der <strong>Druckerauswahl</strong> oder in der <strong>Report Request Page</strong> ausgewählt werden können.<br><br/>
	Für jeden Drucker wird automatisch eine vom System erstellte Druckereinstellung angelegt, basierend auf den verfügbaren Druckerfunktionen.
</div>

 1. **Druckereinstellungen** auswählen.
 2. **Bearbeiten** auswählen.
 3. Überprüfen Sie die vom System erstellte Druckereinstellung.
 4. **Aktiviert** auswählen, um die Druckereinstellung zu aktivieren.

---

## Schritt 3: Druckereinstellungen zuweisen

Um die Drucker optimal zu nutzen, empfehlen wir, einen Drucker (Konfiguration) für bestimmte Berichte oder Benutzer einzurichten.
Die Konfiguration erfolgt in Microsoft Dynamics 365 Business Central auf der Standardseite **Druckerauswahl**.

 1. **Druckerauswahl** öffnen.  
 2. Wählen Sie eine **Benutzer-ID** aus oder lassen Sie das Feld leer (für alle Benutzer).
 3. Geben Sie eine **Berichts-ID** an oder lassen Sie diese leer (für alle Berichte).
 4. Wählen Sie den **Druckernamen** aus.

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i> <strong>Hinweis:</strong>
	In der Seite **Druckerverwaltung** sehen Sie alle aktivierten Drucker (Konfigurationen).<br>
	Von hier können Sie Druckereinstellungen öffnen oder einen Drucker als Standard festlegen.<br>
	<img src="/assets/images/365-business-print-agent/f66b313410695f3a550f126155fc3b9d6abf9c663c5840e9d2c1887948fbfd41.png">
</div>

---

### Siehe auch

 - [Print Agent Architektur](print-agent-whatis.md#architektur)
 - [Was ist der Print Agent Service?](print-agent-client-whatis.md)
 - [Installation Print Agent Service](print-agent-service-installation.md)
 - [Print Agent Einrichtung](setup.md)
 - [Drucker](printer.md)
 - [Drucker Konfiguration](printer-configuration.md)
