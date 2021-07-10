//importar nuestros mudulos y los modulos que vamos a utilizar
//Modulos NodeJs
const server = require('http');
require('dotenv').config();

//Modulos propios
const {Chuky} = require('./modulos/librerias')
const librerias = require('./modulos/libMoment')

//Crear nuestra funcion de request
async function request (req,res) {
    //Devuelva es un html con la imagen, la frace y un titulo que yo le voy a colocar
    const result = await Chuky.getChuck();
    let resultado = `<h1>Devolviedo los datos de la API de Chuk con NodeJs</h1> <br> <p>${result.data.value}</p> <br> <img src='${result.data.icon_url}'>`

    // res.writeHead(200, {'content-Type' : 'application/json'});
    // res.write(JSON.stringify(result.data))
    // res.end()

    res.writeHead(200, {'content-Type' : 'text/html'});
    res.write(librerias.fechaCool())
    res.end()
}

//Instanciar y levantar nuestro servidor.
const servidor = server.createServer(request);
servidor.listen(process.env.PORT, process.env.HOST, ()=> {
    console.log(`Servidor inciado en http://${process.env.HOST}:${process.env.PORT}`)
})