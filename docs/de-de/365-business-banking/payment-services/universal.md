# Universal

Der **Universal Banking Provider** ist eine flexible Lösung zum Importieren von Banktransaktionen aus CSV-Dateien für Zahlungsdienstleister, die von 365 business Banking nicht direkt unterstützt werden (z.B. Otto, Zalando, etc.).

## Funktionen

<ul>
<i aria-hidden="true" class="fas fa-check"></i> Importieren Sie Transaktionen aus beliebigen CSV-Dateiformaten<br>
<i aria-hidden="true" class="fas fa-check"></i> Ordnen Sie CSV-Spalten den Feldern des Transaktionsmodells zu<br>
<i aria-hidden="true" class="fas fa-check"></i> Fassen Sie mehrere CSV-Zeilen zu einer Transaktion zusammen<br>
<i aria-hidden="true" class="fas fa-check"></i> Summieren, verketten oder kombinieren Sie Werte aus mehreren Zeilen<br>
<i aria-hidden="true" class="fas fa-check"></i> Erstellen Sie Formeln zur Berechnung von Werten (z.B. Gebühren)<br>
<i aria-hidden="true" class="fas fa-check"></i> Aufteilung von Transaktionen in mehrere Zeilen<br>
</ul>

## Schritt-für-Schritt-Anleitung

1. Wählen Sie **Bankkonten** in der Suche von Microsoft Dynamics 365 Business Central aus.
2. Erstellen Sie ein neues Bankkonto oder wählen Sie ein bestehendes aus.
3. Wählen Sie in der **Bankkonto Karte**, unter **Aktionen** die Aktionsgruppe **Kontoverbindung** und **Verbinden…** aus.
4. Wählen Sie aus der Liste **Universal** aus.
5. Bestätigen Sie die Bestätigugsabfrage mit **Ja**.

![Einrichtung](/assets/images/365-business-banking/universal-setup.de-DE.png)

### Allgemeine Einstellungen

In den allgemeinen Einstellungen für den **Universal** Banking Provider können Sie Gruppierungs- und Transaktions-ID Felder definieren, sowie das Dateiformat auswählen.
 
<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Gut zu wissen</strong>
    Aktuell werden ausschließlich <strong>CSV-Dateien</strong> unterstützt.<br>
    Weitere Dateiformate, wie z.B. JSON, XLS(X) oder XML, könnten in zukünftigen Versionen hinzugefügt werden.
</div>

Weitere Informationen zu den allgemeinen Einstellungen finden Sie in der folgenden Tabelle:

| Einstellung | Beschreibung |
| --- | --- |
| Gruppierungsfeld | Definieren Sie ein oder mehrere Felder, um Zeilen aus der CSV-Datei zu gruppieren und zu einer einzigen Transaktion zusammenzufassen. Zum Beispiel könnten Sie die Felder "Bestellnummer" und "Transaktionsdatum" verwenden, um alle Zeilen mit derselben Bestellnummer und demselben Datum zu einer Transaktion zu gruppieren. |
| Transaktions-ID-Feld | Definieren Sie ein Feld, das als eindeutige Transaktions-ID verwendet wird. Wenn dieses Feld definiert ist, wird für jede Zeile eine separate Transaktion erstellt, auch wenn mehrere Zeilen dieselbe Transaktions-ID haben. |

### CSV-Einstellungen

<div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Hinweis</strong>
    Die <strong>CSV-Einstellungen</strong> stehen nur für das Dateiformat <strong>CSV</strong> zur Verfügung.
</div>

In den CSV-Einstellungen können Sie die spezifischen Einstellungen für den Import von CSV-Dateien konfigurieren. Dabei werden folgende Einstellungen unterstützt:

| Einstellung | Beschreibung |
| --- | --- |
| Kodierung | Gibt die Textkodierung der CSV-Datei an. |
| Trennzeichen | Gibt das Zeichen an, das die Spalten in der CSV-Datei trennt (z.B. Komma, Semikolon, Tabulator). |
| Textbegrenzer | Gibt das Zeichen an, das Textwerte in der CSV-Datei umgibt (z.B. Anführungszeichen). |
| Dezimaltrennzeichen | Gibt das Zeichen an, das die Dezimalstellen in Zahlenwerten trennt (z.B. Punkt oder Komma). |
| Tausendertrennzeichen | Gibt das Zeichen an, das die Tausenderstellen in Zahlenwerten trennt (z.B. Punkt oder Komma). |
| Datumsformat | Gibt das Format an, in dem Datumswerte in der CSV-Datei dargestellt werden (z.B. TT/MM/JJJJ, MM/TT/JJJJ, JJJJ-MM-TT). |

Zusätzlich können Sie definieren, ob die CSV-Datei Kopf- oder Fußzeilen enthält, die beim Import übersprungen werden sollen.

| Einstellung | Beschreibung |
| --- | --- |
| Kopfzeilen | Gibt an, wie viele Zeilen am Anfang der CSV-Datei übersprungen werden sollen, bevor mit dem Import der Transaktionen begonnen wird. |
| Fußzeilen | Gibt an, wie viele Zeilen am Ende der CSV-Datei übersprungen werden sollen, nachdem alle Transaktionen importiert wurden. |

### Spaltenzuordnung

Die Spaltenzuordnung ermöglicht es Ihnen, die Spalten in Ihrer CSV-Datei den entsprechenden Feldern im Transaktionsmodell von 365 business Banking zuzuordnen. Sie können auch Formeln definieren, um Werte zu berechnen oder zu transformieren, bevor sie in die Transaktion übernommen werden.

| Feld | Beschreibung |
| --- | --- |
| Code | Eindeutige Kennung für diese Spalte. Wird zum Referenzieren in Formeln und Gruppierungen verwendet. |
| Art | Gibt an, ob es sich um eine direkte Spalte, ein berechnetes Feld oder einen konstanten Wert handelt. |
| Spaltenindex | Gibt die null-basierte Position der Spalte in der CSV-Datei an (nur für direkte Spalten). |
| Formel | Definieren Sie eine Formel, um den Wert für dieses Feld zu berechnen. In der Formel können Sie auf andere Spalten durch ihren Code verweisen. |
| Konstante | Gibt den festen Wert an, der für dieses Feld verwendet werden soll (nur für konstante Werte). |
| Zielfeldnr. | Gibt die Feldnummer im Transaktionsmodell an, in die der Wert importiert werden soll. |
| Funktion | Gibt eine optionale Funktion an, die auf den Wert angewendet werden soll (z.B. Erste, Summe, Verketten, etc.). |
| Texttrennzeichen | Gibt ein optionales Zeichen an, das verwendet wird, um Werte zu trennen, wenn mehrere Zeilen zu einer Transaktion gruppiert werden (z.B. bei der Funktion "Verketten"). |
| Transaktion aufteilen | Gibt an, ob diese Spalte verwendet werden soll, um Transaktionen aufzuteilen. Wenn aktiviert, wird für jede Zeile mit einem anderen Wert in dieser Spalte eine separate Transaktion erstellt. |
| Suffix für Aufteilung | Gibt ein optionales Suffix an, das an die Transaktions-ID angehängt wird, wenn eine Transaktion aufgrund dieser Spalte aufgeteilt wird.|
| Beschreibung für Aufteilung | Gibt eine optionale Beschreibung an, die in der Transaktion verwendet wird, wenn eine Transaktion aufgrund dieser Spalte aufgeteilt wird. |

## Kontoverbindung trennen

Um die Verbindung zu trennen, gehen Sie wie folgt vor:

1. Wählen Sie **Bankkonten** in der Suche von Microsoft Dynamics 365 Business Central aus.
2. Wählen Sie das Bankkonto aus.
3. Wählen Sie in der **Bankkonto Karte**, unter **Aktionen** die Aktionsgruppe **Kontoverbindung** und **Verbindung aufheben...** aus.
4. Bestätigen Sie die Bestätigungsabfrage mit **Ja**.