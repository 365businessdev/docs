To implement 365 business Barcode into your own individual business processes it is necessary to add the 365 business Barcode App as a dependency to your own extension.

This gives you access to the provided interfaces and objects. A detailed documentation can be found in our [AL Developer Documentation](../../al-developer/).

Below is a code example explaining how you can use 365 business Barcode.

## Step 1: Add dependency

 1. Open the `app.json` file in your AL project.
 2. Add the following code to the `dependency` token:
    ```json
    {
      "id": "9aca19d9-d261-4fa0-88fd-121ad0daa0f7",
      "name": "365 business Barcode",
      "version": "18.2.0.0",
      "publisher": "365 business development"
    }
    ```
 3. Run the command **AL: Download symbols**.

## Step 2: Implementation

Two scenarios are shown below:

## Step 2.1: QR Code in Report Object

 1. Add a new data item with reference to `bdev.Barcode`.
 2. Set the property `UseTemporary` to `true`.
 3. Set the `DataItemTableView` property to `sorting("Primary Key")`.
 4. Add a new column for the `Barcode` field.
 5. Add an `OnPreDataItem()` trigger with the following code:
    ```al
    Reset();
    DeleteAll(false);

    "Barcode Symbology" := Enum::"bdev.Barcode Symbology"::"QR Code";
    Height := 70;
    "Barcode Value" := <BARCODE VALUE>;
    if (Encode()) then
        Insert();
    ```
 6. Compile your extension using the command **AL: Package**.
 7. Open your layout and add an image with the reference to your new `Barcode` column.

#### Source Code

```al
dataitem(BarcodeBuffer; "bdev.Barcode")
{
    UseTemporary = true;
    DataItemTableView = sorting("Primary Key");

    column(Barcode; Barcode)
    { }

    trigger OnPreDataItem()
    begin
        Reset();
        DeleteAll(false);

        "Barcode Symbology" := Enum::"bdev.Barcode Symbology"::"QR Code";
        Height := 80;
        "Barcode Value" := <BARCODE VALUE>;
        if (Encode()) then
            Insert();
    end;
}
```

## Step 2.2: Add barcode to item barcode

 1. Create a page extension for the 'Item Identifiers' page.
 2. Add an action.
    ```al
    action("PTE CreateBarcode")
    {
        ApplicationArea = All;
        Caption = 'Create Barcode';
        ToolTip = 'Encode the item identifier to create a barcode in selected barcode defintion.';
        Image = BarCode;
        Promoted = true;
        PromotedIsBig = true;
        PromotedCategory = Process;

        trigger OnAction()
        begin
            EncodeBarcodeItemIdentifier(Rec);
            CurrPage.Update(false);
        end;
    }
    ```
  3. Add a new function named `EncodeBarcodeItemIdentifier`.
     ```al
     procedure EncodeBarcodeItemIdentifier(var itemIdentifier: Record "Item Identifier")
     var
        barcodeSettings: Record "bdev.Barcode Settings";
        tempBlob: Codeunit "Temp Blob";
        encodeBarcode: Codeunit "bdev.Encode Barcode";
        stream: InStream;
     begin
        itemIdentifier.TestField("bdev.Barcode Settings Code");
        barcodeSettings.Get(itemIdentifier."bdev.Barcode Settings Code");
        tempBlob := encodeBarcode.Encode(barcodeSettings, itemIdentifier."Code");
        if (tempBlob.HasValue()) then begin
            tempBlob.CreateInStream(stream);
            itemIdentifier."bdev.Barcode".ImportStream(stream, 'Barcode', 'image/png');
            itemIdentifier.Modify(true);
        end else
            Error(UnableToEncodeBarcodeErr);
     end;
     ```

### See also

 - [AL Developer Documentation](../../al-developer/)