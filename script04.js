function gossipGirl(str) {
  if (str == "Serena" || str == "serena") {
    return "van der Woodsen";
  } else if (str == "Blair" || str == "blair") {
    return "Waldorf";
  } else {
    return "It makes literally no sense that Dan was Gossip Girl like what was that"
  }
}

console.log(gossipGirl("serena"));
console.log(gossipGirl("Blair"));
console.log(gossipGirl("Dan"));
