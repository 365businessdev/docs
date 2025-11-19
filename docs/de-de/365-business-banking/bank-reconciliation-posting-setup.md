# Buchungseinrichtung 

In diesem Abschnitt erfahren Sie, wie Sie im Prozess der Zahlungsabstimmung die Buchungseinrichtung vornehmen können, um festzulegen, wie Banktransaktionen in Microsoft Dynamics 365 Business Central gebucht werden sollen.

Die Buchungseinrichtung umfasst die Definition von:

- Buchungsart
- Geschäftsbuchungsgruppe
- MwSt.-Geschäftsbuchungsgruppe
- Produktbuchungsgruppe
- MwSt.-Produktbuchungsgruppe

![Buchungseinrichtung im Zahlungsabstimmungsbuch.-Blatt](/assets/images/365-business-banking/bank-reconciliation-posting-setup.de-DE.png)

Diese Einstellungen helfen dabei, die korrekte Verbuchung von Banktransaktionen sicherzustellen und die Einhaltung der Buchhaltungs- und Steuervorschriften zu gewährleisten. Die Buchungseinrichtung kann dabei individuell pro Banktransaktion oder basierend auf vordefinierten [Kontierungsregeln](bank-reconciliation-rules.md) vorgenommen werden.

<div class="alert alert-success">
    <i class="fa-duotone fa-solid fa-question-circle fa-xl"></i>
    <strong>Wussten Sie schon?</strong>
    Erfahren Sie mehr über <strong>Kontierungsregeln</strong> im <a href="bank-reconciliation-rules.md">entsprechenden Abschnitt</a>.
</div>

## Wofür kann die Buchungseinrichtung verwendet werden?

Die Buchungseinrichtung wird verwendet, um sicherzustellen, dass Banktransaktionen korrekt in Microsoft Dynamics 365 Business Central verbucht werden. Durch die Definition der oben genannten Parameter können Sie:
- Die Buchungsart festlegen, um zu bestimmen, wie die Transaktion verbucht wird (z.B. Einkauf, Verkauf).
- Die Geschäftsbuchungsgruppe und MwSt.-Geschäftsbuchungsgruppe zuweisen, um die richtigen Konten für die Buchung zu verwenden.
- Die Produktbuchungsgruppe und MwSt.-Produktbuchungsgruppe definieren, um sicherzustellen, dass die richtigen Steuersätze und Konten für die Produkte oder Dienstleistungen verwendet werden, die mit der Banktransaktion verbunden sind.

Durch die korrekte Buchungseinrichtung können Sie die Genauigkeit Ihrer Finanzdaten verbessern und die Einhaltung gesetzlicher Vorschriften sicherstellen.

![Buchungsvorschau](/assets/images/365-business-banking/bank-reconciliation-posting-setup-post-preview.de-DE.png)

<div class="alert alert-warn">
    <i class="fa-duotone fa-solid fa-triangle-exclamation fa-xl"></i>
    <strong>Achtung</strong>
    Bitte beachten Sie, dass eine falsche Buchungseinrichtung zu fehlerhaften Buchungen führen kann, die Ihre Finanzberichte und Steuererklärungen beeinträchtigen können. Stellen Sie sicher, dass Sie die Buchungseinrichtung sorgfältig überprüfen und gegebenenfalls mit Ihrem Buchhalter oder Steuerberater abstimmen.
</div>

# Siehe auch

- [Kontierungsregeln](bank-reconciliation-rules.md)