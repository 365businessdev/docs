# Setting Up Banking Users

Authentication with the bank is done via [finAPI](https://www.finapi.io/). To use 365 business Banking with the finAPI integration, you must first set up a finAPI user in Microsoft Dynamics 365 Business Central. This finAPI user is used to connect to your bank and has exclusive access to the banking functions.

<div class="alert alert-warn">
    <i class="fa-duotone fa-solid fa-triangle-exclamation fa-xl"></i>
    <strong>Warning</strong>
    The user information is stored exclusively in Microsoft Dynamics 365 Business Central. The password is encrypted and cannot be viewed after it is set. Please ensure that you store the credentials securely.<br>
    It is not possible for us to change or reset the user information or password. If you forget the password, you must delete and recreate the user.
</div>

## Step-by-Step Guide

Follow these steps to set up a banking user in Microsoft Dynamics 365 Business Central:

1. Select **Banking User Setup** in the search bar of Microsoft Dynamics 365 Business Central.
2. Set a **secure password** and store it in a safe place outside of Microsoft Dynamics 365 Business Central.
3. Enter the **email address** of the user.
4. Enter the **phone number** of the user.
5. Select the action **Authenticate** to create the banking user.

<div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Note</strong>
    The <strong>Banking User ID</strong> is automatically generated and corresponds to the Microsoft Entra ID Tenant ID. This ID cannot be changed.<br>
    You can manage one or more bank accounts with a single Banking User ID. The Banking User ID is used for authentication with the bank and is required for the finAPI integration.
</div>

![Banking User Setup](/assets/images/365-business-banking/banking-user-setup.en-US.png)

<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Good to know</strong>
    The email address and phone number are used for communication with finAPI and are utilized in case of inquiries or unusual events.
</div>

