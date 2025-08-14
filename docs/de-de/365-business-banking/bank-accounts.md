# Bankkonten

365 business Banking ermöglicht es Ihnen, Ihre Bankkonten einfach und sicher zu verwalten. Sie können Bankkonten hinzufügen, bearbeiten und löschen sowie Transaktionen abrufen und Zahlungen initiieren. Dabei werden verschiedene Kontoarten, je nach angebundener Bank (siehe [Banken](supported-banks.md)), unterstützt.

Unter anderem können Sie folgende Kontoarten verwalten:

<ul>
<i aria-hidden="true" class="fas fa-check"></i> Bankkonten (Giro-, Spar- und Geschäftskonten)<br>
<i aria-hidden="true" class="fas fa-check"></i> Depots<br>
<i aria-hidden="true" class="fas fa-check"></i> Kreditkonten<br>
<i aria-hidden="true" class="fas fa-check"></i> Kreditkarten<br>
<i aria-hidden="true" class="fas fa-check"></i> Bausparkonten<br>
<i aria-hidden="true" class="fas fa-check"></i> Genossenschaftsanteile (z. B. bei Volks- und Raiffeisenbanken)
</ul>

## Bankkonto

Bankkonten sind die Grundlage für die Verwaltung Ihrer Banktransaktionen. Sie können Bankkonten in Microsoft Dynamics 365 Business Central hinzufügen und verwalten, um Zahlungen zu initiieren und Banktransaktionen abzurufen. 

![Bankkonto](/assets/images/365-business-banking/bank-account.en-US.png)

## Autorisierung und Sicherheit

Die Verbindung zu Ihren Bankkonten erfolgt über die [finAPI GmbH](https://www.finapi.io/), die eine sichere und zuverlässige Schnittstelle zu verschiedenen Banken in Deutschland und Europa bereitstellt. Die Authentifizierung erfolgt über die 365 business API, die sicherstellt, dass Ihre Daten geschützt sind und keine sensiblen Informationen zwischengespeichert oder verarbeitet werden.

Der Zugriff auf Ihre Bankkonten erfolgt über einen Banking Benutzer, den Sie in Microsoft Dynamics 365 Business Central anlegen. Dieser Benutzer ist für die Verbindung zu Ihren Bankkonten verantwortlich und ermöglicht es Ihnen, Transaktionen abzurufen und Zahlungen zu initiieren. 
Der Benutzer ist dabei ausschließlich in Ihrem Microsoft Dynamics 365 Business Central gespeichert und es werden keine Daten oder Zugänge gespeichert oder an Drittanbieter weitergegeben.

Weitere Informationen finden Sie in der [Banking Benutzer Einrichtung](banking-user-setup.md).

## Siehe auch

- [Bankanbindung mit 365 business Banking](banking-howitworks.md)
- [Banken](supported-banks.md)
- [Banking Benutzer Einrichtung](banking-user-setup.md)