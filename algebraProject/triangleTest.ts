import { Triangle } from "./triangle";
import { Point } from './point';



let vertex1 = new Point(0, 0);
let vertex2 = new Point(5, 0);
let vertex3 = new Point(0, 5);

let triangulo = new Triangle(vertex1, vertex2, vertex3);

let longitudLados = triangulo.calculateLengthSides();
console.log(longitudLados);

