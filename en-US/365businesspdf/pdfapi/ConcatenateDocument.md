# ConcatenateDocument Method
Concatenate PDF document to PDF stream.

### Syntax
```javascript
	ConcatenateDocument(var document: Codeunit "Temp Blob"; document2: Codeunit "Temp Blob")
```

### Parameters
#### *document*
Type: Codeunit "Temp Blob"<br/>
"Temp Blob" Codeunit containing the PDF stream.
#### *document2*
Type: Codeunit "Temp Blob"<br/>
"Temp Blob" Codeunit containing the document to concatenate with the base document.

### Return Value
#### *None*

### Example
This sample shows how to call the ConcatenateDocument method.
```javascript
	procedure ConcatenateDocument(var document: Codeunit "Temp Blob")	
	var	
	    setupTable: Record "Your Setup Table";	
	    document2: Codeunit "Temp Blob";	
	    pdfApi: Codeunit "bdev.PDF API";	
	begin	
	    setupTable.Get();	
	
	    // transfer blob content to temp blob	
	    document2.FromRecord(setupTable, setupTable.FieldNo("Concatenate Document"));	
	
	    pdfApi.ConcatenateDocument(document, document2);	
	end;
```
