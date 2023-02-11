// let students = 100;
// students += 50; //Вместо + можно поставить любое мат. выражение - / *
// console.log(students);

// const value = 25.7;
// console.log(Math.floor(value)); //25 Округление вниз
// console.log(Math.ceil(value)); //26 Округление вверх
// console.log(Math.round(value)); //26 Просто округление

// const sumOfPurchasing = "120.5 гривен";
// const massage = "Вы купили на";
// console.log(`${massage} ${sumOfPurchasing}.`);

// Чейнинг--------------------------------------------------------------------------------
// let weight = "88,5";
// weight = Number(weight.replace(",", ".")); // В даном случае идет замена одной запятой, что бы заменить все .replaceAll

// let height = "1.75";
// height = Number(height);

// const bmi = Number((weight / height ** 2).toFixed(1));

// console.log(bmi); // toFixed обрезка до первого знака после запятой (в даном случае)

// Оператор switch работает только когда идет строгое сравнение (===), для (><) if else------------------------------
// const stars = 1;
// let price;

// switch (stars) { // Применяется в том случае когда одна и та же переменная сравнивается (===) с разными значениями.
//     case 1: // После пробела после case идет значение с которым я хочу сравнить старс. То есть дословно "Eсли stars === 1 то присвоить price значение 20"
//         price = 20; // Между case и break может быть произвольное количество строк соответственно и инструкций
//         break;

//     case 2:
//         price = 30;
//         break;
//     case 3:
//         price = 40
//         break;
//     case 4: // Объединение, когда для разных кейсов нужно одинаковое значение
//     case 5:
//         price = 120;
//         break;
//     default:
//         console.log("Такого количества звезд нет");
// }
// console.log(price);

// // Переборка чисел, на четное и не четное------------------------
// const min = 1;
// const max = 10;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//     if (i % 2 !== 0) {
//         console.log("Не четное число ", i);
//         continue;
//     }

//     console.log("Четное число ", i);
//     total += i;
// }
// console.log(total);

//-------------------------------------------------------------------
// const str = 'abcde';
// // alert(str[0]);
// // alert(str[1]);
// // alert(str[str.length - 1]);
// alert(str[0] + str[1] + str[str.length - 1]);

//--------------------------------------------------------------------
// const min = 10;
// const max = 20;
// const num = +prompt("Прошу ввести число"); //Возвращает число вместо строки. Это то же самое что const num = Number(promt("Прошу ввести число"));
// // let result = 0;
// // if (num >= max) {
// //     result = max;
// // } else if (num <= min) {
// //     result = min;
// // } else {
// //     result = num;
// // }
// let result = Math.max(min, Math.min(max, num));
// alert(result);

//---------------------------------------------------------------------
// const str = "string not starting with capital";
// let newStr = str[0].toLocaleUpperCase() + str.slice(1);
// console.log(newStr);

//---------------------------------------------------------------------
// const str = "Каждый охотник желает знать";
// const str1 = "скрипт";
// const str2 = "знать";

// // function endsWith(str, substring) {
// //     return str.endsWith(substring);
// // }

// function endsWith(str, substring) {
//     return str.includes(substring, str.length - substring.length);
// }

// console.log(endsWith(str, str1)); // false
// console.log(endsWith(str, str2)); // true

//Видеоурок 2 -----------------------------------------------------------
// const questionForUser = prompt("Какое официальное название JavaScript?");
// const wrightAnswer = "ECMAScript";
// const result = questionForUser.toLowerCase() === wrightAnswer.toLowerCase() ? "Верно" : `Не знаете? ${wrightAnswer}!`;
// // if (questionForUser.toLowerCase() === wrightAnswer.toLowerCase()) {
// //     alert("Верно");
// // } else {
// //     alert(`Не знаете? ${wrightAnswer}!`);
// // }
// // Ниже то что и в верху только через тернарный оператор
// alert(result);

//Задача на отображение времени -----------------------------------------
// const hours = 14;
// const minutes = 0;
// let timeString = `${hours}ч.`;
// if (minutes > 0) timeString += ` ${minutes}мин.`;
// console.log(timeString);

// Задача на работу с сылками ----------------------------------------------
// let link = "htts://my-site.com/about";
// if (!link.endsWith("/") && link.includes("my-site")) { // Оператор ! конвертирует перед чем он стоит в Boolean и делает реверс обратное. !! (не не)
//     link += "/";
// }
// console.log(link);

// Задача на логин и пароль. -------------------------------------------------
// const login = prompt("Пожалуйста введите логин:");
// if (login === "Admin") {
//     const password = prompt("Введите пароль:");

//     if (!password) {
//         console.log("Отменено");
//     } else {
//         // if (password === "A am admin") console.log("Hello");
//         // else console.log("Неверный пароль");
//         console.log(password === "A am admin" ? "Hello" : "Неверный пароль");
//     }
// } else {
//     console.log("Я вас не знаю!!!")
// }

// Массивы: добавление, удаление, замена элементов массива-------------------------
// const newArrey = [4, 3, 2, 1, 9, 8, 7];
// newArrey.splice(2, 0, 555, 388); // Добавление елементов в исходный массив.
// console.log(newArrey);

// const newArrey = [4, 3, 2, 1, 9, 8, 7];
// newArrey.splice(2, 5); //Удаление 5 элементов из исходного массива начиная с индекса 2. // [4, 3]
// console.log(newArrey);

// const newArrey = [4, 3, 2, 1, 9, 8, 7];
// newArrey.splice(2, 5, 555, 388); // Добавление елементов в исходный массив. [4, 3, 555, 388] Замена элементов массиве.
// console.log(newArrey);

// Задача выбрать из массива самое маленькое число-----------------------------------
// const numbers = [89, 3, 8, 200, 5, 2, 30];
// let smallestNumber = numbers[0];
// for (let number of numbers) {
//     if (number < smallestNumber) smallestNumber = number;
// }
// console.log(smallestNumber);

//Задача пересшить строку в нижнем регистре с тире--------------------------------------
// const frase = "Top ten benefits of React Framework";
// const modifiedFrase = frase.toLowerCase().split(" ").join("-");// Чейнинг. То есть сначала строку делаем в нижнем регистре далее на результате делаем сплит в массив далее джоин соединяем в строку с тире.
// console.log(modifiedFrase);

// // Алгоритм сортировки -----------------------------------------------------------------
// const numbers = [8, 10, 3, 5, 11, 7, 9];
// let countOfCicles = 0;

// for (let i = 1; i < numbers.length; i += 1) {

//     console.log(`Я работаю на ${i} итерации -----------`);

//     for (let j = 0; j < numbers.length - i; j += 1) {

//         console.log(`I am on ${j} iterration`);

//         countOfCicles += 1;
//         const prevElement = numbers[j]; // Эти переменные создаются на каждой итеррации.
//         const nextElement = numbers[j + 1];

//         if (prevElement > nextElement) {
//             numbers[j] = nextElement;
//             numbers[j + 1] = prevElement;
//         }
//     }
// }

// console.log(`Было отсортировано за: ${countOfCicles} циклов`);
// console.log(numbers);

// Функция поиска самого длинного слова в строке --------------------------------
// function findLongestWord(string) {
//     const arrayFromString = string.split(" ");
//     let longestWord = arrayFromString[0];
//     let lastWordLength = arrayFromString[0].length;

//     for (let i = 0; i < arrayFromString.length; i += 1) {

//         if (arrayFromString[i].length > lastWordLength) {
//             longestWord = arrayFromString[i];
//             lastWordLength = arrayFromString[i].length;
//         }
//     }

//     return longestWord;
// }

// findLongestWord("join kl stripted grammy");
// console.log(findLongestWord("join kl stripted grammy"));

// Функция добавления чисел в средину массива если есть первое и последнее --------
// function createArrayOfNumbers(min, max) {
//     const numbers = [];

//     for (let i = min; i <= max; i += 1) {
//         numbers.push(i);
//     }

//     return numbers;
// }

// createArrayOfNumbers(29, 34);
// console.log(createArrayOfNumbers(29, 34));

// Функция добавления в новый массив чисел из старого массива, которые больше чем значение value
// function filterArray(numbers, value) {
//     const newArray = [];

//     for (let i = 0; i < numbers.length; i += 1) {
//         if (numbers[i] > value) {
//             newArray.push(numbers[i]);
//         }
//     }

//     return newArray;
// }

// filterArray([5, 10, 30, 100], 0);
// console.log(filterArray([5, 10, 30, 100], 0));

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

// Функция для поиска одинаковых чисел в двух массивах ------------------------------
// function getCommonElements(array1, array2) {
//     const newArray = [];

//     for (let i = 0; i < array1.length; i += 1) {

//         for (let j = 0; j < array2.length; j += 1) {
//             if (array1[i] === array2[j]) {
//                 newArray.push(array2[j]);
//             }
//         }
//     }

//     return newArray;
// }

// console.log(getCommonElements([5, 8, 10, 25, 60, 80], [3, 0, 5, 8]));

// function getCommonElements(array1, array2) {
//     const newArray = [];

//     if (array2.length > array1.length) {

//         for (let i = 0; i < array2.length; i += 1) {

//             if (array2.includes(array1[i])) {
//                 newArray.push(array1[i])
//             }
//         }

//         return newArray;
//     }

//     for (let i = 0; i < array1.length; i += 1) {

//         if (array1.includes(array2[i])) {
//             newArray.push(array2[i])
//         }
//     }

//     return newArray;
// }

// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

// function getCommonElements(array1, array2) {
//   // Change code below this line
//     const newArray = [];

//   for (let arrItem of array1) {
//     if (array2.includes(arrItem)) {
//       newArray.push(arrItem);
//     }
//   }

//     return newArray;
//  // Change code above this line
// }

// Функция вывода четных чисел из массива -------------------------------------
// function getEvenNumbers(start, end) {
//   newArray = [];

//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       newArray.push(i);
//     }
//   }

//   return newArray;
// }

// console.log(getEvenNumbers(6, 12));

// Функция поиска и вывода совпадений по значению в массиве --------------------------
// function includes(array, value) {
//     let result = false;

//     for (let arrayItem of array) {
//         if (arrayItem === value) {
//           result = true;
//         }
//     }

//     return result;
// }

// console.log(includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Uranus'));

// Функция поиска самого большого числа в числовом массиве ---------------------------
// function findLargestNumber(numbers) {
//     console.log(numbers);
//     console.log(...numbers);
//     return Math.max(...numbers);
// }

// console.log(findLargestNumber([10, 15, 5, 11, 125, 30]));

//  Функция перевода времени из минут в формат "01:20" -------------------------------
// function formatTime(minutes) {
//     const hours = (Math.floor(minutes / 60)).toString().padStart(2, 0);
//     const min = (minutes % 60).toString().padStart(2, 0);

//     return `${hours}:${min}`;
// }

// console.log(formatTime(470));

// Функция поиска факториала через рекурсию (когда функция вызывает саму себя) ----------
// function factorial(number) {
//     if (number === 1) return 1;

//     return number * factorial(number - 1);
// }

// console.log(factorial(10));

// Создание объекта и вывод ключа и значения ----------------------------------------------
// const user = {
//     name: "Mango",
//     age: 20,
//     hobby: "html",
//     premium: true,
// };

// user.mood = "happy"; // Добавляем свойство
// user.hobby = "skydiving"; // Меняем свойство
// user.premium = false;

// for (const key of Object.keys(user)) {
//     console.log(`${key}: ${user[key]}`);
// }

// Работа с массивом объектов-----------------------------------------------------------
// const stones = [
//     { name: "Изумруд", price: 1300, quantity: 4 },
//     { name: "Рубин", price: 2700, quantity: 3 },
//     { name: "Сапфир", price: 400, quantity: 7 },
//     { name: "Гранит", price: 200, quantity: 2 },
// ];

// const calcTotalPrice = function (stones, stoneName) {
//     const res = {
//         name: stoneName,
//         price: 0,
//         quantity: 0,
//         totalPrice: 0,
//     };

//     for (const stone of stones) {
//         if (stone.name === stoneName) {
//             res.name = stoneName;
//             res.price = stone.price;
//             res.quantity += stone.quantity;
//             res.totalPrice += stone.price * stone.quantity;

//             return res;
//         }
//     }

//     return res;
// }

// const result = calcTotalPrice(stones, "Рубин");

// console.log(result);

// Кабинет интернет банкинга ---------------------------------------------------
// const account = {
//     balance: 0,
//     transactionsHistory: [],

//     transaction: { // Создаем объект транзакции с двумя свойствами "положить и снять"
//         DEPOSIT: "deposit",
//         WITHDRAW: "withdraw",
//     },

//     // Методы объекта account
//     createTransaction(amount, type) { // Функция для создание транзакции в виде объекта
//         const newTransaction = {
//             id: this.transactionsHistory.length + 1,
//             type,
//             amount,
//         }

//         return newTransaction;
//     },

//     deposit(amount) { // Функция депозит при пополнении
//         const newTr = this.createTransaction(amount, this.transaction.DEPOSIT);

//         this.transactionsHistory.push(newTr);
//         this.balance += amount;
//     },

//     withdraw(amount) { //Функция снятие
//         if (this.balance < amount) {
//             console.error("Не достаточно денег!!!");
//             return;
//         }

//         const newTr = this.createTransaction(amount, this.transaction.WITHDRAW);

//         this.transactionsHistory.push(newTr);
//         this.balance -= amount;
//     },

//     getBalance() {
//         return this.balance;
//     },

//     getTransactionDeteils(ident) {
//         for (const transaction of this.transactionsHistory) {
//             if (transaction.id === ident) {
//                 return transaction;
//             }
//         };

//         console.warn(`Транзакции с идентификатором ${ident} не найдено`);
//         return null;
//     },

//     getTransactionTypeTotal(typeOfTransaction) {
//         let typeTotalValue = 0;

//         for (const transaction of this.transactionsHistory) {
//             if (transaction.type === typeOfTransaction) {
//                 typeTotalValue += transaction.amount;
//             }
//         };

//         return typeTotalValue;
//     },
// };

// account.deposit(1000);
// account.deposit(10000);
// account.withdraw(3000);
// account.withdraw(2000);
// account.deposit(5000);
// // console.log(account.getBalance());
// // console.log(account.transactionsHistory);
// // console.log(account.getTransactionDeteils(4));
// console.log(account.getTransactionTypeTotal(account.transaction.DEPOSIT));

// // Деструкция -------------------------------------------------------------------
// const playlist = {
//     tracks: ["a", "b", "c"],
//     genre: "rock",
//     tracksCount: 3,
// };

// const { tracks, genre } = playlist;
// const [one, two, three] = playlist.tracks;

// console.log(one, two);

// Как из массива объектов перенести значения определенный свойств в массив ---------
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {

//     const allPropValues = [];

//     for (const prodact of products) {

//         const keys = Object.keys(prodact);

//         for (const key of keys) {
//             if (key === propName) {
//                 allPropValues.push(prodact[key]);
//             };
//         };
//     };

//   return allPropValues;
// }

// Пример использования деструктуризатора массивов ----------------------------------------------
// const book = {
//     title: "Soprano",
//     author: "Goblin",
// };

// console.log(Object.entries(book));

// for (const [one, two] of Object.entries(book)) {
//     console.log(one, two);
// }

// // Функция генерации ID -----------------------------------------------------------------------
// function generateId() {
//     return "_" + Math.random().toString(36).substr(2, 9);
// };

// console.log(generateId());

// Метод генерации даты --------------------------------------------------------------------------
// const numberDate = new Date(Date.now()); // Date.now() число даты в миллисекундах, начало от 0 (01 1970 3:00)
// console.log(numberDate);

// Пример синтаксиса для работы с новым объектом -------------------------------------------------
// function fullName({ firstName, lastName, ...otherPropsObj }) {
//     return {
//         fullname: firstName + " " + lastName,
//         ...otherPropsObj,
//     };
// }

// Пример корзины --------------------------------------------------------------------------------
// const cart = {
//     items: [],

//     getItems() {
//         return this.items;
//     },

//     add(product) {
//         for (const item of this.items) {
//             if (item.name === product.name) {
//                 item.quantity += 1;
//                 return;
//             }
//         }

//         const newProduct = {
//             ...product, //Распыляем свойства объекта product в объект newProduct
//             quantity: 1,
//         }

//         this.items.push(newProduct);
//     },

//     remove(productName) {
//         const { items } = this; // Вытянули свойство items в локальную переменную и положили ссылку на оригинальный массив

//         for (let i = 0; i < items.length; i += 1) {
//             const { name } = items[i];
//             if (name === productName) {
//                 console.log(`We found ${name}!!!`);
//                 items.splice(i, 1);
//                 return;
//             };
//         };

//         return `You have not ${productName} in your cart!`;
//     },

//     clear() {
//         this.items.length = 0;
//     },

//     countTotalPrice() {
//         const { items } = this;
//         let total = 0;

//         for (const { price, quantity } of items) {
//             total += price * quantity;
//         }

//         return total;
//     },

//     increaseQuantity(productName) {
//         for (const item of this.items) {
//             if (item.name === productName) {
//                 item.quantity += 1;
//                 return;
//             }
//         }
//     },

//     decreaseQuantity(productName) {
//         for (const item of this.items) {
//             if (item.name === productName) {
//                 item.quantity -= 1;
//                 return;
//             }
//         }
//     },
// }

// cart.add({ name: "tomato", price: 70 });
// cart.add({ name: "tomato", price: 70 });
// cart.add({ name: "lemon", price: 30 });
// cart.add({ name: "cherry", price: 50 });

// // cart.remove("lemon");

// // cart.clear();

// console.table(cart.getItems());
// console.log(cart.countTotalPrice());

// Метод получения геолокации ------------------------------------------------------------------
// const onGetPositionSuccess = (position) => {
//     console.log(position);
// };

// const onGetPositionError = (error) => {
//     console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(onGetPositionSuccess, onGetPositionError);

// //Функция фильтр для фильтрации массива ------------------------------------------------------
// const filter = function (newArray, callback) {
//     const filteredArray = [];

//     for (let item of newArray) {

//         if (callback(item)) {
//             filteredArray.push(item);
//         }
//     }

//     return filteredArray;
// };

// const callbackFnOne = value => value >= 3;

// const callbackFnTwo = value => value <= 4;

// const callbackFnTree = fruit => fruit.quantity >= 110;

// const fruits = [
//     {name: "grape", price: 100, quantity: 150},
//     {name: "lemon", price: 70, quantity: 105},
//     {name: "tomato", price: 30, quantity: 120}
// ];

// console.log(filter([1, 2, 3, 4, 5, 6], callbackFnOne));

// console.log(filter([1, 2, 3, 4, 5, 6, 8, 9], callbackFnTwo));

// console.log(filter(fruits, callbackFnTree))

// Концепция замыкания в JS -------------------------------------------------------------------
// const fnA = function (parameters) {
//     const inVar = "Переменная внутри функции fnA";

//     const innerFn = function () {
//         console.log("Это внутренняя функция");
//         console.log(inVar);
//     };

//     return innerFn;
// };

// const fnB = fnA(); // Когда вызывается функция fnA(), результатом ее работы вернется функция innerFn у которой есть доступ к области видимости родительской fnA. И когда нам нужно вызвать эту внутреннюю функцию, мы може вызвать ее с помощью fnB

// const makeSheff = function (name) {
//     const makeDish = function (dish) {
//        return console.log(`Шеф ${name} готовит блюдо - ${dish}`);
//     };

//     return makeDish;
// };

// const mango = makeSheff("Mango");

// console.log(mango("пирожки")); // Шеф Mango готовит блюдо - пирожки

// Округлятор
// const toRound = (places) => {
//     return (number) => number.toFixed(places); // Неявный возврат, когда в стрелочной функции в теле только одна инструкция, тогда можно не указывать return (явный возврат)
// };

// const rounder2 = toRound(2);
// const rounder3 = toRound(3);

// console.log(rounder2(514.134));

// Пример функции которая возвращает массив только с измененными парными числами ---------------------
// function changeEven(numbers, value) {

//   const newArray = [];

//     numbers.forEach(number => number % 2 === 0 ? newArray.push(number + value) : newArray.push(number));

//   return newArray;

// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));

//------------------- Занятие с ментором ---------------------------------------
// const studentRecords = [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Baba", id: 101, marks: 23 },
//   { name: "yaga", id: 200, marks: 45 },
//   { name: "Wick", id: 115, marks: 75 },
// ];

// const students = studentRecords
//   .map((student) => {
//     if (student.marks < 50) {
//       student.marks += 15;
//     }
//     return student;
//   })
//   .filter((student) => student.marks > 50)
//   .reduce((total, { marks }) => (total += marks), 0);

// console.log(students);

// var litmir = [
//   { author: "Хэленка", title: "Улетела сказка" },
//   { author: "Коул Кресли", title: "Восстание Аркан" },
//   { author: "Райчел Мид", title: "Золотая лилия" },
// ];

// function propertyValue(array, key){
//     const newArray = [];
//     array.forEach(item => newArray.push(item[key]))
//     return newArray
// }

// console.log(propertyValue(litmir, "title")); // Улетела сказка,Восстание Аркан,Золотая лилия
// console.log(propertyValue(litmir, "author")); // Хэленка,Коул Кресли,Райчел Мид

// const numbers = [64, 49, 36, 25, 16];
// const myMap = (array, callback) => {
//     const newArray = [];
//     for (const item of array) {
//         newArray.push(callback(item))
//     }
//     return newArray

// }

// const multiplay = function(value) {
//     return value * 2;
// }

// console.log(myMap(numbers, multiplay));

// const makeProduct = (name, price, callback) => {
//     const newObj = {};
//     newObj.name = name;
//     newObj.price = price;
//     newObj.id = Date.now();
//     callback(newObj);
// };

// const showProduct = (product) => {
//     console.log(product)
// };

// makeProduct("tomato", 255, showProduct);

//Замыкание
// const makeShef = (shefName) => {
//   return (dish) => {
//     console.log(`${shefName} is cooking ${dish}`)
//   }
// };

// const makeDish = makeShef("Mango");

// makeDish("Borshch")
// makeDish("Sushi")

// const makeCounter = () => {
//     let item = 0
//     return function(){
//         item += 1
//         return item

//     }
// };

// const counter = makeCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// console.log(typeof(null));
// console.log(typeof([]));
// console.log(typeof({}));
// console.log(typeof(66));
// console.log(typeof("66"));

// const isPlainObject = (item) => {
//   return typeof(item) ==="object" && item!==null && !Array.isArray(item)
// }

// console.log(isPlainObject({ a: 1 })); // true
// console.log(isPlainObject([])); // false
// console.log(isPlainObject(null)); // false

//-------------------- Задачка про камни ---------------------------------------------------------------
// const chopShop = {
//     stones: [
//         {name: "Diamond", price: 1400, quantity: 3},
//         {name: "Emerald", price: 1000, quantity: 5},
//         {name: "Sapphire", price: 700, quantity: 10},
//         {name: "Ruby", price: 2000, quantity: 2}
//     ],

//     calcTotalPrice(stoneName) {
//         const currentStone = this.stones.find(stone => stoneName === stone.name)
//         return currentStone.price * currentStone.quantity;
//     },

//     isStonePresent(stoneName) {
//         return this.stones.some(stone => stone.name === stoneName);
//     }
// };

// console.log(chopShop.calcTotalPrice("Diamond"));
// console.log(chopShop.isStonePresent("Ruby"));

//---------- Функция конструктор ------------------------------------------------------
// const Car = function (config = {}) { // Поставим параметр по умолчанию что-бы не выдавало ошибки при не передаче аргументов.
//     const { brand, model, price } = config; // Делаем деструктуризацию, или в самом пареметре делаем ее ({ brand, model, price } = {}).

//     this.brand = brand;
//     this.model = model;
//     this.price = price;
// }

// Car.prototype.changePrice = function(newPrice) {// Мы закидываем функцию изменения цены в автоматический прототип из которого ее возмет экземпляр
//     this.price = newPrice;
// }

// const myCar = new Car({ brand: "Audi", model: "Q5", price: 20000 });
// const myCar2 = new Car({ brand: "BMW", model: "X5", price: 30000 });

// console.log(myCar);

// myCar.changePrice(50000); // Функция из прототипа вызвана в контексте объекта myCar
// console.log(myCar);

//------------- Синтаксис класса. То же самое что и выше, но немного измененное --------------------
// class Car {
//     static newProp = "I am static property"; // Статическое свойство

//     static statMethod() {
//         return 100 + 257;
//     }

//     #privateProp = "This is private string";

//     publicProp = "I am pablic prop"; // Публичное свойство и оно идет на экземпляр.

//     constructor({brand, model, price} = {}) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }

//     changePrice(value) {// Эта функция под капотом идет на прототип Car.prototype
//         this.price = value;
//     }

//     getPrivProp() {
//         return this.#privateProp += ". Hello!!";
//     }

//     get carModel() { // Имя геттера не может называться так же как и свойство.
//         return this.model;
//     }

//     set carModel(newModel) {
//         return this.model = newModel;
//     }
// }

// const myCar = new Car({ brand: "Audi", model: "Q5", price: 20000 });
// const myCar2 = new Car({ brand: "BMW", model: "X5", price: 30000 });
// // console.log(myCar);

// // myCar.changePrice(50000);
// // console.log(myCar);

// // console.log(Car.newProp); // Лог статического свойства
// // console.log(Car.statMethod());
// // console.log(myCar.getPrivProp());

// console.log(myCar.carModel); // Вызов геттера
// myCar.carModel = "Q7"; // Вызов сеттера, в данном случае Q7 передается аргументом в функцию сеттер.
// console.log(myCar.carModel);

// //------------------ Наследование в классах на примере героев игры ---------------------------------
// class Herro {
//     constructor({ name = "XYZ", xp = 0 } = {}) {
//         this.name = name;
//         this.xp = xp;
//     }

//     gainXP(amount) {
//         return this.xp += amount;
//     }
// }

// class Warrior extends Herro {
//     constructor(config, { weapon } = {}) {
//         super(config); // Обязательно вызывается конструктор родителя в конструкторе ребенка что бы небыло ошибки и в него закидывается аргументы как для родительского класса все остальное нет
//         this.weapon = weapon;
//     }
// }

// const mango = new Warrior({ name: "Mango", xp: 1000 }, { weapon: "sword" });
// mango.gainXP(500);

// console.log(mango);

// console.log(mango.__proto__ === Warrior.prototype);
// console.log(Object.getPrototypeOf(mango) === Warrior.prototype);
// console.log(Object.getPrototypeOf(Warrior.prototype) === Herro.prototype);

//--------------------- DOM создание кнопок с данными из массива объектов ----------------------------
// const colorPickerOptions = [
//     {label: "red", color: "#f44336"},
//     {label: "green", color: "#4caf50"},
//     {label: "blue", color: "#2196f3"}
// ];

// const makeColorPickerOptions = (options) => {
//     return options.map(option => {
//         const buttonEl = document.createElement("button");
//         buttonEl.type = "button";
//         buttonEl.classList.add("color-picker__option");
//         buttonEl.textContent = option.label;
//         buttonEl.style.backgroundColor = option.color;

//         return buttonEl; // Этот ретерн нужен для того что бы в новый массив вернуть созданный элемент
//     });
// };

// const colorPickerArr = makeColorPickerOptions(colorPickerOptions);
// const cpButtonContainer = document.createElement("div");
// cpButtonContainer.append(...colorPickerArr);
// const mainContainer = document.querySelector("body");
// mainContainer.appendChild(cpButtonContainer);

//---------------------- DOM карточка товара по объекту из бекэнда --------------------------
// const product = {
//     name: "Rotor",
//     description: "lore5",
//     price: 2000,
//     available: true,
//     onSale: true,
// }

// const makeProductCard = (someProduct) => {
//     const productContainerEl = document.createElement("article");
//     productContainerEl.classList.add("product");

//     const productTitleEl = document.createElement("h2");
//     productTitleEl.textContent = someProduct.name;
//     productTitleEl.classList.add("product__name");

//     const productDescriptionEl = document.createElement("p");
//     productDescriptionEl.textContent = someProduct.description;
//     productDescriptionEl.classList.add("product_descr");

//     const productPriceEl = document.createElement("p");
//     productPriceEl.textContent = `Цена: ${someProduct.price}`;
//     productPriceEl.classList.add("product_price");

//     productContainerEl.append(productTitleEl, productDescriptionEl, productPriceEl);
//     return productContainerEl;
// };

// console.log(makeProductCard(product));





//-- Примеры обращений и перезаписи свойств объекта ------------------
// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name'],
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette'],
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: [],
//   },
//   5439: {
//     albumTitle: 'ABBA Gold',
//   },
// };

// // Only change code below this line
// function updateRecords(records, id, prop, value) {
//   if (prop !== 'tracks' && value.length !== 0) {
//     records[id][prop] = value;
//   }
//   if (prop === 'tracks' && !records[id].hasOwnProperty(prop) && value.length !== 0) {
//     records[id][prop] = [];
//     records[id][prop].push(value);
//     console.log(records);
//   }
//   if (value.length === 0) {
//     delete records[id][prop];
//   }
//   return records;
// }

// updateRecords(recordCollection, 5439, 'artist', 'ABBA');
// updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
