# Zahlungsdienst Gebühren

## Geschäftswert

Zahlungsdienste (PSP) erheben häufig Gebühren für die Abwicklung von Zahlungen über ihre Plattformen. Diese Gebühren werden in der Regel direkt von den Zahlungstransaktionen abgezogen, was zu Diskrepanzen zwischen den erwarteten und den tatsächlich erhaltenen Beträgen führen kann. Die Verwaltung und Verbuchung dieser Gebühren in Microsoft Dynamics 365 Business Central kann komplex sein und erfordert eine genaue Nachverfolgung, um die finanzielle Integrität sicherzustellen und offene Posten (z.B. Verkaufsrechnungen) korrekt und vollständig auszugleichen.

## Funktionsbeschreibung
 
<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Gut zu wissen</strong>
    Diese Funktion wird für alle Zahlungsdienste (PSP) unterstützt, die in 365 business Banking integriert sind.
</div>

Die Zahlungsdienst Integration in 365 business Banking unterstützt für alle angebundenen [Zahlungsdienste (PSP)](../../payment-services.md) die automatische Erfassung von Gebühren, die von Zahlungsdienstleistern für die Abwicklung von Zahlungen erhoben werden. Diese Gebühren werden automatisch aus den importierten Zahlungstransaktionen extrahiert und in Microsoft Dynamics 365 Business Central als separate Transaktion im Zahlungsabstimmungsbuch.-Blatt erfasst.

Anwender können die tatsächlich erhaltenen Beträge und die damit verbundenen Gebühren einfach nachvollziehen und offene Posten (z.B. Verkaufsrechnungen) korrekt und vollständig ausgleichen. Die Gebühren können zudem über [Kontierungsregeln](../../bank-reconciliation-rules.md) automatisch auf Sachkonten (z.B. Nebenkosten des Geldverkehrs) oder als zusätzliche Debitorenposten gebucht werden.

Insgesamt trägt die Funktion zur automatischen Erfassung von Zahlungsdienst Gebühren in 365 business Banking dazu bei, den Verwaltungsaufwand zu reduzieren, die Genauigkeit der Finanzdaten zu verbessern und die Effizienz der Geschäftsprozesse zu steigern.