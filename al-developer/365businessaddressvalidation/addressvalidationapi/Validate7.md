# Validate Method
Validate and auto-complete a address given in the validation buffer.

## Syntax
```javascript
Validate(address: Record "bdev.Address Validation Buffer" temporary; var validatedAddress: Record "bdev.Address Validation Buffer" temporary)
```

## Parameters
### *address*
Type: Record "bdev.Address Validation Buffer" temporary<br/>
Temporary "bdev.Address Validation Buffer" record containing the address data to validate.
### *validatedAddress*
Type: Record "bdev.Address Validation Buffer" temporary<br/>
Temporary "bdev.Address Validation Buffer" record containing the validated or completed address data.

## Return Value
### *None*

## Example
```javascript
procedure ValidateYourTable(yourTable: Record "Your Table")
var
    buffer: Record "bdev.Address Validation Buffer" temporary;
    validatedBuffer: Record "bdev.Address Validation Buffer" temporary;
    addressValidationApi: Codeunit "bdev.Address Validation API";
begin
    // fill address validation buffer
    buffer.Address := yourTable.Address;
    buffer."Address 2" := yourTable."Address 2";
    buffer."Post Code" := yourTable."Post Code";
    buffer.City := yourTable.City;
    buffer.County := yourTable.County;
    buffer."Country/Region Code" := yourTable."Country/Region Code";

    // validate address
    addressValidationApi.Validate(buffer, validatedBuffer);

    // update original table data
    yourTable.Address := validatedBuffer.Address;
    yourTable."Address 2" := validatedBuffer."Address 2";
    yourTable."Post Code" := validatedBuffer."Post Code";
    yourTable.City := validatedBuffer.City;
    yourTable.County := validatedBuffer.County;
    yourTable."Country/Region Code" := validatedBuffer."Country/Region Code";
    
end;
```

## See Also
[Validate(Record)](./Validate1.md)<br />
[Validate(Record)](./Validate2.md)<br />
[Validate(Record)](./Validate3.md)<br />
[Validate(Record)](./Validate4.md)<br />
[Validate(Record)](./Validate5.md)<br />
[Validate(Record)](./Validate6.md)<br />
