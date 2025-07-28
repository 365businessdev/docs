# SEPA Purpose Codes

Der SEPA Purpose Code wird verwendet, um den Zweck einer SEPA-Überweisung zu identifizieren. Dieser Code ist optional und kann verwendet werden, um den Zweck der Zahlung zu spezifizieren. Die Verwendung des SEPA Purpose Codes kann die Zuordnung von Zahlungen zu offenen Posten oder Sachkonten verbessern und die Effizienz der Zahlungsabstimmung erhöhen. 

Der SEPA Purpose Code ist ein standardisierter, nach ISO 20022 definierter, vierstelliger Code, der im SEPA-Zahlungsverkehr (z. B. in PAIN.001-Überweisungen oder PAIN.008-Lastschriften) verwendet wird, um den Zweck der Zahlung eindeutig zu kennzeichnen.

365 business Banking unterstützt die Verwendung von SEPA Purpose Codes bei der Zahlungsabstimmung und der Erstellung von SEPA-Überweisungen. Während der Installation für 365 business Banking werden die häufigsten SEPA Purpose Codes automatisch eingerichtet. Sie können jedoch auch eigene SEPA Purpose Codes hinzufügen oder bestehende Codes anpassen, um Ihre spezifischen Anforderungen zu erfüllen.

<div class="alert alert-success">
    <i class="fa-duotone fa-solid fa-question-circle fa-xl"></i>
    <strong>Wussten Sie schon?</strong>
    Bei der Installation von 365 business Banking werden bereits einige gängige SEPA Purpose Codes eingerichtet.<br>
    Diese können Sie jederzeit anpassen oder erweitern, um die Zuordnung zu den offenen Posten zu optimieren.
</div>

## Schritt-für-Schritt-Anleitung

Gehen Sie wie folgt vor, um SEPA Purpose Codes in 365 business Banking zu verwalten:

1. Wählen Sie **SEPA Purpose Codes** in der Suche von Microsoft Dynamics 365 Business Central aus.
2. Klicken Sie auf **Neu**, um einen neuen SEPA Purpose Code hinzuzufügen, oder wählen Sie einen vorhandenen Code aus der Liste aus, um ihn zu bearbeiten.

![SEPA Purpose Codes verwalten](/assets/images/365-business-banking/sepa-purpose-code-list.en-US.png)

## Funktion

- Unterstützt die Kategorisierung von Zahlungen (z. B. Gehalt, Steuer, Gebühren)
- Ermöglicht bessere Automatisierung in Banking-Systemen
- Wird von Banken zur Compliance-Prüfung (z. B. AML, Sanktionsprüfung) genutzt

## Beispiel


| Code     | Bedeutung             |
| -------- | --------------------- |
| **SALA** | Salary (Gehalt)       |
| **PENS** | Pension               |
| **SUPP** | Supplier Payment      |
| **TAXS** | Tax Payment           |
| **INTC** | Intra-Company Payment |
| **FEES** | Fees                  |
| **CHRG** | Charges               |

Eine vollständige Liste der SEPA Purpose Codes finden Sie in der [ISO 20022 Dokumentation](https://www.iso20022.org/catalogue-messages/additional-content-messages/external-code-sets).

## Siehe auch

- [ZKA Code (Geschäftsvorfallcode)](zka-code.md)
- [Zahlungscode Zuordnung](../payment-code-mapping.md)
- [ISO 20022 Dokumentation](https://www.iso20022.org/catalogue-messages/additional-content-messages/external-code-sets)