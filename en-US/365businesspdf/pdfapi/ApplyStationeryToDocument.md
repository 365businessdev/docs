# ApplyStationeryToDocument Method
Apply stationery document to PDF stream.

### Syntax
```javascript
	ApplyStationeryToDocument(var document: Codeunit "Temp Blob"; stationery: Codeunit "Temp Blob")
```

### Parameters
#### *document*
Type: Codeunit "Temp Blob"<br/>
"Temp Blob" Codeunit containing the PDF stream.
#### *stationery*
Type: Codeunit "Temp Blob"<br/>
"Temp Blob" Codeunit containing the stationery document stream.

### Return Value
#### *None*

### Example
This sample shows how to call the ApplyStationeryToDocument method.
```javascript
	procedure ApplyStationeryToDocument(var document: Codeunit "Temp Blob")	
	var	
	    setupTable: Record "Your Setup Table";	
	    stationery: Codeunit "Temp Blob";	
	    pdfApi: Codeunit "bdev.PDF API";	
	begin	
	    setupTable.Get();
	
	    // transfer blob content to temp blob	
	    stationery.FromRecord(setupTable, setupTable.FieldNo("Stationery Document"));	
	
	    pdfApi.ApplyStationeryToDocument(document, stationery);	
	end;
```
