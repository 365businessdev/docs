# Dokumentsignierung

Mit 365 business PDF können Sie PDF-Dateien, die aus Microsoft Dynamics 365 Business Central erzeugt werden, signieren und diese Signatur in die Datei integrieren. Diese Signatur schützt Ihre PDF-Datei vor Manipulationen und garantiert dem Empfänger zudem die Unversehrtsein der PDF-Datei sowie die Herkunft.

Die digitale Signatur wird dabei an Hand einer [PKCS 12 Zertifikatsdatei (PFX)](https://en.wikipedia.org/wiki/PKCS_12) durchgeführt.

Die Einrichtung findet in der Seite **PDF Signierung Konfigurationen** statt. Hier können mehrere Signierkonfigurationen angelegt werden, die bspw. auf unterschiedlichen Zertifikatsdateien basieren.

## Wie erstelle ich eine Signierkonfiguration?

1. Öffnen Sie die Seite **PDF Signierung Konfigurationen**.
2. Klicken Sie **Neu**.
3. Vergeben Sie einen Wert im Feld **Code**.
4. Geben Sie eine **Beschreibung** für die Konfiguration ein.
5. Klicken Sie auf **Zertifikatsdatei hochladen** und wählen Sie eine gültige Zertifikatsdatei (PFX) aus.
6. Klicken Sie auf **Zertifikat PIN setzen** und geben Sie die PIN zur Verwendung der Zertifikatsdatei (PFX) ein.

![Signierkonfiguration](/assets/images/365-business-pdf/signing-configuration.png)  
