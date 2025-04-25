# Druck-Plugin

Das **Druck-Plugin** der 365 business Proxy Application ermöglicht das Drucken von PDF-Dokumenten.

Es gehört zu den **Standard-Plugins** und kann direkt über die Seite **Proxy Application Clients** in Microsoft Dynamics 365 Business Central installiert werden.

<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Gut zu wissen</strong>
	Sie suchen eine <b>vollintegrierte Anbindung</b> ihrer lokalen Druckerinfrastruktur in <b>Microsoft Dynamics 365 Business Central</b>? Sie m&ouml;chten reguläre Drucker oder Etikettendrucker anbinden und nativ aus Microsoft Dynamics 365 Business Central ansteuern?<br><br>
	Dann ist <a href="https://365businessdev.com/produkte-loesungen/365-business-print-agent/" target="_blank">365 business Print Agent</a> die richtige L&ouml;sung f&uuml;r Sie!<br>
	Erfahren Sie mehr und <a href="https://calendly.com/365businessdev" target="_blank">buchen Sie eine kostenlose und unverbindliche Demonstration</a>.
</div>


---

## AL-Integration

Die folgenden Funktionen stehen über die Codeunit `bdev.PRX Proxy Application` (ID 5523630) zur Verfügung.

---

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

---

### Lokale Datei drucken (*Print*)

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
