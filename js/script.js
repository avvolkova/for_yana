const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset')
const screens = document.querySelectorAll('.screen');
const plusBtn = document.querySelector('.screen-btn');
const itemsPercent = document.querySelectorAll('.other-items.percent');
const numberPercent = document.querySelectorAll('.other-items.number');

function costLayout() {

    screens.forEach(screen => {
        const select = screen.querySelector('select').value;

        const input = screen.querySelector('input').value;
        const res = select * input
        const total = document.getElementsByClassName('total-input')[0];
        console.log(res)
    });

}

function result() {
    costLayout()

}

function changingValue() {
    const range = document.querySelector('.rollback input[type=range]');
    const rangeNum = document.querySelector('.range-value');
    rangeNum.textContent = range.value + '%'
}

startBtn.addEventListener('click', result);





