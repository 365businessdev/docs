# GetExceptionStatus Method
Returns the exception status caused by previous API call.

## Syntax
```javascript
    [Text := ] GetExceptionStatus()
```

## Parameters
### *None*

## Return Value
### *Text*
Type: Text<br/>
Exception status caused by previous API call. 

## Remarks
The return value will be a empty if no previous API call has been operated.

## See Also
[GetException(Dictionary of [Text, Text])](./GetException.md)<br />
[GetExceptionMessage()](./GetExceptionMessage.md)<br />
[GetExceptionErrorCode()](./GetExceptionErrorCode.md)<br />
[CallApi(Text)](./CallApi1.md)<br />
[CallApi(Text, Text)](./CallApi2.md)<br />
[CallApi(Enum, Text, Text)](./CallApi3.md)<br />
[CallApi(Enum, Text, Text[10], Text)](./CallApi4.md)