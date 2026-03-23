/*jslint browser: true */

/**
 * @file adopt.js
 * @description Pawsome Pets — Adoption Manager
 *
 * NOTE: Pawsome pets with the algo's we learned so far...
 *  - insertionAlgorithm  : adds a pet to the collection
 *  - deletionAlgorithm   : removes a pet from the collection
 *  - binarySearchAlgorithm : validates a breed exists
 *  - sequentialSearchAlgorithm : searches pets by name
 *
 * DOM interaction: add, delete, mark-as-adopted, and search pets.
 * Dark-theme toggle included on all pages.
 */


/**
 * Inserts a value at a specified index in an array using a manual shift-right loop.
 */
function insertionAlgorithm(arr, index, value) {
    var i;
    for (i = arr.length; i > index; i = i - 1) {
        arr[i] = arr[i - 1];
    }
    arr[index] = value;
}


/**
 * Removes the element at a specified index using a manual shift-left loop.
 */
function deletionAlgorithm(arr, index) {
    var i;
    for (i = index; i < arr.length - 1; i = i + 1) {
        arr[i] = arr[i + 1];
    }
    arr.length = arr.length - 1;
}


/**
 * Binary search to validate a breed exists in the list.
 */
function binarySearchAlgorithm(targetBreed) {

    // Ensure array is sorted
    breedsArray.sort();

    var low  = 0;
    var high = breedsArray.length - 1;
    var mid;
    var breed;

    while (low <= high) {
        mid   = Math.floor((low + high) / 2);
        breed = breedsArray[mid];

        if (breed === targetBreed) {
            return breed;

        } else if (breed < targetBreed) {
            low = mid + 1;

        } else {
            high = mid - 1;
        }
    }

    return null;
}


/**
 * Sequential search for pet by name.
 */
function sequentialSearchAlgorithm(arr, query) {
    var i;
    for (i = 0; i < arr.length; i = i + 1) {
        if (arr[i].name === query) {
            return i;
        }
    }
    return -1;
}


// Main pet array
var pets = [];

/**
 * Breed list 
 */
var breedsArray = [
    "Beagle",
    "Border Collie",
    "British Shorthair",
    "Chihuahua",
    "Dachshund",
    "Domestic Shorthair",
    "French Bulldog",
    "German Shepherd",
    "Golden Retriever",
    "Greyhound",
    "Himalayan",
    "Labrador Retriever",
    "Maine Coon",
    "Persian",
    "Poodle",
    "Ragdoll",
    "Siamese",
    "Siberian Husky",
    "Tabby",
    "Yorkshire Terrier"
];


// DOM container
var petsList = document.getElementById("petsList");


/**
 * Creates a pet card
 */
function createPetCard(index) {

    var pet = pets[index];

    var article = document.createElement("article");
    article.className = "pet-card";
    article.setAttribute("data-index", index);

    if (pet.adopted) {
        article.className = "pet-card adopted";
    }

    var p = document.createElement("p");
    p.innerText = (
        "Name: "  + pet.name  + " | " +
        "Breed: " + pet.breed + " | " +
        "Age: "   + pet.age   + " yrs | " +
        "Added: " + pet.dateAdded
    );

    var desc = document.createElement("p");
    desc.className = "pet-desc";
    desc.innerText = pet.description;

    var actions = document.createElement("div");
    actions.className = "actions";

    var adoptBtn = document.createElement("button");
    adoptBtn.innerText = pet.adopted ? "Undo Adoption" : "Mark as Adopted";

    var deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete-btn";

    adoptBtn.addEventListener("click", function () {
        markAdopted(index);
    });

    deleteBtn.addEventListener("click", function () {
        deletePet(index);
    });

    actions.appendChild(adoptBtn);
    actions.appendChild(deleteBtn);

    article.appendChild(p);
    article.appendChild(desc);
    article.appendChild(actions);

    return article;
}


/**
 * Refresh display
 */
function updateDisplay() {

    if (!petsList) {
        return;
    }

    petsList.innerHTML = "";

    if (pets.length === 0) {
        petsList.innerHTML = "<p class='empty-msg'>No pets added yet. Use the form above to add one! 🐾</p>";
        return;
    }

    var i;
    for (i = 0; i < pets.length; i = i + 1) {
        petsList.appendChild(createPetCard(i));
    }
}


/**
 * Add pet
 */
function addPet() {

    var name        = document.getElementById("petName").value.trim();
    var breed       = document.getElementById("petBreed").value;
    var age         = document.getElementById("petAge").value.trim();
    var description = document.getElementById("petDesc").value.trim();

    if (name === "") {
        alert("Please enter a pet name before adding.");
        return;
    }

    if (age !== "" && (isNaN(age) || Number(age) < 0)) {
        alert("Please enter a valid age (positive number).");
        return;
    }

    // Validate breed exists
    var foundBreed = binarySearchAlgorithm(breed);

    if (!foundBreed) {
        alert("Please select a valid breed.");
        return;
    }

    var newPet = {
        name:        name,
        breed:       breed,
        age:         age !== "" ? Number(age) : "Unknown",
        description: description !== "" ? description : "No description provided.",
        dateAdded:   new Date().toLocaleDateString(),
        adopted:     false
    };

    insertionAlgorithm(pets, pets.length, newPet);

    document.getElementById("petName").value  = "";
    document.getElementById("petBreed").selectedIndex = 0;
    document.getElementById("petAge").value   = "";
    document.getElementById("petDesc").value  = "";

    updateDisplay();
}


/**
 * Toggle adopted
 */
function markAdopted(index) {
    pets[index].adopted = !pets[index].adopted;
    updateDisplay();
}


/**
 * Delete pet
 */
function deletePet(index) {
    deletionAlgorithm(pets, index);
    updateDisplay();
}


/**
 * Search pet
 */
function searchPet() {

    var query    = document.getElementById("searchName").value.trim();
    var resultEl = document.getElementById("searchResult");

    var idx = sequentialSearchAlgorithm(pets, query);

    if (idx >= 0) {
        var found = pets[idx];
        resultEl.innerText = (
            "Found: " + found.name +
            " | Breed: "   + found.breed +
            " | Age: "     + found.age +
            " | Adopted: " + (found.adopted ? "Yes" : "No")
        );
    } else {
        resultEl.innerText = "Pet not found. Check the spelling and try again.";
    }
}


/**
 * Theme toggle
 */
function toggleDarkTheme() {
    document.body.classList.toggle("dark-theme");
}


document.addEventListener("DOMContentLoaded", function () {

    var addForm = document.getElementById("addForm");
    if (addForm) {
        addForm.addEventListener("submit", function (e) {
            e.preventDefault();
            addPet();
        });
    }

    var searchForm = document.getElementById("searchForm");
    if (searchForm) {
        searchForm.addEventListener("submit", function (e) {
            e.preventDefault();
            searchPet();
        });
    }

    var themeButtons = document.querySelectorAll(".theme-toggle");
    var t;
    for (t = 0; t < themeButtons.length; t = t + 1) {
        themeButtons[t].addEventListener("click", toggleDarkTheme);
    }
});