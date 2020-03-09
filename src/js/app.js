const heightUnits = document.getElementById('heightunits');
const weightUnits = document.getElementById('weightunits');
const button = document.querySelector('.container__button');
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
    const weightInput = document.querySelector('.container__weight');
    const heightInput = document.querySelector('.container__height');
    const metricBmiFormula = (weightInput.value / ((heightInput.value * heightInput.value) / getHeightUnitValue()) * 100);
    const imperialBmiFormula = 703 * weightInput.value / (heightInput.value * heightInput.value);
    let value = '';

    if (!weightInput.value || !heightInput.value) {
        alert('Insert height or/and weight values');
    }

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
    const value = getBMI().toFixed(2);
    let result = '';

    if (document.querySelector('p')) {
        document.querySelector('p').remove();
    }



    score.appendChild(element);

    if (value <= 18.50) {
        result = 'underweight';
        element.innerHTML = `Your BMI is <span class="bold">${value}</span>. You have <span class='underweight'>${result}</span>.`;
    } else if (value > 18.50 && value <= 24.99) {
        result = 'normal weight';
        element.innerHTML = `Your BMI is <span class="bold">${value}</span>. You have <span class='normal'>${result}</span>.`;
    } else if (value > 24.99 && value <= 29.99) {
        result = 'overweight';
        element.innerHTML = `Your BMI is <span class="bold">${value}</span>. You have <span class='overweight'>${result}</span>.`;
    } else if (value > 29.99) {
        result = 'obesity';
        element.innerHTML = `Your BMI is <span class="bold">${value}</span>. You have <span class='obesity'>${result}</span>.`;
    } else if (value === -1) {
        element.innerHTML = `Insert correct height or weight value`;
    }
}



heightUnits.addEventListener('change', getHeightUnitValue);
weightUnits.addEventListener('change', getWeightUnitValue);
button.addEventListener('click', displayBMI);
button.addEventListener('touchdown', displayBMI);