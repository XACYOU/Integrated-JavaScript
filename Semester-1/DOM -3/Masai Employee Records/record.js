// fill in javascript code here

let name=document.getElementById("name");
let empId=document.getElementById("employeeID");
let department=document.getElementById("department");
let experience=document.getElementById("exp");
let email=document.getElementById("email");
let phone=document.getElementById("mbl");
let form=document.querySelector("form");
let tbody=document.querySelector("tbody");

let AllData=[];


form.addEventListener("submit",function(e) {
    e.preventDefault();
    
    tbody.innerHTML=null;

    let data={
        name:name.value,
        empID:empId.value,
        department:department.value,
        experience:exp.value,
        email:email.value,
        phone:phone.value
    };

    AllData.push(data);

    console.log(AllData);

    AllData.map((ele)=>{

        let tr=tbody.insertRow()
        let td1=tr.insertCell();
        let td2=tr.insertCell();
        let td3=tr.insertCell();
        let td4=tr.insertCell();
        let td5=tr.insertCell();
        let td6=tr.insertCell();
        let td7=tr.insertCell();
        let td8=tr.insertCell();

        td1.innerText=ele.name;
        td2.innerText=ele.empID;
        td3.innerText=ele.department;
        td4.innerText=ele.experience;
        td5.innerText=ele.email;
        td6.innerText=ele.phone;

        if(ele.experience>5){
        td7.innerText="Senior";
        }else if(ele.experience>2&&ele.experience<5){
        td7.innerText="Junior";
        }else{
        td7.innerText="Fresher";
        }

        td8.innerText="Delete";

        td8.addEventListener("click",function(){
            tr.innerHTML=null;
            for(let i=0;i<AllData.length;i++){
                if (AllData[i]==ele){
                    AllData.splice(i,1);
                }
            }
        })

        // tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
        tbody.append(tr);

    })

});

