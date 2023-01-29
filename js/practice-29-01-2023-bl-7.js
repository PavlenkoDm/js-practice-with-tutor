// const inputEl = document.querySelector("#alertInput");
// const btnEl = document.querySelector("#alertButton");

// btnEl.addEventListener("click", onClick1);

// function onClick1() {
//     alert(inputEl.value);
// }
//--------------------------------------------------------------


// const bntEl = document.querySelector('#swapButton')
// const leftInputEl = document.querySelector('#leftSwapInput')
// const rightInputEl = document.querySelector('#rightSwapInput')

// bntEl.addEventListener('click', onClick2)

// function onClick2() {
//   const newValue = leftInputEl.value;
//   leftInputEl.value = rightInputEl.value
//   rightInputEl.value = newValue;
// }
//----------------------------------------------------------------------------


// Кнопка "Приховати" ховає текст і замінює назву кнопки на
// "Розкрити", при повторному натисканні текст знову стає доступним
// і кнопка набуває початкового вигляду.

// const passwordInputEl = document.getElementById("passwordInput");
// const passwordButtonEl = document.getElementById("passwordButton");

// passwordButton.addEventListener("click", onClick);

// function onClick() {
//   if (passwordInputEl.type === "text") {
//     passwordButtonEl.textContent = "Показати";
//     passwordInputEl.type = "password";
//   } else {
//     passwordButtonEl.textContent = "Приховати";
//     passwordInputEl.type = "text";
//   }
// }
//-----------------------------------------------------------------------------


// Кнопка "Зменшити" робить квадрат менше на 10 пікселів, допопка "Збільшити" - більше на 10 пікселів.
// const bigBtnEl = document.querySelector('#increase')
// const smalBtnEl = document.querySelector('#decrease')
// const boxEl = document.querySelector('#box')

// let size = boxEl.clientWidth

// bigBtnEl.addEventListener('click', onClick)
// smalBtnEl.addEventListener('click', onClick1)

// function updateSizeBox() {
//   boxEl.style.width = size + "px";
//   boxEl.style.height = size + "px";
// }

// function onClick() {
//   size += 10
//   updateSizeBox()
// }

// function onClick1() {
//   size -= 10
//   updateSizeBox()
// }
//---------------------------------------------------------------------------------


// Навесьте слухач на клік і визначте, коли клік відбувається
// всередині елемента з id "place" і коли клік припадає поза зоною елемента
// https://developer.mozilla.org/en-US/docs/Web/API/Node/contains

// const boxEl = document.querySelector("#box");
// const placeEl = document.querySelector("#place");

// boxEl.addEventListener("click", onClickBox);

// function onClickBox(event) {
//     console.log(event.target); // Возвращает ссылку на элемент на котором произошло событие
//     console.log(event.currentTarget); // Возвращает ссылку на элемент на котором висит функция обработчика событий
//     console.log(event.target.classList.contains("place"));
//     console.log(event.currentTarget.contains(event.target));
// }
//-----------------------------------------------------------------------------------------

// const newItem = document.querySelector(".list");
// const newBtn = document.querySelector("#double");

// newBtn.addEventListener("click", onClick);
// function onClick() {
//   console.log(newItem.children);
//   [...newItem.children].forEach((element) => {
//     console.log(element.textContent);
//     element.textContent *= 2;
//   });
// }
//-------------------------------------------------------------------------------------------

// Задача 8
// При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
// За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
// інформацією про те, яка кнопка була натиснута скільки разів.


// let dataNumber = 0;
// const totalResultEl = document.querySelector('#resultButton');
// const resutSectionEl = document.querySelector('#resultSection');
// const statListEl = document.querySelector('.statList');

// statListEl.addEventListener('click', onClick);

// function onClick(event) {
//   if (event.target.tagName !== "BUTTON") {
//     return
//   }
//   console.log(event.target.getAttribute('data-number'));
//   dataNumber += Number(event.target.getAttribute('data-number'))
//   console.log(dataNumber)
// }

// totalResultEl.addEventListener('click', getResult)

// function getResult() {
//   resutSectionEl.textContent = dataNumber
// }
//---------------------------------------------------------------------------------------


//Вивести 4 червоні квадрати, при кліку на будь-який, він ставати зеленим, при цьому якщо
//є вже зелений квадрат, то він ставати назад червоним і так можна кликати на будь-який
//квадрат, він ставати зеленим, а старий зелений квадрат назад червоним і тд.
//(Зробити завдання так, щоб можна було додати ще хоч 100 квадратів, при цьому скрипт не
//треба міняти).

// const squareArrayEl = document.querySelectorAll(".square");

// squareArrayEl.forEach((squareEl) => {
//   squareEl.addEventListener("click", onClick);
// });

// function onClick(event) {
//   event.target.classList.toggle("green");
// }
//-----------------------------------------------------------------------------------------------

//Виводимо червоний квадрат, при наведенні на нього він стає зеленим, а коли відводимо
//курсор від нього, назад червоним.
//mouseover/mouseout

// const squareEl = document.querySelector(".square");

// squareEl.addEventListener("mouseover", onOver);
// squareEl.addEventListener("mouseout", onOut);

// function onOver(event) {
//     event.target.classList.add("green");
// }

// function onOut(event) {
//     event.target.classList.remove("green");
// }
//--------------------------------------------------------------------------------------------------

// Напишіть інтерфейс створення списку.
//Для кожного пункту:

// Запитуйте вміст пункту користувача за допомогою prompt.
// Створюйте елемент <li> і додайте його до <ul>.
// Процес переривається, коли користувач натискає вводить порожній рядок.
// Усі елементи мають створюватися динамічно.

// Якщо користувач вводить HTML-теги - нехай у списку вони показуються як звичайний текст.
// let message = "";
// const listEl = document.querySelector(".list");
// do {
//     message = prompt("Введіть любий текст");
//     if (message) {
//         listEl.insertAdjacentHTML("beforeend", `<li class = "item">${message}</li>`);
//     }    
// } while (message);



