/*global $ */
var quotes = ["“When you have some skills but don't fully understand your environment, there is no way you can be plus one. At best, you can be a zero. But a zero isn't a bad thing to be. You're competent enough not to create problems or make more work for everyone else. And you have to be competent, and prove to others that you are, before you can be extraordinary. There are no short-cuts, unfortunately.”", "“In any field, it’s a plus if you view criticism as potentially helpful advice rather than as a personal attack.”", "“good leadership means leading the way, not hectoring other people to do things your way.”"];

function getQuote(min, max) {
    'use strict';
    return Math.floor(Math.random() * (max - min) + min);
}

function initQuote() {
    'use strict';
    var initQuoteNumber = getQuote(0, 3);
    document.getElementById("quoteBox").innerHTML = quotes[initQuoteNumber];
    return initQuoteNumber;
}
$(document).ready(initQuote());

$('a#next').click(
    function replaceText() {
        'use strict';
        var quoteNumber = getQuote(0, 3);
        document.getElementById("quoteBox").innerHTML = quotes[quoteNumber];
    }
);