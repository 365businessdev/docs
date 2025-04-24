# Erste Schritte

365 business Barcode ist eine Erweiterung für Microsoft Dynamics 365 Business Central, die Ihnen die Möglichkeit zum kodieren und dekodieren von Barcodes, innerhalb von Microsoft Dynamics 365 Business Central gibt.

In dieser Kurzanleitung wird erklärt, wie Sie in 365 business Barcode verschiedene [Barcode Einstellungen](barcode-settings.md) vornehmen können, die Sie anschließend in Ihre Applikation integrieren können.

## Schritt 1: Installation von 365 business Barcode

Öffnen Sie den **Marketplace für Erweiterungen** in Microsoft Dynamics 365 Business Central und suchen Sie nach **365 business Barcode**. Installieren Sie die App von Microsoft AppSource und warten Sie, bis die Installation abgeschlossen ist.

## Schritt 1.1: 365 business API Registrierung

Nach der Installation erscheint, sofern die 365 business API nicht bereits installiert war, der Willkommen-Assistent automatisch und leitet Sie durch die Registrierung.

Nach der erfolgten Registrierung erhalten Sie Ihren persönlichen API-Authentifizierungsschlüssel, der zur Kommunikation mit der 365 business API benötigt wird.<br>

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i>
    <strong>Hinweis</strong> Es ist keine weitere Einrichtung von 365 business Barcode notwendig.
</div>

## Schritt 2: Barcodeeinstellungen vornehmen

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i>
    <strong>Hinweis</strong> Während der Installation von 365 business Barcode werden automatisch einige Standard Barcodearten hinzugefügt. Diese können Sie direkt verwenden, ändern oder löschen.
</div>

Um Barcodeeinstellungen vorzunehmen, öffnen Sie die Seite **Barcode Einstellungen** in Microsoft Dynamics 365 Business Central.

 1. Klicken Sie **Neu** um eine neue Barcode Einstellung zu erstellen.
 2. Wählen Sie einen **Code**.
 3. Wählen Sie im Feld **Barcode-Symbolik** die Art des Barcodes aus, die Sie verwenden möchten (z.B. `QR Code`).
 4. Wählen Sie eine **Beschreibung** für die Barcode Einstellung.
 5. Geben Sie die gewünschte Höhe (px) an.
 6. Klicken Sie in das Feld **Farbe** und/oder **Hintergrundfarbe** um, abweichend vom Standard, Farben zu definieren. _(optional)_<br>![Farbauswahl](/assets/images/365-business-barcode/5c299f7b1b93a3b1b6c71d46c162491a9264e72fb4d66f9e435a182684624243.png)

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i>
    <strong>Hinweis</strong>Während der Einrichtung der Barcode Einstellungen wird laufend die Vorschau des Barcodes mit einem Beispielwert angezeigt.
</div>

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg"></i>
    <strong>Gut zu wissen</strong>Abhängig von der gewählten <b>Barcode-Symbolik</b> stehen weitere Optionen zur Verfügung.
</div>

## Schritt 2.1: GS1-Format Barcode erstellen _(optional)_

Im Laufe der Jahre sind verschiedene Arten von Barcodes entstanden. Sie wurden alle für verschiedene Aufgabe entwickelt und für die Bedürfnisse einzelner Branchen optimiert. Das GS1 Format wurde entwickelt um weitere Informationen maschinenlesbar in einen Barcode zu integrieren.
Grundsätzlich lassen sich die folgenden Barcodearten unterscheiden:

 - Eindimensionaler Barcode: Bei 1D Codes sind die Balken immer in einer einzelnen Reihe angeordnet. Zu dieser Art gehören der EAN Barcode, der **GS1-128** sowie der **GS1 DataBar**.
 - Zweidimensionaler Barcode: Bei 2D Codes werden die Informationen in der Regel in einer quadratischen oder rechteckigen Fläche in Form von Punkten oder kleinen Quadraten hinterlegt. Zu dieser Kategorie gehören der **GS1 DataMatrix** und der **GS1 QR-Code**.

Sie können die GS1 Format-Option, bei unterstützten Barcodearten, über den Schalter **GS1 Format** aktivieren.

## Schritt 2.2: Bild einbetten _(nur QR Code)_

Für QR Code Barcodes besteht die Möglichkeit der Individualisierung, über die Steuerung der Vorder- und Hintergrundfarbe hinaus. Dabei kann ein beliebiges Bild in den Barcode eingebettet werden. Der Barcode bleibt dabei dennoch lesbar.

Gehen Sie wie folgt vor um ein Bild in den Barcode einzubetten:

 1. Klicken Sie auf **Eingebettes Bild hochladen**.
 2. Klicken Sie auf **Wählen**.
 3. Wählen Sie eine PNG-Bilddatei aus, die in den Barcode eingebettet werden soll.
 4. Klicken Sie **OK**.

![QR Code mit eingebettetem Bild](/assets/images/365-business-barcode/953eae17f991ea69d2c1ae2559bfedd8566a13203981bdeed545e2f4a976c2fe.png)  

## Schritt 3: Implementierung von 365 business Barcode

Im folgenden finden Sie Informationen darüber, wie 365 business Barcode bei Ihnen implementiert werden kann:

 - [Developer Documentation (en-US)](../../al-developer/365businessbarcode/readme.md)