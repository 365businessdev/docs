# Telemetriedaten

365 business API gibt Telemetriedaten für verschiedene Aktivitäten und Vorgänge aus. Die Telemetrie gibt uns einen Einblick in die Aktivitäten und den allgemeinen Zustand unserer Dienste und Funktionen. Sie helfen uns, Probleme zu diagnostizieren und Vorgänge zu analysieren, die die Leistung oder Funktionsfähigkeit beeinträchtigen.

## Verfügbare Telemetrie
Mit 365 business API Version 17.0 und später werden verschiedene Telemetriedaten an 365 business development gesendet:

| Bereich | Name | Beschreibung | 
| --- | --- | --- |
| Kommunikation | [`BDEV-API-00040`]<br>API-Anforderung erstellt | Eine API-Anforderung wurde für einen bestimmten Dienst erstellt. |
| Kommunikation | [`BDEV-API-00041`]<br>API-Anfrage gesendet | Eine API-Anfrage wurde an den 365 business API Cloud Service gesendet. |
| Kommunikation | [`BDEV-API-00042`]<br>API-Anfrage fehlgeschlagen | Eine API-Anfrage ist fehlgeschlagen. |
| Kommunikation | [`BDEV-API-00043`]<br>API-Anfrage erfolgreich | Eine API-Anfrage wurde erfolgreich verarbeitet. | 
| Allgemein | [`BDEV-API-00050`]<br>Fehler | Es ist ein Verarbeitungsfehler aufgetreten. | 
| Allgemein | [`BDEV-API-00051`]<br>Warnung | Eine Warnung ist aufgetreten, aber die Verarbeitung wurde durchgeführt. |

## Telemetriedaten
Die Telemetrie sammelt folgende Daten:

### Allgemeine Dimensionen

| Dimension | Beschreibung oder Wert | 
| --- | --- |
| eventId | Telemetrie-Id (z. B. `BDEV-API-00040`). | 
| message | Kurzbeschreibung der verarbeiteten Aktion oder des Dienstes (z. B. `API Request sent.`). Im Falle eines Fehlers enthält das Feld die Fehlermeldung. |
| severityLevel | Schweregrad (z. B. `Error`). |
| sessionId | Eindeutige Sitzungskennung (`GUID`). |

<div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Hinweis</strong>Zusätzliche Dimensionen können automatisch von Microsoft Dynamics 365 Business Central gesendet werden.
</div>

### Zusätzliche Dimensionen
Zusätzlich werden einige Dimensionen, abhängig vom Schweregrad, gesendet:

| Dimension | Beschreibung oder Wert | Schweregrad |
| --- | --- | --- |
| callstack | Enthält den fehlerhaften Aufrufstapel, der den geworfenen Fehler oder die Warnung verursacht hat. | Critical, Error, Warning |
| request | Enthält die gesendete Anfrage zur weiteren Untersuchung. | Critical, Error |
| response | Enthält, falls vorhanden, die empfangene Antwort zur weiteren Untersuchung. | Critical, Error |

## Verwendung
Telemetriedaten, die von der 365 business API App gesendet werden, werden verwendet um einen Einblick in die Aktivitäten und den allgemeinen Zustand unserer Dienste und Funktionen zu erhalten. Sie helfen uns, Probleme zu diagnostizieren und Vorgänge zu analysieren, die die Leistung oder Funktionsfähigkeit beeinträchtigen.

Wir behandeln Telemetriedaten mit Sorgfalt und handeln in Übereinstimmung mit unserer [Datenschutzerklärung](https://365businessdev.com/datenschutzerklaerung/). 

Alle kundenspezifischen oder identifizierbaren Informationen, die wir über Telemetrie erhalten, werden nur anonymisiert gespeichert.

## Wie lange werden die Daten gespeichert?
In der Regel werden Telemetriedaten 30 Tage lang gespeichert. In Einzelfällen können Telemetriedaten zur Erstellung von Workitems in unserem Product Backlog verwendet werden und werden in diesen Fällen auf unbestimmte Zeit aufbewahrt.

## Siehe auch
 - [{% t titles.setup %}](setup.md)
 - [Datenschutzerklärung](https://365businessdev.com/datenschutzerklaerung/)