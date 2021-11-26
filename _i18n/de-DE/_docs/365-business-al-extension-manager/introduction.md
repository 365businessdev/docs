Mit dem 365 business AL Extension Manager können Sie einfach und unkompliziert Erweiterungen und Partner Apps für Microsoft Dynamics 365 Business Central installieren, aktualisieren und deinstallieren. All dies in einer intuitiven Benutzeroberfläche.

#### Wozu dient der AL Extension Manager?

Mit Einführung der Microsoft Dynamics 365 Business Central Erweiterungen (*.app) und der Umstellung von C/SIDE auf Visual Studio Code hat sich der Prozess zur Implementierung von Anpassungen und Erweiterungen grundlegend verändert.

Diese Veränderung bringt gerade Consultants in On-Premise Umgebungen immer wieder in die Situation, dass Sie mit Hilfe von PowerShell CmdLets Erweiterungen selbst publizieren und installieren müssen.
Gerade auch die Berücksichtigung der Abhängigkeiten zwischen Erweiterungen führt dabei immer wieder zu Problemen, da oftmals die zuständigen Consultants keinen Zugriff auf den zugrundeliegenden AL-Code haben.

Zusätzlich erschwert wird der Prozess durch sogenannte Runtime Packages, die von Drittanbietern herausgegeben werden und keinen Quellcode enthalten, wodurch Abhängigkeitsanalysen oftmals über klassische Werkzeuge (bspw. PowerShell Skripte) zusätzlich erschwert werden.

>**Hinweis**<br>Runtime Packages sind vorkompilierte AL-Erweiterungen, die auf einer spezifischen Plattform Version kompiliert wurden und ggf. auch nicht auf abweichenden Versionen lauffähig sind.
Runtime Packages können, entgegen klassischer AL-Erweiterungen, nicht einfach entpackt und analysiert werden.

Aus diesem Grund ist der 365 business AL Extension Manager entwickelt wurden. Mit dem AL- Extension Manager soll es ermöglicht werden AL-Erweiterungen, egal ob klassische Erweiterungen oder Runtime Packages, über eine benutzerfreundliche und intuitive Oberfläche installieren und deinstallieren zu können. Die Unterscheidung nach Publish, Unpublish, Install, Uninstall, Sync, etc. ist dabei nicht notwendig und wird vom AL-Installer übernommen.

#### Welche Funktionen unterstützt der AL Extension Manager?

Der 365 business AL Extension Manager verfügt über folgende Funktionen:
 - Analyse von Runtime Packages und klassischen AL-Erweiterungen
 - Berücksichtigung von Abhängigkeiten bei der Installation & Deinstallation
 - Installation & Deinstallation, inkl. aller notwendigen Verarbeitungsschritte
 - Analyse von möglichen Problemen und Fehlern bei der Installation
 - `365 business App Automation API` Erweiterung für erweiterte Verwaltungsmöglichkeiten
 - Visualisierung von Abhängigkeiten zwischen Erweiterungen
