On the **365 business API Setup** page, all relevant information for setting up and using the 365 business API is stored.

The page includes the following areas:

#### General
The General section contains two pieces of information:
##### API Address (URL).
Specifies the URL to connect to the 365 business API services. The value is set automatically during installation and does not need to be changed.
The default value is: `https://365businessapi.azurewebsites.net`

> Info<br>Customers who have Development access can store the URL to the Development System in this field. Transactions with the Development System will not be charged. However, please note that the data sent to the Development System is not encrypted and can be further processed by our team.

##### API Authentication Key
Specifies the API authentication key (API key for short) for the 365 business API. This API key authenticates you to the 365 business API and is used for billing purposes.
Communication without a valid API key is not possible.

> Info<br>You will receive an API key after successful registration. For more information, see [{% t titles.get-started %}](../get-started).

#### Version
This section displays information about currently used API version. In addition, you have the possibility to select specific API service versions here, if corresponding API modules have been installed.

#### API modules
In this area you can see the other 365 business API modules from the Microsoft AppSource. You can install them via the *Get it from Microsoft AppSource* link.

### See also
 - [{% t titles.get-started %}](../get-started)
 - [{% t titles.registration %}](../registration)