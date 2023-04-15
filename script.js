let employeesList = [];
let id = 0;
let employeeData = document.getElementById('employees');
const submit = document.getElementById('btn');
const msg = document.getElementById('task');
console.log(msg);
submit.addEventListener("click", addEmployee);
function addEmployee(){

    id++;
    const name = document.getElementById('name').value;
    const profession = document.getElementById('profession').value;
    const age = document.getElementById('age').value;

    if(name == '' || profession == '' || age == ''){
        msg.classList.add("failure");
        msg.innerText = 'Error : Please Make sure All the fields are filled before adding in an employee !';
        return;
    }
    if(msg.classList.contains('failure')){
        msg.classList.remove("failure");
    }
    
    let employeeObj = {"id":id, "name":name, "profession":profession, "age":age};
    console.log(employeeObj);
    employeesList.push(employeeObj);
    
    const employeeContainer = employeesList.map((item, index) => {
        return`<div key=${item.id} class="data">
           <p>${item.id}
           &nbsp &nbsp Name: ${item.name} 
           &nbsp &nbsp Profession: ${item.profession} 
           &nbsp &nbsp Age: ${item.age}</p>
           <button id="delete" onclick = 'deleteEmployee(this)'>Delete</button>
        </div>`
    });
    
    employeeData.innerHTML = employeeContainer;
    msg.innerText = "Success : Employee Added!";

}


function deleteEmployee(ele){
    let id = ele.parentElement.getAttribute('key');
    console.log(employeesList);

    employeesList = employeesList.filter((item) => item.id!=id);
    console.log(employeesList);
    ele.parentElement.remove();
   
}