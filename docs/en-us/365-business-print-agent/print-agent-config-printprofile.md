---
title: Print Profile
---
A print profile represents a specific configuration of your printer that controls advanced functionalities.

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg" style="--fa-secondary-color: #FF0000; --fa-primary-color: #111111; --fa-secondary-opacity: 0.7"></i> <strong>Important:</strong>For basic print jobs (duplex, copies, output color, paper type, tray), print profiles are not required. However, if you want to use the printer's advanced features, you need to create a print profile.
</div>

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg" style="--fa-secondary-color: #FF0000; --fa-primary-color: #111111; --fa-secondary-opacity: 0.7"></i> <strong>Important:</strong>Print profiles are only available for printers that are configured with the standard emulation type "PDF".
</div>

Advanced functionalities include:

* Finishing options such as stapling, punching, and binding,
* Printing options for label printers, such as offset, temperature, and print speed.

## Creating a Print Profile

#### Step 1: Select the Printer

In the 365 business Print Agent Config, select “Printers” and mark the printer for which you want to create a print profile. Then select the "Print Profiles" menu.

![Druckerverwaltung](/assets/images/365-business-print-agent/config-tool/Printer_en.PNG) 

#### Step 2: Managing Print Profiles

In the next dialog, all existing print profiles for the selected printer will be displayed. You have the option to create, edit, and delete print profiles. By clicking the "Save" button, your changes will be stored in the database.

![Druckprofilverwaltung](/assets/images/365-business-print-agent/config-tool/PrintProfileOverview_en.PNG) 

#### Step 3: Creating a Print Profile

Click "New" to create a new print profile. A wizard will open to guide you through the process. 
After an introduction, you will be asked to select a PDF file for a test print. After selecting the PDF, click "Next."

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Note:</strong> Keep in mind that the selected PDF will be printed.
</div>

![Wizard-1](/assets/images/365-business-print-agent/config-tool/PrintProfileWizard2_en.PNG)

On the next page, you can click the "Configure" button to open the print settings dialog. 
Make the necessary adjustments and confirm by clicking "OK." The PDF will then be printed.<br/>
Please check the print result. If it meets your requirements, click "Next" to proceed. 
If the result is unsatisfactory, you can refine the settings by clicking "Configure" again.

![Wizard-2](/assets/images/365-business-print-agent/config-tool/PrintProfileWizard3_en.PNG) 

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Note:</strong> The print settings dialog may look different depending on the printer used.
</div>
![Druckeinstellungen-SATO](/assets/images/365-business-print-agent/config-tool/sato_Druckeinstellungen.PNG) 

In the final step, you will give the print profile a name. Under this name, the print profile will be available in the 365 business Print Agent App in Microsoft Dynamics Business Central.

![Wizard-3](/assets/images/365-business-print-agent/config-tool/PrintProfileWizard4_en.PNG) 

Nach erfolgreicher Einrichtung können Sie den Assistenten beenden.

#### Step 4: Saving the Print Profile

Click "Save" to create the print profile and make it available in the 365 business Print Agent App.

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg" style="--fa-secondary-color: #00b7c3; --fa-primary-color: #111111;"></i> <strong>Note:</strong>To use the print profiles, you must refresh the printers in the 365 business Print Agent App. <a href="printer-configuration.md">Learn more.</a>
</div><br/>