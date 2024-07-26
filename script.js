"use strict";

const person = {
    firstName: "Anna",
    lastName: "Karenina",
    age: 32,
    sayHello(country) {
         console.log(`Hello I am ${person.firstName} ${person.lastName}, I am ${person.age}, from ${country}.`)
    }
};


const countOfFilms = +prompt("Քանի՞ ֆիլմ եք վերջերս դիտել");

const DB = {g
    count: countOfFilms,
    movies: {},
    actors: {},
    geners: [],
    private: false
};

const a = prompt("Ո՞ր ֆիլմն եք վերջերս դիտել");
const b = prompt("Ինչքան՞ եք գնահատում այդ ֆիլմը");

DB.movies[a] = b;
console.log(DB);

 