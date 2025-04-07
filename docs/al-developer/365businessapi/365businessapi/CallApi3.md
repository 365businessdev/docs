---
title: CallApi Method
---

# CallApi Method
Sends a request to the API.

## Syntax
```javascript
    CallApi(method: Enum "bdev.Api Call Method"; serviceName: Text; request: Text)
```

## Parameters
### *method*
Type: Enum `bdev.Api Call Method`<br/>
HTTP method to be used consuming the API service (e.g. `POST`).
### *serviceName*
Type: Text<br/>
Name of the API service (e.g. `PDF`) to consume.
### *request*
Type: Text<br/>
Request message to be sent to the API service.

## Return Value
### *None*

## See Also
[CallApi(Text)](./CallApi1.md)<br />
[CallApi(Text, Text)](./CallApi2.md)<br />
[CallApi(Enum, Text, Text[10], Text)](./CallApi4.md)