// ==UserScript==
// @name         Instagram redirect to following
// @namespace    https://www.instagram.com/
// @version      1.0
// @description  Replace ?variant=home with ?variant=following in Instagram URLs
// @author       RED
// @match        https://www.instagram.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Function to replace ?variant=home with ?variant=following in the URL
    function replaceVariantHome() {
        if (window.location.href.includes('?variant=home')) {
            window.location.href = window.location.href.replace('?variant=home', '?variant=following');
        }else if(window.location.href=="https://www.instagram.com/"){
            window.location.href+='?variant=following';
        }
    }
    // Create a MutationObserver to watch for changes in the URL
    const observer = new MutationObserver(() => {
        replaceVariantHome();
    });

    // Observe changes in the URL (location.href)
    observer.observe(document, { childList: true, subtree: true });

    // Run the function when the page is loaded
   replaceVariantHome()
})();
