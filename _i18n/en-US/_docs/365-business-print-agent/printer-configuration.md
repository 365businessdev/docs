Printer Configuration are actually used as _Printers_ in Microsoft Dynamics 365 Business Central. For each printer a system-created printer configuration is automatically created. This configuration is created with the available features of the printer.

Additionally you can specify multiple other configurations, based on specific scenario (e.g. color printing) you want to achieve.

> **Important!**<br>The **Code** field of a Printer Configuration is displayed to the user through the **Printer Selection** and in various other locations inside Microsoft Dynamics 365 Business Central.<br>Keep in mind to choose a user-friendly Code for the Printer Configuration.

![Printer Configuration](/assets/images/365-business-print-agent/1b3143accd75d67305341ac9a314b681aa754fe966df87c434e0d240752862a8.png)  

## How do I create a Printer Configuration?

Printer Configurations can be created manually through the **Printer Configuration** card page or by using the **Assisted Printer Configuration** page.

 1. Open **Printers** page.
 2. Select **Add Printer Configuration**.<br>
    ![Assisted Printer Configuration](/assets/images/365-business-print-agent/3dec41cc0618402d763e35f398cfac74961504a8b36643f152e31f10c428c125.png)  

 3. Select **Next**.
 4. Specify a user-friendly **Code**.
 5. Specify a brief **Description** to describe the usage of the configuration.<br>
    ![Assisted Printer Configuration - General](/assets/images/365-business-print-agent/1a276d89ea83cdf50266c0cf659f387072d70168d92310a935b122fe2009b856.png)
 6. Select **Next**.
 7. Select **Paper Kind** (e.g. A4 paper (210 mm by 297 mm).)
 8. Specify whether to enable color printing or not.<br>_(only applicable if printer supports color printing)_
 8. Specify whether to use simplex printing or duplex printing.<br>_(only applicable if printer supports duplex-mode)_
 9. Specify whether to use multiple paper trays or not.
 10. Select **Paper Source Kind** (Paper Tray) for all pages _(if not selected use multiple paper trays)_ or for the various options.<br>
    ![Assisted Printer Configuration - Paper Tray Selection](/assets/images/365-business-print-agent/8a5abd438a19a5badc512c15d08a0ebb706f4c491593f4f58e616e8c3a1f9e8f.png)
 11. Select **Finish**.
 12. Enable Printer Configuration for usage, by select **Yes**.<br>
    ![Assisted Printer Configuration - Enable Printer Configuration](/assets/images/365-business-print-agent/e5a81f4c85fe8f35f56e061524f6e9b021a7b856078c0fe3a49ba1fbc607ce97.png)  

## Next steps

At this point, you are ready to print jobs with 365 business Print Agent by manually selecting the Printer Configuration in Report Request Page.

![Request Page Printer Selection](/assets/images/365-business-print-agent/7b40a7721875b4237ff74101d0c7aaafeca27c3b8155c8f22fbf6aced188a5c0.png)  

To get the most comfort out of direct printing functionality you should now assign the Printer Configuration in **Printer Selection** page.

#### How to assign Printer Configuration in Printer Selection?

 1. Open **Print Selection**.
 2. Select **User ID** or leave blank to assign the printer (configuration) for every user.
 3. Specify **Report ID** or leave blank to assign the printer (configuration) for every report.
 4. Select **Printer Name** by choosing from the Drop-down menu.

> **Good to know!**<br>Microsoft Dynamics 365 Business Central provides a additional page, called **Printer Management**. Here you find every printer (configuration) enabled in Print Agent. From here you can easily open the printer configuration or set the selected printer (configuration) as default.<br>![picture 7](../../../../assets/images/365-business-print-agent/f66b313410695f3a550f126155fc3b9d6abf9c663c5840e9d2c1887948fbfd41.png)

### See also

 - [Printer](../printer/)