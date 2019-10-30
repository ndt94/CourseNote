"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersColletion = /** @class */ (function () {
    function NumbersColletion(data) {
        this.data = data;
    }
    Object.defineProperty(NumbersColletion.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    NumbersColletion.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    };
    NumbersColletion.prototype.swap = function (leftIndex, rightIndex) {
        var leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    };
    return NumbersColletion;
}());
exports.NumbersColletion = NumbersColletion;
