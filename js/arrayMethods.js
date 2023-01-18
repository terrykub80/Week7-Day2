console.log("Hello from arrayMethods.js");


/*
    Array Methods
*/

// Create an array with which we will work
let names = ['Jane', 'Mike', 'Anthony', 'Bruce', 'Katie', 'Matt'];

// Basic Looping
console.log('=========Basic Looping============')
for (let i=0; i < names.length; i++){
    console.log(i, names[i]);
};

console.log('=========for...of loop============')

// for...of loop
for (let name of names){
    console.log(name);
};
console.log('==========.forEach ** built in loop **===========')
console.log('==========Syntax: Array.prototype.forEach(callbackFn)**===========')


// .forEach ** built in loop **
// Syntax: Array.prototype.forEach(callbackFn)************
names.forEach(e => console.log(e));

console.log('========CALLBACK FUNCTION=============')

//      CALLBACK FUNCTION
function logInfo(element, idx, arr){
    console.log(element, idx, arr)
};


names.forEach(logInfo);

console.log('===MAP FUNCTION===');

//      MAP FUNCTION

names.forEach(name => console.log(name.toUpperCase()))


console.log('===Syntax: array.prototype.map()===');


// Syntax: array.prototype.map()
function mapCallBack(element, index){
    if (index % 2 === 0){
        return element.toUpperCase();
    } else {
        return element.toLowerCase();
    };
};

let newNames = names.map(mapCallBack);
console.log('***newNames***');
console.log(newNames);
console.log('***names***');
console.log(names);
console.log('******');


console.log('===As Arrow Function===');
// As Arrow Function
let newerNames = names.map((e, i) => i%2 === 0 ? e.toUpperCase() : e.toLowerCase() );
console.log(newerNames);

console.log('====Array.prototype.filter()=====');
// Array.prototype.filter()
let cities = ['Chicago', 'Boston', 'Chattanooga', 'Baton Rouge', 'Champaign', 'Denver'];
console.log(cities);

function startsWithC(cityName){
    return cityName[0].toUpperCase() === 'C';
};

let cNameCitiesMap = cities.map(startsWithC);
console.log(cNameCitiesMap);

let cNameCitiesFilter = cities.filter(startsWithC);
console.log(cNameCitiesFilter);

console.log('====As Arrow Function=====');
// As Arrow Function
let bNameCities = cities.filter(city => city[0].toUpperCase() === 'B');
console.log(bNameCities);

console.log('====filter takes the boolean value of the return=====');
// filter takes the boolean value of the return
let randomFilter = cities.filter((e, i) => i%3 === 0 ? 'hello world' : '');
console.log(randomFilter);


console.log('====Array.prototype.concat()=====');
// Array.prototype.concat()
let arrA = [1, 2, 3];
let arrB = [4, 5, 6];

console.log('***does not concat, just joins***');
let arrD = (arrA + arrB)
console.log(arrD);
console.log(typeof arrD);

console.log('***does concat***');
let arrC = arrA.concat(arrB);
console.log(arrC);
console.log(typeof arrC);

console.log('====Array.prototype.includes()=====');
// Array.prototype.includes()
let fruits = ['orange', 'apple', 'banana', 'pear', 'watermelon', 'banana'];

console.log(fruits.includes('orange')); // .includes will check if the element is in the array
console.log(fruits.includes('mango'));
console.log('apple' in fruits); // in operator - checks to see if the object has that property
console.log('2' in fruits);
console.log(fruits);

console.log('====Array.prototype.indexOf()=====');
// Array.prototype.indexOf()
console.log(fruits.indexOf('watermelon'));
console.log(fruits.indexOf('mango'));
console.log(fruits.indexOf('banana', 3));

console.log('====Array.prototype.join()=====');
// Array.prototype.join()
let myArrName = ['B', 'r', 'i', 'a', 'n'];

console.log(myArrName.join());
console.log(myArrName.join(''));
console.log(myArrName.join('-'));

console.log('====Array.prototype.push() -- equivalent to the list.append in python=====');
// Array.prototype.push() -- equivalent to the list.append in python
console.log(fruits.push('mango'));
console.log(fruits);

fruits.push('pineapple', 'strawberry');
console.log(fruits);

let empty = []
let numberOfElements = empty.push('Hello')
console.log(numberOfElements);
console.log(empty);

console.log('====Array.prototype.pop()=====');
// Array.prototype.pop()
const lastFruit = fruits.pop();
console.log(lastFruit);
console.log(fruits);

console.log('=====Array.prototype.reverse()====');
// Array.prototype.reverse()
console.log(cities);
cities.reverse();
console.log(cities);
cities.reverse();
console.log(cities);

console.log('====Array.prototype.slice()=====');
// Array.prototype.slice()
console.log('Array Slice:')
console.log(fruits);
console.log(fruits.slice()); // fruits[:] in python 
console.log(fruits.slice(2)); // fruits[2:] in python
console.log(fruits.slice(2, 5)); // fruits[2:5] in python
console.log(fruits.slice(0,-2));
console.log(fruits.slice(0, 2)); // fruits[:2] in python



console.log('=====Array.prototype.splice()====');
// Array.prototype.splice()
console.log('Array Splice:')
console.log(fruits)
fruits.splice(2, 0, 'kiwi');
console.log(fruits);

let newArr = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(newArr);
newArr.splice(3, 3, 10, 20, 30);
console.log(newArr);
console.log(newArr.slice(2, 5))

console.log('=====Array.prototype.sort()====');
// Array.prototype.sort()
let unsorted = [23, -1, 10, 3, 5, -7, 2, 5, 'hello'];
console.log(`Sort: [23, -1, 10, 3, 5, -7, 2, 5, 'hello']`);
unsorted.sort();
console.log(unsorted);

let newUnsorted = [9, 70, 61, 5, 8, -10, 15];

function compareFunc(a, b){
    console.log('A:', a, 'B:', b)
    if (a>b){
        return 1
    } else if (a < b){
        return -1
    } else {
        return 0
    }
}


console.log(newUnsorted);
newUnsorted.sort(compareFunc);
console.log(newUnsorted);

console.log('====To sort by number value=====');
// To sort by number value
let anotherUnsorted = [23, 32, 1, -1, 65, 8, 97];
console.log(anotherUnsorted);
anotherUnsorted.sort((a, b) => a-b);
console.log(anotherUnsorted);