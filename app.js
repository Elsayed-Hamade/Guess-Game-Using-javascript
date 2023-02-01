/* Light & Dark Mode */
const light = document.querySelector(".light");
const dark = document.querySelector(".dark");
const container = document.querySelector(".container");
const logoImg = document.querySelector(".logo-img");

light.addEventListener("click", () => {
  document.body.classList.add("active");
  logoImg.src = "Assets/logoLight.png";
});

dark.addEventListener("click", () => {
  logoImg.src = "Assets/logoDark.png";
  document.body.classList.remove("active");
});

// Game Functions
const guessInput = document.querySelector(".user-guess");
const message = document.querySelector(".message");
const scoreNumber = document.querySelector(".score-number");
const highScoreNumber = document.querySelector(".high-score-number");
const secretNumberCircle = document.querySelector(".secret-number");
const hint = document.querySelector(".hint");
const again = document.querySelector(".again");
const check = document.querySelector(".check");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
console.log(secretNumber)

const content = (element , input)=>{
    element.textContent = input;
}

check.addEventListener("click", () => {
    let userGuess = Number(guessInput.value);
    if(!userGuess){
        content(message ,"Please, Enter number to play🔥")
        message.style.color = "red"
    }else if(userGuess === secretNumber){
        message.style.color = "white"
        content(message ,"You got it right 🏆")
        content(secretNumberCircle, secretNumber)
        document.body.style.backgroundColor = "Green"
        if(score > highScore){highScore = score}
        content(highScoreNumber, highScore)
    }else if(userGuess !== secretNumber){
        if(score > 1){
            message.style.color = "white"
            userGuess > secretNumber ? content(message ,"You are Higher⬆") 
                : content(message ,"You are Lower⬇");
            score--;
            content(scoreNumber, score)
        }else{
            content(secretNumberCircle, secretNumber)
            score = 0;
            content(scoreNumber, score)
            message.style.color = "white"
            content(message, "Sorry, You have lost😢")
            document.body.style.backgroundColor = "red"
        }
    }
});


again.addEventListener("click", () => {
    score = 20;
    content(scoreNumber, score);
    content(secretNumberCircle, "?");
    guessInput.value = "";
    content(message, "Start Guessing.....")
    document.body.style.backgroundColor = "#3a3a3a"
})