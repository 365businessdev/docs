# Address Validation Status

As part of the 365 business Address Validation App, the *Address Validation* role center is delivered. The role center gives you an overview of the address data quality of the integrations enabled in the [Address Validation Setup](setup.md).

![Address Validation Role Center](/assets/images/365-business-address-validation/rolecenter.en-US.png)

The cues in the role center (e.g. *Contacts*) provide you with a quick overview of the number of validated and unchecked address data in Microsoft Dynamics 365 Business Central. This view is particularly interesting with regard to the connection of third-party systems, such as online stores or marketplaces, as new and possibly unchecked addresses are displayed directly.

Clicking on the respective cues or using the search function will take you to the **Address Validation Status** view, which displays the validated and unchecked address data.

**Note**<br>Only tables for which address validation is enabled in the [Address Validation Setup](setup.md) are monitored via the address validation status.

![Address Validation Status](/assets/images/365-business-address-validation/address-validation-status.en-US.png)

In page Address Validation Status you will find the last recorded address of the respective data record and can display the corresponding source data record by clicking on the column **Record ID**. Furthermore, you have the possibility to check an address manually by selecting the action **Check address**.

## Can I manually validate addresses to prevent further validation?

In some cases it may make sense to check an address manually. This can also be done via the view Status of the address validation. For this purpose, the action **Set Validated** is available under Actions group. Until the next change to the source data record, no further validation is performed and the address data record is marked as **Validated**.

# See also 
 - [Address Validation Setup](setup.md)
 - [Address Validation](address-validation.md)