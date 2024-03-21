function quoteSomeStuffs() {
    let lyrics = [
        "La La Love You.",
        "Ground Control to Major Tom.",
        "Shake down 1979.",
        "If you're gonna scream, scream with me.",
        "Mesmerize.",
        "I'm on the stereo.",
        "Boys don't cry.",
        "風をあつめて",
        "Poupée de cellophane, cheveux chinois.",
        "Crazy rides rocket, who has a magic wand.",
        "Close my eyes, feel me now.",
        "Matières sensuelles et sans suites.",
        "And thank your God that I'm not aware.",
        "I love you, metallic blue.",
        "Glissant du bout de mes doigts, le sable.",
        "In dreams, I'm moving through heavy water.",
        "Goodbye horses.",
        "You and me in time.",
        "Jai guru deva, om.",
        "We love the jams, and jams run free.",
        "Your confusion, my illusion.",
        "And you don't seem to understand.",
        "The Thunderclouds broke up.",
        "I cannot translate, Japanese to English.",
        "You dance like the June Sky.",
        "I'm dying. Is it blissful ?",
        "Words are just noise.",
        "In hourglass, grain of sand"
    ];
    let quote = document.getElementById("quotes");
    quote.innerHTML = lyrics[Math.floor(Math.random() * lyrics.length)].toLowerCase();
}

function run() {
    setInterval(quoteSomeStuffs, 10*1000);
}