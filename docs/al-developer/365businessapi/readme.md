---
title: 365 business API
---

# 365 business API
The `365 business API` app is the base library for all `365 business development` app, based on the `365 business API` services. The app is the base libary app to provide API communication capabilities. 

## Interfaces
The `365 business API` app is created as base library to communicate with the `365 business API` services. Therfor the app provides public interfaces to use for handling and consuming API services.

### 365 business API (Codeunit `5523562` - `bdev.365 business API`)
The `bdev.365 business API` codeunit object is the base component in consuming `365 business API` services and providing the base communication.

#### Methods
The following methods are available:

| Method name | Description | 
| --- | ---| 
| [CallApi(Text)](365businessapi/callapi1.md) | Sending a GET request to the API service. |
| [CallApi(Text, Text)](365businessapi/callapi2.md) | Sending a POST request to the API service. |
| [CallApi(Enum, Text, Text)](365businessapi/callapi3.md) | Sending a request to the API service. |
| [CallApi(Enum, Text, Text[10], Text)](365businessapi/callapi4.md) | Sending a request to a specific API service version. |
| [GetResponse(Record)](365businessapi/getresponse1.md) | Returns the content of the API Response. |
| [GetResponse(JsonObject)](365businessapi/getresponse2.md) | Returns the content of the API Response as JSON Object. |
| [IsSuccessful()](365businessapi/issuccessful.md) | Checks whether be the previous API call successful or not. | 
| [GetException(Dictionary of [Text, Text])](365businessapi/getexception.md) | Returns the exception caused by previous API call. |
| [GetExceptionMessage()](365businessapi/getexceptionmessage.md) | Returns the exception message caused by previous API call. |
| [GetExceptionStatus()](365businessapi/getexceptionstatus.md) | Returns the exception status caused by previous API call. | 
| [GetApiVersion()](365businessapi/getapiversion1.md) | Returns the currently used API Version. | 
| [GetApiVersion(Code)](365businessapi/getapiversion2.md) | Returns the API Version a specific service. | 
| [GetMajorApiVersion()](365businessapi/getmajorapiversion1.md) | Returns the major version no. of the currently used API Version. | 
| [GetMajorApiVersion(Code)](365businessapi/getmajorapiversion2.md) | Returns the major version no. of a specific service API Version. | 
| [GetMinorApiVersion()](365businessapi/getminorapiversion1.md) | Returns the minor version no. of the currently used API Version. | 
| [GetMinorApiVersion(Code)](365businessapi/getminorapiversion2.md) | Returns the minor version no. of a specific service API Version. | 
| [GetBuildApiVersion()](365businessapi/getbuildapiversion1.md) | Returns the build version no. of the currently used API Version. | 
| [GetBuildApiVersion(Code)](365businessapi/getbuildapiversion2.md) | Returns the build version no. of a specific service API Version. | 
| [GetRevisionApiVersion()](365businessapi/getrevisionapiversion1.md) | Returns the revision version no. of the currently used API Version. | 
| [GetRevisionApiVersion(Code)](365businessapi/getrevisionapiversion2.md) | Returns the revision version no. of the currently used API Version. | 
| [SetApiVersion(Code, Text)](365businessapi/setapiversion.md) | Set the API Service Version to use in case of specific version used. |

### Data Type Management (Codeunit `5523565` - `bdev.API DataType Mgmt.`)
Exposes common functionalities to handle with API responses and requests. It also contains functionalities to handle JSON and Text objects.
#### Methods
The following methods are available:

| Method name | Description | 
| --- | ---| 
| [GetInStreamFromBlobStorage(Codeunit, InStream)](apidatatypemgmt/getinstreamfromblobstorage.md) | Initiate InStream object from Temp Blob codeunit to read data. |
| [GetOutStreamFromBlobStorage(Codeunit, OutStream)](apidatatypemgmt/getoutstreamfromblobstorage.md) | Initiate OutStream object from Temp Blob codeunit to write data. |
| [GetTextFromBlobStorage(Codeunit)](apidatatypemgmt/gettextfromblobstorage.md) | Read content from Temp Blob Codeunit and return Text object. |
| [SetTextToBlobStorage(Codeunit, Text)](apidatatypemgmt/settexttoblobstorage.md) | Write a text to Temp Blob Codeunit. |
| [GetBase64Content(JsonObject, Text, Text, Text)](apidatatypemgmt/getbase64content1.md) | Get base64 content of an API Response. |  
| [GetBase64Content(JsonObject, Text, Enum, Text)](apidatatypemgmt/getbase64content2.md) | Get base64 content of an API Response. | 
| [TestJsonToken(JsonObject, Text)](apidatatypemgmt/testjsontoken.md) | Test whether the specified JSON token exists or not. | 
| [GetJsonToken(JsonObject, Text)](apidatatypemgmt/getjsontoken.md) | Retrieves the specified JSON token by given key name. |
| [SelectJsonToken(JsonObject, Text)](apidatatypemgmt/selectjsontoken.md) | Retrieves the specified JSON token by given path. |
| [ConcatenateText(Text, Text)](apidatatypemgmt/concatenatetext1.md) | Concatenate text with whitespace in between. |
| [ConcatenateText(Text, Text, Text)](apidatatypemgmt/concatenatetext2.md) | Concatenate text with specific merge text in between. |

### Exception (Codeunit `5523566` - `bdev.API Exception`)
Represents the common exception response returned from 365 business API, containing TimeStamp, ErrorCode and Message.
Additional values are allowed and will be stored in a property directory.
#### Methods
The following methods are available:

| Method name | Description | 
| --- | ---| 
| [Exception(HttpResponseMessage)](apiexception/exception1.md) | Constructor method to extract information from HttpResponseMessage object. |
| [Exception(Text)](apiexception/exception2.md) | Constructor method to extract information from JSON string. |
| [Exception(JsonObject)](apiexception/exception3.md) | Constructor method to extract information from JSON object. |
| [Set(Text, Text)](apiexception/set.md) | Assigning the value to given key name. |
| [Get(Text)](apiexception/get1.md) | Returns the value for requested key name, if present. |
| [Get(Dictionary of [Text, Text])](apiexception/get2.md) | Returns all properties from the exception object. |
| [IsEmpty()](apiexception/isempty.md) | Checks whether a exception object is empty or not. |
| [TimeStamp()](apiexception/timestamp1.md) | Returns the Timestamp from ExceptionResponse object. |
| [TimeStamp(Text)](apiexception/timestamp2.md) | Sets the timestamp of a ExceptionResponse object. |
| [TimeStamp(DateTime)](apiexception/timestamp3.md) | Sets an DateTime value as the timestamp of a ExceptionResponse object. |
| [ErrorCode()](apiexception/errorcode1.md) | Returns the Error Code from ExceptionResponse object. |
| [ErrorCode(Text)](apiexception/errorcode2.md) | Sets the Error Code of a ExceptionResponse object. |
| [ErrorCode(Integer)](apiexception/errorcode3.md) | Sets an Integer value as the Error Code from ExceptionResponse object. |
| [Message()](apiexception/message1.md) | Returns the Message from ExceptionResponse object. |
| [Message(Text)](apiexception/message2.md) | Sets the Message of a ExceptionResponse object. |
| [Status()](apiexception/status1.md) | Returns the Status from ExceptionResponse object. |
| [Status(Text)](apiexception/status2.md) | Sets the Status of a ExceptionResponse object. |
