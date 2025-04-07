---
title: Address Validation
---
Address validation is a function implemented in Microsoft Dynamics 365 Business Central for checking and, if necessary, completing addresses that have already been entered, as well as addresses that are transferred to Microsoft Dynamics 365 Business Central via interfaces (e.g. from online stores).

With the help of address validation, it is possible to clean up the database and check whether it is up-to-date.

![Address Validation](/assets/images/365-business-address-validation/addressvalidation.en-US.gif)

The address validation can be executed in different ways:

 - Automatic validation on address change,
 - Manual validation via the action *Check address* and
 - Batch processing execution (e.g. *Check contact addresses*).

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Note:</strong> The automatic validation on address change is only executed if the <a href="address-prediction.md">address prediction</a> was not used to select the address.
</div>

#### How can I check the address data before they are applied?

In the [Address Validation Setup](setup.md), **Address Verification** can be enabled to compare the original address and the validated address before updating address data.

![Address Validation](/assets/images/365-business-address-validation/address-compare.en-US.png)

#### How can I change suggested address data?

The AssistEdit `...` button next to the respective address field can be used to manually change the suggested field value. 365 business Address Validaition saves this manual adjustment for the future to prevent repeated corrections.
Your manual input will be defined as default.

![Address Validation](/assets/images/365-business-address-validation/address-compare.en-US.gif)

#### Why are multiple addresses displayed?

In some cities or towns, for example, street names are used more than once and thus cannot be clearly assigned without specifying the correct postal code. In some cases street names are very similar and abbreviated or misspelled street names cannot be clearly identified.

### See also 
 - [Address Validation Setup](setup.md)
 - [Address Prediction](address-prediction.md)