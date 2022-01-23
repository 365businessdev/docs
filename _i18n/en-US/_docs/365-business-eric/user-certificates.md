> This page is not available in the selected language. The page is available in **German**. Please select other language to display.

> **Hinweis**<br>Mit der 365 business ERiC Version 17.8 wurden zusätzlich zum Organisationszertifikat, das in der ELSTER Einrichtung hinterlegt werden kann, sogenannte Benutzerzertifikate eingeführt.<br>Bitte prüfen Sie, ob Sie über die aktuellste Version von 365 business ERiC verfügen.

Wenn verschiedene Anwender die Steuerdatenmeldungen an das Finanzamt vornehmen und die Anwender über persönliche Zertifikate verfügen, so kann das Zertifikat als Benutzerzertifikat hinterlegt werden. Benutzerzertifikate werden dabei über die **ELSTER Einrichtung**, durch den Aufruf **Benutzerzertifikate** in der Gruppe **Zertifikat**, verwaltet.

![Aktion - Benutzerzertifikate](/assets/images/365-business-eric/user-certificates-action.png)

> **Hinweis**<br>Benutzerzertifikate werden additiv zum Organisationszertifikat, dass in der [ELSTER Einrichtung](../setup/) hinterlegt wird, verwendet.<br>Sofern für den übermittelnden Benutzer kein Benutzerzertifikat existiert, verwendet 365 business ERiC das Organisationszertifikat für die Übermittlung.

In der Ansicht **ELSTER Benutzerzertifikate** finden Sie die Liste alle hinterlegten Benutzerzertifikate für die ELSTER Übermittlung.

![Ansicht - ELSTER Benutzerzertifikate](/assets/images/365-business-eric/user-certificates.png)

| Feld | Beschreibung | 
| --- | --- |
| Benutzer ID | Gibt die Benutzer-ID an, für die das Zertifikat gespeichert werden soll. | 
| Zertifikat (PFX) vorhanden | Zeigt an, dass die Zertifikatsdatei (PFX) in Microsoft Dynamics 365 Business Central hochgeladen wurde. |
| Zertifikat PIN vorhanden | Zeigt an, dass die Zertifikats-PIN in Microsoft Dynamics 365 Business Central angegeben ist. |

#### Wie speichere ich ein Benutzerzertifikat in Business Central?
1. Öffnen Sie die ELSTER Einrichtung über die Business Central Suche.
2. Klicken Sie auf die Gruppe **Zertifikat**.
3. Klicken Sie auf **Benutzerzertifikate** um die Liste der Benutzerzertifikate zu öffnen.
4. Wählen Sie im Feld **Benutzer ID**, mit Hilfe der Auswahlfunktion, einen Benutzer aus.
5. Klicken Sie **Zertifikat (PFX) hochladen**.
6. Wählen Sie die ELSTER Zertifikatsdatei (_*.pfx_) auf Ihrem Computer aus.
7. Klicken Sie auf **Zertifikat PIN setzen**.
8. Geben Sie das Zertifikatspasswort ein.
9. Bestätigen Sie das Zertifikatspasswort, indem Sie es im Feld **Passwort bestätigen** erneut eingeben.
10. Klicken Sie **OK**.

