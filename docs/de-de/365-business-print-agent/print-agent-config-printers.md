# Verwaltung von Druckern

Im Menüpunkt **Drucker** werden alle auf dem aktuellen Windows-System installierten Drucker aufgelistet. 
Über die **Checkbox in der ersten Spalte** können Sie einen Drucker für die Verwendung in **Microsoft Dynamics 365 Business Central** freigeben oder die Freigabe aufheben.

In der Spalte **Emulation** wählen Sie zwischen:
- **Standard**
- **Zebra (ZPL)**
- **SATO (SBPL)**

<div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Hinweis</strong>
	Wählen Sie <b>Zebra (ZPL) / SATO (SBPL)</b> als Emulation, wenn es sich um einen Drucker der Marke Zebra bzw. SATO handelt und und Sie <b>Performance Probleme</b> beim Drucken haben. 
	Durch die Umstellung wird der Druckvorgang meist beschleunigt, da die Umwandlung nicht vom Drucker, sondern vom <b>365 business Print Agent</b> übernommen wird.
</div>

Beim Auswählen eines Druckers sehen Sie weitere Informationen im unteren Bereich. Dazu gehören u. a. alle unterstützten Papierformate und -quellen, die später auch in Microsoft Dynamics Business Central verfügbar sind.

![Druckerverwaltung](/assets/images/365-business-print-agent/config-tool/Printer.PNG)  

<div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Hinweis</strong>
	Die Spalte <b>Status</b> zeigt den aktuellen Status des jeweiligen Druckers an.
</div>

<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Gut zu wissen</strong>
	Bestimmte <b>Status</b> verhindern die Auswahl eines Druckers:
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
      <td>Der Drucker erfüllt nicht die Mindestanforderungen, z. B. fehlen Angaben zu Papierformaten oder Papierquellen.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Hinweis</strong>
	Bei <b>Zebra-Druckern</b> müssen die Einstellungen für alle Benutzer vorgenommen werden. Eine Anleitung zur Einrichtung finden Sie <a href="support/setup-zebra-default-settings.md">hier</a>.
</div>

<div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Hinweis</strong>
	Drucker der Serie <b>"Microsoft XPS"</b> benötigen zusätzliche Konfiguration, da es sich nicht um physische Geräte handelt. Weitere Informationen dazu finden Sie <a href="support/setup-xps-printer.md">hier</a>.
</div>