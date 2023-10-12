const apiKey = '319e8847';
const inputTitle=document.querySelector('#movieInput');
const display=document.querySelector('#movieInfo');
inputTitle.addEventListener('input', ()=>{
    const movieTitle = inputTitle.value;
    debouncedSearch(movieTitle);

})

async function moviesInfo(movieTitle){
    try {
        const result = await fetch(`https://omdbapi.com/?apikey=${apiKey}&s=${movieTitle}`);
        const data= await result.json();
        displayCont(data);
    } catch (error) {
        console.log(error);
    }
}

function debounce(fun,delay) {
    let timer;
    function inner(query){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fun(query);
        },delay);
    }
    return inner;
}

let debouncedSearch=debounce(moviesInfo,500);

function displayCont(data){

    display.innerHTML=null;
if(inputTitle==''){
    return alert('Please enter a movie title')
}else{
            
    if(data.Response=='True'){
        data.Search.forEach(ele => {
        
        let displayCont=document.createElement('div');
        displayCont.className="display-cont";
        let pic=document.createElement('img');
        pic.src=ele.Poster;
        let title=document.createElement('h3');
        title.textContent=`Title:- ${ele.Title}`;
        let year=document.createElement('p');
        year.textContent=`Year:- ${ele.Year}`;


        displayCont.appendChild(pic);
        displayCont.appendChild(title);
        displayCont.appendChild(year);

        display.appendChild(displayCont);
});
    }else{
        let notFound=document.createElement('h3');
        notFound.textContent='Movie not found';
    }
 }
  
}