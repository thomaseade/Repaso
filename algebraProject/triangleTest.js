"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var triangle_1 = require("./triangle");
var point_1 = require("./point");
var vertex1 = new point_1.Point(0, 0);
var vertex2 = new point_1.Point(5, 0);
var vertex3 = new point_1.Point(0, 5);
var triangulo = new triangle_1.Triangle(vertex1, vertex2, vertex3);
var longitudLados = triangulo.calculateLengthSides();
console.log(longitudLados);
