---
title: Print jobs in the event log
---
By default, print jobs are not recorded in the event log by Windows or Windows Server. However, in some cases, it may be helpful to log print jobs in the event log. This can be useful for troubleshooting or monitoring the status of print jobs. This article describes how to enable logging of print jobs in the event log.

## Step 1: Open the Event Viewer

1. Press the `Windows` key and `R` on your keyboard to open the Run dialog box.
2. Type `eventvwr.msc` into the dialog box and press `Enter`. This will open the Event Viewer.

## Step 2: Enable Print Job Logging

1. In the Event Viewer, navigate to `Applications and Services Logs` > `Microsoft` > `Windows` > `PrintService` > `Operational`.
2. Select the `Operational` entry.
3. In the `Action` menu, select `Enable Log`.

![Event Viewer - Enable Print Job Logging](/assets/images/365-business-print-agent/3025eb4d-7262-45a1-977a-b285901b1565.png)