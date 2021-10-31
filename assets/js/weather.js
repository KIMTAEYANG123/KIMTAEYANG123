const API_KEY = '59e02796767ada33ca469ae225d6c7ec'

function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`

    fetch(url).then(res => res.json()).then(data =>{
        console.log(data)
        const name = data.name;
        const main = data.weather[0].main;
        const description = data.weather[0].description;
        const temp = parseInt(data.main.temp);
        
        const weather = document.querySelector('.weather');

        const area = document.createElement('h2');
        area.textContent =`${name}`;

        const curTime = document.createElement('span')
        const date = new Date();
        const hours = date.getHours().toString().padStart(2,"0");
        const minutes = date.getMinutes().toString().padStart(2,"0");
        curTime.textContent = `${hours}:${minutes}`;

        const weatherContents = document.createElement('div')
        weatherContents.style.display ='flex';
        weatherContents.style.alignItems ='center';
        weatherContents.innerHTML = `<img class="weather-img"src="./assets/images/${main}.png" alt='날씨'/><h3>${temp}º${description}</h3>`
        weather.appendChild(area);
        weather.appendChild(curTime);
        weather.appendChild(weatherContents);
    })
}
function onGeoError(){
    alert("can't find you No weather for you.")
}
navigator.geolocation.getCurrentPosition(onGeoSuccess,onGeoError)

