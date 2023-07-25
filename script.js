//let Api = ;
let Api_key = `40a65c8a1151cea1159101abc0d0360e`;

let form = document.querySelector("form");
let weather = document.querySelector("#weather");

let search = document.querySelector("#search");
let getWeather = async(city)=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_key}&units=metric`
    let response =await fetch(url);
    const data = await response.json();
    return showWeather(data)
}
let showWeather=(data)=>{
    console.log(data)
    weather.innerHTML = ` <div id="location"><h2>Weather In ${data.name} </h2></div> 
    <div class="detail">
        <div id="temperature">${data.main.temp}℃</div>
        <div id="image">
            <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" style="width: 100%;">
        </div>
    </div>
        <div id="details">
           <span id ="type">${data.weather[0].main}</span><br>
           <span>Humidity:- ${data.main.humidity}%</span><br>
           <span>Wind Speed:- ${data.wind.speed}km/h</span>
        </div>`
}

form.addEventListener("submit",function(event){
    getWeather(search.value)
    event.preventDefault();
})
