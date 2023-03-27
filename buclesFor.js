"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
function evenNumbers(num) {
    for (var i = 2; i <= num; i += 2) {
        console.log(i);
    }
}
evenNumbers(10);
function myRevert(myArr) {
    var ArrRevertido = [];
    for (var i = myArr.length - 1; i >= 0; i--) {
        ArrRevertido.push(myArr[i]);
    }
    return ArrRevertido;
}
var myArr = [5, 8, 12, 15, 17, 20];
var ArrRevertido = myRevert(myArr);
console.log(ArrRevertido);
function isRainbow(colors) {
    var colores = ["rojo", "naranja", "amarillo", "verde", "azul", "añil", "violeta"];
    for (var i = 0; i < colors.length; i++) {
        var color = colors[i];
        if (colores.includes(color)) {
            console.log((color) + "esta en el arcoiris");
        }
        else {
            console.log((color) + "no esta en el arcoiris");
        }
    }
}
;
var colors = ["rojo", "naranja", "purpura"];
isRainbow(colors);
function add(myWords) {
    var suma = 0;
    for (var i = 0; i < myWords.length; i++) {
        suma += myWords[i].length;
    }
    return suma;
}
exports.add = add;
var palabras = ["pantalla", "teclado", "raton", "cable"];
var sumaDeCaracteres = add(palabras);
console.log(sumaDeCaracteres);
