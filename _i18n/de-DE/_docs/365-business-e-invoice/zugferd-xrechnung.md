ZUGFeRD und XRechnung sind zwei zentrale Standards für elektronische Rechnungen, die sich in ihrer Struktur, Anwendung und Zielgruppe unterscheiden. Beide erfüllen die Anforderungen der Norm EN-16931, doch sie bieten unterschiedliche Ansätze für die Verarbeitung und den Austausch von Rechnungsdaten. Während ZUGFeRD als hybrides Format sowohl die visuelle als auch die maschinelle Lesbarkeit vereint, fokussiert sich XRechnung ausschließlich auf eine strukturierte, maschinenlesbare Datenübertragung.

Die folgende Tabelle zeigt die wichtigsten Unterschiede und Einsatzgebiete dieser beiden Formate im direkten Vergleich:

| Merkmal                    | ZUGFeRD                                   | XRechnung                                 |
|----------------------------|-------------------------------------------|-------------------------------------------|
| **Format**                 | Hybrid (PDF + XML)                        | Rein XML                                  |
| **Hauptanwendungszweck**   | Rechnungen im B2C-, B2B- und B2G-Bereich        | Vorzugsweise im B2G-Bereich in Deutschland |
| **Lesbarkeit**             | PDF für Menschen, XML für Maschinen       | Nur maschinenlesbar (XML)                 |
| **Standard**               | EN-16931, unterstützt mehrere Profile     | EN-16931, basiert auf deutscher Spezifikation |
| **Profile**                | Basic, Comfort, Extended (je nach Detailtiefe) | Keine Profile, nur ein Standardformat     |
| **Verbreitung**            | Weit verbreitet in Europa                 | Vorzugsweise in Deutschland, wachsend in Europa |
| **Kompatibilität**         | Kann als PDF betrachtet werden            | Erfordert spezielle Software für XML-Lesen|
| **Empfohlene Nutzung**     | B2B, wo visuelle Kontrolle erforderlich ist | B2G, wenn strukturiertes Datenformat erforderlich |
| **Vorteil**                | Kombiniert visuelle und maschinelle Lesbarkeit | Hohe Datenkonsistenz und Standardisierung |

Der wesentlichste Unterschied ist offensichtlich: Bei XRechnung handelt es sich um eine einzige XML-Datei, d.h. um ein einfaches Rechnungsdokument, das für die automatische Verarbeitung durch eine Software bestimmt ist. Die Verarbeitung durch den Menschen ist meist nur mit zusätzlichen Werkzeugen zur Visualisierung möglich.

Der Hauptunterschied zwischen ZUGFeRD und XRechnung ist also folgender:
ZUGFeRD enthält sowohl eine XML-Datei als auch eine PDF-Datei, während XRechnung nur eine XML-Datei enthält.

Darüber hinaus enthält die XRechnung-Datei deutschlandspezifische Inhalte (vor allem steuerlicher Art), die in früheren Versionen der XML-Datei von ZUGFeRD nicht enthalten waren.

## Ist ZUGFeRD mit XRechnung kompatibel?

Seit der Einführung von ZUGFeRD 2.1.1 im Juli 2020 sind ZUGFeRD und XRechnung nun aber vollständig kompatibel.

<div class="alert alert-notice">
    <i class="fa-solid fa-lightbulb"></i> <strong>Gut zu wissen:</strong>365 business E-Invoice erstellt ZUGFeRD 2.3.0 Dateien im EXTENDED Profil und ist damit vollständig kompatibel mit XRechnung. Für die Verarbeitung von eingehenden XRechnung-Dateien ist daher keine zusätzliche Konfiguration erforderlich.
</div>

## Was ist Factur-X?

ZUGFeRD und Factur-X sind eng miteinander verbunden und im Wesentlichen identisch. Beide Formate wurden entwickelt, um die elektronische Rechnungsstellung zu standardisieren und zu vereinfachen. Der Hauptunterschied liegt in der regionalen Bezeichnung: Während ZUGFeRD hauptsächlich in Deutschland verwendet wird, ist Factur-X die internationale Bezeichnung, die insbesondere in Frankreich und anderen europäischen Ländern genutzt wird.

