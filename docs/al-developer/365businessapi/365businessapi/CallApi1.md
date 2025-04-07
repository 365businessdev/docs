---
title: CallApi Method
---

# CallApi Method
Sends a GET request to the API.

## Syntax
```javascript
    CallApi(serviceName: Text)
```

## Parameters
### *serviceName*
Type: Text<br/>
Name of the API service (e.g. `Version`) to consume.

## Return Value
### *None*

## Remarks
This call will send a `GET` request. No request body is supported.

## See Also
[CallApi(Text, Text)](./callapi2.md)<br />
[CallApi(Enum, Text, Text)](./callapi3.md)<br />
[CallApi(Enum, Text, Text[10], Text)](./callapi4.md)
