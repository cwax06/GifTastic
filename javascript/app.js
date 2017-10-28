

var queryURL = "https://api.giphy.com/v1/gifs/" + animal + "?api_key=gM1pYFqpEaLhtsECJxi3YCmNMPhnNpWJ";

var animal = "dog";
// var queryURL = "https://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=40e9cece";

$.ajax({
    url: queryURL,
    method: "GET"
}).done(function (response) {
    console.log(response);
    console.log(response.rating);
});
