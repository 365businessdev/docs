By installing 365 business Sanction Screen, the basic setup is already completed, and you are ready to perform the sanctions list check in Microsoft Dynamics 365 Business Central.
However, this is a standard setup that should be customized according to the individual requirements of your company.

### Before you start

Before you begin with the sanctions list check, you should review the following points:

- **Data Catalogs:** Review the data catalogs to be used for the sanctions list check. 365 business Sanction Screen offers comprehensive coverage of over 240 data sources that can be used for the sanctions list check. For more information, click [here](data-sources/).
- **Intervals:** Review the intervals at which the sanctions list check should be performed. 365 business Sanction Screen enables fully automated sanctions checks with configurable intervals for each entity.

#### Check Intervals

The check intervals determine how often the sanctions list check is performed. You can configure the check intervals for each entity individually, with the following recommendations:

- **Small businesses:** Annually. Small businesses with low risk and few business partners can perform an annual review.
- **Medium-sized businesses:** Semi-annually. Medium-sized businesses should review their trading partners and employees every six months to ensure they are not doing business with sanctioned individuals or organizations.
- **Large businesses:** Quarterly. Large businesses with extensive international business relationships should perform a sanctions list check at least every three months.
- **High-risk businesses:** Monthly. Businesses operating in high-risk industries or conducting many international transactions should consider monthly reviews.
- **Businesses with critical business areas:** Weekly. Businesses operating in particularly sensitive or regulated areas, such as financial services or the defense industry, should perform weekly checks.

### Setup

The **Sanction Screen Setup** can be used as a central point for configuring the sanctions list check in Microsoft Dynamics 365 Business Central. Here you can set the check intervals for each entity, select the data catalogs to be checked, and configure notifications.
Additionally, you will find useful information about the current configuration and the checks performed.

![365 business Sanction Screen - Setup](/assets/images/365-business-sanction-screen/sanctionscreen.setup.en-US.png)

#### Sales & Receivables

In the **Sales & Receivables** group, you can specify how Microsoft Dynamics 365 Business Central should handle potential matches and hits in the sanctions list check within sales documents and customers.

| Field | Description | Default |
| --- | --- | --- |
| **Hit Behavior** | Specifies how Microsoft Dynamics 365 Business Central should handle potential matches in the sanctions list check. | **Notify** |

<div class="alert alert-info">
    <i class="fa-solid fa-lightbulb"></i> <strong>Note:</strong> In the current version, the options <i>Notify</i> and <i>None</i> are available.<br>
    <br>
    In future versions of 365 business Sanction Screen, additional options will be available to further differentiate the handling of hits in the sanctions list check.<br>
    <br>
    Please check regularly for updates and new features.
</div>

#### Purchase & Payables

In the **Purchase & Payables** group, you can specify how Microsoft Dynamics 365 Business Central should handle potential matches and hits in the sanctions list check within purchase documents and vendors.

| Field | Description | Default |
| --- | --- | --- |
| **Hit Behavior** | Specifies how Microsoft Dynamics 365 Business Central should handle potential matches in the sanctions list check. | **Notify** |

#### Screening Interval

The **Screening Interval** determines how often the sanctions list check is performed. You can set the interval for each entity individually.

| Interval | Description |
| --- | --- |
| **Annually** | The check is performed within a year after the last check. |
| **Semi-annually** | The check is performed within six months after the last check. |
| **Quarterly** | The check is performed within three months after the last check. |
| **Monthly** | The check is performed within a month after the last check. |
| **Weekly** | The check is performed within a week after the last check. |
| **Manually** | The check is performed manually by the user only. |

<div class="alert alert-notice">
    <i class="fa-solid fa-notes"></i> <strong>Good to know:</strong> In the automated task queue entry <strong>Sanctions Check</strong>, the setting can be overridden to perform special checks deviating from the standard.
</div>

### Permissions

365 business Sanction Screen provides two permission sets required for the sanctions list check:

| Permission Set | Name | Description |
| --- | --- | --- |
| `BDEV.OS.BASIC` | Sanctions Check - BASIC | Provides the basic permissions to work with 365 business Sanction Screen. This permission set should be assigned to **all users**. |
| `BDEV.OS.WHITELIST` | Sanctions Check - Whitelist | Authorizes the user to add sanction hit entries to the whitelist. |

### See also

- [Step-by-step guide](../get-started/)
- [Data catalogs for sanctions check](../data-sources/)
