---
title: AL Developer
---

Welcome to the `365 business API` Implementation Guide. With this guide we want to enable you to implement the functionalities for the 365 business API into your Microsoft Dynamics 365 Business Central application.

We recommend to start with [Get Started](get-started.md) document and go further from there.

Following the in this documentation covered apps are listed:

| Name | Description |
| --- | --- |
| [365 business API](365businessapi/README.md) | Base library app, to consume 365 business API services. |
| [365 business Barcode](365businessbarcode/README.md) | Encode and decode 1D- and 2D-barcodes. |
| [365 business PDF](365businesspdf/README.md) | Digitally sign, apply stationery and concatenate PDF documents. |
| [365 business Address Validation](365businessaddressvalidation/README.md) | Validate and complete address data. |
| [365 business Mailchimp Integration](365businessmailchimpintegration/README.md) | Interface between Mailchimp and Business Central. |
| [Find & Replace](find-and-replace/README.md) | Find & Replace functionality for Microsoft Dynamics 365 Business Central. |
| [365 business Print Agent](365businessprintagent/README.md) | Print documents directly from Microsoft Dynamics 365 Business Central. |
| [365 business E-Invoice](365businesseinvoice/README.md) | Send and receive electronic invoices directly from Microsoft Dynamics 365 Business Central. |

#### Frequently Asked Questions

##### Can I develop my own application based on a 365 business API service?
Yes, you can. The `365 business API` is a open and well documented API.

We strongly recommend to use the `365 business API` app as base library, but you can also develop your own connection library instead. You will find all necessary information to learn how to use the `365 business API` app at this guide.

##### Where do I find a detailed API documentation?
The API documentation is available at: https://api-doc.365businessdev.com/

##### Can I use my API key for development?
Yes, you can. The subscription API keys are also enabled for development purpose within our `testing` slot we provide for developers.

Nevertheless we recommend to register for a developer API key to make sure that your personal API key will not become public.

##### Can I use a API key for multiple customers?
Yes, you can. The API key is only for tracking usage and providing accounting data.

Nevertheless we recommend to register each customer with a seperate API keys to be able to provide a more detailed accounting. You can request for a collective invoice instead of single invoice per API key to reduce your internal effort.

##### Can I change the 365 business development apps I refer to?
No, but you can use one of your publisher events to change the way the app is working. Further you can address enhancements and issues directly to our development team, using the integrated feedback system.