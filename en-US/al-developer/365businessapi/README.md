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
| [CallApi(Text)](./al-developer/365businessapi/CallApi1.md) | Sending a GET request to the API service. |
| [CallApi(Text, Text)](./al-developer/365businessapi/CallApi2.md) | Sending a POST request to the API service. |
| [CallApi(Enum, Text, Text)](./al-developer/365businessapi/CallApi3.md) | Sending a request to the API service. |
| [CallApi(Enum, Text, Text[10], Text)](./al-developer/365businessapi/CallApi4.md) | Sending a request to a specific API service version. |
| [GetResponse(Record)](./al-developer/365businessapi/GetResponse1.md) | Returns the content of the API Response. |
| [GetResponse(JsonObject)](./al-developer/365businessapi/GetResponse2.md) | Returns the content of the API Response as JSON Object. |
| [IsSuccessful()](./al-developer/365businessapi/IsSuccessful.md) | Checks whether be the previous API call successful or not. | 
| [GetException(Dictionary of [Text, Text])](./al-developer/365businessapi/GetException.md) | Returns the exception caused by previous API call. |
| [GetExceptionMessage()](./al-developer/365businessapi/GetExceptionMessage.md) | Returns the exception message caused by previous API call. |
| [GetExceptionStatus()](./al-developer/365businessapi/GetExceptionStatus.md) | Returns the exception status caused by previous API call. | 
| [GetApiVersion()](./al-developer/365businessapi/GetApiVersion1.md) | Returns the currently used API Version. | 
| [GetApiVersion(Code)](./al-developer/365businessapi/GetApiVersion2.md) | Returns the API Version a specific service. | 
| [GetMajorApiVersion()](./al-developer/365businessapi/GetMajorApiVersion1.md) | Returns the major version no. of the currently used API Version. | 
| [GetMajorApiVersion(Code)](./al-developer/365businessapi/GetMajorApiVersion2.md) | Returns the major version no. of a specific service API Version. | 
| [GetMinorApiVersion()](./al-developer/365businessapi/GetMinorApiVersion1.md) | Returns the minor version no. of the currently used API Version. | 
| [GetMinorApiVersion(Code)](./al-developer/365businessapi/GetMinorApiVersion2.md) | Returns the minor version no. of a specific service API Version. | 
| [GetBuildApiVersion()](./al-developer/365businessapi/GetBuildApiVersion1.md) | Returns the build version no. of the currently used API Version. | 
| [GetBuildApiVersion(Code)](./al-developer/365businessapi/GetBuildApiVersion2.md) | Returns the build version no. of a specific service API Version. | 
| [GetRevisionApiVersion()](./al-developer/365businessapi/GetRevisionApiVersion1.md) | Returns the revision version no. of the currently used API Version. | 
| [GetRevisionApiVersion(Code)](./al-developer/365businessapi/GetRevisionApiVersion2.md) | Returns the revision version no. of the currently used API Version. | 
| [SetApiVersion(Code, Text)](./al-developer/365businessapi/SetApiVersion.md) | Set the API Service Version to use in case of specific version used. |

### Data Type Management (Codeunit `5523565` - `bdev.API DataType Mgmt.`)
Exposes common functionalities to handle with API responses and requests. It also contains functionalities to handle JSON and Text objects.
#### Methods
The following methods are available:

| Method name | Description | 
| --- | ---| 
| [GetInStreamFromBlobStorage(Codeunit, InStream)](./al-developer/apidatatypemgmt/GetInStreamFromBlobStorage.md) | Initiate InStream object from Temp Blob codeunit to read data. |
| [GetOutStreamFromBlobStorage(Codeunit, OutStream)](./al-developer/apidatatypemgmt/GetOutStreamFromBlobStorage.md) | Initiate OutStream object from Temp Blob codeunit to write data. |
| [GetTextFromBlobStorage(Codeunit)](./al-developer/apidatatypemgmt/GetTextFromBlobStorage.md) | Read content from Temp Blob Codeunit and return Text object. |
| [SetTextToBlobStorage(Codeunit, Text)](./al-developer/apidatatypemgmt/SetTextToBlobStorage.md) | Write a text to Temp Blob Codeunit. |
| [GetBase64Content(JsonObject, Text, Text, Text)](./al-developer/apidatatypemgmt/GetBase64Content1.md) | Get base64 content of an API Response. |  
| [GetBase64Content(JsonObject, Text, Enum, Text)](./al-developer/apidatatypemgmt/GetBase64Content2.md) | Get base64 content of an API Response. | 
| [TestJsonToken(JsonObject, Text)](./al-developer/apidatatypemgmt/TestJsonToken.md) | Test whether the specified JSON token exists or not. | 
| [GetJsonToken(JsonObject, Text)](./al-developer/apidatatypemgmt/GetJsonToken.md) | Retrieves the specified JSON token by given key name. |
| [SelectJsonToken(JsonObject, Text)](./al-developer/apidatatypemgmt/SelectJsonToken.md) | Retrieves the specified JSON token by given path. |
| [ConcatenateText(Text, Text)](./al-developer/apidatatypemgmt/ConcatenateText1.md) | Concatenate text with whitespace in between. |
| [ConcatenateText(Text, Text, Text)](./al-developer/apidatatypemgmt/ConcatenateText2.md) | Concatenate text with specific merge text in between. |

### Exception (Codeunit `5523566` - `bdev.API Exception`)
Represents the common exception response returned from 365 business API, containing TimeStamp, ErrorCode and Message.
Additional values are allowed and will be stored in a property directory.
#### Methods
The following methods are available:

| Method name | Description | 
| --- | ---| 
| [Exception(HttpResponseMessage)](./al-developer/apiexception/Exception1.md) | Constructor method to extract information from HttpResponseMessage object. |
| [Exception(Text)](./al-developer/apiexception/Exception2.md) | Constructor method to extract information from JSON string. |
| [Exception(JsonObject)](./al-developer/apiexception/Exception3.md) | Constructor method to extract information from JSON object. |
| [Set(Text, Text)](./al-developer/apiexception/Set.md) | Assigning the value to given key name. |
| [Get(Text)](./al-developer/apiexception/Get1.md) | Returns the value for requested key name, if present. |
| [Get(Dictionary of [Text, Text])](./al-developer/apiexception/Get2.md) | Returns all properties from the exception object. |
| [IsEmpty()](./al-developer/apiexception/IsEmpty.md) | Checks whether a exception object is empty or not. |
| [TimeStamp()](./al-developer/apiexception/Timestamp1.md) | Returns the Timestamp from ExceptionResponse object. |
| [TimeStamp(Text)](./al-developer/apiexception/Timestamp2.md) | Sets the timestamp of a ExceptionResponse object. |
| [TimeStamp(DateTime)](./al-developer/apiexception/Timestamp3.md) | Sets an DateTime value as the timestamp of a ExceptionResponse object. |
| [ErrorCode()](./al-developer/apiexception/ErrorCode1.md) | Returns the Error Code from ExceptionResponse object. |
| [ErrorCode(Text)](./al-developer/apiexception/ErrorCode2.md) | Sets the Error Code of a ExceptionResponse object. |
| [ErrorCode(Integer)](./al-developer/apiexception/ErrorCode3.md) | Sets an Integer value as the Error Code from ExceptionResponse object. |
| [Message()](./al-developer/apiexception/Message1.md) | Returns the Message from ExceptionResponse object. |
| [Message(Text)](./al-developer/apiexception/Message2.md) | Sets the Message of a ExceptionResponse object. |
| [Status()](./al-developer/apiexception/Status1.md) | Returns the Status from ExceptionResponse object. |
| [Status(Text)](./al-developer/apiexception/Status2.md) | Sets the Status of a ExceptionResponse object. |
