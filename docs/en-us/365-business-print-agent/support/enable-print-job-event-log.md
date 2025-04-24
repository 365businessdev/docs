# Logging Print Jobs in the Event Viewer

By default, print jobs are **not** logged in the Windows or Windows Server Event Viewer.  
However, enabling logging can be useful in certain scenarios — for example, for **troubleshooting** or **monitoring the status of print jobs**.

This article shows how to enable print job logging in the Event Viewer.

---

## Step 1: Open the Event Viewer

1. Press `Windows` + `R` on your keyboard to open the **Run** dialog.
2. Type `eventvwr.msc` and press `Enter`.  
   → This will open the **Event Viewer**.

## Step 2: Enable Print Job Logging

1. In the Event Viewer, navigate to the following path:  
   `Applications and Services Logs` > `Microsoft` > `Windows` > `PrintService` > `Operational`
2. Select the **Operational** log.
3. In the **Action** menu, click **Enable Log**.

![Event Viewer - Enable Print Job Logging](/assets/images/365-business-print-agent/3025eb4d-7262-45a1-977a-b285901b1565.png)