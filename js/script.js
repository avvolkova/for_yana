const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset')
const screen = document.querySelector('.screen');
const plusBtn = document.querySelector('.screen-btn');
const itemsPercent = document.querySelectorAll('.other-items.percent');
const numberPercent = document.querySelectorAll('.other-items.number');

function costLayout() {
    const selects = document.querySelectorAll('.main-controls__select > select'); // Определяем на странице все селекты
    const selectValues = [...selects].map(item => Number(item.value)).filter(Boolean); // Забираем из них значения и отфильтровываем пустые строки

    const qtyInputs = document.querySelectorAll('.screen > .main-controls__input > input');
    const qtyInputsValues = [...qtyInputs].map(item => Number(item.value)); // Забираем из них значения

    const basicCost = selectValues.reduce((acc, item, i) => acc + item * qtyInputsValues[i], 0); // считаем основную сумму
    const checkboxes = [...document.querySelectorAll('.custom-checkbox')].map(item => item.checked);
    const checkboxValues = [...document.querySelectorAll('.other-items > .main-controls__input > input')].map(item => Number(item.value));
    const additionalServices = checkboxValues.filter((item, i) => checkboxes[i] !== false);

    let costWithAddServices = basicCost;
    for (const value of additionalServices) {
        const percents = [];
        if (value > 100) {
            costWithAddServices += value;
        } else {
            percents.push(value);
        }

        percents.forEach(percent => costWithAddServices += costWithAddServices * (percent / 100))
    }

    showResult(basicCost, qtyInputs.length, costWithAddServices);

}

function showResult(total, totalCount, totalFullCount, totalCountRollBack = 0) {
    const totalField = document.querySelector('#total');
    const totalCountField = document.querySelector('#total-count');
    const totalCountOtherField = document.querySelector('#total-count-other');
    const totalFullCountField = document.querySelector('#total-full-count');
    const totalCountRollBackField = document.querySelector('#total-count-rollback');

    totalField.value = total;
    totalCountField.value = totalCount;
    totalCountOtherField.value = totalFullCount - total;
    totalFullCountField.value = totalFullCount;
    totalCountRollBackField.value = totalCountRollBack;

    resetBtn.style.display = 'block';
}

startBtn.addEventListener('click', costLayout);

plusBtn.addEventListener('click', () => {
    const newScreen = screen.cloneNode(true);
    console.dir(newScreen.children)
    newScreen.querySelector('input').value = '';
    plusBtn.insertAdjacentElement('beforebegin', newScreen);
})

resetBtn.addEventListener('click', () => {
    showResult(0, 0, 0);
    resetBtn.style.display = 'none';
})


