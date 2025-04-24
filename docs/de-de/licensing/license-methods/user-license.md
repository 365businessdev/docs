# Benutzerlizenzen

Benutzerlizenzen sind auf einzelne Benutzer innerhalb eines Mandanten beschränkt. Jeder Benutzer benötigt eine eigene Lizenz, um auf die Apps und Features von 365 business development zugreifen zu können.

## Welche Vorteile bietet die Benutzerlizenz?

Die Benutzerlizenzierung erlaubt die flexible Zuweisung von Lizenzen an einzelne Benutzer. Jeder Benutzer erhält eine eigene Lizenz, mit der die Berechtigung zur Nutzung der App oder des Features gewährt wird.

<div class="alert alert-warn">
    <i class="fa-light fa-triangle-exclamation fa-lg"></i> <strong>Wichtiger Hinweis</strong> Bitte beachten Sie, dass abhängig von der App oder dem Feature eine Lizenzierung aller aktiven Benutzer unter Umständen obligatorisch ist, da andernfalls die Funktionalität innerhalb von Microsoft Dynamics 365 Business Central eingeschränkt sein kann.
</div>

## Welche Benutzer müssen lizenziert werden?

Die Zählung der Benutzerlizenzen unterscheidet sich aufgrund technischer und lizenzrechtlicher Anforderungen zwischen Business Central Online (SaaS) und Business Central On-Premise (Lokal).

### Benutzerlizenzierungsübersicht

Die Anzahl der zu lizenzierenden Benutzer wird, abhängig vom Umgebungstyp (siehe unten), unterschiedlich ermittelt. Die Seite **Benutzerlizenzierungsübersicht** kann aus der **Erweiterungslizenzverwaltung (365 business development)** aufgerufen werden und zeigt, welche Benutzer lizenziert werden müssen:

![Benutzerlizenzierungsübersicht](/assets/images/licensing/63a93fba-ca1a-471a-971e-687df1a6c25a.png)

### Microsoft Dynamics 365 Business Central - Online (SaaS)

Bei der Identifizierung der zu lizenzierenden Benutzer werden alle aktiven Benutzer (`Status` = `Aktiviert`) in der Business Central Umgebung geprüft. Diese Prüfung erfolgt u.U. unabhängig davon, ob der Benutzer tatsächlich auf die Apps und Features von 365 business development zugreift. Die Benutzer werden im Anschluss auf die zugewiesenen Microsoft Dynamics 365 Business Central Lizenzen (Plan) hin überprüft.

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg"></i>
    <strong>Gut zu wissen</strong> Die Lizenzierung von Benutzern für die Apps und Features von 365 business development richtet sich nach der tatsächlichen Anzahl an Benutzern in der Microsoft Dynamics 365 Business Central Umgebung. Dabei finden geteilte Microsoft Dynamics 365 Business Central Lizenzen (z.B. Device plan) keine Berücksichtigung. Es werden ausschließlich die tatsächlich lizenzierten Benutzer gezählt, unabhängig davon, ob eine geteilte oder exklusive Lizenz vorliegt.
</div>

Lizenzpflichtig sind Benutzer mit den folgenden Plänen:

 - Dynamics 365 Business Central Basic Financials plan (inkl. Embedded plan)
 - Dynamics 365 Business Central Team Member plan (inkl. Embedded plan)
 - Dynamics 365 Business Central Essential plan (inkl. Embedded plan)
 - Dynamics 365 Business Central Essential - Attach plan
 - Dynamics 365 Business Central Premium plan (inkl. Embedded plan)
 - Dynamics 365 Business Central Device plan (inkl. Embedded plan)
 - Dynamics 365 Business Central for IWs plan

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg"></i>
    <strong>Gut zu wissen</strong> Benutzer mit den folgenden Plänen sind nicht lizenzpflichtig:
    <ul>
        <li>Delegated Admin agent - Partner plan</li>
        <li>Delegated Helpdesk agent - Partner plan</li>
        <li>Dynamics 365 Business Central External Accountant plan</li>
    </ul>
</div>

### Microsoft Dynamics 365 Business Central - On-Premise (Lokal)

Bei der Identifizierung der zu lizenzierenden Benutzer werden alle aktiven Benutzer (`Status` = `Aktiviert`) in der Business Central Umgebung geprüft. Diese Prüfung erfolgt u.U. unabhängig davon, ob der Benutzer tatsächlich auf die Apps und Features von 365 business development zugreift.

## Welche Daten werden für die Lizenzprüfung erhoben?

Die Prüfung der Benutzerlizenzen erfolgt ausschließlich innerhalb Ihrer Microsoft Dynamics 365 Business Central Umgebung. Es werden keinerlei Daten an 365 business development übermittelt oder gespeichert. Die Lizenzprüfung erfolgt auf Basis der in Ihrer Business Central Umgebung hinterlegten Benutzerdaten und Lizenzen.

An 365 business development wird ausschließlich die ermittelte Anzahl an lizenzpflichtigen bzw. lizenzierten Benutzern übermittelt.
