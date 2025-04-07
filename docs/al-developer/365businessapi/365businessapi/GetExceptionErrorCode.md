# GetExceptionErrorCode Method
Returns the exception error code caused by previous API call.

> **Important:**<br />API Exception does not support Error Codes anymore. This feature will be removed in future versions.

## Syntax
```javascript
    [Text := ] GetExceptionErrorCode()
```

## Parameters
### *None*

## Return Value
### *Text*
Type: Text<br/>
Exception error code caused by previous API call. 

## Remarks
The return value will be a empty if no previous API call has been operated.

## See Also
[GetException(Dictionary of [Text, Text])](./getexception.md)<br />
[GetExceptionMessage()](./getexceptionmessage.md)<br />
[GetExceptionStatus()](./getexceptionstatus.md)<br />
[CallApi(Text)](./callapi1.md)<br />
[CallApi(Text, Text)](./callapi2.md)<br />
[CallApi(Enum, Text, Text)](./callapi3.md)<br />
[CallApi(Enum, Text, Text[10], Text)](./callapi4.md)