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
const account = {
    balance: 0,
    transactionsHistory: [],

    transaction: { // Создаем объект транзакции с двумя свойствами "положить и снять"
        DEPOSIT: "deposit",
        WITHDRAW: "withdraw",
    },


    // Методы объекта account
    createTransaction(amount, type) { // Функция для создание транзакции в виде объекта
        const newTransaction = {
            id: this.transactionsHistory.length + 1,
            type,
            amount,
        }

        return newTransaction;
    },

    deposit(amount) { // Функция депозит при пополнении
        const newTr = this.createTransaction(amount, this.transaction.DEPOSIT);

        this.transactionsHistory.push(newTr);
        this.balance += amount;
    },

    withdraw(amount) { //Функция снятие
        if (this.balance < amount) {
            console.error("Не достаточно денег!!!");
            return;
        }

        const newTr = this.createTransaction(amount, this.transaction.WITHDRAW);
        
        this.transactionsHistory.push(newTr);
        this.balance -= amount;        
    },

    getBalance() {
        return this.balance;
    },

    getTransactionDeteils(ident) {
        for (const transaction of this.transactionsHistory) {
            if (transaction.id === ident) {
                return transaction;
            }            
        };

        console.warn(`Транзакции с идентификатором ${ident} не найдено`);
        return null;
    },

    getTransactionTypeTotal(typeOfTransaction) {
        let typeTotalValue = 0;

        for (const transaction of this.transactionsHistory) {
            if (transaction.type === typeOfTransaction) {
                typeTotalValue += transaction.amount;
            }
        };

        return typeTotalValue;
    },
};

account.deposit(1000);
account.deposit(10000);
account.withdraw(3000);
account.withdraw(2000);
account.deposit(5000);
// console.log(account.getBalance());
// console.log(account.transactionsHistory);
// console.log(account.getTransactionDeteils(4));
console.log(account.getTransactionTypeTotal(account.transaction.DEPOSIT));