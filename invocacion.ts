import { isEven } from "./condicionales";
import { add } from "./buclesFor";

let array1 = ["mesa", "silla", "sofa", "cama"];

let array2 = ["arbol", "planta", "cesped", "trigo"];

let array3 = ["casa", "feria", "salir", "entrar"];

let suma1 = add(array1);
let suma2 = add(array2);
let suma3 = add(array3);

isEven(suma1);
isEven(suma2);
isEven(suma3);