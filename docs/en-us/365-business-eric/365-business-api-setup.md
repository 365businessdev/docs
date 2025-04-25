# 365 business API Einrichtung

<div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Info</strong>This page is not available in the selected language. The page is available in <b>German</b>. Please select other language to display.
</div>

Auf der Seite **365 business API Einrichtung** werden alle relevanten Informationen zur Einrichtung und zur Nutzung der 365 business API hinterlegt.<br>
Die auf der 365 business API basierenden Erweiterungen fügen dabei unter Umständen weitere Konfigurationsparameter hinzu.

## Welche 365 business ERiC Konfigurationsparameter gibt es?
In der 365 business API Einrichtung werden folgenden Konfigurationsparameter ergänzt:

| Feldname | Gruppe | Beschreibung | Hinweise |
| --- | --- | --- | --- |
| ERiC Dienst Version | Version | Gibt die zu verwendende Wählen Sie die zu verwendende Version des ERiC Dienstes aus. Diese Auswahl ist nur möglich, wenn zuvor "Version auswählen" im Feld "Verwendete API-Dienstversion" gewählt wurde. | |

## Welche API-Dienstversion muss ich verwenden?
In der Regel wird die jeweils aktuellste Version des ERiC-Dienst verwendet. Solange Sie ebenfalls jeweils die aktuellste Version der 365 business ERiC Extension verwenden garantieren wir Ihnen die erfolgreiche Übermittlung von Steuerdaten an die deutschen Steuerbehörden.

Sollten Sie in Ihrem Microsoft Dynamics 365 Business Central eine veraltete Version betreiben, so kann es vorkommen, dass die neueste API-Dienstversion ggf. nicht kompatibel mit der Extension ist. In diesem Fall müssen Sie eine andere API-Dienstversion auswählen.

<div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Info</strong> Wir empfehlen ausdrücklich die Verwendung der jeweils aktuellsten API-Dienstversion und 365 business ERiC Extension.
</div>

Aktuell werden für den 365 business API ERiC-Dienst zwei verschiedene API-Dienstversionen betrieben:
### 365 business API - ERiC V1
Bei der 365 business API - ERiC Version 1 handelt es sich um die erste öffentlich verfügbare Version des ERiC-Dienst in der 365 business API. Die Version 1 liefert nach der erfolgten Übertragung ausschließlich das Übertragungsprotokoll (PDF-Datei) zurück.

### 365 business API - ERiC V2
Bei der 365 business API - ERiC Version 2 handelt es sich um die aktuell gepflegte Version des ERiC-Dienst. Diese Version unterstützt die jeweils aktuellste ELSTER Rich Client (ERiC) Version des Bayerisches Landesamt für Steuern.<br>
Zudem liefert die Version 2 zusätzliche Informationen, wie beispielsweise die Transfer Ticket Nr. und erweiterte Fehlerbeschreibungen bei Ablehnung der Einreichung von Steuerdaten.

## Welche Einrichtung muss ich vornehmen?
In der 365 business API Einrichtung sind keine weiteren Einrichtungen notwendig. Die spezifischen Konfigurationsparameter für 365 business ERiC finden sich in der [**ELSTER Einrichtung**](setup.md).

# Siehe auch 
- [ELSTER Einrichtung](setup.md)
- [365 business API Einrichtung](../365-business-api/setup.md)