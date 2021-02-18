//DOM Load 
document.addEventListener('DOMContentLoaded', () => {

    displaySymbol();

    displaySymbolEquality();

    displaySymbolObject();



})


function displaySymbol() {

    // 1. Create an id constant that store Symbol with id debugging string 

    const id1 = Symbol('id1')

    //2. Display the symbol on ui as string using toString()
    symbolResult.innerHTML = id1.toString();

}

function displaySymbolEquality() {

    // 1. Create an id1 constant that store Symbol with id debugging string 
    const id2 = Symbol('id')
    // 2. Create an id2 constant that store Symbol with id debugging string 
    const id3 = Symbol('id')

    // 3. Compare their equality (===) , store it on result variable
    function Compare(){
        return id3 === id2
    }

    //2. Display the result variable [Remove the string once you have the variable]
    symbolEquality.innerHTML = Compare();



}

function displaySymbolObject() {

    // A Student Object 
    const student = { name: "Abebe", age: 21, year: "2dn year" }

    // 1. Create an id constant that store Symbol with id debugging string 
    const id3 = Symbol('id')

    //2. Add the symbol property to the object [this will be considered as hidden property]
    student[id3] = 1234
    //3. Let the Id value be 1234
    // Note : user [] 


    //Display the object on console 
    console.log(student);

    symbolObject.innerHTML = student[id3];

}
