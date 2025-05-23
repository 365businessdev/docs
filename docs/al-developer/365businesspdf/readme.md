# 365 business PDF
The `365 business PDF` app implements the `365 business API` services `PDF`. The app is providing capabilities for digitally sign, apply stationery and concatenate  PDF documents. 

## Interfaces
The `365 business PDF` app is providing an internal API codeunit to allow integration into customer specific business processes.

#### PDF API (Codeunit `5523590` - `bdev.PDF API`)
The `bdev.PDF API` codeunit object is providing functionalities of the `365 business PDF` app and allows other extensions to integrate.

##### Methods
The following methods are available:

| Method name | Description | 
| --- | ---| 
| [ApplyStationeryToDocument(Codeunit, Codeunit)](pdfapi/applystationerytodocument.md) | Apply stationery document to PDF stream. |
| [ApplyStationeryToDocument(Codeunit, Record)](pdfapi/applystationerytodocument2.md) | Apply stationery page settings, configured in PDF Stationery Configuration, to PDF stream. |
| [ConcatenateDocument(Codeunit, Codeunit)](pdfapi/concatenatedocument.md) | Concatenate PDF document to PDF stream. |
| [SignDocument(Codeunit, Codeunit)](pdfapi/signdocument.md) | Digitally sign PDF stream. |

#### Business Central API

##### Endpoints
The following Endpoints are available:

| Endpoint | Description | 
| --- | ---| 
| [AddDocumentAttachment](pdfapi/adddocumentattachment.md) | Add a document to be added after a specific document |
