# Find & Replace

The `365 business development Find & Replace` app is adding Find & Replace capabilities to Microsoft Dynamics 365 Business Central. By default there are implementations to common master data records, like:
 - Customer
 - Vendor
 - Contact
 - G/L Account
 - Fixed Asset
 - Item
 - Service Item
 - Resource

Find & Replace is built to be as flexible as possible and can be implemented into any kind of table/record within Dynamics 365 Business Central, with just a few lines of AL code.

## App Dependencies

To be able to create your own implementation for a custom or not built-in table/record you have to create a new extension and create a dependency to the `365 business development Find & Replace` app. You do this by adding the following to the `dependencies` node in your `app.json` file:

```json
    {
      "id": "43382cd0-11d4-401a-a3c7-d22f954ca99b",
      "name": "Find & Replace",
      "publisher": "365 business development",
      "version": "1.0.0.0"
    }
```

## Implementation

Find & replace can be added to any table/record. You only need to add a page action to call the Find & Replace dialog and passing the `Record` variable you're currently working with.

### Methods

The Find & Replace page object is providing the following public methods:

| Method | Description |
| --- | --- |
| `LoadDataSet(Variant)` | Load data from `Record`, `RecordRef` or `TableNo` (`Integer`) variable. |
| `LoadDataSet(Integer, Text)` | Load data from specified table no. `Integer` variable and apply filter string. |

#### `LoadDataSet(Variant)`

Load data from `Record`, `RecordRef` or `TableNo` (`Integer`) variable. Applied filters in `Record` or `RecordRef` variable will be applied automatically.

##### Example

```al
findAndReplace.LoadDataSet(Rec);
```

#### `LoadDataSet(Integer, Text)`

Load data from specified table no. `Integer` variable and apply filter string.

> Filter string is expected to format of `Rec.GetFilters()` procedure.

##### Example

```al
tableNo := Database::"Item";
filter := myItemRecord.GetFilters();

findAndReplace.LoadDataSet(tableNo, filter);
```

### Example

```al
pageextension 50000 "Contact List Ext." extends "Contact List"
{
    actions
    {
        addlast("C&ontact")
        {
            action("bdev.FindAndReplace")
            {
                Caption = 'Find && Replace';
                ToolTip = 'Runs the find & replace dialog to bulk change field values in current table.';
                ApplicationArea = All;
                Image = Find;

                Promoted = true;
                PromotedCategory = Process;
                PromotedIsBig = true;
                Ellipsis = true;

                trigger OnAction()
                var
                    findAndReplace: Page "bdev.Find And Replace";
                begin
                    Clear(findAndReplace);
                    findAndReplace.LoadDataSet(Rec);
                    findAndReplace.RunModal();

                    CurrPage.Update(false);
                end;
            }
        }
    }
}
```