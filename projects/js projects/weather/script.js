//029d6b51a9ee9a043169c1eec838bf3a

const API_KEY ="029d6b51a9ee9a043169c1eec838bf3a";
const URL =`https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric&q=`;
const query = document.querySelector("#inputCity");
const button = document.querySelector("button");
const cityName = document.querySelector("#city");
const weatherIcon = document.querySelector("#weatherIcon");
const temp = document.querySelector("#temp");
const description = document.querySelector("#description");
const errorMessage = document.querySelector("#errorMessage");

 async function getWeather(city){
    if(city){
        try {
            const response =  await fetch(URL+city);
            const data = await response.json();
            displayWeather(data);
        } catch (error) {
            
        }
    }

}

function displayWeather(weatherData){
    
    if(weatherData.cod === 200){
        errorMessage.textContent = "";
        cityName.textContent = weatherData.name;
        temp.textContent = weatherData.main.temp + "°";
        description.textContent = weatherData.weather[0].description;
        weatherIcon.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`

    /*     let descriptionWeather = weatherData.weather[0].description;
        switch (descriptionWeather) {
            case value: ""
                
                break;
        
            default:
                break;
        } */
        


    }else{
        cityName.textContent ="";
        temp.textContent ="";
        description.textContent ="";    
        weatherIcon.src = ""
        errorMessage.textContent = weatherData.message;

    }
    console.log(weatherData);

}



button.addEventListener("click",(e)=>{
    getWeather(query.value);
})




