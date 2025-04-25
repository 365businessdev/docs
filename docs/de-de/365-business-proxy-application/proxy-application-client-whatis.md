# Was ist der Proxy Application Client?

Der **365 business Proxy Application Client** ist ein Windows-Dienst, der lokale [Plugins](plugins.md) ausführt und eine gesicherte Verbindung zum **Proxy Application Cloud Service** herstellt.

Jeder Client wird durch eine eindeutige **Client-ID (GUID)** identifiziert und übernimmt gezielt die Ausführung von Aufträgen, die über Microsoft Dynamics 365 Business Central an ihn adressiert werden.

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg"></i>
    <strong>Gut zu wissen</strong>
    Standardmäßig läuft der 365 business Proxy Application Client im Kontext <strong>Lokales System</strong>.<br>
    Für bestimmte Plugins (z. B. das File Plugin) kann jedoch ein Domänenkonto erforderlich sein.
</div>

---

## Aufgaben des 365 business Proxy Application Clients

Der 365 business Proxy Application Client übernimmt zwei Hauptfunktionen:

1. Aufbau und Verwaltung der sicheren Kommunikation mit dem **365 business Proxy Application Cloud Service**
2. Ausführung der installierten **Plugins** und Abarbeitung der Aufträge (z. B. Schreiben von Dateien)

---

## Siehe auch

- [Was ist 365 business Proxy Application?](proxy-application-whatis.md)
- [Was sind 365 business Proxy Application Plugins?](plugins.md)