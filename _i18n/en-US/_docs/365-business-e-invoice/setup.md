After installing 365 business E-Invoice, the app is ready to generate electronic invoices.  
For receiving an electronic invoice, an email mailbox is currently sufficient. In addition to sending via email, providing the data through an electronic interface or downloading it are also possible options.  
We recommend integrating one or more email mailboxes for the automatic processing of e-invoices in Microsoft Business Central.

#### Setting up email mailboxes

In order to process e-invoices from email mailboxes, they need to be configured.

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Note:</strong> 365 business E-Invoice currently only supports email mailboxes of the "Microsoft 365" account type!
</div>

1. Open "E-Document Service" through the Business Central search.  
2. Select "365 ZUGFERD" and, in the following dialog, click "Setup Service Integration."  
3. In the "E-Invoice Mailbox Setup" dialog, click "New" and enter a name for the email mailbox (e.g., InvoiceMailbox).  
4. Then, click on the value in the "Email Address" column; a new window will open where you can define your email mailbox.  
5. Click the three dots, then select "New" and "Add email account."  
6. In the "Set up Email" window, follow the instructions for setting up the email mailbox with the "Microsoft 365" account type.

![365 business E-Invoice Mailbox](/assets/images/365-business-e-invoice/mailbox_en.png)

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
