# Problem bei mehreren Druckererweiterungen

## Ursache

Wenn Sie die Meldung erhalten, dass **mehrere Druckererweiterungen** in Ihrem System installiert sind, weisen wir Sie darauf hin, da dies zu **Problemen mit der Druckfunktion** in Microsoft Dynamics 365 Business Central führen kann.

Insbesondere kann es dazu kommen, dass **Druckernamen mehrfach vergeben werden**. Dies wird von Business Central **nicht unterstützt** und kann zu **Laufzeitfehlern beim Drucken von Berichten und Belegen** führen, z. B.:

![Fehlermeldung durch mehrere Druckererweiterungen](/assets/images/365-business-print-agent/6b6ff532-4054-48af-9a6a-625d224d6fee.png)

---

## Lösung

Deinstallieren Sie alle Druckererweiterungen in Ihrer Business Central Umgebung – **außer dem 365 business Print Agent**.

<div class="alert alert-warn">
    <i class="fa-light fa-triangle-exclamation fa-lg"></i>
	<strong>Achtung</strong>
	In Microsoft Dynamics 365 Business Central <strong>On-Premises</strong> Umgebungen werden Drucker, die direkt auf dem BC-Server installiert sind, automatisch eingebunden.<br>
	Bitte deinstallieren Sie die Drucker auf dem Microsoft Dynamics 365 Business Central Server.
</div>

### Schritt 1: Erweiterungsverwaltung öffnen

Öffnen Sie die **Erweiterungsverwaltung** in Microsoft Dynamics 365 Business Central mit dem **Wie möchten Sie weiter verfahren?** Fenster (Alt+Q).

![Erweiterungsverwaltung suchen](/assets/images/365-business-print-agent/673e2550-12ba-4edd-8ed6-9931c0efab16.png)

---

### Schritt 2: Druckererweiterungen identifizieren

Suchen Sie nach Druckererweiterungen, die **nicht** dem 365 business Print Agent entsprechen.  
Nur der 365 business Print Agent sollte als Druckererweiterung installiert sein.

Beispiele für andere Erweiterungen:

- Universal Print Integration  
- PrintNode Integration

---

### Schritt 3: Druckererweiterungen deinstallieren

1. Markieren Sie die nicht benötigte Erweiterung.
2. Klicken Sie auf das **Drei-Punkte-Menü**.
3. Wählen Sie **Deinstallieren**.

![Erweiterung deinstallieren](/assets/images/365-business-print-agent/9b58144b-277d-4b9d-8830-ebceadb5e8e2.png)

---

### Schritt 4: Deinstallation bestätigen

Bestätigen Sie die Deinstallation mit einem Klick auf **Deinstallieren**.
