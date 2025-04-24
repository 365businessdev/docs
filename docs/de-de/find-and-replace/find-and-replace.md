# Suchen & Ersetzen

Im Dialog-Fenster `Suchen & Ersetzen` können Sie die Parameter für die Durchführung der Suchen & Ersetzen Funktion angeben. Der Dialog wird dabei über die gleichnamige Funktion, bspw. in der Seite **Debitoren**, aufgerufen.

![Suchen & Ersetzen](/assets/images/find-and-replace/find-and-replace-de.png)

## Datensatz Informationen

Im Bereich **Datensatz** wird die Tabelle (z.B. Debitor) und die vorgefilterte Anzahl an Datensätzen angezeigt.

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i> <strong>Hinweis</strong> Aktuell gesetzte Filter in der aufrufenden Ansicht (z.B. Debitor Übersicht) werden beim Aufruf von Suchen & Ersetzen berücksichtigt. Somit können Sie bereits ein Vorauswahl für die zu verarbeitenden Datensätze treffen.
</div>

## Ersetzen

Im Bereich **Ersetzen** wählen Sie das `Feld` aus in dem der Suchbegriff (`Suche nach`) ersetzt (`Ersetzen durch`) werden soll.

## Optionen

Im Bereich **Optionen** haben Sie die Möglichkeit zusätzliche Einstellungen für die Suche oder die Ersetzung anzugeben:

| Option | Beschreibung | Standardwert |
| --- | --- | --- |
| Übereinstimmung | Legt fest, ob der Suchbegriff das ganze Feld (Option **Ganzes Feld**) ist oder ein beliebiger Teil des Feldes den Suchbegriff enthalten muss (Option **Beliebiger Teil des Feldes**). | Ganzes Feld |
| Groß- und Kleinschreibung beachten | Gibt an, ob beim Suchbegriff die Groß- und Kleinschreibung berücksichtigt werden soll. | Nein |
| Ganzes Feld ersetzen | Gibt an, ob beim Ersetzen der komplette Feldinhalt oder nur der Teil des Feldes, der dem Suchbegriff entspricht ersetzt werden soll. | Nein | 
| Alle ersetzen | Gibt an, dass der Feldwert in allen Datensätzen unabhängig vom Suchbegriff ersetzt werden soll. | Nein |

## Überprüfung

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i> <strong>Warnung</strong> Wir empfehlen die Einstellungen im Bereich Überprüfung <b>nicht</b> zu verändern, da dies unter Umständen zu Inkonsistenzen führen kann.<br><br>Bitte konsultieren Sie Ihren Microsoft Dynamics Partner bevor Sie Datenänderungen ohne Überprüfung/Validierung durchführen.
</div>

Im Bereich **Überprüfung** kann die Validierung von Datensatz- oder Feldänderungen deaktiviert werden.