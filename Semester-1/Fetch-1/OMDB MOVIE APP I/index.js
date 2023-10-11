let apiKey = '319e8847';
let inputTitle=document.querySelector('#movieInput');
let btn=document.querySelector('button');
let display=document.querySelector('#movieInfo');

btn.addEventListener('click', function(){

    let movieTitle = inputTitle.value;
    console.log(movieTitle);

    if(movieTitle==''){
        return alert('Please enter a movie title')
    }else{

        let URL=`https://omdbapi.com/?apikey=${apiKey}&s=${movieTitle}`;
    fetch(URL)
        .then((res)=>{ return res.json()})
        .then((data)=>{

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

               movieInfo.appendChild(displayCont);


            });
        }else{
            let notFound=document.createElement('h3');
            notFound.textContent='Movie not found';
            }

        })
        .catch((error) => {
            console.error('Error fetching data:', error);


        })};
})

