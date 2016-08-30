var test = ["egg", "rice", "wine"];

var fetcher = function () {
  this.found = [];
}

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

fetcher.prototype.removedouble = function () {
  for (var i = 0; i < this.found.length; i++) {
    for (var j = i + 1; j < this.found.length; j++) {
      if (this.found[i].name === this.found[j].name) {
        this.found.splice(j, 1);
      }
    }
  }
}

var search = new fetcher;

search.search(database, test);

search.removedouble();

console.log(search.found);
