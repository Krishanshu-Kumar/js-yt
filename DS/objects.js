const sym1= Symbol("F");

const person = {

    name: "Alice",
    age: 19,
    isStudent: false,
    
    address:{

        street:"123 Main Street",
        city:"New York",
        country:"USA"
    } 
};

//console.log(person.address.city);
//console.log(person);

// console.table(person);

// console.log(person['age']);
// console.log(`The name of the Person is ${person['name']} whose age is ${person['age']}`);


// console.log("name" in person);
// console.log("salary" in person);

const student = {

    fullname: {

        fname: "Bruce",
        lname: "Wayne"
    },

    age: 20,
    address:{

        street: "224 Park Drive",
        city: "Gotham city",

    },

    greet (){

        console.log(`Hello ! This is ${this.fullname.lname}`);
    }
}

// console.log("networth" in student);
// console.log("address" in student);


// for(let key in student){

//     console.log(`${key}`);
//     console.log(`${student[key]}`);

// }

// console.log(Object.keys(student));   
// console.log(Object.values(person));
// console.log(Object.entries(student)); 

console.log(student["greet"]);
console.log(student.greet());

student.contact={

    email: "bruceWayne@example.com",
    phone: "123-456-7890"
}

// console.table(student);
// console.log(student);

