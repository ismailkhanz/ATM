#! usr/bin/env node
import inquirer from "inquirer";
let balanceAmount = 90000;
let pinNUmber = 9999;
let pinAnswer = await inquirer.prompt([{
        name: "pin",
        message: "enter your pin number",
        type: "number"
    }]);
if (pinAnswer.pin === pinNUmber) {
    console.log("correct pin number");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withDrawal", "check balance", "fast cash"]
        }
    ]);
    if (operationAns.operation === "withDrawal") {
        let amountAns = await inquirer.prompt([
            {
                name: 'amount',
                message: "enter your amount",
                type: "number",
                validate: function (value) {
                    const isValid = !isNaN(parseFloat(value)) && value > 0 && value <= balanceAmount;
                    return isValid || `Please enter a valid amount )`;
                }
            }
        ]);
        balanceAmount -= amountAns.amount;
        console.log("your remanining balance is:" + balanceAmount);
    }
    else if (operationAns.operation === "check balance") {
        console.log("your balance is:" + balanceAmount);
    }
    else if (operationAns.operation === "fast cash") {
    }
}
else {
    console.log("incorrect pin number");
}
