let randomNumber = Math.floor(Math.random() * 21) + 20;

const username = prompt("Please enter your Username");
const cohortNumber = prompt("Please enter your Cohort No");

let userInput = prompt("Please enter your Number(between 20 and 40)");
let userNumber = parseInt(userInput);
for (let i = 0; i < 3; i++) {
  if (userNumber != randomNumber) {
    let triesLeft = 3 - i;
    userNumber = parseInt(
      prompt("You have " + triesLeft + " guess left. \nPlease try again")
    );
  } else {
    alert(
      `Congrats! The number is ${randomNumber}. \n You have won yourself a sum of #100,000.`
    );
    break;
  }
}

alert(
  `Goodbye ${username} from Cohort ${cohortNumber}. \n You entered ${userNumber} but the winning number was ${randomNumber}`
);
