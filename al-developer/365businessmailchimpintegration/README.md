# 365 business Mailchimp Integration
The `365 business Mailchimp Integration` app implements an interface to Mailchimp bulk e-mail service to manage audience and audience members directly in Microsoft Dynamics 365 Business Central.

## Interfaces
The `365 business Mailchimp Integration` app is providing codeunits to allow integration into customer specific business processes.

### Mailchimp Interface (Codeunit `5523720` - `bdev.Mailchimp Interface`)
The `bdev.Mailchimp Interface` codeunit object is providing communication functionalities with the Mailchimp API.

#### Methods
The following methods are available:

| Procedure | Description |
| --- | --- |
| [`CallApi()`](al-developer/mailchimpinterface/CallApi.md) | Call Mailchimp API using GET method. |
| [`CallApi()`](al-developer/mailchimpinterface/CallApi.md) | Call Mailchimp API with request body using POST method. |
| [`CallApi()`](al-developer/mailchimpinterface/CallApi.md) | Call Mailchimp API. |
| [`ApiResponse()`](al-developer/mailchimpinterface/ApiResponse.md) | Returns the API Response from previous call as JSON object. |
| [`ApiResponse()`](al-developer/mailchimpinterface/ApiResponse.md) | Writes the API Response from previous call as JSON object. |

### Mailchimp Interface Calls (Codeunit `5523722` - `bdev.Mailchimp Interface Calls`)
The `bdev.Mailchimp Interface Calls` codeunit object is providing actions to update or create audience in Mailchimp.

#### Methods
The following methods are available:

| Procedure | Description |
| --- | --- |
| [`GetMemberInformation()`](al-developer/mailchimpinterfacecalls/GetMemberInformation.md) | Retrieve Member Information from Mailchimp |
| [`GetMemberInformation()`](al-developer/mailchimpinterfacecalls/GetMemberInformation.md) | Retrieve Member Information from Mailchimp |
| [`GetAudienceMembers()`](al-developer/mailchimpinterfacecalls/GetAudienceMembers.md) | Retrieve Audience Members from Mailchimp |
| [`GetAudienceMembers()`](al-developer/mailchimpinterfacecalls/GetAudienceMembers.md) | Retrieve Audience Members from Mailchimp |
| [`GetAudienceLists()`](al-developer/mailchimpinterfacecalls/GetAudienceLists.md) | Retrieve Audience Lists from Mailchimp |
| [`CreateAudienceList()`](al-developer/mailchimpinterfacecalls/CreateAudienceList.md) | Create Audience List at Mailchimp |
| [`DeleteAudienceList()`](al-developer/mailchimpinterfacecalls/DeleteAudienceList.md) | Delete Audience List at Mailchimp |
| [`UpdateAudienceMember()`](al-developer/mailchimpinterfacecalls/UpdateAudienceMember.md) | Update Member Information at Mailchimp |
| [`UpdateAudienceMemberTag()`](al-developer/mailchimpinterfacecalls/UpdateAudienceMemberTag.md) | Create or Update tags for Audience Member |
| [`UpdateAudienceMemberTag()`](al-developer/mailchimpinterfacecalls/UpdateAudienceMemberTag.md) | Create, Update or Delete tags for Audience Member |
