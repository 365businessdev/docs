# Zahlungsdienste

Mit **365 business Banking** können Sie neben klassischen Bankkonten auch **Zahlungsdienste wie PayPal und Stripe** direkt mit **Microsoft Dynamics 365 Business Central** verbinden.  
Dadurch lassen sich Transaktionen automatisch abrufen und in den Zahlungsabgleich einbeziehen.

## Unterstützte Zahlungsdienste

<div class="columns">
   <div>
       <a href="payment-services/paypal.md">
           <div>
               <div><img src="/assets/images/365-business-banking/paypal-logo.png" alt="PayPal Logo" style="height: 40px;"></div>
               <div>PayPal</div>
           </div>
       </a>
   </div>
   <div>
       <a href="payment-services/stripe.md">
           <div>
               <div><img src="/assets/images/365-business-banking/stripe-logo.png" alt="Stripe Logo" style="height: 40px;"></div>
               <div>Stripe</div>
           </div>
       </a>
   </div>
</div>

<div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Hinweis</strong>
    Die Anbindung weiterer Zahlungsdienste, wie z.B. Mollie, ist in Planung.<br>Bitte prüfen Sie regelmäßig, ob eine neue Version von 365 business Banking verfügbar ist, um von neuen Funktionen zu profitieren.
</div>

## Schritt-für-Schritt-Anleitung

1. Wählen Sie **Bankkonten** in der Suche von Microsoft Dynamics 365 Business Central aus.
2. Erstellen Sie ein neues Bankkonto oder wählen Sie ein bestehendes aus.
3. Wählen Sie in der **Bankkonto Karte**, unter **Aktionen** die Aktionsgruppe **Kontoverbindung** und **Verbinden…** aus.
   ![Verbindung starten](/assets/images/365-business-banking/connect-banking-provider.de-DE.png)
4. Wählen Sie aus der Liste den gewünschten Anbieter, z. B. **PayPal**  
   ![Anbieter auswählen](/assets/images/365-business-banking/select-banking-provider.de-DE.png)
5. Bestätigen Sie die Bestätigugsabfrage mit **Ja**.
6. Je nach Anbieter werden unterschiedliche Authentifizierungsdaten benötigt. Geben Sie die erforderlichen Daten ein.  
   ![Anmeldedaten eingeben](/assets/images/365-business-banking/paypal-setup.de-DE.png)
7. Wählen Sie die Aktion **Authentifizieren**, um den Zugriff zu prüfen und zu aktivieren.

Anschließend können die Transaktionen des Zahlungsdienstes über das Zahlungsabstimmungsbuch.-Blatt abgerufen und verarbeitet werden (siehe [Zahlungsabstimmungsbuch-Blatt verwenden](bank-reconciliation.md)).

# Siehe auch

 - [PayPal Konto einrichten](payment-services/paypal.md)
 - [Stripe Konto einrichten](payment-services/stripe.md)

