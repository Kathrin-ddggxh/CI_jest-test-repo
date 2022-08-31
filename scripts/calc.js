/**
 * @jest-environment jsdom
 */

function addition(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {

        return num1 + num2;
    } else {
        return "Only enter numbers!"
    }
}

module.exports = addition;