# Sicheres Drucken (Secure Print)

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg" style="--fa-secondary-color: #FF0000; --fa-primary-color: #111111; --fa-secondary-opacity: 0.7"></i> <strong>Gut zu wissen:</strong>
	Das <strong>Secure Print</strong>-Feature für den 365 business Print Agent ist ein kostenpflichtiges Add-On.<br>
	Bitte prüfen Sie in der <strong>Erweiterungslizenzverwaltung (365 business development)</strong>, ob Sie eine gültige Lizenz für dieses Feature besitzen.
</div>

**Secure Print** ist ein Feature des 365 business Print Agent, das es ermöglicht, Druckaufträge sicher zu speichern und erst nach Authentifizierung über die Print Agent App auf einem Mobilgerät freizugeben.  
Dies ist besonders sinnvoll beim Drucken vertraulicher Dokumente, um unbefugten Zugriff zu vermeiden.


## Einrichtung von Secure Print

Um Secure Print nutzen zu können, sind einige vorbereitende Schritte notwendig. Die Einrichtung gliedert sich in zwei Bereiche:

- Konfiguration der Secure Print Benutzer  
- Aktivierung von Secure Print in den Druckereinstellungen

### Secure Print Benutzer einrichten

Bei der Einrichtung werden Benutzer aus Microsoft Dynamics 365 Business Central mit ihrer Microsoft Entra ID Objekt-ID verknüpft.  
Diese Verknüpfung ist notwendig, um Druckaufträge einem Benutzer eindeutig zuzuordnen.

1. Öffnen Sie die Seite **365 business Print Agent Setup**.
2. Wählen Sie **Zugehörig** und **Secure Print Benutzer**.<br> 
   ![Secure Print Setup Aktion](/assets/images/365-business-print-agent/secure-print-setup.de-DE.png)
3. Wählen Sie den Benutzer, den Sie für Secure Print aktivieren möchten.
4. Tragen Sie die Microsoft Entra ID Objekt-ID des Benutzers ein.<br> 
   ![Secure Print User Setup](/assets/images/365-business-print-agent/secure-print-user-setup.de-DE.png)


<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Hinweis:</strong>
	Die Entra ID Objekt-ID finden Sie in der Microsoft Entra Verwaltung.<br>
	Eine Anleitung zur Suche der Objekt-ID finden Sie <a href="https://learn.microsoft.com/de-de/partner-center/account-settings/find-ids-and-domain-names#find-the-user-object-id" target="_blank">hier</a>.
</div>

### Secure Print in den Druckereinstellungen aktivieren

Nach der Benutzerzuordnung können Sie Secure Print für einzelne Drucker aktivieren:

1. Öffnen Sie die Seite **365 business Print Agent Setup**.
2. Wählen Sie **Zugehörig** und **Drucker**.
3. Wählen Sie den gewünschten Drucker.
4. Öffnen Sie die gewünschte Druckereinstellung.
5. Deaktivieren Sie die Druckereinstellung, um Änderungen vorzunehmen.
6. Aktivieren Sie die Option **Secure Print**.  
   ![Druckereinstellungen - Secure Print](/assets/images/365-business-print-agent/printer-configuration-secure-print.de-DE.png)
7. Aktivieren Sie die Druckereinstellung erneut.

Nach der Aktivierung werden alle Druckaufträge für diesen Drucker gespeichert und müssen über die Print Agent App auf einem Mobilgerät freigegeben werden.

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg" style="--fa-secondary-color: #FF0000; --fa-primary-color: #111111; --fa-secondary-opacity: 0.7"></i> <strong>Gut zu wissen:</strong>
	Nur Benutzer, die für Secure Print eingerichtet wurden, können Druckereinstellungen mit aktivierter Secure Print Funktion verwenden.
</div>


### Siehe auch

- [Benutzerobjekt-ID suchen (Microsoft Learn)](https://learn.microsoft.com/de-de/partner-center/account-settings/find-ids-and-domain-names#find-the-user-object-id)