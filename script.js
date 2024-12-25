let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;
let operand_one, operand_two, operator;
let operate = (a, operator, b) => {
    switch (operator) {
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);
        default:
    }
}

let i = 0;

const row_four = document.querySelector(".row_num_lower");
{
    for(i;i < 5; i++)
    {
        let number_div = document.createElement("div");
        let number_button = document.createElement("button");
        number_button.textContent = `${i}`;
        number_div.appendChild(number_button);
        row_four.appendChild(number_div);
    }
}

const row_three = document.querySelector(".row_num_higher");
{
    for(i;i < 10; i++)
    {
        let number_div = document.createElement("div");
        let number_button = document.createElement("button");
        number_button.textContent = `${i}`;
        number_div.appendChild(number_button);
        row_three.appendChild(number_div);
    }
}

