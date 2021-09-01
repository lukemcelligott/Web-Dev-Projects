//Create and intialize global variable (The first one is on me)
let oneCount = 0;
let twoCount = 0;
let threeCount = 0;
let fourCount = 0;
let fiveCount = 0;
let sixCount = 0;

function resetCounts() {
    // resets all of your counter variables
    // resets calls update table function so all values go back to 0

    // There is probably a better way to do this but this works
    oneCount = 0;
    document.getElementById("oneCount").innerHTML = oneCount;
    twoCount = 0;
    document.getElementById("twoCount").innerHTML = twoCount;
    threeCount = 0;
    document.getElementById("threeCount").innerHTML = threeCount;
    fourCount = 0;
    document.getElementById("fourCount").innerHTML = fourCount;
    fiveCount = 0;
    document.getElementById("fiveCount").innerHTML = fiveCount;
    sixCount = 0;
    document.getElementById("sixCount").innerHTML = sixCount;
    updateTable()
}

function rollOneSixSidedDie() {
    // returns a random number between 1 and 6
    let diceSides = 6;
    let randomNumber = Math.floor(Math.random() * diceSides + 1);
    console.log(randomNumber)
    return randomNumber
}

function simulateDiceRolls(numberOfRolls) {
    //for loop that simulates dice rolls
    //uses the passed in parameter to determine how may iterations to run
    // each iteration through the loop calls rollOneSixSidedDie and updates a global counter variable
    //outside of the loop calls updateTable

    // The table counted weird if I didn't update the table after every if statement (again, there is probably a better way to do this)
    for(i = 0; i <= numberOfRolls; i++) {
        let numberResult = rollOneSixSidedDie();
        if(numberResult == 1) {
            oneCount++;
            updateTable()
        }
        if (numberResult == 2) {
            twoCount ++;
            updateTable()
        }
        if (numberResult == 3) {
            threeCount ++;
            updateTable()
        }
        if (numberResult == 4) {
            fourCount ++;
            updateTable()
        }
        if (numberResult ==5) {
            fiveCount ++;
            updateTable()
        }
        if (numberResult == 6) {
            sixCount ++;
            updateTable()
        }
    }
    updateTable()
}

function updateTable() {
    // updates the cells in your table to reflect the counts
    let diceNumber = rollOneSixSidedDie();
    if(diceNumber == 1){
            document.getElementById("oneCount").innerHTML = oneCount;
        } 
    if(diceNumber == 2){
            document.getElementById("twoCount").innerHTML = twoCount;
        } 
    if(diceNumber == 3){
            document.getElementById("threeCount").innerHTML = threeCount;
        } 
    if(diceNumber == 4){
            document.getElementById("fourCount").innerHTML = fourCount;
        }  
    if(diceNumber == 5){
            document.getElementById("fiveCount" ).innerHTML = fiveCount;
        }  
    if(diceNumber == 6){
            document.getElementById("sixCount").innerHTML = sixCount;
        }
    }