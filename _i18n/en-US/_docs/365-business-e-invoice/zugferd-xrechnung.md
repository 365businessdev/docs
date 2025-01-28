ZUGFeRD and XRechnung are two key standards for electronic invoices, differing in structure, application, and target audience. Both comply with the EN-16931 standard, but they offer distinct approaches for processing and exchanging invoice data. While ZUGFeRD, as a hybrid format, combines visual and machine-readability, XRechnung focuses solely on structured, machine-readable data transmission.

The following table highlights the key differences and use cases of these two formats:

| Feature                    | ZUGFeRD                                   | XRechnung                                 |
|----------------------------|-------------------------------------------|-------------------------------------------|
| **Format**                 | Hybrid (PDF + XML)                        | Pure XML                                  |
| **Primary Use Case**       | Invoices in B2C, B2B and B2G sectors           | Primarily in B2G sector in Germany        |
| **Readability**            | PDF for humans, XML for machines          | Machine-readable only (XML)               |
| **Standard**               | EN-16931, supports multiple profiles      | EN-16931, based on German specification   |
| **Profiles**               | Basic, Comfort, Extended (depending on detail level) | No profiles, single standard format       |
| **Adoption**               | Widely used across Europe                 | Primarily in Germany, growing in Europe   |
| **Compatibility**          | Can be viewed as a standard PDF           | Requires special software to read XML     |
| **Recommended Use**        | B2B, where visual review is needed        | B2G, where structured data is required    |
| **Strength**               | Combines visual and machine-readability   | High data consistency and standardization |

The most significant difference is obvious: XRechnung is a single XML file, i.e., a simple invoice document intended for automatic processing by software. Human processing is usually only possible with additional visualization tools.

The main difference between ZUGFeRD and XRechnung is as follows:
ZUGFeRD contains both an XML file and a PDF file, while XRechnung contains only an XML file.

In addition, the XRechnung file contains Germany-specific content (mainly of a tax nature) that was not included in earlier versions of the ZUGFeRD XML file.

## Is ZUGFeRD compatible with XRechnung?

Since the introduction of ZUGFeRD 2.1.1 in July 2020, ZUGFeRD and XRechnung are now fully compatible.

<div class="alert alert-notice">
    <i class="fa-solid fa-lightbulb"></i> <strong>Good to know:</strong> 365 business E-Invoice creates ZUGFeRD 2.3.0 files in the EXTENDED profile and is therefore fully compatible with XRechnung. No additional configuration is required for processing incoming XRechnung files.
</div>

## What is Factur-X?

ZUGFeRD and Factur-X are closely related and essentially identical. Both formats were developed to standardize and simplify electronic invoicing. The main difference lies in the regional designation: while ZUGFeRD is mainly used in Germany, Factur-X is the international designation used particularly in France and other European countries.