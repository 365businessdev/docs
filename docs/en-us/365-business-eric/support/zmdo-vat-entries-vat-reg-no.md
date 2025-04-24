---
title: ELSTER Validierungsmeldung
---

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i>
    <strong>Info</strong>This page is not available in the selected language. The page is available in <b>German</b>. Please select other language to display.
</div>

Dieser Artikel unterstützt Sie bei der Lösung der ELSTER Validierungsmeldung:

> Es wurden MwSt.-Posten für die EU gefunden, für die keine USt-IdNr. angegeben wurde. Dies ist nicht zulässig und führt zu einem Fehler bei der Validierung. Bitte aktualisieren Sie die USt-IdNr. in den MwSt.-Posten und führen Sie eine Neuberechnung durch, um dieses Problem zu lösen.

#### Ursache

In den MwSt.-Posten für den angegebenen Zeitraum wurde ein oder mehrere MwSt.-Posten gefunden, die einem EU Land zugeordnet werden, jedoch über keine Angabe einer USt-IdNr. verfügen. Dies würde eine fehlerhafte, bzw. unvollständige Meldung, der Zusammenfassenden Meldung verursachen und von ELSTER abgelehnt werden.

![MwSt.-Posten](/assets/images/365-business-eric/vat-entries-missing-vat-reg-no.de-DE.png)

#### Lösung

Microsoft Dynamics 365 Business Central erlaubt es das Feld USt-IdNr. in den gebuchten MwSt.-Posten zu editieren. 
>**Hinweis**<br>Zusätzlich sollten Sie, um das Problem in Zukunft zu verhindern, das Feld USt-IdNr. im entsprechenden Debitor füllen.

##### Wie korrigiere ich die USt-IdNr. in gebuchten MwSt.-Posten?

1. Nach der Berechnung der ELSTER Steuerdaten Zeilen, finden Sie eine Zeile bei der die USt-IdNr. leer ist.
   ![ELSTER Steuerdaten Zeilen](/assets/images/365-business-eric/missing-vat-reg-no-tax-data-lines.de-DE.png)

2. Klicken Sie auf den AssistEdit-Button in der Spalte Wert um sich die MwSt.-Posten anzuzeigen.

3. Fügen Sie ggf. die Spalte USt-IdNr. hinzu.

4. Klicken Sie auf die Aktion **Liste bearbeiten**.

5. Tragen Sie die gültige USt-IdNr. ein.

6. Schließen Sie die MwSt.-Posten.

7. Führen Sie die Berechnung erneut aus, indem Sie die Aktion **Berechnen** ausführen.