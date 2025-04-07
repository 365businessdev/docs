# Encode Method
Encodes the barcode value using the barcode definition code.

## Syntax
```javascript
	Encode(var tempBlobBuffer: Codeunit "Temp Blob"; barcodeValue: Text; barcodeDefinitionCode: Code[20])
```

## Parameters
### *tempBlobBuffer*
Type: Codeunit "Temp Blob"<br/>
Temp Blob codeunit instance to store the encoded barcode.
### *barcodeValue*
Type: Text<br/>
Barcode Value to encode.
### *barcodeDefinitionCode*
Type: Code[20]<br/>
Code of the Barcode Format Definition to be used for encoding.

## Return Value
### *None*

## See Also
[Encode(Codeunit, Text, enum)](./encode1.md)<br />
[Encode(Codeunit, Text, Record)](./encode3.md)<br />
[Encode(Codeunit, Text, enum, Decimal)](./encode4.md)<br />
[Encode(Codeunit, Text, enum, Decimal, Decimal)](./encode5.md)<br />
[Encode(Codeunit, Text, enum, Decimal, Decimal, Decimal)](./encode6.md)<br />
[Encode(Codeunit, Text, enum, Decimal, Decimal, Decimal, Boolean)](./encode7.md)<br />
