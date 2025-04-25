# ZIP-Plugin

Das **ZIP-Plugin** der 365 business Proxy Application ermöglicht das Erstellen, Entpacken und Anzeigen von ZIP-Archiven auf lokalen Laufwerken, Netzlaufwerken oder über UNC-Pfade.

Es gehört zu den **Standard-Plugins** und kann direkt über die Seite **Proxy Application Clients** in Microsoft Dynamics 365 Business Central installiert werden.

---

## AL-Integration

Die folgenden Funktionen stehen über die Codeunit `bdev.PRX Proxy Application` (ID 5523630) zur Verfügung.

---

## Funktionen

### ZIP-Archiv erstellen – (*ZipArchive*)

```al
success: Boolean := ZipArchive([clientId: Guid;] filePath: Text; archivePath: Text[; password: Text][; compressionLevel: Integer][; overwrite: Boolean])
```

**Parameter**

 - `clientId: Guid` (Optional)<br>
   Gibt die ID des Proxy Application Client an, auf dem die Operation ausgeführt werden soll.
 - `filePath: Text`<br>
   Gibt den Pfad oder UNC-Pfad an der Datei oder des Verzeichnis an, das komprimiert werden soll.
 - `archivePath: Text`<br>
   Gibt den Pfad oder UNC-Pfad der ZIP-Datei an.
 - `password: Text` (Optional)<br>
   Gibt das Passwort an, mit dem das ZIP Archiv geschützt wird.
 - `compressionLevel: Integer` (Optional)<br>
   Gibt die Kompressionsstufe von 0-9 an. Der Standardwert ist 5 (Normal).
 - `overwrite: Boolean` (Optional)<br>
   Gibt an, ob die Zieldatei überschrieben werden soll.

**Rückgabe**

Gibt `true` zurück, wenn das ZIP Archiv erfolgreich erstellt wurde.

---

### ZIP-Archiv entpacken (*UnzipArchive*)

```al
success: Boolean := UnzipArchive([clientId: Guid;] archivePath: Text; extractPath: Text[; password: Text][; overwrite: Boolean])
```

**Parameter**

 - `clientId: Guid` (Optional)<br>
   Gibt die ID des Proxy Application Client an, auf dem die Operation ausgeführt werden soll.
 - `archivePath: Text`<br>
   Gibt den Pfad oder UNC-Pfad der ZIP-Datei an.
 - `password: Text` (Optional)<br>
   Gibt das Passwort an, mit dem das ZIP Archiv geschützt ist.
 - `overwrite: Boolean` (Optional)<br>
   Gibt an, ob die Zieldatei überschrieben werden soll.

**Rückgabe**

Gibt `true` zurück, wenn das ZIP Archiv erfolgreich extrahiert wurde.

---

### ZIP-Archiv entpacken (*ZipArchiveList*)

```al
[files: Record "bdev.PRX File Item" temporary :=] ZipArchiveList(var files: Record "bdev.PRX File Item" temporary[; clientId: Guid]; archivePath: Text[; password: Text])
```

**Parameter**

 - `files: Record "bdev.PRX File Item" temporary` (Optional)<br>
   Out-Variable, die den Inhalt des ZIP Archiv enthält.
 - `clientId: Guid` (Optional)<br>
   Gibt die ID des Proxy Application Client an, auf dem die Operation ausgeführt werden soll.
 - `archivePath: Text`<br>
   Gibt den Pfad oder UNC-Pfad der ZIP-Datei an.
 - `password: Text` (Optional)<br>
   Gibt das Passwort an, mit dem das ZIP Archiv geschützt ist.

**Rückgabe**

Gibt `files: Record "bdev.PRX File Item" temporary`, mit dem Inhalt des ZIP Archive, zurück.
