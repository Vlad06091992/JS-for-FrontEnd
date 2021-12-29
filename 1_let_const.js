 //Переменная let 

// let a = 24;

// if(true) {
//  let a = 43;
//  console.log("a is " + a)
// }                                //переменные не будут конфликтовать из-за особенностей переменной let

// console.log(a); 

// Hoisting
// b = 20;
// console.log(b);

// let b = 10;  // не будет работать, потому что лет на дает обратиться к переменной до ее создания




// function host() {
//     age = 26;
// }
// let age;
// host();
// console.log(age); // Fсначала создается переменная, а потом функция задает ей значение

//const константами являются те переменные, которые нельзя изменить

// const COLOR = '#ffeebb';
// //COLOR = '#EEE' Константу нельзя менять !!!
// console.log(COLOR);

// const array = [1,2,3,5,8]

// array.push(13);           // мы можем менять внутреннее состояние массива
// console.log(array)

const obj = {a:42};
obj.name = 'igor'           //мы можем менять внтуреннее состояние объекта
console.log(obj)
let git = abc; // редактирование для проверки Git'a