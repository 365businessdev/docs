# Häufig gestellte Fragen (FAQ)

Im folgenden Abschnitt finden Sie Antworten auf häufig gestellte Fragen zu 365 business Banking.

<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Gut zu wissen</strong>
    Ihre Frage ist hier nicht aufgeführt?<br>
    Kontaktieren Sie uns gerne über unseren <a href="https://servicedesk.365businessdev.com/" target="_blank">Service Desk</a>, wir helfen Ihnen gerne weiter.
</div>

## Allgemeines

### Wie funktioniert 365 business Banking?

365 business Banking integriert den gesamten Zahlungsverkehr direkt in Microsoft Dynamics 365 Business Central. Sie können Bankkonten anbinden, Kontoauszüge abrufen, Zahlungen erstellen und senden – alles aus Ihrer gewohnten Umgebung heraus, ohne externe Portale oder Tools.

Erfahren Sie mehr unter [Was ist 365 business Banking](banking-whatis.md).

### Benötige ich zusätzliche Software oder eine Banking-App?

Nein, 365 business Banking funktioniert vollständig innerhalb von Business Central. Die Bankanbindung erfolgt über die zertifizierte Schnittstelle von finAPI, keine zusätzliche Software erforderlich.

### Welche Bankkonten kann ich verbinden?

Sie können alle Bankkonten verbinden, die über eine PSD2-konforme Schnittstelle verfügen. Dazu gehören nahezu alle Banken im SEPA-Raum (insbesondere Deutschland und Österreich).

Erfahren Sie mehr unter [Unterstützte Banken](supported-banks.md).

---

## Sicherheit

### Wie sicher ist die Lösung?

Die Anbindung erfolgt über **finAPI**, eine von der **BaFin regulierte PSD2-Schnittstelle**. Alle Daten werden verschlüsselt übertragen und DSGVO-konform verarbeitet. Es werden keine sensiblen Daten dauerhaft außerhalb Ihrer Business Central Umgebung gespeichert.

### Was ist finAPI?

Die finAPI GmbH gehört heute zu den führenden Providern von Open Banking und Open Finance Lösungen in Deutschland. Als BaFin-lizenzierter Kontoinformations- und Zahlungsauslösedienst stehen bei finAPI Softwarelösungen zur Aggregation und Analyse von Finanzdaten für innovative Finanzanwendungen im Fokus.
finAPI stellt die PSD2-konforme Bankanbindung für 365 business Banking bereit.

### Wo werden meine Daten gespeichert?

Ihre Daten werden ausschließlich in Ihrer Microsoft Dynamics 365 Business Central Umgebung gespeichert. Die Verarbeitung in der 365 business API erfolgt ohne persistente Speicherung von Daten oder Zugangsinformationen.

### Wie sicher sind meine Daten?

Die Sicherheit Ihrer Daten hat für uns oberste Priorität. Wir setzen modernste Sicherheitsmaßnahmen ein, um Ihre Daten zu schützen und unbefugten Zugriff zu verhindern. Zusätzlich wird das Kennwort für die Banking Benutzer Authentifizierung ausschließlich in Ihrer Microsoft Dynamics 365 Business Central Umgebung gespeichert und kann weder durch uns noch andere Dritte (z.B. finAPI) eingesehen werden.

---

## Funktionen

### Welche Zahlarten unterstützt die App?

365 business Banking unterstützt:

* SEPA-Überweisungen
* SEPA-Echtzeitüberweisungen
* SEPA-Lastschriften (CORE und B2B)
* Daueraufträge (Standing Orders)

Erfahren Sie mehr unter [Zahlungen](bank-payment.md).

### Können Kontoauszüge automatisch abgerufen werden?

Ja, Kontoumsätzen können automatisch abgerufen und in Business Central importiert werden.

Erfahren Sie mehr unter [Bankkontoabstimmung automatisieren](bank-reconciliation-automation.md).

---

## Onboarding

### Wie kann ich bestehende Bankkonten aus Microsoft Dynamics 365 Business Central verwenden?

Der Prozess zur Verbindung von Bankkonten berücksichtigt bestehende Bankkonten in Microsoft Dynamics 365 Business Central und gleicht diese über die IBAN ab.

### Meine Bankkonten haben bereits Bankposten, was muss ich tun um keine Dubletten zu importieren?

Wir empfehlen die Nutzung des Feld `Datum letzter Auszug`, um festzulegen, ab wann Bankposten importiert werden sollen. So können Sie sicherstellen, dass nur neue Buchungen übernommen werden und keine Dubletten entstehen. Wenn Sie bspw. zuletzt Bewegungen bis zum 30. Juni 2025 importiert haben, geben Sie im Feld `Datum letzter Auszug` dieses Datum oder den 01. Juli 2025 (Empfehlung) an.

### Wie richte ich ein Bankkonto ein?

Nach der Installation der App können Sie über die Seite **"Bankkonten verbinden"** neue Verbindungen erstellen. Sie wählen die Bank aus, authentifizieren sich per Webformular und autorisieren die Verbindung.

### Was passiert, wenn eine MFA (z. B. smsTAN) erforderlich ist?

Die App erkennt Webform-Anfragen automatisch. In diesem Fall wird ein Hinweis angezeigt, und die Webform öffnet sich in einem neuen Fenster zur Authentifizierung.

### Kann ich mehrere Bankkonten gleichzeitig verwalten?

Ja, Sie können beliebig viele Bankkonten anbinden und getrennt verwalten. Auch Multibank-Funktionalität wird vollständig unterstützt.

---

## Lizenzierung & Testphase

### Gibt es eine Testversion?

Ja! Sie können **365 business Banking 30 Tage kostenlos** und uneingeschränkt testen – keine automatische Verlängerung, kein Risiko.

### Wie erfolgt die Lizenzierung nach der Testphase?

Es stehen verschiedene Lizenzmethoden zur Verfügung.

Erfahren Sie mehr zur [Lizenzierung](../licensing/index.md)

---

## Support

### Wo finde ich technische Dokumentation?

Die vollständige Dokumentation finden Sie unter:
[https://docs.365businessdev.com/de-de/365-business-banking](https://docs.365businessdev.com/de-de/365-business-banking)

### Wie kann ich den Support kontaktieren?

Bei Fragen oder technischen Problemen erreichen Sie unser Support-Team unter:
📧 [support@365businessdev.com](mailto:support@365businessdev.com)
