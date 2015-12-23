/*global $ */
var quotes = ["“When you have some skills but don't fully understand your environment, there is no way you can be plus one. At best, you can be a zero. But a zero isn't a bad thing to be. You're competent enough not to create problems or make more work for everyone else. And you have to be competent, and prove to others that you are, before you can be extraordinary. There are no short-cuts, unfortunately.”", "“In any field, it’s a plus if you view criticism as potentially helpful advice rather than as a personal attack.”", "“Good leadership means leading the way, not hectoring other people to do things your way.”", "“Life off Earth is in two important respects not at all unworldly: you can choose to focus on the surprises and pleasures, or the frustrations. And you can choose to appreciate the smallest scraps of experience, the everyday moments, or to value only the grandest, most stirring ones.”", "“Anticipating problems and figuring out how to solve them is actually the opposite of worrying: it’s productive.”", "“It’s not enough to shelve your own competitive streak. You have to try, consciously, to help others succeed.”", "“As I have discovered again and again, things are never as bad (or as good) as they seem at the time.”", "“In my experience, fear comes from not knowing what to expect and not feeling you have any control over what’s about to happen. When you feel helpless, you’re far more afraid than you would be if you knew the facts.”", "“I wasn’t destined to be an astronaut. I had to turn myself into one.”", "“Sweat the small stuff. Without letting anyone see you sweat.”", "“I wasn't lonely. Loneliness, I think, has very little to do with location. It's a state of mind. In the centre of every city are some of the loneliest people in the world. If anything, because our whole planet was just outside the window, I felt even more aware of and connected to the seven billion other people who call it home.”", "“The best way to contribute to a brand-new environment is not by trying to prove what a wonderful addition you are. It’s by trying to have a neutral impact, to observe and learn from those who are already there, and to pitch in with the grunt work wherever possible.”", "“Still, I also know that most people, including me, tend to applaud the wrong things: the showy, dramatic record-setting sprint rather than the years of dogged preparation or the unwavering grace displayed during a string of losses. Applause, then, never bore much relation to the reality of my life as an astronaut, which was not all about, or even mostly about, flying around in space.”", "“Square astronaut, round hole. But somehow, I’d managed to push myself through it, and here was the truly amazing part: along the way, I’d become a good fit. It had only taken 21 years.”"];

function getQuote(min, max) {
    'use strict';
    return Math.floor(Math.random() * (max - min) + min);
}

function initQuote() {
    'use strict';
    var initQuoteNumber = getQuote(0, 14);
    document.getElementById("quoteBox").innerHTML = quotes[initQuoteNumber];
    return initQuoteNumber;
}
$(document).ready(initQuote());

$('a#next').click(
    function replaceText() {
        'use strict';
        var quoteNumber = getQuote(0, 14);
        document.getElementById("quoteBox").innerHTML = quotes[quoteNumber];
    }
);