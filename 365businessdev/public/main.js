export default {
  defaultTheme: 'dark',
  iconLinks: [
    {
      icon: 'english',
      href: '#',
      title: 'English'
    },
    {
      icon: 'german',
      href: '#',
      title: 'Deutsch'
    }
  ],
  lunrLanguages: ['de'],
  translations: {
    search: {
      placeholder: 'Suche',
      noResultsText: 'Keine Treffer gefunden.',
      resultsText: 'Ergebnisse',
      titlePlaceholder: 'Nach Titel filtern',
	}
  },
  start() {
    //console.log("🚀 main.js gestartet");

    //<!-- Matomo -->
	var _paq = window._paq = window._paq || [];
	/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
	_paq.push(["setDomains", ["*.www.365businessdev.com","*.docs.365businessdev.com","*.downloads.365businessdev.com"]]);
	_paq.push(["enableCrossDomainLinking"]);
	_paq.push(['trackPageView']);
	_paq.push(['enableLinkTracking']);
	(function() {
		var u="https://businessdev.matomo.cloud/";
		_paq.push(['setTrackerUrl', u+'matomo.php']);
		_paq.push(['setSiteId', '1']);
		var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
		g.async=true; g.src='https:///businessdev.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
	})();
	//<!-- End Matomo Code -->
    //console.log("📊 Matomo Tag Manager geladen!");
	
	setTimeout(() => {
		//console.log("🕒 Warten hat geholfen! Suche nach Sprachumschalt-Buttons...");
		const buttons = document.querySelectorAll('a[title="English"], a[title="Deutsch"]');
		//console.log(`📌 Gefundene Buttons nach Timeout: ${buttons.length}`);

		buttons.forEach(btn => {
			btn.addEventListener('click', (event) => {
			  event.preventDefault();
			  const icon = btn.querySelector('i');
			  if (!icon) return;

			  const currentUrl = window.location.pathname;

			  // Aktuelle Sprache ermitteln
			  const isGerman = currentUrl.includes('/de-de/');
			  const isEnglish = currentUrl.includes('/en-us/');

			  // Zielsprache anhand Icon
			  const wantsGerman = icon.classList.contains('bi-german');
			  const wantsEnglish = icon.classList.contains('bi-english');

			  // Umschalten nur wenn notwendig
			  if (wantsGerman && !isGerman) {
				window.location.pathname = currentUrl.replace('/en-us/', '/de-de/');
			  } else if (wantsEnglish && !isEnglish) {
				window.location.pathname = currentUrl.replace('/de-de/', '/en-us/');
			  } else {
				console.log('🔄 Kein Sprachwechsel nötig.');
			  }
			});
		  });

		  // Sprache aus URL ermitteln
		  const isGerman = window.location.pathname.includes('/de-de/');
		  const isEnglish = window.location.pathname.includes('/en-us/');

		  // 🔠 UI-Texte lokalisieren
		  const searchInput = document.querySelector('.search input');
		  if (searchInput) {
			searchInput.setAttribute('placeholder', isGerman ? 'Suche' : 'Search');
		  }

		  const titleFilter = document.querySelector('input[placeholder="Filter by title"]');
		  if (titleFilter) {
			titleFilter.setAttribute('placeholder', isGerman ? 'Nach Titel filtern' : 'Filter by title');
		  }

		  const noResults = document.querySelector('.search .results .empty');
		  if (noResults) {
			noResults.textContent = isGerman ? 'Keine Ergebnisse gefunden.' : 'No results found.';
		  }
		  
		  // 🔄 "Next"/"Previous" Buttons lokalisieren
		  const nextArticle = document.querySelector('#nextArticle');
		  if (nextArticle && isGerman) {
		    const prev = nextArticle.querySelector('.prev span');
				
			if (prev && prev.textContent.includes('Previous')) {
				prev.innerHTML = '<i class="bi bi-chevron-left"></i> Zurück';
			}

			const next = nextArticle.querySelector('.next span');
			if (next && next.textContent.includes('Next')) {
				next.innerHTML = 'Weiter <i class="bi bi-chevron-right"></i>';
			}
		  }
		  
		  const inThisArticle = document.querySelector('#affix h5');
		  if (inThisArticle && isGerman && inThisArticle.textContent.trim() === 'In this article') {
				inThisArticle.textContent = 'In diesem Artikel';
		  }
		  
	}, 1000);


  },
  configureHljs (hljs) {
    console.log("🎨 Highlight.js wird konfiguriert...");

    hljs.registerLanguage("al", function (hljs) {
      return {
        case_insensitive: true,
        keywords: {
          keyword: "procedure var begin end if then else repeat until while for to do with",
          literal: "true false null",
          built_in: "Rec Field Page Codeunit Report Query XMLPort Enum Option",
        },
        contains: [
          hljs.C_LINE_COMMENT_MODE, // // Kommentar
          hljs.C_BLOCK_COMMENT_MODE, /* Mehrzeiliger Kommentar */
          hljs.QUOTE_STRING_MODE, // "String"
          hljs.APOS_STRING_MODE, // 'String'
          hljs.NUMBER_MODE // Zahlen
        ]
      };
    });

    hljs.highlightAll(); // Alle Codeblöcke formatieren
    console.log("✅ AL-Syntax-Highlighting aktiviert!");
  },
};


