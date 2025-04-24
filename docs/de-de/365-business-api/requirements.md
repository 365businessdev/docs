# Voraussetzungen

Um die 365 business API Cloud Dienste nutzen zu können ist die Kommunikation von Microsoft Dynamics 365 Business Central mit der 365 business API erforderlich. Zur Sicherstellung der Kommunikation kann es erforderlich sein, dass Firewall-Einstellungen vorgenommen werden müssen.

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg"></i>
    <strong>Gut zu wissen</strong>Firewall-Einstellungen o.ä. sind ausschließlich in Microsoft Dynamics 365 Business Central <strong>On-Premise</strong> Umgebungen erforderlich.<br>
    In Microsoft Dynamics 365 Business Central <strong>Cloud</strong> Umgebungen sind keine Firewall-Einstellungen oder sonstige Anpassungen erforderlich.
</div>

## Ressourcen

Im Rahmen der Kommunikation zwischen Microsoft Dynamics 365 Business Central und der 365 business API werden die folgenden DNS-Namen, Ports und Protokolle verwendet:

| DNS-Name | Port | Protokoll | Beschreibung |
| --- | --- | --- | --- |
| `api.365businessapi.com` | `443` | `HTTPS` | API-Endpunkt, für den Zugriff auf die 365 business API. |
| `license.365businessapi.com` | `443` | `HTTPS` | API-Endpunkt, zur Lizenzüberprüfung und -verwaltung. |

### Veraltete Ressourcen

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg"></i>
    <strong>Gut zu wissen</strong>Bitte aktualisieren Sie Ihre 365 business Apps regelmäßig, um sicherzustellen, dass Sie die neuesten Funktionen und Verbesserungen nutzen können.
</div>

In älteren Versionen der 365 business API und der 365 business API App für Microsoft Dynamics 365 Business Central werden unter Umständen noch folgende DNS-Namen und Ports verwendet:

| DNS-Name | Port | Protokoll | Beschreibung | Abgelöst durch |
| --- | --- | --- | --- |
| `365businessapi.com` | `443` | `HTTPS` | API-Endpunkt, der für Abwärtskompatibilität genutzt wird. | `api.365businessapi.com` |
| `365businessapi.azurewebsites.net` | `443` | `HTTPS` | API-Endpunkt, der für Abwärtskompatibilität genutzt wird. | `api.365businessapi.com` |
| `login.microsoftonline.com` | `443` | `HTTPS` | Endpunkt für die Authentifizierung mit Microsoft Entra ID. | Entfällt |
| `api.businesscentral.dynamics.com` | `443` | `HTTPS` | API-Endpunkt, zur Lizenzüberprüfung und -verwaltung. | `license.365businessapi.com` |
