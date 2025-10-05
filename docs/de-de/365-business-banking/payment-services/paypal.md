# PayPal

PayPal ist ein weltweit führender Online-Zahlungsdienst, der es Unternehmen und Privatpersonen ermöglicht, Zahlungen sicher und einfach zu senden und zu empfangen. Mit **365 business Banking** können Sie Ihr PayPal-Konto direkt mit **Microsoft Dynamics 365 Business Central** verbinden, um Transaktionen automatisch abzurufen und in den Zahlungsabgleich einzubeziehen.

## Voraussetzungen

- Ein aktives PayPal Konto.
- API Zugangsdaten (Client ID und Client Secret) für die PayPal REST API. Diese können Sie in Ihrem PayPal Entwicklerkonto erstellen (siehe [PayPal Entwicklerkonto](https://developer.paypal.com/dashboard/applications/live)).

## Schritt-für-Schritt-Anleitung

1. Wählen Sie **Bankkonten** in der Suche von Microsoft Dynamics 365 Business Central aus.
2. Erstellen Sie ein neues Bankkonto oder wählen Sie ein bestehendes aus.
3. Wählen Sie in der **Bankkonto Karte**, unter **Aktionen** die Aktionsgruppe **Kontoverbindung** und **Verbinden…** aus.
   ![Verbindung starten](/assets/images/365-business-banking/connect-banking-provider.de-DE.png)
4. Wählen Sie aus der Liste **PayPal** aus.
   ![Anbieter auswählen](/assets/images/365-business-banking/select-banking-provider.de-DE.png)
5. Bestätigen Sie die Bestätigugsabfrage mit **Ja**.
6. Geben Sie die Client ID und das Client Secret, aus der Seite **API Credentials** unter **REST API apps**, ein.  
   ![Anmeldedaten eingeben](/assets/images/365-business-banking/paypal-setup.de-DE.png)
7. Wählen Sie die Aktion **Authentifizieren**, um den Zugriff zu prüfen und zu aktivieren.
   ![Authentifizieren](/assets/images/365-business-banking/paypal-authentication-successful.de-DE.png)

## Kontoverbindung trennen

Um die Verbindung zu Ihrem PayPal-Konto zu trennen, gehen Sie wie folgt vor:

1. Wählen Sie **Bankkonten** in der Suche von Microsoft Dynamics 365 Business Central aus.
2. Wählen Sie das Bankkonto aus, das mit PayPal verbunden ist.
3. Wählen Sie in der **Bankkonto Karte**, unter **Aktionen** die Aktionsgruppe **Kontoverbindung** und **Verbindung lösen** aus.
4. Bestätigen Sie die Bestätigungsabfrage mit **Ja**.

