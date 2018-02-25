

// When game starts computer picks random number and displays to #randomNumber element in HTML
// computer also picks random number for each crystal but keeps that hidden
// #instructions element is hidden from HTML with the .hidden class
// each time the user clicks on a crystal, the random number assigned to that crystal is added to playerScoreCounter and printed to #playerScore element in HTML
// if playerScoreCounter === randomNumber winCounter is incremented by 1 and printed to #playerWins element in HTML
// if playerScoreCounter > randomNumber lossCounter is incremented by 1 and printed to #playerLosses element in HTML

$(document).ready(function () {

    var randomNumber = 0;
    var greenCrystal = 0;
    var blueCrystal = 0;
    var tealCrystal = 0;
    var orangeCrystal = 0;
    var playerScore = 0;
    var playerWins = 0;
    var playerLosses = 0;
    var lossCalculated = false;

    $("#playGame").on("click", function () {
        startGame();
    });

    // If time allows, figure out how to use $(this)
    // $(this).on("click", function() {
    //     playerScore = playerScore + $(this).val();
    //     $("#playerScore").text(playerScore);
    //     winLoss();
    // })

    $("#greenCrystal").on("click", function () {
        playerScore = playerScore + greenCrystal;
        $("#playerScore").text(playerScore);
        winLoss();
    })
    $("#blueCrystal").on("click", function () {
        playerScore = playerScore + blueCrystal;
        $("#playerScore").text(playerScore);
        winLoss();
    })
    $("#tealCrystal").on("click", function () {
        playerScore = playerScore + tealCrystal;
        $("#playerScore").text(playerScore);
        winLoss();
    })
    $("#orangeCrystal").on("click", function () {
        playerScore = playerScore + orangeCrystal;
        $("#playerScore").text(playerScore);
        winLoss();
    })

    function winLoss() {
        if (playerScore > 0 && playerScore === randomNumber) {
            playerWins++
            $("#playerWins").text(playerWins);
        } else if (playerScore > randomNumber) {
            //increments playerLosses if loss hasn't been recorded yet for that round of play
            if (lossCalculated === false) {
                playerLosses++
                $("#playerLosses").text(playerLosses);
            }
            lossCalculated = true;
        }
    }

    function startGame() {
        $("#gameInstructions").addClass("hide");

        //sets playerScore to 0 and lossCalculated to false to reset game play
        playerScore = 0;
        lossCalculated = false;

        //get random number between 19 and 120 by calling randomIntBetween function
        randomNumber = randomIntBetween(19, 120);

        //assign random nubmer between 1 and 12 to each crystal by calling randomIntBetween function
        greenCrystal = randomIntBetween(1, 12);
        blueCrystal = randomIntBetween(1, 12);
        tealCrystal = randomIntBetween(1, 12);
        orangeCrystal = randomIntBetween(1, 12);

        //add values to HTML
        $("#randomNumber").text(randomNumber);
        $("#playerScore").text(playerScore);
        $("#playerWins").text(playerWins);
        $("#playerLosses").text(playerLosses);

        //add value attribute to each crystal button in HTML. Can use this later to access value of crystal button clicked using $(this)
        $("#greenCrystal").attr("value", greenCrystal);
        $("#blueCrystal").attr("value", blueCrystal);
        $("#tealCrystal").attr("value", tealCrystal);
        $("#orangeCrystal").attr("value", orangeCrystal);
    }

    function randomIntBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

})



