# Zahlungsausgang Buch.-Blatt

Die Zlg.-Ausg. Buch.-Blätter in Microsoft Dynamics 365 Business Central sind der zentrale Ort für die Initiierung von ausgehenden Zahlungen. Dabei wird dem Buch.-Blatt ein Bankkonto und eine Zahlungsform zugeordnet. Die Zahlungsform bestimmt, ob es sich um eine SEPA-Überweisung, eine SEPA-Echtzeitüberweisung oder eine SEPA-Lastschrift handelt.

Entsprechend kann es für jedes Bankkonto ein oder mehrere Zlg.-Ausg. Buch.-Blätter geben, die jeweils für eine bestimmte Zahlungsform konfiguriert sind. Dies ermöglicht eine flexible Handhabung der Zahlungen und eine einfache Anpassung an die jeweiligen Anforderungen.

## Zahlung durchführen

Um Zahlungen zu initiieren, verwenden Sie die Zlg.-Ausg. Buch.-Blätter in Microsoft Dynamics 365 Business Central. Gehen Sie wie folgt vor:

1. Wählen Sie **Zlg.-Ausg. Buch.-Blätter** in der Suche von Microsoft Dynamics 365 Business Central aus.
2. Wählen Sie ein vorhandenes Buch.-Blatt für Ihr Bankkonto und Ihre Zahlungsform aus oder erstellen Sie ein neues Buch.-Blatt.
3. Wählen Sie die Aktion **Buch.-Blatt bearbeiten**, um das Buch.-Blatt zu bearbeiten.
4. Erfassen Sie die Buch.-Blattzeilen für Ihre Zahlungen, oder verwenden Sie die Aktion **Zahlungsvorschlag**, um automatisch Zahlungsvorschläge zu generieren.
5. Überprüfen Sie die Buch.-Blattzeilen und stellen Sie sicher, dass alle Informationen korrekt sind.
   Prüfen Sie insbesondere die Beträge, Verwendungszwecke und das Bankkonto des Empfängers.
6. Wählen Sie die Aktion **Zahlungen durchführen**, um die Zahlungen zu verarbeiten.
7. Bestätigen Sie die Durchführung der Zahlungen und die Buchung des Buch.-Blattes.

<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Gut zu wissen</strong>
    Im Zlg.-Ausg. Buch.-Blatt steht zusätzlich die Aktion <strong>Zahlungen durchführen und buchen</strong> zur Verfügung. Diese Aktion kombiniert die Durchführung der Zahlungen mit der Buchung des Buch.-Blattes in einem Schritt.<br>Dies ist besonders nützlich, wenn Sie die Zahlungen sofort verbuchen möchten.
</div>

## Zahlungsausgang buchen

Nach der Durchführung der Zahlungen können die Buch.-Blattzeilen im Zlg.-Ausg. Buch.-Blatt gebucht werden. Sofern die Aktion **Zahlungen durchführen und buchen** verwendet wurde, erfolgt die Buchung automatisch. Andernfalls müssen Sie die Zahlung über die Aktion **Buchen** im Zlg.-Ausg. Buch.-Blatt manuell buchen.