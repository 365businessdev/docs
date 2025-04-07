---
title: ZIP Plugin
---
The **ZIP** plugin in 365 business Proxy Application offers the option of creating, accessing or unzipping ZIP archives in the local file system, as well as on available network drives or UNC paths.

The ZIP plugin is one of the standard plugins of 365 business Proxy Application and can be installed directly from the **Proxy Application Clients** page.

## Objects

The following procedures are available through `bdev.PRX Proxy Application` codeunit (ID 5523630).

## Functions

### Create ZIP compressed archive (*ZipArchive*)

```al
success: Boolean := ZipArchive([clientId: Guid;] filePath: Text; archivePath: Text[; password: Text][; compressionLevel: Integer][; overwrite: Boolean])
```

**Parameters**

 - `clientId: Guid` (Optional)<br>
   Specifies the ID of the Proxy Application Client on which the operation is to be performed.
 - `filePath: Text`<br>
   Specifies the path or UNC path of the file or directory to be compressed.
 - `archivePath: Text`<br>
   Specifies the path or UNC path of the ZIP file.
 - `password: Text` (Optional)<br>
   Specifies the password used to protect the ZIP archive.
 - `compressionLevel: Integer` (Optional)<br>
   Specifies the compression level from 0-9. The default value is 5 (normal).
 - `overwrite: Boolean` (Optional)<br>
   Specifies whether the destination file should be overwritten.

**Return value**

Returns true if the ZIP archive was successfully created.

### Unzip a ZIP compressed archive (*UnzipArchive*)

```al
success: Boolean := UnzipArchive([clientId: Guid;] archivePath: Text; extractPath: Text[; password: Text][; overwrite: Boolean])
```

 - `clientId: Guid` (Optional)<br>
   Specifies the ID of the Proxy Application Client on which the operation is to be executed.
 - `archivePath: Text`<br>
   Specifies the path or UNC path of the ZIP file.
 - `password: Text` (Optional)<br>
   Specifies the password used to protect the ZIP archive.
 - `overwrite: Boolean` (Optional)<br>
   Specifies whether the target file should be overwritten.

**Return value**

Returns `true` if the ZIP archive was successfully extracted.

### Unzip a ZIP compressed archive (*ZipArchiveList*)

```al
[files: Record "bdev.PRX File Item" temporary :=] ZipArchiveList(var files: Record "bdev.PRX File Item" temporary[; clientId: Guid]; archivePath: Text[; password: Text])
```

**Parameters**

 - `files: Record "bdev.PRX File Item" temporary` (Optional)<br>
   Out variable that contains the contents of the ZIP archive.
 - `clientId: Guid` (Optional)<br>
   Specifies the ID of the Proxy Application Client on which the operation is to be performed.
 - `archivePath: Text`<br>
   Specifies the path or UNC path of the ZIP file.
 - `password: Text` (Optional)<br>
   Specifies the password used to protect the ZIP archive.

**Return value**

Returns `files: Record "bdev.PRX File Item" temporary`, with the contents of the ZIP archive.
