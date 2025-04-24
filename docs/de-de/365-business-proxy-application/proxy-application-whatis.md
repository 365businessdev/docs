# Was ist Proxy Application?

365 business Proxy Application ist eine leistungsstarke Erweiterung für Microsoft Dynamics 365 Business Cntral, die Ihnen die Möglichkeit bietet sicher und unkompliziert aus der Cloud oder von On-Premise Systemen, unter Wahrung der [*Universal Code Initiative*](https://www.microsoft.com/en-us/dynamics-365/blog/it-professional/2022/10/28/the-dynamics-365-business-central-universal-code-initiative-is-live.md), ihre lokalen Ressourcen und Systeme in Microsoft Dynamics 365 Business Central zu integrieren. Vom Dateizugriff, über die Ansteuerung von Druckern, Lagerliften, Waagen oder Kartenlesegeräten. Mit dem flexiblen und individuell erweiterbaren [Plugin-System von 365 business Proxy Application](plugins.md) sind Ihnen keine Grenzen gesetzt.

![365 business Proxy Application](/assets/images/365-business-proxy-application/proxy-application-logo.png)

365 business Proxy Application unterstützt sowohl SaaS- als auch On-Premise-Umgebungen von Microsoft Dynamics 365 Business Central.

Proxy Application besteht im Wesentlichen aus drei Komponenten, der Microsoft Dynamics 365 Business Central App, die über Microsoft AppSource erhältlich ist, des [Proxy Application Client](proxy-application-client-whatis.md) und dem 365 business Proxy Application Service.

## Architektur

365 business Proxy Application ist für die Verwendung in Business Central Online (SaaS) optimiert, ist aber auch vollumfänglich in Business Central On-Premise Umgebungen nutzbar.
Dabei ist Proxy Application darauf konzipiert die notwendige Einrichtung zur Bereitstellung der Funktionalität und der Verbindung von Microsoft Dynamics 365 Business Central, auf ein Minimum zu reduzieren. In der Regel sind keine komplexen Anpassungen an Firewalls oder Netzwerkrouten notwendig, einzig eine Internetverbindung ist erforderlich.

Die Kommunikation zwischen dem Proxy Application Client und dem Service wird über modernste Technologien wie SignalR realisiert und alle Daten werden vollständig transportverschlüsselt übertragen.

![Proxy Application Architektur](/assets/images/365-business-proxy-application/proxy-application-architecture.png)

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i> <strong>Hinweis</strong> Der 365 business Proxy Application Cloud Service wird in Deutschland gehostet und speichert keinerlei Daten. Der Dienst fungiert wie ein Vermittler und stellt eine Echtzeit-Verbindung zum Proxy Application Client her.<br>Ihre Daten sind absolut sicher und werden niemals gespeichert oder aus irgendeinem Grund analysiert.
</div>

| Komponente | Beschreibung |
| --- | --- |
| Microsoft Dynamics 365 Business Central | Microsoft Dynamics 365 Business Central mit installierter 365 business Proxy Application App. |
| Proxy Application Service | Cloud-Dienst, der die Kommunikation zwischen der 365 business Proxy Application App und einem oder mehreren Proxy Application Clients übernimmt. Dabei fungiert der Dienst wie ein Vermittler und leitet die empfangenen Daten unmittelbar an den adressierten Proxy Application Client weiter. | 
| Proxy Application Client | Ein Dienst, der die installierten Plugins ausführt und die Datenverbindung zum Proxy Application Server aufbaut. |

## Voraussetzungen

- Betriebssystem
    - Windows 10 oder höher (64-bit)
    - Windows Server 2016 oder höher (64-bit)
- .NET 8.0
- Internetverbindung

# Siehe auch

- [Was ist 365 business Proxy Application Client?](proxy-application-client-whatis.md)
- [Was sind 365 business Proxy Application Plugins?](plugins.md)