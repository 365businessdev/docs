# Encode Method
Encodes the barcode value using just a barcode format.

## Syntax
```javascript
	Encode(var tempBlobBuffer: Codeunit "Temp Blob"; barcodeValue: Text; barcodeFormat: enum "bdev.Barcode Format")
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

## Return Value
### *None*

## Example
This sample shows how to call the Encode method.
```javascript
	procedure EncodeItemNo(var item: Record Item)	
	var	
	    barcodeApi: Codeunit "bdev.Barcode API";	
	    blobHelper: Codeunit "Temp Blob";	
	    recRef: RecordRef;	
	    format: Enum "bdev.Barcode Format";	
	begin	
	    // encode item no. in qr-code format	
	    barcodeApi.Encode(blobHelper, item."No.", format::QR_CODE);	
	
	    if (not blobHelper.HasValue()) then	
	        Error(''); // put your error handling in here	
	
	    recRef.GetTable(item);	
	    blobHelper.ToRecordRef(recRef, item.FieldNo(Barcode)); // transfer barcode into field	
	    recRef.Modify(true);	
	
	    recRef.SetTable(item);	
	end;
```

## See Also
[Encode(Codeunit, Text, Code[20])](./encode2.md)<br />
[Encode(Codeunit, Text, Record)](./encode3.md)<br />
[Encode(Codeunit, Text, enum, Decimal)](./encode4.md)<br />
[Encode(Codeunit, Text, enum, Decimal, Decimal)](./encode5.md)<br />
[Encode(Codeunit, Text, enum, Decimal, Decimal, Decimal)](./encode6.md)<br />
[Encode(Codeunit, Text, enum, Decimal, Decimal, Decimal, Boolean)](./encode7.md)<br />
