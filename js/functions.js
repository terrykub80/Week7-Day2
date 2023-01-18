console.log("Hello from functions.js");

console.log("===========================");



/*
    JS Functions!
*/

// Regularly Named Function
// Syntax: function funcName(){ code to execute whtn called }

function addNums(){
    let num1 = 10;
    let num2 = 20;
    return num1 + num2
};

console.log(addNums);

console.log(addNums());

console.log("========");

// Regularly Named Functions with paraameters
// Syntax: function funcName(param1, param2, etc){ code to execute whtn called }

function addNums2(num1, num2){
    console.log(num1, num2);
    return num1 + num2
};

console.log(addNums2);

console.log(addNums2(100, 200));

console.log("========");


//============Exercise #2 ============//
/*
Given the two array of numbers below, loop through them both individually and the sum all of the positives elements.

Example 1:
Input: [10, 12, -9, 3, -1, 0, 15] 
Output: 40
Explain: 10 + 12 + 3 + 15 = 40

Example 2:
Input: [3, 5, 7, 9, -10, 2, -22, -1] 
Output: 26

Note: if there is nothing to sum, the sum is default to 0.
*/

let numbers1 = [10, 12, -9, 3, -1, 0, 15] 


function addPostitives(numbers){
    let total = 0;
    for (let num of numbers){
        if (num > 0){
            total += num
        };
    };
    return total
};

console.log(addPostitives(numbers1))
console.log(addPostitives([10, 15, -9, 3, -1, 2, 15]))

console.log("========");


// Default Parameters
// Syntax: function funcName(param1, param2 = defaultValue){ code to execute }

function addNums3(num1, num2=100){
    return num1 + num2
};

console.log(addNums3(10));
console.log(addNums3(10,50));

console.log("=========");


// use Spread Operateor (...) to accept optional parameters
function acceptAll(x, ...all){
    console.log(x);
    console.log(all);
};

acceptAll('a', 'b', 'c', 'd')

console.log("========");


// Function Expressions
// var (let, const) nameOfVariable = function (){ code to execute }

var addSomeNums = function(){
    let num1 = 1000;
    let num2 = 9000;
    return num1 + num2
};

console.log(addSomeNums);
console.log(addSomeNums())

let addMoreNums = function(num1, num2){
    return num1 + num2
};

console.log(addMoreNums);
console.log(addMoreNums(500,1500))

console.log("========");


const anotherFunc = function someCoolName(a, b){
    return b - a
};

console.log(anotherFunc);
console.log(anotherFunc(10,25));

console.log("========");

// Arrow Function Expressions
// Syntax: () => { code to execute }
// Syntax: (param1, param2, etc.) => { code to execute }
// Syntax: param1 => { code to execute }
// Syntax: param1 => code to execute in one line return 


// Syntax: () => { code to execute }

var myFirstArrowFunction = () => {};
console.log(myFirstArrowFunction);
console.log(typeof myFirstArrowFunction);

console.log("========");


function subNums(num1, num2){
    return num2 - num1
};


// Convert to arrow -- remove function keyword and replace with arrow
// b/w params and {code}
var subNumsArrow = (num1, num2) => {
    return num2 - num1
};

console.log(subNumsArrow(10,25));


// If { code to execut } is one line with only a return, 
// you can remove {} and return

var subNumsArrow2 = (num1, num2) => num2 - num1;

console.log(subNumsArrow2(17,89));


console.log("========");


// If you only have one param you don't need the parens

var addTen = num => num + 10;
console.log(addTen(20));

console.log("====");

let colors = ['red', 'orange', 'yellow'];

function makeUpperCase(color){
    return color.toUpperCase()
};
console.log(colors.map(makeUpperCase));
// =
console.log(colors.map( c => c.toUpperCase() ));


// Ternary Operator
// (condition) ? value if True : value if False
// ** Python ternary: value_if_true if condition else value_if_false ** 

let doSomething = num => num % 2 === 0 ? num**2 : num/2

console.log(doSomething(10))
console.log(doSomething(15))

console.log("========");


//==================Exercise #1 ==========//
/*
    Given the array [1, 2, 3, 5, 6, 7],  finds the index of the first non-consecutive element in the array.
    It should log out 3 because the array at index 3 is 5 which is not consecutive.
*/




var firstNonConsecutive = anArr => {
    for (let i = 0; i < anArr.length -1; i++){
        if (anArr[i] + 1 !== anArr[i+1]){
            return i+1
        }
    }
    return -1
};

console.log(firstNonConsecutive([1, 2, 3, 5, 6, 7]))
console.log(firstNonConsecutive([10, 11, 12, 13]))



console.log("========");


// If returning an object in a one line arrow function expression,
// use parens around the object

const buildObj = (x, y) => [x,y]

console.log(buildObj(10, 20))
console.log(typeof buildObj(10, 20))

console.log("====");

const buildObj2 = (x, y) => ({a: x, b: y})

console.log(buildObj2(10, 20))
console.log(typeof buildObj2(10, 20))


console.log("========");








