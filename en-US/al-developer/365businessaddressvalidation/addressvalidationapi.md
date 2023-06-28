# bdev.Address Validation API


The bdev.Address Validation API codeunit object is providing the Address Validation
and Address Completion functionalities and allows other extensions to integrate.

## Properties

| Property | Value |
| --- | --- |
| Object Type | Codeunit |
| Object Subtype | Normal |
| Object ID | 5523600 |
| Accessibility Level | Public | 

## Procedures

### `Validate()`

Validate and auto-complete a address given in the validation buffer.


#### Syntax

```al
[Boolean] := Validate(address: Record "bdev.Address Validation Buffer" temporary, var validatedAddress: Record "bdev.Address Validation Buffer" temporary)
```

#### Parameters

*address*<br>
&emsp;Type: Record  "bdev.Address Validation Buffer"<br>

Temporary "bdev.Address Validation Buffer" record containing the address data to validate.

*validatedAddress*<br>
&emsp;Type: Record  "bdev.Address Validation Buffer"<br>

Temporary "bdev.Address Validation Buffer" record containing the validated or completed address data.


#### Return

*Boolean*<br>

False if an runtime error occurred. Otherwise true.

### `Validate()`

Validate and auto-complete a Contact address.


#### Syntax

```al
Validate(var contact: Record Contact)
```

#### Parameters

*contact*<br>
&emsp;Type: Record  Contact<br>

Contact record to validate.


### `Validate()`

Validate and auto-complete a Customer address.


#### Syntax

```al
Validate(var customer: Record Customer)
```

#### Parameters

*customer*<br>
&emsp;Type: Record  Customer<br>

Customer record to validate.


### `Validate()`

Validate and auto-complete a Vendor address.


#### Syntax

```al
Validate(var vendor: Record Vendor)
```

#### Parameters

*vendor*<br>
&emsp;Type: Record  Vendor<br>

Vendor record to validate.


### `Validate()`

Validate and auto-complete a alternative address.


#### Syntax

```al
Validate(var altAddress: Record "Alternative Address")
```

#### Parameters

*altAddress*<br>
&emsp;Type: Record  "Alternative Address"<br>

"Alternative Address" record to validate.


### `Validate()`

Validate and auto-complete a order address.


#### Syntax

```al
Validate(var orderAddress: Record "Order Address")
```

#### Parameters

*orderAddress*<br>
&emsp;Type: Record  "Order Address"<br>

"Order Address" record to validate.


### `Validate()`

Validate and auto-complete a ship-to address.


#### Syntax

```al
Validate(var shipToAddress: Record "Ship-To Address")
```

#### Parameters

*shipToAddress*<br>
&emsp;Type: Record  "Ship-To Address"<br>

"Ship-To Address" record to validate.


### `AddressValidationEnabled()`

Test whether the address validation is enabled for the specific table or not.


#### Syntax

```al
[Boolean] := AddressValidationEnabled(tableNo: Integer)
```

#### Parameters

*tableNo*<br>
&emsp;Type: Integer <br>

Object ID of the database table.


#### Return

*Boolean*<br>

True, if address validation is enabled. Otherwise false.

### `GetValidationBuffer()`

Fill the validation buffer table with Contact record data.


#### Syntax

```al
GetValidationBuffer(contact: Record Contact, var buffer: Record "bdev.Address Validation Buffer" temporary)
```

#### Parameters

*contact*<br>
&emsp;Type: Record  Contact<br>

Contact record to validate the address with.

*buffer*<br>
&emsp;Type: Record  "bdev.Address Validation Buffer"<br>

Temporary "bdev.Address Validation Buffer" record to be filled with the table data.


### `GetValidationBuffer()`

Fill the validation buffer table with Customer record data.


#### Syntax

```al
GetValidationBuffer(customer: Record Customer, var buffer: Record "bdev.Address Validation Buffer" temporary)
```

#### Parameters

*customer*<br>
&emsp;Type: Record  Customer<br>

Customer record to validate the address with.

*buffer*<br>
&emsp;Type: Record  "bdev.Address Validation Buffer"<br>

Temporary "bdev.Address Validation Buffer" record to be filled with the table data.


### `GetValidationBuffer()`

Fill the validation buffer table with Vendor record data.


#### Syntax

```al
GetValidationBuffer(vendor: Record Vendor, var buffer: Record "bdev.Address Validation Buffer" temporary)
```

#### Parameters

*vendor*<br>
&emsp;Type: Record  Vendor<br>

Vendor record to validate the address with.

*buffer*<br>
&emsp;Type: Record  "bdev.Address Validation Buffer"<br>

Temporary "bdev.Address Validation Buffer" record to be filled with the table data.


### `GetValidationBuffer()`

Fill the validation buffer table with Alternative Address record data.


#### Syntax

```al
GetValidationBuffer(altAddress: Record "Alternative Address", var buffer: Record "bdev.Address Validation Buffer" temporary)
```

#### Parameters

*altAddress*<br>
&emsp;Type: Record  "Alternative Address"<br>

Alternative Address record to validate the address with.

*buffer*<br>
&emsp;Type: Record  "bdev.Address Validation Buffer"<br>

Temporary "bdev.Address Validation Buffer" record to be filled with the table data.


### `SetHideAddressSelection()`

Sets to hide or show (default) the address validation selection
if mutliple addresses where received.


#### Syntax

```al
SetHideAddressSelection(value: Boolean)
```

#### Parameters

*value*<br>
&emsp;Type: Boolean <br>

New value to set for HideAddressSelection


