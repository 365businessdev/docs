---
title: ELSTER Validierungsmeldung
---

<div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Info</strong>This page is not available in the selected language. The page is available in <b>German</b>. Please select other language to display.
</div>

Dieser Artikel unterstützt Sie bei der Lösung der ELSTER Validierungsmeldung:

> Die USt-IdNr. _NUMMER_ ist nicht korrekt oder vollständig formatiert.

#### Hintergrund

Die USt-IdNr. wird gemäß der Vorgaben der europäischen Union wie folgt formatiert:

| Inhalt | Beschreibung | Anzahl Zeichen |
| --- | --- | --- |
| Länderidentifizierung | Zweistelliger Ländercode des EU-Mitgliedslandes – in Deutschland startet die Nummer mit „DE“ | 2 |
| Länderspezifische Steuernummer | Neunstellige Steuernummer, vergeben durch die Finanzbehörden des EU-Mitgliedslandes. Diese Steuernummer kann Buchstaben und Zahlen enthalten. Sonderzeichen und Leerzeichen sind nicht zulässig. | 9 |

#### Ursache

Während der Verarbeitung in 365 business ERiC wurde eine USt-IdNr. gefunden, die nicht den Normen zur Formatierung der USt-IdNr. innerhalb der europäischen Union entspricht. 365 business ERiC prüft, basierend auf der vorliegenden Nummer, ob die Nummer korrket formatiert werden kann.

Dabei können folgende Situationen eintreten:

 - Es wurden unzulässige Zeichen, wie bspw. Sonderzeichen, gefunden und automatisch entfernt.
 - Die führenden Kennzeichen zur Länderidentifizierung sind nicht enthalten und konnten nicht automatisch angefügt werden.
 - Die führenden Kennzeichen zur Länderidentifizierung wurden automatisch ergänzt.

#### Handlungsempfehlung

Resultierend aus der o.g. Meldung, unabhängig vom detaillierten Kontext, empfehlen wir folgende Maßnahmen:

 1. Aktivieren Sie den **USt.-ID Validierungsdienst** um die eingetragenen USt-IdNr. automatisch durch Microsoft Dynamics 365 Business Central prüfen zu lassen.
 2. Prüfen Sie, sofern eine automatische Korrektur angewandt wurde, die korrigierte Nummer über das [**MwSt-Informationsaustauschsystem (MIAS)**](https://ec.europa.eu/taxation_customs/vies/#/vat-validation) der europäischen Union um die Richtigkeit der USt-IdNr. zu gewährleisten.
