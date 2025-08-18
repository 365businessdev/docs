# Payments

365 business Banking allows you to initiate payments easily and securely. You can perform various types of payments, including SEPA credit transfers, SEPA direct debits, and standing orders. These features are directly integrated into Microsoft Dynamics 365 Business Central, providing a seamless user experience.

The supported payment types include:

<ul>
<i aria-hidden="true" class="fas fa-check"></i> Credit Transfers<br>
<i aria-hidden="true" class="fas fa-check"></i> Instant Credit Transfers<br>
<i aria-hidden="true" class="fas fa-check"></i> Scheduled Credit Transfers<br>
<i aria-hidden="true" class="fas fa-check"></i> Standing Orders<br>
<i aria-hidden="true" class="fas fa-check"></i> Bulk Credit Transfers<br>
<i aria-hidden="true" class="fas fa-check"></i> Direct Debits<br>
<i aria-hidden="true" class="fas fa-check"></i> Bulk Direct Debits
</ul>

Payments are processed via [finAPI GmbH](https://www.finapi.io/), which provides a secure and reliable interface to various banks in Germany and Europe. Authentication is performed through the 365 business API, ensuring that your data is protected and no sensitive information is cached or processed.

## Payment Types

<div class="columns">
   <div>
       <a href="payment-types/sepa-credit-transfer.md">
           <div>
               <div><i class="fa-duotone fa-thin fa-money-bill-transfer" style="--fa-secondary-color: #00b7c3"></i></div>
               <div>SEPA Credit Transfer</div>
           </div>
       </a>
   </div>
   <div>
       <a href="payment-types/direct-debit.md">
           <div>
               <div><i class="fa-duotone fa-thin fa-money-check-dollar-pen" style="--fa-secondary-color: #00b7c3"></i></div>
               <div>SEPA Direct Debit</div>
           </div>
       </a>
   </div>
   <div>
       <a href="payment-types/standing-order.md">
           <div>
               <div><i class="fa-duotone fa-thin fa-money-bills" style="--fa-secondary-color: #00b7c3"></i></div>
               <div>Standing Order</div>
           </div>
       </a>
   </div>
</div>

## Setup

The setup of payment types is done by defining the payment method in the **Payment Method** in Microsoft Dynamics 365 Business Central. Here, you can select and configure the desired payment types.

For more information on setup, see [Payment Method Setup](setup/payment-method-setup.md).