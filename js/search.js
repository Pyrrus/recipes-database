var test = ["egg", "rice", "wine"];

var found = [];

function search() {
  database.forEach(function (data) {
    for (var i = 0; i < data["keyword"].length; i++) {
      for (var j = 0; j < test.length; j++) {
        var string = data["keyword"][i].ingredient;
        if (string.match(test[j])) {
          found.push(data);
        }
      }
    }
  });
}


function removeDouble() {
  for (var i = 0; i < found.length; i++) {
    for (var j = i + 1; j < found.length; j++) {
      if (found[i].name === found[j].name) {
        found.splice(j, 1);
      }
    }
  }
}

search();

removeDouble();

console.log(found)
