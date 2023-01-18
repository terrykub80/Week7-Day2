// console.log('Hello this is the objectCreation.js');

// /*
//     JavaScript Object and Prototypes
// */

// let person = {};
// console.log(person);
// console.log(typeof person);

// person.name = 'Jack';
// person.age = 32;
// person.favColor = 'green';

// console.log(person);

// // Bracket Notation
// console.log(person['age']);
// // Dot Notation
// console.log(person.favColor);
// // Both
// console.log(`${person.name} is ${person['age']} years old`)

// let person2 = {
//     name: 'Liz',
//     age: 24,
//     languages: ['JavaScript', 'Python'],
//     teams: {
//         mlb: 'Phillies',
//         nfl: 'Eagles',
//         nba: '76ers'
//     }
// };

// console.log(person2);
// person2.languages.forEach(lang => console.log(lang));

// let person3 = {
//     name: 'Jeeves',
//     sayHello: function(){console.log(`Hello ${this.name}`)}
// }

// console.log(person3);
// console.log(person3.sayHello);

// person3.sayHello();

// console.clear();

// **************************************************************************************************************************

/*
    JavaScript Object Instantiation -> Class Instantiation
*/

// let animal = {};
// animal.name = 'Buddy';
// animal.energy = 10;

// animal.eat = function(amount){
//     this.energy += amount;
//     console.log(`${this.name} is eating ${amount} and energy is now ${this.energy}`);
// };

// animal.sleep = function(amount){
//     this.energy += amount;
//     console.log(`${this.name} is sleeping ${amount} and energy is now ${this.energy}`);
// };

// animal.play = function(amount){
//     this.energy -= amount;
//     console.log(`${this.name} is playing ${amount} and energy is now ${this.energy}`);
// };


// console.log(animal);

// animal.eat(10);
// animal.play(15);
// animal.sleep(20);

// console.log(animal);

//////////////////////////
// Function Instantiation //
//////////////////////////

// function Animal(name, energy=10){
//     let animal = {};
//     animal.name = name;
//     animal.energy = energy;
//     console.log(`${name} wakes up with ${energy} energy`)
    
//     animal.eat = function(amount){
//         this.energy += amount;
//         console.log(`${this.name} is eating ${amount} and energy is now ${this.energy}`);
//     };
    
//     animal.sleep = function(amount){
//         this.energy += amount;
//         console.log(`${this.name} is sleeping ${amount} and energy is now ${this.energy}`);
//     };
    
//     animal.play = function(amount){
//         this.energy -= amount;
//         console.log(`${this.name} is playing ${amount} and energy is now ${this.energy}`);
//     };

//     return animal
// }

// let buddy = Animal('Buddy');
// buddy.eat(10);
// buddy.play(5);
// buddy.sleep(10);    

// let leo = Animal('Leo', 20);
// leo.eat(12);
// leo.play(13);
// leo.sleep(21);

// //////////////////////////////////////////////
// // Function Instantiation with Shared Methods //
// //////////////////////////////////////////////

// let animalMethods = {
//     eat: function(amount){
//         console.log(`${this.name} has ${this.energy} energy`)
//         this.energy += amount;
//         console.log(`${this.name} is eating ${amount} and energy is now ${this.energy}`);
//     },
//     sleep: function(amount){
//         console.log(`${this.name} has ${this.energy} energy`)
//         this.energy += amount;
//         console.log(`${this.name} is sleeping ${amount} and energy is now ${this.energy}`);
//     },
//     play: function(amount){
//         console.log(`${this.name} has ${this.energy} energy`)
//         this.energy -= amount;
//         console.log(`${this.name} is playing ${amount} and energy is now ${this.energy}`);
//     }
// }

// function Animal(name, energy=10){
//     let animal = {};
//     animal.name = name;
//     animal.energy = energy;
    
//     animal.eat = animalMethods.eat
    
//     animal.sleep = animalMethods.sleep
    
//     animal.play = animalMethods.play

//     return animal
// }

// let buddy = Animal('Buddy');
// buddy.eat(10);
// buddy.play(5);
// buddy.sleep(10);    

// let leo = Animal('Leo', 20);
// leo.eat(5);
// leo.play(20);
// leo.sleep(15);


//****************************************************************************/

//////////////////
// Object.create//
//////////////////

// let parent = {
//     first: 'Margaret',
//     last: "O'Reilly",
//     heritage: 'Irish'
// };

// console.log(parent);
// console.log(parent.first);
// console.log(parent.last);
// console.log(parent.heritage);

// let child = Object.create(parent);
// child.first = 'Seamus';
// child.toy = "GI Joe"
// console.log(child);
// console.log(child.first);
// console.log(child.last);
// console.log(child.heritage);
// console.log(child.toy);

// console.log("-----------------------")
// // child can inherit parent functions
// let parentObj = {
//     name: 'David',
//     getInfo: function(){console.log(`Hello my name is ${this.name}`)}
// }

// let childObj = Object.create(parentObj);
// childObj.name = 'Fred';

// console.log(childObj)
// childObj.getInfo();

// console.clear();

//****************************************************************************/

// //////////////////////////////////////////////////////////////////
// // Function Instantiation with Shared Methods and Object.create //
// //////////////////////////////////////////////////////////////////

let animalMethods = {
    eat: function(amount){
        this.energy += amount;
        console.log(`${this.name} is eating ${amount} and energy is now ${this.energy}`);
    },
    sleep: function(amount){
        this.energy += amount;
        console.log(`${this.name} is sleeping ${amount} and energy is now ${this.energy}`);
    },
    play: function(amount){
        this.energy -= amount;
        console.log(`${this.name} is playing ${amount} and energy is now ${this.energy}`);
    }
}

function Animal(name, energy=10){
    let animal = Object.create(animalMethods);
    animal.name = name;
    animal.energy = energy;

    return animal
}

let buddy = Animal('Buddy');
buddy.eat(10);
buddy.play(5);
buddy.sleep(10);    

let leo = Animal('Leo', 20);
leo.eat(5);
leo.play(20);
leo.sleep(15);

// // Function prototype
// function doNothing(){};
// console.log(doNothing.prototype)
// console.log(typeof doNothing.prototype);

// //////////////////////////////
// // Prototypal Instantiation //
// //////////////////////////////

// // function Animal(name, energy=10){
// //     let animal = Object.create(Animal.prototype);
// //     animal.name = name;
// //     animal.energy = energy;

// //     return animal
// // }

// // Animal.prototype.eat = function(amount){
// //     this.energy += amount;
// //     console.log(`${this.name} is eating and energy is now ${this.energy}`);
// // }

// // Animal.prototype.sleep = function(amount){
// //     this.energy += amount;
// //     console.log(`${this.name} is sleeping and energy is now ${this.energy}`);
// // }

// // Animal.prototype.play = function(amount){
// //     this.energy -= amount;
// //     console.log(`${this.name} is playing and energy is now ${this.energy}`);
// // }

// // let buddy = Animal('Buddy');
// // buddy.eat(10);
// // buddy.play(5);
// // buddy.sleep(10);    

// // let leo = Animal('Leo', 20);
// // leo.eat(5);
// // leo.play(20);
// // leo.sleep(15);




// ///////////////////////////////////
// // Pseudoclassical Instantiation //
// ///////////////////////////////////

// // function Animal(name, energy=10){
// //     // let animal = Object.create(Animal.prototype);
// //     this.name = name;
// //     this.energy = energy;

// //     // return animal
// // }

// // Animal.prototype.eat = function(amount){
// //     this.energy += amount;
// //     console.log(`${this.name} is eating and energy is now ${this.energy}`);
// // }

// // Animal.prototype.sleep = function(amount){
// //     this.energy += amount;
// //     console.log(`${this.name} is sleeping and energy is now ${this.energy}`);
// // }

// // Animal.prototype.play = function(amount){
// //     this.energy -= amount;
// //     console.log(`${this.name} is playing and energy is now ${this.energy}`);
// // }

// // let buddy = new Animal('Buddy');
// // buddy.eat(10);
// // buddy.play(5);
// // buddy.sleep(10);    

// // let leo = new Animal('Leo', 20);
// // leo.eat(5);
// // leo.play(20);
// // leo.sleep(15);

// /////////////////////////////////////
// // ECMAScript 2015 - class keyword //
// /////////////////////////////////////

// class Animal{
//     constructor(name, energy=10){
//         this.name = name;
//         this.energy = energy;
//     }
    
//     eat(amount){
//         this.energy += amount;
//         console.log(`${this.name} is eating and energy is now ${this.energy}`);
//     }
    
//     sleep(amount){
//         this.energy += amount;
//         console.log(`${this.name} is sleeping and energy is now ${this.energy}`);
//     }

//     play(amount){
//         this.energy -= amount;
//         console.log(`${this.name} is playing and energy is now ${this.energy}`);
//     }
// }

// let buddy = new Animal('Buddy');
// buddy.eat(10);
// buddy.play(5);
// buddy.sleep(10);    

// let leo = new Animal('Leo', 20);
// leo.eat(5);
// leo.play(20);
// leo.sleep(15);

// let myCoolArr = [];
// let myCoolerArr = new Array();

// console.log(myCoolArr);
// console.log(myCoolerArr);
