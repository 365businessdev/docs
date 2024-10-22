Der 365 business E-Invoice Import Assistent ist das zentrale Modul, das Ihnen dabei hilft, auftretende Probleme während der Verarbeitung von ZUGFeRD PDF-Dateien bzw. bei der Erstellung von E-Rechnungen zu beheben.

Sollte während der Erstellung einer E-Rechnung (automatisiert über ein verknüpftes E-Mail-Konto oder manuell durch den Upload einer ZUGFeRD PDF-Datei) ein Problem auftreten, wird die Erstellung pausiert und erfordert Ihre Eingabe, um fortzufahren.

Mögliche Ursachen für Probleme sind vielfältig, wie beispielsweise:
* Unbekannte Kreditoren
* Fehlende Verknüpfung zwischen Ihren Artikeln und den Kreditorenartikeln
* Fehlerhafte Zuordnung von Einheiten (Maßeinheiten) zu Artikeln.


<div class="alert alert-notice">
	<i class="fa-solid fa-notes"></i> <strong>Wichtig:</strong>Die Zuweisung von Artikeln und Sachkonten erfolgt individuell für jeden Kreditor, um zu verhindern, dass aufgrund ähnlicher Artikel- oder Sachkontonummern versehentlich falsche Artikel oder Sachkonten automatisch verknüpft werden.
	<br/>Einheiten hingegen werden in den "E-Belegdiensten" unter "365 ZUGFERD" und "Zuordnung importieren" gespeichert.
</div>

<div class="alert alert-info">
	<i class="fa-solid fa-lightbulb"></i> <strong>Hinweis:</strong>Sobald eine Artikel-, Sachkonto- oder Einheitenzuweisung einmalig erfolgt ist, wird diese von 365 business E-Invoice für wiederkehrende Artikel, Sachkonten und Einheiten automatisch beachtet und gesetzt.
</div>

<div class="alert alert-info">
	<i class="fa-solid fa-lightbulb"></i> <strong>Hinweis:</strong>Bestehende Artikelzuweisungen können über die Artikelreferenzen, und Sachkontozuweisungen über die Zuordnung Text zu Konto für den jeweiligen Kreditor aufgehoben werden.
	<br/>Die Aufhebung von Einheitenzuweisungen erfolgt hingegen in den "E-Belegdiensten" unter "365 ZUGFERD" und "Zuordnung importieren".
</div>

<br/>
### Lösen von Problemen beim Import mit dem Import Assistent

Um problembehaftete E-Rechnungen zu identifizieren, verwenden Sie die Business Central Suche und rufen den Bereich "E-Belege" auf. 
Dort erkennen Sie Problemfälle an einem "Fehler"-Status in der "Status des elektronischen Belegs"-Spalte.

1. Öffnen Sie "E-Belege" über die Business Central Suche. 
2. Identifizieren Sie einen fehlerhaften Beleg und öffnen Sie diesen.
3. In der Ansicht "E-Beleg" können Sie den Bereich "Fehlermeldungen" erweitern, um Details zu den vorliegenden Problemen zu sehen.

![365 business E-Invoice](/assets/images/365-business-e-invoice/e-document-overview.png) 

#### Schritt-für-Schritt Problemlösung

Rufen Sie den "Import Assistent" über die 3 Punkte neben der "Belegpostnr." auf.

Der Import Assistent unterstützt Sie bei der schrittweisen Behebung der Probleme. Gleich zu Beginn werden Sie darüber informiert, wie viele Probleme zu lösen sind, damit die E-Rechnung erstellt werden kann. 
Die betroffene PDF-Datei wird dabei visuell auf der rechten Seite dargestellt, um Ihnen die Bearbeitung zu erleichtern.
Durch einen Klick auf "Weiter" startet die Behebung der Probleme in einzelnen Schritten.

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Hinweis:</strong> Sie können den 365 business E-Invoice Import Assistenten jederzeit abbrechen und neu starten.
</div>

![365 business E-Invoice](/assets/images/365-business-e-invoice/assistent1.png) 

<br/>
##### Kreditor

Falls der Kreditor der ZUGFeRD PDF-Datei nicht automatisch erkannt wird, beginnt der Import Assistent mit dieser Zuordnung.
<br/>
Wählen Sie den entsprechenden Kreditor aus oder erstellen Sie einen neuen Kreditor.

![365 business E-Invoice](/assets/images/365-business-e-invoice/assistent2.png) 
<br/>
##### Rechungspositionen (Artikel und Sachkonten)

Anschließend werden alle Rechnungspositionen angezeigt, für die keine automatische Verknüpfung mit einem Ihrer Artikel oder Sachkonto gefunden wurde.
<br/>
Wählen Sie den entsprechenden Artikel oder das Sachkonto aus um die Verknüpfung zu erstellen.

![365 business E-Invoice](/assets/images/365-business-e-invoice/assistent3.png) 

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Hinweis:</strong>Für jede Rechnungsposition können Sie wählen, ob es sich um einen Artikel oder ein Sachkonto handelt.
	<br/>Abhängig von Ihrer Auswahl ändern sich die verfügbaren Daten, die Sie zuweisen können.
</div>

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Hinweis:</strong>In der PDF-Ansicht auf der rechten Seite wird jeweils die aktuelle Rechnungspositionszeile hervorgehoben, um den Überblick zu behalten.
</div>

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Hinweis:</strong>Wenn ein Artikel nicht verfügbar ist, können Sie diesen vorerst ignorieren und in einem späteren Schritt mit einer Einkaufszeile verknüpfen.
	<br/>Sobald ein Artikel erfolgreich zugeordnet wurde, wird dieser in Zukunft automatisch erkannt.
</div>
<br/>
##### Einheiten

In Fällen, in denen die Einheiten der Rechnungspositionen nicht korrekt erkannt oder zugeordnet werden können, unterstützt der Import Assistent Sie bei der manuellen Zuordnung von Maßeinheiten (z. B. Stück, Kilogramm, Liter).
<br/>
Dies ist besonders wichtig, um sicherzustellen, dass die Rechnung richtig berechnet wird, da verschiedene Kreditoren unter Umständen unterschiedliche Einheiten für denselben Artikel verwenden.
<br/>
Wählen Sie die entsprechende Einheit aus.

![365 business E-Invoice](/assets/images/365-business-e-invoice/assistent4.png) 

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Hinweis:</strong>Sobald eine Einheit einmal zugeordnet wurde, wird diese Information für zukünftige Rechnungen desselben Kreditors automatisch übernommen, um den Prozess zu beschleunigen.
</div>
<br/>
##### Abschluss der Problembehebung

Nachdem alle Probleme gelöst wurden, wird die E-Rechnung durch einen Klick auf "Fertigstellen" erzeugt und der Import Assistent geschlossen.
<br/>
Der Status des Belegs wird sich anschließend von "Fehler" auf "In Bearbeitung" ändern.

