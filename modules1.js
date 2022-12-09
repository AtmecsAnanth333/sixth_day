"use strict";
exports.__esModule = true;
exports.myclass = exports.myfunc = exports.x = void 0;
exports.x = "Hi there";
function myfunc() {
    console.log("Its me");
}
exports.myfunc = myfunc;
var myclass = /** @class */ (function () {
    function myclass(a, b) {
        var _this = this;
        this.add = function () {
            return (_this.a + _this.b);
        };
        this.a = a;
        this.b = b;
    }
    return myclass;
}());
exports.myclass = myclass;
