// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const controls = document.querySelector('#controls');
const btnCreate = document.querySelector('button[data-create]');
const input = controls.firstElementChild;
const btnDestroy = document.querySelector('button[data-destroy]');
const parentBoxes = document.querySelector('#boxes');

let amount = input.value;
console.log(amount)

btnCreate.addEventListener('click', createBoxes);

function createBoxes(amount) {
  console.log(amount)
}
// for (let i = 1; i < amount; i += 1) {
//   const div = document.createElement("div");
//   console.log(div)
//   div.style.width = "30px";
//   div.style.height = "30px";
//   div.style.backgroundColor = getRandomHexColor();
//   return refs.controls.append(div)
// }