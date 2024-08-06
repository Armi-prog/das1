
"use strict";

const DB = {
    count: 0,
    movies: {},
    actors: {},
    geners: [],
    status: null,
    private: false,
    init() {
        this.count = +prompt("Քանի՞ ֆիլմ եք վերջերս դիտել");
        while (this.count == "" || this.count == null || isNaN(this.count)) {
            this.count = +prompt("Քանի՞ ֆիլմ եք վերջերս դիտել");   
        }
    },
    rememberAndCreateUserFilms() {
        for (let i = 0; i < 2; i++) {
            const filmName = prompt("Ո՞ր ֆիլմն եք վերջերս դիտել");
            const filmRate = +prompt(`Ինչքան՞ եք գնահատում ${filmName} ֆիլմը`);
        
            if(filmName != null && filmRate != null && filmName != "" && filmRate != "" ) {
                this.movies[filmName] = filmRate;
                console.log("Resolve");
            }
                else {
                    console.log("Reject");
                    i--;
                }
        }
    },
    detectUserPersonalLevel() {
        if (this.count < 10) {
            this.status = "Դուք բավականին քիչ ֆիլմ եք դիտել";
        } else if (this.count >= 10 && this.count < 30) {
            this.status = "Դուք դասական ֆիլմ դիտող եք";
        } else if (this.count >= 30) {
            this.status = "Դուք կինոման եք";
        } else {
            console.log("Տեղի է ունեցել սխալ");
        }
    },
    checkDBPrivateStatus(state) {
        state ? console.log("Sorry but DB is not visible") : console.log(this);
    },
    userFavoriteGeners() {
        for (let i = 0; i < 2; i++) {
            this.geners.push(prompt(`Ձեր նախընտրելի ժանրը ${i + 1}`));
        }
    },
    startApp() {
      this.init();
      this.rememberAndCreateUserFilms();
      this.detectUserPersonalLevel();
      this.checkDBPrivateStatus(this.private);
      this.userFavoriteGeners();  
    }
};


DB.startApp();

