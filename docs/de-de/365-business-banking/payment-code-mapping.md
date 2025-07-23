# Zahlungscode Zuordnung

Im Rahmen einer SEPA Zahlung werden neben dem Verwendungszweck zusätzliche Zahlungscodes übermittelt, die zur Identifizierung der Zahlung verwendet werden. Im Rahmen der Zahlungsabstimmung können diese Codes verwendet werden, um die Zuordnung der Banktransaktionen zu den offenen Posten oder Sachkonten zu verbessern.

Folgende Zahlungscodes werden unterstützt:

- **ZKA Code**: Der ZKA Code, auch Geschäftsvorfallcode genannt, wird verwendet, um den Geschäftsvorfall der Banktransaktion zu identifizieren. Dieser Code wird in der Regel von der Bank bereitgestellt und kann zur Identifizierung der Art der Transaktion verwendet werden.
  Weitere Informationen, siehe [ZKA Code](payment-codes/zka-code.md).

- **SEPA Purpose Code**: Der SEPA Purpose Code wird verwendet, um den Zweck der SEPA Überweisung zu identifizieren. Dieser Code ist optional und kann verwendet werden, um den Zweck der Zahlung zu spezifizieren.
  Weitere Informationen, siehe [SEPA Purpose Code](payment-codes/sepa-purpose-code.md).

Über die Seite **Zahlungscode Zuordnung** kann eine Zuordnung von Zahlungscodes zu Kontoart und Kontonr. vorgenommen werden. Dies ermöglicht eine genauere Zuordnung der Banktransaktionen zu den entsprechenden Konten und verbessert die Effizienz der Abstimmung.

![Zahlungscode Zuordnung](/assets/images/365-business-banking/payment-code-mapping.en-US.png)

Sowohl die Angabe des ZKA Codes als auch des SEPA Purpose Codes ist optional. Wenn Sie diese Codes verwenden, können Sie die Zuordnung der Banktransaktionen zu den offenen Posten oder Sachkonten verbessern und die Effizienz der Abstimmung erhöhen.

## Siehe auch

- [Bankkontoabstimmung](bank-reconciliation.md)
- [ZKA Code](payment-codes/zka-code.md)
- [SEPA Purpose Code](payment-codes/sepa-purpose-code.md)