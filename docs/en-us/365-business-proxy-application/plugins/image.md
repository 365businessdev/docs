# Image plugin

The **Image plugin** of the 365 business Proxy Application allows access to images from the local file system, as well as available network drives or UNC paths.

It is one of the **Standard Plugins** and can be installed directly via the **Proxy Application Clients** page in Microsoft Dynamics 365 Business Central.

---

## AL integration

The following functions are available via the codeunit `bdev.PRX Proxy Application` (ID 5523630).

---

## Functions

### Retrieve image (*GetImage*)

```al
image: Codeunit “Temp Blob” := GetImage([clientId: Guid,] filePath: Text, maxWidth: Integer, quality: Integer)
```

**Parameter**

 - `clientId: Guid` (Optional)<br>
   Specifies the ID of the proxy application client on which the operation is to be executed.
 - `filePath: Text`<br>
   Specifies the path or UNC path for which the file list is to be retrieved.
 - `maxWidth: Integer`<br>
   Specifies the maximum width of the image. If the image is larger, the size is reduced accordingly.
 - `quality: Integer`<br>
   Specifies the quality of the image as a percentage (1 - 100%). This setting can significantly reduce the file size.

**Return**

Returns `Codeunit “Temp Blob” with the image.



