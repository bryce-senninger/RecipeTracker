$(function() {
    $(".change-tried").on("click", function(event) {
      var id = $(this).data("id");
      var newTried = $(this).data("newtried");
  
      var newTriedState = {
        tried: newTried
      };
  
      $.ajax("/api/recipes/" + id, {
        type: "PUT",
        data: newTriedState
      }).then(
        function() {
          console.log("changed tried to", newTried);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newRecipe = {
        recipe_name: $("#ca").val().trim(),
        tried: $("[name=tried]:checked").val().trim()
      };
  
      $.ajax("/api/recipes", {
        type: "POST",
        data: newRecipe
      }).then(
        function() {
          console.log("created new recipe");
          location.reload();
        }
      );
    });
  
    $(".delete-recipe").on("click", function(event) {
      var id = $(this).data("id");
  
      $.ajax("/api/recipes/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted recipe", id);
          location.reload();
        }
      );
    });
  });