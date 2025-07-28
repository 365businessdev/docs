# Zahlungen

365 business Banking ermöglicht es Ihnen, Zahlungen einfach und sicher zu initiieren. Sie können verschiedene Arten von Zahlungen vornehmen, darunter SEPA-Überweisungen, SEPA-Lastschriften und Daueraufträge. Diese Funktionen sind direkt in Microsoft Dynamics 365 Business Central integriert und bieten eine nahtlose Benutzererfahrung.

Die unterstützten Zahlungsarten umfassen:

<ul>
<i aria-hidden="true" class="fas fa-check"></i> Überweisungen<br>
<i aria-hidden="true" class="fas fa-check"></i> Echtzeitüberweisungen<br>
<i aria-hidden="true" class="fas fa-check"></i> Terminüberweisungen<br>
<i aria-hidden="true" class="fas fa-check"></i> Daueraufträge<br>
<i aria-hidden="true" class="fas fa-check"></i> Sammelüberweisungen<br>
<i aria-hidden="true" class="fas fa-check"></i> Lastschriften<br>
<i aria-hidden="true" class="fas fa-check"></i> Sammellastschriften
</ul>

Die Zahlungsauslösung erfolgt über die [finAPI GmbH](https://www.finapi.io/), die eine sichere und zuverlässige Schnittstelle zu verschiedenen Banken in Deutschland und Europa bereitstellt. Die Authentifizierung erfolgt über die 365 business API, die sicherstellt, dass Ihre Daten geschützt sind und keine sensiblen Informationen zwischengespeichert oder verarbeitet werden.

## Zahlungsarten

<div class="columns">
   <div>
       <a href="payment-types/sepa-credit-transfer.md">
           <div>
               <div><i class="fa-duotone fa-thin fa-money-bill-transfer" style="--fa-secondary-color: #00b7c3"></i></div>
               <div>SEPA Überweisung</div>
           </div>
       </a>
   </div>
   <div>
       <a href="payment-types/direct-debit.md">
           <div>
               <div><i class="fa-duotone fa-thin fa-money-check-dollar-pen" style="--fa-secondary-color: #00b7c3"></i></div>
               <div>SEPA Lastschrift</div>
           </div>
       </a>
   </div>
   <div>
       <a href="payment-types/standing-order.md">
           <div>
               <div><i class="fa-duotone fa-thin fa-money-bills" style="--fa-secondary-color: #00b7c3"></i></div>
               <div>Dauerauftrag</div>
           </div>
       </a>
   </div>
</div>

## Einrichtung

Die Einrichtung der Zahlungsarten erfolgt über die Festlegung der Zahlungsart in der **Zahlungsform** in Microsoft Dynamics 365 Business Central. Hier können Sie die gewünschten Zahlungsarten auswählen und konfigurieren.

Weitere Informationen zur Einrichtung finden Sie in der [Zahlungsarten Einrichtung](setup/payment-method-setup.md).