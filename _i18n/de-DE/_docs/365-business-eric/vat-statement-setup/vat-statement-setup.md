Die Grundlage für die Berechnung der meisten unterstützten [ELSTER Steuerdatenarten](../elster-tax-data-type/) ist die [**MwSt.-Abrechnung**](https://docs.microsoft.com/de-de/dynamics365/business-central/finance-how-setup-vat-statement) in Microsoft Dynamics 365 Business Central. Dabei werden in der MwSt.-Abrechnung Berechnungsformel hinterlegt an Hand derer **Rubrikennr.** berechnet werden.
Die MwSt.-Abrechnung kann dabei aus verschiedenen Quellen die Berechnungen vornehmen:

| Art | Beschreibung |
| --- | --- |
| Kontosumme | Zur Summierung von Sachposten eines ausgewählten Sachkontos (Feld: Kontosumme). |
| MwSt.-Posten-Summe | Zur Summierung von MwSt.-Posten auf Basis der gewählten Buchungsart, MwSt.-Geschäftsbuchungsgruppe und MwSt.-Produktbuchungsgruppe. |
| Rubrikensumme | Erlaubt die Kalkulation mit zuvor definierten Rubriken (Feld: Rubrikensumme). |

Weitere Informationen zur Verwendung der MwSt.-Abrechnung finden Sie in [Microsoft Docs](https://docs.microsoft.com/de-de/dynamics365/business-central/).

Microsoft liefert im Rahmen seiner Demonstrationsdatenbank mit dem CRONUS-Mandanten bereits eine MwSt.-Abrechnung zum Zwecke der USt.-Voranmeldung aus. Abhängig von Ihren tatsächlichen Geschäftsvorfällen, den konfigurierten MwSt.-Produkt- und MwSt.-Geschäftsbuchungsgruppen sowie dem verwendeten Kontenplan ist es oftmals notwendig Anpassungen oder Ergänzungen vorzunehmen.

#### Wie berechnet 365 business ERiC die Werte zur Übermittlung der Steuerdaten?

Die Berechnung der Steuerdaten erfolgt in den meisten Fällen über die MwSt.-Abrechnung. Dabei dient das Feld **Rubrikennr.** dazu die **Steuerkennzeichen** (kurz Kennzeichen) zu definieren und das Feld **Betragsart** definiert welcher Wert verwendet werden soll. Die Berechnung erfolgt dabei identisch zu den von Microsoft bereitgestellten Aktionen, wie beispielsweise die Aktion **Vorschau**. Das bedeutet, dass Sie jederzeit über die MwSt.-Abrechnung die kalkulierten Werte einsehen und prüfen können.

> **Hinweis**<br>Bitte beachten Sie, dass nur Kennzeichen (im Feld Rubrikennr.) verwendet werden, die in der jeweiligen Steuerdatenart zulässig sind.

#### So richten Sie die MwSt.-Abrechnung ein

Die verschiedenen Datenarten verwenden, da unterschiedliche Informationen und Kennzeichen verwendet werden müssen, unterschiedliche MwSt.-Abrechnungen. In der [**ELSTER Einrichtung**](../elster-tax-data-type/) können Sie für die verschiedenen Steuerdatenarten jeweils die MwSt.-Abrechnungsvorlage und den Namen definieren, welche für die Kalkulation verwendet werden.

> **Hinweis**<br>Wir empfehlen für die Steuerdatenart [**Antrag auf Dauerfristverlängerung**](../elster-permanent-time-limit-extension) dieselbe MwSt.-Abrechnung, wie für die [**Umsatzsteuervoranmeldung**](../elster-sales-vat-adv-notification) zu verwenden. Die wesentlichen Werte sind unter denselben Kennzeichen in beiden Abrechnungen vorhanden bzw. können basierend auf den Kennzeichen berechnet werden.

##### Hier finden Sie die Dokumentation der unterstützten Kennzeichen für die MwSt.-Abrechnung 

- [Umsatzsteuervoranmeldung (UStVA)](./sales-vat-adv-notification/)
- [Umsatzsteuererklärung (USt)](./annual-vat-return/)

##### Warum wird keine MwSt.-Abrechnung mit 365 business ERiC ausgeliefert?

Die notwendigen Kennzahlen und die zu Grunde liegenden Einrichtungen in der MwSt.-Abrechnung unterscheiden sich, abhängig von den erstellen MwSt.-Produkt- und Geschäftsbuchungsgruppen, sowie vom verwendeten Kontenrahmen. Aus diesem Grund ist es uns leider nicht möglich eine einheitliche MwSt.-Abrechnung auszuliefern, die für die Berechnung verwendet werden kann.

### Siehe auch
 - [ELSTER Einrichtung](../elster-tax-data-type/)
 - [ELSTER Steuerdatenarten](../elster-tax-data-type/)
 - [Microsoft Docs - Festlegen einer MwSt.-Abrechnung](https://docs.microsoft.com/de-de/dynamics365/business-central/finance-how-setup-vat-statement)