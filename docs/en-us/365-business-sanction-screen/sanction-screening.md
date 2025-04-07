---
title: Sanction Screening
---
Sanction screenings can be performed with 365 business Sanction Screen in Microsoft Dynamics 365 Business Central for various entities. The results of the screenings are displayed in the respective card view and can be further processed.

### Types of Sanction Screenings

365 business Sanction Screen provides two types of sanction screenings:

- Manual sanction screening
- Automated sanction screening

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Note:</strong>To ensure optimal sanction list screening, we recommend configuring the screening intervals of individual entities (e.g., customer) in the <strong>Sanction Screen Setup</strong> and using the <a href="automated-screening.md">automated screening</a>.
</div>

### Supported Entities

The following Microsoft Dynamics 365 Business Central entities are supported by 365 business Sanction Screen:

- Customer
  - Bank Account
  - Ship-to Address
- Vendor
  - Bank Account
  - Remit Address
  - Order Address
- Contact
- Bank Account
- Employee

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Notice:</strong>Sanction screening with 365 business Sanction Screen is open for custom entities.<br>For more information, see <a href="../../al-developer/al-developer.md">here</a>.
</div>

Additionally, the following documents are supported:

- Sales Documents
  - Sales Quote
  - Sales Order
  - Sales Invoice
  - Sales Credit Memo
- Purchase Documents
  - Purchase Quote
  - Purchase Order
  
<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg" style="--fa-secondary-color: #FF0000; --fa-primary-color: #111111; --fa-secondary-opacity: 0.7"></i> <strong>Good to know:</strong>When screening documents, the different addresses (e.g. ship-to address) are checked individually if they differ. Additionally, it is checked whether the address has already been checked (e.g. customer address), and the corresponding source is displayed:<br>
    <img src="/assets/images/365-business-sanction-screen/sanction-screen-with-sources.en-US.png" alt="Sanction Screening with Source Indication">
</div>

### Performing a Sanction Screening

Follow these steps to perform a sanction screening:

1. Open the page (e.g., customers) in Microsoft Dynamics 365 Business Central.
2. Select the desired record.
3. Hover over the sanction screening indicator and select the action **Invoke Sanction Screening**.

![Invoke Sanction Screening](/assets/images/365-business-sanction-screen/sanction-screen-check.en-US.gif)

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Note:</strong>If the sanction list screening was successful and no potential matches were found, the following message appears:<br>
    <img src="/assets/images/365-business-sanction-screen/sanctionscreen-no-matches-message.en-US.png"><br>
    In this case, no further action is necessary.
</div>

#### Reviewing Sanction List Matches

If potential matches were found, the following message appears:

![Sanction Screening Results - Potential Matches Found](/assets/images/365-business-sanction-screen/sanctionscreen-matches-found-message.en-US.png)

To review the potential matches, follow these steps:

1. In the **Sanction Match Entries** page, the potential matches are displayed.
2. Select the **Sanction Match** to get more information.

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg" style="--fa-secondary-color: #FF0000; --fa-primary-color: #111111; --fa-secondary-opacity: 0.7"></i> <strong>Good to know:</strong>In the detail view of the sanction match entry, you can retrieve additional information, such as the reason for the sanction, the sanctioning authority, and more, by selecting the action <strong>Retrieve Additional Information...</strong>.
</div>

#### Processing Sanction List Matches

If the sanction match is a **false positive**, follow these steps:

1. Select the action **Add Match to Whitelist...**.
2. In the **Add Match to Whitelist** page, you can add the sanction match entry to the whitelist to avoid future matches. You must provide a reason and confirm the action with **OK**.<br>
   ![Add Match to Whitelist](/assets/images/365-business-sanction-screen/sanctionscreen-whitelist-entry.en-US.png)

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg" style="--fa-secondary-color: #FF0000; --fa-primary-color: #111111; --fa-secondary-opacity: 0.7"></i> <strong>Good to know:</strong>The permission set <strong>Sanction Screening - Whitelist</strong> is required to add a sanction match entry to the whitelist.
</div>

### See Also

- [Setup](setup.md)
- [Data Catalogs for Sanction Screening](data-sources.md)
- [Automated Sanction List Screening](automated-screening.md)
