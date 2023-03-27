"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
var Triangle = /** @class */ (function () {
    function Triangle(vertex1, vertex2, vertex3) {
        this.vertex1 = vertex1;
        this.vertex2 = vertex2;
        this.vertex3 = vertex3;
    }
    Triangle.prototype.calculateLengthSides = function () {
        var longitudlado1 = this.vertex1.calculateDistance(this.vertex2);
        var longitudlado2 = this.vertex2.calculateDistance(this.vertex3);
        var longitudlado3 = this.vertex3.calculateDistance(this.vertex1);
        return [longitudlado1, longitudlado2, longitudlado3];
    };
    return Triangle;
}());
exports.Triangle = Triangle;
