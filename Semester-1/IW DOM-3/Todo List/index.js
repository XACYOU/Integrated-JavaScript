let myForm=document.querySelector('form');
let name=document.getElementById('task');
let priority=document.getElementById('priority');
let tbody=document.querySelector('tbody');
let AllTask=[];


myForm.addEventListener('submit',function(e){
    e.preventDefault();

    tbody.innerHTML=null;

    let data={
        Name:name.value,
        Priority:priority.value
    }
    AllTask.push(data);

    AllTask.map((ele)=>{

        let tr=document.createElement('tr');
        let td1=document.createElement('td');
        let td2=document.createElement('td');

        td1.innerText=ele.Name;
        td2.innerText=ele.Priority;

        if(ele.Priority=='High'){
            td2.style.backgroundColor='red'
        }else if(ele.Priority=='Low'){
            td2.style.backgroundColor='green'
        }

        tr.append(td1,td2);

        tbody.append(tr);
    })
})