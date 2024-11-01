
Receiving an electronic invoice is currently possible via an email inbox. Alternatively, invoices can also be provided through an electronic interface or made available for download.
<br/>
We recommend integrating one or more email inboxes in Microsoft Business Central to streamline the automated processing of e-invoices.

### E-Document Import

#### Setting up email mailboxes

To process e-invoices from email inboxes, it is necessary to configure these inboxes accordingly.

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Note:</strong> 365 business E-Invoice currently only supports email mailboxes of the "Microsoft 365" account type!
</div>

1. Open 365 business E-Invoice Setup" through the Business Central search.  
2. Click on "New Line" and then on the three dots in the "Name" field.
3. In the "Email Accounts" window, select an existing email account or click on the three dots, then choose "New" and "Add Email Account."
4. In the "Set Up Email" window, please follow the dialog instructions for the "Microsoft 365" account type to configure the email mailbox.

![365 business E-Invoice Mailbox](/assets/images/365-business-e-invoice/setup_en.png)

##### Optional: Enable automatic import

By enabling automatic import, invoices in ZUGFeRD format from PDF files in emails will be processed automatically.

<div class="alert alert-notice">
    <i class="fa-solid fa-notes"></i> <strong>Important:</strong> The user who enables automatic import must have access to this mailbox, otherwise, emails cannot be retrieved due to missing permissions.
</div>

1. Open "E-Document Services" through the Business Central search.  
2. Select "365 ZUGFERD."  
3. Enable "Automatic Import"  
4. Set the "Batch Start Time" if desired (the time when the import should occur).  
5. Set "Minutes between runs" (how often emails should be retrieved, 1440min = 24h).

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Note:</strong> Since processing emails is very resource-intensive, it is recommended to schedule processing during the night! Additionally, it is advisable not to set the execution interval too short.
</div>

<br/>

#### E-Document Export

After installing 365 business E-Invoice, the app is generally ready to generate e-invoices (PDF invoices including ZUGFeRD data).<br/>
All generated invoices (except for PDF files created via the "Print" button) are automatically ZUGFeRD-compliant.

If you wish to disable the automatic integration of ZUGFeRD data, follow these steps:
Wenn Sie die automatische Integration von ZUGFeRD-Daten deaktivieren möchten, gehen Sie wie folgt vor.

1. Open "365 business E-Invoice Setup" using the Business Central search.
2. Disable "Enable ZUGFeRD E-Invoice Export" under "E-Document Export".
