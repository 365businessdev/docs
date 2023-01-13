#### Wie verbinde ich mich zu meiner Microsoft Dynamics 365 Business Central Instanz?

Nach dem Start der Anwendung erscheint der Connection Manager, indem die Verbindungsdaten zur Microsoft Dynamics 365 Business Central Server Instanz eingegeben werden.

![Verbindungsmanager](/assets/images/365-business-al-extension-manager/connection-manager.de-DE.png)

Die Einstellungen können anschließend gespeichert werden.

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Hinweis:</strong> Für die Kommunikation wird ein aktivierter OData-/API-Service und Development Service an der Microsoft Dynamics 365 Business Central Server Instanz benötigt.
</div>

Mit `Verbinden` wird eine Verbindung zur Serverinstanz aufgebaut und die installierten Erweiterungen werden heruntergeladen und angezeigt.

##### Wie verbinde ich mit mit einer Business Central Instanz hinter einem Reverse Proxy?

Wählen Sie im Verbindungsmanager die Option `Traefik benutzen` um sich mit einer Microsoft Dynamics 365 Business Central Server Instanz zu verbinden, die hinter einem Traefik Reverse Proxy betrieben wird.

Verwenden Sie als Instanzname ausschließlich den tatsächlichen Instanznamen. Zusätze, die im Rahmen der Reverse Proxy Regeln festgelegt werden, werden automatisch angewandt.

##### Wie verbinde ich mich mit einer Microsoft SaaS Sandbox?

Aktuell wird die Verbindung mit einer Microsoft SaaS Sandbox für Microsoft Dynamics 365 Business Central nicht unterstützt.

#### Was ist die 365 business Automation API App?

Bei der Verbindung mit einer Microsoft Dynamics 365 Business Central Service Instanz wird geprüft, ob die Erweiterung `365 business Automation API` App installiert ist. Diese App stellt zusätzliche Funktionalitäten bereit für die Installation, Deinstallation und Abhängigkeitsdiagramme.

Die Erweiterung kann über Aufruf `App Automation API installieren` direkt installiert werden. Dies wird empfohlen, da andernfalls zum Beispiel Server Runtime Informationen vom Service nicht gelesen werden können.

#### Wie installiere ich Erweiterungen über den AL Extension Manager?

Zur Installation einer oder mehrerer Erweiterungen oder Partner Apps, gehen Sie bitte wie folgt vor:

 1. Nachdem Sie sich mit einer Microsoft Dynamics 365 Business Central Server Instanz verbunden haben, klicken Sie im Menüband auf die Aktion `Extension hochladen`.<br>![Extension hochladen](/assets/images/365-business-al-extension-manager/upload-extension-button.de-DE.png)

 2. Es öffnet sich ein Dateiauswahl Dialog, in dem Sie nun beliebig viele `*.app` Dateien auswählen können.
 
 3. Die Anwendung analysiert die Erweiterungen und liest die Abhängigkeiten und Bedingungen, wie bspw. Server Runtime Version, aus.<br>![Extensions hochladen](/assets/images/365-business-al-extension-manager/upload-extension-view.de-DE.png)<br>
    <div class="alert alert-info">
        <i class="fa-solid fa-lightbulb"></i> <strong>Hinweis:</strong>Hierbei werden Ihnen Warnungen und Fehler direkt angezeigt. So sehen Sie bspw. vor der eigentlichen Installation ob alle Abhängigkeiten erfüllt sind oder die Server Runtime Version kompatibel mit der Runtime Version der Erweiterung ist.
    </div>

 4. Klicken Sie auf `Upload` um die ausgewählten Erweiterungen oder Partner Apps zu installieren.

#### Wie deinstalliere ich Erweiterungen über den AL Extension Manager?

Über den Button `Extension entfernen` im Hauptfenster des AL-Extension Managers wird die ausgewählte Erweiterung in Microsoft Dynamics 365 Business Central deinstalliert und die Veröffentlichung aufgehoben (Unpublish)*, dabei wird geprüft ob ggf. abhängige Erweiterungen ebenfalls deinstalliert werden.

![Deinstallation Abhängigkeiten](/assets/images/365-business-al-extension-manager/unpublish-extension.de-DE.png)

<div class="alert alert-notice">
    <i class="fa-solid fa-notes"></i> <strong>Wichtig:</strong>Zum Aufheben der Veröffentlichung einer Erweiterung (<i>Unpublish</i>) ist die <code>365 business App Automation API</code> Erweiterung (im Lieferumfang enthalten) erforderlich.
</div>

Hierbei werden sämtliche Abhängigkeiten berücksichtigt und entsprechend aufgelöst. Sollte es notwendig sein andere AL-Erweiterungen zu deinstallieren, so wird der Anwender entsprechend darüber informiert und die Deinstallation wird automatisch durchgeführt.