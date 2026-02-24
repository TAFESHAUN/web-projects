//I can write JavaScript
console.log("START OF TEST");

let petName = "Art";
var petAge = 3;
const shelterName = "Pawsome Pets";

console.log(`The pets name is: ${petName} 
    the pets age is ${petAge}. 
    And they are staying at ${shelterName}`)

petAge = 4;

console.log(`I updated the age to ${petAge}`);


//Try a BUTTON event
function testGreet() {
    let msg = "Welcome to Pawesome Pets"

    document.getElementById("tgreet").textContent = msg;
}

console.log("END OF TEST");