Sanction screenings can be performed with 365 business Sanction Screen in Microsoft Dynamics 365 Business Central for various entities. The results of the screenings are displayed in the respective card view and can be further processed.

### Types of Sanction Screenings

365 business Sanction Screen provides two types of sanction screenings:

- Manual sanction screening
- Automated sanction screening

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Note:</strong>To ensure optimal sanction list screening, we recommend configuring the screening intervals of individual entities (e.g., customer) in the <strong>Sanction Screen Setup</strong> and using the <a href="../automated-screening/">automated screening</a>.
</div>

### Supported Entities

The following Microsoft Dynamics 365 Business Central entities are supported by 365 business Sanction Screen:

- Customer
- Vendor
- Contact
- Bank Account
- Employee

<div class="alert alert-notice">
    <i class="fa-solid fa-notes"></i> <strong>Good to know:</strong>365 business Sanction Screen is continuously being developed and expanded to include additional entities. Please check regularly for updates and new features.<br>
    Additionally, you can extend the sanction screening individually for custom entities. For more information, see <a href="../../al-developer/">here</a>.
</div>

### Performing a Sanction Screening

Follow these steps to perform a sanction screening:

1. Open the page (e.g., customers) in Microsoft Dynamics 365 Business Central.
2. Select the desired record.
3. Select the action **Sanction Screening...** to start the sanction screening.

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Note:</strong>If the sanction list screening was successful and no potential matches were found, the following message appears:<br>
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
    <i class="fa-solid fa-notes"></i> <strong>Good to know:</strong>In the detail view of the sanction match entry, you can retrieve additional information, such as the reason for the sanction, the sanctioning authority, and more, by selecting the action <strong>Retrieve Additional Information...</strong>.
</div>

#### Processing Sanction List Matches

If the sanction match is a **false positive**, follow these steps:

1. Select the action **Add Match to Whitelist...**.
2. In the **Add Match to Whitelist** page, you can add the sanction match entry to the whitelist to avoid future matches. You must provide a reason and confirm the action with **OK**.<br>
   ![Add Match to Whitelist](/assets/images/365-business-sanction-screen/sanctionscreen-whitelist-entry.en-US.png)

<div class="alert alert-notice">
    <i class="fa-solid fa-notes"></i> <strong>Good to know:</strong>The permission set <strong>Sanction Screening - Whitelist</strong> is required to add a sanction match entry to the whitelist.
</div>

### See Also

- [Setup](../setup/)
- [Data Catalogs for Sanction Screening](../data-sources/)
- [Automated Sanction List Screening](../automated-screening/)
