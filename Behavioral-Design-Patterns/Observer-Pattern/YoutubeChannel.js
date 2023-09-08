"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YoutubeChannel = void 0;
// The Concrete Subject
var YoutubeChannel = /** @class */ (function () {
    function YoutubeChannel(_state) {
        if (_state === void 0) { _state = ""; }
        this.state = _state;
        this.subscribers = new Array();
    }
    YoutubeChannel.prototype.register = function (observer) {
        this.subscribers.push(observer);
    };
    YoutubeChannel.prototype.unregister = function (observer) {
        this.subscribers.splice(this.subscribers.indexOf(observer), 1);
    };
    YoutubeChannel.prototype.notify = function () {
        this.subscribers.forEach(function (item) { return item.update(); });
    };
    YoutubeChannel.prototype.getState = function () {
        return this.state;
    };
    YoutubeChannel.prototype.setState = function (_state) {
        this.state = _state;
    };
    return YoutubeChannel;
}());
exports.YoutubeChannel = YoutubeChannel;
