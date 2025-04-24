---
title: Print-Plugin
---

Das **Print** Plugin in 365 business Proxy Application bietet die Möglichkeit auf Bilder aus dem lokale Dateisystem, sowie verfügbare Netzlaufwerke oder UNC-Pfade, zuzugreifen.

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg"></i>
    <strong>Gut zu wissen</strong>Sie suchen eine vollintegrierte Anbindung ihrer lokalen Druckerinfrastruktur in Microsoft Dynamics 365 Business Central? Sie m&ouml;chten reguläre Drucker oder Etikettendrucker anbinden und nativ aus Microsoft Dynamics 365 Business Central ansteuern?<br>
    <br>Dann ist <a href="https://365businessdev.com/produkte-loesungen/365-business-print-agent/" target="_blank">365 business Print Agent</a> die richtige L&ouml;sung f&uuml;r Sie! Erfahren Sie mehr und <a href="https://calendly.com/365businessdev" target="_blank">buchen Sie eine kostenlose und unverbindliche Demonstration</a>.
</div>

Das Print Plugin gehört zu den Standard Plugins von 365 business Proxy Application und kann direkt über die Seite **Proxy Application Clients** installiert werden.

## Objekte

Die u.g. Funktionen werden über die Codeunit `bdev.PRX Proxy Application` (ID 5523630) bereitgestellt.

## Funktionen

### Drucken (*Print*)

```al
success: Boolean := Print([clientId: Guid,] printerName: Text, file: Codeunit "Temp Blob")
```

**Parameter**

 - `clientId: Guid` (Optional)<br>
   Gibt die ID des Proxy Application Client an, auf dem die Operation ausgeführt werden soll.
 - `printerName: Text`<br>
   Gibt den Namen des Druckers an.
 - `file: Codeunit "Temp Blob"`<br>
   Gibt das zu druckende Dokument (z.B. PDF-Datei) an.

**Rückgabe**

Gibt `true` zurück, wenn der Druckauftrag erfolgreich erstellt wurde.

### Loakele Datei drucken (*Print*)

```al
success: Boolean := Print([clientId: Guid,] printerName: Text, filePath: Text)
```

**Parameter**

 - `clientId: Guid` (Optional)<br>
   Gibt die ID des Proxy Application Client an, auf dem die Operation ausgeführt werden soll.
 - `printerName: Text`<br>
   Gibt den Namen des Druckers an.
 - `filePath: Text`<br>
   Gibt den Pfad oder UNC-Pfad an, für den die Dateiliste abgerufen werden soll.

**Rückgabe**

Gibt `true` zurück, wenn der Druckauftrag erfolgreich erstellt wurde.
