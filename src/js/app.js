const heightUnits = document.getElementById('heightunits');
const button = document.querySelector('button');

const getUnitValue = () => {
    const units = heightUnits.options[heightUnits.selectedIndex].value;
    let unitValue = '';

    if (units === 'cm') {
        unitValue = 100;
    } else if (units === 'ft') {
        unitValue = 25;

    } else if (units === 'inch') {
        unitValue = 50;
    }
    return unitValue;
}

const getBMI = () => {
    const weight = document.querySelector('.weight').value;
    const height = document.querySelector('.height').value;


    const bmi = (weight / ((height * height) / getUnitValue()) * 100);
    console.log(bmi);
    return bmi;

}


heightUnits.addEventListener('change', getUnitValue);
button.addEventListener('click', getBMI);