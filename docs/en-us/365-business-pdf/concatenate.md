# Concatenate Documents

With 365 business PDF, you can link PDF files generated from Microsoft Dynamics 365 Business Central to other PDF files and merge them into one file. For example, you can attach your terms and conditions to all your order confirmation documents generated from Microsoft Dynamics 365 Business Central.

The setup is done on the **PDF Concatenation Configurations** page. Multiple chaining configurations can be created here.

## How do I create a concatenation configuration?

1. Open the page **PDF Concatenation Configurations**.
2. Select **New**.
3. Specify a value in **Code** field.
4. Specify a **Description** for the configuration.
5. Create a new configuration line.
6. Select the **Position** (Before/After) to concatenate the PDF file with the printed document.
   <div class="alert alert-info"><i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Info</strong> If you want to attach several files before or after the actual document or report, you can specify the order in the <b>Position No.</b> field.</div>
7. Select the **PDF File Code** for the PDF file you want to concatenate.
   <div class="alert alert-info"><i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Info</strong> PDF files must be created in the <a href="pdf-files.md">PDF files</a> page before use.</div>

![Concatenate Configuration](/assets/images/365-business-pdf/concatenate-configuration.png)  

## How can I specify when to apply the configuration?

You can specify for which action you want to apply the configuration. For example, a common scenario is that you do not want to chain the conditions when you perform a print action because you are printing on company paper that already has the conditions on the back.

You can specify the application for each configuration in the **Application** group on the **PDF Chaining Configuration** page.

## See also
 - [Document Attachments](document-attachments.md)