# Printer Management

Under the **Printer** menu, all printers installed on the current Windows system are listed. Use the **checkbox in the first column** to enable or disable a printer for use with **Microsoft Dynamics 365 Business Central**.

In the **Emulation** column, you can choose from:
- **Standard**
- **Zebra (ZPL)**
- **SATO (SBPL)**

<div class="alert alert-info">
    <i class="fa-duotone fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Note:</strong>
	Select <b>Zebra (ZPL) / SATO (SBPL)</b> if you are using a Zebra or SATO printer and are experiencing <b>performance issues</b> during printing. This often improves printing speed, as the conversion is handled by the <b>365 business Print Agent</b> instead of the printer itself.
</div>

When selecting a printer, additional information will appear in the lower section. This includes all supported paper sizes and sources, which will later be available in Microsoft Dynamics 365 Business Central.

![Druckerverwaltung](/assets/images/365-business-print-agent/config-tool/Printer_en.PNG)  

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Note:</strong>
	 The <b>Status</b> column displays the current status of each printer.
</div>

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg" style="--fa-secondary-color: #FF0000; --fa-primary-color: #111111; --fa-secondary-opacity: 0.7"></i> <strong>Important:</strong>
	Certain <b>status</b> values will prevent a printer from being selected:
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
      <td>The printer does not meet minimum requirements, e.g., missing information about paper sizes or sources.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Note:</strong>
	For <b>Zebra printers</b>, the settings must be applied for all users. A setup guide can be found <a href="support/setup-zebra-default-settings.md">here</a>.
</div>

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Note:</strong>
	Printers from the <b>"Microsoft XPS"</b> series require additional configuration as they are virtual devices. More information can be found <a href="support/setup-xps-printer.md">here</a>.
</div>