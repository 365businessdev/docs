# 365 business Proxy Applicatiton

Willkommen zur Dokumentation der 365 business Proxy Application!  
Diese Anleitung bietet Ihnen alle Informationen, die Sie benötigen, um lokale Ressourcen sicher und effizient in **Microsoft Dynamics 365 Business Central** zu integrieren – sei es aus der Cloud oder aus On-Premises-Systemen.

## Was ist 365 business Proxy Application?

Die 365 business Proxy Application ist eine leistungsstarke Erweiterung für Dynamics 365 Business Central, die – im Einklang mit der [Universal Code Initiative](https://www.microsoft.com/en-us/dynamics-365/blog/it-professional/2022/10/28/the-dynamics-365-business-central-universal-code-initiative-is-live.md) – den sicheren Zugriff auf lokale Geräte und Systeme ermöglicht.  

Ob Dateizugriff, Drucker, Lagerlifte, Waagen oder Kartenleser – mit dem flexibel erweiterbaren Plugin-System der Proxy Application sind Ihren Integrationsmöglichkeiten kaum Grenzen gesetzt.

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i>
    <strong>Hinweis</strong> 365 business Proxy Application ist darauf konzipiert mit möglichst wenig Aufwand Integrationen von lokalen Ressourcen in Ihre Geschäftsprozesse zu ermöglichen.<br>Sie benötigen eine individuelle Anbindung an ein lokales Gerät oder eine Maschine? <a href="https://365businessdev.com/kontakt/" target="_blank">Sprechen Sie uns gerne an</a>.
</div>

## Highlights

- **Umfangreiche Standard-Plugins**  
  Greifen Sie direkt aus Dynamics 365 Business Central auf Dateisysteme, Drucker, Waagen und mehr zu.

- **Sichere, stabile Kommunikation**  
  Alle Verbindungen sind TLS-verschlüsselt. Die dauerhafte Verbindung wird zuverlässig über SignalR hergestellt – ganz ohne spezielle Firewallkonfigurationen.

- **Flexible Erweiterbarkeit**  
  Dank offener Dokumentation und Plugin-Architektur lassen sich individuelle Anforderungen schnell umsetzen.

- **Einfache Einrichtung**  
  Die Konfiguration ist in wenigen Schritten erledigt – diese Doku hilft Ihnen dabei.

## Los geht's

Nutzen Sie die nachfolgenden Seiten für einen schnellen und fundierten Einstieg.  
Erfahren Sie mehr über Einrichtung, Client-Registrierung, Plugin-Installation und Integration in Ihre Geschäftsprozesse.

Bei Fragen hilft unser [Support Team](https://365businessdev.atlassian.net/servicedesk/customer/portal/20) gerne weiter.

<div class="columns">
    <div>
        <a href="proxy-application-whatis.md">
            <div>
                <div><i class="fa-duotone fa-thin fa-map" style="--fa-secondary-color: #00b7c3"></i></div>
                <div>&Uuml;bersicht</div>
                <div>Was ist Proxy Application?</div>
            </div>
        </a>
    </div>
    <div>
        <a href="get-started.md">
            <div>
                <div><i class="fa-duotone fa-thin fa-ballot-check" style="--fa-secondary-color: #00b7c3"></i></div>
                <div>Schrittanleitung</div>
                <div>Erste Schritte</div>
            </div>
        </a>
    </div>
    <div>
        <a href="plugins.md">
            <div>
                <div><i class="fa-duotone fa-thin fa-book-open-cover" style="--fa-secondary-color: #00b7c3"></i></div>
                <div>Einrichtung</div>
                <div>Plugins & Funktionen</div>
            </div>
        </a>
    </div>
</div>

<div class="columns" style="margin-top: 30px;">
    <div>
        <span class="columns-title">Konzept</span>
        <p>
            Erfahren Sie mehr über die Grundlagen:
            <ul class="fa-ul">
                <li><span class="fa-li"><i class="fa-duotone fa-thin fa-pen-ruler fa-lg" style="--fa-secondary-color: #00b7c3"></i></span><a href="proxy-application-whatis.md">Was ist 365 business Proxy Application?</a></li>
                <li><span class="fa-li"><i class="fa-duotone fa-thin fa-sitemap fa-lg" style="--fa-secondary-color: #00b7c3"></i></span><a href="proxy-application-client-whatis.md">Was ist 365 business Proxy Application Client?</a></li>
                <li><span class="fa-li"><i class="fa-duotone fa-thin fa-arrow-up-right-from-square fa-lg" style="--fa-secondary-color: #00b7c3"></i></span><a href="plugins.md">Was sind 365 business Proxy Application Plugins?</a></li>
            </ul>            
        </p>
    </div>
    <div>
        <span class="columns-title">Einrichtung</span>
        <p>
            Erfahren Sie mehr über die Einrichtung:
            <ul class="fa-ul">
                <li><span class="fa-li"><i class="fa-duotone fa-thin fa-screwdriver-wrench fa-lg" style="--fa-secondary-color: #00b7c3"></i></span><a href="setup.md">Einrichtung in Microsoft Dynamics 365 Business Central</a></li>
                <li><span class="fa-li"><i class="fa-duotone fa-thin fa-gear fa-lg" style="--fa-secondary-color: #00b7c3"></i></span><a href="proxy-application-client-installation.md">365 business Proxy Application Client installieren</a></li>
                <li><span class="fa-li"><i class="fa-duotone fa-thin fa-arrow-up-right-from-square fa-lg" style="--fa-secondary-color: #00b7c3"></i></span><a href="plugins/install.md">365 business Proxy Application Plugin installieren</a></li>
            </ul>
        </p>
    </div>
    <div>
         <span class="columns-title">Plugins & Funktionen</span>
             <p>
                Erfahren Sie mehr über die Plugins & Funktionen:
                <ul class="fa-ul">
                    <li><span class="fa-li"><i class="fa-duotone fa-thin fa-files fa-lg" style="--fa-secondary-color: #00b7c3"></i></span><a href="plugins/file.md">File Plugin - Dateisystem Zugriff</a></li>
                    <li><span class="fa-li"><i class="fa-duotone fa-thin fa-file-zipper fa-lg" style="--fa-secondary-color: #00b7c3"></i></span><a href="plugins/zip.md">Zip Plugin - ZIP Archive packen und entpacken</a></li>
                    <li><span class="fa-li"><i class="fa-duotone fa-thin fa-user-plus fa-lg" style="--fa-secondary-color: #00b7c3"></i></span><a href="plugins/print.md">Print Plugin - Drucker Zugriff</a></li>
                    <li><span class="fa-li"><i class="fa-duotone fa-thin fa-images fa-lg" style="--fa-secondary-color: #00b7c3"></i></span><a href="plugins/image.md">Image Plugin - Bilder aus dem Dateisystem lesen, skalieren und Größe anpassen</a></li>
                    <li><span class="fa-li"><i class="fa-duotone fa-thin fa-cube fa-lg" style="--fa-secondary-color: #00b7c3"></i></span><a href="plugins/custom.md"><strong>Ihr individuelles Plugin</strong></a></li>
                </ul>
                In K&uuml;rze verf&uuml;gbar...
                <ul class="fa-ul">
                    <li><span class="fa-li"><i class="fa-duotone fa-thin fa-scanner-image fa-lg" style="--fa-secondary-color: #00b7c3"></i></span><a href="#">KAPTURA Plugin - KAPTURA 3D Scanner ansteuern</a></li>
                    <li><span class="fa-li"><i class="fa-duotone fa-thin fa-shelves fa-lg" style="--fa-secondary-color: #00b7c3"></i></span><a href="#">Haenel Lift Plugin - Steuerung des Haenel Lagerlift</a></li>
                </ul>
            </p>
    </div>
</div>