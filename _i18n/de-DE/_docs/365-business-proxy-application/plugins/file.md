Das **File** Plugin in 365 business Proxy Application bietet vollumfänglichen Zugriff auf das lokale Dateisystem, sowie verfügbare Netzlaufwerke oder UNC-Pfade.

Das File Plugin gehört zu den Standard Plugins von 365 business Proxy Application und kann direkt über die Seite **Proxy Application Clients** installiert werden.

## Objekte

Die u.g. Funktionen werden über die Codeunit `bdev.PRX Proxy Application` (ID 5523630) bereitgestellt.

### Beispiel

Im folgenden Beispiel wird der angegebene Ordner ausgelesen. Anschließend wird geprüft, ob die Datei "hello-world.txt" bereits existiert und ggf. gelöscht. Anschließend wird eine neue Datei "hello-world.txt", mit dem Inhalt "Hello, World!", erstellt.

```al

procedure ExampleFilePlugin
var
  files: Record "bdev.PRX File Item" temporary;
  proxyApp: Codeunit "bdev.PRX Proxy Application";
begin
  // get file list for directory "C:\temp"
  proxyApp.ListFiles(
    files,
    'C:\temp'
  );

  // check whether "hello-world.txt" exists
  files.Reset();
  files.SetRange("Name", 'hello-world.txt');
  files.SetRange("Is File", true);
  if (files.FindFirst()) then
    // if file exists, delete it
    proxyApp.DeleteFile(files."File Path");

  // create file "hello-world.txt"
  proxyApp.PostFile(
    'C:\temp\hello-world.txt',
    GetFileWithContent('Hello, World!')
  );  
end;

local procedure GetFileWithContent(content: Text) file: Codeunit "Temp Blob"
var
  stream: OutStream;
begin
  file.CreateOutStream(stream, TextEncoding::UTF8);
  stream.WriteText(content);

  exit(file);
end;

```

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

```al
fileExists: Boolean := FileExists([clientId: Guid,] filePath: Text)
```
**Parameter**

 - `clientId: Guid` (Optional)<br>
   Gibt die ID des Proxy Application Client an, auf dem die Operation ausgeführt werden soll.
 - `filePath: Text`<br>
   Gibt den Pfad oder UNC-Pfad der Datei an.

**Rückgabe**

Gibt `true` zurück, wenn die Datei existiert.

### Datei lesen (*GetFile*)

```al
file: Codeunit "Temp Blob" := GetFile([clientId: Guid,] filePath: Text)
```
**Parameter**

 - `clientId: Guid` (Optional)<br>
   Gibt die ID des Proxy Application Client an, auf dem die Operation ausgeführt werden soll.
 - `filePath: Text`<br>
   Gibt den Pfad oder UNC-Pfad der Datei an.

**Rückgabe**

Gibt `Codeunit "Temp Blob"` zurück, mit dem Inhalt der Datei.

### Datei schreiben (*PostFile*)

```al
success: Boolean := PostFile([clientId: Guid,] filePath: Text, file: Codeunit "Temp Blob")
```
**Parameter**

 - `clientId: Guid` (Optional)<br>
   Gibt die ID des Proxy Application Client an, auf dem die Operation ausgeführt werden soll.
 - `filePath: Text`<br>
   Gibt den Pfad oder UNC-Pfad der Datei an.
 - `file: Codeunit "Temp Blob"`<br>
   Die Datei die geschrieben werden soll.

**Rückgabe**

Gibt `true` zurück, wenn die Datei erfolgreich geschrieben wurde.

### Datei löschen (*DeleteFile*)

```al
success: Boolean := DeleteFile([clientId: Guid,] filePath: Text)
```
**Parameter**

 - `clientId: Guid` (Optional)<br>
   Gibt die ID des Proxy Application Client an, auf dem die Operation ausgeführt werden soll.
 - `filePath: Text`<br>
   Gibt den Pfad oder UNC-Pfad der Datei an.

**Rückgabe**

Gibt `true` zurück, wenn die Datei erfolgreich gelöscht wurde.

### Datei verschieben (*MoveFile*)

```al
success: Boolean := MoveFile([clientId: Guid,] fromFilePath: Text, toFilePath: Text [, overwrite: Boolean])
```
**Parameter**

 - `clientId: Guid` (Optional)<br>
   Gibt die ID des Proxy Application Client an, auf dem die Operation ausgeführt werden soll.
 - `fromFilePath: Text`<br>
   Gibt den Pfad oder UNC-Pfad der Datei an, die verschoben werden soll.
 - `toFilePath: Text`<br>
   Gibt den Zielpfad oder UNC-Pfad an, zu dem die Datei verschoben werden soll.
 - `overwrite: Boolean`<br>
   Gibt an, ob die Datei am Ziel überschrieben werden soll, falls sie bereits existiert.

**Rückgabe**

Gibt `true` zurück, wenn die Datei erfolgreich verschoben wurde.

### Datei kopieren (*CopyFile*)

```al
success: Boolean := CopyFile([clientId: Guid,] fromFilePath: Text, toFilePath: Text [, overwrite: Boolean])
```
**Parameter**

 - `clientId: Guid` (Optional)<br>
   Gibt die ID des Proxy Application Client an, auf dem die Operation ausgeführt werden soll.
 - `fromFilePath: Text`<br>
   Gibt den Pfad oder UNC-Pfad der Datei an, die kopiert werden soll.
 - `toFilePath: Text`<br>
   Gibt den Zielpfad oder UNC-Pfad an, zu dem die Datei kopiert werden soll.
 - `overwrite: Boolean`<br>
   Gibt an, ob die Datei am Ziel überschrieben werden soll, falls sie bereits existiert.

**Rückgabe**

Gibt `true` zurück, wenn die Datei erfolgreich kopiert wurde.

### Datei umbenennen (*RenameFile*)

```al
success: Boolean := RenameFile([clientId: Guid,] filePath: Text, newFilePath: Text)
```
**Parameter**

 - `clientId: Guid` (Optional)<br>
   Gibt die ID des Proxy Application Client an, auf dem die Operation ausgeführt werden soll.
 - `filePath: Text`<br>
   Gibt den Pfad oder UNC-Pfad der Datei an.
 - `newFilePath: Text`<br>
   Gibt den neuen Namen und Pfad der Datei an.

**Rückgabe**

Gibt `true` zurück, wenn die Datei erfolgreich umbenannt wurde.

### Prüfen ob Verzeichnis existiert (*DirectoryExists*)

```al
success: Boolean := DirectoryExists([clientId: Guid,] directoryPath: Text)
```
**Parameter**

 - `clientId: Guid` (Optional)<br>
   Gibt die ID des Proxy Application Client an, auf dem die Operation ausgeführt werden soll.
 - `directoryPath: Text`<br>
   Gibt den Pfad oder UNC-Pfad des Verzeichnis an.

**Rückgabe**

Gibt `true` zurück, wenn das Verzeichnis existiert.

### Verzeichnis erstellen (*CreateDirectory*)

```al
success: Boolean := CreateDirectory([clientId: Guid,] directoryPath: Text)
```
**Parameter**

 - `clientId: Guid` (Optional)<br>
   Gibt die ID des Proxy Application Client an, auf dem die Operation ausgeführt werden soll.
 - `directoryPath: Text`<br>
   Gibt den Pfad oder UNC-Pfad des Verzeichnis an, das erstellt werden soll.

**Rückgabe**

Gibt `true` zurück, wenn das Verzeichnis erstellt wurde.

### Verzeichnis löschen (*DeleteDirectory*)

```al
success: Boolean := DeleteDirectory([clientId: Guid,] directoryPath: Text [, recursive: Boolean])
```
**Parameter**

 - `clientId: Guid` (Optional)<br>
   Gibt die ID des Proxy Application Client an, auf dem die Operation ausgeführt werden soll.
 - `directoryPath: Text`<br>
   Gibt den Pfad oder UNC-Pfad des Verzeichnis an, das gelöscht werden soll.
 - `recursive: Boolean`<br>
   Gibt an, ob das Verzeichnis rekursiv gelöscht werden soll.

**Rückgabe**

Gibt `true` zurück, wenn das Verzeichnis gelöscht wurde.

### Verzeichnis verschieben (*MoveDirectory*)

```al
success: Boolean := MoveDirectory([clientId: Guid,] fromDirectoryPath: Text, toDirectoryPath: Text)
```
**Parameter**

 - `clientId: Guid` (Optional)<br>
   Gibt die ID des Proxy Application Client an, auf dem die Operation ausgeführt werden soll.
 - `fromDirectoryPath: Text`<br>
   Gibt den Pfad oder UNC-Pfad des Verzeichnis an, das verschoben werden soll.
 - `toDirectoryPath: Text`<br>
   Gibt den Pfad oder UNC-Pfad an, zu dem das Verzeichnis verschoben werden soll.

**Rückgabe**

Gibt `true` zurück, wenn das Verzeichnis verschoben wurde.

### Verzeichnis kopieren (*CopyDirectory*)

```al
success: Boolean := CopyDirectory([clientId: Guid,] fromDirectoryPath: Text, toDirectoryPath: Text)
```
**Parameter**

 - `clientId: Guid` (Optional)<br>
   Gibt die ID des Proxy Application Client an, auf dem die Operation ausgeführt werden soll.
 - `fromDirectoryPath: Text`<br>
   Gibt den Pfad oder UNC-Pfad des Verzeichnis an, das kopiert werden soll.
 - `toDirectoryPath: Text`<br>
   Gibt den Pfad oder UNC-Pfad an, zu dem das Verzeichnis kopiert werden soll.

**Rückgabe**

Gibt `true` zurück, wenn das Verzeichnis kopiert wurde.