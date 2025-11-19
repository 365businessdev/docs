# Empfängerüberprüfung (VOP)

Seit Oktober 2025 ist die Empfängerüberprüfung (Verification of Payee - VOP) für SEPA-Überweisungen in Deutschland verpflichtend. Diese Maßnahme dient dazu, Betrug zu verhindern und die Sicherheit von Zahlungen zu erhöhen, indem der Name des Zahlungsempfängers mit den bei der Bank hinterlegten Informationen abgeglichen wird.

365 business Banking unterstützt die Empfängerüberprüfung für SEPA-Überweisungen, um sicherzustellen, dass Ihre Zahlungen den gesetzlichen Anforderungen entsprechen. Wenn Sie eine SEPA-Überweisung initiieren, wird automatisch eine Überprüfung des Empfängernamens durchgeführt. Sollte der Name des Empfängers nicht mit den bei der Bank hinterlegten Informationen übereinstimmen, werden Sie benachrichtigt und können entsprechende Maßnahmen ergreifen.

Die Überprüfung erfolgt in Echtzeit, bei der Durchführung der Überweisung, sodass Sie sofort informiert werden, falls es Unstimmigkeiten gibt. Dies hilft, Fehler zu vermeiden und sicherzustellen, dass Ihre Zahlungen korrekt und sicher abgewickelt werden.

![Verification of Payee (VOP) Warnung](/assets/images/365-business-banking/vop-warning.png)

## Was passiert bei einer Nichtübereinstimmung?

Wenn der Name des Zahlungsempfängers nicht mit den bei der Bank hinterlegten Informationen übereinstimmt, erhalten Sie eine Warnung. In diesem Fall haben Sie die Möglichkeit, die Überweisung zu überprüfen und gegebenenfalls zu korrigieren, bevor sie ausgeführt wird. Dies gibt Ihnen die Gelegenheit, Fehler zu beheben und sicherzustellen, dass Ihre Zahlung an den richtigen Empfänger geht.

## Wie kann ich abweichende Kontoinhaber verwalten?

365 business Banking bietet Ihnen die Möglichkeit abweichende Kontoinhaber zu verwalten. Ein typischer Anwendungsfall ist es, wenn Sie regelmäßig Zahlungen an einen Empfänger tätigen, dessen Name von dem bei der Bank hinterlegten Namen abweicht (z.B. bei Firmennamen oder Handelsnamen).

In diesen Fällen können Sie im Debitor- oder Kreditorbankkonto im Feld **Kontoinhaber** einen abweichenden Namen hinterlegen, welcher von 365 business Banking bei der Initiierung von SEPA-Überweisungen verwendet wird. 

![Kreditor Bankkontokarte](/assets/images/365-business-banking/vendor-bank-account.de-DE.png)

### Schritt-für-Schritt-Anleitung

Gehen Sie wie folgt vor, um einen abweichenden Kontoinhaber zu hinterlegen. Im folgenden Beispiel wird ein Kreditorbankkonto verwendet:

1. Wählen Sie **Kreditoren** in der Suche von Microsoft Dynamics 365 Business Central aus.
2. Öffnen Sie die Karte des gewünschten Kreditors.
3. Wählen Sie das Aktionsmenü **Kreditor** und die Aktion **Bankkonten** aus.
4. Öffnen Sie das gewünschte Bankkonto des Kreditors.
5. Überprüfen Sie das Feld **Kontoinhaber**. Tragen Sie hier den abweichenden Namen ein, der bei der Empfängerüberprüfung verwendet werden soll.

<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Gut zu wissen</strong>
    Die Empfängerüberprüfung (VOP) dient dem Schutz vor Betrug und der Erhöhung der Sicherheit bei der Abwicklung von SEPA-Überweisungen.<br>
    Bitte nehmen Sie nur Änderungen im Feld Kontoinhaber vor, wenn Sie sicher sind, dass der abweichende Name korrekt ist und regelmäßig verwendet wird.
</div>