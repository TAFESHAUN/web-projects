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

    let outputMsg = `Time: ${msgTime} <br> Date:${msgDate}` 

    document.getElementById('testOutput').innerHTML = outputMsg;
}


//TODO - Pet Manager Test Section
let pets = [];
let editIndex = -1;

function AddorUpdatePet() {
    //Read in values from my form
    let name = document.getElementById('petName').value;
    let type = document.getElementById('petType').value;
    let desc = document.getElementById('petDesc').value;

    //Validation rules comeback to later
    if(name === ''){
        alert('Enter a name before cont...')
        return; //simple validation test
    }

    //Group Of the PET form information
    let newPet = {
        petName: name,
        petType: type,
        petDesc: desc,
        dateAdded: new Date().toLocaleDateString()
    };

    //DO stuff with the form
    if (editIndex === -1){
        pets.push(newPet);
        console.log('Added a new pet', newPet);
    }
    else { //NEEDS TO BE IMPLAMENTED
        //IF i have a pet to update go add it to the index in the array
        pets[editIndex] = newPet;
        console.log('Updated index', editIndex);
    }

    //TODO - Clear Form Function
    ClearForm();

    //TODO - Show Pets
    ShowPets();

}

function ClearForm(){
    //CLEAR OUR INPUT
    document.getElementById('petName').value = '';
    document.getElementById('petType').value = '';
    document.getElementById('petDesc').value = '';

    //Reset ID
    editIndex = -1;

    //TODO - Make Cancel Appear when we fill out
    document.getElementById('cancelBtn').style.display = 'none'

    //Consider styling for active and non active
}

function ShowPets(){
    let container = document.getElementById('petList');

    //No pets
    if(pets.length === 0){
        container.innerHTML = '<p>No Pets Added Yet! </p>'
        return
    }

    let htmlOutput = '';

    for(let i = 0; i < pets.length; i++){
        let pet = pets[i];
        htmlOutput += `
        <div>
            <h3>${pet.petName}</h3>
            <p>Type: ${pet.petType}</p>
            <p>Desc: ${pet.petDesc}</p>
            <p><strong>Date:</strong> ${pet.dateAdded}</p>
            <br>
        </div>
        `;
    }

    document.getElementById('petList').innerHTML = htmlOutput;
}


console.log("END OF TEST");