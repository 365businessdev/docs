---
title: Druckprofil
---

Ein Druckprofil stellt eine spezielle Konfiguration Ihres Druckers dar, die erweiterte Funktionalitäten steuert.

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg" style="--fa-secondary-color: #FF0000; --fa-primary-color: #111111; --fa-secondary-opacity: 0.7"></i> <strong>Wichtig:</strong>Für die Verarbeitung von einfachen Druckaufträgen (Duplex, Kopien, Ausgabefarbe, Papierart, -fach) werden keine Druckprofile benötigt. Wenn jedoch erweiterte Funktionalitäten des Druckers genutzt werden sollen, ist dies über die Erstellung von Druckprofilen möglich.
</div>

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg" style="--fa-secondary-color: #FF0000; --fa-primary-color: #111111; --fa-secondary-opacity: 0.7"></i> <strong>Wichtig:</strong>Druckprofile stehen nur bei Druckern zur Verfügung, welche mit dem Standard-Emulationstyp "PDF" konfiguriert sind.
</div>

Erweiterte Funktionalitäten sind z.B.:

* Finishing-Optionen wie Klammern, Lochen und Binden,
* Druckoptionen für Label-Drucker, wie Versatz, Temperatur und Druckgeschwindigkeit.

## Erstellung eines Druckprofils

#### Schritt 1: Auswahl des Druckers

Wählen Sie im 365 business Print Agent Config "Drucker" aus und markieren Sie den Drucker, für den Sie ein Druckprofil erstellen möchten. Wählen Sie anschließend den Menüpunkt "Druckprofile".

![Druckerverwaltung](/assets/images/365-business-print-agent/config-tool/Printer.PNG) 

#### Schritt 2: Verwaltung der Druckprofile

Im folgenden Dialog werden alle vorhandenen Druckprofile für den ausgewählten Drucker angezeigt. Es besteht die Möglichkeit, Druckprofile zu erstellen, zu bearbeiten und zu löschen. Bestätigen Sie Ihre Änderungen mit dem Button "Speichern", um sie in der Datenbank zu hinterlegen.

![Druckprofilverwaltung](/assets/images/365-business-print-agent/config-tool/PrintProfileOverview.PNG) 

#### Schritt 3: Erstellung eines Druckprofils

Klicken Sie auf "Neu", um ein Druckprofil zu erstellen. Es öffnet sich ein Assistent, der Sie durch den Vorgang führt. 
Nach einem Einführungstext werden Sie gebeten, eine PDF-Datei für den Probedruck auszuwählen. Nach der Auswahl der PDF klicken Sie auf "Weiter".

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Hinweis:</strong> Beachten Sie, dass das ausgewählte PDF tatsächlich gedruckt wird.
</div>

![Wizard-1](/assets/images/365-business-print-agent/config-tool/PrintProfileWizard2.PNG)

Auf der nächsten Seite können Sie über den Button "Konfigurieren" den Dialog zur Druckeinstellung aufrufen. 
Nehmen Sie Ihre Konfiguration vor und bestätigen Sie diese mit "OK". Das PDF wird dann gedruckt.<br/>
Überprüfen Sie das Druckergebnis und, falls es Ihren Anforderungen entspricht, klicken Sie auf "Weiter", um fortzufahren. 
Wenn das Ergebnis nicht zufriedenstellend ist, können Sie die Einstellungen über "Konfigurieren" weiter anpassen.

![Wizard-2](/assets/images/365-business-print-agent/config-tool/PrintProfileWizard3.PNG) 

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Hinweis:</strong> Der Dialog zur Anpassung der Druckeinstellungen kann je nach Drucker unterschiedlich aussehen.
</div>
![Druckeinstellungen-SATO](/assets/images/365-business-print-agent/config-tool/sato_Druckeinstellungen.PNG) 

Im letzten Schritt geben Sie dem Druckprofil einen Namen. Unter diesem Namen finden Sie das Druckprofil dann in der 365 business Print Agent App in Microsoft Dynamics Business Central.

![Wizard-3](/assets/images/365-business-print-agent/config-tool/PrintProfileWizard4.PNG) 

Nach erfolgreicher Einrichtung können Sie den Assistenten beenden.

#### Schritt 4: Speichern der Druckprofile

Wählen Sie "Speichern", um das Druckprofil anzulegen und es in der 365 business Print Agent App zur Verfügung zu stellen.


<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Hinweis:</strong>Um die Druckprofile zu nutzen, müssen die Drucker in der 365 business Print Agent App erneut abgerufen werden. <a href="printer-configuration.md">Hier</a> erfahren Sie mehr.
</div><br/>