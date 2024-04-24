**AL.build für Azure DevOps** ist eine flexible Erweiterung für Azure Pipelines, um Ihre Continuous Integration (CI) und Continuous Delivery (CD) Prozesse bei der Entwicklung von AL Erweiterungen für Microsoft Dynamics 365 Business Central zu automatisieren und standardisierte und erprobte Prozesse zu implementieren.

**AL.build für Azure DevOps** ist bei zahlreichen Microsoft Partnern und Endkunden, mit eigener Entwicklungsabteilung für Microsoft Dynamics 365 Business Central, im Einsatz und unterstützt sowohl Azure DevOps Services als auch Azure DevOps Server (On-Premise). Neben Vorlagen für YAML Pipelines stehen die leistungsstarken und flexiblen `AL.build` Tasks zur Verfügung, mit Hilfe derer Sie auch individuelle Pipelines in kürzester Zeit und ohne tiefgehendes Wissen über YAML, Pipelines, PowerShell, Docker und mehr implementieren können.

![AL.build icon](/assets/images/al-build/al-build-logo.png)

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Hinweis:</strong> AL.build für Azure DevOps ist aktuell nur für ausgewählte Partner und Endkunden verfügbar.<br>
    Die allgemeine Verfügbarkeit wird für <b>Juli 2024</b> erwartet.<br>
    <br>
    Sie möchten bereits vorab Zugriff erhalten? Dann kontaktieren Sie uns gerne.
</div>

## Was ist AL.build für Azure DevOps?

AL.build für Azure DevOps ist eine Azure DevOps Erweiterung, verfügbar über den Extension Marketplace, zur Erweiterung von CI/CD und Release Pipeline Aufgaben.
Zusätzlich stehen Vorlagen für die Implementierung von CI/CD Prozessen bei der Entwicklung von Microsoft Dynamics 365 Business Central AL Anwendungen zur Verfügung und bewährte Prozesse für Endkunden und Microsoft Partner werden angeboten.

## CI/CD

CI/CD steht für Continuous Integration/Continuous Delivery.

Continuous Integration bezieht sich auf den Prozess, bei dem Entwickler regelmäßig ihren Code in ein gemeinsames Repository integrieren. Dabei werden automatische Tests durchgeführt, um sicherzustellen, dass der Code fehlerfrei ist. 

Continuous Delivery hingegen bezieht sich auf den Prozess, bei dem der Code automatisch in eine Produktionsumgebung bereitgestellt wird, sobald er erfolgreich integriert und getestet wurde. Dies ermöglicht eine schnellere und zuverlässigere Bereitstellung von Software.
Der Continuous Delivery Prozess, im Kontext von AL Anwendungen für Microsoft Dynamics 365 Business Central, ist dabei in der Regel in zwei Teile, die Erstellung der Artefakte für die Veröffentlichung und den tatsächlichen Release, in einer Produktionsumgebung (z.B. Microsoft Dynamics 365 Busienss Central Online Environment), im Microsoft AppSource oder einem Feed (z.B. NuGet) für die Artefakte, aufgeteilt.

## Pipeline

Pipelines in Azure DevOps sind ein zentrales Konzept für die Automatisierung von CI/CD und Release Prozessen. Es gibt zwei Arten von Pipelines: Build Pipelines und Release Pipelines.

Build Pipelines sind verantwortlich für das Erstellen und Kompilieren des Quellcodes sowie das Erzeugen von Artefakten. Sie definieren den Prozess, wie der Code gebaut und getestet wird. Build Pipelines können verschiedene Schritte enthalten, wie das Herunterladen von Abhängigkeiten, das Kompilieren des Codes, das Ausführen von Tests und das Erzeugen von Artefakten wie ausführbaren Dateien oder Paketen.

Release Pipelines hingegen sind für die Bereitstellung der erstellten Artefakte in verschiedenen Umgebungen verantwortlich. Sie definieren den Prozess, wie die Anwendung in verschiedenen Umgebungen bereitgestellt wird, z.B. Entwicklung, Test, Staging und Produktion. Release Pipelines können verschiedene Schritte enthalten, wie das Bereitstellen der Artefakte auf Servern, das Konfigurieren von Umgebungsvariablen und das Ausführen von Skripten zur Datenbankmigration.

Beide Pipelines können in Azure DevOps konfiguriert und verwaltet werden. Sie können Schritte hinzufügen, entfernen oder ändern, um den spezifischen Anforderungen Ihres Projekts gerecht zu werden. Pipelines können auch Trigger haben, die automatisch ausgelöst werden, z.B. bei jedem Commit in das Repository oder zu bestimmten Zeitpunkten.

Die Verwendung von Pipelines ermöglicht eine effiziente und wiederholbare Automatisierung von CI/CD und Release Prozessen. Sie helfen dabei, den Entwicklungs- und Bereitstellungsprozess zu optimieren, Fehler zu reduzieren und die Qualität der Anwendung sicherzustellen.

### Pipeline Definition

Pipelines werden in Azure DevOps in [YAML](https://de.wikipedia.org/wiki/YAML) beschrieben und basieren auf _Tasks_ die innerhalb der Pipeline Verarbeitung ausgeführt werden.

Bei der Tasks kann es sich um einfache Batch oder PowerShell Befehle handeln, es stehen aber noch weit mehr Tasks für die Ausführung von Aufgaben zur Verfügung.

Automatisierungen im Rahmen der AL Anwendungsentwicklung werden in aller Regel über das [BCContainerHelper PowerShell Modul](https://github.com/microsoft/navcontainerhelper) ausgeführt und erfordern somit die Verwendung des `PowerShell` Tasks zur Ausführung.
**AL.build für Azure DevOps** bietet vordefinierte Pipeline Tasks, die die Ausführung von komplexen Aufgaben, im Rahmen der Entwicklung von AL Anwendungen, definieren und damit die Defintion von Pipelines und den entsprechenden Aufgaben vereinfachen.

<div class="alert alert-notice">
    <i class="fa-solid fa-notes"></i> <strong>Gut zu wissen:</strong>Pipeline Tasks werden nach Build- und Release-Tasks unterschieden. <b>AL.build</b> stellt dabei sowohl für den Release, als auch für den Build Prozess entsprechende Tasks zur Verfügung.<br>
    <br>
    Erfahren Sie mehr über die <a href="../build-tasks/">Build Tasks</a> und <a href="../release-tasks/">Release Tasks</a> aus der <b>AL.build</b> Erweiterung.
</div>

## Release

Ein Release in Azure DevOps ist ein Prozess, bei dem eine bestimmte Version einer AL Anwendung für die Bereitstellung freigegeben wird. Es ist ein wichtiger Schritt im Softwareentwicklungslebenszyklus, der es ermöglicht, Änderungen oder neue Funktionen an die Benutzer oder Kunden zu übergeben.

In Azure DevOps besteht ein Release aus einer Sammlung von Artefakten, die aus dem Build-Prozess generiert wurden. Diese Artefakte sind im Kontext der AL Anwendungsentwicklung in aller Regel app-Dateien (*.app) oder NuGet-Pakete (*.nupkg), die für die Installation und Ausführung der Anwendung erforderlich sind.

Ein Release in Azure DevOps ermöglicht es Entwicklern und Teams, ihre Anwendungen effizient und kontrolliert zu veröffentlichen, indem sie den Prozess automatisieren und wiederholbar machen. Dadurch wird sichergestellt, dass die Anwendung in einer stabilen und zuverlässigen Weise bereitgestellt wird.

## Voraussetzungen

 - Azure DevOps Services oder Azure DevOps Server