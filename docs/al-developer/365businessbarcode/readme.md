# 365 business Barcode
The `365 business Barcode` app implements the `365 business API` services `Barcode`. The app is providing Encoding and Decoding capabilities for 1D- and 2D-barcodes. 

## Interfaces
The `365 business Barcode` app is providing an internal API codeunit to allow integration into customer specific business processes.

### Barcode API (Codeunit `5523581` - `bdev.Barcode API`)
The `bdev.Barcode API` codeunit object is providing the Encoding and Decoding functionalities and allows other extensions to integrate.

#### Methods
The following methods are available:

| Method name | Description | 
| --- | ---| 
| [Encode(Codeunit, Text, Enum)](barcodeapi/encode1.md) | Encodes the barcode value using just a barcode format. |
| [Encode(Codeunit, Text, Code)](barcodeapi/encode2.md) | Encodes the barcode value using the barcode definition code. |
| [Encode(Codeunit, Text, Record)](barcodeapi/encode3.md) | Encodes the barcode value using the barcode definition. |
| [Encode(Codeunit, Text, Enum, Decimal)](barcodeapi/encode4.md) | Encodes the barcode value using barcode format and height. |
| [Encode(Codeunit, Text, Enum, Decimal, Decimal)](barcodeapi/encode5.md) | Encodes the barcode value using barcode format and dimensions (height & weight). |
| [Encode(Codeunit, Text, Enum, Decimal, Decimal, Decimal)](barcodeapi/encode6.md) | Encodes the barcode value using barcode format, dimensions (height & weight) and margin. |
| [Encode(Codeunit, Text, Enum, Decimal, Decimal, Decimal, Boolean)](barcodeapi/encode7.md) | Encodes the barcode value using barcode format, dimensions (height & weight), margin and Include Text property. |
| [Decode(Codeunit, Text)](barcodeapi/decode.md) | Decodes the barcode. |
| [HideValidationDialog(Boolean)](barcodeapi/hidevalidationdialog.md) | Specifies validation dialogs (e.g. confirmations) will be shown or not. |
