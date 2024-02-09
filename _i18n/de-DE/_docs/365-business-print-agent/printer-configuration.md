Druckereinstellungen werden als _Drucker_ in Microsoft Dynamics 365 Business Central verwendet. Für jeden Drucker wird automatisch eine Standarddruckerkonfiguration erstellt. Diese Konfiguration wird mit den verfügbaren Funktionen Ihres Druckers erstellt.

Außerdem können Sie weitere Konfigurationen für verschiedene Szenarien wie Farb- und/oder Duplexdruck erstellen.

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Wichtig:</strong> Das <b>Code</b> Feld einer Druckereinstellung wird dem Benutzer über die <b>Druckerauswahl</b> und an verschiedenen anderen Stellen in Microsoft Dynamics 365 Business Central angezeigt.<br>Achten Sie darauf, dass Sie einen benutzerfreundlichen Namen für die Druckereinstellung wählen.
</div>

![Druckereinstellung](/assets/images/365-business-print-agent/1b3143accd75d67305341ac9a314b681aa754fe966df87c434e0d240752862a8.png)  

## Wie erstelle ich eine Druckereinstellung?

Die Druckereinstellung kann manuell über die Kartenseite **Druckereinstellung** oder mit Hilfe der Seite **Unterstützte Druckereinstellung** erstellt werden.

 1. **Drucker** Page öffnen.
 2. **Druckereinstellungen hinzufügen** wählen.<br>
    ![Unterstützte Druckereinstellung](/assets/images/365-business-print-agent/3dec41cc0618402d763e35f398cfac74961504a8b36643f152e31f10c428c125.png)  

 3. **Weiter** wählen.
 4. Geben Sie einen benutzerfreundlichen Namen an (Feld **Code**).
 5. Geben Sie eine kurze **Beschreibung** an, um die Verwendung der Konfiguration zu beschreiben.<br>
    ![Unterstützte Druckereinstellung - Allgemein](/assets/images/365-business-print-agent/1a276d89ea83cdf50266c0cf659f387072d70168d92310a935b122fe2009b856.png)
 6. **Weiter** wählen.
 7. Wählen Sie **Papierart** (z. B. A4-Papier (210 mm x 297 mm)).
    1. Wenn Sie **Benutzerdefiniertes** Papierformat angeben, müssen Sie Höhe und Breite des Papierformats angeben. _(Optional)_
 8. Geben Sie an, ob der Farbdruck aktiviert werden soll oder nicht.<br>_(nur anwendbar, wenn der Drucker Farbdruck unterstützt)_
 9.  Geben Sie an, ob Simplex- oder Duplexdruck verwendet werden soll.<br>(nur anwendbar, wenn der Drucker den Duplex-Modus unterstützt)_
 10. Legen Sie fest, ob mehrere Papierfächer verwendet werden sollen oder nicht.
 11. Wählen Sie **Papierquelle** (Papierfach) für alle Seiten _(wenn nicht ausgewählt, mehrere Papierfächer verwenden)_ oder für die verschiedenen Optionen.<br>
    ![Unterstützte Druckereinstellung - Auswahl des Papierfachs](/assets/images/365-business-print-agent/8a5abd438a19a5badc512c15d08a0ebb706f4c491593f4f58e616e8c3a1f9e8f.png)
 12. **Fertigstellen** auswählen.
 13. Um die Druckereinstellung zu aktivieren **Ja** auswählen.<br>
    ![Unterstützte Druckereinstellung - Aktivieren der Druckereinstellung](/assets/images/365-business-print-agent/e5a81f4c85fe8f35f56e061524f6e9b021a7b856078c0fe3a49ba1fbc607ce97.png)  

<div class="alert alert-notice">
    <i class="fa-solid fa-notes"></i> <strong>Gut zu wissen:</strong>In manchen Fällen kann es sinnvoll sein die Druckausgabe während des Drucks zu drehen, um beispielsweise ein Layout, dass im Querformat erstellt wurde im Hochformat auf einem Etikettendrucker auszudrucken.<br>
    Verwenden Sie hierzu das Feld <strong>Drehung</strong> in den Druckereinstellungen um zu definieren, wie die Druckausgabe gedreht werden soll.
</div>

## Weitere Schritte

Jetzt können Sie mit dem 365 business Print Agent drucken, indem Sie die Druckereinstellung auf der Seite Berichtsanforderung manuell auswählen.

![Request Page Druckerauswahl](/assets/images/365-business-print-agent/7b40a7721875b4237ff74101d0c7aaafeca27c3b8155c8f22fbf6aced188a5c0.png)  

Um die Direktdruckfunktion optimal nutzen zu können, sollten Sie nun die Druckereinstellung auf der Seite **Druckerauswahl** festlegen.

#### Wie weise ich Drucker in der Druckerauswahl zu

 1. **Druckerauswahl** öffnen.
 2. Wählen Sie **Benutzer-ID** oder lassen Sie das Feld leer, um den Drucker (Konfiguration) für jeden Benutzer zuzuweisen.
 3. Geben Sie **Berichts-ID** an oder lassen Sie das Feld leer, um den Drucker (die Konfiguration) für jeden Bericht zuzuweisen.
 4. Wählen Sie **Druckername** aus dem Dropdown-Menü aus.

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Hinweis:</strong> Microsoft Dynamics 365 Business Central bietet eine zusätzliche Übersicht, die <b>Druckerverwaltung</b>. Hier finden Sie alle im Print Agent aktivierten Drucker (Konfigurationen). Von hier aus können Sie die Druckereinstellung einfach öffnen oder den ausgewählten Drucker (Konfiguration) als Standard festlegen.<br><img src="/assets/images/365-business-print-agent/f66b313410695f3a550f126155fc3b9d6abf9c663c5840e9d2c1887948fbfd41.png">
</div>

### Siehe auch

 - [Drucker](../printer/)
