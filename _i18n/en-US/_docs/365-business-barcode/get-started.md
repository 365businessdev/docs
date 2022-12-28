365 business Barcode is an extension for Microsoft Dynamics 365 Business Central that gives you the ability to encode and decode barcodes, within Microsoft Dynamics 365 Business Central.

This quick guide explains how you can make various [barcode settings](../barcode-settings/) in 365 business Barcode, which you can then integrate into your application.

## Step 1: Install 365 business Barcode

Open the **Extensions Marketplace** in Microsoft Dynamics 365 Business Central and search for **365 business Barcode**. Install the app from Microsoft AppSource and wait for the installation to complete.

## Step 1.1: Register for 365 business API

After installation, if the 365 business API was not already installed, the Welcome Wizard will appear automatically and guide you through registration.

After the registration is complete, you will receive your personal API authentication key, which is required to communicate with the 365 business API.<br>
[Learn more](../../365-business-api/registration/)

> **Note**<br>No further setup of 365 business Barcode is necessary.

## Step 2: Set up barcode settings

> **Good to know**<br>During the installation of 365 business Barcode some standard barcode types are added automatically. You can use, modify or delete them directly.

To set up barcode settings, open the **Barcode Settings** page in Microsoft Dynamics 365 Business Central.

 1. Click **New** to create a new barcode setting.
 2. Select a **Code**. 
 3. Select the type of barcode you want to use (for example, `QR Code`) in **Barcode symbology** field.

>**Note**<br>While setting up the barcode settings, the preview of the barcode with a sample value is continuously displayed.

 4. Select a **description** for the barcode setting.
 5. Specify the desired height (px).
 6. Click in the **Color** and/or **Background color** field to define colors different from the default. _(optional)_<br>![Color Picker](/assets/images/365-business-barcode/5c299f7b1b93a3b1b6c71d46c162491a9264e72fb4d66f9e435a182684624243.png)

> **Good to know**<br>Depending on the selected **barcode symbology** further options are available.

## Step 2.1: Enable GS1-Format _(optional)_

Over the years, different types of barcodes have emerged. They were all developed for different tasks and optimized for the needs of individual industries. The GS1 format was developed to integrate additional information into a barcode in a machine-readable way.
Basically, the following barcode types can be distinguished:

 - One-dimensional barcode: In 1D codes, the bars are always arranged in a single row. The EAN barcode, the **GS1-128** and the **GS1 DataBar** belong to this type.
 - Two-Dimensional Barcode: In 2D codes, the information is usually deposited in a square or rectangular area in the form of dots or small squares. This category includes the **GS1 DataMatrix** and the **GS1 QR Code**.

You can activate the GS1 Format option, for supported barcode types, via the **GS1 Format** switch.

## Step 2.2: Embed image _(only applicable QR Code)_

For QR Code barcodes there is the possibility of individualization, beyond the control of the foreground and background color. Any image can be embedded in the barcode. The barcode will still be readable.

Proceed as follows to embed an image in the barcode:

 1. click **Upload Embedded Image**.
 2. Click **Select**.
 3. Select a PNG image file to embed in the barcode. 4.
 4. click **OK**.

![QR Code with embedded image](/assets/images/365-business-barcode/953eae17f991ea69d2c1ae2559bfedd8566a13203981bdeed545e2f4a976c2fe.png)  

## Step 3: Implement 365 business Barcode

Below you will find information on how 365 business Barcode can be implemented at your site:

 - [Developer Documentation](../../al-developer/365businessbarcode/)