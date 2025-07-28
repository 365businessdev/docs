# Zahlungsform Einrichtung

Die Zahlungsform Einrichtung in Microsoft Dynamics 365 Business Central ermöglicht es Ihnen, verschiedene Zahlungsarten zu konfigurieren und zu verwalten. Sie können die Zahlungsarten auswählen, die für Ihre Bankkonten und Transaktionen relevant sind, und diese entsprechend anpassen.

Dabei können Sie über das Feld **Zahlungsart** die gewünschte Zahlungsart für Zahlungsausgänge festlegen.
Die grundlegenden Zahlungsarten sind:

- SEPA Überweisung
- SEPA Echtzeitüberweisung
- Lastschrift
- Dauerauftrag

![Zahlungsform Einrichtung](/assets/images/365-business-banking/payment-method-setup.en-US.png)

## Weitere Zahlungsarten

Zusätzlich zu den oben genannten Zahlungsarten leiten sich einzelne Zahlungsarten von den Hauptarten, entsprechend der Parameter, die im Zahlungsausgang hinterlegt sind, ab. Entsprechend können Sie auch folgende Zahlungsarten nutzen:

- SEPA Terminüberweisung
- SEPA Sammelüberweisung
- SEPA Sammellastschrift

### SEPA Terminüberweisung

Eine SEPA Terminüberweisung ist eine **SEPA Überweisung**, die zu einem späteren Zeitpunkt ausgeführt wird. Sie können das Ausführungsdatum (**Buchungsdatum**) im Zlg.-Ausg. Buch.-Blatt festlegen. Diese Zahlungsart ist nützlich, wenn Sie Zahlungen planen möchten, die zu einem späteren Zeitpunkt fällig sind.

### SEPA Sammelüberweisung

Eine SEPA Sammelüberweisung ist eine **SEPA Überweisung**, die mehrere Zahlungsempfänger in einer einzigen Transaktion zusammenfasst. Diese Zahlungsart ist besonders nützlich, wenn Sie mehrere Zahlungen gleichzeitig an verschiedene Empfänger vornehmen möchten, diese jedoch gemeinsam verbuchen möchten. 

### SEPA Sammellastschrift

Eine SEPA Sammellastschrift ist eine **SEPA Lastschrift**, die mehrere Zahlungspflichtige in einer einzigen Transaktion zusammenfasst. Diese Zahlungsart ist besonders nützlich, wenn Sie mehrere Lastschriften gleichzeitig von verschiedenen Konten einziehen möchten, diese jedoch gemeinsam verbuchen möchten.

