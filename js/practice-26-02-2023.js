/*
* Створити функцію getData, яка приймає два колбеки на випадок успішного виконання завдання (`Ми це зробили,
 Біллі - ${msg}`) та на випадок помилки (`Кеп, у нас проблема - ${err}`).
 * Завдання повинно випадково виконуватися із затримкою в 1 секунду.
 * Якщо успішно -  передати в колбек '✅ СУПЕР!', якщо ні - '❌ ПОМИЛКА!'
* Переписати на Promise (спочатку з двома колбеками в then, потім з catch)
 * При будь-якому результаті в кінці виводити '🚀 Finished!'
*/

// const handleSuccess = msg => console.warn(`Ми це зробили, Біллі - ${msg}`);
// const handleError = error => console.error(`Кеп, у нас проблема - ${error}`);
// const handleFinished = () => console.log('🚀 Finished!');

// // function getData(success, error) {
// //   const random = Math.random() > 0.5;
// //   setTimeout(() => {
// //     if (random) {
// //       success("✅ СУПЕР!");
// //     } else {
// //       error("❌ ПОМИЛКА!");
// //     }
// //   }, 1000);
// // }

// const handleSuccess = (msg) => console.warn(`Ми це зробили, Біллі - ${msg}`);
// const handleError = (error) => console.error(`Кеп, у нас проблема - ${error}`);
// const handleFinished = () => console.log("🚀 Finished!");

// // getData(handleSuccess, handleError);

// function getData() {
//   return new Promise((resolve, reject) => {
//     const random = Math.random() > 0.5;
//     setTimeout(() => {
//       if (random) {
//         resolve("✅ СУПЕР!");
//       } else {
//         reject("❌ ПОМИЛКА!");
//       }
//     }, 1000);
//   });
// }

// getData().then(handleSuccess).catch(handleError).finally(handleFinished);


/**
 * - Використовуй prompt та повертай значення звідти.
 * - Створи функцію, яка буде набувати значення з prompt і всередині якої буде проміс.
 * Якщо значення не є числом, відхиляй проміс та логіруй "error".
 * Якщо значення парне, вирішуй проміс та повертай "even" через 1 секунду.
 * Якщо значення не парне, вирішуй проміс та повертай "odd" через 2 секунди.
 */

// const msg = prompt("Введіть число!!!");

// function getMessage(message) {
//   return new Promise((resolve, reject) => {
//     const number = Number(message);
//     if (isNaN(number)) {
//       reject("Error");
//     }

//     const data = { text: "even", delay: 1000 };
//     if (number % 2 !== 0) {
//       data.text = "odd";
//       data.delay = 2000;
//     }
//     setTimeout(() => {
//       resolve(data.text);
//     }, data.delay);
//   });
//   // if (number % 2 === 0) {
//   //   setTimeout(() => {
//   //     resolve("Even");
//   //   }, 1000);
//   // }
// }
// // getMessage(msg)
// //   .then((resolve) => {
// //     console.log(`${resolve}`);
// //   })
// //   .catch((reject) => {
// //     console.log(`${reject}`);
// //   });

// // !!!!!!!!!КОРОТКИЙ СИНТАКСИС!!!!!!!!!
// getMessage(msg).then(console.log).catch(console.log)


 /* Є функція, яка генерує випадкові числа від 1 до 4.
 * Написати функцію, яка повертає проміс.
 * Зробіть так, щоб згенероване число було затримкою функції setTimeout в секундах.
 * Оберніть все це в проміс, який у будь-якому разі повертає час затримки (і в resolve, і в reject).
 * Нехай проміс виконається успішно, якщо згенеровано 1 або 2 (`✅ Resolved after ${delay} sec`), і з помилкою - якщо 3 або 4 (`❌ Rejected after ${delay} sec`).
 */


// const getRandomNumber = () => Math.floor(Math.random() * 4) + 1;

// function getPromise() {
//   const number = getRandomNumber();
//   const delay = number * 1000;
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if (number <= 2) {
//         res(delay);
//       }
//       rej(delay);
//     }, delay);
//   });
// }

// getPromise()
//   .then((delay) => console.log(`✅ Resolved after ${delay} sec`))
//   .catch((delay) => console.log(`❌ Rejected after ${delay} sec`));

/*
 * Зробіть 3 проміси - по одному для кожного фреймворку з масиву.
 * У кожному розташована функція setTimeout із випадковою затримкою від 0 до 2 секунд.
 * Зробити так, щоб проміси і резолвилися, і реджектилися випадково.
 * Нехай кожен проміс своїм результатом повертає цю затримку та ім'я фреймворку, а при помилці ще й текст помилки 'Promise error'.
 */

const frameworks = ['React', 'Vue', 'Angular'];

const getRandomDelay = () => Math.ceil(Math.random() * 2000);
console.log(getRandomDelay());

const promiseArr = frameworks.map((technology) => {
    return new Promise((res, rej) => {
        const randomDelay = getRandomDelay();
        setTimeout(() => {
            if (randomDelay <= 1900) {
                res({technology, randomDelay})
            }
            rej({technology, randomDelay, error: 'Promise error'});
        }, randomDelay);        
    });
})

Promise.all(promiseArr).then(console.log).catch(console.log);

