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
var crystal2Value = Math.floor(Math.random() * 10 + 1);
var crystal3Value = Math.floor(Math.random() * 10 + 1);
var crystal4Value = Math.floor(Math.random() * 10 + 1);

// Create on.click function for the crystals to add to the total variable
$("#CrystalButton1").on("click", function (event) {
    userTP = crystal1Value + userTP;
    console.log(userTP);
    document.getElementById("userTotalPoints").innerHTML = ("Your Total Points: " + userTP);

    if (userTP === startingRandomNumber) {
        winner++;
        console.log(winner);
        document.getElementById("playerWins").innerHTML = ("Player Wins: " + winner);
        userTP = 0;
        document.getElementById("userTotalPoints").innerHTML = ("Your Total Points: " + userTP);
        crystal1Value = Math.floor(Math.random() * 10 + 1);
        startingRandomNumber = Math.floor(Math.random() * 101 + 19);
        document.getElementById("initialNumberChallenge").innerHTML = ("Meet this number exactly: " + startingRandomNumber);
    };

    if (userTP > startingRandomNumber) {
        loser++;
        console.log(loser);
        document.getElementById("playerLosses").innerHTML = ("Player Losses: " + loser);
        userTP = 0;
        document.getElementById("userTotalPoints").innerHTML = ("Your Total Points: " + userTP);
        crystal1Value = Math.floor(Math.random() * 10 + 1);
        startingRandomNumber = Math.floor(Math.random() * 101 + 19);
        document.getElementById("initialNumberChallenge").innerHTML = ("Meet this number exactly: " + startingRandomNumber);
    };

});

// Replicating for Crystal Button 2
// But there's a better method than repeating the same code for the additional crystals

$("#CrystalButton2").on("click", function (event) {
    userTP = crystal2Value + userTP;
    console.log(userTP);
    document.getElementById("userTotalPoints").innerHTML = ("Your Total Points: " + userTP);

    if (userTP === startingRandomNumber) {
        winner++;
        console.log(winner);
        document.getElementById("playerWins").innerHTML = ("Player Wins: " + winner);
        userTP = 0;
        document.getElementById("userTotalPoints").innerHTML = ("Your Total Points: " + userTP);
        crystal1Value = Math.floor(Math.random() * 10 + 1);
        startingRandomNumber = Math.floor(Math.random() * 101 + 19);
        document.getElementById("initialNumberChallenge").innerHTML = ("Meet this number exactly: " + startingRandomNumber);
    };

    if (userTP > startingRandomNumber) {
        loser++;
        console.log(loser);
        document.getElementById("playerLosses").innerHTML = ("Player Losses: " + loser);
        userTP = 0;
        document.getElementById("userTotalPoints").innerHTML = ("Your Total Points: " + userTP);
        crystal1Value = Math.floor(Math.random() * 10 + 1);
        startingRandomNumber = Math.floor(Math.random() * 101 + 19);
        document.getElementById("initialNumberChallenge").innerHTML = ("Meet this number exactly: " + startingRandomNumber);
    };

});

// Replicating for Crystal Button 3

$("#CrystalButton3").on("click", function (event) {
    userTP = crystal3Value + userTP;
    console.log(userTP);
    document.getElementById("userTotalPoints").innerHTML = ("Your Total Points: " + userTP);

    if (userTP === startingRandomNumber) {
        winner++;
        console.log(winner);
        document.getElementById("playerWins").innerHTML = ("Player Wins: " + winner);
        userTP = 0;
        document.getElementById("userTotalPoints").innerHTML = ("Your Total Points: " + userTP);
        crystal1Value = Math.floor(Math.random() * 10 + 1);
        startingRandomNumber = Math.floor(Math.random() * 101 + 19);
        document.getElementById("initialNumberChallenge").innerHTML = ("Meet this number exactly: " + startingRandomNumber);
    };

    if (userTP > startingRandomNumber) {
        loser++;
        console.log(loser);
        document.getElementById("playerLosses").innerHTML = ("Player Losses: " + loser);
        userTP = 0;
        document.getElementById("userTotalPoints").innerHTML = ("Your Total Points: " + userTP);
        crystal1Value = Math.floor(Math.random() * 10 + 1);
        startingRandomNumber = Math.floor(Math.random() * 101 + 19);
        document.getElementById("initialNumberChallenge").innerHTML = ("Meet this number exactly: " + startingRandomNumber);
    };

});

// Replicating for Crystal Button 4

$("#CrystalButton4").on("click", function (event) {
    userTP = crystal4Value + userTP;
    console.log(userTP);
    document.getElementById("userTotalPoints").innerHTML = ("Your Total Points: " + userTP);

    if (userTP === startingRandomNumber) {
        winner++;
        console.log(winner);
        document.getElementById("playerWins").innerHTML = ("Player Wins: " + winner);
        userTP = 0;
        document.getElementById("userTotalPoints").innerHTML = ("Your Total Points: " + userTP);
        crystal1Value = Math.floor(Math.random() * 10 + 1);
        startingRandomNumber = Math.floor(Math.random() * 101 + 19);
        document.getElementById("initialNumberChallenge").innerHTML = ("Meet this number exactly: " + startingRandomNumber);
    };

    if (userTP > startingRandomNumber) {
        loser++;
        console.log(loser);
        document.getElementById("playerLosses").innerHTML = ("Player Losses: " + loser);
        userTP = 0;
        document.getElementById("userTotalPoints").innerHTML = ("Your Total Points: " + userTP);
        crystal1Value = Math.floor(Math.random() * 10 + 1);
        startingRandomNumber = Math.floor(Math.random() * 101 + 19);
        document.getElementById("initialNumberChallenge").innerHTML = ("Meet this number exactly: " + startingRandomNumber);
    };

});
