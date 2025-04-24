# Adressvorhersage

Bei der Adressvorhersage handelt es sich um eine, in Microsoft Dynamics 365 Business Central, implementierte *Auto-Complete* Funktionalität, die den Anwender dabei unterstützen soll Postadressen und Organisations- und Unternehmensinformationen fehlerfrei zu erfassen.

![Adressvorhersage](/assets/images/365-business-address-validation/addressprediction.de-DE.gif)

## In welchen Tabellen steht die Adressvorhersage zur Verfügung?

Die Adressvorhersage ist in den Stammdatentabellen Kontakt, Debitor, Kreditor, Ressource und Mitarbeiter implementiert. Dabei sind folgende Felder für die Adressvorhersage implementiert:

| Tabelle | Feld | Vorhersage | Hinweis |
| --- | --- | --- | --- | 
| Kontakt | Name | Organisationen und Unternehmen, sowie deren Postadresse und weiterer Informationen. | *Nur für Kontakte der **Art** Unternehmen aktiviert.* |
| Kontakt | Adresse | Postadressen. | |
| Debitor | Name | Organisationen und Unternehmen, sowie deren Postadresse und weiterer Informationen. |  |
| Debitor | Adresse | Postadressen. | |
| Kreditor | Name | Organisationen und Unternehmen, sowie deren Postadresse und weiterer Informationen. |  |
| Kreditor | Adresse | Postadressen. | |
| Ressource | Adresse | Postadressen. | |
| Mitarbeiter | Adresse | Postadressen. | |

## Welche zusätzlichen Informationen werden bei Organisationen und Unternehmen ermittelt?

Die zusätzlichen Informationen sind abhängig von den tatsächlich zur Verfügung stehenden Daten in unseren Datenquellen. Üblicherweise werden allerdings, neben der Postadresse und dem Firmennamen, folgende Informationen ermittelt:
 
 - Homepage
 - Telefonnr.

## Warum werden nur maximal vier Ergebnisse angezeigt?

In der [Einrichtung für Adressvalidierung](setup.md) kann die **Max. Anzahl der Vorhersagen** konfiguriert werden. Der Standardwert liegt bei vier, kann aber beliebig angepasst werden.

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i>
    <strong>Hinweis</strong> Über die Aktion <i>Mehr laden...</i> können alle weiteren Vorhersagen angezeigt werden.
</div>

# Siehe auch 
 - [Einrichtung für Adressvalidierung](setup.md)
 - [Adressvalidierung](address-validation.md)