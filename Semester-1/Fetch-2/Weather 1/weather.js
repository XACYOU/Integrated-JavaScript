const weatherApiKey = 'e97cb5e2029f11a58462bbcb561b602e'
const btn = document.getElementById('btn');
const inputPlace=document.getElementById('place');
const weatherIcon=document.getElementById('weatherIcon');
const mid_temp=document.getElementById('mid_temp');
const condition = document.getElementById('condition');
const minTemp=document.getElementById('minTemp');
const maxTemp=document.getElementById('maxTemp');
const Wind=document.getElementById('Wind');
const Humidity = document.getElementById('Humidity');
const Sunrise = document.getElementById('Sunrise');
const Sunset = document.getElementById('Sunset'); 
const gmap = document.getElementById('gmap_canvas'); 

async function fetchData(){
    try {
        const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputPlace.value}&appid=${weatherApiKey}`);
        const data= await result.json();

        
        weatherIcon.src=`http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

        mid_temp.textContent=`${Math.ceil(data.main.temp-273.15)}°C`;

        condition.textContent=`Feels like ${Math.ceil(data.main.temp-273.15)}°C. ${data.weather[0].main}. ${data.weather[0].description}`;

        minTemp.textContent=`Min-Temp:- ${Math.ceil(data.main.temp_min-273.15)}°C`;

        maxTemp.textContent=`Max-Temp:-${Math.ceil(data.main.temp_max-273.15)}°C`;
        
        Wind.textContent=`wind:- ${data.wind.speed}m/s`;

        Humidity.textContent=`Humidity:- ${data.main.humidity}`;

        Sunrise.textContent=`Sunrise:- ${new Date( data.sys.sunrise*1000).toLocaleTimeString()}`;

        Sunset.textContent=`Sunset:- ${new Date( data.sys.sunset*1000).toLocaleTimeString()}`;

        console.log()

    } catch (error) {
        console.log(error);
    }
}

btn.addEventListener('click', () => {
    const displayPlaceName =document.getElementById('placeName');

    displayPlaceName.innerText=inputPlace.value
    
    gmap.src=`https://maps.google.com/maps?q=${inputPlace.value}&t=&z=13&ie=UTF8&iwloc=&output=embed`


    fetchData();
})
