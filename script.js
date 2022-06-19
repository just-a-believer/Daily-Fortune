let sayings = ['A conclusion is simply the place where you got tired of thinking.', 'You will die alone and poorly dressed.',
    'You will live long enough to open many fortune cookies.', 'He who laughs at himself never runs out of things to laugh at.',
    'Some men dream of fortunes, others dream of cookies.', 'The greatest danger could be your stupidity.',
    "We don't know the future, but here's a cookie.", 'You will be hungry again in one hour.', 'The road to riches is paved with homework.',
    'You can always find happiness at work on Friday.', 'Actions speak louder than fortune cookies.', 'Help! I am being held prisoner in a fortune cookie factory.',
    'Never forget a friend. Especially if he owes you.', 'Never wear your best pants when you go to fight for freedom.',
    'Only listen to the fortune cookie; disregard all other fortune telling units.', 'All fortunes are wrong except this one.',
    'Someone will invite you to a Karaoke party.', "That wasn't chicken.", 'There is no mistake so great as that of being always right.',
    'No snowflake feels responsible in an avalanche.', 'You are not illiterate.', 'Change is inevitable, except for vending machines.']

let button = document.getElementById('fortune')

let fortunes = document.getElementById('fortuneDisplay')

function newFortune() {
    let randomNumber = Math.floor(Math.random() * sayings.length);
    return sayings[randomNumber];
}
//document.getElementById('fortuneDisplay').innerHTML =

function displayFortune() {
    fortunes.innerHTML = newFortune();
    button.innerHTML = "Come back tomorrow!";
    button.style.cursor = "default";
    button.removeEventListener('click', displayFortune)
}

button.addEventListener('click', displayFortune)