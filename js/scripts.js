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


// Чейнинг
let weight = "88,5";
weight = Number(weight.replace(",", ".")); // В даном случае идет замена одной запятой, что бы заменить все .replaceAll

let height = "1.75";
height = Number(height);

const bmi = Number((weight / height ** 2).toFixed(1));

console.log(bmi); // toFixed обрезка до первого знака после запятой (в даном случае)