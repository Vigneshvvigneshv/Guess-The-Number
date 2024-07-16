const input = document.querySelector("input");
  guess = document.querySelector(".demo");
  checkButton = document.querySelector("button");

  
let randomNum = Math.floor(Math.random() * 10);
checkButton.addEventListener("click", () => {
    let inputValue = input.value;

    if (inputValue == randomNum) {
        [guess.textContent] = ["Congratulations", true];

    } else if (inputValue > randomNum && inputValue < 10) {
        [guess.textContent] = ["Your guess is high"];

    } else if (inputValue < randomNum && inputValue > 0) {
        [guess.textContent] = ["Your guess is low"];

    } else {
        [guess.textContent] = ["Your number is invalid"];
    }});
