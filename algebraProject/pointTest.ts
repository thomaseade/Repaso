import { Point } from "./point";

let point = new Point(2, 4);
let anotherPoint = new Point (12, 15)


console.log(point.toString());

console.log(point.getX());

console.log(point.getY());



point.setX(3);

point.setY(5);



console.log(point.toString());

console.log(point.getX());

console.log(point.getY());



// distancias//

console.log(point.distanceToOrigin());

console.log(point.calculateDistance(anotherPoint));


// calcular cuadrante//

console.log(point.calcularQuadrant());



// punto cercano //

let point1 = new Point(2,2);
let point2 = new Point(5,12);
let point3 = new Point(-10,11);
let point4 = new Point(-5,-5);

let points = [point1, point2, point3, point4];

let puntoaComparar =  new Point(1,1);

let puntoMasCercano= puntoaComparar.calculateNearest(points);

console.log(puntoMasCercano);
