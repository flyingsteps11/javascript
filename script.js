//1.Написать функцию, которая на вход принимает целое число и возвращает факториал этого числа.
function factorial(n){
  let fact=1;
  for(let i=1; i<=n; i++){
    fact=fact*i;
  }
  return fact;
}
console.log(factorial(5));

//2.Написать функцию, которая на вход принимает строку и возвращает длину самого
//длинного слова в этой строке.
function findLongestWord(str){
  var strSplit = str.split(' ');
  var longestWord = 0;
  for(var i=0; i<strSplit.length;i++){
    if(strSplit[i].length >longestWord){
      longestWord = strSplit[i].length;
    }
  }
  return longestWord;
}
console.log(findLongestWord("11 ss str 21 400000 ss"));

//3. Написать функцию, которая на вход принимает массив, состоящий из массивов целых
//чисел (например: [[1, 2, 3], [4, 5], [6, 7, 8, 9]]) и возвращает массив состоящий из
//наибольшего числа каждого предоставленного подмассива
function arrayOfLargestNum(mas){
  let res = [];
  for(let i=0; i<mas.length; i++){
    let ln=0;
    for(let j=0; j<mas[i].length; j++){
      if(mas[i][j]>ln)
        ln=mas[i][j];
    }
    res.push(ln);
  }
  return res;
}

console.log(arrayOfLargestNum([[1, 2, 3], [4, 5], [6, 7, 8, 9]]));
/*
function arrayOfLargestNum1(mas){
  return mas.map(m => Math.max.apply(null, m))
}

console.log(arrayOfLargestNum1([[1, 2, 8, 8, 3], [4, 5], [6, 7, 8, 9]]));
*/
//4.Написать функцию, которая на вход принимает строку и целое число и обрезает строку
//(первый аргумент), если она длиннее заданной максимальной длины строки (второй
//аргумент) и возвращает обрезанную строку с «…» в конце.
function shortWord(str, num){
    return str.length > num? str.slice(0, num-1) + "…": str;
}
console.log("1)");
console.log(shortWord("машина", 3));

//5. Написать функцию, которая на вход принимает строку и возвращает эту строку в
//формате: каждое слово начинается с заглавной буквы, остальные в нижнем регистре.
function wordsUpperсase(str){
    return str.split(" ").map(word => word.charAt(0).toUpperсase() + word.slice(1)).join(' ');
}
console.log("4)");
console.log(wordsUppercase("как правильно Использовать значения, я"));
6.//Написать функцию, которая на вход принимает два массива и целое число n. Функция
//должна скопировать каждый элемент первого массива во второй по порядку начиная с
//индекса n второго массива и вернуть полученный массив. Входные массивы не должны
//изменяться. (например: при входных данных ([1, 2, 3], [4, 5], 1) должно вернуться [4, 1, 2,
//3, 5].

function coppyArray(mas1,mas2 ,n){
    arr=[];
    return arr.concat(mas2.slice(0,n), mas1, mas2.slice(n, mas1.length));
}
console.log(coppyArray([1,2,3],[4,5],1));

//7.Написать функцию, которая на вход принимает массив и удаляет в нем все "ложные
//значения" (https://developer.mozilla.org/ru/docs/
//%D0%A1%D0%BB%D0%BE%D0%B2%D0%B0%D1%80%D1%8C/Falsy)
function arrayWithoutFalsy(mas){
    return mas.filter(Boolean);
}
console.log(arrayWithoutFalsy([32,21, '', null, 'Misha', undefined, 0]));

//8. Написать функцию, которая на вход принимает массив, состоящий из двух строк.
//Функция должна вернуть true, если строка в первом элементе массива содержит все
//буквы строки во втором элементе массива (регистр игнорируется).
function stringLetters(mas){
    return mas[1].toUpperCase().split('')
        .every(val => mas[0].toUpperCase().split('').includes(val));
}
console.log(stringLetters(["GoThem", "go"]));
//9.Написать функцию которая на вход принимает масссив и целое число. Функция должна
//разбить массив (первый аргумент) на группы длиной size (второй агрумент) и вернуть их
//в виде двумерного массива.
function breakArr(mas,size){
    let arr=[];
    while(mas.length>0){
        arr.push(mas.splice(0,size));
    }
    return arr;
}
console.log(breakArr([1,2,3,4,5,6],2));

//10.Используя рекурсию (без использования циклов). Написать функцию, которая
//принимает массив и целое число (n) и заполняет массив числами от n до 1.
function recursion(mas, n){
    mas.push(n);
    if (n>1) recursion(mas, n-1);
}
mas = [];
recursion(mas, 10);
console.log(mas);