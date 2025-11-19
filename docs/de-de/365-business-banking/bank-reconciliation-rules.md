# Kontierungsregeln

Mit 365 business Banking können Sie erweiterte Kontierungsregel für den Prozess der Zahlungsabstimmung festlegen, um den Ausgleich von Banktransaktionen zu automatisieren. Die **Kontierungsregeln** gehen dabei über die in Microsoft Dynamics 365 Business Central verfügbare Text-zu-Konto Zuordnung hinaus und ermöglichen es Ihnen, komplexere Kriterien zu definieren, um Transaktionen automatisch den richtigen Sachkonten zuzuordnen.

Zusätzlich erlauben die Kontierungsregeln die Festlegung von anzuwendenden Dimensionen, sowie die Definition von Feldwerten in individuellen Feldern, die bei der Erstellung von Buchungszeilen verwendet werden sollen.

![Kontierungsregeln](/assets/images/365-business-banking/reconciliationRule.de-DE.png)

## Welche Kriterien können in Kontierungsregeln verwendet werden?

In Kontierungsregeln können verschiedene Kriterien verwendet werden, um Banktransaktionen zu identifizieren und automatisch zuzuordnen. Dazu gehören unter anderem:

- **Zuordnungstext**: Ein Textmuster, das in der Beschreibung der Banktransaktion enthalten sein muss.
- **ZKA-Code**: Der [ZKA Code](setup/zka-code.md) (GV-Code) der Banktransaktion.
- **SEPA-Verwendungscode**: Der [SEPA Purpose Code](setup/sepa-purpose-code.md) der Banktransaktion.
- **Bankkontonr.**: Die Bankkontonr. des Bankkontos, auf dem die Transaktion erfolgt ist.
- **Geschäftspartner IBAN**: Die IBAN des Geschäftspartners, der mit der Banktransaktion verbunden ist.

## Schritt-für-Schritt-Anleitung

Gehen Sie wie folgt vor, um Kontierungsregeln in 365 business Banking festzulegen:

1. Wählen Sie **Zahlungsabstimmungsbuch.-Blätter** in der Suche von Microsoft Dynamics 365 Business Central aus.
2. Öffnen Sie das gewünschte Zahlungsabstimmungsbuch.-Blatt.
3. Wählen Sie die Banktransaktion aus, für die Sie eine Kontierungsregel festlegen möchten.
4. Wählen Sie **Kontierungsregeln** im Menüband aus.
   ![Kontierungsregeln](/assets/images/365-business-banking/reconciliationRules.de-DE.png)
   <div class="alert alert-notice">
        <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
        <strong>Gut zu wissen</strong>
        Durch die vorherige Auswahl der Banktransaktion werden die relevanten Felder in der Kontierungsregel automatisch mit den entsprechenden Werten der Transaktion ausgefüllt.<br>
        <br>
        Dabei werden neben den Kriterien auch die Felder für die Buchungseinrichtung (Buchungsart, Geschäftsbuchungsgruppe, MwSt.-Geschäftsbuchungsgruppe, Produktbuchungsgruppe, MwSt.-Produktbuchungsgruppe) mit den Werten der ausgewählten Banktransaktion und die gewählten Dimensionen vorausgefüllt.
    </div>
5. Legen Sie die gewünschten Kriterien und Buchungseinstellungen in der Kontierungsregel fest.
   ![Reconciliation Rules](/assets/images/365-business-banking/reconciliationRule.de-DE.png)
6. Schließen Sie die Seite **Kontierungsregeln**.
7. Wählen Sie **Ja**, um die Kontierungsregeln auf das aktuelle Zahlungsabstimmungsbuch.-Blatt anzuwenden.

# Siehe auch 

- [Buchungseinrichtung im Zahlungsabstimmungsbuch.-Blatt](bank-reconciliation-posting-setup.md)
- [ZKA Code](setup/zka-code.md)
- [SEPA Purpose Code](setup/sepa-purpose-code.md)