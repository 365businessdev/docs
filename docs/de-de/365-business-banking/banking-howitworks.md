# Bankanbindung mit 365 business Banking

Mit 365 business Banking können Sie Ihre Bankprozesse effizienter gestalten und die Integration mit Microsoft Dynamics 365 Business Central optimieren. Diese Erweiterung ermöglicht es Ihnen, Bankkonten direkt zu verbinden, Banktransaktionen automatisiert abzurufen und Zahlungen effizient zu verwalten.

Die Bankanbindung erfolgt über die [finAPI GmbH](https://www.finapi.io/), die eine sichere und zuverlässige Schnittstelle zu verschiedenen Banken in Deutschland bereitstellt. Dadurch können Sie Ihre Finanzdaten in Echtzeit abrufen und Zahlungen direkt aus Microsoft Dynamics 365 Business Central heraus initiieren.

Dabei unterscheidet 365 business Banking zwischen Kontoinformation (AIS) und Zahlungsauslösung (PIS).

## Kontoinformation (AIS)

Die Kontoinformation (Account Information Service, AIS) ermöglicht es Ihnen, Banktransaktionen in Echtzeit abzurufen und Ihre Kontostände zu überwachen. finAPI bietet zuverlässigen Zugriff auf Bankkonten über die PSD2-konforme XS2A-Schnittstelle, dem europäischen Standard für Open Banking. Darüber lassen sich Zahlungskonten wie Girokonten sicher und stabil anbinden.

Darüber hinaus unterstützt finAPI das deutsche FinTS-Protokoll (früher HBCI). FinTS ermöglicht den Zugriff auf zahlreiche zusätzliche Konten, die über die XS2A-Schnittstelle meist nicht erreichbar sind. Dazu zählen zum Beispiel Sparkonten, Bausparkonten, Kreditkartenkonten und Wertpapierdepots. Sind weder die XS2A-Schnittstelle noch FinTS verfügbar, nutzt finAPI Web Scraping als Fallback-Methode, um auch in diesen Fällen einen umfassenden Datenzugriff zu ermöglichen.

Je nach Bank, Land und verfügbarer Schnittstelle können folgende Konten und Datenquellen angebunden werden. 

<ul>
<i aria-hidden="true" class="fas fa-check"></i> Bankkonten (Giro-, Spar- und Geschäftskonten)<br>
<i aria-hidden="true" class="fas fa-check"></i> Depots<br>
<i aria-hidden="true" class="fas fa-check"></i> Kreditkonten<br>
<i aria-hidden="true" class="fas fa-check"></i> Kreditkarten<br>
<i aria-hidden="true" class="fas fa-check"></i> Bausparkonten<br>
<i aria-hidden="true" class="fas fa-check"></i> Genossenschaftsanteile (z. B. bei Volks- und Raiffeisenbanken)
</ul>

## Zahlungsauslösung (PIS)

Die Zahlungsauslösung (Payment Initiation Service, PIS) ermöglicht es Ihnen, Zahlungen direkt aus Microsoft Dynamics 365 Business Central heraus zu initiieren. finAPI stellt sicher, dass diese Zahlungen sicher und zuverlässig verarbeitet werden, indem es die PSD2-konforme XS2A-Schnittstelle nutzt. Je nach Land und angebundener Bank unterstützt finAPI verschiedene Konto-zu-Konto-Zahlungen (Account-to-Account). Dabei können Zahlungen nicht nur in Euro, sondern auch in anderen Landeswährungen wie Rumänischen Leu, Tschechischen Kronen oder Britischen Pfund ausgelöst werden. Unterstützt werden sowohl SEPA-Zahlungen innerhalb des Europäischen Zahlungsraums als auch Zahlungen in oder aus dem Vereinigten Königreich.

Die unterstützten Zahlungsarten umfassen:

<ul>
<i aria-hidden="true" class="fas fa-check"></i> Überweisungen<br>
<i aria-hidden="true" class="fas fa-check"></i> Echtzeitüberweisungen<br>
<i aria-hidden="true" class="fas fa-check"></i> Terminüberweisungen<br>
<i aria-hidden="true" class="fas fa-check"></i> Daueraufträge<br>
<i aria-hidden="true" class="fas fa-check"></i> Sammelüberweisungen<br>
<i aria-hidden="true" class="fas fa-check"></i> Lastschriften<br>
<i aria-hidden="true" class="fas fa-check"></i> Sammellastschriften
</ul>

## Ressourcen

Im Rahmen der Kommunikation von Microsoft Dynamics 365 Business Central mit finAPI wird die 365 business API zur Authentifizierung verwendet. Hierbei werden keinerlei Daten zwischengespeichert oder verarbeitet.
Dabei werden die folgenden DNS-Namen, Ports und Protokolle verwendet:

| DNS-Name | Port | Protokoll | Beschreibung |
| --- | --- | --- | --- |
| `api.365businessapi.com` | `443` | `HTTPS` | API-Endpunkt, für den Zugriff auf die 365 business API. |
| `license.365businessapi.com` | `443` | `HTTPS` | API-Endpunkt, zur Lizenzüberprüfung und -verwaltung. |
