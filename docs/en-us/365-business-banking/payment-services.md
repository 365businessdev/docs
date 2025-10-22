# Payment Services

With **365 business Banking**, you can connect not only traditional bank accounts but also **payment services like PayPal and Stripe** directly to **Microsoft Dynamics 365 Business Central**.  
This allows you to automatically retrieve transactions and include them in payment reconciliation.

## Supported Payment Services

<div class="columns">
   <div>
       <a href="payment-services/paypal.md">
           <div>
               <div><img src="/assets/images/365-business-banking/paypal-logo.png" alt="PayPal Logo" style="height: 40px;"></div>
               <div>PayPal</div>
           </div>
       </a>
   </div>
   <div>
       <a href="payment-services/stripe.md">
           <div>
               <div><img src="/assets/images/365-business-banking/stripe-logo.png" alt="Stripe Logo" style="height: 40px;"></div>
               <div>Stripe</div>
           </div>
       </a>
   </div>
      <div>
          <a href="payment-services/mollie.md">
              <div>
                  <div><img src="/assets/images/365-business-banking/mollie-logo.png" alt="Mollie Logo" style="height: 40px;"></div>
                  <div>Mollie</div>
              </div>
          </a>
      </div>
   </div>
   
   <div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Note</strong>
    We are continuously working to integrate additional payment services to provide you with an even broader selection.<br>Please check regularly for new versions of 365 business Banking to take advantage of new features.
   </div>

<div class="alert alert-info">
   <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
   <strong>Note</strong>
   Integration of additional payment services, such as Mollie, is planned.<br>Please check regularly for new versions of 365 business Banking to benefit from new features.
</div>

## Step-by-Step Guide

1. Select **Bank Accounts** in the search of Microsoft Dynamics 365 Business Central.
2. Create a new bank account or select an existing one.
3. In the **Bank Account Card**, under **Actions**, choose the action group **Account Connection** and select **Connect…**.
   ![Start connection](/assets/images/365-business-banking/connect-banking-provider.de-DE.png)
4. From the list, select the desired provider, e.g., **PayPal**  
   ![Select provider](/assets/images/365-business-banking/select-banking-provider.de-DE.png)
5. Confirm the confirmation prompt with **Yes**.
6. Depending on the provider, different authentication data may be required. Enter the necessary information.  
   ![Enter credentials](/assets/images/365-business-banking/paypal-setup.de-DE.png)
7. Select the **Authenticate** action to check and activate access.

Afterwards, you can retrieve and process the transactions from the payment service using the Payment Reconciliation Journal (see [Using the Payment Reconciliation Journal](bank-reconciliation.md)).

# See Also
 - [Set up PayPal account](payment-services/paypal.md)
 - [Set up Stripe account](payment-services/stripe.md)
 - [Set up Mollie account](payment-services/mollie.md)
