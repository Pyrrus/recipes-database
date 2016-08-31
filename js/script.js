// make a dish object to add more to the database
function dish(name, ct, details, difficulty) {
  this.name = name;
  this.cookingTime = ct;
  this.difficulty = difficulty;
  this.details = details;
  this.keyword = [];
}

// set up the json for the keyword for dish using ingredient.
var keyword = {
  "ingredient": ""
}

// make the comment object to pass to the
// backend to send them an email
function comment(name, email, comments) {
  this.name = name;
  this.email = email;
  this.comment = comments;
}

// later: make away to make email
function email(data) {
  console.log("later we make email for the backend")
}

// display the a part of the database
function display(data) {
  var string = "";

  // loop though the json keyword
  // to get all the ingredient
  for (var i = 0; i < data.keyword.length; i++) {
    string += data.keyword[i].ingredient + ", ";
  }

  // set the data from the database to the page
  $("#display").append("<div class='row remove' id='random-recipe'>" +
    "<h2>" + data.name + "</h2>" +
    "<h4>" + "Cooking Time: " + data.cookingTime + "   - Difficulty: " + data.difficulty + "</h4>" +
    "<h5>What you will need: " + string + "</h5>" +
    "<p class='col-md-12'>" + data.details + "</p>" +
    "</div>");
}

// randomly generated recipe on landing page
var getDataFromDatabase = function() {
  // make random number from the length of
  // the database.
  var getRandom = Math.floor((Math.random() * database.length) + 1);

  // display the random data from the database
  display(database[getRandom]);
}

// UI Logic
$(document).ready(function() {
  // display random data from the dasebase
  getDataFromDatabase();

  // search button
  $("#buttonName").click(function() {
    var searchTermsArr = [];
    var searchTerms = $("input#searchBox").val();
    // using user input.
    // Split the string to array by ', '
    searchTermsArr = searchTerms.split(", ");
    console.log(searchTermsArr);

    // make search object
    var search = new fetcher;

    // using the searchTermsArr
    // to find the keyword within the database
    search.search(database, searchTermsArr);

    // remove any double in the fetcher object
    search.removedouble();

    // remove all the class=".remove"
    $(".remove").remove();

    // loop though all the search found array to display
    for (var i = 0; i < search.found.length; i++) {
      display(search.found[i]);
    }
  });

  // onclick: add ingredient input to 
  // 'add more recipes'
  $("#add-ingredient").click(function() {
    $("#new-ingredient").append('<div class="new-ingredient removeI">' +
      '<div class="form-group">' +
      '<label for="ingredient">Ingredient</label>' +
      '<input type="text" class="form-control ingredient">' +
      '</div>' +
      '</div>');
  });

  // onclick: add recipes to the database
  // from 'add more recipes'
  $("#addR").click(function() {
    var inputtedDish = $("input#name").val();
    var inputtedCT = $("input#ct").val();
    var inputteddifficulty = $("#hard").val();
    var inputDetails = $("#details").val();

    var add = new dish(inputtedDish, inputtedCT, inputDetails, inputteddifficulty);

    // loop the all the ingredient
    // in class='new-ingredient'
    $(".new-ingredient").each(function() {
      var inputtedIngredient = $(this).find("input.ingredient").val();
      keyword["ingredient"] = inputtedIngredient;
      add["keyword"].push(keyword);
    });

    // remove all the other ingredient
    // in 'add more recipes'
    $(".removeI").remove();

    // add to the database
    database.push(add);

    // reset the input to nothing
    $("input#name").val("");
    $("input#ct").val("");
    $("#details").val("");
    $("input.ingredient").val("");
  });

  $("#commentAdd").click(function() {
    var inputtedName = $("#names").val();
    var inputtedEmail = $("#email").val();
    var inputtedComment = $("#inputtedComment").val();
    $("input#names").val("");
    $("input#email").val("");
    $("input#inputtedComments").val("");
    var info = new comment(inputtedName, inputtedEmail, inputtedComment);
    email(info);
  });
});
