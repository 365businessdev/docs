# Druckprofil

Ein Druckprofil ist eine **spezielle Konfiguration** Ihres Druckers, mit der **erweiterte Funktionen** gesteuert werden können.

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg" style="--fa-secondary-color: #FF0000; --fa-primary-color: #111111; --fa-secondary-opacity: 0.7"></i> <strong>Wichtig:</strong>
	Für Standardfunktionen wie Duplexdruck, Kopien, Farbausgabe oder Papierauswahl sind keine Druckprofile erforderlich. Möchten Sie jedoch spezielle Druckfunktionen nutzen, erfolgt dies über Druckprofile.
</div>

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg" style="--fa-secondary-color: #FF0000; --fa-primary-color: #111111; --fa-secondary-opacity: 0.7"></i> <strong>Wichtig:</strong>
	Druckprofile sind nur für Drucker verfügbar, die mit dem Emulationstyp <b>Standard</b> eingerichtet wurden.
</div>

Zu den erweiterten Funktionen zählen beispielsweise:
* Finishing-Optionen wie Heften, Lochen oder Binden
* Spezielle Einstellungen für Etikettendrucker (Versatz, Temperatur, Geschwindigkeit)


## Erstellung eines Druckprofils

### Schritt 1: Drucker auswählen

Öffnen Sie im **365 business Print Agent Config Tool** den Bereich **Drucker**, wählen Sie den gewünschten Drucker aus und klicken Sie anschließend auf **Druckprofile**.

![Druckerverwaltung](/assets/images/365-business-print-agent/config-tool/Printer.PNG) 

### Schritt 2: Druckprofile verwalten

Im folgenden Dialog sehen Sie alle vorhandenen Druckprofile. Sie können neue anlegen, bestehende bearbeiten oder löschen. Mit **Speichern** werden Ihre Änderungen übernommen.

![Druckprofilverwaltung](/assets/images/365-business-print-agent/config-tool/PrintProfileOverview.PNG) 

### Schritt 3: Neues Druckprofil erstellen

Klicken Sie auf **Neu**, um den Assistenten zu starten. 
Nach einem kurzen Einführungstext wählen Sie ein PDF für den Probedruck aus und klicken dann auf **Weiter**.

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Hinweis:</strong>
	Das gewählte PDF wird tatsächlich gedruckt!
</div>

![Wizard-1](/assets/images/365-business-print-agent/config-tool/PrintProfileWizard2.PNG)

Im nächsten Schritt klicken Sie auf **Konfigurieren**, um die Druckeinstellungen vorzunehmen. 
Bestätigen Sie Ihre Auswahl mit **OK** – das PDF wird nun ausgedruckt. Wenn Sie mit dem Ergebnis zufrieden sind, klicken Sie auf **Weiter**.<br>
Wenn das Ergebnis nicht zufriedenstellend ist, können Sie über **Konfigurieren** weitere Anpassungen vornehmen.

![Wizard-2](/assets/images/365-business-print-agent/config-tool/PrintProfileWizard3.PNG) 

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Hinweis:</strong>
	Die Darstellung der Druckeinstellungen kann je nach Drucker unterschiedlich ausfallen.
</div>

![Druckeinstellungen-SATO](/assets/images/365-business-print-agent/config-tool/sato_Druckeinstellungen.PNG) 


Geben Sie dem Druckprofil abschließend einen Namen. Dieser Name erscheint später in der **365 business Print Agent App** in Microsoft Dynamics 365 Business Central.
![Wizard-3](/assets/images/365-business-print-agent/config-tool/PrintProfileWizard4.PNG) 

Nach erfolgreicher Einrichtung können Sie den Assistenten beenden.

### Schritt 4: Druckprofil speichern

Klicken Sie auf **Speichern**, um das Profil zu sichern und in Microsoft Dynamics 365 Business Central bereitzustellen.


<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Hinweis:</strong>
	Damit das Druckprofil in Microsoft Dynamics 365 Business Central erscheint, müssen die Drucker dort neu synchronisiert werden. <a href="printer-configuration.md">Hier</a> erfahren Sie mehr.
</div><br/>