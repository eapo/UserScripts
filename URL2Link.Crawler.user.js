// ==UserScript==
// @name          Plain URL to Link Crawler
// @version       0.1
// @description   Finding all valid plain URLs and email addresses on webpages and converting them to HTML <a> tags with linkify()
// @author        eaposztrof
// @match         *://*/*
// @downloadURL   https://github.com/eapo/UserScripts/raw/master/URL2Link.Crawler.user.js
// @updateURL     https://github.com/eapo/UserScripts/raw/master/URL2Link.Crawler.user.js
// @require       https://code.jquery.com/jquery-1.8.3.js
// @require       http://soapbox.github.io/linkifyjs/js/linkify/linkify.min.js
// @require       http://soapbox.github.io/linkifyjs/js/linkify/linkify-jquery.min.js
// @supportURL    https://github.com/eapo/steemit-custom-scripts/issues?q=is%3Aissue+is%3Aopen+-label%3Abug
// @icon          https://steemitimages.com/0x0/https://pbs.twimg.com/profile_images/863235834379632640/EaeAlfaC.jpg
// @homepageURL   https://steemit.com/@eaposztrof
// @run-at        document-start
// ==/UserScript==

jQuery(document).ready(Greasemonkey_main);

function Greasemonkey_main () {
    $('p,span,div').linkify();
}
