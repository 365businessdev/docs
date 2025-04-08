---
title: Erste Schritte
---

Mit 365 business PDF erweitern Sie Microsoft Dynamics 365 Business Central um Funktionalitäten, mit denen Sie Berichte und Belege, die aus Microsoft Dynamics 365 Business Central erstellt werden, veredeln und erweitern können. Beispielsweise können Sie Ihre allgemeinen Geschäftsbedingungen automatisch an Verkaufsangebote anfügen.

All das ohne individuelle Anpassungen und einfach und unkompliziert über die Oberfläche von Microsoft Dynamics 365 Business Central konfigurierbar.

#### Wie konfiguriere ich Belege und Berichte?

Für jede unterstützte Aktion, wie Signierung, Verkettung und Briefpapier, gibt es jeweils eine eigene Konfiguration. Jeder Konfiguration wird ein eindeutiger Code zugewiesen, welcher in der Konfiguration der Belege und Berichte referenziert werden kann.

| Aktion | Konfiguration | Beschreibung |
| --- | --- | --- |
| Signierung | [PDF Signierung Konfigurationen](signing.md) | Signiert PDF-Dateien, auf Basis eines Zertifikats um dieses manipulationssicher zu machen. |
| Verkettung | [PDF Dokumentverkettung Konfigurationen](concatenate.md) | Verkettet ein oder mehrere PDF-Dateien mit dem erstellten Beleg oder Bericht aus Microsoft Dynamics 365 Business Central. |
| Briefpapier | [PDF Briefpapier Konfigurationen](stationery.md) | Hinterlegt ein digitales Briefpapier hinter dem erstellten Beleg oder Bericht aus Microsoft Dynamics 365 Business Central. |

##### Wie weise ich meine Konfigurationen den Belegen und Berichten zu?

1. Öffnen Sie die Berichtsauswahl für den gewünschten Bereich (z.B. Einkauf, Verkauf, Service, Projekte, Mahnung/Zinsrechnung).
2. Klicken Sie auf **Konfiguration**
   ![Berichtsauswahl - Konfiguration Aktion](/assets/images/365-business-pdf/report-selections.png)
3. Wählen Sie den Konfiguration Code für die gewünschten Aktionen (Signierung, Verkettung, Briefpapier) aus.
   ![Berichtsauswahl Konfiguration](/assets/images/365-business-pdf/report-selection-configuration.png)  

#### Was benötige ich um 365 business PDF zu nutzen?

365 business PDF basiert auf dem PDF-Dienst der [365 business API](../365-business-api/index.md). Zur Verwendung wird eine Registrierung bei der 365 business API benötigt. Um 365 business PDF und andere auf der 365 business API basierende Dienste zu testen können Sie sich kostenlos und unverbindlich für eine 30-tägige Testphase registrieren.
Es entstehen Ihnen keinerlei Kosten und die Testphase endet automatisch.

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>So wird's gemacht:</strong> Erfahren Sie mehr über die Registrierung für die 365 business API und starten Sie Ihre kostenlose und unverbindliche Testphase.
</div>

##### Welche Kosten entstehen bei der Nutzung?

Die 365 business API Dienste werden, nach Ablauf der kostenlosen und unverbindlichen Testphase, nutzungsbasiert abgerechnet. Die Nutzung wird dabei in sogenannten *Transaktionen* gemessen, wobei eine *Transaktion* eine erfolgreiche Nutzung des API-Dienst entspricht.
Wenn Sie bspw. bei 1.000 Dokumenten das Briefpapier anwenden lassen, liegen die Kosten bei 100,- Euro (Stand: Mai 2022)

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Hinweis:</strong> Die aktuellen Preise können Sie unserer <a href="https://365businessdev.com/cloud/preise/pdf/">Website</a> entnehmen.
</div>