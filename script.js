const img = document.querySelector('img');
const newGIFButton = document.querySelector(".newGIFButton");
const searchButton = document.querySelector(".searchButton");

fetch('https://api.giphy.com/v1/gifs/translate?api_key=UuohM0uLy0H06vHX3Y4qAGTIXF6nHnfU&s=fish', {mode: 'cors'})
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    img.src = response.data.images.original.url;
  });

newGIFButton.addEventListener("click", function(){

});

searchButton.addEventListener("click", function(){

});

