# ApplyStationeryToDocument Method
Apply stationery page settings, configured in PDF Stationery Configuration, to PDF stream.

> This procedure is using the `v3` route for PDF API service. Please make sure, that your API Subscription is activated for `v3` routes.

#### Syntax
```javascript
	ApplyStationeryToDocument(var document: Codeunit "Temp Blob"; pdfStationeryConfig: Record "bdev.PDF Stationery Config.")
```

#### Parameters
##### *document*
Type: Codeunit "Temp Blob"<br/>
"Temp Blob" Codeunit containing the PDF stream.
##### *pdfStationeryConfig*
Type: Record "bdev.PDF Stationery Config."<br/>
PDF Stationery Configuration.

#### Return Value
##### *None*

#### Example
This sample shows how to call the ApplyStationeryToDocument method.
```javascript
	procedure ApplyStationeryToDocument(var document: Codeunit "Temp Blob")	
	var	
        stationeryConfiguration: Record "bdev.PDF Stationery Config.";	
	    pdfApi: Codeunit "bdev.PDF API";
        stationeryConfigurationList: Page "bdev.PDF Stat. Config. List";
	begin	
	    setupTable.Get();
	
		// select stationery configuration to be used.
		stationeryConfiguration.Reset();
		stationeryConfigurationList.SetRecord(stationeryConfiguration);
		stationeryConfigurationList.LookupMode(true);
		if (not (stationeryConfigurationList.RunModal() = Action::LookupOK)) then
			exit;
		stationeryConfigurationList.GetRecord(stationeryConfiguration);	
	
		pdfApi.ApplyStationeryToDocument(document, stationeryConfiguration);	
	end;
```

#### Example
This sample shows how to call the ApplyStationeryToDocument method.
```javascript
	procedure ApplyStationeryToDocument(var document: Codeunit "Temp Blob"; pdfStationeryConfigCode: Code[20])	
	var	
		pdfStationeryConfig: Record "bdev.PDF Stationery Config.";
	    pdfApi: Codeunit "bdev.PDF API";	
	begin	
	    pdfStationeryConfig.Get(pdfStationeryConfigCode);
	    pdfApi.ApplyStationeryToDocument(document, pdfStationeryConfig);	
	end;
```
