# AddDocumentAttachment
Add a URL of a PDF document to be added after a specific document in Business Central.

#### Endpoint
```
BaseURL/api/businessdev/addDocumentAttachment/v1.0/companies(CompanyID)/documentAttachments
```
##### BaseURL
The URL to the Business Central instance you want to target.

##### CompanyID
The ID of the company you want to add a document to.

#### Body

##### id
The ID of the record is a Guid. When inserting a new entry, it will be automatically created. Use this value if you want to change a specific entry.

##### type
The type is the Number of the corresponding record in Business Central.\
e.g. 36 for a ```Sales Header```

##### documentType
The documentType is the Number of the ```Document Type``` of the corresponding Record in Business Central.\
e.g. 1 for ```Order```

##### documentNo
The documentNo is the value of the ```No.``` field of the corresponding record in Business Central.

##### url
The url is a link that points to a pdf file. The url has to start with ```http://``` or ```https://```.

#### Example
Use HTTP Method POST with this URL and Body:
```
http://bc25pdf:7048/BC/api/businessdev/addDocumentAttachment/v1.0/companies(9ee48135-93e1-ef11-9344-6045bde9ca09)/documentAttachments
```
```json
{
    "type":36,
    "documentType": 1,
    "documentNo": "101005",
    "url": "http://yourPdfIsHere.com"
}
```