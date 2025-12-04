# Transitkonten für Zahlungen

## Geschäftswert

In vielen Unternehmen werden Transitkonten verwendet, um Zahlungen zu verwalten, bevor sie auf das endgültige Zielkonto gebucht werden. Dies ist besonders nützlich für Unternehmen, die eine Vielzahl von Zahlungen abwickeln und sicherstellen müssen, dass diese korrekt zugeordnet und verarbeitet werden. Die Unterstützung von Transitkonten in 365 business Banking ermöglicht es Unternehmen, ihre Zahlungsprozesse effizienter zu gestalten und die Genauigkeit der Zahlungsabstimmung zu verbessern.
 
<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Gut zu wissen</strong>
    Transitkonten und entsprechende Buchungen sind nur für Sachposten sinnvoll, da der Microsoft Dynamics 365 Business Central Standard keinen Postenstatus (Offen/Geschlossen) für Sachposten unterstützt.<br>
    In Bankposten können nicht durchgeführte Transaktionen über das Feld <strong>Offen</strong> identifiziert werden.
</div>

Durch die Verwendung von Transitkonten können Unternehmen auch auf Ebene des Sachkontos eine bessere Kontrolle über ihre Zahlungsprozesse ausüben und sicherstellen, dass alle Zahlungen ordnungsgemäß verarbeitet werden, bevor sie auf das endgültige Zielkonto gebucht werden.

## Funktionsbeschreibung

Mit der Funktion für Transitkonten in 365 business Banking können Unternehmen in den **Bankkontobuchungsgruppen** ein weiteres Konto für Transitbuchungen definieren. Dieses Konto wird verwendet, um Zahlungen vorübergehend zu erfassen, bevor sie auf das endgültige Zielkonto gebucht werden. Wenn eine Zahlung durchgeführt wird (siehe [Zahlungen](../../bank-payment.md)) wird der Bankposten (`Offen` = `Ja`) und der zugehörige Sachposten auf das definierte Transitkonto gebucht.
Sobald die Zahlung erfolgreich verarbeitet wurde und über das Zahlungsabstimmungsbuch.-Blatt erfasst wird, wird der Sachposten automatisch vom Transitkonto auf das endgültige Zielkonto umgebucht. Dies stellt sicher, dass alle Zahlungen korrekt zugeordnet und verarbeitet werden, während gleichzeitig die Transparenz und Nachverfolgbarkeit der Zahlungsprozesse verbessert wird.
