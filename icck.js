var iconCookies = function(options, i18n) {
	
	var	div_notice, 
		div_discreet, 
		extend = function() {
			for(var i=1; i<arguments.length; i++)
				for(var key in arguments[i])
					if(arguments[i].hasOwnProperty(key))
						arguments[0][key] = arguments[i][key];
			return arguments[0];
		};

	var i18n = extend({	   
		noticeText: {
			ca:'Aquest lloc web utilitza <a href="{{policyLink}}" target="_blank">cookies</a> per oferir els serveis i millorar l’experiència de navegació. Si continues navegant, considerem que acceptes l’ús que en fem. Vols acceptar-lo directament?',
			de:'Diese Seite benutzt <a href="{{policyLink}}" target="_blank">Cookies</a>, um Dienstleistungen zu erbringen und zur Verbesserung der Browser-Erfahrung. Wenn Sie mit der Suche fortzufahren, halten wir Sie die Verwendung von Cookies zu akzeptieren. Wollen Sie ihn explizit anzunehmen?',
			en:'This site uses <a href="{{policyLink}}" target="_blank">cookies</a> to provide services and improve the browsing experience. If you continue browsing, we consider you accept our use of cookies. Do you want to accept it explicitly?',
			es:'Este sitio web utiliza <a href="{{policyLink}}" target="_blank">cookies</a> para ofrecer los servicios y mejorar la experiencia de navegación. Si continúas navegando, consideramos que aceptas el uso que hacemos de las cookies. ¿Quieres aceptarlo directamente?',
			fr:'Ce site utilise des <a href="{{policyLink}}" target="_blank">cookies</a> pour fournir des services et d\'améliorer l\'expérience de navigation. Si vous continuez la navigation, nous considérons que vous acceptez notre utilisation de cookies. Voulez-vous accepter explicitement?',
			it:'Questo sito utilizza <a href="{{policyLink}}" target="_blank">cookies</a> per fornire servizi e migliorare l\'esperienza di navigazione. Se si continua la navigazione, riteniamo si accetta il nostro uso di cookie. Vuoi accettare esplicitamente?',
			ru:'Этот сайт использует куки для предоставления услуг и улучшения работы в Интернете. Если вы будете продолжать просмотр, мы считаем, что Вы принимаете наше использование куки. Вы хотите, чтобы принять его явно?'
		},
		
		noticeUpdatedText: {
			ca:'La <a href="{{policyLink}}" target="_blank">política de cookies</a> acceptada s\'ha actualitzat. Vols acceptar la nova?',
			de:'Die akzeptierte <a href="{{policyLink}}" target="_blank">Cookie-Richtlinie</a> wurde aktualisiert. Haben Sie die neuen Bedingungen zu akzeptieren?',
			en:'The accepted <a href="{{policyLink}}" target="_blank">Cookie Policy</a> has been updated. Do you accept the new terms?',
			es:'La <a href="{{policyLink}}" target="_blank">política de cookies</a> aceptada se ha actualizado. ¿Deseas aceptar la nueva?',
			fr:'La <a href="{{policyLink}}" target="_blank">politique de Cookie</a> accepté a été mis à jour. Acceptez-vous les nouvelles conditions?',
			it:'La nostra <a href="{{policyLink}}" target="_blank">politica sui cookie</a> accettato è stato aggiornato. Accettate i nuovi termini?',
			ru:'Принятая политика <a href="{{policyLink}}" target="_blank">Cookie</a> был обновлен. Принимаете ли вы новые условия?'
		},
		
		agreeText: { ca:'Sí', de:'Ja', en:'Yes', es:'Sí', fr:'Oui', it:'Sì', ru:'Да' }, // Set empty string ('') or null to hide the button
		
		declineText: { ca:'No', de:'Nein', en:'No', es:'No', fr:'Non', it:'No', ru:'Нет' }, // Set empty string ('') or null to hide the button
		
		infoText: { ca:'Més informació', de:'Mehr Information', en:'More information', es:'Más información', 
				  fr:'Plus d\'information', it:'Maggiori informazioni', ru:'Подробности'}, // Set empty string ('') or null to hide the button
		
		discreetText: { ca:'<a href="{{policyLink}}">Cookies?</a>', de:'<a href="{{policyLink}}">Cookies?</a>', 
					 en:'<a href="{{policyLink}}">Cookies?</a>', es:'<a href="{{policyLink}}">¿Cookies?</a>', 
					 fr:'<a href="{{policyLink}}">Cookies?</a>', it:'<a href="{{policyLink}}">Cookies?</a>', 
					 ru:'<a href="{{policyLink}}">Cookies?</a>'}, // Set empty string ('') or null to hide the discreet bar
		
		noCookiesText: { // Set empty string ('') or null to hide the alert
			ca:'Com que actualment <strong>no acceptes</strong> l\'<a href="{{policyLink}}" target="_blank">ús de cookies</a> el lloc web no pot funcionar correctament. Vols reactivar les cookies?',
			de:'Diese Webseite kann <strong>nicht richtig</strong>, da Sie die <a href="{{policyLink}}" target="_blank">Cookie-Richtlinie</a> nicht akzeptieren. Möchten Sie sie übernehmen und aktivieren Sie diese Option suchen?',
			en:'This website cannot work properly because you <strong>do not accept</strong> the <a href="{{policyLink}}" target="_blank">Cookie Policy</a>. Do you want to accept it &amp; enable Cookies?',
			es:'Como actualmente <strong>no aceptas</strong> el <a href="{{policyLink}}" target="_blank">uso de cookies</a> el sitio puede no funcionar correctamente. ¿Deseas reactivar las cookies?', 
			fr:'Ce site peut ne pas fonctionner correctement car vous <strong>ne pas accepter</strong> la stratégie <a href="{{policyLink}}" target="_blank">Cookie</a>. Voulez-vous de l\'accepter et de permettre les cookies?', 
			it:'Questo sito non può funzionare correttamente perché <strong>non si accetta</strong> la nostra <a href="{{policyLink}}" target="_blank">politica sui cookie</a>. Volete accettare e attivare i cookies?', 
			ru:'Этот веб-сайт не может работать должным образом, потому что вы не принимаете Политика <a href="{{policyLink}}" target="_blank">Cookie</a>. Вы хотите, чтобы принять его и включить Cookies ли?'
		}, 
		
		statusText_AGREED_UACT: {
			ca:'A causa d\'haver utilitzat el lloc web, <strong>es considera que acceptes</strong> la política de cookies. Fes clic <a role="button" data-action="decline" href="#">aquí</a> per no permetre les cookies o <a role="button" data-action="agree" href="#">aquí</a> per permetre-les. No utilitzar-les pot espatllar el funcionament del web.',
			de:'Aufgrund genutzt haben, die Website, betrachten wir die <strong>Cookie-Richtlinie angenommen</strong>. Klicken Sie <a role="button" data-action="decline" href="#">hier</a>, um explizit Cookies abzulehnen oder <a role="button" data-action="agree" href="#">hier</a>, um sie zu ermöglichen. Nicht mit Hilfe von Cookies kann die Funktionalität der Website zu stören.',
			en:'Due to having used the website, <strong>we consider the Cookie Policy accepted</strong>. Click <a role="button" data-action="decline" href="#">here</a> to explicitly disallow cookies or <a role="button" data-action="agree" href="#">here</a> to allow them. Not using cookies may disrupt the functionality of the site.',
			es:'Debido a haber usado el sitio, <strong>se considera que aceptas</strong> la política de cookies. Pulsa <a role="button" data-action="decline" href="#">aquí</a> para no permitir cookies o <a role="button" data-action="agree" href="#">aquí</a> para permitirlas. No usarlas puede estropear la funcionalidad del sitio.', 
			fr:'Grâce à avoir utilisé le site, <strong>nous considérons la politique Cookie accepté</strong>. Cliquez <a role="button" data-action="decline" href="#">ici</a> pour interdire explicitement les cookies ou <a role="button" data-action="agree" href="#">ici</a> pour leur permettre. Ne pas utiliser des cookies peut perturber le fonctionnement du site.', 
			it:'Grazie di aver usato il sito, <strong>si considera la politica sui cookie accettato</strong>. Clicca <a role="button" data-action="decline" href="#">qui</a> per disabilitare i cookie in modo esplicito o <a role="button" data-action="agree" href="#">qui</a> per consentire loro. Non usando i cookies può interrompere la funzionalità del sito.', 
			ru:'Из-за необходимости использовать веб-сайт, мы считаем, что политика <strong>Cookie принимаются</strong>. Нажмите <a role="button" data-action="decline" href="#">здесь</a>, чтобы явно запретить печенье или <a role="button" data-action="agree" href="#">здесь</a>, чтобы позволить им. Не использовать печенье может нарушить функциональность сайта.'
		},
		
		statusText_AGREED_IMPL: {
			ca:'Actualment considerem <strong>notificat i acceptat</strong> l\'ús de cookies al lloc web. Fes clic <a role="button" data-action="decline" href="#">aquí</a> per no permetre les cookies o <a role="button" data-action="agree" href="#">aquí</a> per permetre-les. No utilitzar-les pot espatllar el funcionament del web.',
			de:'Derzeit halten wir die Cookie-Richtlinie <strong>notifiziert und akzeptiert</strong>. Klicken Sie <a role="button" data-action="decline" href="#">hier</a>, um explizit Cookies abzulehnen oder <a role="button" data-action="agree" href="#">hier</a>, um sie zu ermöglichen. Nicht mit Hilfe von Cookies kann die Funktionalität der Website zu stören.',
			en:'We currently consider the Cookie Policy <strong>notified and accepted</strong>. Click <a role="button" data-action="decline" href="#">here</a> to explicitly disallow cookies or <a role="button" data-action="agree" href="#">here</a> to allow them. Not using cookies may disrupt the functionality of the site.',
			es:'Actualmente consideramos <strong>notificado y aceptado</strong> el uso de cookies en el sitio. Pulsa <a role="button" data-action="decline" href="#">aquí</a> para no permitir cookies o <a role="button" data-action="agree" href="#">aquí</a> para permitirlas. No usarlas puede estropear la funcionalidad del sitio.', 
			fr:'Nous considérons actuellement la politique de Cookie <strong>notifié et accepté</strong>. Cliquez <a role="button" data-action="decline" href="#">ici</a> pour interdire explicitement les cookies ou <a role="button" data-action="agree" href="#">ici</a> pour leur permettre. Ne pas utiliser des cookies peut perturber le fonctionnement du site.', 
			it:'Al momento consideriamo la nostra politica sui cookie <strong>notificati ed accettati</strong>. Clicca <a role="button" data-action="decline" href="#">qui</a> per disabilitare i cookie in modo esplicito o <a role="button" data-action="agree" href="#">qui</a> per consentire loro. Non usando i cookies può interrompere la funzionalità del sito.', 
			ru:'В настоящее время мы считаем Политика Cookie <strong>уведомление и принял</strong>. Нажмите <a role="button" data-action="decline" href="#">здесь</a>, чтобы явно запретить печенье или <a role="button" data-action="agree" href="#">здесь</a>, чтобы позволить им. Не использовать печенье может нарушить функциональность сайта.'
				
		},
		
		statusText_AGREED_EXPL: {
			ca:'Actualment has <strong>acceptat</strong> l\'ús de cookies al lloc web. Fes clic <a role="button" data-action="decline" href="#">aquí</a> per no permetre les cookies. Això pot espatllar la funcionalitat del web.',
			de:'Sie haben Cookie Policy dieser Website <strong>einverstanden</strong>. Klicken Sie <a role="button" data-action="decline" href="#">hier</a> an, Cookies abzulehnen. Es kann die korrekte Funktion dieser Website zu stören.',
			en:'You <strong>have agreed</strong> this website\'s cookie policy. Click <a role="button" data-action="decline" href="#">here</a> to disallow cookies. It can disrupt the proper functionality of this website.',
			es:'Actualmente has <strong>aceptado</strong> el uso de cookies en el sitio. Pulsa <a role="button" data-action="decline" href="#">aquí</a> para no permitir cookies. Esto puede estropear la funcionalidad del sitio.', 
			fr:'Vous avez <strong>accepté</strong> la politique de cookie de ce site. Cliquez <a role="button" data-action="decline" href="#">ici</a> pour interdire les cookies. Il peut perturber le bon fonctionnement de ce site.', 
			it:'Hai <strong>accettato</strong> la politica dei cookie di questo sito web. Clicca <a role="button" data-action="decline" href="#">qui</a> per non consentire i cookie. Si può interrompere la corretta funzionalità di questo sito web.', 
			ru:'Вы <strong>согласились</strong> политику печенье этом веб-сайта. Нажмите <a role="button" data-action="decline" href="#">здесь</a>, чтобы запретить печенье. Это может нарушить правильное функциональные возможности этого сайта.'
		},
	
		statusText_DECLINED: {
			ca:'Actualment <strong>no acceptes</strong> l\'ús de cookies al lloc web. Fes clic <a role="button" data-action="agree" href="#">aquí</a> per permetre\'l.',
			de:'Sie verfügen derzeit <strong>nicht die</strong> Cookie-Nutzung auf dieser Website übernehmen. Klicken Sie <a role="button" data-action="agree" href="#">hier</a>, um es zu ermöglichen.',
			en:'You currently <strong>do not accept</strong> the cookie use in this website. Click <a role="button" data-action="agree" href="#">here</a> to allow it.',
			es:'Actualmente <strong>no aceptas</strong> el uso de cookies en el sitio. Pulsa <a role="button" data-action="agree" href="#">aquí</a> para permitirlo.', 
			fr:'Vous <strong>refusez</strong> actuellement l\'utilisation des cookies sur ce site. Cliquez <a role="button" data-action="agree" href="#">ici</a> pour le permettre.', 
			it:'Al momento <strong>non si accetta</strong> l\'uso dei cookie in questo sito web. Clicca <a role="button" data-action="agree" href="#">qui</a> per permetterlo.', 
			ru:'Вы в настоящее время <strong>не допускают</strong> использование куки на данном сайте. Нажмите <a role="button" data-action="agree" href="#">здесь</a>, чтобы позволить.'
		},
		
		statusText_UNDETERMINED: {
			ca:'Encara no has establert la teva configuració. Fes clic <a role="button" data-action="agree" href="#">aquí</a> si vols acceptar l\'ús de cookies, o <a role="button" data-action="decline" href="#">aquí</a> si no.',
			de:'Es sind keine Optionen. Klicken Sie <a role="button" data-action="agree" href="#">hier</a>, um die Cookie-Nutzung übernehmen, oder <a role="button" data-action="decline" href="#">hier</a> um es abzulehnen.',
			en:'There are no options set. Click <a role="button" data-action="agree" href="#">here</a> to accept the cookie use, or <a role="button" data-action="decline" href="#">here</a> to decline it.',
			es:'Aún no has establecido tu configuración. Haz click <a role="button" data-action="agree" href="#">aquí</a> si quieres aceptar el uso de cookies, o <a role="button" data-action="decline" href="#">aquí</a> si no.', 
			fr:'Il n\'y a pas les options. Cliquez <a role="button" data-action="agree" href="#">ici</a> pour accepter l\'utilisation des cookies, ou <a role="button" data-action="decline" href="#">ici</a> pour la refuser.', 
			it:'Non ci sono opzioni impostate. Clicca <a role="button" data-action="agree" href="#">qui</a> per accettare l\'uso dei cookie, o <a role="button" data-action="decline" href="#">qui</a> per rifiutarlo.', 
			ru:'Там нет опции установлены. Нажмите <a role="button" data-action="agree" href="#">здесь</a>, чтобы принять использование куки, или <a role="button" data-action="decline" href="#">здесь</a>, чтобы отклонить его.'
		},
		
		statusText_UPDATED: {
			ca:'La política de cookies que has acceptat (versió {{oldPolicyVer}}) s\'ha <strong>actualitzat</strong>. Respecte a la nova política (Ver. {{newPolicyVer}}), vols <a role="button" data-action="agree" href="#">acceptar-la</a> o <a role="button" data-action="decline" href="#">ja no vols acceptar</a> més l\'ús de cookies al web?',
			de:'Die akzeptierte Cookie-Richtlinien (Version {{oldPolicyVer}}) <strong>wurde aktualisiert</strong>. In Bezug auf die neue Richtlinie (Version {{newPolicyVer}}), stimmen <a role="button" data-action="agree" href="#">Sie es oder</a> es vorziehen, den <a role="button" data-action="decline" href="#">Cookie-Nutzung vollständig deaktivieren</a>?',
			en:'The accepted Cookie Policy (version {{oldPolicyVer}}) <strong>has been updated</strong>. Regarding the new policy (version {{newPolicyVer}}), do you <a role="button" data-action="agree" href="#">agree to it</a> or prefer to <a role="button" data-action="decline" href="#">disable the cookie use</a> altogether?',
			es:'La política de cookies que has aceptado (versión {{oldPolicyVer}}) se ha <strong>actualizado</strong>. Respecto a la nueva política (Ver. {{newPolicyVer}}), ¿deseas <a role="button" data-action="agree" href="#">aceptarla</a> o <a role="button" data-action="decline" href="#">ya no deseas aceptar</a> más el uso de cookies en el sitio?', 
			fr:'La politique de Cookie accepté (version {{oldPolicyVer}}) a <strong>été mis à jour</strong>. En ce qui concerne la nouvelle politique (version {{newPolicyVer}}), <a role="button" data-action="agree" href="#">approuvez-vous</a> ou préférez <a role="button" data-action="decline" href="#">désactiver complètement l\'utilisation des cookies</a>?', 
			it:'La nostra politica sui cookie accettato (versione {{oldPolicyVer}}) è stato <strong>aggiornato</strong>. Per quanto riguarda la nuova politica (versione {{newPolicyVer}}), <a role="button" data-action="agree" href="#">sei d\'accordo ad esso</a> o preferiscono <a role="button" data-action="decline" href="#">disattivare l\'utilizzo dei cookie del tutto</a>?', 
			ru:'Принятая Cookie политики (версия {{oldPolicyVer}}) был обновлен. Что касается новой политики (версия {{newPolicyVer}}), вы <a role="button" data-action="agree" href="#">согласны с ним</a> или предпочитаете, чтобы <a role="button" data-action="decline" href="#">отключить использование куки вообще</a>?'
		},
		
		statusText_RESET: {
			ca:'Fes clic <a role="button" data-action="reset" href="#">aquí</a> per esborrar i resetejar les opcions de cookies d\'aquest lloc web.',
			de:'Klicken Sie <a role="button" data-action="reset" href="#">hier</a>, um die für diese Website zu entfernen und setzen Sie die Cookie-Einstellungen.',
			en:'Click <a role="button" data-action="reset" href="#">here</a> to remove and reset the cookie settings for this website.',
			es:'Haz clic <a role="button" data-action="reset" href="#">aquí</a> para borrar y resetear las opciones de cookies de este sitio web.', 
			fr:'Cliquez <a role="button" data-action="reset" href="#">ici</a> pour supprimer et réinitialiser les paramètres des cookies pour ce site.', 
			it:'Clicca <a role="button" data-action="reset" href="#">qui</a> per rimuovere e ripristinare le impostazioni dei cookie per questo sito.', 
			ru:'Нажмите <a role="button" data-action="reset" href="#">здесь</a>, чтобы удалить и сбросить настройки печенья для этого сайта.'
		}
	}, i18n);
	
	var options = extend({

		lang: 'en', // ISO_639-1 language codes: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
		
		policyLink: '/cookies?lang={{lang}}', // Link to the policy page (mandatory), feel free to use the {{lang}} var if needed.
		policyVer: '15.04b', // If the policy version changes, the notice is shown again and the user may need to accept the updated version.
		
		cookieAcceptMethods: [
			'expl', // (explicit): the user is able to accept by clicking the desidered button
			//'impl', // (implicit): no need to ask the user, policy accepted by default (allowed by the EU, but not in Spain). There somewhere has to be the option to disable cookies.
			'uact'  // (on user action): when the user takes any action on our site, the policy is considered accepted and the cookies are set (allowed all around the EU)
		],
		
		// if uact mode is enabled, scrolling, being X seconds on the site or clicking can be a triggering action: 
		userActionAcceptOnScroll: 40, // false or a value in px 
		userActionAcceptOnDelay: 5*60, // false or a value in sec
		userActionAcceptOnClick: true, // true or false
		
		noticeHide: 'auto', // hide always [yes], 
						// hide only when being explicitly accepted or discarded [expl] 
						// hide only when the policy is accepted by user action or explicitly [auto]
						// if the Implicit Accept Method is set, the notice is always hidden.
		 
		noticeButtons:['agree','info'], //available: agree / decline / info
		noticePosition: 'bottom',
		discreetPosition: 'bottom-right', // top-right, top-left, bottom-right or bottom-left
	
		noCookiesButtons:['agree','info'], //available: agree / info
		
		cookieName: 'icck',
		scriptsToLoad: [],
		cookiesToRemove: [],
		
		agreed:null,
		declined:null,
		
		autoLoadGoogleAnalytics: false,
		autoLoadGoogleAds: true,
		
		cookiesGoogleAnalytics: ['_ga','_gat','__utma', '__utmb', '__utmc', '__utmt', '__utmv', '__utmx', '__utmxx', '__utmz'],
		cookiesGoogleAds: ['_drt_', 'id', 'DSID']
		
	}, options);
	
	var domReady = (function() { /* Adaptation of the $(document).ready() function from jQuery library for use in simple JavaScript scenarios. */
	    var w3c = !!document.addEventListener,
		   loaded = false,
		   toplevel = false,
		   fns = [];
	    
	    if (w3c) {
		   document.addEventListener("DOMContentLoaded", contentLoaded, true);
		   window.addEventListener("load", ready, false);
	    } else {
		   document.attachEvent("onreadystatechange", contentLoaded);
		   window.attachEvent("onload", ready);
		   try {
			  toplevel = window.frameElement === null;
		   } catch(e) {}
		   if ( document.documentElement.doScroll && toplevel ) {
			  scrollCheck();
		   }
	    }
	
	    function contentLoaded() {
		   (w3c)?
			  document.removeEventListener("DOMContentLoaded", contentLoaded, true) :
			  document.readyState === "complete" && 
			  document.detachEvent("onreadystatechange", contentLoaded);
		   ready();
	    }
	    function scrollCheck() {  // If IE is used, use the trick by Diego Perini
		   if (loaded) 
			  return;
		   try {
			  document.documentElement.doScroll("left");
		   } catch(e) {
			  window.setTimeout(arguments.callee, 15);
			  return;
		   }
		   ready();
	    }
	    
	    function ready() {
		   if (loaded) 
			  return;
		   loaded = true;
		   var len = fns.length,
			  i = 0;
		   for( ; i < len; i++) 
			  fns[i].call(document);
	    }
	    return function(fn) { // if the DOM is already ready, execute the function
		   return (loaded)? 
			  fn.call(document):      
			  fns.push(fn);
	    }
	    
	})();
	
	var icck = {
		
		statuses: {
			AGREED_UACT: 'au',
			AGREED_IMPL: 'ai',
			AGREED_EXPL: 'ae',
			DECLINED:	   'de',
			UNDETERMINED: null
		},

		st: {
			useLocalStorage: false,
			lsget: function(key) {
				return window.localStorage.getItem(key);
			},
			lsset: function(key, value) {
				return window.localStorage.setItem(key, value);
			},
			lsrm: function(key) {
				return window.localStorage.removeItem(key);
			},
		
			ckget: function(key) {
				return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
			},
			ckset: function(key, value, days, domain, path) {
				var cookie = key + "=" + encodeURIComponent(value), date;
				if (days) {
					date = new Date();
					date.setTime(date.getTime()+(days*24*60*60*1000));
					cookie += "; expires="+date.toGMTString();
				}
				if (domain) cookie += "; domain=" + domain;
				if(!path) path = "/";
				cookie +=  "; path=" + path;
				document.cookie = cookie;
			},
			ckrm: function(key, domain) {
				var cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
				if (domain) cookie += "; domain=" + domain;
				cookie +=  "; path=/";
				document.cookie = cookie;
			},
			
			ckmon: function () {
				var currentVal = '';
				var checker = function () {
					if (currentVal!=document.cookie) {
						currentVal = document.cookie;
						console.log(document.cookie.split(';'));
					}
				};
				setInterval(checker,500);
			},
		
			get: function(key) { 
				return ((window.localStorage&&this.useLocalStorage)? this.lsget(key) : this.ckget(key)); 
			},
			set: function(key, value, days, domain, path) { 
				return ((window.localStorage&&this.useLocalStorage)? this.lsset(key, value) : this.ckset(key, value, days, domain, path)); 
			},
			rm: function(key, domain) { 
				return ((window.localStorage&&this.useLocalStorage)? this.lsrm(key) : this.ckrm(key, domain)); 
			}
		},
		
		loadScript: function (source, callback) {
			var script = document.createElement('script');
			var prior = document.getElementsByTagName('script')[0];
			script.async = 1;
			prior.parentNode.insertBefore(script, prior);
			
			script.onload = script.onreadystatechange = function( _, isAbort ) {
				if(isAbort || !script.readyState || /loaded|complete/.test(script.readyState) ) {
					script.onload = script.onreadystatechange = null;
					script = undefined;
					if(!isAbort) { if(callback) callback(); }
				}
			};
			script.src = source;
		},

		/*loadScript: function(src) {
			var firstjs = document.getElementsByTagName('script')[0];
			return function(src, callback) {
				var s = document.createElement('script'), loaded;
				s.async = true;
				s.onload = s.onreadystatechange = function() {
					if(!loaded && (! s.readyState || s.readyState === 'complete' || s.readyState === 'loaded')) {
						loaded = true;
						if(callback && typeof callback==='function') 
							callback.call(null, s);
					}
				};
				s.src = src;
				firstjs.parentNode.insertBefore(s, firstjs);
			};
		},*/
		
		getScroll: function(method, element) {
			method = 'scroll' + method;
			return (element == window || element == document) ? (
			self[(method == 'scrollTop') ? 'pageYOffset' : 'pageXOffset'] ||
			(document.documentElement && document.documentElement[method]) ||
			document.body[method]
			) : element[method];
		},
		
		testScroll: function () {
			var scrollCount = 0;
			scrollCount += icck.getScroll('Top',document);
			scrollCount += icck.getScroll('Left',document);
			if (scrollCount >= options.userActionAcceptOnScroll) 
				api.agree_uact();
		},
		
		clickTrigger: function(e) {
						
			var target, action;
			
			e = e || window.event;
			target = e.target || e.srcElement;
			action = target.getAttribute('data-action');
			
			if (action&&(action=='decline'||action=='agree'||action=='reset'))
				return;
				
			var validTargets = ['A','INPUT','BUTTON'];
			
			if (validTargets.indexOf(target.tagName)>-1)
				api.agree_uact();

		},

		rmCookies: function(cktorm) {
			
			var domain = window.location.hostname;
			
			if((/^www\./).test(domain)) 
				domain = domain.substring(4);
				
			for(i=0; i<cktorm.length; i++) 
				this.st.rm(cktorm[i], domain);
		},
		
		rmAllCookies: function() {
			document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
		},
		
		addScripts: function(sctoadd) {
			for(i=0; i<sctoadd.length; i++) 
				this.loadScript(sctoadd[i]);
		},
		
		addJSGoogleAnalytics: function () {
			
			//domReady(function() {
				if(window._gaq) 
					this.loadScript(('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js');
				else if (window.ga) 
					this.loadScript('//www.google-analytics.com/analytics.js');
			// });
		},
		
		addJSGoogleAds: function () {
			// domReady(function() {
				if(window.adsbygoogle) 
					this.loadScript('//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js');
			// });
		},
			
		status: function(value) {
			
			var ret = [this.statuses.UNDETERMINED, true];
			
			if (typeof value == 'undefined') {
				var ck = this.st.get(options.cookieName);
				if (ck) {
					cksp = ck.split('|');
					ret = [cksp[0], (options.policyVer==cksp[1]), cksp[1]];
				} 
			} else {
				if(this.statuses[value]) {
					this.st.set(options.cookieName, this.statuses[value]+'|'+options.policyVer, 365);
					ret = [this.statuses[value], true];
				} else {
					this.st.set(options.cookieName, value+'|'+options.policyVer, 365);
					ret = [value, true];
				}
			}
			
			//console.log(ret);
			return ret;
		},
		event: (function() {
			var events = {};
			return {
				log: function() {
					console.log(events);
				},
				on: function(name, callback, scope) {
					
					if(typeof events[name] == 'undefined') 
						events[name] = [];
					if(typeof callback === 'function') 
						events[name].push({f:callback, s:scope, t:false});
				},
				reload: function (name) {
				   if (events[name]) {
					 var cbs = events[name];
					 for (i=0; i<cbs.length; i++) 
						cbs[i].t = false;
				   }
				},
				trigger: function(name) {
					
					var cbs = events[name];
					if(!cbs) return;
					for (i=0; i<cbs.length; i++) 
						if (cbs[i] && !cbs[i].t) {
							cbs[i].t = true;
							if (typeof cbs[i].s == 'undefined') cbs[i].f();
							else cbs[i].f.call(cbs[i].s);
						}
				}
			};
		}())
	};
	
	var api = {
		
		config: (function() {
			return {
				log: function() {
					console.log(options);
				},
				get: function(key) {
					return options[key];
				},
				set: function(key, val) {
					if(typeof key==='string') 
						options[key] = val;
					else  
						options = extend(options, key);
				}
			};
		}()),
		
		reset: function() {
			icck.st.rm('icck');
			icck.rmAllCookies();
			icck.event.reload('agree');
			icck.event.reload('decline');
			api.redraw();
		},
		
		agree: function() {
			var status = icck.status(icck.statuses.AGREED_EXPL);
			api.redraw(status);
			icck.event.trigger('agree');
			icck.event.reload('decline');
		},
		
		decline: function() {
			var status = icck.status(icck.statuses.DECLINED);
			api.redraw(status);
			icck.event.trigger('decline');
			icck.event.reload('agree');
		},
		
		agree_impl: function() {
			var status = icck.status(icck.statuses.AGREED_IMPL);
			api.redraw(status);
			icck.event.trigger('agree');
			icck.event.reload('decline');
		},
		agree_uact: function() {
			
			api.disableUADetection();
			
			var status = icck.status(icck.statuses.AGREED_UACT);
			api.redraw(status); 
			icck.event.trigger('agree');
			icck.event.reload('decline');
		},
		
		agreed: function(callback) {
			icck.event.on('agree', callback, window);
			domReady(function() {
				api.autoTrigger();
			});
		},
		
		declined: function(callback) {
			icck.event.on('decline', callback, window);
			domReady(function() {
				api.autoTrigger();
			});
		},
		
		disableUADetection: function () {
			
			window.removeEventListener ? 
				window.removeEventListener('scroll', icck.testScroll, false) :
				window.detachEvent('onscroll', icck.testScroll);
				
			if (window.icck_delay)
				clearTimeout(window.icck_delay);
			
			document.removeEventListener ? 
				document.removeEventListener('click', icck.clickTrigger, false) :
				document.detachEvent('onclick', icck.clickTrigger);
				
		},
		
		scrollDetection: function() {
			window.addEventListener ? 
				window.addEventListener('scroll', icck.testScroll, false) :
				window.attachEvent('onscroll', icck.testScroll);
		},
		
		delayDetection: function() {
			window.icck_delay = setTimeout(api.agree_uact, options.userActionAcceptOnDelay*1000);
		},
		
		clickDetection: function() {
			document.addEventListener ? 
				document.addEventListener('click', icck.clickTrigger, false) :
				document.attachEvent('onclick', icck.clickTrigger);
		},
		
		htmlButtons: function (buttons) {
			
			for (var i=0, len=buttons.length, html='<div class="icck-buttons">'; i<len; ++i) 
				switch(buttons[i]) {
					case 'agree':
						if (options.cookieAcceptMethods.indexOf('expl') > -1 && i18n.agreeText[options.lang])
							html += '<a role="button" class="icck-agree" data-action="agree" onclick="">' + i18n.agreeText[options.lang] + '</a>';
					break;
					case 'decline':
						if (options.cookieAcceptMethods.indexOf('expl') > -1 && i18n.declineText[options.lang])
							html += '<a role="button" class="icck-decline" data-action="decline" onclick="">' + i18n.declineText[options.lang] + '</a>';
					break;
					case 'info':
						if (i18n.infoText[options.lang])
							html += '<a role="button" class="icck-info" href="'+options.policyLink.replace(/\{\{lang\}\}/g, options.lang)+'" target="_blank">'+ i18n.infoText[options.lang] +'</a>';
					break;
				}
			
			html += '</div>';
				
			return html;
		},
		
		
		showMsg: function(str, buttons) {

			var 	div_msg, 
				body = document.body;
				
			div_msg = document.createElement('div');
			div_msg.className = 'icck-notice icck-notice-' + options.noticePosition;
			body.className += ' icck';
			$this = this;
			div_msg.onclick = function(e) {
				var target, action;
				e = e || window.event;
				target = e.target || e.srcElement;
				action = target.getAttribute('data-action');
				if(action && $this[action]) {
					$this[action]();
					if(e.preventDefault) e.preventDefault();
					else e.returnValue = false;
					/*if (div_msg.parentNode != null) 
						div_msg.parentNode.removeChild(div_msg);*/
					body.className = body.className.replace(/\bicck\b/, '');
					return false;
				}
			};
		
			var htmlDivNotice = str.replace(/\{\{policyLink\}\}/g, 
									    options.policyLink
									.replace(/\{\{lang\}\}/g, 
										    options.lang));
								
			htmlDivNotice += this.htmlButtons(buttons);
		   	div_msg.innerHTML = htmlDivNotice;
			body.appendChild(div_msg);
			div_notice = div_msg;
		},
		
		showDiscreetCookies: function() {
	
			if (!i18n.discreetText || !i18n.discreetText[options.lang])
				return;
			
			var 	div_msg, 
				body = document.body;
				
			div_msg = document.createElement('div');
			div_msg.className = 'icck-discreet icck-discreet-' + options.discreetPosition;
		   	div_msg.innerHTML = i18n.discreetText[options.lang]
									.replace(/\{\{policyLink\}\}/g, 
									    options.policyLink
											.replace(/\{\{lang\}\}/g, 
										    		options.lang));
			body.appendChild(div_msg);
			div_discreet = div_msg;
		},
		
		showNoCookies: function() {
			
			if (!i18n.noCookiesText || !i18n.noCookiesText[options.lang])
				return;
				
			this.showMsg(i18n.noCookiesText[options.lang], options.noCookiesButtons);
		},
		
		showNotice: function(status) {
				
			if ( options.cookieAcceptMethods.indexOf('impl') > -1 ||
												 
			     options.noticeHide == 'yes' ||
				
				(options.noticeHide == 'expl' && status[1] && 
					    status[0] != icck.statuses.AGREED_UACT && 
					    status[0] != icck.statuses.AGREED_IMPL &&
					    status[0] != icck.statuses.UNDETERMINED) ||
				
				(options.noticeHide == 'auto' && status[1] && 
					    status[0] != icck.statuses.UNDETERMINED) ) {
					
				if (status[0] == icck.statuses.DECLINED && i18n.noCookiesText && i18n.noCookiesText[options.lang]) 
					this.showNoCookies();
				
				else if (status[0] == icck.statuses.AGREED_IMPL ||
				   	    status[0] == icck.statuses.AGREED_UACT) 
					
					this.showDiscreetCookies();
					
				return;
			}
			
			if (status[1])
				msgBase = i18n.noticeText[options.lang];
			else 
				msgBase = i18n.noticeUpdatedText[options.lang];
				
			this.showMsg(msgBase.replace(/\{\{policyLink\}\}/g, options.policyLink
							.replace(/\{\{lang\}\}/g, options.lang)),
					   options.noticeButtons);
			
		},

		showSettings: function(status) {
			
			var container = document.getElementById('icck-settings');
			if (!container) 
				return;
			
			var $this = this;
			
			container.className += ' icck-settings';
			container.onclick = function(e) {
				
				var target, action;
				e = e || window.event;
				target = e.target || e.srcElement;
				action = target.getAttribute('data-action');
				
				if (action && $this[action]) {
					$this[action]();
					if(e.preventDefault) e.preventDefault();
					else e.returnValue = false;
					return false;
				}
			};
			
			var html = '';
			
			if (!status[1]) 
				html += '<p>'+i18n.statusText_UPDATED[options.lang]
						.replace(/\{\{oldPolicyVer\}\}/g, status[2])
						.replace(/\{\{newPolicyVer\}\}/g, options.policyVer) +'</p>';
			
			if (status[0] === icck.statuses.AGREED_EXPL) 
				html += '<p>'+i18n.statusText_AGREED_EXPL[options.lang]+'</p>';
				
			else if (status[0] === icck.statuses.DECLINED) 
				html += '<p>'+i18n.statusText_DECLINED[options.lang]+'</p>';
				
			else if (status[0] === icck.statuses.AGREED_UACT) 
				html += '<p>'+i18n.statusText_AGREED_UACT[options.lang]+'</p>';
				
			else if (status[0] === icck.statuses.AGREED_IMPL) 
				html += '<p>'+i18n.statusText_AGREED_IMPL[options.lang]+'</p>';
				
			else // UNDETERMINED
				html += '<p>'+i18n.statusText_UNDETERMINED[options.lang]+'</p>';
			
			html += '<p>'+i18n.statusText_RESET[options.lang] +'</p>';
			
			container.innerHTML = html;	
			
		},
		
		redraw: function (status) {
			
			if (!status)
				status = [icck.statuses.UNDETERMINED, true];
			
			if (div_notice && div_notice.parentNode != null) 
				div_notice.parentNode.removeChild(div_notice);
			
			if (div_discreet && div_discreet.parentNode != null) 
				div_discreet.parentNode.removeChild(div_discreet);
				
			this.showSettings(status);
			this.showNotice(status);
		},
		
		autoTrigger: function(status) {
			
			if (!status)
				var status = icck.status();
				
			if (status[1] && 
				(status[0] == icck.statuses.AGREED_UACT || 
				 status[0] == icck.statuses.AGREED_IMPL ||
				 status[0] == icck.statuses.AGREED_EXPL)) {
				icck.event.trigger('agree');
				icck.event.reload('decline');
				
			} else if (status[1] && 
				    status[0] == icck.statuses.DECLINED) {
				icck.event.trigger('decline');
				icck.event.reload('agree');
			}
		}
	};
	
	icck.event.on('agree', function() {
		
		// Load JS scripts (typically those which set cookies)
		
		if (options.autoLoadGoogleAnalytics)
			icck.addJSGoogleAnalytics();
		
		if (options.autoLoadGoogleAds)
			icck.addJSGoogleAds();
			
		icck.addScripts(options.scriptsToLoad);
	});
	
	icck.event.on('decline', function() {
				
		// Delete GA & set to remove cookies

		icck.rmCookies(options.cookiesGoogleAnalytics);
		
		icck.rmCookies(options.cookiesGoogleAds);
			
		icck.rmCookies(options.cookiesToRemove);
	});
	
	if (options.agreed)
		icck.event.on('agree', options.agreed);
	
	if (options.declined)
		icck.event.on('decline', options.declined);
	
	return {
		config: api.config,
		agree: function () { api.agree(); return this; },
		decline: function () { api.decline(); return this; },
		reset: function () { api.reset(); return this; },
		agreed: function (fn) { api.agreed(fn); return this; },
		declined: function (fn) { api.declined(fn); return this; },
		monitor: function() { icck.st.ckmon(); return this; },
		init: function() {
			domReady(function() {
				
				var status = icck.status();
		
				if (status[0] == icck.statuses.UNDETERMINED) {
					if (	options.cookieAcceptMethods.indexOf('uact') > -1 &&
						options.cookieAcceptMethods.indexOf('impl') == -1 ) {
						
						if (options.userActionAcceptOnDelay)
							api.delayDetection();
						
						if (options.userActionAcceptOnScroll)
							api.scrollDetection();
						
						if (options.userActionAcceptOnClick)
							api.clickDetection();
						
						api.redraw(status);
					}
					
					if (	options.cookieAcceptMethods.indexOf('impl') > -1 ) {
						api.agree_impl();
					}
				} else {
					api.redraw(status);
				}	
				
				api.autoTrigger(status);
				
			});
			return this;
		}
	};

};
