# 365 business Barcode

`365 business Barcode` implements the 365 business API `Barcode` services in Microsoft Dynamics 365 Business Central. This app provides the ability to encode and decode barcodes in various formats, supporting seamless integration into business processes and custom solutions.

## Interfaces

The `365 business Barcode` app provides an internal API codeunit for easy integration into customer-specific business processes, enabling developers to generate and read barcodes programmatically.

## Implementation (Codeunit `5523960` - `bdev.Barcode`)

The `bdev.Barcode` codeunit is the main entry point for the `365 business Barcode` app. It exposes a set of methods to encode and decode barcodes, as well as to generate vCards as barcodes. This codeunit is designed for extensibility and can be used in custom AL code, workflows, or extensions.

---

## Public API Documentation

The following methods are available in the `bdev.Barcode` codeunit:

### Encode Methods

- **Encode(barcodeSymbology: Enum "bdev.Barcode Symbology"; value: Text): Codeunit "Temp Blob"**

  Encodes the provided value using the specified barcode symbology (such as QR Code, Code128, etc.). This method is ideal for scenarios where you want to quickly generate a barcode image with default settings.
  
  - `barcodeSymbology`: The barcode symbology to use (Enum "bdev.Barcode Symbology").
  - `value`: The value to encode as a barcode.
  - **Returns:** A `Temp Blob` codeunit containing the generated barcode image.
  - *Remarks:* Default values for color, background color, and height are automatically applied. Use this method for standard barcode generation needs.

- **Encode(barcodeSettings: Record "bdev.Barcode Settings"; value: Text): Codeunit "Temp Blob"**

  Encodes the provided value using custom barcode settings. This method allows for advanced customization, such as setting colors, size, and error correction levels.
  
  - `barcodeSettings`: The barcode settings record to use (Record "bdev.Barcode Settings").
  - `value`: The value to encode.
  - **Returns:** A `Temp Blob` codeunit containing the generated barcode image.
  - *Use case:* Use this method when you need to control barcode appearance or behavior beyond the defaults.

- **Encode(var stream: OutStream; barcodeSettings: Record "bdev.Barcode Settings"; value: Text)**

  Encodes the provided value using the specified barcode settings and writes the barcode image directly to the provided OutStream. This is useful for streaming barcode images to files, reports, or external systems.
  
  - `stream`: The OutStream to write the barcode image to.
  - `barcodeSettings`: The barcode settings record to use.
  - `value`: The value to encode.
  - *Use case:* Use this method for direct output scenarios, such as exporting or printing barcodes.

### Decode Methods

- **Decode(base64ImageData: Text): Text**

  Decodes a barcode from the provided base64-encoded image data. This method is useful when barcode images are received as base64 strings (e.g., from web services or file uploads).
  
  - `base64ImageData`: The base64-encoded image data containing the barcode.
  - **Returns:** The decoded barcode value as text.
  - *Use case:* Use this method to extract data from barcode images in base64 format.

- **Decode(tempBlob: Codeunit "Temp Blob"): Text**

  Decodes a barcode from the provided Temp Blob codeunit containing the barcode image. This is suitable for scenarios where barcode images are stored or transferred as blobs within Business Central.
  
  - `tempBlob`: The Temp Blob codeunit containing the barcode image.
  - **Returns:** The decoded barcode value as text.
  - *Use case:* Use this method to read barcodes from images stored in blob fields or files.

### vCard Encoding

- **EncodeVCard(barcodeSettings: Record "bdev.Barcode Settings"; contact: Record Contact): Codeunit "Temp Blob"**

  Encodes a vCard for the specified Contact record using the given barcode settings. The resulting barcode can be scanned to import contact details into mobile devices or CRM systems.
  
  - `barcodeSettings`: The barcode settings record to use.
  - `contact`: The Contact record to encode as a vCard.
  - **Returns:** A `Temp Blob` codeunit containing the generated barcode image.
  - *Use case:* Use this method to share contact information via barcodes (e.g., on business cards or event badges).

- **EncodeVCard(barcodeSettings: Record "bdev.Barcode Settings"; salespersonPurchaser: Record "Salesperson/Purchaser"): Codeunit "Temp Blob"**

  Encodes a vCard for the specified Salesperson/Purchaser record using the given barcode settings. This enables easy sharing of salesperson or purchaser contact details.
  
  - `barcodeSettings`: The barcode settings record to use.
  - `salespersonPurchaser`: The Salesperson/Purchaser record to encode as a vCard.
  - **Returns:** A `Temp Blob` codeunit containing the generated barcode image.
  - *Use case:* Use this method to generate barcodes for team members or sales staff.

---

These methods provide a flexible and powerful API for barcode generation and decoding in Microsoft Dynamics 365 Business Central. For more advanced scenarios, you can extend the barcode settings or integrate these methods into custom workflows and extensions.
