let fetchUsersBtn = document.getElementById('fetchUsersBtn');
let userContainer = document.getElementById('userContainer');

fetchUsersBtn.addEventListener('click', () => {

    userContainer.innerHTML = '';

    fetch('https://reqres.in/api/users')
        .then((res)=>res.json())
        .then((data) =>{
            
            data.data.forEach(ele => {

                let userCard=document.createElement('div');
                userCard.className='user-card';    

                let pic=document.createElement('img');    
                let name=document.createElement('h2');    
                let email=document.createElement('p');    
            
                pic.src=ele.avatar;
                name.innerText=`Name:- ${ele.first_name} ${ele.last_name}`;
                email.innerText=`Email:- ${ele.email}`;

                // console.log(ele.first_name);
                console.log(name,email,pic)

                userCard.appendChild(pic);
                userCard.appendChild(name);
                userCard.appendChild(email);
                userContainer.appendChild(userCard);
            
            });            
            console.log(data.data);
        })
});
