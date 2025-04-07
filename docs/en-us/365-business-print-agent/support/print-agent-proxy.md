---
title: Proxy Configuration
---
#### Problem
365 business Print Agent Cloud Service and 365 business Print Agent Server are optimized for secure network environments by connecting outward through HTTPS connections to our cloud servers.
This way, most firewalls already allow our traffic to pass without any additional configuration.

However, if your organization’s network security policies require all outbound Internet traffic to go through a proxy server, you will need to configure the services to explicitly use this proxy server.

#### Solution
<br>
##### 365 business Print Agent Cloud
In order to tell the service which proxy server to use, you need to create a proxy configuration file in the directory ```C:\ProgramData\365 business development GmbH\365 business Print Agent\CloudClient```.

1. Using a text editor (e.g. Notepad) in Administration Mode to create a file named ```proxy.json```, and paste the following content.
    
    1.1. Configuration of a proxy with user credentials:
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
    1.2. Configuration of a proxy without user credentials:
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
2. Replace the value in the ```Url``` field with your organization's proxy server.
3. In case the proxy server requires a user login, replace the values in the ```Username``` and ```Password``` fields with the appropriate values.
4. Save the file and restart the 365 business Print Agent Cloud service to apply the settings.

##### 365 business Print Agent Server
In order to tell the service which proxy server to use, you need to create a proxy configuration file in the directory ```C:\ProgramData\365 business development GmbH\365 business Print Agent\Server```.

1. Using a text editor (e.g. Notepad) in Administration Mode to create a file named ```proxy.json```, and paste the following content.
    
    1.1. Configuration of a proxy with user credentials:
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
    1.2. Configuration of a proxy without user credentials:
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
2. Replace the value in the ```Url``` field with your organization's proxy server.
3. In case the proxy server requires a user login, replace the values in the ```Username``` and ```Password``` fields with the appropriate values.
4. Save the file and restart the 365 business Print Agent Server service to apply the settings.