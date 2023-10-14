document.addEventListener("DOMContentLoaded", () => {

    const apiKey = "5bb7eef9588a8693ad9db0f0e256c107";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon=document.querySelector(".weather img");

    async function checkweather(city) {
        const res = await fetch(apiUrl + city + `&appid=${apiKey}`);
        if (res.status==404){
            document.querySelector(".error").style.display="block";
            document.querySelector(".weather").style.display="none";
        }else{
            var data = await res.json();
            console.log(data);
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
            document.querySelector(".condition").innerHTML=data.weather[0].main
            console.log(data);
    
            if(data.weather[0].main=="Clouds"){
                weatherIcon.src="images/cloudy.png"
            }else if(data.weather[0].main=="Clear"){
                weatherIcon.src="images/sunny.png"
            }else if(data.weather[0].main=="Rain"){
                weatherIcon.src="images/rainy.png"
            }
    
            document.querySelector(".weather").style.display="block";
            document.querySelector(".error").style.display="none";
        }
        }
        

    searchBtn.addEventListener("click", () => {
        checkweather(searchBox.value);
    });

});
