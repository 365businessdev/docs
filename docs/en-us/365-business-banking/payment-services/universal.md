# Universal

The **Universal Banking Provider** is a flexible solution for importing bank transactions from CSV files for payment service providers that are not directly supported by 365 business Banking (e.g., Otto, Zalando, etc.).

## Features

<ul>
<i aria-hidden="true" class="fas fa-check"></i> Import transactions from any CSV file format<br>
<i aria-hidden="true" class="fas fa-check"></i> Map CSV columns to transaction model fields<br>
<i aria-hidden="true" class="fas fa-check"></i> Combine multiple CSV rows into a single transaction<br>
<i aria-hidden="true" class="fas fa-check"></i> Sum, concatenate, or combine values from multiple rows<br>
<i aria-hidden="true" class="fas fa-check"></i> Create formulas to calculate values (e.g., fees)<br>
<i aria-hidden="true" class="fas fa-check"></i> Split transactions into multiple rows<br>
</ul>

## Step-by-Step Guide

1. Select **Bank Accounts** in the search of Microsoft Dynamics 365 Business Central.
2. Create a new bank account or select an existing one.
3. In the **Bank Account Card**, under **Actions**, select the **Account Connection** action group and **Connect…**.
4. Select **Universal** from the list.
5. Confirm the confirmation dialog with **Yes**.

![Setup](/assets/images/365-business-banking/universal-setup.de-DE.png)

### General Settings

In the general settings for the **Universal** Banking Provider, you can define grouping and transaction ID fields, as well as select the file format.
 
<div class="alert alert-notice">
    <i class="fa-duotone fa-solid fa-lightbulb fa-xl"></i>
    <strong>Good to know</strong>
    Currently, only <strong>CSV files</strong> are supported.<br>
    Additional file formats, such as JSON, XLS(X), or XML, may be added in future versions.
</div>

More information about the general settings can be found in the following table:

| Setting | Description |
| --- | --- |
| Grouping Field | Define one or more fields to group rows from the CSV file and combine them into a single transaction. For example, you could use the "Order Number" and "Transaction Date" fields to group all rows with the same order number and date into one transaction. |
| Transaction ID Field | Define a field to be used as the unique transaction ID. If this field is defined, a separate transaction will be created for each row, even if multiple rows have the same transaction ID. |

### CSV Settings

<div class="alert alert-info">
    <i class="fa-duotone fa-solid fa-circle-info fa-xl"></i>
    <strong>Info</strong>
    The <strong>CSV Settings</strong> are only available for the <strong>CSV</strong> file format.
</div>

In the CSV settings, you can configure the specific settings for importing CSV files. The following settings are supported:

| Setting | Description |
| --- | --- |
| Encoding | Specifies the text encoding of the CSV file. |
| Delimiter | Specifies the character that separates columns in the CSV file (e.g., comma, semicolon, tab). |
| Text Qualifier | Specifies the character that surrounds text values in the CSV file (e.g., quotation marks). |
| Decimal Separator | Specifies the character that separates decimal places in numeric values (e.g., period or comma). |
| Thousands Separator | Specifies the character that separates thousands places in numeric values (e.g., period or comma). |
| Date Format | Specifies the format in which date values are represented in the CSV file (e.g., DD/MM/YYYY, MM/DD/YYYY, YYYY-MM-DD). |

Additionally, you can define whether the CSV file contains header or footer rows that should be skipped during import.

| Setting | Description |
| --- | --- |
| Header Rows | Specifies how many rows at the beginning of the CSV file should be skipped before starting to import transactions. |
| Footer Rows | Specifies how many rows at the end of the CSV file should be skipped after all transactions have been imported. |

### Column Mapping

Column mapping allows you to map the columns in your CSV file to the corresponding fields in the 365 business Banking transaction model. You can also define formulas to calculate or transform values before they are transferred to the transaction.

| Field | Description |
| --- | --- |
| Code | Unique identifier for this column. Used for referencing in formulas and groupings. |
| Type | Specifies whether this is a direct column, a calculated field, or a constant value. |
| Column Index | Specifies the zero-based position of the column in the CSV file (only for direct columns). |
| Formula | Define a formula to calculate the value for this field. In the formula, you can reference other columns by their code. |
| Constant | Specifies the fixed value to be used for this field (only for constant values). |
| Target Field No. | Specifies the field number in the transaction model to which the value should be imported. |
| Function | Specifies an optional function to be applied to the value (e.g., First, Sum, Concatenate, etc.). |
| Text Separator | Specifies an optional character used to separate values when multiple rows are grouped into one transaction (e.g., for the "Concatenate" function). |
| Split Transaction | Specifies whether this column should be used to split transactions. If enabled, a separate transaction will be created for each row with a different value in this column. |
| Split Suffix | Specifies an optional suffix to be appended to the transaction ID when a transaction is split due to this column. |
| Split Description | Specifies an optional description to be used in the transaction when a transaction is split due to this column. |

## Disconnect Account Connection

To disconnect the connection, proceed as follows:

1. Select **Bank Accounts** in the search of Microsoft Dynamics 365 Business Central.
2. Select the bank account.
3. In the **Bank Account Card**, under **Actions**, select the **Account Connection** action group and **Remove Connection...**.
4. Confirm the confirmation dialog with **Yes**.