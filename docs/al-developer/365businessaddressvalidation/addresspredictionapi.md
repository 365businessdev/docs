---
title: bdev.Address Prediction API
---

# bdev.Address Prediction API

The bdev.Address Prediction API codeunit object is providing the Address Prediction
functionalities and allows other extensions to integrate.

## Properties

| Property | Value |
| --- | --- |
| Object Type | Codeunit |
| Object Subtype | Normal |
| Object ID | 5523621 |
| Accessibility Level | Public | 

## Procedures

### `InitializeAddressPrediction()`

Reset and initialize Address Prediction instance.


#### Syntax

```al
InitializeAddressPrediction()
```

### `OnControlAddInReady()`

Activate "bdev.Address Autocomplete" Control Add-In on OnControlReady() event.


#### Syntax

```al
OnControlAddInReady(tableNo: Integer, control: ControlAddIn "bdev.Address Autocomplete")
```

#### Parameters

*tableNo*<br>
&emsp;Type: Integer <br>

Table No. the Address Prediction is invoked for. Subscribe to OnIsAddressPredictionEnabled(Integer, var Boolean) event in "bdev.Address Prediction" Codeunit to support custom tables.

*control*<br>
&emsp;Type: ControlAddIn  "bdev.Address Autocomplete"<br>

Control Add-In from the current page.


### `BindAddressPrediction()`

Bind list of fields from current page.


#### Syntax

```al
BindAddressPrediction(fieldNames: Dictionary of [Text, Enum "bdev.Address Prediction Type"], control: ControlAddIn "bdev.Address Autocomplete")
```

#### Parameters

*fieldNames*<br>
&emsp;Type: Dictionary  of [Text, Enum "bdev.Address Prediction Type"]<br>

Dictionary of fieldnames with their address prediction type. Use type to specify address prediction should look up for address or establishment.

*control*<br>
&emsp;Type: ControlAddIn  "bdev.Address Autocomplete"<br>

Control Add-In from the current page.


### `BindAddressPrediction()`

Bind list of fields from current page.
> All fields will be added as type "Address".


#### Syntax

```al
BindAddressPrediction(fieldNames: List of [Text], control: ControlAddIn "bdev.Address Autocomplete")
```

#### Parameters

*fieldNames*<br>
&emsp;Type: List  of [Text]<br>

List of fieldnames.

*control*<br>
&emsp;Type: ControlAddIn  "bdev.Address Autocomplete"<br>

Control Add-In from the current page.


### `BindAddressPrediction()`

Bind field from current page.
> Field will be added as type "Address".


#### Syntax

```al
BindAddressPrediction(fieldName: Text, control: ControlAddIn "bdev.Address Autocomplete")
```

#### Parameters

*fieldName*<br>
&emsp;Type: Text <br>

Fieldname.

*control*<br>
&emsp;Type: ControlAddIn  "bdev.Address Autocomplete"<br>

Control Add-In from the current page.


### `BindAddressPrediction()`

Bind field from current page.


#### Syntax

```al
BindAddressPrediction(fieldName: Text, addrPreditionType: Enum "bdev.Address Prediction Type", control: ControlAddIn "bdev.Address Autocomplete")
```

#### Parameters

*fieldName*<br>
&emsp;Type: Text <br>

Fieldname.

*addrPreditionType*<br>
&emsp;Type: Enum  "bdev.Address Prediction Type"<br>

Specify address prediction should whether look up for address or establishment.

*control*<br>
&emsp;Type: ControlAddIn  "bdev.Address Autocomplete"<br>

Control Add-In from the current page.


### `UnbindAddressPrediction()`

Unbind field from current page.


#### Syntax

```al
UnbindAddressPrediction(fieldName: Text, control: ControlAddIn "bdev.Address Autocomplete")
```

#### Parameters

*fieldName*<br>
&emsp;Type: Text <br>

Fieldname.

*control*<br>
&emsp;Type: ControlAddIn  "bdev.Address Autocomplete"<br>

Control Add-In from the current page.


### `GetAddressPredictions()`

Get address predictions based on the given input for specified fieldname.


#### Syntax

```al
GetAddressPredictions(fieldName: Text, input: Text, control: ControlAddIn "bdev.Address Autocomplete")
```

#### Parameters

*fieldName*<br>
&emsp;Type: Text <br>

Fieldname.

*input*<br>
&emsp;Type: Text <br>

Current input by the user.

*control*<br>
&emsp;Type: ControlAddIn  "bdev.Address Autocomplete"<br>

Control Add-In from the current page.


### `GetSelectedAddressPrediction()`

Get address dictionary for given address prediction id.
Invoke this procedure from OnPredictionSelected(Text, Text) trigger of the control add-in.


#### Syntax

```al
[Boolean] := GetSelectedAddressPrediction(var address: Dictionary of [Text, Text], addressType: Enum "bdev.Address Prediction Type", id: Text)
```

#### Parameters

*address*<br>
&emsp;Type: Dictionary  of [Text, Text]<br>

Out variable containing address dictionary.

*addressType*<br>
&emsp;Type: Enum  "bdev.Address Prediction Type"<br>

Specify address prediction type. Select whether address or establishment.

*id*<br>
&emsp;Type: Text <br>

Address prediction id.


#### Return

*Boolean*<br>


### `GetAddressType()`

Get address prediction type for specified fieldname.

#### Syntax

```al
[Enum "bdev.Address Prediction Type"] := GetAddressType(fieldName: Text)
```

#### Parameters

*fieldName*<br>
&emsp;Type: Text<br>

Fieldname.

#### Return

*Enum "bdev.Address Prediction Type"*<br>
Return value of type Enum "bdev.Address Prediction Type".