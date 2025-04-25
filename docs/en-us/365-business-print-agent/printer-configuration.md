# Printer Configuration

In Microsoft Dynamics 365 Business Central, Printer Configurations are used as **_Printers_**. A default configuration is automatically created for each printer based on the available functions of the device.  
Furthermore, the stored [Print Profiles](print-agent-config-printprofile.md) are also created as printer settings.

In addition to the standard configuration, further settings can be created for special requirements such as color and/or duplex printing.

<div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Info</strong>
	The <b>Code</b> field of a Printer Configuration is displayed to the user via the <b>Printer Selection</b> and in various other places in Microsoft Dynamics 365 Business Central. <br>
	Therefore, use a <b>user-friendly name</b>.
</div>

<br>

## What are Printer Configurations?

There are two types of printer configurations in 365 business Print Agent:

#### 1. Printer Configuration

Printer settings are based on the standard functions of the respective printer and are created directly in Microsoft Dynamics 365 Business Central.  
They are used for simple print jobs such as:

- Duplex printing
- Number of copies
- Color printing
- Selection of paper type and paper tray

![Printer Configuration](/assets/images/365-business-print-agent/1b3143accd75d67305341ac9a314b681aa754fe966df87c434e0d240752862a8.png)  

#### 2. Print Profile

A Print Profile represents an extended configuration of your printer and enables the use of additional functions.

Typical examples of extended functions:

- Finishing options (stapling, punching, binding)
- Special functions for label printers (offset, temperature, print speed)

![Print Profile](/assets/images/365-business-print-agent/73601980-d650-4193-8c9e-26e8fe823e1b.png)

<br>

<div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Info</strong> 
    Print Profiles are managed in the 365 business Print Agent Windows application.<br>
    Learn more at our <a href="print-agent-config-printprofile.md">documentation</a>.
</div>

<br>

## How do I create a Printer Configuration?

Printer Configuration can be created in two ways:

- Via the **Printer Configuration** page
- By using the **Assisted Printer Configuration** page

### Step-by-step instructions

 1. Open **Printers** page.
 2. Select **Add Printer Configuration**.<br>
    ![Assisted Printer Configuration](/assets/images/365-business-print-agent/3dec41cc0618402d763e35f398cfac74961504a8b36643f152e31f10c428c125.png)  

 3. Click **Next**.
 4. Enter a user-friendly Name (Field **Code**).
 5. Enter a **Description** that describes the use of the configuration.<br>
    ![Assisted Printer Configuration - General](/assets/images/365-business-print-agent/1a276d89ea83cdf50266c0cf659f387072d70168d92310a935b122fe2009b856.png)
	
 6. Click **Next** again.
 7. Select a **Paper Kind** (e.g. A4 paper (210 mm by 297 mm).)  
    _(If desired, you can specify a **User-defined Paper Size** with height and width.)_
 8. Specify whether **Color Printing** should be activated.  
    _(Only relevant if the printer supports color printing.)_
 9.  Choose whether printing should be **Simplex** (single-sided) or **Duplex** (double-sided).
	_(Only possible if the printer supports duplex printing.)_ 
 10. Decide whether multiple **Paper Trays** should be used.
 11. Select a **Paper Source Kind** (Paper Tray) for all pages or specific sections.<br>
    ![Assisted Printer Configuration - Paper Tray Selection](/assets/images/365-business-print-agent/8a5abd438a19a5badc512c15d08a0ebb706f4c491593f4f58e616e8c3a1f9e8f.png)
	
 12. Click **Finish**.
 13. Enable Printer Configuration for usage, by selecting **Yes**.<br>
    ![Assisted Printer Configuration - Enable Printer Configuration](/assets/images/365-business-print-agent/e5a81f4c85fe8f35f56e061524f6e9b021a7b856078c0fe3a49ba1fbc607ce97.png)  

<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Good to know</strong>
	In some cases, it may be useful to rotate the print output - e.g. if a layout created in landscape format is to be output in portrait format on a label printer.<br>
	Use the <b>Rotation</b> field within the printer settings for this.
</div>

## Next steps

Once the Printer Configuration have been created, you can select them on the **Report Request Page** when printing.

![Request Page Printer Selection](/assets/images/365-business-print-agent/7b40a7721875b4237ff74101d0c7aaafeca27c3b8155c8f22fbf6aced188a5c0.png)  

To get the most out of **Direct Printing**, you should assign the printer settings on the **Printer Selection** page.


#### Assign Printer Configuration in Printer Selection

 1. Open **Print Selection**.
 2. Select **User ID** or leave the field empty (for all users).
 3. Enter **Report ID** or leave it blank (for all reports).
 4. Select **Printer Name** from the drop-down menu.

<div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Info</strong>
	In the <b>Printer Management</b> overview, you will find all printers activated in the 365 business Print Agent and their configurations. <br>
	From here you can easily open Printer Configuration or set a default Printer.<br>
	<img src="/assets/images/365-business-print-agent/f66b313410695f3a550f126155fc3b9d6abf9c663c5840e9d2c1887948fbfd41.png">
</div>

### See also

 - [Printer](printer.md)
