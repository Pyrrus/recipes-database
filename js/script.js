function dish (name, ct, details, difficulty) {
  this.name = name;
  this.cookingTime = ct;
  this.difficulty = difficulty;
  this.details = details;
  this.keyword = [];
}

var keyword = {
  "ingredient": ""
}

 function comment (name, email, comments) {
      this.name = name;
      this.email = email;
      this.comment = comments;
  }

function email(data) {
  console.log("later we make email for the backend")
}

// display the data function
function display(data) {
  var string = "";
  for (var i = 0; i < data.keyword.length; i++) {
    string += data.keyword[i].ingredient + ", ";
  }
    $("#display").append("<div class='row remove' id='random-recipe'>" +
      "<h2>" + data.name + "</h2>" +
      "<h4>"+"Cooking Time: "+ data.cookingTime + "   - Difficulty: "+ data.difficulty +"</h4>"+
      "<h5>What you will need: "+ string + "</h5>" +
      "<p class='col-md-12'>"+data.details+"</p>"+
      "</div>");
  }

// randomly generated recipe on landing page
var getDataFromDatabase = function() {
  var getRandom = Math.floor((Math.random() * database.length) + 1);

  display(database[getRandom]);
}

// UI Logic
$(document).ready(function() {
getDataFromDatabase();

// search button
$("#buttonName").click(function(){
  var searchTermsArr = [];
  var searchTerms = $("input#searchBox").val();
  searchTermsArr = searchTerms.split(", ");
  console.log(searchTermsArr);

  var search = new fetcher;

  search.search(database, searchTermsArr);

  search.removedouble();

  $(".remove").remove();

  for (var i = 0; i < search.found.length; i++) {
    display(search.found[i]);
  }
});

// add recipe to database
  $("#add-ingredient").click(function() {
    $("#new-ingredient").append('<div class="new-ingredient removeI">' +
                                 '<div class="form-group">' +
                                   '<label for="ingredient">Ingredient</label>' +
                                   '<input type="text" class="form-control ingredient">' +
                                 '</div>'+
                               '</div>');
  });


  $("#addR").click(function() {
    var inputtedDish= $("input#name").val();
    var inputtedCT = $("input#ct").val();
    var inputteddifficulty = $("#hard").val();
    var inputDetails = $("#details").val();

    var add = new dish(inputtedDish, inputtedCT, inputDetails, inputteddifficulty);

    $(".new-ingredient").each(function() {
      var inputtedIngredient = $(this).find("input.ingredient").val();
      keyword["ingredient"] = inputtedIngredient;
      add["keyword"].push(keyword);
    });

    $(".removeI").remove();

    database.push(add);

    $("input#name").val("");
    $("input#ct").val("");
    $("#details").val("");
    $("input.ingredient").val("");
  });

  $("#commentAdd").click(function(event) {
    event.preventDefault();
    var inputtedName = $("#names").val();
    var inputtedEmail = $("#email").val();
    var inputtedComment =$("#inputtedComment").val();
    $("input#names").val("");
    $("input#email").val("");
    $("input#inputtedComments").val("");
    console.log(inputtedName);
    var info = new comment(inputtedName, inputtedEmail, inputtedComment);

    email(info);

 });
});
