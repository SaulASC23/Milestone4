let submitButton = document.getElementById("submit");
let divRef = document.getElementById("output")

let job = document.getElementById("job");
let house = document.getElementById("house");
let pet = document.getElementById("pet");
let college = document.getElementById("college");

submitButton.onclick = function() {
    event.preventDefault();

    divRef.innerHTML = mash()
    job.value = "";
    house.value = "";
    pet.value = "";
    college.value = "";
}



function mash() {
    // Extra Credit Part where I have to make the worst possibility part
    let a = getHome();
    let b = getTravelCount();
    let c = getPet();
    let d = getCollege();
    let e = getJob();
    if (a === "Shack" && b === 1 && c === "Dragon" && d === "No College" && e === "No job") {
        return ("You got really unlucky :c");
    }
    else {
    return ("You will live in a " + a + " and travel to " + b + " countries, and have a pet " + c + ". You'll also go to " + d + " and in the future you'll hold " + e + " as a position!!!");
    }
}
a = mash();
console.log(a);
    
// Step 3
function randNumGenerator(int) {
    let b = parseInt((Math.random() * int));
    return b;
}
    
// Step 4
function getHome() {
    let option = house.value;
    let array = ["Mansion", "Castle", "Shack", "House"];
    if (!option) {
        let randind = randNumGenerator(array.length);
        let b = array[randind];
        return b;
    }
    else {
        array.push(option);
        let randind = randNumGenerator(array.length);
        let b = array[randind];
        return b;
    }
}
    
// Step 5
function getTravelCount() {
    let a = randNumGenerator(101);
    return a;
}
    
// Step 6
function getPet() {
    let userPets = pet.value;
    let randomPets = ["Dog", "Dragon", "Pikachu", "Cubone", "Cat", "Sheep", "Snowman"];
    let a = randNumGenerator(randomPets.length);
    let b = randomPets[a];
    if (!userPets) {
        return b;
    }
    else {
        let c = randNumGenerator(3)
        if (c == 1) {
            return b;
        }
        else {
            return userPets;
        }
    }
}
    
// Step 10
function getCollege() {
    let colleges = college.value
    let randomColleges = ["Stanford", "MIT", "Carnegie Mellon", "Harvard", "UPenn", "Columbia", "ASC", "No College"];
    let a = randNumGenerator(randomColleges.length);
    let b = randomColleges[a];
    if (!colleges) {
        return b;
    }
    else {
        let c = randNumGenerator(3)
        if (c == 1) {
            return b;
        }
        else {
            return colleges;
        }
    } 
}
    
function getJob() {
    let jobs = job.value;
    let randomJobs = ["IT Help", "Tech Help", "Computer Science Teacher", "Computer Engineer", "Helper", "Assistant", "Fellow", "No job"];
    let a = randNumGenerator(randomJobs.length);
    let b = randomJobs[a];
    if (!jobs) {
        return b;
    }
    else {
        let c = randNumGenerator(3)
        if (c == 1) {
            return b;
        }
        else {
            return jobs;
        }
    } 
}
    