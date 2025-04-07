# Encode Method
Encodes the barcode value using barcode format and dimensions (height & weight).

## Syntax
```javascript
	Encode(var tempBlobBuffer: Codeunit "Temp Blob"; barcodeValue: Text; barcodeFormat: enum "bdev.Barcode Format"; height: Decimal; width: Decimal)
```

## Parameters
### *tempBlobBuffer*
Type: Codeunit "Temp Blob"<br/>
Temp Blob codeunit instance to store the encoded barcode.
### *barcodeValue*
Type: Text<br/>
Barcode Value to encode.
### *barcodeFormat*
Type: enum "bdev.Barcode Format"<br/>
Barcode Format to use for encoding.
### *height*
Type: Decimal<br/>
Height for the encoded barcode.
### *width*
Type: Decimal<br/>
Width for the encoded barcode.

## Return Value
### *None*

## See Also
[Encode(Codeunit, Text, enum)](./encode1.md)<br />
[Encode(Codeunit, Text, Code[20])](./encode2.md)<br />
[Encode(Codeunit, Text, Record)](./encode3.md)<br />
[Encode(Codeunit, Text, enum, Decimal)](./encode4.md)<br />
[Encode(Codeunit, Text, enum, Decimal, Decimal, Decimal)](./encode6.md)<br />
[Encode(Codeunit, Text, enum, Decimal, Decimal, Decimal, Boolean)](./encode7.md)<br />
