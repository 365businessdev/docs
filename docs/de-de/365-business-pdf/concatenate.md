# Dokumentverkettung

Mit 365 business PDF können Sie PDF-Dateien, die aus Microsoft Dynamics 365 Business Central erzeugt werden, mit anderen PDF-Dateien verketten und in eine Datei zusammenführen. Hiermit können Sie zum Beispiel die Allgemeinen Geschäftsbedingungen (AGB) an alle Auftragsbestätigungen, aus Microsoft Dynamics 365 Business Central, automatisch anfügen.

Die Einrichtung findet in der Seite **PDF Verkettung Konfigurationen** statt. Hier können mehrere Verkettungskonfigurationen angelegt werden.

## Wie erstelle ich eine Verkettungskonfiguration?

1. Öffnen Sie die Seite **PDF Verkettung Konfigurationen**.
2. Klicken Sie **Neu**.
3. Vergeben Sie einen Wert im Feld **Code**.
4. Geben Sie eine **Beschreibung** für die Konfiguration ein.
5. Erstellen Sie eine neue Konfigurationszeile.
6. Wählen Sie die **Position** (Vorher/Nachher), an der die zu verkettende PDF-Datei hinzugefügt werden soll.
   <div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Hinweis</strong> Wenn Sie mehrere Dateien vor oder hinter dem eigentlichen Beleg oder Bericht anfügen wollen, können Sie im Feld <b>Positionsnr.</b> die Reihenfolge bestimmen.
</div>
7. Wählen Sie den **PDF-Datei Code** für die PDF-Datei aus, die Sie anfügen möchten.
   <div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Hinweis</strong> PDF-Dateien müssen vor der Verwendung in der Seite <a href="pdf-files.md">PDF-Dateien</a> angelegt werden.
</div>

![Verkettungskonfiguration](/assets/images/365-business-pdf/concatenate-configuration.png)  

## Wie kann ich festlegen, wann die Konfiguration angewendet werden soll?

Sie können angeben, für welche Aktion Sie die Konfiguration anwenden möchten. Ein häufiges Szenario ist z. B., dass Sie die Allgemeinen Geschäftsbedingungen nicht verketten möchten, wenn Sie einen Druck durchführen, weil Sie auf Firmenpapier drucken, welches die Allgemeinen Geschäftsbedingungen bereits auf der Rückseite enthält.

Sie können die Anwendung für jede Konfiguration in der Gruppe **Anwendung** auf der Seite **PDF Verkettungskonfiguration** angeben.
# Siehe auch
 - [Beleganhänge](document-attachments.md)
