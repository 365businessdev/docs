All printers installed on the current Windows system are displayed under the "Printers" menu. You can enable or disable a printer for use in Microsoft Business Central by clicking the check box in the first column of the table.
The "Emulation" column allows you to choose between "Standard" and "Zebra (ZPL)" for each print device.

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Note:</strong>Choose "Zebra (ZPL)" if the printer is a Zebra printer and the generated PDF file should be converted to ZPL format. This can speed up the printing process, because in this case not the printer, but the 365 business Print Agent takes over the conversion to the ZPL compatible format.
</div>

In addition to the name of the printer, further information about the selected device is displayed. If a printer is selected, further information is displayed in the lower area. This includes all supported paper formats and paper sources, which are also available later in Microsoft Business Central.

![Druckerverwaltung](/assets/images/365-business-print-agent/config-tool/Printer_en.PNG)  

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Note:</strong>The "Status" column shows the current printer status.
</div>

<div class="alert alert-notice">
    <i class="fa-solid fa-notes"></i> <strong>Important:</strong>There are printer statuses that prevent the printer from being selected. These are:
<style>

table tr:nth-child(odd) td{
  background:none;
}

table tr:nth-child(even) td{
  background:none;
}
</style>
<table>
  <thead>
    <tr>
      <th>Status</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Not available</td>
      <td>The printer no longer exists on this system.</td>
    </tr>
    <tr>
      <td colspan="2" style="height:0;padding:0"></td>
    </tr>
    <tr>
      <td>Not usable</td>
      <td>The printer does not meet the necessary characteristics to be selected. For example, the specification of paper trays or paper formats is missing.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Note:</strong>Remember that for Zebra printers, the settings must be configured for all users. For help with setting up your Zebra printers, click <a href="../support/setup-zebra-default-settings/">here</a>.
</div>

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Note:</strong>The "Microsoft XPS" series printers are a special case. Since these printers are not physical printers, their use requires additional configuration. <a href="../support/setup-xps-printer/">Learn more</a>.
</div>