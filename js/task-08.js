// Напиши скрипт управления формой логина.
// + Обработка отправки формы form.login-form должна быть по событию submit.
// + При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.


const refs = {
    form: document.querySelector('.login-form'),
}

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;

    if (mail == 0 || password == 0) {
        alert('Заполните все поля перед отправкой')
    }

    const formData = {
        mail,
        password,
    }
    console.log(formData)
    refs.form.reset();
}