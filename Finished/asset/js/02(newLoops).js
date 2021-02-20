//DOM Load 
document.addEventListener('DOMContentLoaded', () => {

    forINLoop();

    forOFLoop();
    
})



function forINLoop() {

    // A Student Object 
    const student = { name: "Abebe", age: 21, year: "2dn year" }
   
    var properties = document.getElementById('forInLoop')
    //x.innerHTML = student.name
    // 1. Create a for in loop that iterate over the student object
    //for(key in student){}
    for (value in student){
        properties.innerHTML +=
        `<li class='list-group-item'>${value}:${student[value]}</li>`
    }
    
    // 2. Inside the loop paint the UI [Use the Format Given Below]


    //Use this Format 

    // forInLoop.innerHTML +=
    //     `
    //     <li class="list-group-item" >${Key} : ${Value}</li>

    // `;

}


function forOFLoop() {

    // A Students Array
    const students = [{ name: "Abebe", age: 21, year: "2dn year" }, { name: "Kebede", age: 22, year: "2dn year" }, { name: "Abebech", age: 23, year: "2dn year" }]
    var properties = document.getElementById('forOfLoop')
    // 1. Create a for of loop that iterate over the students Array and displays the names of students 

    for(values of students){
        properties.innerHTML += `<li class='list-group-item'>${values.name}</li>`
    }
    // 2. Inside the loop paint the UI [Use the Format Given Below]


    //Use this Format 

    // forOfLoop.innerHTML +=
    //     `
    //     <li class="list-group-item" >Name : Abebe</li>

    // `;

}