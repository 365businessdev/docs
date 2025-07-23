# Get Started

This quick guide explains how to perform a sanctions list check for a customer in Microsoft Dynamics 365 Business Central. The structure is fundamentally identical for all supported entities (e.g., vendor, contact, employee) and can be applied according to this quick guide.

<div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Info</strong>To ensure optimal sanctions list checking, we recommend configuring the check intervals for each entity (e.g., customer) in the <strong>Sanction Screen Setup</strong> and using the <a href="automated-screening.md">automated screening</a>.
</div>

## Prerequisites

 - Microsoft Dynamics 365 Business Central 2021 release wave 1 (18.0) or newer.

## Step 1: Install 365 business Sanction Screen

Open the **Extension Marketplace** in Microsoft Dynamics 365 Business Central and search for **365 business Sanction Screen**.
Install the app from Microsoft AppSource and wait for the installation to complete.

## Step 2: Sanctions Check Results

After installing 365 business Sanction Screen in Microsoft Dynamics 365 Business Central, you can perform the sanctions list check for customers, vendors, etc. The entity is checked for possible matches with the sanctions lists and the results are displayed.

Additionally, you will find the **Sanctions Check** view in the info area of the card views, which gives you an overview of the checks performed and possible hits.

### Sanctions Check Results - Possible Hits Found

If possible hits were found during the sanctions check, the following will be displayed in the info box:

![Sanctions Check Results - Possible Hits Found](/assets/images/365-business-sanction-screen/sanctionscreen.indicator.en-US.png)

### Sanctions Check Results - No Hits Found

If no hits were found during the sanctions check, the following will be displayed in the info box:

![Sanctions Check Results - No Hits Found](/assets/images/365-business-sanction-screen/sanctionscreen.indicator-good.en-US.png)

<div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Info</strong>If the record has not yet been checked, this will also be displayed accordingly in the info box. In this case, perform the sanctions list check for the record, or wait until the <a href="automated-screening.md">automated screening</a> has been performed.
</div>

## Step 3: Perform Sanctions List Check for a Customer

1. Open the **Customers** page in Microsoft Dynamics 365 Business Central.
2. Select the desired **Customer**.
3. Select the action **Sanctions Check...**.

<div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Info</strong>If the sanctions list check was successful and no possible matches were found, the following message will appear:<br>
    <img src="/assets/images/365-business-sanction-screen/sanctionscreen-no-matches-message.en-US.png"><br>
    In this case, no further action is necessary.
</div>

## Step 2.1: Review Sanctions List Hits

1. If possible matches were found, the following message will appear:<br>
    <img src="/assets/images/365-business-sanction-screen/sanctionscreen-matches-found-message.en-US.png"><br>
    <br>
    Select **OK** to review the possible matches.
2. On the **Sanction Hit Entries** page, the possible matches will be displayed.
3. Select the **Sanction Hit** to get more information.

<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Good to know</strong>In the detail view of the sanction hit entry, you can retrieve additional information, such as the reason for the sanction, the sanctioning authority, and more via the action <strong>Retrieve Additional Information...</strong>.
</div>

## Step 2.2: Process Sanctions List Hits

1. If the sanction hit is a **false match**, select the action **Add Hit to Whitelist...**.
2. On the **Add Hit to Whitelist** page, you can add the sanction hit entry to the whitelist to avoid future matches. You must provide a reason and confirm the action with **OK**.<br>
   ![Add Hit to Whitelist](/assets/images/365-business-sanction-screen/sanctionscreen-whitelist-entry.en-US.png)

<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Good to know</strong>The permission set <strong>Sanctions Check - Whitelist</strong> is required to add a sanction hit entry to the whitelist.
</div>

## See also

- [Setup](setup.md)
- [Data Catalogs for Sanctions Check](data-sources.md)
- [Automated Sanctions List Check](automated-screening.md)