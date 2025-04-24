# Issue with Multiple Printer Extensions


## Cause

If you receive a message indicating that **multiple printer extensions** are installed in your system, please note that this can lead to **issues with printing functionality** in Microsoft Dynamics 365 Business Central.

In particular, this may result in **duplicate printer names**, which are **not supported** in Business Central and can cause **runtime errors when printing reports and documents**, such as:

![Error caused by multiple printer extensions](/assets/images/365-business-print-agent/6b6ff532-4054-48af-9a6a-625d224d6fee.png)

---

## Solution

Uninstall all printer extensions in your Business Central environment – **except for the 365 business Print Agent**.

<div class="alert alert-warn">
    <i class="fa-light fa-triangle-exclamation fa-lg"></i> <strong>Important:</strong>
	In Microsoft Dynamics 365 Business Central <strong>On-Premises</strong> environments, printers installed on the BC server are added automatically.<br>
	Please make sure to remove any unwanted printers from the Business Central server as well.
</div>

---

### Step 1: Open Extension Management

Open the **Extension Management** in Microsoft Dynamics 365 Business Central using the **Tell me** window (Alt + Q).

![Open Extension Management](/assets/images/365-business-print-agent/673e2550-12ba-4edd-8ed6-9931c0efab16.png)

---

### Step 2: Identify Printer Extensions

Locate any printer extensions that are **not** the 365 business Print Agent.  
Only the 365 business Print Agent should remain installed in your environment.

Examples of other printer extensions:

- Universal Print Integration  
- PrintNode Integration

---

### Step 3: Uninstall Printer Extension(s)

1. Select the extension you want to remove.
2. Click the **three-dot menu**.
3. Choose **Uninstall**.

![Uninstall extension](/assets/images/365-business-print-agent/9b58144b-277d-4b9d-8830-ebceadb5e8e2.png)

---

### Step 4: Confirm Uninstallation

Confirm the removal by clicking **Uninstall**.

