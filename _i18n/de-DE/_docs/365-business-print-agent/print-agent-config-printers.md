Unter dem Menüpunkt "Drucker" werden alle auf dem aktuellen Windows System installierten Drucker angezeigt. Durch die Checkbox in der ersten Spalte der Tabelle können Sie einen Drucker für die Benutzung in Microsoft Business Central freigeben oder die Freigabe widerrufen.

Neben dem Namen des Druckers, werden Ihnen weitere Information zum ausgewähltem Gerät angezeigt. Wird ein Drucker ausgewählt, werden weitere Information im unteren Bereich angezeigt. Dazu zählen unter anderem alle unterstützten Papierformate und -quellen, welche später ebenfalls im Microsoft Business Central zur Verfügung stehen.

![Druckerverwaltung](/assets/images/365-business-print-agent/config/Printer.PNG)  

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Hinweis:</strong> Die "Status" Spalte zeigt den aktuellen Drucker Status an.
</div>

<div class="alert alert-notice">
    <i class="fa-solid fa-notes"></i> <strong>Wichtig:</strong>Es existieren Drucker Status, welche eine Auswahl des Druckers verhindern. Dabei handelt es sich um:
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
    <i class="fa-solid fa-lightbulb"></i> <strong>Hinweis:</strong> Ein Sonderfall stellen Drucker der "Microsoft XPS" Serie dar. Da es sich bei diesen Druckern, nicht um physische Drucker handelt, benötigt die Benutzung zusätzliche Konfiguration. Nährere Informationen dazu finden sie [hier](../support/setup-xps-printer/)
</div>