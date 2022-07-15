let btns = document.getElementById('btn');
let output = document.getElementById('box');
let quote = [
    '"The purpose of our lives is to be happy." — Dalai Lama',
    '"Life is what happens when you are busy making other plans." — John Lennon',
    '"Get busy living or get busy dying." — Stephen King',
    '"You only live once, but if you do it right, once is enough." — Mae West',
    ' "Never let the fear of striking out keep you from playing the game."- Babe Ruth',
    '"Not how long, but how well you have lived is the main thing.” — Seneca',
    '“If life were predictable it would cease to be life, and be without flavor.” – Eleanor Roosevelt',
    '“In order to write about life first you must live it.”– Ernest Hemingway',
    ' "Turn your wounds into wisdom." — Oprah Winfrey',
];

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.background = bgColor;
    btns.style.background = bgColor;
    output.style.color = bgColor;
    }

btns.addEventListener('click', function() {
    var randomQuotes = quote[Math.floor(Math.random()*quote.length)]
    random_bg_color();
    output.innerHTML = randomQuotes;
})
