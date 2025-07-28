# Bankkontoabstimmung Kontextwörter

Mit 365 business Banking können Sie Banktransaktionen abrufen und in der Zahlungsabstimmung in Microsoft Dynamics 365 Business Central verwenden. Dies ermöglicht eine effiziente Verwaltung Ihrer Bankkonten und eine nahtlose Integration in Ihre Finanzprozesse. Über den Microsoft Standard hinausgehend, wird bei der Zahlungsabstimmung der Verwendungszweck analysiert bzw. Belegnummern extrahiert, um die Zuordnung zu den offenen Posten zu optimieren. Dabei werden auch Teilbelegnummern, bis zu vier Zeichen berücksichtigt, um bei Sammelüberweisungen eine genauere Zuordnung zu ermöglichen.

Zur Optimierung der Zuordnung von Teilbelegnummern, können Sie gängige Kontextwörter definieren, die bei der Analyse des Verwendungszwecks berücksichtigt werden und die Gewichtung einer Teilbelegnummer erhöhen.

<div class="alert alert-success">
    <i class="fa-duotone fa-solid fa-question-circle fa-xl"></i>
    <strong>Wussten Sie schon?</strong>
    Bei der Installation von 365 business Banking werden bereits einige gängige Kontextwörter für die Zahlungsabstimmung eingerichtet.<br>
    Diese können Sie jederzeit anpassen oder erweitern, um die Zuordnung zu den offenen Posten zu optimieren.
</div>

![Bankkontoabstimmung Kontextwörter](/assets/images/365-business-banking/context-words.en-US.png)

## Schritt-für-Schritt-Anleitung

Gehen Sie wie folgt vor, um Kontextwörter für die Zahlungsabstimmung zu definieren:

1. Wählen Sie **Bankkontoabstimmung Kontextwörter** in der Suche von Microsoft Dynamics 365 Business Central aus.
2. Wählen Sie **Neu**, um ein neues Kontextwort hinzuzufügen.
3. Wählen Sie die **Art** aus, um festzulegen, ob das Kontextwort für Debitoren, Kreditoren oder beides gelten soll.
4. Geben Sie das **Kontextwort** ein, das bei der Analyse des Verwendungszwecks berücksichtigt werden soll.
5. Wählen Sie die **Stärke** des Kontextworts aus, um die Gewichtung bei der Analyse zu beeinflussen.

<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Gut zu wissen</strong>
    Groß- und Kleinschreibung wird bei der Analyse des Verwendungszwecks nicht berücksichtigt.<br>
    Das bedeutet, dass das Kontextwort unabhängig von der Schreibweise erkannt wird.
</div>

