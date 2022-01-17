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
[GetApiVersion()](./GetApiVersion1.md)<br />
[GetApiVersion(Code)](./GetApiVersion2.md)<br />
[GetMajorApiVersion()](./GetMajorApiVersion1.md)<br />
[GetMajorApiVersion(Code)](./GetMajorApiVersion2.md)<br />
[GetMinorApiVersion()](./GetMinorApiVersion1.md)<br />
[GetMinorApiVersion(Code)](./GetMinorApiVersion2.md)<br />
[GetBuildApiVersion()](./GetBuildApiVersion1.md)<br />
[GetBuildApiVersion(Code)](./GetBuildApiVersion2.md)<br />
[GetRevisionApiVersion()](./GetRevisionApiVersion1.md)<br />
[GetRevisionApiVersion(Code)](./GetRevisionApiVersion2.md)