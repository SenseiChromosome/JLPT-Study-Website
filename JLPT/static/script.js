let character;

// document.getElementById("answer-box") = function(){
//     charcter = getElementById("answer-box").value;
//     console.log(character);
// }

// let hiraganaUni = Math.floor(Math.random() * (0x309F - 0x3040 + 1)) + 0x3040;
// let hiraganatest = String.fromCharCode(hiraganaUni);

let count = 0;
let hiragana = {
    "あ": "a",
    "い": "i",
    "う": "u",
    "え": "e",
    "お": "o",
    "か": "ka",
    "き": "ki",
    "く": "ku",
    "け": "ke",
    "こ": "ko",
    "さ": "sa",
    "し": "shi",
    "す": "su",
    "せ": "se",
    "そ": "so",
    "た": "ta",
    "ち": "chi",
    "つ": "tsu",
    "て": "te",
    "と": "to",
    "な": "na",
    "に": "ni",
    "ぬ": "nu",
    "ね": "ne",
    "の": "no",
    "は": "ha",
    "ひ": "hi",
    "ふ": "fu",
    "へ": "he",
    "ほ": "ho",
    "ま": "ma",
    "み": "mi",
    "む": "mu",
    "め": "me",
    "も": "mo",
    "や": "ya",
    "ゆ": "yu",
    "よ": "yo",
    "ら": "ra",
    "り": "ri",
    "る": "ru",
    "れ": "re",
    "ろ": "ro",
    "わ": "wa",
    "を": "wo",
    "ん": "n"
};

function random() {
    let kana = Object.keys(hiragana);
    let randomRomaji = Math.floor(Math.random() * kana.length);
    let randomHiragana = kana[randomRomaji];
    return randomHiragana;
}

function randomromaji() {
    let kana = Object.keys(hiragana);
    let randomRomaji = Math.floor(Math.random() * kana.length);
    randomRomaji = kana[randomRomaji];
    return randomRomaji;
}

var input = document.getElementById("answer-box");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    
    let answerBoxValue = document.getElementById("answer-box").value;
    let displayText = document.getElementById("display").textContent;
    
    if (answerBoxValue === hiragana[displayText]) {
        console.log("correct");
        
        document.getElementById("display").textContent = random();
        document.getElementById("backside-romaji").textContent = document.getElementById("display").textContent = random();
        document.getElementById("backside-hiragana").textContent = document.getElementById("display").textContent = randomromaji();
        input.value = "";
        
        document.getElementById("correctText").textContent = "Correct";
        document.getElementById("correctText").style.visibility = "visible";
        
        count++;
        document.getElementById("counter").style.visibility = "visible";
        document.getElementById("counter").textContent = count;
        
        setTimeout(function() {
            document.getElementById("correctText").style.visibility = "hidden";
            document.getElementById("correctText").textContent = "";
        }, 1000);
    } else if (answerBoxValue === "") {

    } else {
        console.log("incorrect");
        
        input.value = "";
        
        document.getElementById("incorrectText").textContent = "Incorrect";
        document.getElementById("incorrectText").style.visibility = "visible";
        
        document.getElementById("counter").style.visibility = "hidden";
        document.getElementById("counter").textContent = "";
        
        count = 0;
        
        setTimeout(function() {
            document.getElementById("incorrectText").style.visibility = "hidden";
            document.getElementById("incorrectText").textContent = "";
        }, 1000);
    }
  }
});

const correctSound = new Audio('correctanswer.mp3');
const incorrectSound = new Audio('incorrect.mp3');

function playSound(isCorrect) {
    if (isCorrect) {
        correctSound.play();
    } else {
        incorrectSound.play();
    }
}

let isFlipped = false;

document.getElementById('everything-box').addEventListener('click', function() {
    const card = document.querySelector('.flip-card-inner');
    card.classList.toggle('flipped');
    
    if (card.classList.contains('flipped')) {
        isFlipped = true;
    } else {
        isFlipped = false;
    }

    if (isFlipped === true) {
        setTimeout(function () {
            document.getElementById("answer-box").style.visibility = 'hidden';
        }, 700)
    } else {
        setTimeout(function () {
            document.getElementById("answer-box").style.visibility = 'visible';
        }, 700)
    }
    
    console.log("Is the card flipped?", isFlipped);
});

document.getElementById("display").textContent = random();
document.getElementById("backside-romaji").textContent = document.getElementById("display").textContent = random();
document.getElementById("backside-hiragana").textContent = document.getElementById("display").textContent = randomromaji();

random()


