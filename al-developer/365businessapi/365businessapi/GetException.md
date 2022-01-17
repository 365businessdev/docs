# GetException Method
Checks whether be the previous API call successful or not.

## Syntax
```javascript
    GetException(var ex: Dictionary of [Text, Text])
```

## Parameters
### *ex*
Type: Dictionary of [Text, Text]<br/>
Exception dictionary containing assigned with previous received error resulting to an exception.

## Return Value
### *None*

## Remarks
The return value will be an empty dictionary if no previous API call has been operated.

## See Also
[GetExceptionMessage()](./GetExceptionMessage.md)<br />
[GetExceptionStatus()](./GetExceptionStatus.md)<br />
[GetExceptionErrorCode()](./GetExceptionErrorCode.md)<br />
[CallApi(Text)](./CallApi1.md)<br />
[CallApi(Text, Text)](./CallApi2.md)<br />
[CallApi(Enum, Text, Text)](./CallApi3.md)<br />
[CallApi(Enum, Text, Text[10], Text)](./CallApi4.md)