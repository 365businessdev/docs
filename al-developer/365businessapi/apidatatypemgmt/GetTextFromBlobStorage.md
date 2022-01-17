# GetTextFromBlobStorage Method
Read content from Temp Blob Codeunit and return Text object.

## Syntax
```javascript
	GetTextFromBlobStorage(var blobHelper: Codeunit "Temp Blob")
```

## Parameters
### *blobHelper*
Type: Codeunit "Temp Blob"<br/>
Temp Blob codeunit object to read the text from.

## Return Value
### *None*

## Remarks
This should only be used for long text stored in blob. Do not used it for stored files.
