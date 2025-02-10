Tenantlizenzen sind auf einen Microsoft Entra ID Tenant beschränkt. Mit der Tenantlizenz sind alle Umgebungen, inklusive aller Mandanten und Benutzer, innerhalb des Tenants lizenziert.

## Welche Vorteile bietet die Tenantlizenz?

Die Tenantlizenzierung inkludiert alle Umgebungen, Mandanten und Benutzer innerhalb des Microsoft Entra ID Tenants. Dies ermöglicht eine einfache und kosteneffiziente Lizenzierung für Tenants, die alle Umgebungen, Mandanten und Benutzer einschließt.

### Tenantlizenzierung in Microsoft Dynamics 365 Business Central - On-Premise (Lokal)

In Microsoft Dynamics 365 Business Central On-Premise Bereitstellungen deckt eine Tenantlizenz eine spezifische Umgebung, d.h. eine Microsoft Dynamics 365 Business Central Datenbank, ab. Mit der Tenantlizenz sind alle Mandanten und Benutzer innerhalb der Umgebung lizenziert.

## Welche Daten werden für die Lizenzprüfung erhoben?

Für die Prüfung der Tenantlizenz wird die Microsoft Entra ID Tenant ID verwendet. Bei dieser ID handelt es sich um eine eindeutige ID, die während der Einrichtung der Microsoft Entra ID Tenant Umgebung erstellt wird. Die ID wird für die Lizenzierung der Umgebung, Mandanten und Benutzer verwendet.

Die Tenant ID und der Tenant Name (onmicrosoft.com Domain) werden für die Lizenzprüfung an 365 business development übermittelt.

### Tenant ID in Microsoft Dynamics 365 Business Central - On-Premise (Lokal)

In Microsoft Dynamics 365 Business Central On-Premise Umgebungen steht u.U. keine Microsoft Entra ID Tenant ID zur Verfügung. In diesem Fall wird eine zufällige ID (GUID) erzeugt, die die Umgebung eindeutig identifiziert. Diese ID wird für die Lizenzierung der Umgebung, Mandanten und Benutzer verwendet.

Die erzeugte Tenant ID und der DNS Name des Servers, auf dem Microsoft Dynamics 365 Business Central installiert ist, werden für die Lizenzprüfung an 365 business development übermittelt.