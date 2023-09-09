import { YoutubeChannel } from "./YoutubeChannel";
import { YoutubeSubscriber } from "./YoutubeSubscriber";

let jakesYTChannel = new YoutubeChannel();
let someOtherYTChannel = new YoutubeChannel();

let subscriberOne = new YoutubeSubscriber(jakesYTChannel);
let subscriberTwo = new YoutubeSubscriber(jakesYTChannel);
let subscriberThree = new YoutubeSubscriber(someOtherYTChannel);

console.log("subscriberOne: " + subscriberOne.logStatus());
console.log("subscriberTwo: " + subscriberTwo.logStatus());
console.log("subscriberThree: " + subscriberThree.logStatus() + '\n');

jakesYTChannel.setState("I made MY FIRST EVER Youtube video!");
jakesYTChannel.notify();

someOtherYTChannel.setState("This is my first and last video :)");
someOtherYTChannel.notify();

console.log("subscriberOne: " + subscriberOne.logStatus());
console.log("subscriberTwo: " + subscriberTwo.logStatus());
console.log("subscriberThree: " + subscriberThree.logStatus() + '\n');

jakesYTChannel.setState("I'm no longer making Youtube videos :( NOT CLICKBAIT");
jakesYTChannel.notify();

console.log("subscriberOne: " + subscriberOne.logStatus());
console.log("subscriberTwo: " + subscriberTwo.logStatus());
console.log("subscriberThree: " + subscriberThree.logStatus() + '\n');

jakesYTChannel.unregister(subscriberTwo);

jakesYTChannel.setState("I #UNRETIRED AND IM BACK");
jakesYTChannel.notify();

console.log("subscriberOne: " + subscriberOne.logStatus());
console.log("subscriberTwo: " + subscriberTwo.logStatus());
console.log("subscriberThree: " + subscriberThree.logStatus());