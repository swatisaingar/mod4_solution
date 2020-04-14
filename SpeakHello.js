(function () {
var helloSpeaker = {};
var speakWord = "Hello";
helloSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
}
this.helloSpeaker = helloSpeaker;
})();
