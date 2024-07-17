import { activeToggle, reset, toggleErrorMessage, verifyValues } from './functions.js';
import { calculateBMI } from './calc.js';
import { bmiResultOnScreen, buttonBmi, closeButton, height, weight } from './elements.js';

export function calculateButton() {
    buttonBmi.addEventListener('click', () => {
        const isEmpty = verifyValues();
        if (!isEmpty) {
            let bmiValue = calculateBMI().toFixed(2);
            bmiResultOnScreen.innerText = `Seu IMC é de ${bmiValue}`;
            activeToggle();
            console.log(bmiValue);
        }
    });
}

export function closeButtonControl() {
    closeButton.addEventListener('click', () => {
        activeToggle();
        reset();
    });
}

export function verifyKeyPressed() {
    const elements = [weight, height];

    elements.forEach((element) => {
        element.addEventListener('keydown', toggleErrorMessage);
    });
}
