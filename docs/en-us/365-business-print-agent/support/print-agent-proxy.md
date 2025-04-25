# Proxy Configuration

## Problem

The **365 business Print Agent Cloud Service** and the **365 business Print Agent Server** are designed for secure network environments. By default, they communicate with our cloud servers over **HTTPS**, which usually means that **no additional firewall configuration** is required.

However, if your organization mandates that **all outbound internet traffic must be routed through a proxy server**, you will need to manually configure the proxy settings for each respective service.

---

## Solution

### Proxy Configuration for the 365 business Print Agent Cloud Service

1. Open a text editor (e.g., Notepad) in **Administrator mode**.
2. Create a file named `proxy.json` in the following directory: `%ProgramData%\365 business development GmbH\365 business Print Agent\CloudClient`
3. Depending on your scenario, paste one of the following JSON configurations into the file:
	<br>
   **Proxy with authentication:**
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
	**Proxy without authentication:**
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

4. Replace the placeholders:
	- `Url` with the address of your organization's proxy server,
	- `Username` and `Password` (if required) with valid credentials.

5. **Save the file** and restart the **365 business Print Agent Cloud Service** to apply the configuration.

<div class="alert alert-notice">
	<i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
	<strong>Good to know</strong>
	Changes to the proxy configuration only take effect after the respective service is restarted.
</div>

---

### Proxy Configuration for the 365 business Print Agent Server Service

1. Open a text editor in Administrator mode.
2. Create a file named `proxy.json` in the following directory: `%ProgramData%\365 business development GmbH\365 business Print Agent\Server`
3. Depending on your scenario, paste one of the following JSON configurations:
	<br>
   **Proxy with authentication:**
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
	**Proxy without authentication:**
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

4. Replace the placeholders:
	- `Url` with the proxy server address,
	- `Username` and `Password` with valid credentials (if required).

5. **Save the file** and restart the **365 business Print Agent Server Service** to apply the settings.

---

<div class="alert alert-notice">
	<i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
	<strong>Good to know</strong>
	Changes to the proxy configuration only take effect after the respective service is restarted.
</div>