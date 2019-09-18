//search button
//word searched appends to page with button
//.on() event listener to searc
//ajax function to get Giphy API results
//render buttons on html

//initial gif choice suggestions
var gifs = ["dog", "cat", "cow", "penguin"];

$("#gif-search").on("click", function() {//fix to event listener for all buttons
  var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=eH5EHBiaVjKJu4qHSz1Lb9xTkLLwXVKg&limit=25&rating=PG";
    var trend = $(this).attr("data-name")
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    //console.log(queryURL)

    var results = response.data;
//adds divs to 
    for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");
        var p = $("<p>").text("Rating: " + results[i].rating);
        var gifImage = $("<img>");
        gifImage.attr("src", results[i].images.fixed_height.url);

        gifDiv.append(p);
        gifDiv.append(gifImage);//fix to append.
        $("#gifs-view").append(gifDiv);
    }
  });
});

// function renderButtons(){
//     $("#buttons-view").empty();

//     for (var i = 0; i < gifs.length; i++){
//     }
// }
