# GetBuildApiVersion Method
Returns the build version no. of a specific service API Version.

## Syntax
```javascript
    [Integer := ] GetBuildApiVersion(serviceName: Code[50])
```

## Parameters
### *serviceName*
Type: Code[50]<br/>
Name of the API service (e.g. `PDF`).

## Return Value
### *Text*
Type: Integer<br/>
The build version no. of the 365 business API metadata.

## See Also
[GetApiVersion()](./getapiversion1.md)<br />
[GetApiVersion(Code)](./getapiversion2.md)<br />
[GetMajorApiVersion()](./getmajorapiversion1.md)<br />
[GetMajorApiVersion(Code)](./getmajorapiversion2.md)<br />
[GetMinorApiVersion()](./getminorapiversion1.md)<br />
[GetMinorApiVersion(Code)](./getminorapiversion2.md)<br />
[GetBuildApiVersion()](./getbuildapiversion1.md)<br />
[GetRevisionApiVersion()](./getrevisionapiversion1.md)<br />
[GetRevisionApiVersion(Code)](./getrevisionapiversion2.md)<br />
[SetApiVersion(Code, Text)](./setapiversion.md)