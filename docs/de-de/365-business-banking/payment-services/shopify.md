# Shopify

<div class="alert alert-warn">
    <i class="fa-duotone fa-solid fa-triangle-exclamation fa-xl"></i>
    <strong>Achtung</strong>
    Die Integration mit Shopify befindet sich derzeit in der Beta-Phase. Einige Funktionen könnten noch nicht vollständig verfügbar oder stabil sein. Wir empfehlen, diese Integration zunächst in einer Testumgebung zu evaluieren, bevor Sie sie in einer Produktionsumgebung einsetzen.
</div>

Shopify ist eine E-Commerce-Plattform, die es Unternehmen ermöglicht, Online-Shops zu erstellen und zu verwalten. Mit **365 business Banking** können Sie Ihr Shopify-Konto direkt mit **Microsoft Dynamics 365 Business Central** verbinden, um Transaktionen automatisch abzurufen und in den Zahlungsabgleich einzubeziehen.

## Voraussetzungen

- Ein aktives Shopify Konto.

## Schritt-für-Schritt-Anleitung

1. Wählen Sie **Bankkonten** in der Suche von Microsoft Dynamics 365 Business Central aus.
2. Erstellen Sie ein neues Bankkonto oder wählen Sie ein bestehendes aus.
3. Wählen Sie in der **Bankkonto Karte**, unter **Aktionen** die Aktionsgruppe **Kontoverbindung** und **Verbinden…** aus.
   ![Verbindung starten](/assets/images/365-business-banking/connect-banking-provider.de-DE.png)
4. Wählen Sie aus der Liste **Shopify** aus.
   ![Shopify Verbindung auswählen](/assets/images/365-business-banking/select-shopify-provider.de-DE.png)
5. Bestätigen Sie die Bestätigugsabfrage mit **Ja**.
6. Geben Sie den **Shop Namen** Ihres Shopify Shops ein (z.B. `meinshop` für `meinshop.myshopify.com`).
7. Klicken Sie auf **Authentifizieren**, um die Verbindung zwischen Shopify und 365 business Banking herzustellen.
8. Wählen Sie im sich öffnenden Browserfenster die Aktion **Weiter zur Autorisierung** aus.
   ![Shopify Autorisierung](/assets/images/365-business-banking/connect-shopify.de-DE.png)
9.  Melden Sie sich mit Ihren Shopify Zugangsdaten an.
10. Bestätigen Sie die Installation der **365 business Banking** App in Ihrem Shopify Shop.
    ![Shopify App Installation](/assets/images/365-business-banking/install-shopify-app.de-DE.png)

    <div class="alert alert-warn">
        <i class="fa-duotone fa-solid fa-triangle-exclamation fa-xl"></i>
        <strong>Achtung</strong>
        Da die <strong>365 business Banking</strong> App für Shopify exklusiv für die Integration mit Microsoft Dynamics 365 Business Central entwickelt wurde, ist diese zum aktuellen Zeitpunkt durch Shopify "<i>nicht überprüft</i>".<br>
        Shopify sieht diesen Status explizit für Apps vor, die nicht für die breite Öffentlichkeit entwickelt wurden, sondern für den Einsatz in Verbindung mit einer spezifischen Softwarelösung, wie in diesem Fall Microsoft Dynamics 365 Business Central.
    </div>

11.  Nach erfolgreicher Installation erscheint die Bestätigung, der erfolgreichen Autorisierung.
    ![Shopify Autorisierung erfolgreich](/assets/images/365-business-banking/connect-shopify-success.de-DE.png)
12.  Kehren Sie zu Microsoft Dynamics 365 Business Central zurück. Die Verbindung ist nun hergestellt.

### Aktualisierung der Kontoverbindung

Unter Umständen kann es erforderlich sein, die Kontoverbindung zu aktualisieren, z.B. wenn durch **365 business Banking** weitere Funktionen in Ihrem Shopify Shop installiert wurden oder wenn Sie die Berechtigungen der bestehenden Verbindung anpassen möchten.

Um die Kontoverbindung zu aktualisieren, gehen Sie wie folgt vor:

1. Wählen Sie **Bankkonten** in der Suche von Microsoft Dynamics 365 Business Central aus.
2. Wählen Sie das Bankkonto aus, dessen Verbindung Sie aktualisieren möchten.
3. Wählen Sie in der **Bankkonto Karte**, unter **Aktionen** die Aktionsgruppe **Kontoverbindung** und **Einstellungen** aus.
4. Klicken Sie auf **Authentifizieren**, um die Verbindung zwischen Shopify und 365 business Banking zu aktualisieren.
5. Folgen Sie den Anweisungen im Browser, um die Verbindung zu aktualisieren. (Analog zu Schritt 8-11 der vorherigen Anleitung.)

## Kontoverbindung trennen

1. Wählen Sie **Bankkonten** in der Suche von Microsoft Dynamics 365 Business Central aus.
2. Wählen Sie das Bankkonto aus, dessen Verbindung Sie trennen möchten.
3. Wählen Sie in der **Bankkonto Karte**, unter **Aktionen** die Aktionsgruppe **Kontoverbindung** und **Verbindung aufheben...** aus.
4. Bestätigen Sie die Bestätigugsabfrage mit **Ja**.