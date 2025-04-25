# Proxy Application Client Installation

Erfahren Sie hier, wie Sie den **365 business Proxy Application Client** installieren und konfigurieren.

---

## Voraussetzungen

- **Betriebssystem**  
  - Windows 10 oder höher (64-Bit)  
  - Windows Server 2016 oder höher (64-Bit)

- **Software**  
  - .NET 8.0
  - [Download des Proxy Application Client Installers](https://365businessapi.com/api/SoftwareDownload?AppId=da472ae3-fa8a-406f-bbea-c2aafd5f77d5)


<div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Hinweis</strong>
    Wenn Sie den Proxy Application Client aktualisieren möchten, laden Sie die <a href="https://365businessapi.com/api/SoftwareDownload?AppId=da472ae3-fa8a-406f-bbea-c2aafd5f77d5">aktuelle Version</a> herunter.<br>
	Ihre Konfiguration bleibt erhalten.
</div>

---

## Vorbereitungen

Bitte lesen Sie vorab den Artikel [Was ist 365 business Proxy Application?](proxy-application-whatis.md), um zu entscheiden, auf welchem System der Client installiert werden soll.

<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Gut zu wissen</strong>
    Für die Installation benötigen Sie die <strong>Tenant-ID</strong> Ihrer Business Central Umgebung.<br>
    Diese finden Sie in der Seite <strong>Proxy Application Einrichtung</strong> im Microsoft Dynamics Business Central.<br>
    Weitere Informationen finden Sie in der Anleitung <a href="get-started.md">Erste Schritte</a>.
</div>

---

## Installation des Proxy Application Client

1. Laden Sie die aktuelle Version des Clients als ZIP-Datei herunter:<br> 
   [Jetzt herunterladen](https://365businessapi.com/api/SoftwareDownload?AppId=da472ae3-fa8a-406f-bbea-c2aafd5f77d5)
2. Speichern Sie die Datei auf dem gewünschten System.
3. Entpacken Sie das ZIP-Archiv (z. B. nach `C:\install`).
4. Starten Sie die Setup-Datei und folgen Sie dem Installationsassistenten.
5. Geben Sie Ihre **Tenant-ID** sowie einen eindeutigen **Namen** für den Client ein.<br>
   ![Dateneingabe während der Installation](/assets/images/365-business-proxy-application/c21483cf5f877db2cc391ffa37013ce6d0fca92b9ee7ecc22d7dbbf7d97403f6.png)
6. *(Optional)* Tragen Sie Benutzername und Kennwort eines Domänenkontos ein, unter dem der Dienst ausgeführt werden soll.<br>
   ![Anmeldung mit Benutzerkonto](/assets/images/365-business-proxy-application/bd510f87-83cc-471f-a2e8-bb1ef9dc428a.png)

	<div class="alert alert-info">
		<i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
		<strong>Hinweis</strong>
		Wenn Sie keinen Benutzer angeben, wird 365 business Proxy Application Client im Kontext <strong>Lokales System</strong> ausgeführt.
	</div>

7. Nach erfolgreicher Installation wird der Dienst automatisch gestartet und erscheint in Business Central unter **Proxy Application Clients**.

### Siehe auch  

 - [Plugin Installation](plugins/install.md)