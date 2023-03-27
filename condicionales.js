"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEven = void 0;
function zodiac(day, month) {
    var signo = ["Capricornio", "Acuario", "Piscis", "Aries", "Tauro", "Géminis", "Cáncer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario", "Capricornio"];
    var fechas = [20, 19, 21, 20, 21, 21, 22, 23, 23, 23, 23, 22];
    var indiceSigno = month - 1;
    if (day >= fechas[indiceSigno]) {
        indiceSigno++;
    }
    return signo[indiceSigno];
}
console.log(zodiac(16, 6));
function continent(country) {
    var americaSur = ["argentina", "colombia", "chile"];
    var americaNorte = ["estaods unidos", "canada",];
    var asia = ["china", "tailandia", "korea"];
    var europa = ["españa", "alemania", "grecia"];
    var africa = ["marruecos", "egipto", "somalia"];
    var oceania = ["nueva zelanda", "australia"];
    if (americaSur.includes(country)) {
        return 'Sudamérica';
    }
    else if (americaNorte.includes(country)) {
        return 'Norteamérica';
    }
    else if (asia.includes(country)) {
        return 'Asia';
    }
    else if (europa.includes(country)) {
        return 'Europa';
    }
    else if (africa.includes(country)) {
        return 'África';
    }
    else if (oceania.includes(country)) {
        return 'Oceanía';
    }
    else {
        return 'Desconocido';
    }
}
var country = "marruecos";
console.log(continent(country));
function isEven(number) {
    if (number % 2 === 0) {
        console.log("es par");
    }
    else {
        console.log("es impar");
    }
}
exports.isEven = isEven;
isEven(19);
