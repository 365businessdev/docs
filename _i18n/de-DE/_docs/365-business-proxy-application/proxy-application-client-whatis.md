Der 365 business Proxy Application Client ist ein Windows Dienst, der die installierten Plugins ausführt und die Datenverbindung zum Proxy Application Server aufbaut.

Jeder Proxy Application Client wird anhand einer Client-ID (GUID) identifiziert und führt die an ihn adressierten Aufträge, über die installierten [Plugins](../plugins/) aus.

<div class="alert alert-notice">
    <i class="fa-solid fa-notes"></i> <strong>Gut zu wissen:</strong>Standardmäßig wird der Proxy Application Client im Kontext <strong>Lokales System</strong> ausgeführt, je nach installiertem Plugin (z.B. File-Plugin) kann die Ausführung im Domänenkontext jedoch notwendig werden.
</div>

<br/>

## Die Aufgabe vom Proxy Application Client

Der 365 business Proxy Application Client führt folgende Funktionen aus:

1. Herstellung der Kommunikation zwischen 365 business Proxy Application Service und Client.
2. Ausführung der Plugins und Plugin-Aufträge (z.B. Datei schreiben)

### Siehe auch

- [Was ist 365 business Proxy Application?](../proxy-application-whatis/)
- [Was sind 365 business Proxy Application Plugins?](../plugins/)
