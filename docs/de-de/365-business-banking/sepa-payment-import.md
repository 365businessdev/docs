# SEPA-Zahlungsimport

Mit der SEPA-Zahlungsimportfunktion können Sie SEPA-Zahlungsdateien, im SEPA pain.001 XML-Format (ISO 20022) in Microsoft Dynamics 365 Business Central importieren und die Zahlungen durchführen. Diese Funktion erleichtert die Verarbeitung von SEPA-Überweisungen, die von externen Systemen (z.B. Lohnabrechnungssystemen) generiert wurden.

![SEPA-Zahlungsimport](/assets/images/365-business-banking/sepa-payment-import-card.de-DE.png)

## Welche SEPA-Zahlungsdateien werden unterstützt?

365 business Banking unterstützt SEPA-Zahlungsdateien im pain.001 XML-Format, das den ISO 20022-Standards entspricht. Der Import prüft die SEPA-Version anhand des Namespace (pain.001.*) und ist somit generisch kompatibel zu allen üblichen SEPA Credit Transfer Formaten. Dabei werden folgende Versionen unterstützt:

| Version            | Beschreibung                                                                 | Unterstützt |
|--------------------|------------------------------------------------------------------------------|--------------|
| **pain.001.001.03** | Klassisches SEPA Credit Transfer Format (weit verbreitet, `<BIC>`-Tag)         | <i aria-hidden="true" class="fas fa-check"></i> |
| **pain.001.001.04** | Nationale Erweiterung / Übergangsvariante, kaum im Einsatz                   | <i aria-hidden="true" class="fas fa-check"></i> |
| **pain.001.001.05** | Erweiterung mit Zusatzfeldern (z. B. Category Purpose)                       | <i aria-hidden="true" class="fas fa-check"></i> |
| **pain.001.001.06** | Aktualisierte SEPA-Version (2014 ff., Standard in vielen Banken)             | <i aria-hidden="true" class="fas fa-check"></i> |
| **pain.001.001.07** | Minor-Revision mit formalen Klarstellungen                                   | <i aria-hidden="true" class="fas fa-check"></i> |
| **pain.001.001.08** | ISO-Update 2019, weiterhin mit `<BIC>`-Tag                                  | <i aria-hidden="true" class="fas fa-check"></i> |
| **pain.001.001.09** | ISO 20022 Release 2023, neue Tags (z. B. `<BICFI>`, `<InstrPrty>`)          | <i aria-hidden="true" class="fas fa-check"></i> |

## Welche Zahlungsarten werden unterstützt?

Der SEPA-Zahlungsimport unterstützt die folgenden Zahlungsarten:

<ul>
<i aria-hidden="true" class="fas fa-check"></i> SEPA-Überweisung<br>
<i aria-hidden="true" class="fas fa-check"></i> SEPA-Sammelüberweisung<br>
<i aria-hidden="true" class="fas fa-check"></i> SEPA-Terminüberweisung
</ul>

<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Gut zu wissen</strong>
    Sofern das gewählte Bankkonto keine SEPA-Sammelüberweisungen unterstützt, werden diese automatisch als einzelne SEPA-Überweisungen ausgeführt.
</div>

## Schritt-für-Schritt-Anleitung

Gehen Sie wie folgt vor, um eine SEPA-Zahlungsdatei zu importieren und die Zahlungen durchzuführen:

1. Wählen Sie **SEPA-Zahlungsimporte** in der Suche von Microsoft Dynamics 365 Business Central aus.
2. Wählen Sie die Aktion **Zahlungsdatei importieren**.
   ![SEPA-Zahlungsdatei importieren](/assets/images/365-business-banking/sepa-payment-import.de-DE.png)
3. Wählen Sie die SEPA-Zahlungsdatei (pain.001 XML-Datei) von Ihrem Computer aus.
4. Bestätigen Sie die Verarbeitung und Validierung der Datei, indem Sie auf **Ja** klicken.
5. Überprüfen Sie die importierten Zahlungen in der Liste der SEPA-Zahlungsimporte.
   ![SEPA-Zahlungsimport](/assets/images/365-business-banking/sepa-payment-import-card.de-DE.png)
6. Wählen Sie, sofern dies nicht automatisch erfolgt, das entsprechende Bankkonto für die Zahlungen aus.
   ![Bankkonto auswählen](/assets/images/365-business-banking/sepa-payment-import-bank-account-selection.de-DE.png)
7. Wählen Sie die Aktion **Zahlungen durchführen**, um die Zahlungen auszuführen.
8. Bestätigen Sie die Durchführung der Zahlungen.
   ![Zahlungen durchführen](/assets/images/365-business-banking/sepa-payment-import-carry-out.de-DE.png)
9. Folgen Sie den Anweisungen, um den Zahlungsprozess abzuschließen.