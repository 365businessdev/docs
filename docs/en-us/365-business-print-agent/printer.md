# Printer

In **Printers** page in Microsoft Dynamics 365 Business Central you'll find all shared printers from 365 business Print Agent services. 

![Printers](/assets/images/365-business-print-agent/87afe451377b606dffb0d548cac691fcc4c6bdbf02744a21204a1ee825389a30.png)  

Shared printers are not directly usable for users in Microsoft Dynamics 365 Business Central. Instead it's necessary to create [Printer Configurations](printer-configuration.md), which will be assigned in **Printer Selection** or selected in Report Request Page.
You can create multiple printer configurations based on the capabilities you want to use in a specific scenario (e.g. duplex-mode).

For each printer a default printer configuration is automatically created. This configuration is created with the available features of your printer.

## Which printers are supported?

Print Agent is supporting every printer with Microsoft Windows compatible drivers or printer software.
Additionally Print Agent is supporting native `Zebra (ZPL)` emulation to communicate with [Zebra printers](https://www.zebra.com) using native ZPL commands, instead of PDF printing.

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg"></i> <strong>Remarks</strong>Sharing network printers in 365 business Print Agent may cause timeouts as the actual printer takes longer to respond. This is a common problem with Windows printer management and cannot be solved by 365 business Print Agent.<br><br>We strongly recommend installing 365 business Print Agent directly on print servers to share locally installed printers instead of sharing printers from a remote print server.
</div>

### How do I enable ZPL emulation for printers?

In Print Agent service application, installed on your printer server, you find a list of all currently installed printers. In column `Emulation` you can specify `Zebra (ZPL)` instead of `Default` to use PDF to ZPL conversion and communicate with the Zebra printer using native ZPL commands.

![Print Agent Emulation mode selection](/assets/images/365-business-print-agent/f3a6d3399196eee57e21ab24063897c7fb91e03c05e08c8cd7dbc8538804ef53.png)  

## How do I know my printers are available?

Due to maintenance, software updates or incidents shared printers may not be available at a specific situation. The **Printers** page decorates __offline__ printers so that the administrator can easily determine if a particular printer is unavailable.

![Offline Printer](/assets/images/365-business-print-agent/d0b9f0f4f2d7ac5404b0414ce7a9c9827fc102a43e91af13d1636e411b4dbd7d.png)  

Additionally the [Print Agents](print-agent-clients.md) page in Microsoft Dynamics 365 Business Central shows a list of all registered Print Agent Services and there online status.

# See also 

 - [Print Agents](print-agent-clients.md)
