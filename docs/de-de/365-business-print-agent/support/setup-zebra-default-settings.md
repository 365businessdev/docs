# Zebra Treiber Standardwerte 

## Problem

Die manuell über Ihren Zebra-Drucker gedruckten Etiketten sehen einwandfrei aus – doch Etiketten, die über den **365 business Print Agent** gedruckt werden, erscheinen:

- verschoben  
- leer  
- seitenverkehrt  
- gedreht  
- oder schwer lesbar

---

## Ursache

Wenn Sie einen Computer als **Druckserver** verwenden, müssen die **Druckereinstellungen systemweit** gelten – also für **alle Benutzer**, die den Drucker verwenden.  
Dazu zählen beispielsweise:

- Druckgeschwindigkeit  
- Druckdichte / Helligkeit  
- Verwendung eines Farbbandes  
- Etikettenversatz

---

## Lösung

Der Zebra-Druckertreiber bietet zwei Konfigurationsbereiche:

1. Benutzerbezogene Einstellungen (wirken nur für den aktuell angemeldeten Benutzer)
2. **Systemweite Standardwerte** – *diese müssen angepasst werden, damit alle Benutzer dieselben Druckparameter verwenden*

### So ändern Sie die Standardwerte für alle Benutzer:

1. Öffnen Sie **Start > Einstellungen > Drucker & Scanner**
2. Wählen Sie den Zebra-Drucker aus und klicken Sie auf **Verwalten**
3. Klicken Sie auf **Druckereigenschaften**
4. Wechseln Sie zum Reiter **Erweitert**
5. Klicken Sie auf **Standardwerte**
6. Passen Sie hier die gewünschten Einstellungen an (z. B. Geschwindigkeit, Helligkeit etc.)


<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg"></i>
    <strong>Gut zu wissen</strong>
	Diese Konfiguration gilt nun für <b>alle Benutzer</b> – einschließlich des Dienstes <b>365 business Print Agent</b>.	
</div>
