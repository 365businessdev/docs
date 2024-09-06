Das **Image** Plugin in 365 business Proxy Application bietet die Möglichkeit auf Bilder aus dem lokale Dateisystem, sowie verfügbare Netzlaufwerke oder UNC-Pfade, zuzugreifen.

Das Image Plugin gehört zu den Standard Plugins von 365 business Proxy Application und kann direkt über die Seite **Proxy Application Clients** installiert werden.

## Funktionen

### Bild abrufen (*GetImage*)

```al
image: Codeunit "Temp Blob" := GetImage([clientId: Guid,] filePath: Text, maxWidth: Integer, quality: Integer)
```

**Parameter**

 - `clientId: Guid` (Optional)<br>
   Gibt die ID des Proxy Application Client an, auf dem die Operation ausgeführt werden soll.
 - `filePath: Text`<br>
   Gibt den Pfad oder UNC-Pfad an, für den die Dateiliste abgerufen werden soll.
 - `maxWidth: Integer`<br>
   Gibt die maximale Breite des Bildes an. Ist das Bild größer wird die Größe entsprechend reduziert.
 - `quality: Integer`<br>
   Gibt die Qualität des Bildes in Prozent (1 - 100%) an. Durch diese Einstellung kann die Dateigröße deutlich reduziert werden.

**Rückgabe**

Gibt `Codeunit "Temp Blob"` mit dem Bild zurück.
