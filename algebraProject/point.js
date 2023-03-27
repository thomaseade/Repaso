"use strict";
// Clase Point //
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    Point.prototype.setX = function (x) {
        this.x = x;
    };
    Point.prototype.setY = function (y) {
        this.y = y;
    };
    Point.prototype.toString = function () {
        return "(".concat(this.x, ",").concat(this.y, ")");
    };
    // Método de Distancias //
    Point.prototype.distanceToOrigin = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    Point.prototype.calculateDistance = function (anotherPoint) {
        var dx = this.x - anotherPoint.getX();
        var dy = this.y - anotherPoint.getY();
        return Math.sqrt(dx * dx + dy * dy);
    };
    // calcular cuadrante //
    Point.prototype.calcularQuadrant = function () {
        if (this.x === 0 || this.y === 0) {
            return 0;
        }
        else if (this.x > 0 && this.y > 0) {
            return 1;
        }
        else if (this.x < 0 && this.y > 0) {
            return 2;
        }
        else if (this.x < 0 && this.y < 0) {
            return 3;
        }
        else {
            return 4;
        }
    };
    // Punto cercano // 
    Point.prototype.calculateNearest = function (points) {
        var puntocercano = points[0];
        var distanciacorta = this.calculateDistance(puntocercano);
        for (var i = 1; i < points.length; i++) {
            var distance = this.calculateDistance(points[i]);
            if (distance < distanciacorta) {
                distanciacorta = distance;
                puntocercano = points[i];
            }
        }
        return puntocercano;
    };
    return Point;
}());
exports.Point = Point;
