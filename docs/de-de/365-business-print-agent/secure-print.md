# Sicheres Drucken (Secure Print)

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg"></i> <strong>Gut zu wissen</strong>Das <strong>Secure Print Feature</strong> für den 365 business Print Agent ist ein kostenpflichtiges Add-On.<br>
    Bitte prüfen Sie unter <strong>Erweiterungslizenzverwaltung (365 business development)</strong> ob Sie die Lizenz für das Secure Print Feature erworben haben.
</div>

**Secure Print** ist ein Feature des 365 business Print Agent, welches es ermöglicht, Druckaufträge zu sichern und erst nach Authentifizierung am Drucker freizugeben. Dieses Feature ist besonders nützlich, wenn vertrauliche Dokumente gedruckt werden sollen und ein unkontrollierter Zugriff auf den Drucker vermieden werden soll.

## Einrichtung von Secure Print

Um Secure Print nutzen zu können sind einige Vorbereitungen notwendig.
Die Einrichtung von Secure Print besteht aus zwei Elementen:

 - Einrichtung der Secure Print Benutzer
 - Aktivierung von Secure Print in den Druckereinstellungen

### Einrichtung von Secure Print Benutzer

Bei der Einrichtung der Secure Print Benutzer werden die Microsoft Dynamics 365 Business Central Benutzer mit der Microsoft Entra ID Objekt ID verknüpft. Diese Verknüpfung ist notwendig, um die Authentifizierung und Zuordnung der gesendeten Druckaufträge zu ermöglichen.

1. Navigieren Sie zur Seite **365 business Print Agent Setup**.
2. Wählen Sie den Menüpunkt **Zugehörig** und **Secure Print Benutzer** aus.
   ![Secure Print Setup Aktion](/assets/images/365-business-print-agent/secure-print-setup.de-DE.png)
3. Wählen Sie den Benutzer aus, den Sie für Secure Print aktivieren möchten.
4. Geben Sie die Microsoft Entra ID Objekt ID des Benutzers ein.
   ![Secure Print User Setup](/assets/images/365-business-print-agent/secure-print-user-setup.de-DE.png)

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i> <strong>Hinweis</strong> Die Entra ID Objekt ID des Benutzers finden Sie in der Microsoft Entra Verwaltung.<br>
    Weitere Informationen zur Einrichtung von Secure Print Benutzern finden Sie <a href="https://learn.microsoft.com/de-de/partner-center/account-settings/find-ids-and-domain-names#find-the-user-object-id" target="_blank">hier</a>.
</div>

### Aktivierung von Secure Print in den Druckereinstellungen

Nachdem die Secure Print Benutzer eingerichtet wurden, können Sie Secure Print in den Druckereinstellungen aktivieren, in denen Sie Secure Print nutzen möchten.

1. Navigieren Sie zur Seite **365 business Print Agent Setup**.
2. Wählen Sie den Menüpunkt **Zugehörig** und **Drucker** aus. 
3. Wählen Sie den Drucker aus, für den Sie Secure Print aktivieren möchten.
4. Wählen Sie die Druckereinstellung aus, die Sie für Secure Print konfigurieren möchten.
5. Deaktivieren Sie die Druckereinstellung, um Änderungen vornehmen zu können.
6. Aktivieren Sie die Option **Secure Print**.
   ![Druckereinstellungen - Secure Print](/assets/images/365-business-print-agent/printer-configuration-secure-print.de-DE.png)
7. Aktivieren Sie die Druckereinstellung.

Nach der Aktivierung von Secure Print für eine Druckereinstellung, werden alle Druckaufträge für diesen Drucker gesichert und müssen über die Print Agent App auf Ihrem Mobilgerät freigegeben werden.

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg"></i> <strong>Gut zu wissen</strong>Benutzer, die nicht für Secure Print eingerichtet sind können keine Druckereinstellungen mit Secure Print verwenden.
</div>


# Siehe auch

- [Benutzerobjekt-ID suchen (Microsoft Learn)](https://learn.microsoft.com/de-de/partner-center/account-settings/find-ids-and-domain-names#find-the-user-object-id)