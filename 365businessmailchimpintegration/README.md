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
| [`CallApi()`](mailchimpinterface/CallApi.md) | Call Mailchimp API using GET method. |
| [`CallApi()`](mailchimpinterface/CallApi.md) | Call Mailchimp API with request body using POST method. |
| [`CallApi()`](mailchimpinterface/CallApi.md) | Call Mailchimp API. |
| [`ApiResponse()`](mailchimpinterface/ApiResponse.md) | Returns the API Response from previous call as JSON object. |
| [`ApiResponse()`](mailchimpinterface/ApiResponse.md) | Writes the API Response from previous call as JSON object. |

### Mailchimp Interface Calls (Codeunit `5523722` - `bdev.Mailchimp Interface Calls`)
The `bdev.Mailchimp Interface Calls` codeunit object is providing actions to update or create audience in Mailchimp.

#### Methods
The following methods are available:

| Procedure | Description |
| --- | --- |
| [`GetMemberInformation()`](mailchimpinterfacecalls/GetMemberInformation.md) | Retrieve Member Information from Mailchimp |
| [`GetMemberInformation()`](mailchimpinterfacecalls/GetMemberInformation.md) | Retrieve Member Information from Mailchimp |
| [`GetAudienceMembers()`](mailchimpinterfacecalls/GetAudienceMembers.md) | Retrieve Audience Members from Mailchimp |
| [`GetAudienceMembers()`](mailchimpinterfacecalls/GetAudienceMembers.md) | Retrieve Audience Members from Mailchimp |
| [`GetAudienceLists()`](mailchimpinterfacecalls/GetAudienceLists.md) | Retrieve Audience Lists from Mailchimp |
| [`CreateAudienceList()`](mailchimpinterfacecalls/CreateAudienceList.md) | Create Audience List at Mailchimp |
| [`DeleteAudienceList()`](mailchimpinterfacecalls/DeleteAudienceList.md) | Delete Audience List at Mailchimp |
| [`UpdateAudienceMember()`](mailchimpinterfacecalls/UpdateAudienceMember.md) | Update Member Information at Mailchimp |
| [`UpdateAudienceMemberTag()`](mailchimpinterfacecalls/UpdateAudienceMemberTag.md) | Create or Update tags for Audience Member |
| [`UpdateAudienceMemberTag()`](mailchimpinterfacecalls/UpdateAudienceMemberTag.md) | Create, Update or Delete tags for Audience Member |
