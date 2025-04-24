# Automated Screening (Job Queue)

365 business Sanction Screen supports automated sanction list screening in Microsoft Dynamics 365 Business Central. The automated sanction list screening allows you to automatically perform sanction list screening for all supported entities.

## Before you start

On the **Sanction Screen Setup** page, you can set the screening intervals for each entity, select the data catalogs to be screened, and configure notifications. Additionally, you will find useful information about the current configuration and the screenings performed.

![365 business Sanction Screen - Setup](/assets/images/365-business-sanction-screen/sanctionscreen.setup.en-US.png)

Before setting up automated sanction list screening, check that the **Sanction Screen Setup** is configured correctly. This is the only way to ensure that the automated sanction list screening is performed correctly.

## Setting up automated sanction list screening

Follow these steps to set up automated sanction list screening in Microsoft Dynamics 365 Business Central:

1. Open the **Job Queue Entries** page via the Microsoft Dynamics 365 Business Central search.
2. Select the **Sanction Screening** line.
3. Select the **Job Queue** action group and then **Request Page**.
4. Make the desired settings for the automated sanction list screening.<br>
   ![365 business Sanction Screen - Automated Sanction List Screening](/assets/images/365-business-sanction-screen/sanctionscreen.screening-job.en-US.png)
5. Select **OK** to save the settings.
6. Make the desired settings for the repetition of the automated sanction list screening.
7. Select the **Set Status to 'Ready'** action to activate the job queue entry.

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i>
    <strong>Info</strong> To ensure optimal sanction list screening, we recommend configuring the screening intervals for each entity (e.g., customer) in the <strong>Sanction Screen Setup</strong>.
</div>

# See also

- [Setup](setup.md)
- [Data catalogs for sanction screening](data-sources.md)