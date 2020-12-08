---
title: Get Started
permalink: /al-developer/get-started
layout: default
---
To get started writing extensions based on our products you first need to set up some preconditions.

#### Development in AL 
Extensions are a programming model where functionality is defined as an addition to existing objects and defines how they are different or modify the behavior of the solution. This section explains how you can develop extensions, based on the [365 business development](https://www.365businessdev.com/) apps for Microsoft Dynamics 365 Business Central.

If you are new to building extensions, we recommend that you read [Development in AL](https://docs.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-dev-overview) to get an understanding of the basics and terms you will encounter while working. 
Next, follow the [Getting Started with AL](https://docs.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-get-started) to set up the tools.

#### API Key
To consume the `365 business API` services you need to obtain an API key for authentication. For developers we provide API keys for development. These API keys are free of charge, but have only a limited usage volume.
You also can develop with your actual subscription API key if present.

We recommend to develop against the `testing` slot of the `365 business API` instead of test against the `productive` environment. 

>Note<br>Developer API keys are not permitted to access the `productive` environment.

#### Dependencies
Before you can start working with our libraries you need to define `dependencies` to the specific app you want to build upon.
Dependencies are defined in the `app.json` file of your extension. See [JSON Files](https://docs.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-json-files#Appjson).

##### Example 
The following example show the dependency entry to our base application to consume the 365 business API.
```json
{
    "appId": "0f94d4ef-5c3a-4002-93f2-2a2be05219c0",
    "name": "365 business API",
    "version": "1.0.0.0",
    "publisher": "365 business development"
}
```
