# Encode Method
Encodes the barcode value using the barcode definition.

## Syntax
```javascript
	Encode(var tempBlobBuffer: Codeunit "Temp Blob"; barcodeValue: Text; barcodeDefinition: Record "bdev.Barcode Defintion")
```

## Parameters
### *tempBlobBuffer*
Type: Codeunit "Temp Blob"<br/>
Temp Blob codeunit instance to store the encoded barcode.
### *barcodeValue*
Type: Text<br/>
Barcode Value to encode.
### *barcodeDefinition*
Type: Record "bdev.Barcode Defintion"<br/>
Barcode Format Definition Record to be used for encoding.

## Return Value
### *None*

## See Also
[Encode(Codeunit, Text, enum)](./encode1.md)<br />
[Encode(Codeunit, Text, Code[20])](./encode2.md)<br />
[Encode(Codeunit, Text, enum, Decimal)](./encode4.md)<br />
[Encode(Codeunit, Text, enum, Decimal, Decimal)](./encode5.md)<br />
[Encode(Codeunit, Text, enum, Decimal, Decimal, Decimal)](./encode6.md)<br />
[Encode(Codeunit, Text, enum, Decimal, Decimal, Decimal, Boolean)](./encode7.md)<br />
