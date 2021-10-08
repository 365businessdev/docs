# SignDocument Method
Digitally sign PDF stream.

### Syntax
```javascript
	SignDocument(var document: Codeunit "Temp Blob"; certificate: Codeunit "Temp Blob"; certificatePin: Text)
```

### Parameters
#### *document*
Type: Codeunit "Temp Blob"<br/>
"Temp Blob" Codeunit containing the PDF stream.
#### *certificate*
Type: Codeunit "Temp Blob"<br/>
"Temp Blob" Codeunit containing the certificate file.
#### *certificatePin*
Type: Text<br/>
Certificate PIN as string.

### Return Value
#### *None*

### Example
This sample shows how to call the SignDocument method.
```javascript
	procedure SignDocument(var document: Codeunit "Temp Blob")	
	var	
	    setupTable: Record "Your Setup Table";	
	    certificate: Codeunit "Temp Blob";	
	    pdfApi: Codeunit "bdev.PDF API";	
	    certificatePin: Text;	
	begin	
	    setupTable.Get();
	
	    // transfer blob content to temp blob	
	    certificate.FromRecord(setupTable, setupTable.FieldNo("Certificate File"));	
	    // get certificate pin	
	    certificatePin := setupTable."Certificate PIN";
	
	    pdfApi.SignDocument(document, certificate, certificatePin);	
	end;
```
