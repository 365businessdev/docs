With 365 business PDF, you can link PDF files generated from Microsoft Dynamics 365 Business Central to other PDF files and merge them into one file. For example, you can attach your terms and conditions to all your order confirmation documents generated from Microsoft Dynamics 365 Business Central.

The setup is done on the **PDF Concatenation Configurations** page. Multiple chaining configurations can be created here.

#### How do I create a concatenation configuration?

1. Open the page **PDF Concatenation Configurations**.
2. Select **New**.
3. Specify a value in **Code** field.
4. Specify a **Description** for the configuration.
5. Create a new configuration line.
6. Select the **Position** (Before/After) to concatenate the PDF file with the printed document.
   > **Good to know**<br>If you want to attach several files before or after the actual document or report, you can specify the order in the **Position No.** field.
7. Select the **PDF File Code** for the PDF file you want to concatenate.
   > **Note**<br>PDF files must be created in the [PDF files](../pdf-files/) page before use.

![Concatenate Configuration](/assets/images/365-business-pdf/concatenate-configuration.png)  

### See also
 - [Document Attachments](document-attachments/)