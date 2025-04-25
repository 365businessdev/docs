# Was ist 365 business Proxy Application?

**365 business Proxy Application** ist eine leistungsstarke Erweiterung für Microsoft Dynamics 365 Business Central.  
Sie ermöglicht Ihnen den **sicheren und einfachen Zugriff auf lokale Ressourcen** – sowohl aus der Cloud (SaaS) als auch aus On-Premises-Umgebungen – im Einklang mit der [*Universal Code Initiative*](https://www.microsoft.com/en-us/dynamics-365/blog/it-professional/2022/10/28/the-dynamics-365-business-central-universal-code-initiative-is-live.md).

Ob **Dateisysteme**, **Drucker**, **Lagerlifte**, **Waagen** oder **Kartenleser** – mit dem flexiblen und erweiterbaren [Plugin-System](plugins.md) sind Ihren keine Grenzen gesetzt.

![365 business Proxy Application](/assets/images/365-business-proxy-application/proxy-application-logo.png)

365 business Proxy Application unterstützt sowohl **Microsoft Dynamics 365 Business Central SaaS** als auch **On-Premises**.

---

## Bestandteile

365 business Proxy Application besteht aus drei Komponenten:

| Komponente                  | Beschreibung |
|----------------------------|--------------|
| **Microsoft Dynamics 365 Business Central App**   | App aus Microsoft AppSource, die in Dynamics 365 Business Central installiert wird |
| **Proxy Application Service** | Cloud-Dienst zur sicheren Vermittlung zwischen App und lokalen Clients |
| **Proxy Application Client**  | Lokaler Dienst, der Plugins ausführt und mit dem Cloud-Dienst kommuniziert |

---

## Architektur

Die Lösung ist so konzipiert, dass die Einrichtung **einfach und ohne komplexe Firewallkonfiguration** erfolgen kann.  
Einzige Voraussetzung ist eine bestehende **Internetverbindung**. Die Datenübertragung erfolgt vollständig **TLS-verschlüsselt** via **SignalR**.

![Proxy Application Architektur](/assets/images/365-business-proxy-application/proxy-application-architecture.png)

<div class="alert alert-info">
    <i class="fa-duotone fa-lightbulb fa-lg"></i>
    <strong>Hinweis</strong>
    Der 365 business Proxy Application Cloud Service wird in Deutschland gehostet und speichert <b>keine Langzeitdaten.</b><br>
    Er fungiert als Vermittler und stellt eine verschlüsselte Echtzeitverbindung zum Proxy Application Client her.
</div>

---

## Voraussetzungen

- **Betriebssystem**  
  - Windows 10 oder höher (64-Bit)  
  - Windows Server 2016 oder höher (64-Bit)

- **Software**  
  - .NET 8.0

### Siehe auch

- [Was ist 365 business Proxy Application Client?](proxy-application-client-whatis.md)
- [Was sind 365 business Proxy Application Plugins?](plugins.md)