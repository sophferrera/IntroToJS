var array = ["It makes ", "literally ", "no sense ", "that ", "Dan was ", "Gossip Girl ", "like what ", "was that "];
var sentence = "";

for (x = 0; x < array.length; x++) {
  sentence += (array[Math.floor(Math.random() * array.length)]);
}

console.log(sentence);

//this kind of doesn't work the way I wanted it to but I don't know how to make the randomly chosen index every time
