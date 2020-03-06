const heightUnits = document.getElementById('heightunits');
const weightUnits = document.getElementById('weightunits');
const button = document.querySelector('button');
let formula = '';

const getHeightUnitValue = () => {
    const units = heightUnits.options[heightUnits.selectedIndex].value;
    let unitValue = '';

    if (units === 'cm') {
        unitValue = 100;
        weightUnits.selectedIndex = 1;
        formula = 'metric';

    } else if (units === 'inch') {
        weightUnits.selectedIndex = 2;
        formula = 'imperial';
    }

    return unitValue;
}

const getWeightUnitValue = () => {
    const units = weightUnits.options[weightUnits.selectedIndex].value;

    if (units === 'kg') {
        heightUnits.selectedIndex = 1;
        formula = 'metric';

    } else if (units === 'lbs') {
        heightUnits.selectedIndex = 2;
        formula = 'imperial';
    }
}



const getBMI = () => {
    const weight = document.querySelector('.weight').value;
    const height = document.querySelector('.height').value;
    let value = '';
    const metricBmiFormula = (weight / ((height * height) / getHeightUnitValue()) * 100);
    const imperialBmiFormula = 703 * weight / (height * height);

    if (formula === 'imperial') {
        value = imperialBmiFormula;
    } else if (formula === 'metric') {
        value = metricBmiFormula;
    }

    return value;
}

const displayBMI = () => {
    const score = document.querySelector('.container__score');
    const element = document.createElement('p');
    const value = getBMI();
    console.log(value);
    element.textContent = value;
    score.appendChild(element);
}



heightUnits.addEventListener('change', getHeightUnitValue);
weightUnits.addEventListener('change', getWeightUnitValue);
button.addEventListener('click', displayBMI);