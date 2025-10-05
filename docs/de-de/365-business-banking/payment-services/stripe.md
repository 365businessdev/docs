# Stripe

Stripe ist ein Zahlungsdienstleister, der es Unternehmen ermöglicht, Zahlungen online zu akzeptieren und zu verarbeiten. Mit **365 business Banking** können Sie Ihr Stripe-Konto direkt mit **Microsoft Dynamics 365 Business Central** verbinden, um Transaktionen automatisch abzurufen und in den Zahlungsabgleich einzubeziehen.

Mit Stripe können Sie Zahlungen von Kreditkarten, Debitkarten und anderen Zahlungsmethoden akzeptieren, sowohl online als auch in mobilen Anwendungen. Stripe bietet eine benutzerfreundliche API, die es Entwicklern ermöglicht, Zahlungsfunktionen nahtlos in ihre Anwendungen zu integrieren.

## Voraussetzungen

- Ein aktives Stripe Konto.
- API Zugangsdaten (Publishable Key und Secret Key) für die Stripe API. Diese können Sie in Ihrem Stripe Dashboard erstellen (siehe [Stripe API Keys](https://dashboard.stripe.com/apikeys)).

## Schritt-für-Schritt-Anleitung

1. Wählen Sie **Bankkonten** in der Suche von Microsoft Dynamics 365 Business Central aus.
2. Erstellen Sie ein neues Bankkonto oder wählen Sie ein bestehendes aus.
3. Wählen Sie in der **Bankkonto Karte**, unter **Aktionen** die Aktionsgruppe **Kontoverbindung** und **Verbinden…** aus.
   ![Verbindung starten](/assets/images/365-business-banking/connect-banking-provider.de-DE.png)
4. Wählen Sie aus der Liste **Stripe** aus.
   ![Anbieter auswählen](/assets/images/365-business-banking/select-banking-provider.de-DE.png)
5. Bestätigen Sie die Bestätigugsabfrage mit **Ja**.
6. Geben Sie den Geheimen API Schlüssel (Secret Key) ein.  
   ![Anmeldedaten eingeben](/assets/images/365-business-banking/stripe-setup.de-DE.png)
7. Wählen Sie die Aktion **Authentifizieren**, um den Zugriff zu prüfen und zu aktivieren.

## Kontoverbindung trennen

Um die Verbindung zu Ihrem Stripe-Konto zu trennen, gehen Sie wie folgt vor:

1. Wählen Sie **Bankkonten** in der Suche von Microsoft Dynamics 365 Business Central aus.
2. Wählen Sie das Bankkonto aus, das mit Stripe verbunden ist.
3. Wählen Sie in der **Bankkonto Karte**, unter **Aktionen** die Aktionsgruppe **Kontoverbindung** und **Verbindung lösen** aus.
4. Bestätigen Sie die Bestätigungsabfrage mit **Ja**.
