// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>
// Для генерации случайного цвета используй функцию getRandomHexColor.

const refs = {
  btnChangeColor: document.querySelector('.change-color'),
  textColor: document.querySelector('.color'),
}

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.btnChangeColor.addEventListener('click', onClickBtn);

function onClickBtn() {
  refs.textColor.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
}