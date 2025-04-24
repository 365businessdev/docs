# Introduction

![365 business PDF](/assets/images/365-business-pdf/logo.png)  

With 365 business PDF for Microsoft Dynamics 365 Business Central, you can apply a digital stationery (PDF file), digitally sign your documents, or attach other PDF files, such as terms and conditions or cover sheets, before or after the report created from Microsoft Dynamics 365 Business Central without the additional customization of the report layout.

## Functions at a glance

![365 business PDF](/assets/images/365-business-pdf/365businesspdf.gif)  

### Digital Stationery

If documents, such as order confirmations, delivery bills and invoices, are not only created and sent digitally as PDF files, but are also printed out in addition, the question often arises as to how the stationery should be handled. If the stationery is in the printer as a preprint, the stationery may not be printed from Business Central. If the letterhead is sent electronically as a PDF file, however, it must be included.

365 business PDF allows via the [PDF Stationery Configuration](stationery.md) the storage of stationery, which is automatically applied. It is not necessary to create additional report layouts or provide radio buttons in the report.

### Linking documents

You send a complex offer and want to send the supplementary documents together with the offer? Or do you want your current general terms and conditions (GTCs) to be automatically attached to each order confirmation? 

With the [PDF Concatenation Configuration](concatenate.md) in 365 business PDF you can attach any number of documents, before or after the actual document created from Microsoft Dynamics 365 Business Central.

#### Document Attachments

In addition to concatenating documents using the [PDF Concatenation Configuration](concatenate.md), 365 business PDF supports [Document Attachments](document-attachments.md) which can be defined directly on the document. The document attachments are applied in addition to the concatenation using the [PDF Concatenation Configuration](concatenate.md).

![365 business PDF - Document Attachments](/assets/images/365-business-pdf/365businesspdf-doc-attachments.gif)

Currently, the action Document Attachments can be found in:

 - Sales Quote
 - Sales Order
 - Purchase Quote
 - Purchase Order

Other areas can be made available via the internal API of 365 business PDF if required.

### Digital Signature

Protect your documents created from Microsoft Dynamics 365 Business Central from tampering by digital signature!

With the [PDF Signing Configuration](signing.md) in 365 business PDF you protect your documents without any additional effort.

## Which application areas are supported?

In the current version, the integration is provided in the Microsoft standard for all reports that are controlled via the report selection (Report Selections). These include:

| Area | Configuration Page |
| --- | --- |
| Purchasing | Report Selection - Purchasing |
| Sales | Report selection - Sales |
| Dunning | Report selection - Reminder |
| Project | Report selection - Project |
| Service | Report selection - Service |

# See also
 - [PDF Stationery Configuration](stationery.md)
 - [PDF Document Concatenate Configuration](concatenate.md)
 - [PDF Signing Configuration](signing.md)
 - [Document Attachments](document-attachments.md)