With 365 business AL Extension Manager you can easily install, update and uninstall extensions and partner apps for Microsoft Dynamics 365 Business Central. All this in an intuitive user interface.

#### What is the AL Extension Manager for?

With the introduction of Microsoft Dynamics 365 Business Central extensions (*.app) and the move from C/SIDE to Visual Studio Code, the process for implementing customizations and extensions has fundamentally changed.

This change brings especially consultants in on-premise environments again and again into the situation that they have to publish and install extensions themselves with the help of PowerShell CmdLets.
Especially the consideration of dependencies between extensions leads to problems again and again, because often the responsible consultants do not have access to the underlying AL code.

The process is further complicated by so-called runtime packages, which are published by third parties and do not contain any source code, which often makes dependency analyses using classic tools (e.g. PowerShell scripts) even more difficult.

>**Note**<br>Runtime Packages are precompiled AL extensions that have been compiled on a specific platform version and may not run on different versions.
Runtime Packages, unlike classic AL extensions, cannot be easily unpacked and analyzed.

For this reason the 365 business AL Extension Manager was developed. With the AL Extension Manager it should be possible to install and uninstall AL extensions, whether classic extensions or runtime packages, via a user-friendly and intuitive interface. The distinction between Publish, Unpublish, Install, Uninstall, Sync, etc. is not necessary and is taken over by the AL-Installer.

#### Which functions does the AL Extension Manager support?

The 365 business AL Extension Manager has the following functions:
 - Analysis of runtime packages and classic AL extensions.
 - Consideration of dependencies during installation & uninstallation
 - Installation & uninstallation, including all necessary processing steps
 - Analysis of possible problems and errors during installation
 - `365 business App Automation API` extension for advanced management capabilities
 - Visualization of dependencies between extensions