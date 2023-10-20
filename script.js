//Fetch example
console.log
const searchButton = document.querySelector("#submitSearch");
const searchInput = document.querySelector("#searchWord");
const gifing = document.querySelector.apply("#imageContainer > img");
const feedbackPara = document.querySelector("#feedback");

const apiKey = "5c95d41c7298aca300abf49e8736da9d ";

//Exercise 2 Section
searchButton.addEventListener("Click", ()   => {
  const searchTerm = searchInput.value;
  const url = https:`//api.giphy.com/v1/gifs/translate?api_key=YOUR_KEY_HERE&s=cats_`
fetch(url)
.then(( response) => response.json())
.then((result) => {
    console.log(results);

    if (Array.isArray(result.data) && result.data.length <= { 
    feedbackPara:textContent ="No gifs found",
     }else {  
        giffImg.src = result.data.images.original.url; 
        feedbackPara.textContent = "";
        searchInput.value = "";
     }
   


});

})
.catch((errVal) => { 
    console.log(errVal);
    feedbackPara.textContent = errVal.message;
});






 
c

.then((responseObject) => {
console.log(responseObject);
return responseObject.json();

})

.catch((err ) => {
   console.error(err);
}