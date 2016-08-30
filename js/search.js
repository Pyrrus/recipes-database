// make the object for the fetcher 
// to find the data from the database
var fetcher = function () {
  this.found = [];
}

// This is the search algorithms to search though the 
// database by the ingredient by the user. Once found the it
// will add it to the array within the fetcher object
fetcher.prototype.search = function (database, keyword) {
  var holder = [];
  database.forEach(function (data) {
    for (var i = 0; i < data["keyword"].length; i++) {
      for (var j = 0; j < keyword.length; j++) {
        var string = data["keyword"][i].ingredient;
        if (string.match(keyword[j])) {
          holder.push(data);
        }
      }
    }
  });
  this.found = holder;
}

// this will find the doubles in the found array
fetcher.prototype.removedouble = function () {
  for (var i = 0; i < this.found.length; i++) {
    for (var j = i + 1; j < this.found.length; j++) {
      if (this.found[i].name === this.found[j].name) {
        this.found.splice(j, 1);
      }
    }
  }
}
