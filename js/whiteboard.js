console.log('hello')

function friend(friends){
    var sure = [];
    for (let person of friends){
      if (person.length === 4){
            sure.push(person);  
        };
    };
    return sure;
};

console.log(friend(["Ryan", "Kieran", "Mark"]))

console.clear()

