# Unterstützung virtuelle Drucker

Die Verwendung virtueller Drucker wie **Microsoft Print to PDF** oder **Microsoft XPS Document Writer** ist mit dem **365 business Print Agent** nur eingeschränkt möglich.  
Dies liegt daran, dass virtuelle Drucker keine vollständigen Informationen wie Papierformate oder -fächer bereitstellen, die für den Einsatz im Business Central-Kontext erforderlich sind.

Aus diesem Grund verhindert der 365 business Print Agent die Nutzung inkompatibler virtueller Drucker und kennzeichnet sie in der Übersicht als **Nicht nutzbar**.

Wenn Sie dennoch Tests mit einem virtuellen Drucker durchführen möchten, empfehlen wir die Einrichtung eines **individuell installierten Microsoft XPS Document Writer (MXDW)**.

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Wichtig</strong>
	Virtuelle Drucker lösen in der Regel einen <b>Speichern unter</b>-Dialog aus, um einen Dateipfad auszuwählen.<br>
	Da Druckaufträge durch den 365 business Print Agent im Kontext des <b>lokalen Systemkontos</b> verarbeitet werden, ist die Anzeige solcher Dialoge nicht möglich – was zu Fehlern führt.<br><br>
	Um das zu umgehen, ist die manuelle Einrichtung eines virtuellen Druckers mit festem Ausgabepfad erforderlich.
</div>

---

## Einrichtung eines Microsoft XPS Document Writer (MXDW)

Nachfolgend finden Sie die empfohlene Vorgehensweise zur Einrichtung eines **virtuellen Druckers mit automatischer Dateiausgabe**:

### Schritt-für-Schritt-Anleitung

1. Öffnen Sie **Geräte und Drucker**.
2. Klicken Sie auf **Drucker hinzufügen**.
3. Wählen Sie **Einen lokalen oder Netzwerkdrucker mit manuellen Einstellungen hinzufügen**<br>  
   ![Dialog: Drucker hinzufügen](/assets/images/365-business-print-agent/1062d8a1ab2ec8922f457cc23dd6c50d8f6b1bc0f58344d43481ea4b962d11eb.png)
4. Wählen Sie **Einen neuen Anschluss erstellen**, Typ: **Lokaler Anschluss**<br>  
   ![Lokaler Anschluss](/assets/images/365-business-print-agent/7ab8a8f098dcb9c886ac9540a3b8e967fe476b3aa49d4d3628d833995079056e.png)
5. Geben Sie den gewünschten Pfad und Dateinamen für die Ausgabe in das Feld für den **Anschlussnamen** an, z. B. `C:\Temp\PrintJob.xps`
6. Wählen Sie als Hersteller: **Microsoft**
7. Wählen Sie als Drucker: **Microsoft XPS Document Writer v4**<br>
   ![Treiber auswählen](/assets/images/365-business-print-agent/9c5fc601bb9842bccf3df601502307b88455e37363aad807034ad5df2a3c9780.png)
8. Klicken Sie auf **Vorhandenen Treiber verwenden (empfohlen)**
9. Vergeben Sie einen Namen für den Drucker.
10. Schließen Sie die Einrichtung mit **Fertigstellen** ab.
11. Geben Sie diesen Drucker in der **365 business Print Agent Einrichtung** in Microsoft Dynamics 365 Business Central frei.

---

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Gut zu wissen:</strong>
	Stellen Sie sicher, dass das in Schritt 5 angegebene Verzeichnis <b>Lese- und Schreibrechte</b> für den Benutzer besitzt, unter dem der 365 business Print Agent Dienst ausgeführt wird.<br>  
	Zum Testen kann es sinnvoll sein, den Dienst temporär mit einem Benutzerkonto auszuführen, das Zugriff auf den Pfad besitzt.
</div>


---

## Ergebnis

Nach der erfolgreichen Einrichtung werden alle Druckaufträge an diesen virtuellen Drucker **automatisch im definierten Dateipfad gespeichert**.  
Auch Drucke aus Microsoft Dynamics 365 Business Central über den 365 business Print Agent werden automatisch an dieser Stelle gespeichert.
