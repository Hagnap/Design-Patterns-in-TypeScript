"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YoutubeSubscriber = void 0;
var YoutubeSubscriber = /** @class */ (function () {
    function YoutubeSubscriber(_subject) {
        this.subject = _subject;
        this.state = this.subject.getState();
    }
    YoutubeSubscriber.prototype.update = function () {
        this.state = this.subject.getState();
    };
    YoutubeSubscriber.prototype.logStatus = function () {
        return this.state;
    };
    return YoutubeSubscriber;
}());
exports.YoutubeSubscriber = YoutubeSubscriber;
