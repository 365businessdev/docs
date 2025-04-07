# GetApiVersion Method
Returns the API Version a specific service.

## Syntax
```javascript
    [Text := ] GetApiVersion(serviceName: Code[50])
```

## Parameters
### *serviceName*
Type: Code[50]<br/>
Name of the API service (e.g. `PDF`).

## Return Value
### *Text*
Type: Text<br/>
The version of the 365 business API service metadata.

## Remarks
Returned format is `MAJOR`.`MINOR`.`BUILD`.`REVISION`.

## See Also
[GetApiVersion()](./getapiversion1.md)<br />
[GetMajorApiVersion()](./getmajorapiversion1.md)<br />
[GetMajorApiVersion(Code)](./getmajorapiversion2.md)<br />
[GetMinorApiVersion()](./getminorapiversion1.md)<br />
[GetMinorApiVersion(Code)](./getminorapiversion2.md)<br />
[GetBuildApiVersion()](./getbuildapiversion1.md)<br />
[GetBuildApiVersion(Code)](./getbuildapiversion2.md)<br />
[GetRevisionApiVersion()](./getrevisionapiversion1.md)<br />
[GetRevisionApiVersion(Code)](./getrevisionapiversion2.md)<br />
[SetApiVersion(Code, Text)](./setapiversion.md)