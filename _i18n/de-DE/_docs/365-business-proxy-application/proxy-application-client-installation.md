## Voraussetzungen

- Betriebssystem
    - Windows 10 oder höher (64-bit)
    - Windows Server 2016 oder höher (64-bit)
- .NET 6.0
- Internetverbindung
- [365 business Proxy Application Client Installer](https://365businessapi.com/api/SoftwareDownload?AppId=da472ae3-fa8a-406f-bbea-c2aafd5f77d5)

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Hinweis:</strong> Um Ihren Proxy Application Client zu aktualisieren, laden Sie die <a href="https://365businessapi.com/api/SoftwareDownload?AppId=da472ae3-fa8a-406f-bbea-c2aafd5f77d5">neuste Version</a> herunter. Nach der Installation werden Ihre Einstellungen wiederhergestellt. 
</div>

## Bevor Sie starten

Bitte [lesen Sie den Artikel](../proxy-application-whatis) um herauszufinden, wo sie den 365 business Proxy Application Client am besten installieren.

<div class="alert alert-notice">
    <i class="fa-solid fa-notes"></i> <strong>Gut zu wissen:</strong>Bitte beachten Sie, dass zur vollständigen Installation des 365 business Proxy Application Client die Angabe der <strong>Tenant ID</strong> Ihrer Microsoft Dynamics 365 Business Central Umgebung notwendig ist.<br>
    <br>
    Sie finden diese Information in der <strong>Proxy Application Einrichtung</strong>.<br>
    <br>
    Für weitere Informationen besuchen Sie bitte die Seite <a href="../get-started/">Erste Schritte</a>.
</div>

## Installation des Proxy Application Client

 1. [Download](https://365businessapi.com/api/SoftwareDownload?AppId=da472ae3-fa8a-406f-bbea-c2aafd5f77d5) der neusten Version des 365 business Proxy Application Client.
 2. Speichern Sie die heruntergeladene ZIP-Datei auf dem Server oder Computer, den Sie mit 365 business Proxy Application verwenden möchten.
 3. Entpacken Sie die ZIP-Datei (z.B. `C:\install`)
 4. Starten Sie die Setup Datei und folgen Sie den Anweisungen.
 5. Geben Sie die **Tenant ID** Ihrer Microsoft Dynamics 365 Business Central Umgebung und einen **Namen** für den Client ein, der Ihnen dabei hilft den Client in Microsoft Dynamics 365 Business Central zu identifizieren.<br>
    ![Proxy Application Client Installation - Dateneingabe](/assets/images/365-business-proxy-application/c21483cf5f877db2cc391ffa37013ce6d0fca92b9ee7ecc22d7dbbf7d97403f6.png)
 6. *(Optional)* Geben Sie einen Domänenbenutzer und das Kennwort ein, mit dem 365 business Proxy Application Client betrieben werden soll.<br>
    ![Proxy Application Client Installation - Anmeldung](/assets/images/365-business-proxy-application/bd510f87-83cc-471f-a2e8-bb1ef9dc428a.png)
    <div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Hinweis:</strong> Wenn Sie keinen Benutzer angeben, wird 365 business Proxy Application Client im Kontext <strong>Lokales System</strong> ausgeführt.
    </div>
 7. Nach Abschluss der Installation wird der Dienst automatisch gestartet und steht sofort in Microsoft Dynamics 365 Business Central, in der Seite **Proxy Application Clients** zur Verfügung.

## Proxy Application Plugins installieren

Die Installation der Plugins für 365 business Proxy Application erfolgt über Microsoft Dynamics 365 Business Central.

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