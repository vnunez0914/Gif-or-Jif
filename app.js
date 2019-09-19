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
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    animal +
    "&api_key=eH5EHBiaVjKJu4qHSz1Lb9xTkLLwXVKg&q=animal&limit=15&offset=0&rating=PG&lang=en";
  var animal = $(this).attr("data-animal");

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    console.log(queryURL);

    var results = response.data;
    //adds divs to
    for (var i = 0; i < results.length; i++) {
      var gifDiv = $("<div>");
      var p = $("<p>").text("Rating: " + results[i].rating);
      var gifImage = $("<img>");
      gifImage.attr("src", results[i].images.fixed_height.url);
      // add data-still, data-animate and data-state attr activity 15??
      gifImage.attr("data-", animal);
      gifDiv.append(p);
      gifDiv.append(gifImage);
      $("#gifs-view").append(gifDiv);
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

$("#add-gifs").on("click"), function (event) {
  event.preventDefault();
  var animal = $("#gif-input").val().trim();
  gifs.push(animal);
  console.log();
  renderButtons();
  ``
};

$(document).on("click", ".gif-btn", displayGifs);
renderButtons()
// on click for clicking gifs from still to animate