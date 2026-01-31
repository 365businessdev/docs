# Empfängerüberprüfung (VoP)

Seit Oktober 2025 ist die Empfängerüberprüfung (Verification of Payee - VoP) für SEPA-Überweisungen in Deutschland verpflichtend. Diese Maßnahme dient dazu, Betrug zu verhindern und die Sicherheit von Zahlungen zu erhöhen, indem der Name des Zahlungsempfängers mit den bei der Bank hinterlegten Informationen abgeglichen wird.

365 business Banking unterstützt die Empfängerüberprüfung für SEPA-Überweisungen, um sicherzustellen, dass Ihre Zahlungen den gesetzlichen Anforderungen entsprechen. Wenn Sie eine SEPA-Überweisung initiieren, wird automatisch eine Überprüfung des Empfängernamens durchgeführt. Sollte der Name des Empfängers nicht mit den bei der Bank hinterlegten Informationen übereinstimmen, werden Sie benachrichtigt und können entsprechende Maßnahmen ergreifen.

Die Überprüfung erfolgt in Echtzeit, bei der Durchführung der Überweisung, sodass Sie sofort informiert werden, falls es Unstimmigkeiten gibt. Dies hilft, Fehler zu vermeiden und sicherzustellen, dass Ihre Zahlungen korrekt und sicher abgewickelt werden.

![Verification of Payee (VoP) Warnung](/assets/images/365-business-banking/vop-warning.png)

## Empfängerüberprüfung (VoP) direkt in 365 business Banking

Zusätzlich steht das Feature **Empfängerüberprüfung (VoP)** in 365 business Banking zur Verfügung. Mit dieser Funktion können Sie Ihre Stammdaten (z.B. Debitoren- und Kreditorenkonten) direkt in Microsoft Dynamics 365 Business Central auf Übereinstimmung mit den bei der Bank hinterlegten Informationen überprüfen.
 
<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Gut zu wissen</strong>
    Bei der Empfängerüberprüfung (VoP) in 365 business Banking handelt es sich um ein kostenpflichtiges Feature, dass auch separat von 365 business Banking lizenziert werden kann.<br>Bitte beachten Sie, dass durch den Einsatz der Empfängerüberprüfung (VoP) zusätzliche Kosten entstehen können.<br>
    <br>
    Für weitere Informationen zu den Lizenzierungs- und Preismodellen wenden Sie sich bitte an Ihren Microsoft-Partner oder den 365 business development Support.
</div>

Die Überprüfungsergebnisse werden dabei übersichtlich dargestellt, sodass Sie schnell erkennen können, ob die hinterlegten Namen korrekt sind oder ob Anpassungen erforderlich sind.

![Empfängerüberprüfung (VoP) in 365 business Banking](/assets/images/365-business-banking/vop/cust-bank-acc.de-DE.png)

### Welche Status gibt es?

Bei der Empfängerüberprüfung (VoP) in 365 business Banking gibt es folgende Status:

| Status | Beschreibung |
|--------|--------------|
| _Leer_ | Bei dem Bankkonto handelt es sich nicht um ein SEPA-Bankkonto oder es liegen unvollständige Informationen vor. |
| ⚪ | Die Empfängerüberprüfung (VoP) wurde für dieses Bankkonto noch nicht durchgeführt. Der Kontoinhaber wurde bisher nicht mit den Bankdaten abgeglichen. |
| ◯ | Die Empfängerüberprüfung (VoP) ist für dieses Bankkonto nicht verfügbar. Mögliche Gründe sind technische Einschränkungen, nicht unterstützte Länder, Banken oder Kontotypen. |
| 🔴 | Die Empfängerüberprüfung (VoP) ist fehlgeschlagen. Der angegebene Kontoinhaber stimmt nicht mit dem von der Bank gemeldeten Namen überein. Dies kann auf eine fehlerhafte oder potenziell riskante Zahlung hinweisen. |
| 🟡 | Die Empfängerüberprüfung (VoP) hat eine teilweise Übereinstimmung festgestellt. Der angegebene Kontoinhaber weicht geringfügig vom von der Bank gemeldeten Namen ab. Bitte prüfen Sie die Details vor der weiteren Verarbeitung. | 
| 🟢 | Die Empfängerüberprüfung (VoP) war erfolgreich. Der angegebene Kontoinhaber stimmt mit dem von der Bank zurückgemeldeten Namen überein. |

#### Was passiert bei einer fehlgeschlagenen Überprüfung?

Bei einer fehlgeschlagenen Empfängerüberprüfung (VoP) in 365 business Banking wird der Status '🔴' angezeigt. Dies bedeutet, dass der angegebene Kontoinhaber nicht mit dem von der Bank gemeldeten Namen übereinstimmt. In diesem Fall sollten Sie die hinterlegten Informationen überprüfen und gegebenenfalls korrigieren, um sicherzustellen, dass Ihre Zahlungen korrekt abgewickelt werden. 

<div class="alert alert-warn">
    <i class="fa-duotone fa-solid fa-triangle-exclamation fa-xl"></i>
    <strong>Achtung</strong>
    Bitte beachten Sie, dass die Ausführung von SEPA-Überweisungen an Empfänger mit fehlgeschlagener Empfängerüberprüfung (VoP) nicht aktiv unterbunden wird.<br>
    365 business Banking informiert Sie lediglich über die Nichtübereinstimmung, sodass Sie entsprechende Maßnahmen ergreifen können.<br>
    <br>
    <img src="/assets/images/365-business-banking/vop/vop-warning-pmt-journal.de-DE.png" alt="VoP Warnung im Zahlungsjournal">
</div>

#### Was passiert bei einer teilweisen Übereinstimmung?

Bei einer teilweisen Übereinstimmung wird der Status '🟡' angezeigt. Dies bedeutet, dass der angegebene Kontoinhaber geringfügig vom von der Bank gemeldeten Namen abweicht. In diesem Fall bietet Ihnen das System an, den von der Bank zurückgemeldeten Namen des Kontoinhabers zu aktualisieren.

![VoP Teilweise Übereinstimmung](/assets/images/365-business-banking/vop/vop-close-match-qst.de-DE.png)


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
    Die Empfängerüberprüfung (VoP) dient dem Schutz vor Betrug und der Erhöhung der Sicherheit bei der Abwicklung von SEPA-Überweisungen.<br>
    Bitte nehmen Sie nur Änderungen im Feld Kontoinhaber vor, wenn Sie sicher sind, dass der abweichende Name korrekt ist und regelmäßig verwendet wird.
</div>