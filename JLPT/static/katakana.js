let count = 0;
let katakana = {
    "ア": "a",
    "イ": "i",
    "ウ": "u",
    "エ": "e",
    "オ": "o",
    "カ": "ka",
    "キ": "ki",
    "ク": "ku",
    "ケ": "ke",
    "コ": "ko",
    "サ": "sa",
    "シ": "shi",
    "ス": "su",
    "セ": "se",
    "ソ": "so",
    "タ": "ta",
    "チ": "chi",
    "ツ": "tsu",
    "テ": "te",
    "ト": "to",
    "ナ": "na",
    "ニ": "ni",
    "ヌ": "nu",
    "ネ": "ne",
    "ノ": "no",
    "ハ": "ha",
    "ヒ": "hi",
    "フ": "fu",
    "ヘ": "he",
    "ホ": "ho",
    "マ": "ma",
    "ミ": "mi",
    "ム": "mu",
    "メ": "me",
    "モ": "mo",
    "ヤ": "ya",
    "ユ": "yu",
    "ヨ": "yo",
    "ラ": "ra",
    "リ": "ri",
    "ル": "ru",
    "レ": "re",
    "ロ": "ro",
    "ワ": "wa",
    "ヲ": "wo",
    "ン": "n"
};

function random() {
    let kana = Object.keys(katakana);
    let randomRomaji = Math.floor(Math.random() * kana.length);
    let randomKatakana = kana[randomRomaji];
    return randomKatakana;
}

var input = document.getElementById("answer-box");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    
    let answerBoxValue = document.getElementById("answer-box").value;
    let displayText = document.getElementById("display").textContent;
    
    if (answerBoxValue === katakana[displayText]) {
        console.log("correct");
        
        document.getElementById("display").textContent = random();
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
        
    } else{
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

document.getElementById("display").textContent = random();
