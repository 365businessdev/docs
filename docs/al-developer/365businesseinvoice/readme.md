# 365 business E-Invoice

`365 business E-Invoice` is based on Microsofts E-Document Framework and is a solution for sending and receiving electronic invoices, with Microsoft Dynamics 365 Business Central. E-Invoice is adding so-called **document format** and **service integration**, to enable sending and receiving electronic invoices.

The following document formats are supported:

 - Factur-X 1.0.07
 - ZUGFeRD 2.3.0 (EXTENDED)

The following service integrations are supported:

 - Microsoft 365 Mailbox

## Dependency

To be able to create your own implementation you have to add a dependency to the `365 business E-Invoice` app. You do this by adding the following to the `dependencies` node in your `app.json` file:

```json
    {
      "id": "cf38c5e4-71de-4e90-b544-4b1689e1db3f",
      "name": "365 business E-Invoice",
      "publisher": "365 business development",
      "version": "25.0.0.0"
    }
```

## Extendability

365 business E-Invoice is creating compliant electronic documents, for sales invoices and sales credit memos. In some business cases it may be necessary to extend the base functionality, for example for add additional fields to the electronic document. This can be done by creating a new extension, that extends the base functionality.

### E-Invoice Integration

The `bdev.E-Invoice Integration` codeunit is the main integration point for extending the base functionality. The codeunit provides event publisher to manipulate both the PDF document and the XML metadata, before the electronic document is created.

<div class="columns">
   <div style="width: 50%">
       <a href="extendability-events-import.md">
           <div>
               <div><i class="fa-duotone fa-thin fa-puzzle-piece" style="--fa-secondary-color: #00b7c3"></i></div>
               <div>Import</div>
               <div>Extendability Events & Examples</div>
           </div>
       </a>
   </div>
   <div style="width: 50%">
       <a href="extendability-events-export.md">
           <div>
               <div><i class="fa-duotone fa-thin fa-puzzle-piece" style="--fa-secondary-color: #00b7c3"></i></div>
               <div>Export</div>
               <div>Extendability Events & Examples</div>
           </div>
       </a>
   </div>
</div>

## See also

 - [Documentation - 365 business E-Invoice](../../en-us/365-business-e-invoice/index.md)