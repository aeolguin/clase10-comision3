//importamos las librerias
const fetch = require('node-fetch')

//exportamos nuestras librerias

class Chuky {
    //Usamos un constructor para nuestra clase
    constructor(data) {
        this.data = data
    }

    //Armar los metodos que vamos a utilizar
    static async getChuck () {
        let Chuck

        const url = "https://api.chucknorris.io/jokes/random"
        //procces.env.URLAPI
        const resp = await fetch(url);
        const data = await resp.json();
        Chuck = new Chuky(data)
        return Chuck
    }

}

module.exports = {Chuky}

