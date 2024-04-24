Build-Tasks in Azure DevOps Pipelines sind vordefinierte Schritte oder Aktionen, die in einem Build-Prozess ausgeführt werden. Sie werden verwendet, um den Build-Prozess zu automatisieren und verschiedene Aufgaben wie das Kompilieren von Code, das Erstellen von Artefakten, das Ausführen von Tests und das Bereitstellen von Anwendungen durchzuführen.

Build-Tasks sind in der Regel in einer YAML-Datei definiert, die den Build-Prozess beschreibt. Jeder Task führt eine spezifische Aufgabe aus und kann Parameter enthalten, um das Verhalten des Tasks anzupassen. 

Die Verwendung von Build-Tasks ermöglicht es Entwicklern, den Build-Prozess zu standardisieren und zu automatisieren. Sie können verschiedene Tasks kombinieren, um komplexe Build-Pipelines zu erstellen, die den Anforderungen ihres Projekts entsprechen. Darüber hinaus bieten Azure DevOps und die AL.build Erweiterung eine Vielzahl von vordefinierten Tasks, die häufig verwendet werden.

Durch die Verwendung von Build-Tasks in Azure DevOps Pipelines können Entwickler Zeit sparen, die Konsistenz des Build-Prozesses verbessern und sicherstellen, dass der Code zuverlässig und effizient erstellt wird.

## AL.build - Build Tasks

AL.build für Azure DevOps stellt zahlreiche standardisierte Tasks zur Verfügung, die im Rahmen von Pipelines für die Entwicklung von AL-Erweiterungen verwendet werden können.
Im folgenden werden die vorhandenen Build Tasks der AL.build Erweiterung beschrieben.

### AL.build: Install BcContainerHelper

Installiert oder aktualisiert das BCContainerHelper PowerShell module auf dem Agent, der die Pipeline aktuell ausführt.

#### Parameter

| Parameter | Beschreibung | Standardwert |
| --- | --- | --- |
| `bcContainerHelperVersion` | Gibt die zu installierende Version des BCContainerHelper Modul an. | `latest` |

#### Example

```yaml
- task: InstallBcContainerHelper@0
  displayName: 'Install BC Container Helper'
```

### AL.build: Set AL application version

Legt die Version innerhalb des Anwendungsmanifest (`app.json`) der AL Anwendung fest.

#### Parameter

| Parameter | Beschreibung | Standardwert |
| --- | --- | --- |
| `versionNo` (Optional) | Gibt die Versionsnr. an, die verwendet werden soll. Ist dieser Parameter angegeben werden alle weiteren Parameter ignoriert. |  |
| `onlyUpdateOnChangedSource` (Optional) | Gibt an, ob die Versionsnr. nur aktualisiert werden soll, wenn tatsächlich Änderungen am Quellcode, seit dem letzten erfolgreichen Pipeline-Lauf, stattgefunden haben.  | `false` |
| `versioningSchema` | Gibt das Schema zur Versionierung an. Dabei kann aus verschiedenen Versionschemata ausgewählt werden. |  |
| `updateBuildNumber` | Gibt an, ob die Build Nummer für den Pipeline-Lauf aktualisiert werden soll. Die Build Nummer wird in der Übersicht der Pipelines angezeigt. | `true` |

##### Versionsschemata

Folgende Versionsschemata sind für den Parameter `versioningSchema` verfügbar:

| Parameter | Beschreibung |
| --- | --- |
| `major.minor.build-id.0`| Major.Minor.Build ID.0 |
| `major.minor.patch.build-id`| Major.Minor.Patch.Build ID |
| `major.minor.no-of-commits.0`| Major.Minor.No of Commits.0 |
| `major.minor.build.no-of-commits`| Major.Minor.Build.No of Commits |
| `major.minor.no-of-commits.build-id`| Major.Minor.No of Commits.Build ID |
| `major.minor.date.0`| Major.Minor.Date.0 |
| `major.minor.build-id.date`| Major.Minor.Build ID.Date |
| `major.no-of-commits.build-id.date`| Major.No of Commits.Build ID.Date |
| `major.minor.no-of-commits.date`| Major.Minor.No of Commits.Date |

#### Example

```yaml
- task: AppVersioning@0
  displayName: 'Set Version Number'
  condition: succeeded()
  inputs:
    onlyUpdateOnChangedSource: true
    versioningSchema: 'major.minor.build-id.0'
  env:
    AZURE_DEVOPS_EXT_PAT: $(System.AccessToken)
```

### AL.build: Create Build Container

Erstellt einen Docker Container mit Microsoft Dynamics 365 Business Central.

#### Parameter

| Parameter | Beschreibung | Standardwert |
| --- | --- | --- |
| `bcType` | Gibt an ob Microsoft Dynamics 365 Business Central als `Sandbox` (BC Online) oder `OnPrem` (On-Premise) erstellt werden soll. | `sandbox` |
| `bcVersion` | Gibt an welche Version von Microsoft Dynamics 365 Business Central verwendet werden soll. Verwenden Sie `latest` für die aktuelle Version. | `latest` |
| `bcCountryVersion` | Gibt die zuverwendende Lokalisation von Microsoft Dynamics 365 Business Central. |  |
| `licenseFileUrl` (Optional) | Gibt die URL zur Lizenzdatei (*.bclicense) an, die verwendet werden soll. |  |
| `includeTestToolkit` (Optional) | Gibt an, ob das Test Toolkit von Microsoft importiert werden soll oder nicht. | `true` |
| `avoidCDNDownload` (Optional) | Gibt an, dass der Download von CDN (Content Delivery Network) Servern verhindert werden soll. |  |

#### Example

```yaml
- task: CreateBuildContainer@0
  displayName: 'Create Build Container'
  condition: succeeded()
  inputs:
    bcType: 'sandbox'
    bcVersion: 'latest'
    bcCountryVersion: 'w1'
```

### AL.build: Compile AL application

Kompiliert die AL Erweiterungen und erstellt die Artefakte.

#### Parameter

| Parameter | Beschreibung | Standardwert |
| --- | --- | --- |
| `appId` (Optional) | Gibt eine App ID die im Repository ist und kompiliert werden soll. Lassen Sie den Parameter leer um alle enthaltenen AL Anwendungen zu kompilieren. | |
| `runtimePackage` (Optional) | Gibt an, ob die App als Runtime Paket kompiliert werden soll. | `false` |
| `createNugetPackage` (Optional) | Gibt an, ob ein NuGet Paket erstellt werden soll. | `false` |
| `updateManifest` (Optional) | Gibt an, ob die Versionsmerkmale im Manifest (`app.json`) aktualisiert werden soll. | `true` |
| `setPreprocessorDirectives` (Optional) | Gibt an, ob Preprocessor Direktiven für die unterstützten Business Central Versionen gesetzt werden sollen (z.B. `BC23`). | `true` |
| `sign` (Optional) | Gibt ob Apps automatisch signiert werden sollen. | `false` |
| `excludeTestApps` (Optional) | Gibt ob Test Apps ausgeschlossen werden sollen. | `false` |

##### Versionsmerkmale im Manifest aktualisieren (`updateManifest` Parameter)

Wenn der Parameter `updateManifest` gesetzt wird, werden die relevanten Versionsmerkmale im Manifest (`app.json`) aktualisiert. Dazu gehören:
 - Plattform Version (`platform`)
 - Application Version (`application`)
 - Runtime Version (`runtime`)

Zusätzlich werden obsolete Notationen (z.B. `showMyCode`) gegen die aktuellen Notationen ersetzt (z.B. `resourceExposurePolicy`).

##### Preprocessor Direktiven für die unterstützten Business Central Versionen setzen (`setPreprocessorDirectives` Parameter)

Wenn der Parameter `setPreprocessorDirectives` gesetzt wird, werden Preprocessor Direktiven dem Manifest (`app.json`) hinzugefügt. Dabei wird die Application Version als "niedrigste" Version (z.B. `17.0.0.0`) verwendet und bis zur tatsächlich genutzten Version (z.B. `24.0.0.0`) werden Preprocessor Direktiven mit dem Präfix `BC` und der Hauptversionsnr. (z.B. `BC22`, `BC23`, `BC24`) hinzugefügt.

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Hinweis:</strong> Mit dieser Funktion können Sie Preprocessor Direktiven nutzen um Abwärtskompatibilität innerhalb Ihres Quellcode zu gewährleisten, ohne mehrere Codestände pflegen zu müssen.
</div>

#### Example

```yaml
- task: Compile@0
  displayName: 'Compile'
  condition: succeeded()
  inputs:
    createNugetPackage: true
```

### AL.build: Sign AL application

Signiert die erstellten Artefakte (`*.app`), aus dem vorherigen `Compile` Task, mit dem Code Signing Zertifikat, welches in der angegeben Azure Key Vault gespeichert ist.
Für das Signieren der Artefakte wird AzureSigningTool verwendet.

#### Example

```yaml
- task: SignApp@0
  displayName: 'Sign'
  condition: succeeded()
  inputs:
    artifactsDirectory: '$(Build.ArtifactStagingDirectory)'
    signingAzureKeyVaultUrl: '$(keyVaultUrl)'
    signingAzureKeyVaultTenantId: '$(tenantId)'
    signingAzureKeyVaultClientId: '$(certificateClientId)'
    signingAzureKeyVaultClientSecret: '$(certificateClientSecret)'
    signingCertName: '$(certificateName)'
```

### AL.build: Install AL application

Installiert die erstellten AL Artefakte (`*.app`) im Microsoft Dynamics 365 Business Central Container. Dabei werden alle notwendigen Schritte, inklusive eines ggf. notwendigen Updates ausgeführt, falls die AL Anwendung bereits in einer früheren Version installiert war.

#### Parameter

| Parameter | Beschreibung | Standardwert |
| --- | --- | --- |
| `appId` (Optional) | Gibt eine App ID, die im Repository ist, und installiert werden soll. Lassen Sie den Parameter leer um alle enthaltenen AL Anwendungen zu installieren. | |
| `schemaUpdateMode` (Optional) | Gibt eine App ID die im Repository ist und kompiliert werden soll. | `Synchronize` |
| `excludeTestApps` (Optional) | Gibt ob Test Apps ausgeschlossen werden sollen. | `false` |

### AL.build: Run Tests

Execute the tests, included in the AL application, and create a *JUnit compatible* test result file. 

#### Example

```yaml
- task: RunTests@0
  displayName: 'Run Tests'
  condition: and(succeeded(),eq(variables['testAppExist'],'true'))
```

### AL.build: Remove Build Container

Removes the previously created container.

#### Example

```yaml
- task: RemoveBuildContainer@0
  displayName: 'Remove Build Container'
  condition: always()
```

## Build Tasks für Artefakte

`AL.build` für Azure DevOps stellt Tasks für die Bereitstellung und Verwendung von Artefakten, im Rahmen der [CI-Pipelines](/ci-pipeline/), zur Verfügung. Darüber hinaus gibt es bereits Tasks für die Bereitstellung von Artefakten aus Azure DevOps.


### Bereitstellung von Artefakten

Die Resultate aus Pipelines werden Artefakte genannt. Diese Artefakte können verschiedene Dateien sein, zum Beispiel Skripte und Anwendungsdateien. Im Rahmen der AL Anwendungsentwicklung handelt es sich zudem meist um App Dateien (`*.app`) oder NuGet Pakete (`*.nupkg`).

Um die Artefakte für Folgeprozesse, wie Release Pipelines oder abhängige CI/CD-Pipelines, zu machen, müssen die Artefakte veröffentlicht werden. Hierzu dienen sogenannte Feeds (z.B. Azure Feeds, NuGet).

Im folgenden werden die Tasks zur Bereitstellung von Artefakten beschrieben:

#### Publish Universal Packages

Veröffentlicht ein Artefakt als *Universal Package* im Azure Feed.

##### Example

```yaml
- task: UniversalPackages@0
  displayName: 'Publish Artifacts to Azure Feed (Universal)'
  continueOnError: true
  condition: and(succeeded(), eq(variables.isPullRequestBuild, true))
  inputs:
    command: publish
    publishDirectory: '$(Build.ArtifactStagingDirectory)'
    vstsFeedPublish: '$(vstsFeed)'
    vstsFeedPackagePublish: '$(appName)'
    packagePublishDescription: '$(appDescription)'
    versionOption: custom
    versionPublish: '$(appVersion).$(appBuild)'
```

#### Push NuGet Package

Veröffentlicht ein NuGet Paket im NuGet Feed.

##### Example

```yaml
- task: NuGetCommand@2
  displayName: 'Publish Artifacts to NuGet feed'
  continueOnError: true
  condition: and(succeeded(), eq(variables.isPullRequestBuild, true))
  inputs:
    command: 'push'
    packagesToPush: '$(Build.ArtifactStagingDirectory)/**/*.nupkg;!$(Build.ArtifactStagingDirectory)/**/*.symbols.nupkg'
    nuGetFeedType: 'internal'
    publishVstsFeed: '$(nuGetFeed)'
    allowPackageConflicts: true
```

### Verwendung von Artefakten

Im folgenden werden die Tasks zur Verwendung von Artefakten beschrieben:

#### AL.build: Download Artifacts (NuGet)


#### AL.build: Download Dependencies (NuGet)


#### AL.build: Download Artifacts (Universal)


#### AL.build: Download Dependencies (Universal)


