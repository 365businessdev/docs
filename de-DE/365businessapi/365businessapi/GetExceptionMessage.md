# GetExceptionMessage Method
Returns the exception message caused by previous API call.

## Syntax
```javascript
    [Text := ] GetExceptionMessage()
```

## Parameters
### *None*

## Return Value
### *Text*
Type: Text<br/>
Exception message caused by previous API call. 

## Remarks
The return value will be a empty if no previous API call has been operated.

## See Also
[GetException(Dictionary of [Text, Text])](./GetException.md)<br />
[GetExceptionStatus()](./GetExceptionStatus.md)<br />
[GetExceptionErrorCode()](./GetExceptionErrorCode.md)<br />
[CallApi(Text)](./CallApi1.md)<br />
[CallApi(Text, Text)](./CallApi2.md)<br />
[CallApi(Enum, Text, Text)](./CallApi3.md)<br />
[CallApi(Enum, Text, Text[10], Text)](./CallApi4.md)