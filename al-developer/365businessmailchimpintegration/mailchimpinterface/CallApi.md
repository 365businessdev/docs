<style>.page-header{margin:0 auto;font-family: Segoe UI Semibold;font-size: 10px;}.page-footer{margin-left: 50px;font-family:Segoe UI;font-size:9px}h1{font-size:28px}h2{font-size:26px}h3{font-size:23px}h4{font-size:22px}h5{font-size:20px}table{width:100%}#object-description{margin-top:-10px;margin-bottom:0px;}</style>

# `CallApi()`

Call Mailchimp API.


## Syntax

```al
[Boolean] := CallApi(method: Enum "bdev.Api Call Method", url: Text, request: Text)
```

## Parameters

*method*<br>
&emsp;Type: Enum  "bdev.Api Call Method"<br>

HTTP Action.

*url*<br>
&emsp;Type: Text <br>

API URL to consume.

*request*<br>
&emsp;Type: Text <br>

Request body to be send.


## Return

*Boolean*<br>

True if API Call has been processed successfully. Otherwise false.

