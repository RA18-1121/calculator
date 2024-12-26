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
display.textContent = "0";

let remove_flag = true;
let i = 1;
const low_nums = document.querySelector(".low_nums");
{
    for(i; i < 4; i++)
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
        low_nums.appendChild(number_div);
    }
}

const middle_nums = document.querySelector(".middle_nums");
{
    for(i; i < 7; i++)
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
        middle_nums.appendChild(number_div);
    }
}

const high_nums = document.querySelector(".high_nums");
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
        high_nums.appendChild(number_div);
    }
}

const squares = document.querySelectorAll(".squares div div");
squares.forEach((div) => {
    div.style.width = `${100 / 3}%`;
    div.style.paddingBottom = `${80 / 3}%`;
});

const rectangles = document.querySelectorAll(".rectangles div");
rectangles.forEach((div) => div.setAttribute("style", `padding-bottom: ${320 / 3}%`));

const add_op = document.querySelector(".add_op");
const subtract_op = document.querySelector(".subtract_op");
const multiply_op = document.querySelector(".multiply_op");
const divide_op = document.querySelector(".divide_op");

add_op.addEventListener("click", () => {
    if(remove_flag)
    {
        operator = "+";
        operand_one = Number(display.textContent);
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
        operand_one = Number(display.textContent);
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
        operand_one = Number(display.textContent);
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
        operand_one = Number(display.textContent);
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

const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", () => {
    if(!display.textContent.includes("."))
        display.textContent = display.textContent + ".";
})

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
    remove_flag = true;
})

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    display.textContent = "0";
    remove_flag = true;
    operand_one = operand_two = operator = null;
})

const backspace = document.querySelector(".backspace");
backspace.addEventListener("click", () => {
    display.textContent = display.textContent.slice(0, -1);
    if(display.textContent == 0)
    {
        display.textContent = "0";
        remove_flag = true;
    }   
})