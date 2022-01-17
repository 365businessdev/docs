# Encode Method
Encodes the barcode value using barcode format and height.

## Syntax
```javascript
	Encode(var tempBlobBuffer: Codeunit "Temp Blob"; barcodeValue: Text; barcodeFormat: enum "bdev.Barcode Format"; height: Decimal)
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

## Return Value
### *None*

## See Also
[Encode(Codeunit, Text, enum)](./Encode1.md)<br />
[Encode(Codeunit, Text, Code[20])](./Encode2.md)<br />
[Encode(Codeunit, Text, Record)](./Encode3.md)<br />
[Encode(Codeunit, Text, enum, Decimal, Decimal)](./Encode5.md)<br />
[Encode(Codeunit, Text, enum, Decimal, Decimal, Decimal)](./Encode6.md)<br />
[Encode(Codeunit, Text, enum, Decimal, Decimal, Decimal, Boolean)](./Encode7.md)<br />
