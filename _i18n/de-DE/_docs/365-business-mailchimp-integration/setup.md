Bevor Sie die Mailchimp Integration in Microsoft Dynamics 365 Business Central nutzen können, ist es notwendig einen [API Schlüssel](../how-to-create-mailchimp-api-key/) zu hinterlegen und einige Einrichtungen zu vorzunehmen.

#### Grundeinrichtung
Für die Einrichtung steht die Mailchimp Schnittstelle Einrichtung zur Verfügung. Diese kann über die Systemsuche (Alt+Q) aufgerufen werden.

![Mailchimp Schnittstelle Einrichtung](/assets/images/365-business-mailchimp-integration/mailchimp-setup-de.png)

In der Einrichtung müssen folgende Einstellungen angegeben werden:

| Feldname | Beschreibung |
| --- | --- |
| **API-Schlüssel** | Der API-Schlüssel identifiziert Sie mit der Mailchimp API.<br>Weitere Informationen unter: https://mailchimp.com/help/about-api-keys/|
| **Abonnentenliste Nr.-Serie** | Gibt die Nummernserie für die Abonnentenlisten in Microsoft Dynamics 365 Business Central an.|
| **Standard Absender** | Gibt den Standard Absendername für neue Abonnentenlisten an.|
| **Standard Absender E-Mail** | Gibt die Standard Absenderadresse für neue Abonnentenlisten an.|
| **Standard Sprache** | Gibt den Standard Sprache für neue Abonnentenlisten an.|

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Hinweis:</strong>Nach der Hinterlegung des API Schlüssel wird dieser gegen die Mailchimp API geprüft und Ihre Mailchimp Kontoinformationen werden ermittelt.
</div>

### Siehe auch
- [Mailchimp API Schlüssel erstellen](../how-to-create-mailchimp-api-key/)
- [Informationen zu API Schlüsseln](https://mailchimp.com/help/about-api-keys/)
