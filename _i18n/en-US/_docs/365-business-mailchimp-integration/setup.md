> This page is not available in the selected language. The page is available in **German**. Please select other language to display.

Bevor Sie die Mailchimp Integration in Microsoft Dynamics 365 Business Central nutzen können, ist es notwendig einen [API Schlüssel](../how-to-create-mailchimp-api-key/) zu hinterlegen und einige Einrichtungen zu vorzunehmen.

#### Grundeinrichtung
Für die Einrichtung steht die Mailchimp Schnittstelle Einrichtung zur Verfügung. Diese kann über die Systemsuche (Alt+Q) aufgerufen werden.

![Mailchimp Schnittstelle Einrichtung](/assets/images/365-business-mailchimp-integration/mailchimp-setup-de.png)

In der Einrichtung müssen folgende Einstellungen angegeben werden:

| Feldname | Beschreibung |
| --- | --- |
| **API-Schlüssel** | Der API-Schlüssel identifiziert sie mit der Mailchimp API.<br>Weitere Informationen unter: https://mailchimp.com/help/about-api-keys/|
| **Abonnentenliste Nr.-Serie** | Gibt die Nummernserie für die Abonnentenlisten in Microsoft Dynamics 365 Business Central an.|
| **Standard Absender** | Gibt den Standard Absendername für neue Abonnentenlisten an.|
| **Standard Absender E-Mail** | Gibt die Standard Absenderadresse für neue Abonnentenlisten an.|
| **Standard Sprache** | Gibt den Standard Sprache für neue Abonnentenlisten an.|

>**Hinweis**<br>Nach der Hinterlegung des API Schlüssel wird dieser gegen die Mailchimp API geprüft und Ihre Mailchimp Kontoinformationen werden ermittelt.

### Siehe auch
- [Mailchimp API Schlüssel erstellen](../how-to-create-mailchimp-api-key/)
- [Informationen zu API Schlüsseln](https://mailchimp.com/help/about-api-keys/)