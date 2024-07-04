let appId = "d174d5f2b02060db547cc009286ddf05"

let appKey = 'https://api.openweathermap.org/data/2.5/weather?&appid=d174d5f2b02060db547cc009286ddf05&units=metric&q='

async function checkWeather(cii){
    const response = await fetch(appKey+cii)
    let data = await response.json();

    console.log(data)
    citty.innerHTML=data.name
    tem.innerHTML= Math.round(data.main.temp)+ '°C'
    hhum.innerHTML=data.main.humidity+'%'
    wwi.innerHTML=data.wind.speed+' km/h'

    let imgg = document.getElementById("imgg")

    if(data.weather[0].main === "Rain"){
        imgg.src = "https://cdn.pixabay.com/photo/2016/03/31/19/32/rain-1295101_1280.png"
    }
    else if(data.weather[0].main === "Thunderstorm"){
        imgg.src = "https://png.pngtree.com/element_our/20200610/ourmid/pngtree-thunderstorm-and-rainy-weather-image_2237131.jpg"
    }
    else if(data.weather[0].main === "Drizzle"){
        imgg.src = "https://cdn3d.iconscout.com/3d/premium/thumb/drizzle-weather-7096832-5753008.png"
    }
    else if(data.weather[0].main === "Haze"){
        imgg.src = "https://c3.klipartz.com/pngpicture/909/323/sticker-png-android-weather-icons-haze.png"
    }
    else if(data.weather[0].main === "Clear"){
        imgg.src = "https://w7.pngwing.com/pngs/487/562/png-transparent-sun-logo-sunlight-silhouette-thumbnail.png"
    }
    else if(data.weather[0].main === "Clouds"){
        imgg.src = "https://i.pinimg.com/originals/46/99/ed/4699ed62b71ce4c2b51f33c4eb140f63.png"
    }
    else if(data.weather[0].main === "Mist"){
        imgg.src = "https://i.pinimg.com/originals/46/99/ed/4699ed62b71ce4c2b51f33c4eb140f63.png"
    }
    else{
        imgg.src = "https://cdn-icons-png.flaticon.com/512/10127/10127236.png"
    }

}

btn.addEventListener("click",()=>{
    checkWeather(inp.value)
})

inp.addEventListener("keydown",(event)=>{
    if(event.keyCode === 13){
        btn.click();
    }
} )
