# Import Assistant

The 365 business E-Invoice Import Assistant is the central module that helps you resolve issues during the processing of ZUGFeRD PDF files or the creation of e-invoices.

If a problem occurs during the creation of an e-invoice (either automated via a linked email account or manually through uploading a ZUGFeRD PDF file), the creation process will pause and require your input to proceed.

Possible causes for issues include:
* Unknown vendors
* Missing links between your items and vendor items
* Incorrect assignment of units of measure to items.

<div class="alert alert-notice">
	<i class="fa-light fa-hand-point-up fa-lg"></i>
    <strong>Good to know</strong>The assignment of items and G/L accounts is done individually for each vendor to prevent incorrect automatic linking of similar item or G/L account numbers.
	<br/>Units of measure, on the other hand, are stored in "E-Document Services" under "365 ZUGFERD" and "Import Mapping".
</div>

<div class="alert alert-info">
	<i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i>
    <strong>Info</strong>Once an item, G/L account, or unit of measure is assigned, it will be automatically recognized and applied by 365 business E-Invoice for recurring items, G/L accounts, and units.
</div>

<div class="alert alert-info">
	<i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i>
    <strong>Info</strong>Existing item assignments can be removed via the "Item References", and G/L account assignments via "Text-to-Account Mapping" for each vendor.
	<br/>The removal of unit of measure assignments, however, is done in "E-Document Services" under "365 ZUGFERD" and "Import Mapping".
</div>

<br/>

## Resolving Issues with the Import Assistant

To identify problematic e-invoices, use the Business Central search and go to the "E-Documents" section.
You can recognize problem cases by the "Error" status in the "Electronic Document Status" column.

1. Open "E-Documents" using the Business Central search.
2. Identify the faulty document and open it.
3. In the "E-Document" view, you can expand the "Error Messages" section to view details about the issues.

![365 business E-Invoice](/assets/images/365-business-e-invoice/e-document-overview_en.png)

## Step-by-Step Problem Resolution

Launch the "Import Assistant" using the corresponding button in the view of the selected E-Document.

The Import Assistant will guide you through resolving the issues step by step. At the start, you will be informed about how many issues need to be resolved for the e-invoice to be created.
The affected PDF file will be displayed visually on the right side to assist with the process.
Click "Next" to begin resolving the issues one by one.

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i>
    <strong>Info</strong> You can cancel and restart the 365 business E-Invoice Import Assistant at any time.
</div>

![365 business E-Invoice](/assets/images/365-business-e-invoice/assistent1_en.png)

<br/>

### Vendor

If the vendor from the ZUGFeRD PDF file is not automatically recognized, the Import Assistant will start with this assignment.
<br/>
Select the appropriate vendor or create a new vendor.

![365 business E-Invoice](/assets/images/365-business-e-invoice/assistent2_en.png)

<br/>

### Invoice Lines (Items and G/L Accounts)

Next, all invoice lines will be displayed for which no automatic link to one of your items or G/L accounts was found.
<br/>
Select the corresponding item or G/L account to create the link.

![365 business E-Invoice](/assets/images/365-business-e-invoice/assistent3_en.png)

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i>
    <strong>Info</strong> For each invoice line, you can choose whether it is an item or a G/L account.
    <br/>Depending on your selection, the available data you can assign will change.
</div>

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i>
    <strong>Info</strong> The current invoice line will be highlighted in the PDF view on the right side to help you keep track.
</div>

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i>
    <strong>Info</strong> If an item is not available, you can ignore it for now and link it to a purchase line in a later step.
    <br/>Once an item has been successfully assigned, it will be automatically recognized in the future.
</div>

<br/>

### Units of Measure

In cases where the units of measure for the invoice lines are not correctly recognized or assigned, the Import Assistant helps you manually assign the appropriate units (e.g., pieces, kilograms, liters).
<br/>
This is particularly important to ensure that the invoice is calculated correctly, as different vendors may use different units for the same item.
<br/>
Select the appropriate unit of measure.

![365 business E-Invoice](/assets/images/365-business-e-invoice/assistent4_en.png)


<br/>

### Completion of Issue Resolution

After all issues have been resolved, the e-invoice is created by clicking "Finish", and the Import Assistant closes.
<br/>
The status of the document will change from "Error" to "In Progress".
