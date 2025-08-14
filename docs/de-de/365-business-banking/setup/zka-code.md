# ZKA Codes (Geschäftsvorfallcodes)

Der ZKA-Code (Geschäftsvorfallcode, GV-Code) ist eine dreistellige numerische Kennung im deutschen Zahlungsverkehr, die die Art des Bankgeschäfts beschreibt.
Er stammt aus der FinTS/HBCI- und DFÜ-Spezifikation der Deutschen Kreditwirtschaft (ehemals ZKA). Die Verwendung des ZKA-Codes ist optional, aber empfohlen, um die Zuordnung von Zahlungen zu offenen Posten oder Sachkonten zu verbessern.

365 business Banking unterstützt die Verwendung von ZKA-Codes bei der Zahlungsabstimmung. Während der Installation für 365 business Banking werden die häufigsten ZKA-Codes automatisch eingerichtet. Sie können jedoch auch eigene ZKA-Codes hinzufügen oder bestehende Codes anpassen, um Ihre spezifischen Anforderungen zu erfüllen.

<div class="alert alert-success">
    <i class="fa-duotone fa-solid fa-question-circle fa-xl"></i>
    <strong>Wussten Sie schon?</strong>
    Bei der Installation von 365 business Banking werden bereits einige gängige ZKA-Codes eingerichtet.<br>
    Diese können Sie jederzeit anpassen oder erweitern, um die Zuordnung zu den offenen Posten zu optimieren.
</div>

## Schritt-für-Schritt-Anleitung

Gehen Sie wie folgt vor, um ZKA-Codes in 365 business Banking zu verwalten:

1. Wählen Sie **ZKA Codes** in der Suche von Microsoft Dynamics 365 Business Central aus.
2. Klicken Sie auf **Neu**, um einen neuen ZKA-Code hinzuzufügen, oder wählen Sie einen vorhandenen Code aus der Liste aus, um ihn zu bearbeiten.

![ZKA Codes verwalten](/assets/images/365-business-banking/zka-code-list.en-US.png)

## Funktion

- Wird in CAMT-Nachrichten und Kontoauszugsformaten (z. B. MT940) mitgeliefert
- Dient zur automatischen Klassifizierung von Transaktionen
- Grundlage für Buchungslogik (z. B. Gebühren, Zinsen, Überweisungen)

# Beispiel

| Code    | Bedeutung                              |
| ------- | -------------------------------------- |
| **16**  | SEPA Credit Transfer (Gutschrift)      |
| **20**  | Foreign Credit Transfer (SWIFT, MT103) |
| **101** | SEPA Payment Sent (Outgoing)           |
| **116** | SEPA Payment Received (Incoming)       |
| **201** | SEPA Direct Debit (CORE)               |
| **202** | SEPA Direct Debit (B2B)                |
| **300** | Interest Credit                        |
| **400** | Charge / Fee                           |


## Siehe auch

- [SEPA Purpose Code](sepa-purpose-code.md)
- [Zahlungscode Zuordnung](../payment-code-mapping.md)