//I can write JavaScript
console.log("START OF TEST");

//let sometxt = "template literal text test";

//alert(`Whatever I want + some liteal temaplate text:${sometxt}`);

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

//Function for testing USER updates to the page
function ShowDOMmsg(){
    //console.log('Log if NEW BUTTON worked'); //Quick test to see if script is linked
    const today = new Date();
    const fmtDate = today.toLocaleDateString(); 
    const fmtTime = today.toLocaleTimeString();

    //TIME
    let msgTime = `Page is updated at: ${fmtTime}`;

    //DATE
    let msgDate = `Page is updated today at: ${fmtDate}`

    let outputMsg = `Time: ${msgTime} \n Date:${msgDate}` //fix new line

    document.getElementById('testOutput').textContent = outputMsg;
}


console.log("END OF TEST");