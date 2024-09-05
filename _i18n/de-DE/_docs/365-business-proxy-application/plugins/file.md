Das **File** Plugin in 365 business Proxy Application bietet vollumfänglichen Zugriff auf das lokale Dateisystem, sowie verfügbare Netzlaufwerke oder UNC-Pfade.

Das File Plugin gehört zu den Standard Plugins von 365 business Proxy Application und kann direkt über die Seite **Proxy Application Clients** installiert werden.

## Funktionen

### Dateiliste aufrufen (*ListFiles*)

```al
files: Record "bdev.PRX File Item" temporary := ListFiles([clientId: Guid,] filePath: Text [,fileFilter: Text])
```

```al
ListFiles(var files: Record "bdev.PRX File Item" temporary, [clientId: Guid,] filePath: Text [,fileFilter: Text])
```

**Parameter**

 - `clientId: Guid` (Optional)<br>
   Gibt die ID des Proxy Application Client an, auf dem die Operation ausgeführt werden soll.
 - `filePath: Text`<br>
   Gibt den Pfad oder UNC-Pfad an, für den die Dateiliste abgerufen werden soll.
 - `fileFilter: Text`<br>
   Gibt den Filter (z.B. `*.txt`) an, der bei der Auflistung angewandt werden soll.

**Rückgabe**

Gibt die temporäre Tabelle `bdev.PRX File Item` zu, die die Dateiliste darstellt.

### Prüfen ob Datei existiert (*FileExists*)

### Datei lesen (*GetFile*)

### Datei schreiben (*PostFile*)

### Datei löschen (*DeleteFile*)

### Datei verschieben (*MoveFile*)

### Datei kopieren (*CopyFile*)

### Datei umbenennen (*RenameFile*)

### Prüfen ob Verzeichnis existiert (*DirectoryExists*)

### Verzeichnis erstellen (*CreateDirectory*)

### Verzeichnis löschen (*DeleteDirectory*)

### Verzeichnis verschieben (*MoveDirectory*)

### Verzeichnis kopieren (*CopyDirectory*)