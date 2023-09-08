"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var YoutubeChannel_1 = require("./YoutubeChannel");
var YoutubeSubscriber_1 = require("./YoutubeSubscriber");
var jakesYTChannel = new YoutubeChannel_1.YoutubeChannel();
var subscriberOne = new YoutubeSubscriber_1.YoutubeSubscriber(jakesYTChannel);
jakesYTChannel.register(subscriberOne);
var subscriberTwo = new YoutubeSubscriber_1.YoutubeSubscriber(jakesYTChannel);
jakesYTChannel.register(subscriberTwo);
console.log("subscriberOne: " + subscriberOne.logStatus());
console.log("subscriberTwo: " + subscriberTwo.logStatus());
jakesYTChannel.setState("I made MY FIRST EVER Youtube video!");
jakesYTChannel.notify();
console.log("subscriberOne: " + subscriberOne.logStatus());
console.log("subscriberTwo: " + subscriberTwo.logStatus());
jakesYTChannel.setState("I'm no longer making Youtube videos :( NOT CLICKBAIT");
jakesYTChannel.notify();
console.log("subscriberOne: " + subscriberOne.logStatus());
console.log("subscriberTwo: " + subscriberTwo.logStatus());
