Dieses Kaptitel beschreibt am Beispiel des Kontaktformulars, wie Sie die installierte Lösung in Ihre Formulare einbinden können.

1. Öfnen Sie in einem Browser Ihrer Wahl die URL https://make.powerapps.com.
    >**Hinweis**<br>Vergewissern Sie sich, dass Sie sich in der richtigen Umgebung befinden, welche Sie oben rechts auf der Seite auswählen können.

2. Wählen Sie "Lösungen" aus der Navigationsleiste auf der linken Seite und anschließend klicken Sie auf "Standardlösung".
![picture 2](/assets/images/365-business-address-completion/solution-DE.png)  

3. Anschliessend können Sie über die Objekt Suche die Tabelle suchen, für welche Sie ein Formular um das 365 business Adressvervollständigung Steuerelement ergänzen wollen.<br/>
Die folgende Beispielillustration zeigt die Auswahl des Kontaktformulars.
![picture 3](/assets/images/365-business-address-completion/selectContactForm-DE.png)  

4. Durch den Button "Bearbeiten" gelangen Sie zum Formulardesigner.
    >**Hinweis**<br>Zum Zeitpunkt der Erstellung dieses Artikels, ist es nicht möglich
benutzerdefinierte Steuerelement über den "neuen" Formulardesigner hinzufügen.
Klicken Sie bitte, nachdem der Formulardesigner geladen wurde, auf "Zur klassischen Ansicht wechseln" um den Legacy-Editor zu starten, der gewünschte Funktion unterstützt.

5. Nach dem Laden des Legacy Formulardesigners wählen Sie über die rechte Navigationsleiste das Feld "Address3: Straße 1" aus und ziehen es (via Drag&Drop) an die gewünschte Position auf dem Kontaktformular.

6. Wählen Sie das Feld "Address3: Straße 1" aus und klicken dann auf "Eigenschaften ändern".

7. In den "Feldeigenschaften" ändern Sie die "Bezeichnung" auf "Adresssuche".
![picture 4](/assets/images/365-business-address-completion/addressSearchLabel-DE.png)  

8. Anschließend wählen Sie den Reiter "Steuerelemente" aus und klicken auf "Steuerelement hinzufügen".

9. Im folgenden Dialog wählen Sie das Steuerelement "365 business Adressvervollständigung" aus und klicken auf "Hinzufügen".

10. Nachdem das 365 business Adressvervollständigung Steuerelement hinzugefügt wurde, aktivieren Sie die Radio Controls für die "Internet", "Telefon" und "Tablet". 
![picture 6](/assets/images/365-business-address-completion/FieldControl-WebPhoneTablet-DE.png)  

11. Anschließend wird die Bindung zwischen der Ausgabe des Steuerelements und den zu befüllenden Feldern konfiguriert.
In diesem Beispiel werden die Werte der Adressvervollständigung an folgende Felder gebunden:

    | Wert      | Feld |
    | --------- | ----------- |
    | Adresse      | address1_line1       |
    | Ort      | address1_city       |
    | Bundesland/Region      | address1_stateorprovince     |
    | Postleitzahl      | address1_postalcode      |
    | Land      | address1_country       |
    | Straße   | < nicht gebunden >        |
    | Hausnummer   | < nicht gebunden >        |
![picture 7](/assets/images/365-business-address-completion/FieldBindingAddressSmall-DE.png)  

12. Für den Wert "AddressCompletion API Schlüssel" wird ein "statischer Wert" gesetzt, welcher Ihrem API Schlüssel entspricht.
    >**Hinweis**<br>Für die Benutzung der 365 business Adressvervollständigung benötigen Sie einen API Schlüssel, den Sie unter www.365businessdev.com/get-key

13. Nachdem alle benötigten Wert, den entsprechenden Feldern zugeordnet wurden, können Sie die Konfiguration über den "OK" Button speichern. Anschließend müssen Sie das Formular "Speichern" und "Veröffentlichen".
    >**Hinweis**<br>Das Speichern und Veröffentlichen des Formulars kann einige Zeit in Anspruch nehmen.


