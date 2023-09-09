// fill in javascript code here

let name=document.getElementById("name");
let docID=document.getElementById("docID");
let dept=document.getElementById("dept");
let exp=document.getElementById("exp");
let email=document.getElementById("email");
let phone=document.getElementById("mbl");
let myForm=document.querySelector("form");
let tbody=document.querySelector("tbody");

let AllData=[];

myForm.addEventListener("submit",function(e) {    
    e.preventDefault();
    let data={
        name:name.value,
        docID:docID.value,
        dept:dept.value,
        exp:exp.value,
        email:email.value,
        phone:phone.value
    }

    AllData.push(data);
    
    let row=tbody.insertRow();
    let cell1=row.insertCell();
    let cell2=row.insertCell();
    let cell3=row.insertCell();
    let cell4=row.insertCell();
    let cell5=row.insertCell();
    let cell6=row.insertCell();
    let cell7=row.insertCell();
    let cell8=row.insertCell();

    AllData.map((ele)=>{
        cell1.innerText=ele.name;
        cell2.innerText=ele.docID;
        cell3.innerText=ele.dept;
        cell4.innerText=ele.exp;
        cell5.innerText=ele.email;
        cell6.innerText=ele.phone;
        if(ele.exp>5){
            cell7.innerText="Senior";
        }else if(ele.exp>2&&ele.exp<5){
            cell7.innerText="Junior";
        }else if(ele.exp<=1){
            cell7.innerText="Trainee"
        }
        cell8.innerText="Delete";
    })

    cell8.style.backgroundColor='red';
    cell8.addEventListener('click',function(){
        row.innerHTML=null;
    })

    for(let i=1; i<=AllData.length; i++){
        if(i%2==0){
            row.style.backgroundColor='rgb(56, 115, 163)';
        }else{
            row.style.backgroundColor='white';            
        }
    }
    tbody.appendChild(row);
})