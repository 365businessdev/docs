
The 365 business Print Agent supports printing via the Line Printer Daemon Protocol (LPD) for all printers that emulate ZPL.

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Note:</strong>The Line Printer Daemon Protocol (LPD) is a network protocol that was originally developed in the 1980s by the University of California, Berkeley. It is used to manage and transmit print jobs over a network, especially in UNIX environments.
</div>
<br>
#### Problem
The 365 business Print Agent uses the “LPR” tool provided by Microsoft in the Windows Server editions for printing via LPD.

#### Solution
To run “LPR” on Windows Server operating systems, install the “LPR Port Monitor” feature.

![LPRPortMonitor](/assets/images/365-business-print-agent/LPRInstall_en.PNG)

To ensure that 'LPR' is installed correctly and the printer is set up properly, it is advisable to perform a test print.

```cmd

lpr -S IP_Address_of_Server -P "Name of Printer" -o l "File_to_print"

lpr -S 10.1.0.10 -P "ZDesigner ZD420-203dpi ZPL" -o l "c:\Users\Administrator\Documents\HelloWorld.zpl"

```

<div class="alert alert-notice">
    <i class="fa-solid fa-notes"></i> <strong>Important:</strong>Make sure that the printer name is entered correctly.
</div>
