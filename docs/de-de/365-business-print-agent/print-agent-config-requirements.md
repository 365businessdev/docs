# Voraussetzungen

Um die **365 business Print Agent Config** nutzen zu können, ist die Kommunikation mit verschiedenen **365 business API-Diensten** erforderlich.  
Zur Sicherstellung der Funktionalität kann es notwendig sein, entsprechende **Firewall-Einstellungen** vorzunehmen.

## Erforderliche Ressourcen

Für die Kommunikation werden die folgenden **DNS-Namen**, **Ports** und **Protokolle** verwendet:

| DNS-Name                         | Port | Protokoll | Beschreibung                                                                 |
|----------------------------------|------|-----------|------------------------------------------------------------------------------|
| `api.365businessapi.com`         | 443  | HTTPS     | API-Endpunkt für automatische Updates.                                       |
| `printagent.365businessapi.com`  | 443  | HTTPS     | API-Endpunkt für die Funktionalität und Lizenzprüfung.                       |
| `status.365businessdev.com`      | 443  | HTTPS     | Endpunkt für den Healthcheck.                                                |
| `docs.365businessdev.com`        | 443  | HTTPS     | Dokumentation, die über die Print Agent Config aufgerufen werden kann.       |
| `365businessdev.atlassian.net`   | 443  | HTTPS     | Support-Portal für technische Anfragen und Tickets.                          |


<div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Hinweis</strong>
    Bitte stellen Sie sicher, dass ausgehende HTTPS-Verbindungen zu den oben genannten Endpunkten von Ihrer Infrastruktur zugelassen werden.
</div>