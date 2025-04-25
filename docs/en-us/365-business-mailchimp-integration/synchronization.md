# Synchronization

> This page is not available in the selected language. The page is available in **German**. Please select other language to display.

Die Mailchimp Integration App für Microsoft Dynamics 365 Business Central führt eine regelmäßige und ereignisbezogene Synchronisation zwischen Mailchimp und Microsoft Dynamics 365 Business Central aus. Die Synchronisation erfolgt im Hintergrund, kann allerdings bei Bedarf auch, bspw. in der [Abonnentenliste](audience-lists.md), manuell ausgeführt werden.

## Synchronisation

Es werden folgende Entitäten aus oder von Mailchimp synchronisiert bzw. übertragen:

### Abonnentenliste

Bei der Synchronisation von Abonnentenlisten werden folgende Informationen synchronisiert:

| Microsoft Dynamics 365 Business Central | Mailchimp | Richtung |
| --- | --- | --- |
| Beschreibung | name | Bidirektional |
| Beschreibung 2 | _n/a_ |  |
| Abonnentenliste ID | audience id | Von Mailchimp |

### Abonnenten

Bei der Synchronisation von Abonnenten werden folgende Informationen synchronisiert

| Microsoft Dynamics 365 Business Central | Mailchimp | Richtung |
| --- | --- | --- |
| Abonnentenliste ID | audience id | Bidirektional |
| Kontakt E-Mail Adresse | email_address | Bidrektional |
| Status | status | Bidirektional |
| Ursache | unsubscribe reason | Von Mailchimp |
| Opt-In IP-Adress | ip opt | Von Mailchimp |
| Opt-In Zeitpunkt | timestamp opt | Von Mailchimp |

<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Good to know</strong>Die Synchronisation des Status findet indirekt statt, jedoch unter Berücksichtigung der Workflows in Mailchimp. Der Status kann über die Aktionen Abonnieren (Status = Abonniert) und Abonnement beenden (Status = Nicht abonniert) aus Microsoft Dynamics 365 Business Central gesteuert werden. Alle andere Status können nicht direkt aus Microsoft Dynamics 365 Business Central gewählt werden.
</div>

### Kontakte

Bei der Synchronisation von Kontakten werden folgende Informationen synchronisiert:

| Microsoft Dynamics 365 Business Central | Mailchimp | Richtung |
| --- | --- | --- |
| Name | FNAME & LNAME | Bidirektional |
| Vorname | FNAME | Bidirektional |
| E-Mail | email address | Bidirektional |
| Adresse | addr1 | Bidirektional |
| Adresse 2 | addr2 | Bidirektional |
| Ort | city | Bidirektional |
| PLZ Code | zip | Bidirektional |
| Länder-/Regionscode | country | Bidirektional |

#### Wie findet die Synchronisation von Kontakten statt?
Um Dubletten zu verhindern und neue Abonnenten / Kontakte korrekt zuzuordnen wird die Synchronisation auf Basis der E-Mail Adresse durchgeführt. Existiert die registrierte E-Mail Adresse bereits in einem Microsoft Dynamics 365 Business Central Kontakt, so wird der bestehende Kontakt verwendet. Wird kein Kontakt mit der entsprechenden E-Mail Adresse gefunden, so erstellt die Mailchimp Integration App einen neuen Kontakt auf Basis der zur Verfügung stehenden Informationen. Über die Domain der übermittelten E-Mail Adresse (bspw. "@365businessdev.com") wird nach einem Unternehmenskontakt gesucht um den neuen Kontakt korrekt zuzuordnen.

<div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Info</strong>Um zu verhindern, dass Kontakte, bei der Verwendung von öffentlichen E-Mail Providern, wie bspw. Google Mail, versehentlich bzw. falsch zugeordnet werden, findet die beschriebene Unternehmenskontaktsuche, an Hand der Domain bei öffentlichen E-Mail Providern nicht statt.
</div>

<div class="alert alert-warn">
    <i class="fa-duotone fa-solid fa-triangle-exclamation fa-xl"></i>
	<strong>Achtung</strong>
	Wird eine E-Mail Adresse in Mailchimp geändert so ist dies für Microsoft Dynamics 365 Business Central ein neuer Kontakt, da Mailchimp keinerlei Informationen zur "ursprünglichen" E-Mail Adresse ausgibt.
</div>