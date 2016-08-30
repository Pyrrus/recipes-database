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


// UI Logic
$(document).ready(function() {

  $("#add-ingredient").click(function() {
    $("#new-ingredient").append('<div class="new-ingredient remove">' +
                                 '<div class="form-group">' +
                                   '<label for="ingredient">Ingredient</label>' +
                                   '<input type="text" class="form-control ingredient">' +
                                 '</div>'+
                               '</div>');
  });

  $("form#new-dish").submit(function(event) {
    event.preventDefault();

    var inputtedDish= $("input#name").val();
    var inputtedCT = $("input#ct").val();
    var inputteddifficulty = $("#hard").val();
    var inputDetails = $("#details").val();

    var add = new dish(inputtedDish, inputtedCT, inputDetails, inputteddifficulty);

    $(".new-ingredient").each(function() {
      var inputtedIngredient = $(this).find("input.ingredient").val();
      keyword[".ingredient"] = inputtedIngredient;
      add[".keyword"].push(keyword);
    });

    $(".remove").remove();

    database.push(add);

    $("input#name").val("");
    $("input#ct").val("");
    $("input#details").val("");
    $("input.ingredient").val("");

    function comment (name, email, comments) {
      this.name = name;
      this.email = email;
      this.comment = comment;
  });



 });
  });
