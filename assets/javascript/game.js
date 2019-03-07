/////////////
//VARIABLES//
/////////////
var robot = 0;
var soldier = 0;
var fortress = 0;
var skirmisher = 0;
//SCORING
var playerScore = 0;
var targetScore = 0;
//WINLOSS 
var playerWins = 0;
var PlayerLosses = 0;

///////////////////
//SET TARGETSCORE//
///////////////////
var targetScore = Math.floor((Math.random() * 120) + 19);

/////////////////
//UPDATE TARGET//
/////////////////
$("#targetScore").text(targetScore);

///////////
//(RE)SET//
///////////
newDmg();
winLoss();

////////////////////////////////
//GETTING ATTRIBUTES FROM HTML//
////////////////////////////////
$("#robot").attr("dmg", robot);
$("#soldier").attr("dmg", soldier);
$("#fortress").attr("dmg", fortress);
$("#skirmisher").attr("dmg", skirmisher);

////////////////
//RESET BUTTON//
//NEWDMG.NOWRK//
////////////////
$("#reload").on("click", function () {
    newDmg();
    console.log("RELOAD CLICKED");
});

///////////////
//CLICKS BABY//
///////////////
$("button").on("click", function () {
    functionalDmg = ($(this).attr("dmg"));
    playerScore += parseInt(functionalDmg);
    console.log(playerScore);
    updateScore();
});

////////////////////////
//UPDATING PLAYERSCORE//
////////////////////////
function updateScore() {
    $("#playerScore").text(playerScore);
}

/////////////////
//CHECK WINLOSS//
/////////////////
function winLoss() {
    if (playerScore === targetScore) {
        //win condition
        console.log("win condition");
        playerWins += 1;
        $("#playerWins").text(playerWins);
        newDmg();

    } else if (playerScore > targetScore) {
        //loss condition
        console.log("loss condition");
        PlayerLosses += 1;
        $("#playerLosses").text(playerLosses);
        newDmg();
    }
}

////////////////////////////
////random dmg generator////
//THIS IS THE RESET BUTTON//
////////////////////////////
function newDmg() {
    robot = Math.floor(Math.random() * 12 + 1);
    soldier = Math.floor(Math.random() * 12 + 1);
    fortress = Math.floor(Math.random() * 12 + 1);
    skirmisher = Math.floor(Math.random() * 12 + 1);
    playerScore = 0;
    targetScore = Math.floor((Math.random() * 120) + 19);
    console.log("newDmg triggered");
}

