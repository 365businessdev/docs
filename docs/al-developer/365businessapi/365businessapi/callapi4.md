---
title: CallApi Method
---

# CallApi Method
Sends a request to the API.

## Syntax
```javascript
    CallApi(method: Enum "bdev.Api Call Method"; serviceName: Text; serviceVersion: Text[10]; request: Text)
```

## Parameters
### *method*
Type: Enum `bdev.Api Call Method`<br/>
HTTP method to be used consuming the API service (e.g. `POST`).
### *serviceName*
Type: Text<br/>
Name of the API service (e.g. `PDF`) to consume.
### *serviceName*
Type: Text[10]<br/>
Version identifier of the API service (e.g. `v1`).
### *request*
Type: Text<br/>
Request message to be sent to the API service.

## Return Value
### *None*

## See Also
[CallApi(Text)](./callapi1.md)<br />
[CallApi(Text, Text)](./callapi2.md)<br />
[CallApi(Enum, Text, Text)](./callapi3.md)