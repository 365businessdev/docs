# GetBase64Content Method
Get base64 content of an API Response.

## Syntax
```javascript
	GetBase64Content(json: JsonObject; nodeName: Text; mimeType: Enum "bdev.API MIME Type"; var base64String: Text)
```

## Parameters
### *json*
Type: JsonObject<br/>
API Response as JSON object.
### *nodeName*
Type: Text<br/>
Name of the requested JSON node.
### *mimeType*
Type: Enum "bdev.API MIME Type"<br/>
Expected MIME-Type of the base64 String from "bdev.API MIME Type" enum.
### *base64String*
Type: Text<br/>
Requested key name as string.

## Return Value
### *None*

## See Also
[GetBase64Content(JsonObject, Text, Text, Text)](./getbase64content1.md)<br />
