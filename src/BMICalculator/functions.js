import { error, height, overlay, resultScreen, weight } from './elements.js';

export function activeToggle() {
    overlay.classList.toggle('hidden');
    overlay.classList.toggle('overlay');
    resultScreen.classList.toggle('hidden');
}

export function reset() {
    weight.value = '';
    height.value = '';
}

export function toggleErrorMessage(e) {
    const allowedKeys = ['Backspace', 'Tab', 'Enter', 'Escape', 'Delete', 'Alt', 'Control', 'Shift'];
    const isNotAllowedKey = !allowedKeys.includes(e.key);

    const isNotANumber = !/\d/.test(e.key);
    
    if (isNotANumber && isNotAllowedKey) {
        e.preventDefault();
        activeError();
    } else {
        error.classList.add('disable');
        error.classList.remove('active');
    }
}

export function activeError() {
    error.classList.remove('disable');
    error.classList.add('active');
}

export function verifyValues() {
    const isEmpty = height.value === '' || weight.value === '';
    if (isEmpty) {
        activeError();
        return isEmpty;
    }
}
