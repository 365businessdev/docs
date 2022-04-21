# 365 business Address Validation
The `365 business Address Validation` app implements the `365 business API` services `Address Validation`. The app is providing Address Validation and Address Completion capabilities. The app is supporting the following entities:
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

#### Methods
The following methods are available:

| Method | Description |
| --- | --- |
| [AddressValidationEnabled](addressvalidationapi/AddressValidationEnabled.md) | Test whether the address validation is enabled for the specific table or not. | 
| [GetValidationBuffer](addressvalidationapi/GetValidationBuffer1.md) | Fill the validation buffer table with Contact record data. | 
| [GetValidationBuffer](addressvalidationapi/GetValidationBuffer2.md) | Fill the validation buffer table with Customer record data. | 
| [GetValidationBuffer](addressvalidationapi/GetValidationBuffer3.md) | Fill the validation buffer table with Vendor record data. | 
| [GetValidationBuffer](addressvalidationapi/GetValidationBuffer4.md) | Fill the validation buffer table with Alternative Address record data. | 
| [SetHideAddressSelection](addressvalidationapi/SetHideAddressSelection.md) | Sets to hide or show (default) the address validation selection if multiple addresses where received. | 
| [Validate](addressvalidationapi/Validate1.md) | Validate and auto-complete a Contact address. | 
| [Validate](addressvalidationapi/Validate2.md) | Validate and auto-complete a Customer address. | 
| [Validate](addressvalidationapi/Validate3.md) | Validate and auto-complete a Vendor address. | 
| [Validate](addressvalidationapi/Validate4.md) | Validate and auto-complete a alternative address. | 
| [Validate](addressvalidationapi/Validate5.md) | Validate and auto-complete a order address. | 
| [Validate](addressvalidationapi/Validate6.md) | Validate and auto-complete a ship-to address. | 
| [Validate](addressvalidationapi/Validate7.md) | Validate and auto-complete a address given in the validation buffer. | 
