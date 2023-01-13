Auf der Seite **365 business API Einrichtung** werden alle relevanten Informationen zur Einrichtung und zur Nutzung der 365 business API hinterlegt.

Die Seite umfasst dabei folgende Bereiche:

#### Allgemein
Im Bereich Allgemein sind zwei Informationen enthalten:
##### API Adresse (URL)
Gibt die URL zur Verbindung mit den 365 business API Diensten an. Der Wert wird bei der Installation automatisch gesetzt und muss nicht verändert werden.
Der Standardwert lautet: `https://365businessapi.azurewebsites.net`

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Hinweis:</strong>Kunden die über einen Development-Zugang verfügen können in diesem Feld die URL zum Development System hinterlegen. Transaktionen mit dem Development System werden nicht berechnet. Bitte beachten Sie jedoch, dass die Daten, die an das Development System geschickt werden nicht verschlüsselt werden und durch unser Team weiterverarbeitet werden können.
</div>

##### API Authentifizierungsschlüssel
Gibt den API Authentifizierungsschlüssel (kurz API Schlüssel) für die 365 business API an. Dieser API Schlüssel authentifiziert Sie gegenüber der 365 business API und dient zu Abrechnungszwecken.
Eine Kommunikation ohne gültigen API Schlüssel ist nicht möglich.

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Hinweis:</strong>Sie erhalten eine API Schlüssel nach erfolgreicher Registrierung. Weitere Informationen finden Sie unter <a href="../get-started">Erste Schritte</a>.
</div>

##### Übermittlung von Telemetriedaten
Erlaubt das Senden von anonymisierten Telemetriedaten zur Verwendung von 365 business API Dienste. Die Telemetriedaten dienen uns unsere Dienste und Funktionen weiter zu verbessern und Probleme und Fehler zu identifizieren.

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Hinweis:</strong>Weitere Informationen darüber welche Daten erhoben werden finden Sie <a href="../telemetry-data">Telemetrie</a>.
</div>

#### Version
In diesem Bereich werden Informationen zu aktuell verwendeten API-Version angezeigt. Zudem haben Sie hier die Möglichkeit spezifische API-Dienstversionen auszuwählen, sofern entsprechende API-Module installiert wurden.

#### API-Module
In diesem Bereich werden Ihnen die weiteren 365 business API Module aus dem Microsoft AppSource angezeigt. Sie können diese über den *Get it from Microsoft AppSource* Link installieren.

### Siehe auch
 - [{% t titles.get-started %}](../get-started)
 - [{% t titles.registration %}](../registration)