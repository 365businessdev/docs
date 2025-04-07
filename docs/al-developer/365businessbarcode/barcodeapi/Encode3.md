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
[Encode(Codeunit, Text, enum)](./Encode1.md)<br />
[Encode(Codeunit, Text, Code[20])](./Encode2.md)<br />
[Encode(Codeunit, Text, enum, Decimal)](./Encode4.md)<br />
[Encode(Codeunit, Text, enum, Decimal, Decimal)](./Encode5.md)<br />
[Encode(Codeunit, Text, enum, Decimal, Decimal, Decimal)](./Encode6.md)<br />
[Encode(Codeunit, Text, enum, Decimal, Decimal, Decimal, Boolean)](./Encode7.md)<br />
