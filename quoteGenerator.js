
$('a#next').click(

    function replaceText() {
        document.getElementById("quoteBox").innerHTML = "TEST";

    }
)

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}
