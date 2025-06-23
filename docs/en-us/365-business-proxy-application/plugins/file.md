# File Plugin

The **File Plugin** of the 365 business Proxy Application enables full access to local file systems, network drives and UNC paths.

It is one of the **Standard Plugins** and can be installed directly via the **Proxy Application Clients** page in Microsoft Dynamics 365 Business Central.

---

## AL integration

All functions are provided via the code unit `bdev.PRX Proxy Application` (ID 5523630).

### Example

In the following example, a folder is read in, an existing file is deleted if necessary and a new file with the content “Hello, World!” is created:

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

---

## Functions at a glance

### List files (*ListFiles*)

```al
files: Record "bdev.PRX File Item" temporary := ListFiles([clientId: Guid,] filePath: Text [,fileFilter: Text])
```

```al
ListFiles(var files: Record "bdev.PRX File Item" temporary, [clientId: Guid,] filePath: Text [,fileFilter: Text])
```

**Parameter**

 - `clientId: Guid` (Optional)<br>
   Specifies the ID of the proxy application client on which the operation is to be executed.
 - `filePath: Text`<br>
   Specifies the path or UNC path for which the file list is to be retrieved.
 - `fileFilter: Text`<br>
   Specifies the filter (e.g. `*.txt`) to be applied to the listing.

**Return**

Returns the temporary table `bdev.PRX File Item`, which represents the file list.

---

### Check if file exists (*FileExists*)

```al
fileExists: Boolean := FileExists([clientId: Guid,] filePath: Text)
```
**Parameter**

 - `clientId: Guid` (Optional)<br>
   Specifies the ID of the proxy application client on which the operation is to be executed.
 - `filePath: Text`<br>
   Specifies the path or UNC path of the file.

**Returns

Returns `true` if the file exists.

---

### Read file (*GetFile*)

```al
file: Codeunit "Temp Blob" := GetFile([clientId: Guid,] filePath: Text)
```
**Parameter**

 - `clientId: Guid` (Optional)<br>
   Specifies the ID of the proxy application client on which the operation is to be executed.
 - `filePath: Text`<br>
   Specifies the path or UNC path of the file.

**Return**

Returns `Codeunit "Temp Blob"` with the content of the file.

---

### Write file (*PostFile*)

<div class="alert alert-warn">
    <i class="fa-duotone fa-solid fa-triangle-exclamation fa-xl"></i>
    <strong>Attention</strong>
    Please note that the file size limit is 250 MB.
</div>

```al
success: Boolean := PostFile([clientId: Guid,] filePath: Text, file: Codeunit "Temp Blob")
```
**Parameter**

 - `clientId: Guid` (Optional)<br>
   Specifies the ID of the proxy application client on which the operation is to be executed.
 - `filePath: Text`<br>
   Specifies the path or UNC path of the file.
 - `file: Codeunit "Temp Blob"`<br>
   The file to be written.

**Returns

Returns `true` if the file was written successfully.

---

### Delete file (*DeleteFile*)

```al
success: Boolean := DeleteFile([clientId: Guid,] filePath: Text)
```
**Parameter**

 - `clientId: Guid` (Optional)<br>
   Specifies the ID of the proxy application client on which the operation is to be executed.
 - `filePath: Text`<br>
   Specifies the path or UNC path of the file.

**Returns

Returns `true` if the file was successfully deleted.

---

### Move file (*MoveFile*)

```al
success: Boolean := MoveFile([clientId: Guid,] fromFilePath: Text, toFilePath: Text [, overwrite: Boolean])
```
**Parameter**

 - `clientId: Guid` (Optional)<br>
   Specifies the ID of the proxy application client on which the operation is to be executed.
 - `fromFilePath: Text`<br>
   Specifies the path or UNC path of the file to be moved.
 - `toFilePath: Text`<br>
   Specifies the target path or UNC path to which the file is to be moved.
 - `overwrite: Boolean`<br>
   Specifies whether the file should be overwritten at the destination if it already exists.

**Returns

Returns `true` if the file was successfully moved.

---

### Copy file (*CopyFile*)

```al
success: Boolean := CopyFile([clientId: Guid,] fromFilePath: Text, toFilePath: Text [, overwrite: Boolean])
```
**Parameter**

 - `clientId: Guid` (Optional)<br>
   Specifies the ID of the proxy application client on which the operation is to be executed.
 - `fromFilePath: Text`<br>
   Specifies the path or UNC path of the file to be copied.
 - `toFilePath: Text`<br>
   Specifies the target path or UNC path to which the file is to be copied.
 - `overwrite: Boolean`<br>
   Specifies whether the file should be overwritten at the destination if it already exists.

**Returns

Returns `true` if the file was copied successfully.

---

### Rename file (*RenameFile*)

```al
success: Boolean := RenameFile([clientId: Guid,] filePath: Text, newFilePath: Text)
```
**Parameter**

 - `clientId: Guid` (Optional)<br>
   Specifies the ID of the proxy application client on which the operation is to be executed.
 - `filePath: Text`<br>
   Specifies the path or UNC path of the file.
 - `newFilePath: Text`<br>
   Specifies the new name and path of the file.

**Returns

Returns `true` if the file has been successfully renamed.

---

### Check if directory exists (*DirectoryExists*)

```al
success: Boolean := DirectoryExists([clientId: Guid,] directoryPath: Text)
```
**Parameter**

 - `clientId: Guid` (Optional)<br>
   Specifies the ID of the proxy application client on which the operation is to be executed.
 - `directoryPath: Text`<br>
   Specifies the path or UNC path of the directory.

**Returns

Returns `true` if the directory exists.

---

### Create directory (*CreateDirectory*)

```al
success: Boolean := CreateDirectory([clientId: Guid,] directoryPath: Text)
```
**Parameter**

 - `clientId: Guid` (Optional)<br>
   Specifies the ID of the proxy application client on which the operation is to be executed.
 - `directoryPath: Text`<br>
   Specifies the path or UNC path of the directory to be created.

**Returns

Returns `true` if the directory has been created.

---

### Delete directory (*DeleteDirectory*)

```al
success: Boolean := DeleteDirectory([clientId: Guid,] directoryPath: Text [, recursive: Boolean])
```
**Parameter**

 - `clientId: Guid` (Optional)<br>
   Specifies the ID of the proxy application client on which the operation is to be executed.
 - `directoryPath: Text`<br>
   Specifies the path or UNC path of the directory to be deleted.
 - `recursive: Boolean`<br>
   Specifies whether the directory is to be deleted recursively.

**Returns

Returns `true` if the directory has been deleted.

---

### Move directory (*MoveDirectory*)

```al
success: Boolean := MoveDirectory([clientId: Guid,] fromDirectoryPath: Text, toDirectoryPath: Text)
```
**Parameter**

 - `clientId: Guid` (Optional)<br>
   Specifies the ID of the proxy application client on which the operation is to be executed.
 - `fromDirectoryPath: Text`<br>
   Specifies the path or UNC path of the directory to be moved.
 - `toDirectoryPath: Text`<br>
   Specifies the path or UNC path to which the directory is to be moved.

**Returns

Returns `true` if the directory has been moved.

---

### Copy directory (*CopyDirectory*)

```al
success: Boolean := CopyDirectory([clientId: Guid,] fromDirectoryPath: Text, toDirectoryPath: Text)
```
**Parameter**

 - `clientId: Guid` (Optional)<br>
   Specifies the ID of the proxy application client on which the operation is to be executed.
 - `fromDirectoryPath: Text`<br>
   Specifies the path or UNC path of the directory to be copied.
 - `toDirectoryPath: Text`<br>
   Specifies the path or UNC path to which the directory is to be copied.

**Returns

Returns `true` if the directory has been copied.