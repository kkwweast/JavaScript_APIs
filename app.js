
document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.querySelector('#submitSearch');
  const searchInput = document.querySelector("#searchWord");
  const gifImg = document.querySelector("#gifImg");
  const feedbackPara = document.querySelector("#feedBack");

  searchButton.addEventListener("click", () => {
      const searchTerm = searchInput.value;
      const apiKey = "6AHYHr1rScuEGI7iZPtPO5yzOwWT8jVf";
      const url = `https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${searchTerm}`;

      fetch(url)
      .then(response => response.json())
      .then(res => {
          console.log(res);
          gifImg.src = res.data.images.original.url;
          searchInput.value = "";
          feedbackPara.textContent = "";
      })
      .catch(err => {
          console.error(err);
          feedbackPara.textContent = err.message;
      });
  });
});
