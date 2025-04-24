# Lizenzverwaltung

Die Verwaltung der Lizenzen findet komplett innerhalb von Microsoft Dynamics 365 Business Central statt. Dabei können alle wesentlichen Verwaltungsaufgaben direkt durch Sie durchgeführt werden. In diesem Abschnitt erfahren Sie, wie Sie Ihre Lizenzen verwalten können.

Für die Verwaltung der Lizenzen wird im Rahmen der Installation von Microsoft Dynamics 365 Business Central Apps die Erweiterung **365 business development License** automatisch installiert. Diese Erweiterung fügt die Lizenzverwaltung und -prüfung in Microsoft Dynamics 365 Business Central hinzu.

Die Lizenzverwaltung lässt sich über die Seite **Erweiterungslizenzverwaltung (365 business development)** aufrufen:

![Erweiterungslizenzverwaltung (365 business development)](/assets/images/licensing/2bfb6450-3d5b-478a-824d-dc4088eb3fca.png)

## Erweiterungslizenzverwaltung

Die Erweiterungslizenzverwaltung gibt Auskunft über die installierten 365 business development Apps und Features und zeigt die nachfolgenden Informationen an:

| Spalte | Beschreibung |
| --- | --- |
| **App Name** | Gibt den Namen der App an. |
| **Feature Name** | Gibt den Namen des Features der App an. |
| **Beschreibung** | Gibt eine kurze Beschreibung des Features an. |
| **Lizenzierung** | Gibt die aktuelle Lizenzmethode des Features an. |
| **Dokumentation-URL** | Link zur Dokumentation des Features. |
| **Support-URL** | Link zur Supportseite des Features. |

Weiterhin werden die wesentlichen Informationen zur Lizenzierung im unteren Bereich der Seite angezeigt:

 - Tenant ID
 - Tenant Name
 - Anzahl der Benutzer
 - Anzahl Mandanten

Zusätzlich bietet die Erweiterungslizenzverwaltung Ihnen folgende Funktionen:

| Funktion | Beschreibung | Weitere Informationen |
| --- | --- | --- |
| **Lizenzinformationen** | Zeigt die aktuellen Lizenzinformationen an. | [Lizenzinformationen anzeigen](#lizenzinformationen-anzeigen) |
| **Lizenzinformationen aktualisieren** | Aktualisiert die Lizenzinformationen. | [Lizenzinformationen aktualisieren](#lizenzinformationen-aktualisieren) |
| **Benutzerlizenzierungsübersicht** | Öffnet die Übersicht der zu lizenzierenden Benutzer. | [Benutzerlizenzierungsübersicht](license-methods/user-license.md) |
| **Mandantenlizenzierungsübersicht** | Öffnet die Übersicht der zu lizenzierenden Mandanten. | [Mandantenlizenzierungsübersicht](license-methods/company-license.md) |
| **Website** | Öffnet die Website der App bzw. des Features. |  |
| **Dokumentation** | Öffnet die Dokumentation der App bzw. des Features. |  |
| **Support** | Öffnet die Supportseite der App bzw. des Features. |  |

Während der Testphase stehen folgende Funktionen zur Verfügung:

| Funktion | Beschreibung | Weitere Informationen |
| --- | --- | --- |
| **Testphase verlängern** | Verlängert die Testphase um weitere 10 Tage. | [Testphase verlängern](#testphase-verlängern) |
| **Lizenz aktivieren** | Startet den Assistenten zur Lizenzaktivierung. | [Lizenz aktivieren](/license-management/activate-license.md) |

Nach der Lizenzaktivierung stehen folgende Funktionen zur Verfügung:

| Funktion | Beschreibung | Weitere Informationen |
| --- | --- | --- |
| **Microsoft Partner zuweisen** | Weißt den Microsoft Partner zu, der die Lizenz bereitgestellt hat. | [Microsoft Partner zuweisen](#microsoft-partner-zuweisen) |
| **Ausgabengrenze** | Öffnet die Seite zur Festlegung von Ausgabengrenzen. | [Ausgabengrenze](/license-management/spending-limit.md) |
| **Automatische Lizenz-Zuweisung** | Aktiviert die automatische Lizenzzuweisung. | [Lizenzzuweisung](/license-management/assign-license.md) |
| **Manuelle Lizenz-Zuweisung** | Deaktiviert die automatische Lizenzzuweisung. | [Lizenzzuweisung](/license-management/assign-license.md) | 
| **Mandanten-/Benutzerlizenz zuweisen** | Öffnet die Seite zur Zuweisung von Benutzer- oder Mandantenlizenzen, bei manueller Lizenz-Zuweisung. | [Lizenzzuweisung](/license-management/assign-license.md) |
| **Rechnungen** | Zeigt die Rechnungen an. | [Rechnungen anzeigen](invoicing/invoices.md) |
| **Lizenz kündigen** | Kündigt die Lizenz zum nächstmöglichen Zeitpunkt. | [Lizenz kündigen](/license-management/terminate-license.md) |

### Lizenzinformationen anzeigen

Mit der Aktion **Details** können Sie die Lizenzinformationen anzeigen. Dieser Ansicht können Sie alle wesentlichen Informationen zum Lizenzstatus der App, Erweiterung oder des Features entnehmen.

### Lizenzinformationen aktualisieren

Mit der Aktion **Lizenzinformationen aktualisieren** können Sie eine Aktualisierung der Daten vom 365 business development Lizenzserver anfordern. Dies ist insbesondere dann notwendig, wenn eine Lizenzänderung vorgenommen wurde und diese Änderung noch nicht in Microsoft Dynamics 365 Business Central angezeigt wird.

### Testphase verlängern

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg"></i>
    <strong>Gut zu wissen</strong> Jede 365 business development App wird mit einer Testphase von 30 Tagen bereitgestellt. Während dieser Testphase können Sie die App oder das Feature ohne Einschränkungen testen.<br>
    <br>
    Sie benötigen mehr Zeit?<br>
    Kein Problem! <a href="https://365businessdev.com/kontakt/" target="_blank">Kontaktieren</a> Sie uns gerne, bzgl. einer Verlängerung Ihrer Testphase.
</div>

Mit der Aktion **Testphase verlängern** können Sie die Testphase um weitere 10 Tage verlängern. Diese Funktion steht Ihnen nur während der Testphase zur Verfügung.

### Microsoft Partner zuweisen

In der Regel werden 365 business development Apps und Features über einen Microsoft Partner bereitgestellt. Mit der Aktion **Microsoft Partner zuweisen** können Sie den Microsoft Partner zuweisen, der die Lizenz bereitgestellt hat.

Diese Funktion steht Ihnen nur nach der Lizenzaktivierung zur Verfügung und wird dazu verwendet, bei Partnerwechseln die Lizenzierung zu übertragen.