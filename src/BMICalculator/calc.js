import { height, weight } from './elements.js';

export function calculateBMI() {
    let heightValue = Number(height.value) / 100;
    let weightValue = weight.value;
    let bmiValue = weightValue / (heightValue * heightValue);
    return bmiValue;
}
