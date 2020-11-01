var array = ["It makes ", "literally ", "no sense ", "that ", "Dan was ", "Gossip Girl ", "like what ", "was that "];
var sentence = "";

for (x = 0; x < array.length; x++) {
  sentence += (array[Math.floor(Math.random() * array.length)]);
}

console.log(sentence);
