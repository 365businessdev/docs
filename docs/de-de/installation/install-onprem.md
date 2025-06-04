# Installation in Dynamics 365 Business Central On-Premise

Für Microsoft Dynamics 365 Business Central On-Premise Umgebungen werden sogenannte Runtime Packages zur Verfügung gestellt. Hierbei handelt es sich um vorkompilierte Erweiterungen, die Sie direkt in Ihrer Microsoft Dynamics 365 Business Central Umgebung installieren können.

<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Gut zu wissen</strong>Es ist wichtig die korrekte Version, für die bei Ihnen eingesetzte Plattform Version von Microsoft Dynamics 365 Business Central, zu verwenden. Runtime Packages sind nur für die Version für die Sie kompiliert wurden kompatibel.<br>Der Einsatz in einer anderen Version kann zu Fehlern führen.
</div>

## Voraussetzungen

Da alle 365 business development Apps als ISV-Module im ISV-Objektbereich bereitgestellt werden, ist eine Erweiterung der Microsoft Dynamics 365 Business Central-Lizenz erforderlich, um Zugriff auf den ISV-Objektbereich und die entsprechende App-Funktionalität zu erhalten.

<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Gut zu wissen</strong> Die Erweiterung der Microsoft Dynamics 365 Business Central-Kundenlizenz mit der 365 business development App-Lizenz ist nur für Microsoft Dynamics 365 Business Central On-Premise-Umgebungen notwendig und erfordert nicht, dass der Kunde die 365 business development App-Lizenz tatsächlich kauft.<br>
    <br>
    Die 365 business development App-Lizenz wird allen Microsoft Dynamics 365 Business Central-Kunden kostenlos zur Verfügung gestellt, solange eine gültige Microsoft Dynamics 365 Business Central-Kundenlizenz besteht.
</div>

Um 365 business development Apps in Microsoft Dynamics 365 Business Central On-Premise-Umgebungen auszuführen, muss die Microsoft Dynamics 365 Business Central-Kundenlizenz (`*.bclicense`) mit der entsprechenden 365 business development App-Lizenz erweitert werden. In der Regel wird dies von Ihrem Microsoft Dynamics 365 Business Central-Partner über das Microsoft Partner Source Business Center (PSBC) durchgeführt.

<div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Info</strong> Um Zugriff auf die 365 business development App-Lizenz zu erhalten, muss der Microsoft Dynamics 365 Business Central-Partner die 365 business development Partnervereinbarung unterzeichnet haben.<br>
    <br>
    Wenn Sie Microsoft Dynamics 365 Business Central-Partner sind und die 365 business development Partnervereinbarung noch nicht unterzeichnet haben, kontaktieren Sie uns bitte unter <a href="mailto:info@365businessdev.com">info@365businessdev.com</a>, um die Vereinbarung zu erhalten. Nach der Unterzeichnung erhalten Sie als autorisierter Reseller Zugriff auf die 365 business development App-Lizenz und können die Lizenzen Ihrer Kunden entsprechend erweitern.
</div>

### ISV-Modul

Alle 365 business development Apps werden als ISV-Module bereitgestellt. Die folgende Tabelle listet den ISV-Anbieter, die Modul-ID, die ID und den Namen der 365 business development Apps auf, die Sie zur Erweiterung der Microsoft Dynamics 365 Business Central-Kundenlizenz (`*.bclicense`) verwenden können:

| ISV-Anbieter | Modul-ID | ID | Name |
| --- | --- | --- | --- |
| 7058648 | 78954 | 5523650 | 365 business development Apps |

<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Gut zu wissen</strong> Seit Anfang 2025 werden die 365 business development Apps nicht mehr in einzelne ISV-Module für die Lizenzierung aufgeteilt. Stattdessen werden alle 365 business development Apps nun als ein einziges ISV-Modul mit der ID <code>5523650</code> bereitgestellt. Dies vereinfacht den Lizenzierungsprozess und ermöglicht die Nutzung aller 365 business development Apps, ohne diese einzeln lizenzieren zu müssen.
</div>

## Installation

Die Installation von Erweiterungen in Microsoft Dynamics 365 Business Central On-Premise Umgebungen findet über die Windows PowerShell statt. Um die Installation zu vereinfachen und das Fehlerpotential zu verringern stellen wir ein PowerShell Script, den **365 business development App Installer**, zur Verfügung, welches Sie zur Installation unserer Erweiterungen für Microsoft Dynamics 365 Business Central verwenden können.

## Download

Den **365 business development App Installer** stellen wir auf unserer GitHub Seite zur Verfügung. Dort finden Sie den Quellcode des PowerShell Skripts und können es von hier herunterladen. Der 365 business development App Installer ist unter der MIT-Lizenz lizenziert. Das bedeutet, dass Sie das Skript für Ihre eigenen Zwecke verwenden können, solange Sie die Lizenzbedingungen einhalten.

<span style="padding-left: 10px;"><a href="https://365businessdev.github.io/downloads/assets/Install-Apps.ps1" target="_blank">365 business development App Installer</a></span>

## Verwendung

In diesem Abschnitt erfahren Sie, wie Sie den **365 business development App Installer** verwenden können, um unsere Erweiterungen in Microsoft Dynamics 365 Business Central On-Premise Umgebungen zu installieren.

<div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Hinweis</strong>
	Bitte beachten Sie, dass der 365 business development App Installer in einer PowerShell Sitzung mit erhöhten Rechten (Administrator) ausgeführt werden muss.<br>
    <br>
    Die Ausführung muss auf dem Microsoft Dynamics 365 Business Central Server erfolgen, da die Microsoft Dynamics 365 Business Central PowerShell Module für die Installation benötigt werden.
</div>

 1. Laden Sie den <a href="https://365businessdev.github.io/downloads/assets/Install-Apps.ps1" target="_blank">365 business development App Installer</a> herunter.
 2. Starten Sie **Microsoft PowerShell** oder **Microsoft Dynamics 365 Administration Shell** als Administrator.
 3. Navigieren Sie zu dem Ort des Downloads (z.B. `C:\Run`).
 4. Führen Sie das `Install-Apps.ps1` PowerShell Skript aus.
	```ps1
	PS C:\Run> .\Install-Apps.ps1 -appIds @(
        "fcfc9bac-8f9b-402f-9e64-30a8287bc78f", # Extension License Manager
        "6fb30c19-f5d6-4e4c-b006-18fba4de1898"  # 365 business Print Agent
    )
	```
 5. Wählen Sie die Microsoft Dynamics 365 Business Central-Dienstinstanz aus (_nur wenn mehr als eine Instanz installiert ist_).

<div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Hinweis</strong> Sie finden die Application ID, sowie den vollständigen Aufruf des 365 business development App Installer auf der jeweiligen Downloadseite des Produkts.<br>
    <br>
    Zu den <a href="https://downloads.365businessdev.com/" target="_blank">365 business development Downloads</a>.
</div>

### Mögliche Probleme

#### PowerShell Ausführungsrichtlinie

Je nach Ihrer Einrichtung müssen Sie möglicherweise die Ausführung des PowerShell-Skripts `Install-Apps.ps1` zulassen. Verwenden Sie `Set-ExecutionPolicy` CmdLet, um die Ausführung zu erlauben. Für weitere Informationen besuchen Sie die [Dokumentation](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.security/set-executionpolicy).

```ps1
PS C:\Run> Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Force
```

## Funktionsweise

Der **365 business development App Installer** führt grundsätzlich folgende Schritte aus:

1. Identifizierung der, auf dem aktuellen Computer, installierten Microsoft Dynamics 365 Business Central Service Instanzen.
2. Auswahl der Microsoft Dynamics 365 Business Central Service Instanz für die Installation (_Nur wenn mehr als eine Instanz gefunden wurde_).
3. Identifizierung der Plattform Version.
4. Download der korrekten Version der zu installierenden Erweiterungen / Apps.
5. Installation der Erweiterungen / Apps.
6. Schemasynchronisation der Erweiterungen / Apps.
7. Update der Erweiterungen / Apps (_Falls bereits eine frühere Version installiert war_).
8. Deinstallation der alten Version der Erweiterung / Apps (_Falls bereits eine frühere Version installiert war_).

### Beispiel

```console
365 business development App Installer

Checking Prerequisites . . .
Microsoft Dynamics 365 Business Central administration shell is already loaded.

Server Instance BC220 found.

Getting Service Information from BC220


ServerInstance : MicrosoftDynamicsNavServer$BC220
DisplayName    : Dynamics 365 Business Central Server [BC220]
State          : Running
ServiceAccount : NT AUTHORITY\SYSTEM
Version        : 22.0.54512.0
Default        : True


Microsoft Dynamics 365 Business Central version: 22.0.54157.54635

Downloading apps for corresponding service version 22.0.54157.54635 . . .
Invoke download for app id fcfc9bac-8f9b-402f-9e64-30a8287bc78f
Url: https://365businessapi.com/api/SoftwareDownload?AppId=fcfc9bac-8f9b-402f-9e64-30a8287bc78f&version=22.0.54157.54635

Invoke download for app id 6fb30c19-f5d6-4e4c-b006-18fba4de1898
Url: https://365businessapi.com/api/SoftwareDownload?AppId=6fb30c19-f5d6-4e4c-b006-18fba4de1898&version=22.0.54157.54635

Apps to install:
	- C:\Users\Administrator\AppData\Local\Temp\tmp709B.tmp.app
	- C:\Users\Administrator\AppData\Local\Temp\tmp73A9.tmp.app

Running installation for app file C:\Users\Administrator\AppData\Local\Temp\tmp709B.tmp.app . . .
Publishing Extension License Manager on Server Instance BC220
	Version: 1.2.24.8827
Sync schema for Extension License Manager on Server Instance BC220
Install Extension License Manager on Server Instance BC220
Successfully installed Extension License Manager on BC220.

Running installation for app file C:\Users\Administrator\AppData\Local\Temp\tmp73A9.tmp.app . . .
Publishing 365 business Print Agent on Server Instance BC220
	Version: 18.3.125.9182
Sync schema for 365 business Print Agent on Server Instance BC220
Install 365 business Print Agent on Server Instance BC220
Successfully installed 365 business Print Agent on BC220.


Process finished.
```