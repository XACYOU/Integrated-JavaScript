const recipeSearch=document.querySelector('#recipeSearch');
const display=document.querySelector('#recipeInfo');

recipeSearch.addEventListener('input', ()=>{
    const recipieTitle = recipeSearch.value;
    throttleSearch(recipieTitle);
})

async function recipeData(query){
    try {
        const result = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const data= await result.json();
        displayCont(data);
    } catch (error) {
        console.log(error);
    }
}

function throtlle(fun,delay) {
    let throttling=false;
    function inner(query){
        if (throttling==false){
            throttling=true;
            fun(query);
            setTimeout(()=>{
                throttling=false;
            },delay);
        }
    }
    return inner;
}

let throttleSearch=throtlle(recipeData,100);

function displayCont(data){
    display.innerHTML='';

    if (data.meals) {
        data.meals.forEach(meal => {
            let displayCon = document.createElement('div');
            displayCon.className = 'display-cont';

            let pic = document.createElement('img');
            pic.src = meal.strMealThumb;

            let title = document.createElement('h3');
            title.textContent = `Name: ${meal.strMeal}`;

            let country = document.createElement('p');
            country.textContent = `Country: ${meal.strArea}`;

            let ytLink = document.createElement('a');
            ytLink.href = meal.strYoutube;
            ytLink.textContent = 'YouTube Link';

            displayCon.appendChild(pic);
            displayCon.appendChild(title);
            displayCon.appendChild(country);
            displayCon.appendChild(ytLink);

            display.appendChild(displayCon);
        });
    } else {
        let notFound = document.createElement('h3');
        notFound.textContent = 'Recipe not found';
        display.appendChild(notFound);
    }
}