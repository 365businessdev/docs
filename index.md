# 365 business development Docs!

<script>
    function redirectToLanguage() {
        // Verfügbare Sprachen
        var languages = {
            "de": "de-de/index.html",
            "en": "en-us/index.html"
        };

        // Browsersprache abrufen
        var userLang = navigator.language || navigator.userLanguage;
        userLang = userLang.split('-')[0]; // "de-DE" -> "de"

        // Wenn Sprache bekannt, umleiten
        if (languages[userLang]) {
            window.location.href = languages[userLang];
        } else {
            // Standard: Englisch
            window.location.href = "en-us/index.html";
        }
    }

    // Umleitung starten
    redirectToLanguage();
</script>

Falls die automatische Weiterleitung nicht funktioniert, wähle deine Sprache:

<a href="/de-de/index.html">Deutsch</a> | <a href="/en-us/index.html">English</a>