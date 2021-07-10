//importamos los modulos que necesitamos

const moment = require('moment')

module.exports.fechaCool = function () {
    let fecha = new moment("31/12/2021", "DD/MM/YYYY")
    let formateada = fecha.format("MM/DD/YYYY")
    return formateada
}