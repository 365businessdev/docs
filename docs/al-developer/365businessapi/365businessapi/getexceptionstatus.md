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
[GetException(Dictionary of [Text, Text])](./getexception.md)<br />
[GetExceptionMessage()](./getexceptionmessage.md)<br />
[GetExceptionErrorCode()](./getexceptionerrorcode.md)<br />
[CallApi(Text)](./callapi1.md)<br />
[CallApi(Text, Text)](./callapi2.md)<br />
[CallApi(Enum, Text, Text)](./callapi3.md)<br />
[CallApi(Enum, Text, Text[10], Text)](./callapi4.md)