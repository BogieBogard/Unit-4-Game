// Generate random number that the user will try to match, with Math.random and Math.floor
var startingRandomNumber = Math.floor(Math.random() * 101 + 19);

document.getElementById("initialNumberChallenge").innerHTML = ("Meet this number exactly: " + startingRandomNumber);

// Declare variables for winning and losing and set up their display
var winner = 0;

document.getElementById("playerWins").innerHTML = ("Player Wins: " + winner);

var loser = 0;

document.getElementById("playerLosses").innerHTML = ("Player Losses: " + loser);

// Declare the user's Total Points and connect the crystals to that variable
var userTP = 0;

document.getElementById("userTotalPoints").innerHTML = ("Your Total Points: " + userTP);

// Total variable from the user's input using the crytals

// Generate the four random numbers for each crystal
var crystal1Value = Math.floor(Math.random() * 10 + 1);

// Create on.click function for the crystals to add to the total variable
$("document").ready(function () {
    $("#CrystalButton1").on("click", function (event) {
        userTP = crystal1Value + userTP;
        console.log(userTP);
        document.getElementById("userTotalPoints").innerHTML = ("Your Total Points: " + userTP);
    });
    // Create function for win/lose for comparing the total with the given random number
    var i;
    for (winner = 0; winner < 10; winner++) {
        if (userTP === startingRandomNumber) {
            console.log("Have a good day!");
            winner++;
            console.log(winner);
            document.getElementById("playerWins").innerHTML = ("Player Wins: " + winner);
        };

        if (userTP > 10) {
            console.log("Over ten!");
            loser++;
            console.log(loser);
            document.getElementById("playerLosses").innerHTML = ("Player Losses: " + loser);
        };

    };

});

