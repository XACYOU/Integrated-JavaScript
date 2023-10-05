async function todo(){

    try {
        const result= await fetch('https://jsonplaceholder.typicode.com/todos')
        const data= await result.json();
        console.log(data);

        const tbody=document.querySelector('tbody');

        data.forEach(ele => {

            const row=tbody.insertRow();
            const col1=row.insertCell();
            const col2=row.insertCell();
            const col3=row.insertCell();
    
            col1.textContent=ele.id;
            col2.textContent=ele.title;
            col3.textContent=ele.completed;


            if(ele.completed) {
                col3.style.backgroundColor='green';
                col3.style.color='white';
            }else{
                col3.style.backgroundColor='red';
                col3.style.color='white';
            }

            tbody.appendChild(row);
        });


        

    } catch (error) {
        console.log(error);
    }
}

todo();