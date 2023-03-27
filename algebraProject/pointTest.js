"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var point = new point_1.Point(2, 4);
var anotherPoint = new point_1.Point(12, 15);
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
var point1 = new point_1.Point(2, 2);
var point2 = new point_1.Point(5, 12);
var point3 = new point_1.Point(-10, 11);
var point4 = new point_1.Point(-5, -5);
var points = [point1, point2, point3, point4];
var puntoaComparar = new point_1.Point(1, 1);
var puntoMasCercano = puntoaComparar.calculateNearest(points);
console.log(puntoMasCercano);
