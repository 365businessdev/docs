# Banktransaktion Aufteilungsregeln

In einigen Fällen kann es erforderlich sein, Banktransaktionszeilen aufzuteilen, um die Zuordnung zu mehreren Sachkonten durchzuführen. Dies kann beispielsweise bei Lastschriften der Steuerbehörde oder bei Krediten (Tilgung und Zinsen) der Fall sein, bei denen mehrere Beträge in einer einzigen Transaktion enthalten sind.

Zusätzlich zur manuellen Aufteilung von Banktransaktionszeilen, wie in der [Schritt-für-Schritt-Anleitung zum Abrufen von Banktransaktionen](../bank-reconciliation.md#banktransaktionszeilen-aufteilen) beschrieben, können Sie auch automatische Aufteilungsregeln einrichten. Diese Regeln ermöglichen es, bestimmte Transaktionen automatisch aufzuteilen, basierend auf vordefinierten Kriterien.
Diese Regeln werden beim Abruf der Banktransaktionen angewendet und helfen dabei, den Prozess der Zahlungsabstimmung zu optimieren und zu automatisieren.

## Schritt-für-Schritt-Anleitung

Gehen Sie wie folgt vor, um Banktransaktionsaufteilungsregeln in 365 business Banking einzurichten:

1. Wählen Sie **Banktransaktion Aufteilungsregeln** in der Suche von Microsoft Dynamics 365 Business Central aus.
2. Klicken Sie auf **Neu**, um eine neue Aufteilungsregel zu erstellen.
3. Geben Sie den **Code** und die **Beschreibung** für die Regel ein, um sie eindeutig zu identifizieren.
4. Legen Sie, falls erforderlich, die Filter für die Regel fest, um zu bestimmen, bei welchem Bankkonto und/oder bei welcher Geschäftspartner IBAN die Regel angewendet werden soll.
5. Legen Sie im Reiter **Zuordnung** die Regel für die Zuordnung fest:
   - **Suchart im Verwendungszweck**: Wählen Sie aus, an welcher Position im Verwendungszweck nach dem Suchbegriff gesucht werden soll (Enthält, Beginnt mit, Regulärer Ausdruck).
   - **Suchmuster**: Geben Sie das Suchmuster oder den regulären Ausdruck (bei Suchart "Regulärer Ausdruck") ein, der im Verwendungszweck der Banktransaktion gefunden werden soll.
   - **Verhalten bei Abweichung**: Legen Sie fest, wie die Regel angewendet werden soll, wenn das Suchmuster nicht gefunden wird (Überspringen, Restbetragzeile erstellen, Proportional verteilen).
6. Erstellen Sie die **Zeilen** der einzelnen Beträge, die erwartet werden, wenn die Regel angewendet wird.

![Banktransaktion Aufteilungsregel](/assets/images/365-business-banking/bank-transaction-split-rule.de-DE.png)

### Aufteilungsregelzeilen

In den Zeilen der Aufteilungsregel definieren Sie die einzelnen Beträge, die erwartet werden, wenn die Regel angewendet wird. Jede Zeile repräsentiert einen Teilbetrag der Gesamttransaktion und enthält die folgenden Felder:

- **Label / Suchmuster**: Gibt ein Label oder ein Suchmuster an, dass im Verwendungszweck der Banktransaktion gefunden werden soll, um den Betrag zu identifizieren.
- **Betragserkennung**: Gibt an, ob der Betrag **Nach dem Label** (direkt nach dem Suchmuster) oder über einen eigenen regulären Ausdruck (**Regulärer Ausdruck**) erkannt werden soll.
- **Vorkommen**: Gibt an, ob das Erste, Letzte oder Jedes Vorkommen des Suchmusters berücksichtigt werden soll.
- **Sachkontonr.**: Gibt das Sachkonto an, dem der Betrag zugeordnet werden soll. (optional)

#### Was passiert, wenn eine Zeile nicht gefunden wird?

In einigen Fällen kann aus dem Verwendungszweck der Banktransaktion nicht jeder Teilbetrag eindeutig identifiziert werden. Dennoch ist die Aufteilung bekannt und kann zum Beispiel mit einem **Festbetrag** oder einem **Prozentsatz** definiert werden. In diesem Fall kann über das Feld **Wenn nicht gefunden** der Prozentsatz oder der Festbetrag angegeben werden.

<div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Hinweis</strong>
    Die Verwendung von Aufteilungsregeln mit Festbeträgen oder Prozentsätzen kann bspw. bei Krediten (Tilgung und Zinsen) sinnvoll sein, bei denen die Beträge bekannt sind, aber nicht immer im Verwendungszweck der Banktransaktion enthalten sind.
</div>