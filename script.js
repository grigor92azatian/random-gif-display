const img = document.querySelector('img');
const newGIFButton = document.querySelector(".newGIFButton");
const searchButton = document.querySelector(".searchButton");
const inputField = document.querySelector(".inputField");
let currentSearch = "cats";         //default search term

getNewImg(currentSearch);           //initial img load

newGIFButton.addEventListener("click", function(){
        getNewImg(currentSearch);
    }
);

searchButton.addEventListener("click", function(){
    currentSearch = getUserInput();
    getNewImg(currentSearch);
});

function getNewImg(searchTerm){
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=UuohM0uLy0H06vHX3Y4qAGTIXF6nHnfU&s='+searchTerm, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
        img.src = response.data.images.original.url;
    });  
}

function getUserInput(){
    //return users text input
    return inputField.value;
}
