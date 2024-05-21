import inquirer from "inquirer"
// 1) computer will generate a randam number 
// 2) user input for guessing number 
// 3) compare  user input with computer generated number and show result 


const randamNumber = Math.floor(Math.random() * 6 + 1);



const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-6:  ",

    },
]);
console.log(answers);
if (answers.userGuessedNumber === randamNumber) {
    console.log('congtratulations! you guess right number.');

 } else {
    console.log("you guessed wrong number");
}