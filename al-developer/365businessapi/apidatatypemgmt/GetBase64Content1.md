# GetBase64Content Method
**Obsolete.** Get base64 content of an API Response.

## Syntax
```javascript
	GetBase64Content(json: JsonObject; nodeName: Text; mimeType: Text; var base64String: Text)
```

## Parameters
### *json*
Type: JsonObject<br/>
API Response as JSON object.
### *nodeName*
Type: Text<br/>
Name of the requested JSON node.
### *mimeType*
Type: Text<br/>
Expected MIME-Type of the base64 String.
### *base64String*
Type: Text<br/>
Requested key name as string.

## Return Value
### *None*

## Remarks
**Obsolete.**Use MIME-Type from "bdev.API MIME Type" enum, instead of textual.

## See Also
[GetBase64Content(JsonObject, Text, Enum, Text)](./GetBase64Content2.md)<br />
