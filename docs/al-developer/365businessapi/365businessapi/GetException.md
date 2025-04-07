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
[GetExceptionMessage()](./getexceptionmessage.md)<br />
[GetExceptionStatus()](./getexceptionstatus.md)<br />
[GetExceptionErrorCode()](./getexceptionerrorcode.md)<br />
[CallApi(Text)](./callapi1.md)<br />
[CallApi(Text, Text)](./callapi2.md)<br />
[CallApi(Enum, Text, Text)](./callapi3.md)<br />
[CallApi(Enum, Text, Text[10], Text)](./callapi4.md)