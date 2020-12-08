# IsSuccessful Method
Checks whether be the previous API call successful or not.

## Syntax
```javascript
    [Ok := ] IsSuccessful()
```

## Parameters
### *None*

## Return Value
### *Ok*
Type: Boolean<br/>
**true** if the previous API call was successful; otherwise **false**. 

## Remarks
The return value will be **false** if no previous API call has been operated.

## See Also
[CallApi(Text)](./CallApi1.md)<br />
[CallApi(Text, Text)](./CallApi2.md)<br />
[CallApi(Enum, Text, Text)](./CallApi3.md)<br />
[CallApi(Enum, Text, Text[10], Text)](./CallApi4.md)