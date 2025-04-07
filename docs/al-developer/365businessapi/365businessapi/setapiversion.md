# SetApiVersion Method
Set the API Service Version to use in case of specific version used.

## Syntax
```javascript
    SetApiVersion(serviceName: Code[50]; versionNo: Text[10])
```

## Parameters
### *serviceName*
Type: Code[50]<br/>
Name of the API service (e.g. `PDF`).
### *versionNo*
Type: Text[10]<br/>
365 business API service version no. to set as default.

## Return Value
### *None*

## Remarks
Returned format is `MAJOR`.`MINOR`.`BUILD`.`REVISION`.

## See Also
[GetApiVersion()](./getapiversion1.md)<br />
[GetApiVersion(Code)](./getapiversion2.md)<br />
[GetMajorApiVersion()](./getmajorapiversion1.md)<br />
[GetMajorApiVersion(Code)](./getmajorapiversion2.md)<br />
[GetMinorApiVersion()](./getminorapiversion1.md)<br />
[GetMinorApiVersion(Code)](./getminorapiversion2.md)<br />
[GetBuildApiVersion()](./getbuildapiversion1.md)<br />
[GetBuildApiVersion(Code)](./getbuildapiversion2.md)<br />
[GetRevisionApiVersion()](./getrevisionapiversion1.md)<br />
[GetRevisionApiVersion(Code)](./getrevisionapiversion2.md)