//Exercise 1 section


    //Exercise 1 section
    console.log("EXERCISE 1:\n=========\n");

    const searchButton = document.querySelector('#submitSearch');
    const searchInput = document.querySelector('#searchWord');
    const gifImg = document.querySelector("#imageContainer > img");
    const feedbackParagraph = document.querySelector('#feedback');

    const apiKey = "whuy34h37vIDTby1YPjJn7hsDsXYMj9F"; // Replace 'YOUR_API_KEY' with your Giphy API key

    searchButton.addEventListener("click", () => {
      fetch(`https://api.giphy.com/v1/gifs/translate?api_key=whuy34h37vIDTby1YPjJn7hsDsXYMj9F&s=dogs`)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);

          if (result.data && result.data.images && result.data.images.original.url) { // Adjusted the condition
            gifImg.src = result.data.images.original.url;
            feedbackParagraph.textContent = "";
            searchInput.value = "";
          } else {
            feedbackParagraph.textContent = "No GIF found"; // Corrected the variable name
            searchInput.value = "";
          }
        })
        .catch((err) => {
          console.error(err);
          feedbackParagraph.textContent = "An error occurred. Please try again later."; // Updated the error message
        });
    });
 