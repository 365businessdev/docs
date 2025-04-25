# Proxy Konfiguration

## Problem

Der **365 business Print Agent Cloud Service** sowie der **365 business Print Agent Server** sind für den Einsatz in sicheren Netzwerkumgebungen ausgelegt. Sie kommunizieren standardmäßig über **HTTPS** mit unseren Cloud-Servern, wodurch in den meisten Fällen **keine zusätzliche Firewall-Konfiguration** notwendig ist.

Falls Ihre Organisation jedoch vorschreibt, dass **sämtlicher ausgehender Internetverkehr über einen Proxyserver** geleitet werden muss, müssen Sie die Proxy-Einstellungen für die jeweiligen Dienste manuell hinterlegen.

---

## Lösung

### Proxy-Konfiguration für den 365 business Print Agent Cloud Service

1. Öffnen Sie einen Texteditor (z. B. Notepad) im **Administratormodus**.
2. Erstellen Sie die Datei `proxy.json` im folgenden Verzeichnis: `%ProgramData%\365 business development GmbH\365 business Print Agent\CloudClient`
3. Fügen Sie je nach Szenario einen der folgenden Inhalte ein.
	<br>
   **Proxy mit Benutzeranmeldung:**
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
	---
	**Proxy ohne Benutzeranmeldung:**
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

4. Ersetzen Sie:
	- `Url` mit der Adresse Ihres Proxyservers,
	-  ggf. `Username` und `Password` mit den Zugangsdaten.

5. **Speichern Sie die Datei** und starten Sie den **365 business Print Agent Cloud Service** neu, um die Konfiguration zu übernehmen.

<div class="alert alert-notice">
	<i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
	<strong>Gut zu wissen</strong>
	Änderungen an der Proxy-Konfiguration werden erst nach dem Neustart des jeweiligen Dienstes wirksam. 
</div>

<br>


---

<br>


### Proxy-Konfiguration für den 365 business Print Agent Server Service

1. Öffnen Sie einen Texteditor im Administratormodus.
2. Erstellen Sie die Datei proxy.json im folgenden Verzeichnis: `%ProgramData%\365 business development GmbH\365 business Print Agent\Server`
3. Fügen Sie je nach Szenario den passenden Inhalt ein.
	<br>
   **Proxy mit Benutzeranmeldung:**
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
	---
	**Proxy ohne Benutzeranmeldung:**
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
4. Ersetzen Sie:
	- `Url` mit der Adresse Ihres Proxyservers,
	-  ggf. `Username` und `Password` mit den Zugangsdaten.

5. **Speichern Sie die Datei** und starten Sie den **365 business Print Agent Server Service** neu, um die Konfiguration zu übernehmen.

---

<div class="alert alert-notice">
	<i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
	<strong>Gut zu wissen</strong>
	Änderungen an der Proxy-Konfiguration werden erst nach dem Neustart des jeweiligen Dienstes wirksam. 
</div>
