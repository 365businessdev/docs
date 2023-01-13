365 business Print Agent ist eine moderne Drucklösung, die für Microsoft Dynamics 365 Business Central entwickelt wurde, um eine nahtlose Druckumgebung in Microsoft Dynamics 365 Business Central zu schaffen. Mit dem 365 business Print Agent können Sie auf Ihre Druckerinfrastruktur in Microsoft Dynamics 365 Business Central zugreifen und [Druckereinstellungen](../printer-configuration/) für jeden Drucker innerhalb von von Microsoft Dynamics 365 Business Central anlegen.

![365 business Print Agent](/assets/images/365-business-print-agent/print-agent-logo.png)  

Print Agent unterstützt sowohl SaaS- als auch On-Premise-Umgebungen von Microsoft Dynamics 365 Business Central für den Zugriff auf Ihre Druckerinfrastruktur.

Print Agent besteht im Wesentlichen aus mindestens zwei Komponenten, der Microsoft Dynamics 365 Business Central App, die über Microsoft AppSource erhältlich ist, und des [Print Agent Service](../print-agent-client-whatis/) (connector). Print Agent unterstützt jeden Drucker mit Microsoft Windows-kompatiblen Treibern oder Druckersoftware.

## Architektur

365 business Print Agent kann in zwei verschiedenen so genannten Service-Modi betrieben werden, der 365 business Print Agent Cloud und dem Direct Connection Modus.

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Hinweis:</strong> Der 365 business Print Agent Service und die 365 business Print Agent App unterstützen beide Servicemodi und die Modi können nach der Ersteinrichtung jederzeit gewechselt werden.<br>Bitte beachten Sie, dass bestehende Konfigurationen vor der Änderung des Dienstmodus in Microsoft Dynamics 365 Business Central entfernt werden.
</div>

#### Print Agent Cloud _(empfohlen)_

Die Verwendung von 365 business Print Agent Cloud ist die _empfohlene_ Art, Print Agent zu betreiben, da die notwendige Einrichtung auf ein Minimum reduziert ist und in der Regel keine komplexen Anpassungen an Firewalls oder Netzwerkrouten notwendig sind. Grundsätzlich ist der 365 business Print Agent Cloud nach der Installation und Grundeinrichtung in der Regel sofort einsatzbereit.

Die Kommunikation zwischen dem Print Agent Service und der Cloud wird über modernste Technologien wie SignalR realisiert und alle Daten werden transportverschlüsselt übertragen.

![365 business Print Agent - Cloud Architektur](/assets/images/365-business-print-agent/595f77629b38af2a850494a4d1c0e75ab37d0bde234e206a427cfe5dc37d3180.png)

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Hinweis:</strong> Der 365 business Print Agent Cloud Service wird in Deutschland gehostet und speichert keine Druckaufträge oder Druckerdaten. Der Dienst fungiert wie ein Vermittler und stellt eine Echtzeit-Verbindung zum Print Agent Service (Connector) her.<br>Ihre Daten sind absolut sicher und werden niemals gespeichert oder aus irgendeinem Grund analysiert.
</div>

| Komponente | Beschreibung |
| --- | --- |
| Microsoft Dynamics 365 Business Central | Microsoft Dynamics 365 Business Central mit installierter 365 business Print Agent App. |
| Print Agent Cloud | Cloud-Druckdienst, der die Kommunikation zwischen der 365 business Print Agent App und einem oder mehreren Print Agent Services zur Verarbeitung von Druckaufträgen übernimmt. | 
| Print Agent Service | Ein Dienst, der die Kommunikation zwischen Druckern und der Print Agent Cloud übernimmt. |
| Drucker | Ein Drucker, der über den 365 business Print Agent Service (Connector) freigegeben werden muss. |

#### Direkte Kommunikation

Der direkte Verbindungsmodus des 365 business Print Agent wird nur für On-Premises-Umgebungen von Microsoft Dynamics 365 Business Central empfohlen, da der Aufwand für die Konfiguration von Firewalls, Netzwerkrouten und vielem mehr wesentlich höher ist, um einen sicheren und zuverlässigen Zugriff aus Microsoft Dynamics 365 Business Central SaaS-Umgebungen zu ermöglichen.

![365 business Print Agent - Direct Connection Architektur](/assets/images/365-business-print-agent/cb88a62c787b05b43c69deba7535032968e75f8e42579e64d6c621cc7e994405.png)  

| Komponente | Beschreibung |
| --- | --- |
| Microsoft Dynamics 365 Business Central | Microsoft Dynamics 365 Business Central mit installierter 365 business Print Agent App. |
| Print Agent Service | Ein Dienst, der die Kommunikation zwischen Druckern und der 365 business Print Agent App abwickelt. |
| Drucker | Ein Drucker, der über den 365 business Print Agent Service (Connector) freigegeben werden muss. |

#### Wie wählt man die Verbindungsart?

Die Verwendung der 365 business Print Agent Cloud ist die _empfohlene_ Art, den Print Agent zu betreiben, da die notwendige Einrichtung auf ein Minimum beschränkt ist und in der Regel keine komplexen Anpassungen an Firewalls oder Netzwerkrouten erforderlich sind.
Dennoch möchten wir Ihnen hier ein paar Vor- und Nachteile der jeweiligen Service-Modi aufzeigen, um Ihnen die Entscheidung zu erleichtern.

| | Print Agent Cloud | Direktverbindung |
| --- | :---: | :---: |
| Unterstützung für Business Central Online (SaaS)| <img src="/assets/fontawesome/circle-full.svg" class="fa-icon"> | <img src="/assets/fontawesome/circle-half.svg" class="fa-icon">* |
| Support für Business Central On-Premises | <img src="/assets/fontawesome/circle-full.svg" class="fa-icon"> | <img src="/assets/fontawesome/circle-full.svg" class="fa-icon"> |
| Ausführen mehrerer Print Agent-Dienste | <img src="/assets/fontawesome/circle-full.svg" class="fa-icon"> | <img src="/assets/fontawesome/circle-full.svg" class="fa-icon"> |


Hinweis * - Es ist eine zusätzliche Konfiguration erforderlich, um die Verbindung von Business Central Online (SaaS) zum lokal installierten Print Agent-Dienst zu sichern.


## Voraussetzungen

 - Betriebssystem
   - Windows 10 oder höher (64-Bit)
   - Windows Server 2016 oder höher (64-Bit)
 - .NET 6.0

### Siehe auch

 - [Was ist der Print Agent Service?](../print-agent-client-whatis/)
