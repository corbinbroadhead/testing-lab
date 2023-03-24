module.exports = {
    returnTwo: () => {
        return 2;
    },
    greeting: (name) => {
        return `Hello, ${name}.`;
    },
    add: (num1, num2) => {
        return num1 + num2;
    },
    multiply: (num1, num2) => {
            return num1 * num2;
    },
    divide: (num1, num2) => {
        if (num2 === 0) {
            return "we can't do that silly.";
        } else {
            return num1 / num2;
        }
    },
    subtract: (num1, num2) => {
        return num1 - num2;
    }
}