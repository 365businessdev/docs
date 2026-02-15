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
11.  Nach erfolgreicher Installation erscheint die Bestätigung, der erfolgreichen Autorisierung.
    ![Shopify Autorisierung erfolgreich](/assets/images/365-business-banking/connect-shopify-success.de-DE.png)
12.  Kehren Sie zu Microsoft Dynamics 365 Business Central zurück. Die Verbindung ist nun hergestellt.

## Private App Integration

Neben der **365 business Banking** App für Shopify, die den Verbindungsprozess vereinfacht, besteht auch die Möglichkeit, eine Verbindung über eine _private_ App herzustellen. Diese Methode erfordert mehr manuellen Aufwand, bietet jedoch für Unternehmen mit speziellen Anforderungen oder Einschränkungen eine alternative Möglichkeit zur Integration.

### Private Shopify App erstellen

1. Navigieren Sie zu **https://dev.shopify.com/** und melden Sie sich mit Ihren Shopify Zugangsdaten an.
2. Wählen Sie **Apps** im linken Menüband aus.
3. Wählen Sie **Create app** aus.
4. Im Bereich **Start from Dev Dashboard** geben Sie einen App-Namen ein (z.B. `365 business Banking (Private)`).
5. Wählen Sie **Create**, um die App zu erstellen.
6. Erstellen Sie eine neue Version mit folgenden Einstellungen:
   - **App URL**: `https://banking.365businessapi.com/api/v1.0/shopify/connect`
   - **Redirect URL**: `https://banking.365businessapi.com/api/v1.0/shopify/callback`
   - **Scopes**: `read_shopify_payments_accounts,read_shopify_payments_payouts`
   - **Optional Scopes**: `read_orders`
   - **API Version**: `2026-01`
7. Wählen Sie **Release** und bestätigen Sie die Veröffentlichung der App.

### Shopify Verbindungseinrichtung

1. Wählen Sie **Bankkonten** in der Suche von Microsoft Dynamics 365 Business Central aus.
2. Erstellen Sie ein neues Bankkonto oder wählen Sie ein bestehendes aus.
3. Wählen Sie in der **Bankkonto Karte**, unter **Aktionen** die Aktionsgruppe **Kontoverbindung** und **Verbinden…** aus.
   ![Verbindung starten](/assets/images/365-business-banking/connect-banking-provider.de-DE.png)
4. Wählen Sie aus der Liste **Shopify** aus.
   ![Shopify Verbindung auswählen](/assets/images/365-business-banking/select-shopify-provider.de-DE.png)
5. Bestätigen Sie die Bestätigugsabfrage mit **Ja**.
6. Geben Sie den **Shop Namen** Ihres Shopify Shops ein (z.B. `meinshop` für `meinshop.myshopify.com`).
7. Wählen Sie die Option **Private App** im Feld **Modus** aus.
8. Geben Sie die **Client ID** und **Client Secret** der zuvor erstellten privaten App ein.
   ![Private App-Einstellungen](/assets/images/365-business-banking/shopify-private-app-settings.de-DE.png)
9.  Klicken Sie auf **Authentifizieren**, um die Verbindung zwischen Shopify und 365 business Banking herzustellen. (Analog zu Schritt 8-12 der vorherigen Anleitung.)

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