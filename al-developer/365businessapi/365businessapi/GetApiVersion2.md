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
[GetApiVersion()](./GetApiVersion1.md)<br />
[GetMajorApiVersion()](./GetMajorApiVersion1.md)<br />
[GetMajorApiVersion(Code)](./GetMajorApiVersion2.md)<br />
[GetMinorApiVersion()](./GetMinorApiVersion1.md)<br />
[GetMinorApiVersion(Code)](./GetMinorApiVersion2.md)<br />
[GetBuildApiVersion()](./GetBuildApiVersion1.md)<br />
[GetBuildApiVersion(Code)](./GetBuildApiVersion2.md)<br />
[GetRevisionApiVersion()](./GetRevisionApiVersion1.md)<br />
[GetRevisionApiVersion(Code)](./GetRevisionApiVersion2.md)<br />
[SetApiVersion(Code, Text)](./SetApiVersion.md)