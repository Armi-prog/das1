
"use strict";

const countOfFilms = +prompt("Քանի՞ ֆիլմ եք վերջերս դիտել");

const DB = {
    count: countOfFilms,
    movies: {},
    actors: {},
    geners: [],
    status: null,
    private: false
};

for (let i = 0; i < 2; i++) {
    const filmName = prompt("Ո՞ր ֆիլմն եք վերջերս դիտել");
    const filmRate = +prompt(`Ինչքան՞ եք գնահատում ${filmName} ֆիլմը`);

    if(filmName != null && filmRate != null && filmName != "" && filmRate != "" ) {
        DB.movies[filmName] = filmRate;
        console.log("Resolve");
    }
        else {
            console.log("Reject");
            i--;
        }

}

if (DB.count < 10) {
    DB.status = "Դուք բավականին քիչ ֆիլմ եք դիտել";
} else if (DB.count >= 10 && DB.count < 30) {
    DB.status = "Դուք դասական ֆիլմ դիտող եք";
} else if (DB.count >= 30) {
    DB.status = "Դուք կինոման եք";
} else {
    console.log("Տեղի է ունեցել սխալ");
}

console.log(DB);