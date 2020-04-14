(function () {

var names = ["Swati", "Jay", "john", "Jacky", "Pari", "Jimmy", "Harshit", "jinny","parul","pooja"];
  
for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0);
  if (firstLetter === 'j' || firstLetter === 'J') {
   goodreplace(names[i]);
  } else {
    helloreplace(names[i]);
  }
}

})();
