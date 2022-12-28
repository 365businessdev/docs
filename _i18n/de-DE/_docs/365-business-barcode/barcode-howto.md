Um 365 business Barcode in die eigenen, individuellen, Geschäftsprozesse zu implementieren ist es notwendig die 365 business Barcode App als Abhängigkeit zur eigenen Erweiterung hinzuzufügen.

Hierdurch erhalten Sie Zugriff auf die bereitgestellten Schnittstellen und Objekte. Ein detaillierte Dokumentation finden Sie in unserer [AL Developer Documentation (en-US)](../../al-developer/).

Nachfolgend wird an einem Code-Beispiel erklärt, wie Sie 365 business Barcode nutzen können.

## Schritt 1: Abhängigkeit hinzufügen

 1. Öffnen Sie die `app.json` Datei in Ihrem AL-Projekt.
 2. Fügen sie folgenden Code in den `dependency`-Token ein:
    ```json
    {
      "id": "9aca19d9-d261-4fa0-88fd-121ad0daa0f7",
      "name": "365 business Barcode",
      "version": "18.2.0.0",
      "publisher": "365 business development"
    }
    ```
 3. Führen Sie den Befehl **AL: Download symbols** aus.

## Schritt 2: Implementierung

Im nachfolgenden werden zwei Szenarien dargestellt:

## Schritt 2.1: QR Code in Report Objekt

 1. Fügen Sie ein neues Data Item mit Referenz zu `bdev.Barcode` hinzu.
 2. Setzen Sie das Property `UseTemporary` auf `true`.
 3. Setzen Sie das Property `DataItemTableView` auf `sorting("Primary Key")`.
 4. Fügen Sie eine neue Column für das Feld `Barcode` hinzu.
 5. Fügen Sie einen `OnPreDataItem()` Trigger mit folgendem Code hinzu:
    ```al
    Reset();
    DeleteAll(false);

    "Barcode Symbology" := Enum::"bdev.Barcode Symbology"::"QR Code";
    Height := 70;
    "Barcode Value" := <BARCODE VALUE>;
    if (Encode()) then
        Insert();
    ```
 6. Kompilieren Sie Ihre Erweiterung über den Befehl **AL: Package**.
 7. Öffnen Sie Ihr Layout und fügen Sie ein Bild mit der Referenz auf Ihre neue `Barcode` Column hinzu.

#### Kompletter Quellcode

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

## Schritt 2.2: Barcode in Artikelbarcode hinzufügen

 1. Erstellen Sie eine Page Extension für die Page `Item Identifiers`.
 2. Fügen Sie eine Action hinzu.
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
  3. Fügen Sie eine neue Funktion mit dem Namen `EncodeBarcodeItemIdentifier` hinzu.
     ```al
     procedure EncodeBarcodeItemIdentifier(var itemIdentifier: Record "Item Identifier")
     var
        barcodeSettings: Record "bdev.Barcode Settings";
        tempBlob: Codeunit "Temp Blob";
        encodeBarcode: Codeunit "bdev.Barcode";
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

### Siehe auch

 - [AL Developer Documentation (en-US)](../../al-developer/)