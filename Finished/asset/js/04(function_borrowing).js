//DOM Load 
document.addEventListener('DOMContentLoaded', () => {


    usingCall();
    usingApply();
    usingBind();


});

//Brad Person Object 
const Brad = {
    firstName: "Brad",
    lastName: "Bansely",
    fullName: function(ui_place, message) {

        ui_place.innerHTML = `${message} ${this.firstName} ${this.lastName}`;

    }
}

function usingCall() {
    const x = document.getElementById('call_demo')
    //Cerscy Person Object 
    //x.innerHTML = "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"
    const Cerscy = {
        firstName: "Cerscy ",
        lastName: "Lanster",
    }
    Brad.fullName.call(Cerscy,call_demo, 'HI I am')
    //1. Borrow fullName using call
    //2. Pass call_demo[as ui_place] , Hi I am ,[message]
    //x.innerHTML = `${firstName} ${lastName}`



}

function usingApply() {
    const y = document.getElementById('apply_demo')
    //Jon Person Object 
    const Jon = {
        firstName: "Jon",
        lastName: "Snow",
    }
    Brad.fullName.apply(Jon,[apply_demo, 'HI I am'])
    //1. Borrow fullName using apply
    //2. Pass apply_demo[as ui_place] and Hi I am ,[as message] as array
    //y.innerHTML = `${fname} ${lname}`
}

function usingBind() {
    
    //Daenerys Person Object 
    const Daenerys = {
        firstName: "Daenerys",
        lastName: "Targaryen",
    }
    let daenerys = Brad.fullName.bind(Daenerys,bind_demo,'HI I am')
    daenerys()
    //1. Borrow fullName using bind
    //2. Pass bind_demo[as ui_place] , Hi I am ,[as message]


}