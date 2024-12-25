let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;
let operand_one = operand_two = operator = null;
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

const display = document.querySelector(".display div");
display.textContent = null;

const row_one = document.querySelectorAll('.row_one div');
row_one.forEach((div) => div.setAttribute("style", `width: ${1 / 3 * 100}%`) );

let remove_flag = false;
let i = 0;
const row_four = document.querySelector(".row_num_lower");
{
    for(i; i < 5; i++)
    {
        let number_div = document.createElement("div");
        let number_button = document.createElement("button");
        number_button.textContent = `${i}`;
        number_button.classList.add(`${i}`);
        number_button.addEventListener("click", () => {
            if(remove_flag)
            {
                display.textContent = null;
                remove_flag = false;
            }
            display.textContent = display.textContent + number_button.getAttribute("class");
        });
        number_div.appendChild(number_button);
        row_four.appendChild(number_div);
    }
}
const row_three = document.querySelector(".row_num_higher");
{
    for(i; i < 10; i++)
    {
        let number_div = document.createElement("div");
        let number_button = document.createElement("button");
        number_button.textContent = `${i}`;
        number_button.classList.add(`${i}`);
        number_button.addEventListener("click", () => {
            if(remove_flag)
            {
                display.textContent = null;
                remove_flag = false;
            }
            display.textContent = display.textContent + number_button.getAttribute("class");
        });
        number_div.appendChild(number_button);
        row_three.appendChild(number_div);
    }
}

const add_op = document.querySelector(".add_op");
const subtract_op = document.querySelector(".subtract_op");
const multiply_op = document.querySelector(".multiply_op");
const divide_op = document.querySelector(".divide_op");

add_op.addEventListener("click", () => {
    if(remove_flag)
    {
        operator = "+";
    }
    else if(display.textContent !== null)
    {
        if(operand_one === null)
        {
            operand_one = Number(display.textContent);
        }
        else
        {
            operand_two = Number(display.textContent);
            display.textContent = `${operate(operand_one, operator, operand_two)}`;
            operand_one = Number(display.textContent);
            operand_two = null;
        }
        remove_flag = true;
        operator = "+";
    }
});

subtract_op.addEventListener("click", () => {
    if(remove_flag)
    {
        operator = "-";
    }
    else if(display.textContent !== null)
    {
        if(operand_one === null)
        {
            operand_one = Number(display.textContent);
        }
        else
        {
            operand_two = Number(display.textContent);
            display.textContent = `${operate(operand_one, operator, operand_two)}`;
            operand_one = Number(display.textContent);
            operand_two = null;
        }
        remove_flag = true;
        operator = "-";
    }
});

multiply_op.addEventListener("click", () => {
    if(remove_flag)
    {
        operator = "*";
    }
    else if(display.textContent !== null)
    {
        if(operand_one === null)
        {
            operand_one = Number(display.textContent);
        }
        else
        {
            operand_two = Number(display.textContent);
            display.textContent = `${operate(operand_one, operator, operand_two)}`;
            operand_one = Number(display.textContent);
            operand_two = null;
        }
        remove_flag = true;
        operator = "*";
    }
});

divide_op.addEventListener("click", () => {
    if(remove_flag)
    {
        operator = "/";
    }
    else if(display.textContent !== null)
    {
        if(operand_one === null)
        {
            operand_one = Number(display.textContent);
        }
        else
        {
            operand_two = Number(display.textContent);
            display.textContent = `${operate(operand_one, operator, operand_two)}`;
            operand_one = Number(display.textContent);
            operand_two = null;
        }
        remove_flag = true;
        operator = "/";
    }
});

const enter = document.querySelector(".enter");
enter.addEventListener("click", () => {
    if(operand_one !== null)
    {
        if(!remove_flag)
        {
            operand_two = Number(display.textContent);
            display.textContent = `${operate(operand_one, operator, operand_two)}`;
            operand_two = null;
        }
        operand_one = operator = null;
    }
})