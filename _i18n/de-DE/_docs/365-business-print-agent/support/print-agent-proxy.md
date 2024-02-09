#### Problem
Der 365 business Print Agent Cloud Service und der 365 business Print Agent Server sind für sichere Netzwerkumgebungen optimiert, indem sie über HTTPS eine Verbindung zu unseren Cloud-Servern herstellen.
Auf diese Weise lassen die meisten Firewalls unseren Datenverkehr bereits ohne zusätzliche Konfiguration passieren.

Wenn jedoch die Netzwerksicherheitsrichtlinien Ihrer Organisation erfordern, dass der gesamte ausgehende Internetverkehr über einen Proxyserver geleitet wird, müssen Sie den 365 business Print Agent Cloud Service und/oder den 365 business Print Agent Server Service so konfigurieren, dass sie diesen Proxyserver explizit verwendet.

#### Lösung
<br>
##### 365 business Print Agent Cloud
Um dem Service mitzuteilen, welcher Proxyserver verwendet werden soll, müssen Sie die Proxy-Konfigurationsdatei des 365 business Print Agent Cloud Service im Verzeichnis ```C:\ProgramData\365 business development GmbH\365 business Print Agent\CloudClient``` erstellen.


1. Erstellen Sie mit einem Texteditor (z.B. Notepad) im Administrator Modus die Datei ```proxy.json``` und fügen Sie den folgenden Inhalt ein.
    
    1.1. Konfiguration eines Proxy mit Benutzeranmeldedaten:
    ```json
    {
      "Proxy": {
        "Enabled": true,
        "Url": "http://hostname:port",
        "BypassProxyOnLocal": false,
        "UserCredentials": {
    		"Username": "user.name",
    		"Password": "p@ssword"
    	}
      }
    }
    ```
    1.2. Konfiguration eines Proxy ohne Benutzeranmeldedaten:
    ```json
    {
      "Proxy": {
        "Enabled": true,
        "Url": "http://hostname:port",
        "BypassProxyOnLocal": false,
        "UserCredentials": null
      }
    }
    ```
2. Ersetzen Sie den Wert im Feld ```Url``` mit dem Proxyserver Ihrer Organisation.
3. Im Fall, dass der Proxyserver eine Benutzeranmeldung benötigt, ersetzen Sie die Werte in den Feldern ```Username``` und ```Password``` mit den entsprechenden Werten.
4. Speichern Sie die Datei und starten Sie den 365 business Print Agent Cloud Service neu, um die Einstellungen anzuwenden.

##### 365 business Print Agent Server
Um dem Service mitzuteilen, welcher Proxyserver verwendet werden soll, müssen Sie die Proxy-Konfigurationsdatei des 365 business Print Agent Server Service im Verzeichnis ```C:\ProgramData\365 business development GmbH\365 business Print Agent\Server``` erstellen.

1. Erstellen Sie mit einem Texteditor (z.B. Notepad) im Administrator Modus die Datei ```proxy.json``` und fügen Sie den folgenden Inhalt ein:
    
    1.1. Konfiguration eines Proxy mit Benutzeranmeldedaten:
    ```json
    {
      "Proxy": {
        "Enabled": true,
        "Url": "http://hostname:port",
        "BypassProxyOnLocal": false,
        "UserCredentials": {
    		"Username": "user.name",
    		"Password": "p@ssword"
    	}
      }
    }
    ```
    1.2. Konfiguration eines Proxy ohne Benutzeranmeldedaten:
    ```json
    {
      "Proxy": {
        "Enabled": true,
        "Url": "http://hostname:port",
        "BypassProxyOnLocal": false,
        "UserCredentials": null
      }
    }
    ```
2. Ersetzen Sie den Wert im Feld ```Url``` mit dem Proxyserver Ihrer Organisation.
3. Im Fall, dass der Proxyserver eine Benutzeranmeldung benötigt, ersetzen Sie die Werte in den Feldern ```Username``` und ```Password``` mit den entsprechenden Werten.
4. Speichern Sie die Datei und starten Sie den 365 business Print Agent Server Service neu, um die Einstellungen anzuwenden.