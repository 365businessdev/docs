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
[GetException(Dictionary of [Text, Text])](./getexception.md)<br />
[GetExceptionStatus()](./getexceptionstatus.md)<br />
[GetExceptionErrorCode()](./getexceptionerrorcode.md)<br />
[CallApi(Text)](./callapi1.md)<br />
[CallApi(Text, Text)](./callapi2.md)<br />
[CallApi(Enum, Text, Text)](./callapi3.md)<br />
[CallApi(Enum, Text, Text[10], Text)](./callapi4.md)