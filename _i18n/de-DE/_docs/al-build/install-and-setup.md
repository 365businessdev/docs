In dieser Kurzanleitung wird erklärt, wie Sie AL.build für Azure DevOps installieren.

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Hinweis:</strong> Diese Anleitung bezieht sich auf die Installation in Azure DevOps Services. Die Installation in Azure DevOps Server ist leicht abweichend hiervon, da die zugehörigen Erweiterungsdateien heruntergeladen werden müssen.
</div>

## Schritt 1: Installation von AL.build für Azure DevOps

Um die AL.build für Azure DevOps Erweiterung für Azure DevOps aus dem Marketplace zu installieren, können Sie die folgenden Schritte befolgen:

1. Öffnen Sie Azure DevOps und navigieren Sie zu Ihrer Organisation.
2. Klicken Sie auf das Zahnradsymbol in der oberen rechten Ecke, um die Einstellungen zu öffnen.
3. Wählen Sie im linken Menü den Punkt **Erweiterungen** aus.
4. Klicken Sie auf **Durchsuchen** und suchen Sie nach der gewünschten Erweiterung im Marketplace.
5. Suchen Sie nach **AL.build** und klicken Sie auf **Installieren**.
6. Überprüfen Sie die Berechtigungen, die die Erweiterung benötigt, und klicken Sie auf **Akzeptieren**, um fortzufahren.
7. Wählen Sie die gewünschte Organisation aus und klicken Sie auf **Installieren**, um die Erweiterung zu installieren.
8. Nach der Installation können Sie die Erweiterung in Azure DevOps verwenden, indem Sie zu den entsprechenden Bereichen (zum Beispiel "Pipelines") navigieren und die Funktionen der Erweiterung nutzen.

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Hinweis:</strong> AL.build für Azure DevOps ist aktuell nur für ausgewählte Partner und Endkunden verfügbar.<br>
    Die allgemeine Verfügbarkeit wird für <b>Juli 2024</b> erwartet.<br>
    <br>
    Sie möchten bereits vorab Zugriff erhalten? Dann kontaktieren Sie uns gerne.
</div>

## Schritt 2: Pipeline Tasks verwenden

Nach der Installation von AL.build finden sie im Pipeline Editor in Azure DevOps die `AL.build`-Task, die für die jeweilige Pipeline zur Verfügung stehen:

![AL.build Tasks im Pipeline Editor](/assets/images/al-build/yaml-editor-tasks.png)

## Schritt 2.1: Pipeline Vorlagen verwenden

Im [AL.build GitHub Repository](https://github.com/365businessdev/al.build-templates) stellen wir Vorlagen für die Bereitstellung von Pipelines zur Verfügung.

Folgen Sie der Anleitung [AL.build GitHub Repository](https://github.com/365businessdev/al.build-templates), um die Vorlagen zu verwenden.