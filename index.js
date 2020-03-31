// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
  //var choice = $("#choice").val();
  
  console.log("Button was clicked");
  fetch(`https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=rQrXp8Skecms5IYqoh0BS4HeQW9L35LY`)
  .then(function(response) {
    console.log("API responded");
    return response.json();
  })
  .then(function(data) {
    
    console.log(data.data[0].images.original.url);
    
   $('body').append("<img src=" + data.data[0].images.original.url + ">"); 
  });
});
  console.log("Hello, world!");
  
