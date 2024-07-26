"use strict";

const countOfFilms = +prompt("Քանի՞ ֆիլմ եք վերջերս դիտել");

const DB = {
    count: countOfFilms,
    movies: {},
    actors: {},
    geners: [],
    private: false
};


for (let i = 0; 1 < 2; i++) {
    const filmName = prompt("Ո՞ր ֆիլմն եք վերջերս դիտել");
    const filmRate = +prompt(`Ինչքան՞ եք գնահատում ${filmName} ֆիլմը`);

    if(filmName != null && filmRate != null && filmName != "" && filmRate != "" && filmName.length < 50 ) {
        DB.movies[filmName] = filmRate;
        console.log("Resolve");
        else {
            console.log("Reject");
            i--;
        }
}


}



console.log(DB);

 