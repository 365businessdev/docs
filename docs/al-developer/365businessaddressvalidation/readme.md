---
title: 365 business Address Validation
---

# 365 business Address Validation

## Address Validation

The `365 business Address Validation` app implements the `365 business API` services `Address Validation`. The app is providing Address Validation and Address Completion capabilities. `Address Validation` is supporting the following entities:
 - Contact
 - Customer
 - Vendor
 - Alternative Address
 - Order Address
 - Ship-To Address
 - Sales Header
 - Purchase Header.

## Address Prediction

Additionally the `Address Prediction` feature is supported by `365 business Address Validation` app. `Address Prediction` is an auto-complete type-ahead feature.

`Address Prediction` is supporting the following entities:
 - Contact
 - Customer
 - Vendor
 - Alternative Address
 - Order Address
 - Ship-To Address
 - Sales Header
 - Purchase Header.

## Interfaces

The `365 business Address Validation` app is providing an internal API codeunit to allow integration into customer specific business processes. For example you can implement your own table into the address validation using the provided procedures inside the API codeunit.

### Address Validation API (Codeunit `5523600` - `bdev.Address Validation API`)

The `bdev.Address Validation API` codeunit object is providing the Address Validation and Address Completion functionalities and allows other extensions to integrate.

[See detailed documentation](addressvalidationapi.md)

### Address Prediction API (Codeunit `5523621` - `bdev.Address Prediction API`)

The bdev.Address Prediction API codeunit object is providing the Address Prediction functionalities and allows other extensions to integrate.

<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Good to know</strong>Address Prediction API has been introduced with 365 business Address Validation version 18.9.<br>
    <br>
    Please consider update 365 business Address Validation to get access to the Address Prediction API.
</div>

[See detailed documentation](addresspredictionapi.md)

#### Example

The following example is showing how to implement `Address Prediction` into a custom entity:

```al

page 50000 "My Page"
{
    ..

    layout
    {
        area(Content)
        {
            group(General)
            {
                Caption = 'General';

                field(Name; Rec.Name)
                {
                    ApplicationArea = All;
                    Importance = Promoted;
                    ShowMandatory = true;
                    ToolTip = 'Specifies the name. This name will appear on all documents.';
                }                
                field(Address; Address)
                {
                    ApplicationArea = Basic, Suite;
                    ToolTip = 'Specifies the address. This address will appear on all documents.';
                }
                field("Address 2"; Rec."Address 2")
                {
                    ApplicationArea = Basic, Suite;
                    ToolTip = 'Specifies additional address information.';
                }
                field("Country/Region Code"; Rec."Country/Region Code")
                {
                    ApplicationArea = Basic, Suite;
                    ToolTip = 'Specifies the country/region of the address.';

                    trigger OnValidate()
                    begin
                        IsCountyVisible := FormatAddress.UseCounty("Country/Region Code");
                    end;
                }
                field(City; City)
                {
                    ApplicationArea = Basic, Suite;
                    ToolTip = 'Specifies the customer''s city.';
                }
                group(Control10)
                {
                    ShowCaption = false;
                    Visible = IsCountyVisible;
                    field(County; County)
                    {
                        ApplicationArea = Basic, Suite;
                        ToolTip = 'Specifies the state, province or county as a part of the address.';
                    }
                }
                field("Post Code"; Rec."Post Code")
                {
                    ApplicationArea = Basic, Suite;
                    Importance = Promoted;
                    ToolTip = 'Specifies the postal code.';
                }
            }

            ..

            usercontrol("bdev.Address Prediction Control"; "bdev.Address Autocomplete")
            {
                ApplicationArea = All;

                trigger OnControlReady()
                begin
                    AddressPrediction.OnControlAddInReady(Rec.RecordId().TableNo(), CurrPage."bdev.Address Prediction Control");
                end;

                trigger GetAddressPredictions(fieldName: Text; input: Text)
                begin
                    AddressPrediction.GetAddressPredictions(fieldName, input, CurrPage."bdev.Address Prediction Control");
                end;

                trigger OnPredictionSelected(fieldName: Text; id: Text)
                var
                    address: Dictionary of [Text, Text];
                begin
                    if (not AddressPrediction.GetSelectedAddressPrediction(address, AddressPrediction.GetAddressType(fieldName), id)) then
                        exit;

                    ApplyAddress(address);
                end;
            }
        }
    }

    trigger OnOpenPage()
    begin
        AddressPrediction.InitializeAddressPrediction();
    end;

    trigger OnNewRecord(BelowxRec: Boolean)
    begin
        BindAddressPreditionFields();
    end;
    
    trigger OnAfterGetRecord()
    begin
        BindAddressPreditionFields();
    end;
    
    local procedure BindAddressPreditionFields()
    var
        fieldNames: Dictionary of [Text, Enum "bdev.Address Prediction Type"];
    begin
        // bind "Name" field and look up for establishments (companies) while typing.
        fieldNames.Add(Rec.FieldName(Name), Enum::"bdev.Address Prediction Type"::Establishment);

        // bind "Address" field and look up for address while typing.
        fieldNames.Add(Rec.FieldName(Address), Enum::"bdev.Address Prediction Type"::Address);

        // perform binding in Control Add-In
        AddressPrediction.BindAddressPrediction(fieldNames, CurrPage."bdev.Address Prediction Control");
    end;

    var
        AddressPrediction: Codeunit "bdev.Address Prediction API";
}

```

Additionally, for custom entities only, you need to subscribe to the `OnIsAddressPredictionEnabledForTableNo(Integer, Boolean)` event, to enable execution for custom table nos.

```al
codeunit 50000 "My Event Subscriber" 
{
    ..

    [EventSubscriber(ObjectType::Codeunit, Codeunit::"bdev.Address Prediction API", 'OnIsAddressPredictionEnabledForTableNo', '', true, true)]
    local procedure EnableMyTableOnIsAddressPredictionEnabledForTableNo(tableNo: Integer; var enabled: Boolean)
    begin
        enabled := (tableNo = Database::"My Table");
    end;

    ..
}
```
