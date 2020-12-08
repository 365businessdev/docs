# SetTextToBlobStorage Method
Write a string to Temp Blob Codeunit.

## Syntax
```javascript
	SetTextToBlobStorage(var blobHelper: Codeunit "Temp Blob"; string: Text)
```

## Parameters
### *blobHelper*
Type: Codeunit "Temp Blob"<br/>
Temp Blob codeunit object to write the text into.
### *string*
Type: Text<br/>
String to write into the Temp Blob codeunit object.

## Return Value
### *None*

## Remarks
This should only be used for long text stored in blob.
