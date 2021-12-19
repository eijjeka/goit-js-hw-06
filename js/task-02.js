// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавить название ингредиента как его текстовое содержимое.
// Добавить элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const parentIngredients = document.querySelector('#ingredients')

const createListEl = array => {
  return array.map(el => {
    const createEl = document.createElement('li')
    createEl.textContent = el;
    createEl.classList.add('item')
    return createEl
  })
}

const addParentEl = createListEl(ingredients)
parentIngredients.append(...addParentEl);