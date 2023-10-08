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
let Week=document.getElementById('one');


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

// -----------------------------------------

        const forecastResult =await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${inputPlace.value}&appid=${weatherApiKey}`)
        const forecastData= await forecastResult.json();

        const arr=[0, 8, 16, 24, 32,39]

        arr.forEach((i)=>{
        const week=()=>{
            const resultDateTIme=forecastData.list[i].dt_txt
            const dateTime=new Date(resultDateTIme);
            const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            const dayIndex=dateTime.getDay();
            const weekName=daysOfWeek[dayIndex];
            return(weekName);
        }
        const Icon=()=>{
            const iconValue=forecastData.list[i].weather[0].icon;
            return iconValue;
        }
        const h3MinTemp=()=>{
            const minTempValue=Math.ceil(forecastData.list[i].main.temp_min-273.15);
            return minTempValue;
        }
        const h4MaxTemp=()=>{
            const maxTempValue=Math.ceil(forecastData.list[i].main.temp_max-273.15);
            return maxTempValue;
        }

        if(i==0){
            Week =document.getElementById('one');
        }else if(i==8){
            Week =document.getElementById('two');
        }else if(i==16){
            Week =document.getElementById('three');
        }else if(i==24){
            Week =document.getElementById('four');
        }else if(i==32){
            Week =document.getElementById('five');
        }else if(i==39){
            Week =document.getElementById('six');
        }

        displayForecast(week,Icon,h3MinTemp,h4MaxTemp,i);
    })

    } catch (error) {
        console.log(error);
    }
}

function displayForecast(week,icon,min,max,i){

    Week.innerHTML ='';
   
    const h3Week=document.createElement('h3');
    const imgWeek =document.createElement('img');
    const minWeek =document.createElement('h3');
    const maxWeek =document.createElement('h4');

    h3Week.textContent=week();
    imgWeek.src=`http://openweathermap.org/img/w/${icon()}.png`
    minWeek.textContent=`${min()}°`;
    maxWeek.textContent=`${max()}°`;
    
    Week.append(h3Week,imgWeek,minWeek,maxWeek);
}

btn.addEventListener('click', () => {
    const displayPlaceName =document.getElementById('placeName');
    displayPlaceName.innerText=inputPlace.value;
    
    gmap.src=`https://maps.google.com/maps?q=${inputPlace.value}&t=&z=13&ie=UTF8&iwloc=&output=embed`

    fetchData();
})
