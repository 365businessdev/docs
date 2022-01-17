# GetResponse Method
Returns the content of the API Response.

## Syntax
```javascript
    GetResponse(var apiContentBuffer: Record "bdev.API Buffer" temporary)
```

## Parameters
### *serviceName*
Type: Record [`bdev.API Buffer`](./Api_Buffer.md)<br/>
Temporary record variable to store the received API response.

## Return Value
### *None*

## Remarks
`apiContentBuffer` is expected to be temporary to prevent from accidental written data.

## See Also
[GetResponse(JsonObject)](./GetResponse2.md)