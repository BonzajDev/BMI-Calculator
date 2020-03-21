const heightSelector = document.getElementById('heightunits');
const weightSelector = document.getElementById('weightunits');
const button = document.querySelector('.container__button');
const score = document.querySelector('.container__score');
let formula = '';

const getHeightUnit = () => {
    const units = heightSelector.options[heightSelector.selectedIndex].value;
    let unitValue = '';

    if (units === 'cm') {
        unitValue = 100;
        weightSelector.selectedIndex = 1;
        formula = 'metric';
    } else if (units === 'inch') {
        weightSelector.selectedIndex = 2;
        formula = 'imperial';
    } else if (units === 'units') {
        score.innerHTML = "<p class='alert'>Pick height units!</p>";
    }
    return unitValue;
}

const getWeightUnit = () => {
    const units = weightSelector.options[weightSelector.selectedIndex].value;

    if (units === 'kg') {
        heightSelector.selectedIndex = 1;
        formula = 'metric';
    } else if (units === 'lbs') {
        heightSelector.selectedIndex = 2;
        formula = 'imperial';
    } else if (units === 'units') {
        score.innerHTML = "<p class='alert'>Pick weight units!</p>";
    }
}

const getBMI = () => {
    const weightInput = document.querySelector('.container__weight');
    const heightInput = document.querySelector('.container__height');
    const metricBmiFormula = (weightInput.value / ((heightInput.value * heightInput.value) / getHeightUnit()) * 100);
    const imperialBmiFormula = 703 * weightInput.value / (heightInput.value * heightInput.value);
    let value = '';

    if (!weightInput.value || !heightInput.value) {
        score.innerHTML = "<p class='alert'>Insert height or/and weight values</p>";

    } else if (weightInput.value <= 0 || heightInput.value <= 0) {
        score.innerHTML = "<p class='alert'>Input value cannot be less or equal to 0!</p>";
    }

    if (formula === 'imperial') {
        value = imperialBmiFormula;
    } else if (formula === 'metric') {
        value = metricBmiFormula;
    }
    return value;
}

const displayBMI = () => {
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
        element.innerHTML = `Your BMI is <span class="bold">${value}</span>. You have <span class='alert'>${result}</span>.`;
    } else if (value === -1) {
        element.innerHTML = `Insert correct height or weight value`;
    }
}

heightSelector.addEventListener('change', getHeightUnit);
weightSelector.addEventListener('change', getWeightUnit);
button.addEventListener('click', displayBMI);
button.addEventListener('touchdown', displayBMI);