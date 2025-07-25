# Introduction

Flawless customer master data is the prerequisite for actually reaching your customer. Addresses come into your company in many ways: They are transmitted and stored via telephone, sales, letter contact, e-mail, Internet, etc.. Typing errors or mispronunciations can easily occur, which are then transferred to the database without being checked. This can have far-reaching consequences.

If the database is not correct, marketing campaigns fizzle out ineffectively, invoices cannot be delivered, and the return rates and wastage of mailings increase. The result: customers react angrily to inadequate addressing, duplicate letters or non-delivery. Complaints not only lead to increased work in the service center, but can also seriously damage your image. And that quickly affects your sales.

![365 business Address Validation](/assets/images/365-business-address-validation/logo.png)  

With 365 business Address Validation, you can have your address data checked and automatically completed within Microsoft Dynamics 365 Business Central. In addition, 365 business Address Validation, with its [address prediction](address-prediction.md) function, offers you a function with which you can reduce the effort involved in entering new address data and at the same time significantly increase your address quality.
This eliminates transmission errors such as spelling, reading, hearing or typing errors and cleans them up with the support of the system.

## Which application areas are supported?

The following application areas are supported in the current version:

| Application area | Address validation | Address prediction | Comment |
| --- | --- | --- | --- |
| **Contact** | Yes | |
| **Customer** | Yes | Yes | |
| **Vendor** | Yes | Yes | |
| **Resource** | Yes | Yes | |
| **Employee** | | Yes | *Address validation is currently not available for Employee.* |
| **Sales Documents** | Yes | | *Address prediction is currently not available for Sales Documents.* |
| **Purchase Documents** | Yes | | *Address prediction is currently not available for Purch. Documents.* |

The existing integration can be enabled or disabled through the [Address Validation Setup](setup.md).<br>Learn more at [Get Started](get-started.md).

<div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Info</strong> Additional integrations can be easily connected via the provided API.<br>Learn more in our <a href="https://docs.365businessdev.com/en-US/al-developer/365businessaddressvalidation/">Developer Documentation</a>.
</div>

## How does the address prediction work?

Address prediction is integrated directly into the standard pages within Microsoft Dynamics 365 Business Central and does not need to be called up separately.
Typically, the function is available on the **Name** and **Address** fields.

![Address Prediction](/assets/images/365-business-address-validation/addressprediction.en-US.gif)

<div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Info</strong> The address prediction in the <b>Name</b> field searches for companies and organizations for Customers, Vendors and Company Contacts. In addition, further organizational information is determined and supplemented if necessary.<br><br>In the <b>Address</b> field, on the other hand, only a valid postal address is searched for.
</div>

For more information on [address prediction](address-prediction.md), please refer to the more detailed [documentation](address-prediction.md).

## How does address validation work?

Address validation takes place automatically and is performed in real time after an address is entered or changed, unless [address prediction](address-prediction.md) has already been used.

![Address Validation](/assets/images/365-business-address-validation/addressvalidation.en-US.gif)

Depending on the settings in the [**address validation setup**](setup.md), the [address data comparison](address-validation.md#how-can-i-check-the-address-data-before-they-are-applied) may be displayed, allowing you to check the differences in validation and accept or reject the address change.

For more information on [address validation](address-validation.md), see the more detailed [documentation](address-validation.md).

## Which countries and languages are supported?

Address validation can be performed in a wide variety of languages and scripts, such as Arabic, Greek, Cyrillic or Hangul. 
Due to the extensive reference databases for validation, worldwide address validations are also supported.
The detailed address matching, which is often accurate to the house number, also ensures high quality address data.

## See also 
 - [Get Started](get-started.md)
 - [Address Validation Setup](setup.md)
 - [Address Prediction](address-prediction.md)
 - [Address Validation](address-validation.md)
