# 365 business PDF

![365 business PDF](/assets/images/365-business-pdf/logo.png)  

Mit 365 business PDF für Microsoft Dynamics 365 Business Central können Sie ohne die zusätzliche Anpassung des Berichtslayouts ein digitales Briefpapier (PDF-Datei) anwenden, Ihre Dokumente digital signieren oder weitere PDF-Dateien, wie Allgemeine Geschäftsbedingungen oder Deckblätter, vor oder nach dem aus Microsoft Dynamics 365 Business Central erstelltem Bericht anhängen.

## Funktionen im Überblick

![365 business PDF](/assets/images/365-business-pdf/365businesspdf.gif)

### Digitales Briefpapier

Wenn Belege, wie Auftragsbestätigungen, Lieferscheine und Rechnungen, nicht nur digital als PDF-Datei erstellt und versandt, sondern zusätzlich auch noch ausgedruckt werden, stellt sich oft die Frage, wie mit dem Briefpapier umgegangen werden soll. Wenn das Briefpapier als Vordruck im Drucker liegt, darf aus Business Central heraus das Briefpapier nicht gedruckt werden. Beim elektronischen Versand, als PDF-Datei, hingegen muss das Briefpapier enthalten sein.

365 business PDF erlaubt über die [PDF Briefpapier Konfiguration](stationery.md) die Hinterlegung von Briefpapier, welche automatisch angewandt wird. Es ist nicht notwendig zusätzliche Berichtslayouts anzulegen oder Optionsschalter im Bericht vorzusehen.

### Verkettung von Dokumenten

Sie versenden ein komplexes Angebot und möchten die ergänzenden Dokumente zusammen mit dem Angebot versenden? Oder sollen Ihre aktuellen allgemeinen Geschäftsbedingungen (AGBs) automatisch an jede Auftragsbestätigung angehangen werden? 

Mit der [PDF Dokumentverkettung Konfiguration](concatenate.md) in 365 business PDF können Sie eine beliebige Anzahl an Dokumenten, vor oder nach dem eigentlichen Dokument, welches aus Microsoft Dynamics 365 Business Central erstellt wurde, anhängen.

#### Beleganhänge

Zusätzlich zur Verkettung von Dokumenten, mit Hilfe der [PDF Dokumentverkettung Konfiguration](concatenate.md), unterstützt 365 business PDF [Beleganhänge](document-attachments.md), die direkt am Beleg definiert werden können. Die Beleganhänge werden zusätzlich zu der Verkettung über die [PDF Dokumentverkettung Konfiguration](concatenate.md) angewandt.

![365 business PDF - Beleganhänge](/assets/images/365-business-pdf/365businesspdf-doc-attachments.gif)

Aktuell findet sich der Aufruf der Beleganhänge in:

 - Angebot
 - Auftrag
 - Einkaufsanfrage
 - Bestellung

Weitere Bereiche können bei Bedarf über die interne API von 365 business PDF bereitgestellt werden.

### Digitale Signatur

Schützen Sie Ihre aus Microsoft Dynamics 365 Business Central erstellten Dokumente vor Manipulationen durch digitale Signatur!

Mit der [PDF Signierung Konfiguration](signing.md) in 365 business PDF schützen Sie Ihre Dokumente ohne zusätzlichen Aufwand.

## Welche Anwendungsbereiche werden unterstützt?

In der aktuellen Version ist die Integration im Microsoft Standard für sämtliche Berichte, die über die Berichtsauswahl (Report Selections) gesteuert werden vorgesehen. Hierzu zählen unter anderem:

| Bereich | Konfigurationsseite |
| --- | --- |
| Einkauf | Berichtsauswahl - Einkauf |
| Verkauf | Berichtsauswahl - Verkauf |
| Mahnung | Berichtsauswahl - Mahnung/Zinsrechnung |
| Projekt | Berichtsauswahl - Projekt |
| Service | Berichtsauswahl - Service |

## Siehe auch
 - [PDF Briefpapier Einrichtung](stationery.md)
 - [PDF Dokumentverkettung Einrichtung](concatenate.md)
 - [PDF Signierung Einrichtung](signing.md)
 - [Beleganhänge](document-attachments.md)