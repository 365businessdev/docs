# Telemetry Data

365 business API emits telemetry data for various activities and operations. Telemetry gives us a look at the activities and general health of our services and functionalities. It helps us diagnose problems and analyze operations that affect performance.

## Available telemetry
With 365 business API app 17.0 and later various telemetry data are sent to 365 business development:

| Area | Name | Description | 
| --- | --- | --- |
| Communication | [`BDEV-API-00040`]<br>API Request Created | An API request has been created for a specific service. |
| Communication | [`BDEV-API-00041`]<br>API Request Sent | An API request has been sent to 365 business API cloud service. |
| Communication | [`BDEV-API-00042`]<br>API Request Failed | An API request has been failed. |
| Communication | [`BDEV-API-00043`]<br>API Request Successful | An API request has been successfully processed. | 
| General | [`BDEV-API-00050`]<br>Error | A processing error has occurred. | 
| General | [`BDEV-API-00051`]<br>Warning | A warning occurred, but processing was performed. |

## Telemetry data
Telemetry gathers following data:

### General dimensions

| Dimension | Description or value | 
| --- | --- |
| eventId | Telemetry Id (e.g. `BDEV-API-00040`). | 
| message | Short description of the processed action or service (e.g. `API Request sent.`). In case of an error, the field contains the error message. |
| severityLevel | Verbosity (e.g. `Error`). |
| sessionId | Unique session id (`GUID`). |

<div class="alert alert-info">
    <i class="fa-duotone fa-thin fa-lightbulb fa-lg"></i> <strong>Note</strong>Additional dimensions may be sent automatically by Microsoft Dynamics 365 Business Central.
</div>

### Custom dimensions
In addition, some custom dimensions, depending on the verbosity, are sent:

| Dimension | Description or value | Verbosity |
| --- | --- | --- |
| callstack | Contains the failing call stack who caused the thrown error or warning. | Critical, Error, Warning |
| request | Contains the sent request for further investigation. | Critical, Error |
| response | Contains, if exists, the received response for further investigation. | Critical, Error |

## Usage
Telemetry data, sent by 365 business API app, are used to look at the activities and general health of our services and functionalities. It helps us diagnose problems and analyze operations that affect performance.

We treat telemetry data with care and act in accordance with our [Privacy Policy](https://365businessdev.com/en/privacy-policy). 

All customer-specific or identifiable information received via telemetry is stored anonymously only.

### How long are the data stored?
In general, telemetry data is stored for 30 days. In individual cases, telemetry data may be used to create work items in our product backlog and in these cases are retained indefinitely.

# See also
 - [Setup](setup.md)
 - [Privacy Policy](https://365businessdev.com/en/privacy-policy)