"use strict";

// let value = prompt('Какое официальное название JS?', '');

// if(value == 'ESMAScript') {
//     alert('HUY!');
// } else {
//     alert('pizda');
// }

// let addNum = prompt('Add number','')

// if(addNum >0) {
//     alert('1')c
// } else if(addNum == 0) {
//     alert('0')
// } else {
//     alert('-1')
// }

// let result;
// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

// result = (a + b < 4) ? 'Malo' : 'mnogo';         <---решение

// let message;
// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

// message = (login == 'Сотрудник') ? 'Privet'
//     : (login == 'Director') ? 'Zdravstvuyte'
//     : (login == '') ? 'Net logina' : '';         <---решение

// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.

// «Включительно» означает, что значение переменной age может быть равно 14 или 90.

// решение
// if (age >= 14 && age <= 90)



// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

// решение
// Первый вариант:

// if (!(age >= 14 && age <= 90))
// Второй вариант:

// if (age < 14 || age > 90)

// let huy = null
// huy = String(huy)

// alert(typeof huy)

// let str = '123';
// str = Number(str)
// alert(typeof str)

// let age = Number('mne 29')
// alert(age)                           ===NaN

// alert(Boolean(''))     ===false
// alert(Boolean(' '))    ===true

// let str = 'huy';
// alert('huy' *2)          ===NaN

// alert(0 === '0')

// alert(null <= undefined)

// let accessAllowed;
// let age = prompt('Сколько вам лет?', '');

// if (age >= 18) {
//   accessAllowed = true;
// } else {
//   accessAllowed = false;
// }

// alert(accessAllowed);

// let age = prompt('Возраст?', 18);

// let message = (age < 3) ? 'Здравствуй, малыш!' :
//   (age < 18) ? 'Привет!' :
//   (age < 100) ? 'Здравствуйте!' :
//   'Какой необычный возраст!';

// alert( message );

// let num = prompt('add','')

// if(num>0){
//     alert('1')
// } else if(num==0){
//     alert('0')
// } else {
//     alert('-1')
// }

// let result;
// result = (a + b < 4) ? 'malo' : 'mnogo';

// let message;

// message = (login == 'sotrudnik') ? 'privet' :
//     (login == 'direktor') ? 'zdravstvuyte' :
//     (login == '') ? 'net logina' : '';

let userName;
document.getElementById('myBtn').onclick = function(){
    userName = document.getElementById('myInput').value;
    document.getElementById('myH1').textContent = `Welcome, ${userName}!`
}

document.getElementById('myBtn').ondblclick = function(){
    userName = document.getElementById('myInput').value;
    document.getElementById('p1').textContent = `«Ублюдок, ${userName}, мать твою, а ну, иди сюда, говно собачье, а? 
    Сдуру решил ко мне лезть, ${userName}, ты? Засранец вонючий, мать твою, а? 
    Ну, иди сюда, попробуй меня трахнуть — я тебя, ${userName}, сам трахну, 
    ублюдок, онанист чёртов, будь ты, ${userName}, проклят! 
    Иди, идиот, трахать тебя, ${userName}, и всю твою семью! 
    Говно собачье, жлоб вонючий, дерьмо, сука, падла! 
    Иди сюда, мерзавец, негодяй, гад! Иди сюда, ${userName}, говно, жопа!»`
};

///////-======================================================-/////////

const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const increaseBtn = document.getElementById('increaseBtn');
const countLabel = document.getElementById('countLabel');
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}

//////==================================================////////////

const inputRoll = document.getElementById('inputRoll');
const rollBtn = document.getElementById('rollBtn');
const rollLabel = document.getElementById('rollLabel');
let rollNum;
min = 10;
max = 100;

rollBtn.onclick = function(){
    rollNum = Math.floor(Math.random()* (max - min)) + min;
    rollLabel.textContent = rollNum;
}
// доделать как научусь --- ввод значения в инпут брать за мин и макс///ƒ

const myLabel = document.getElementById('myLabel');
const inputText = document.getElementById('inputText');
const ageSubmit = document.getElementById('ageSubmit');
const ageText = document.getElementById('ageText');

ageSubmit.onclick = function(){
    age = inputText.value;
    age = Number(age);

    if(age >= 100){
        ageText.textContent = 'Stariy';
    } else if(age == 0){
        ageText.textContent = '0 let'
    } else if(age <= 18){
        ageText.textContent = 'Rebenok'
    } else {
        ageText.textContent = 'Norm chel'
    }
}

//////===================+=======================/////////////////

const myCheckBox = document.getElementById('myCheckBox');
const visaBtn = document.getElementById('visaBtn');
const masterCardBtn = document.getElementById('masterCardBtn');
const payPalBtn = document.getElementById('payPalBtn');
const submitPay = document.getElementById('submitPay');
const subResult = document.getElementById('subResult');
const paymentResult = document.getElementById('paymentResult');

submitPay.onclick = function(){

    if(myCheckBox.checked) {
        subResult.textContent = 'You are subscribed';
    } else {
        subResult.textContent = 'You are NOT subscribed';
    }
    if(visaBtn.checked) {
        paymentResult.textContent = 'You are paying Visa';
    } else if(masterCardBtn.checked) {
        paymentResult.textContent = 'You are paying MasterCard';
    } else if(payPalBtn.checked) {
        paymentResult.textContent = 'You are paying PayPal';
    } else {
        paymentResult.textContent = 'You are NOT paying';
    }
}

/////==================================================////////////////


