
// Named function for addition
function add(a, b) {
    return a + b
}

// Anonymous function for subtraction
const subtract = function (a, b) {
    return a - b
};

// Arrow function for multiplication
const multiply = (a, b) => {
    return a * b
};

// Named function for division
function divide(a, b) {
    return a / b
}

// Calculator object with methods
const calculator = {
    equation: '',
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,

    updateEquation: function (value) {
        this.equation += value
        document.getElementById('equation').value = this.equation;
    },
    clearEquation: function () {
        this.equation = ''
        document.getElementById('equation').value = this.equation;

    },
    calculate: function () {
        const equation = this.equation.split(' ');
        const a = parseFloat(equation[0]);
        const operation = equation[1];
        const b = parseFloat(equation[2]);
        let result;

        switch (operation) {
            case '+':
                result = // TODO: Implement call to add method using `this`
                break;
            case '-':
                result = // TODO: Implement call to subtract method using `this`
                break;
            case '*':
                result = // TODO: Implement call to multiply method using `this`
                break;
            case '/':
                result = // TODO: Implement call to divide method using `this`
                break;
            default:
                result = 'Invalid Operation';
        }

        this.updateEquation(` = ${result}`);
    }
};

// Event listeners
document.querySelectorAll('button[name="input"]').forEach(button => {
    button.addEventListener('click', (event) => {
        const value = event.target.value;
        // TODO: Add call to updateEquation and pass value as an argument
    });
});

document.querySelectorAll('button[name="operation"]').forEach(button => {
    button.addEventListener('click', (event) => {
        const value = event.target.value;
        // TODO: Add call to updateEquation and pass value as an argument
        // NOTE: This passes the selected operation as part of a text string
    });
});

document.querySelector('button[name="calculate"]').addEventListener('click', () => {
    // TODO: Add call to calculate() result and update display
});

document.querySelector('button[name="clear"]').addEventListener('click', () => {
    // TODO: Clear the display
});
