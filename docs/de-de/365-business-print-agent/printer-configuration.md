# Druckereinstellungen

In Microsoft Dynamics 365 Business Central werden Druckereinstellungen als **_Drucker_** verwendet. Für jeden Drucker wird automatisch eine Standardkonfiguration erstellt, basierend auf den verfügbaren Funktionen des Geräts.  
Zusätzlich werden die hinterlegten [Druckprofile](print-agent-config-printprofile.md) ebenfalls als Druckereinstellungen angelegt.

Neben der Standardkonfiguration können weitere Einstellungen für spezielle Anforderungen wie Farb- und/oder Duplexdruck erstellt werden.

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i>
    <strong>Hinweis</strong>
	Das <b>Code</b> Feld einer Druckereinstellung wird dem Benutzer über die <b>Druckerauswahl</b> und an verschiedenen anderen Stellen in Microsoft Dynamics 365 Business Central angezeigt.<br>
	Verwenden Sie daher einen <b>benutzerfreundlichen Namen</b>.
</div>

<br>

## Was sind Druckereinstellungen?

Im 365 business Print Agent gibt es zwei Arten von Druckereinstellungen:

### 1. Druckereinstellungen

Druckereinstellungen basieren auf den Standardfunktionen des jeweiligen Druckers und werden direkt in Microsoft Dynamics 365 Business Central erstellt.  
Sie dienen einfachen Druckaufträgen wie:

- Duplexdruck
- Anzahl der Kopien
- Farbdruck
- Auswahl der Papierart und des Papierfachs

![Druckereinstellung](/assets/images/365-business-print-agent/1b3143accd75d67305341ac9a314b681aa754fe966df87c434e0d240752862a8.png)  

### 2. Druckprofile

Ein Druckprofil bildet eine erweiterte Konfiguration Ihres Druckers ab und ermöglicht die Nutzung zusätzlicher Funktionen.

Typische Beispiele für erweiterte Funktionen:

- Finishing-Optionen (Heften, Lochen, Binden)
- Spezialfunktionen für Etikettendrucker (Versatz, Temperatur, Druckgeschwindigkeit)

![Druckprofil](/assets/images/365-business-print-agent/73601980-d650-4193-8c9e-26e8fe823e1b.png)

<br>

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i>
    <strong>Hinweis</strong>
	Die Verwaltung von Druckprofilen wird in der 365 business Print Agent Windows Anwendung durchgeführt.<br>
    Erfahren Sie mehr in der <a href="print-agent-config-printprofile.md">Dokumentation</a>.
</div>

<br>

## Wie erstelle ich eine Druckereinstellung?

Druckereinstellungen können auf zwei Wegen erstellt werden:

- Über die Seite **Druckereinstellung**
- Mit Hilfe über die Seite **Unterstützte Druckereinstellung**

### Schritt-für-Schritt-Anleitung

1. Öffnen Sie die Seite **Drucker**.
2. Wählen Sie **Druckereinstellungen hinzufügen**.<br>
    ![Unterstützte Druckereinstellung](/assets/images/365-business-print-agent/3dec41cc0618402d763e35f398cfac74961504a8b36643f152e31f10c428c125.png)
	
3. Klicken Sie auf **Weiter**.
4. Tragen Sie einen **benutzerfreundlichen Namen im Feld Code** ein.
5. Geben Sie eine **Beschreibung** an, die die Verwendung der Konfiguration beschreibt.<br>
    ![Unterstützte Druckereinstellung - Allgemein](/assets/images/365-business-print-agent/1a276d89ea83cdf50266c0cf659f387072d70168d92310a935b122fe2009b856.png)
	
6. Klicken Sie erneut auf **Weiter**.
7. Wählen Sie eine **Papierart** (z. B. A4-Papier (210 mm x 297 mm)).  
    _(Falls gewünscht, können Sie ein **benutzerdefiniertes Papierformat** mit Höhe und Breite angeben)_
8. Legen Sie fest, ob **Farbdruck** aktiviert werden soll.  
    _(Nur relevant, wenn der Drucker Farbdruck unterstützt.)_
9. Bestimmen Sie, ob der Druck als **Simplex** (einseitig) oder **Duplex** (beidseitig) erfolgen soll.  
    _(Nur möglich, wenn der Drucker Duplexdruck unterstützt.)_
10. Entscheiden Sie, ob mehrere **Papierfächer** verwendet werden sollen.
11. Wählen Sie eine **Papierquelle** (Papierfach) für alle Seiten oder spezifische Abschnitte.<br>
     ![Unterstützte Druckereinstellung - Auswahl des Papierfachs](/assets/images/365-business-print-agent/8a5abd438a19a5badc512c15d08a0ebb706f4c491593f4f58e616e8c3a1f9e8f.png)
	 
12. Klicken Sie auf **Fertigstellen**.
13. Bestätigen Sie die Aktivierung der Druckereinstellung mit **Ja**.<br>
     ![Unterstützte Druckereinstellung - Aktivieren der Druckereinstellung](/assets/images/365-business-print-agent/e5a81f4c85fe8f35f56e061524f6e9b021a7b856078c0fe3a49ba1fbc607ce97.png)
	

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg"></i>
    <strong>Gut zu wissen</strong>
	In einigen Fällen kann es sinnvoll sein, die Druckausgabe zu drehen – z. B. wenn ein im Querformat erstelltes Layout im Hochformat auf einem Etikettendrucker ausgegeben werden soll.<br>
	Verwenden Sie hierfür das Feld <b>Drehung</b> innerhalb der Druckereinstellungen.
</div>

## Weitere Schritte

Sobald die Druckereinstellungen erstellt wurden, können Sie diese beim Drucken auf der **Berichtsanforderungsseite** auswählen.

![Request Page Druckerauswahl](/assets/images/365-business-print-agent/7b40a7721875b4237ff74101d0c7aaafeca27c3b8155c8f22fbf6aced188a5c0.png)  

Um den **Direktdruck** optimal zu nutzen, sollten Sie die Druckereinstellungen auf der Seite **Druckerauswahl** zuweisen.

### Druckerauswahl zuweisen

1. Öffnen Sie die Seite **Druckerauswahl**.
2. Wählen Sie eine **Benutzer-ID** aus oder lassen Sie das Feld leer (für alle Benutzer).
3. Geben Sie eine **Berichts-ID** an oder lassen Sie sie leer (für alle Berichte).
4. Wählen Sie den gewünschten **Drucker** aus dem Dropdown-Menü aus.


<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i>
    <strong>Hinweis</strong>
	In der Übersicht <b>Druckerverwaltung</b> finden Sie alle im 365 business Print Agent aktivierten Drucker und deren Konfigurationen.<br>
	Von hier aus können Sie Druckereinstellungen bequem öffnen oder einen Standarddrucker festlegen.<br>
	<img src="/assets/images/365-business-print-agent/f66b313410695f3a550f126155fc3b9d6abf9c663c5840e9d2c1887948fbfd41.png">
</div>

### Siehe auch

 - [Drucker](printer.md)
