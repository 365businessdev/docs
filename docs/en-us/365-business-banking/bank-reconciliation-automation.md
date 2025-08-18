# Automating Bank Account Reconciliation

Retrieving bank transactions and automatic reconciliation can be automated with 365 business Banking. This enables regular updates of bank transactions and seamless integration into your financial processes. For each bank account, a job queue entry is created that regularly retrieves bank transactions, updates the payment reconciliation journal, and automatically reconciles the bank transactions.

<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Good to know</strong>
    If the bank requires multi-factor authentication, the job queue entry will automatically pause to allow manual authentication. After successful authentication, the job queue entry can be resumed to continue automatically retrieving and reconciling bank transactions.<br>
    Depending on the bank, the frequency of multi-factor authentication may vary, but it is generally between 30 and 90 days.
</div>

### Step-by-Step Guide

Follow these steps to set up automation for retrieving bank transactions:

1. Select **Bank Accounts** in the search bar of Microsoft Dynamics 365 Business Central.
2. Select the bank account for which you want to set up automation.
3. Under **Actions**, select the action **Automate Bank Transaction Retrieval**.
4. Specify the desired filters and the option for automatic reconciliation.
   ![Automate Bank Transaction Retrieval](/assets/images/365-business-banking/retrieve-bank-transactions.en-US.png)
5. Select **OK** to confirm the settings.
6. Select **Yes** to view the created job queue entry.
   ![View Job Queue Entry](/assets/images/365-business-banking/retrieve-bank-transactions-open-job-queue-entry.en-US.png)
7. Review the job queue entry and ensure the settings are correct.
8. Select **Set Status to 'Ready'** to activate the automation.

<div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Note</strong>
    The job queue entry is set to daily retrieval by default. However, you can adjust the retrieval frequency by changing the settings in the job queue entry.
</div>
