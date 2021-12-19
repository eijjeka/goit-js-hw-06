// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');

const clickDecrement = decrement.addEventListener('click', () => {
   value.textContent = --counterValue;
})

const clickIncrement = increment.addEventListener('click', () => {
   value.textContent = ++counterValue;
})

