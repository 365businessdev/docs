# Automated sanctions screening during document release

365 business Sanction Screen supports automated sanctions list screening in Microsoft Dynamics 365 Business Central during document release in sales and purchasing documents. 

## Before you start

On the **Sanction Screen Setup** page, you can specify which document types in sales and purchasing should be screened automatically during release.

![365 business Sanction Screen - Setup](/assets/images/365-business-sanction-screen/sanctionscreen-autochecksetup.en-US.png)

There are 3 options available.
1. “No” - The sanctions list screening is disabled for the document type during release.
2. “Yes” - The sanctions list screening is performed automatically when the document is released, provided that the sanctions screening interval requires it.
3. “Always” - The sanctions list screening is always performed automatically when the document is released, regardless of the sanctions screening interval.

## See also

- [Setup](setup.md)
- [Data catalogs for sanctions checks](data-sources.md)