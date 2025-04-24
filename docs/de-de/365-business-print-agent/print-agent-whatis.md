# Was ist 365 business Print Agent?

365 business Print Agent ist eine moderne Drucklösung, die für **Microsoft Dynamics 365 Business Central** entwickelt wurde, um eine nahtlose Druckumgebung in Microsoft Dynamics 365 Business Central zu schaffen. 
Mit dem 365 business Print Agent können Sie auf Ihre Druckerinfrastruktur in Microsoft Dynamics 365 Business Central zugreifen und [Druckereinstellungen](printer-configuration.md) für jeden Drucker innerhalb von von Microsoft Dynamics 365 Business Central anlegen.

![365 business Print Agent](/assets/images/365-business-print-agent/print-agent-logo.png)  

Der 365 business Print Agent unterstützt sowohl **SaaS**- als auch **On-Premises**-Umgebungen von Microsoft Dynamics 365 Business Central.

Er besteht im Wesentlichen aus mindestens zwei Komponenten:
- Einer App für Microsoft Dynamics 365 Business Central (verfügbar über Microsoft AppSource)
- Dem [Print Agent Service (Connector)](print-agent-client-whatis.md), einem Windows-Dienst

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg" style="--fa-secondary-color: #FF0000; --fa-primary-color: #111111; --fa-secondary-opacity: 0.7"></i> <strong>Wichtig:</strong>365 business Print Agent unterstützt jeden Drucker mit Microsoft Windows-kompatiblen Treibern oder Druckersoftware.
</div>

## Architektur

365 business Print Agent kann in zwei verschiedenen, so genannten Service-Modi betrieben werden, der **365 business Print Agent Cloud** und dem **Direct Connection** Modus.

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Hinweis:</strong>Der Print Agent Service und die App unterstützen beide Service-Modi. Ein Wechsel des Modus ist jederzeit möglich.<br>Bitte beachten Sie: Vor einem Wechsel müssen bestehende Konfigurationen in Microsoft Dynamics 365 Business Central entfernt werden.
</div>

#### Print Agent Cloud _(empfohlen)_

Der **Print Agent Cloud**-Modus ist die _empfohlene_ Betriebsart:
Die Einrichtung ist minimal, und es sind in der Regel keine komplexen Anpassungen an Firewalls oder Netzwerkrouten erforderlich. Nach der Installation und Grundeinrichtung ist der Dienst sofort einsatzbereit.

Die Kommunikation zwischen dem Print Agent Service und der Cloud wird über modernste Technologien wie SignalR realisiert und alle Daten werden transportverschlüsselt übertragen.

![365 business Print Agent - Cloud Architektur](/assets/images/365-business-print-agent/595f77629b38af2a850494a4d1c0e75ab37d0bde234e206a427cfe5dc37d3180.png)

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Hinweis:</strong>Der 365 business Print Agent Cloud Service wird in Deutschland gehostet.<br>
	Es werden </strong>keine Druckaufträge oder Druckerdaten gespeichert</strong>. (Ausnahme bei der Nutzung von <strong>Secure Print</strong>!)<br>
	Der Service fungiert ausschließlich als Vermittler in Echtzeit.  
</div>

| Komponente | Beschreibung |
| --- | --- |
| Microsoft Dynamics 365 Business Central | Microsoft Dynamics 365 Business Central mit installierter 365 business Print Agent App |
| Print Agent Cloud | Cloud-Dienst, der die Kommunikation zwischen App und einem oder mehreren Print Agent Services steuert | 
| Print Agent Service | Windows-Dienst, der die Kommunikation zwischen Druckern und der Print Agent Cloud übernimmt |
| Drucker | Drucker, der über den Print Agent Service freigegeben werden |

#### Direct Connection

Der **Direct Connection**-Modus wird nur für **On-Premises-Umgebungen** empfohlen. 
Für SaaS-Umgebungen ist dieser Modus nicht ideal, da zusätzliche Konfigurationen an Firewalls und Netzwerken nötig sind, um einen sicheren und zuverlässigen Zugriff aus Microsoft Dynamics 365 Business Central SaaS-Umgebungen zu ermöglichen.

![365 business Print Agent - Direct Connection Architektur](/assets/images/365-business-print-agent/cb88a62c787b05b43c69deba7535032968e75f8e42579e64d6c621cc7e994405.png)  

| Komponente | Beschreibung |
| --- | --- |
| Microsoft Dynamics 365 Business Central | Microsoft Dynamics 365 Business Central mit installierter 365 business Print Agent App |
| Print Agent Service | Windows-Dienst, der die direkte Kommunikation zwischen App und Druckern übernimmt |
| Drucker | Drucker, der über den Print Agent Service freigegeben werden |

#### Wie wähle ich die richtige Verbindungsart?

Wir empfehlen grundsätzlich den **Print Agent Cloud**-Modus aufgrund der einfachen Einrichtung.  

Hier eine Übersicht der Vor- und Nachteile:

| | Print Agent Cloud | Direktverbindung |
| --- | :---: | :---: |
| Unterstützung für Business Central Online (SaaS) | <i class="fa-duotone fa-thin fa-circle" style="--fa-secondary-color: #00b7c3"></i> | <i class="fa-duotone fa-thin fa-circle-half-stroke" style="--fa-secondary-color: #00b7c3"></i>* |
| Support für Business Central On-Premises | <i class="fa-duotone fa-thin fa-circle" style="--fa-secondary-color: #00b7c3"></i> | <i class="fa-duotone fa-thin fa-circle" style="--fa-secondary-color: #00b7c3"></i> |
| Ausführen mehrerer Print Agent-Dienste | <i class="fa-duotone fa-thin fa-circle" style="--fa-secondary-color: #00b7c3"></i> | <i class="fa-duotone fa-thin fa-circle" style="--fa-secondary-color: #00b7c3"></i> |
| Secure Print Unterstützung | <i class="fa-duotone fa-thin fa-circle" style="--fa-secondary-color: #00b7c3"></i> | <i class="fa-duotone fa-thin fa-circle" style="--fa-secondary-color: #ffffff"></i> |


<small>* Es ist eine zusätzliche Konfiguration erforderlich, um die Verbindung von Business Central Online (SaaS) zum lokal installierten Print Agent Service zu herzustellen.</small>


## Voraussetzungen

- **Betriebssystem**  
  - Windows 10 oder höher (64-Bit)  
  - Windows Server 2016 oder höher (64-Bit)

- **Software**  
  - .NET 8.0

### Siehe auch

 - [Was ist der Print Agent Service?](print-agent-client-whatis.md)
