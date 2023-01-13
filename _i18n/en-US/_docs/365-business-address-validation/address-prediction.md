Address prediction is an *Auto-Complete* functionality implemented in Microsoft Dynamics 365 Business Central to help users capture postal addresses and organizational and company information without errors.

![Address Prediction](/assets/images/365-business-address-validation/addressprediction.en-US.gif)

#### In which tables is the address prediction available?

Address prediction is implemented in the master data tables Contact, Customer, Vendor, Resource and Employee. The following fields are implemented for address prediction by default:

| Table | Field | Prediction | Note |
| --- | --- | --- | --- | 
| Contact | Name | Organizations and companies, as well as their postal address and other information. | *Only activated for contacts of **type** companies.* |
| Contact | Address | Postal addresses. | |
| Customer | Name | Organizations and companies, as well as their postal address and other information. | |
| Customer | Address | Postal addresses. | |
| Vendor | Name | Organizations and companies, as well as their postal address and other information. | |
| Vendor | Address | Postal addresses. | |
| Resource | Address | Postal addresses. | |
| Employee | Address | Postal addresses. | |

#### What additional information is obtained from organizations and companies?

The additional information depends on the actual data available in our data sources. Usually, however, in addition to the postal address and the company name, the following information is determined:
 
 - Homepage
 - Phone No.

#### Why are only a maximum of four results displayed?

In [Address Validation Setup](../setup/) you can specify the max. number of predictions shown initially. The default value is four, but can modified according to the business needs.

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Tip:</strong> By clicking the <i>Load more...</i> action in the address prediction list, all additional predictions will be shown.
</div>

### See also 
 - [Address Validation Setup](setup/)
 - [Address Validation](address-validation/)