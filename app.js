//Exercise 1
// 1Exercise 1 Section=========

const myButton = document.getElementById("myButton");
myButton.addEventListener("click", function() {
    alert("Button clicked!");
});
const searchTerm = searchInPut.value.trim();
const myImage = document.getElementById("myImage");
const showFeedbackParagraph = getElementById("showParagraph")


        
    searchBttn.addEventListener("click", () => { 
    fetch( `https://api.giphy.com/v1/gifs/translate?myapi_key=${myapiKey}&s=${encodeURIComponen(searchTerm)}`)

    .then(response => response.json() )

    //exercise 4
    .then(jsonData => {
        const imageElement = searchResults.querySelector("img");
        if (imageElement) {
            imageElement.src = jsonData.data.images.original.url;
            searchInput.value = '';
        }
    } )
    
});
