let form=document.querySelector('form');


form.addEventListener('submit', function(e){
    // e.preventDefault();
    let name=document.getElementById('name');
    let age=document.getElementById('age');


    localStorage.setItem('name', name.value);
    localStorage.setItem('age', age.value);
});

let btn=document.getElementById('btn');
let output=document.getElementById('output');

btn.addEventListener('click', function(){

    let showName=document.createElement('p');
    showName.className='Name';

    let showAge=document.createElement('p');
    showAge.className='Age';

    showName.textContent = 'Name:-' + localStorage.getItem('name');
    showAge.textContent = 'Age:-' + localStorage.getItem('age');

    output.append(showName,showAge)
})