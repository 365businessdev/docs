# Verwaltung von Druckern

Unter dem Menüpunkt "Drucker" werden alle auf dem aktuellen Windows System installierten Drucker angezeigt. Durch die Checkbox in der ersten Spalte der Tabelle können Sie einen Drucker für die Benutzung in Microsoft Business Central freigeben oder die Freigabe widerrufen.
In der Spalte "Emulation" können Sie für jeden Drucker zwischen "Standard" und "Zebra (ZPL)" wählen.

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i> <strong>Hinweis</strong> Wählen Sie "Zebra (ZPL)", wenn es sich um einen Drucker der Firma Zebra handelt und die erzeugte PDF Datei in das ZPL Format konvertiert werden soll. Dies kann den Druckvorgang beschleunigen, weil in diesem Fall nicht der Drucker, sondern der 365 business Print Agent die Umwandlung in das ZPL kompatible Format übernimmt.
</div>

Neben dem Namen des Druckers werden Ihnen weitere Information zum ausgewählten Gerät angezeigt. Wird ein Drucker ausgewählt, werden weitere Information im unteren Bereich angezeigt. Dazu zählen unter anderem alle unterstützten Papierformate und -quellen, welche später ebenfalls im Microsoft Business Central zur Verfügung stehen.

![Druckerverwaltung](/assets/images/365-business-print-agent/config-tool/Printer.PNG)  

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i> <strong>Hinweis</strong> Die "Status" Spalte zeigt den aktuellen Drucker Status an.
</div>

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg"></i> <strong>Wichtig</strong>Es existieren Drucker Status, welche eine Auswahl des Druckers verhindern. Dabei handelt es sich um:
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
      <th>Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Nicht verfügbar</td>
      <td>Der Drucker ist auf diesem System nicht mehr vorhanden.</td>
    </tr>
    <tr>
      <td colspan="2" style="height:0;padding:0"></td>
    </tr>
    <tr>
      <td>Nicht nutzbar</td>
      <td>Der Drucker erfüllt nicht die notwendigen Eigenschaften. Es fehlen z.B. die Angabe von Papierfächern oder Papierformaten.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i> <strong>Hinweis</strong>Beachten Sie, dass für Zebra Drucker die Einstellungen für alle Benutzer konfiguriert werden muss. Hilfe bei der Einrichtung von Zebra Druckern erhalten Sie <a href="support/setup-zebra-default-settings.md">hier</a>.
</div>

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i> <strong>Hinweis</strong> Ein Sonderfall stellen Drucker der "Microsoft XPS" Serie dar. Da es sich bei diesen Druckern, nicht um physische Drucker handelt, benötigt die Benutzung zusätzliche Konfiguration. Nähere Informationen dazu finden Sie <a href="support/setup-xps-printer.md">hier</a>.
</div>