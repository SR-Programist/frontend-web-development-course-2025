let btn = document.querySelector(".search-box button");
let weatherData = document.querySelector(".weather-data")


btn.addEventListener("click" ,async (e)=>{
    e.preventDefault()
    let city = document.getElementById("city").value ;
    const apiKey ="10add47525ba82554756d862d8584ff0"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    let res = await fetch(url)
    let data = await res.json()
    console.log(data)

    return showData(data)
})
function showData(d){
    if( d.cod === "404"){
        weatherData.innerHTML = `<h2>City not Found..</h2>`
    }else{
        let t = d.main.temp
        let h = d.main.humidity
        let w = d.wind.speed
        let sts = d.weather[0].description
        weatherData.innerHTML = `<img src="https://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png">
                <h2>${t} &deg;C</h2>
                <p>${sts}</p>
                <div class="other-data">
                    <div class="humidity">
                        <p>Humidity</p>
                        <h3>${h} %</h3>
                    </div>
                    <div class="wind">
                        <p>Wind</p>
                        <h3>${w} m/s</h3>
                    </div>
                </div>`
    }
}