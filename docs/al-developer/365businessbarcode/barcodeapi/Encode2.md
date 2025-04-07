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
[Encode(Codeunit, Text, enum)](./Encode1.md)<br />
[Encode(Codeunit, Text, Record)](./Encode3.md)<br />
[Encode(Codeunit, Text, enum, Decimal)](./Encode4.md)<br />
[Encode(Codeunit, Text, enum, Decimal, Decimal)](./Encode5.md)<br />
[Encode(Codeunit, Text, enum, Decimal, Decimal, Decimal)](./Encode6.md)<br />
[Encode(Codeunit, Text, enum, Decimal, Decimal, Decimal, Boolean)](./Encode7.md)<br />
