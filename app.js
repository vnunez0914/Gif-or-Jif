//search button
//word searched appends to page with button
//.on() event listener to searc
//ajax function to get Giphy API results
//render buttons on html

//initial gif choice suggestions
var gifs = ["dog", "cat", "cow", "penguin"];

//fix to event listener for all buttons

// capture your input value
// push that vaule into your gifs array

function displayGifs() {
  var animal = $(this).attr("data-animal");
  console.log(animal)
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    animal +
    "&api_key=eH5EHBiaVjKJu4qHSz1Lb9xTkLLwXVKg&limit=15&offset=0&rating=PG&lang=en";
  

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    console.log(queryURL);

    var results = response.data;
    //adds divs to
    $("#gifs-view").empty()
    for (var i = 0; i < results.length; i++) {
      var gifDiv = $("<div>");
      var p = $("<p>").text("Rating: " + results[i].rating);
      var gifImage = $("<img>");
      gifImage.addClass("gif-image")
      gifImage.attr("src", results[i].images.fixed_height_still.url);
      // add data-still, data-animate and data-state attr activity 15??
      gifImage.attr("data-still", results[i].images.fixed_height_still.url);
      gifImage.attr("data-animate", results[i].images.fixed_height.url);
      gifImage.attr("data-state", "still");
      gifDiv.append(p);
      gifDiv.append(gifImage);
      $("#gifs-view").prepend(gifDiv);
    }
  });
}
renderButtons();

function renderButtons() {
  $("#buttons-view").empty();

  for (var i = 0; i < gifs.length; i++) {
    var jiffy = $("<button>");
    jiffy.addClass("gif-btn");
    jiffy.attr("data-animal", gifs[i]);
    jiffy.text(gifs[i]);
    $("#buttons-view").append(jiffy);
  }
}
renderButtons();

$("#add-gifs").on("click", function (event) {
  event.preventDefault();
  
  var animals = $("#gif-input").val().trim();
  console.log(animals)
  gifs.push(animals);
  renderButtons();
  ``
});

$(document).on("click", ".gif-btn", displayGifs);
renderButtons()


// on click for clicking gifs from still to animate
$(document).on("click",".gif-image", function() {
  console.log("clicked");
  // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
  var state = $(this).attr("data-state");
  // If the clicked image's state is still, update its src attribute to what its data-animate value is.
  // Then, set the image's data-state to animate
  // Else set src to the data-still value
  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
});