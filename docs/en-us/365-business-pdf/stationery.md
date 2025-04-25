# Stationery

With 365 business PDF you can underlay PDF files generated from Microsoft Dynamics 365 Business Central with a stationery (PDF file). This eliminates the need to create and maintain additional report layouts.

The setup takes place in the **PDF Stationery Configurations** page. Here, multiple stationery configurations can be created. For example, it is possible to store different or no stationery for each page.

## How do I create a stationery configuration?

1. Open the page **PDF Stationery Configurations**.
2. Select **New**.
3. Specify a value in **Code** field.
4. Specify a **Description** for the configuration.
5. Create a new configuration line.
6. Select the **Stationery Type** to specify where the PDF file should be applied as stationery.
7. Select the **PDF File Code** for the PDF file you want to concatenate.
   <div class="alert alert-info"><i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Info</strong> PDF files must be created in the <a href="pdf-files.md">PDF files</a> page before use.</div>

![Stationery Configuration](/assets/images/365-business-pdf/stationery-configuration.png)

## How can I specify when to apply the configuration?

You can specify for which action you want to apply the configuration. For example, a common scenario is that you don't want to apply the stationery when you do a print because you are printing on company paper.

You can specify the application for each configuration in the **Application** group on the **PDF Stationery Configuration** page.
