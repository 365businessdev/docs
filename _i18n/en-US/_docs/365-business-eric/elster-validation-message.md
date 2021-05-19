> This page is not available in the selected language. The page is available in **German**. Please select other language to display.

> **Hinweis**<br>ELSTER Validierungsmeldungen wurden mit der 365 business ERiC Version 17.5 eingeführt.<br>In früheren Versionen wurde nur der grundsätzliche Plausibilitätsprüffehler zurückgemeldet.<br><br>Bitte prüfen Sie, ob Sie über die aktuellste Version von 365 business ERiC verfügen.

Unter **ELSTER Validierungsmeldungen** werden in der ELSTER Steuerdatenkarte im Fall der fehlerhaften Übertragung sämtliche Plausibilitäts- oder Validierungsfehler und -warnungen zu einer Steuerdatenübermittlung angezeigt.

![](/assets/images/365-business-eric/elster-validation-message.png)

#### Woher stammen die ELSTER Validierungsmeldungen?
Die Validierungsmeldungen werden durch die ELSTER Server oder die ERiC Bibliothek auf Basis der übermittelten XML-Datei erzeugt. Die Meldungen beschreiben dabei Warnungen und Fehler in der übertragenen XML-Datei, die zur Ablehnung der Übermittlung durch ELSTER geführt haben.

Die Validierungsmeldungen unterscheiden sich dabei je nach verwendeter [ELSTER Steuerdatenart](../elster-tax-data-type/).

#### Häufige Validierungsmeldungen

**_"Der Parameter enthält ungültige UTF-8 Multibytesequenzen. [610301400]"_**

Dieser Fehler tritt auf, wenn Sonderzeichen in Feldern enthalten sind. Prüfen Sie beispielsweise ob die Telefonnr. des Standardkontakt für das Finanzamt (siehe [Firmendaten](../company-information/)) ein Sonderzeichen (z.B. Gedankenstrich statt Trennstrich) enthält.

**_"eSigner: Falsche PIN. [ERIC_CRYPT_E_PIN_WRONG]"_**

Der hinterlegte Zertifikat PIN ist nicht korrekt (siehe [Einrichtung](../setup/)).

> **Hinweis**<br>Die Liste der häufigen Validierungsmeldungen wird regelmäßig aktualisiert um Ihnen direkt Lösungsvorschläge zu bieten. Sollte Ihre Meldung hier nicht aufgelistet sein und Sie benötigen Unterstützung, wenden Sie sich bitte an support@365businessdev.de.


### Siehe auch
 - [ELSTER Steuerdatenarten](../elster-tax-data-type/)
 - [Firmendaten](../company-information/)
 - [Einrichtung](../setup/)