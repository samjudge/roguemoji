"use strict";
exports.__esModule = true;
var VectorComponent_1 = require("./VectorComponent");
var Vector2d = /** @class */ (function () {
    function Vector2d(x, y) {
        this.x = new VectorComponent_1["default"](x);
        this.y = new VectorComponent_1["default"](y);
    }
    return Vector2d;
}());
exports["default"] = Vector2d;
