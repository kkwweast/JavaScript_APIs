




//This is my giphy API key
const APIKEY = "http://api.openweathermap.org/data/2.5/weather";

console.log("Hello Fetch API!");

//query paramets follow a ?
//name=valu pairs
//each pair seperated by a &
const WEATHER_URL ="https://api.openweathermap.org/data/2.5/weather";

const QUERY_PARAMS = "?quhoover=&a5a839a780c1d61b9710aca75a4e11fa&units=imperial";



fetch(WEATHER_URL + QUERY_PARAMS);

    .then((response) => {
        return response.json();
    })
    .then((weather) => {
        console.log(weather);
        //do anything with the weather data
        document.querySelector(".title").textContent =
    })
    .catch((err) => console.error(err));

    function displayWeather(weather) {
        document.querySelector(
            ".title"
           ) .textContent = `It is currently ${weather.main.temp} in ${wather.name}
        });

 async function getWeather() {
       try{
        let response = await fetch(WEATHER_URL + QERY_PARAMS);
        let weather = await response.json();
         displayWeather(weather);
       }catch(err) {
        console.error(err);
       }
    }




       }
    }

           
           
           
           
           
           
           
           
           
           
           
           `
    }
    
        
    
    