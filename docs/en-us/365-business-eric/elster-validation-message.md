# ELSTER Validierungsmeldungen

<div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Info</strong>This page is not available in the selected language. The page is available in <b>German</b>. Please select other language to display.
</div>

Unter **ELSTER Validierungsmeldungen** werden in der ELSTER Steuerdatenkarte im Fall der fehlerhaften Übertragung sämtliche Plausibilitäts- oder Validierungsfehler und -warnungen zu einer Steuerdatenübermittlung angezeigt.

![](/assets/images/365-business-eric/elster-validation-message.png)

## Woher stammen die ELSTER Validierungsmeldungen?
Die Validierungsmeldungen werden durch die ELSTER Server oder die ERiC Bibliothek auf Basis der übermittelten XML-Datei erzeugt. Die Meldungen beschreiben dabei Warnungen und Fehler in der übertragenen XML-Datei, die zur Ablehnung der Übermittlung durch ELSTER geführt haben.

Die Validierungsmeldungen unterscheiden sich dabei je nach verwendeter [ELSTER Steuerdatenart](elster-tax-data-type.md).

## Häufige Validierungsmeldungen

**_"Der Parameter enthält ungültige UTF-8 Multibytesequenzen. [610301400]"_**

Dieser Fehler tritt auf, wenn Sonderzeichen in Feldern enthalten sind. Prüfen Sie beispielsweise ob die Telefonnr. des Standardkontakt für das Finanzamt (siehe [Firmendaten](company-information.md)) ein Sonderzeichen (z.B. Gedankenstrich statt Trennstrich) enthält.

**_"eSigner: Falsche PIN. [ERIC_CRYPT_E_PIN_WRONG]"_**

Der hinterlegte Zertifikat PIN ist nicht korrekt (siehe [Einrichtung](setup.md)).

<div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Info</strong> Die Liste der häufigen Validierungsmeldungen wird regelmäßig aktualisiert um Ihnen direkt Lösungsvorschläge zu bieten. Sollte Ihre Meldung hier nicht aufgelistet sein und Sie benötigen Unterstützung, wenden Sie sich bitte an <a href="mailto:support@365businessdev.de">support@365businessdev.de</a>.
</div>

## Siehe auch
 - [ELSTER Steuerdatenarten](elster-tax-data-type.md)
 - [Firmendaten](company-information.md)
 - [Einrichtung](setup.md)