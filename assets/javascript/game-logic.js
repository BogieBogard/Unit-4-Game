// Generate random number that the user will try to match, with Math.random and Math.floor
var startingRandomNumber = Math.floor(Math.random() * 101 + 19);

document.getElementById("initialNumberChallenge").innerHTML = ("Meet this number exactly: " + startingRandomNumber);

// Declare the user's Total Points and connect the crystals to that variable
let userTP = 0

document.getElementById("userTotalPoints").innerHTML = ("Your Total Points: " + userTP);

// Total variable from the user's input using the crytals

// Generate the four random numbers for each crystal
var crystal1Value = Math.floor(Math.random() * 10)

// Create on.click function for the crystals to add to the total variable
$ ("#CrystalButton1").on("click", function(event){
    
});
// Create function for win/lose for comparing the total with the given random number



