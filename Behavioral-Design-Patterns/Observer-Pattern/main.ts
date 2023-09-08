import { YoutubeChannel } from "./YoutubeChannel";
import { YoutubeSubscriber } from "./YoutubeSubscriber";

let jakesYTChannel = new YoutubeChannel();

let subscriberOne = new YoutubeSubscriber(jakesYTChannel);
jakesYTChannel.register(subscriberOne);
let subscriberTwo = new YoutubeSubscriber(jakesYTChannel);
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