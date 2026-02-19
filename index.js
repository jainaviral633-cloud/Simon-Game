var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var currentLevel = 1;
function nextSequence(){

    $("h1").text("Level " + currentLevel);
    currentLevel++;

    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    flash(randomChosenColour);
}
function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    playSound(currentColour);

    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    } , 100);

}
function flash(button){
    $("#" + button).hide();
    $("#" + button).fadeIn();
    playSound(button);
}

function playSound(name){
    const buttonSound = new Audio("./sounds/" + name + ".mp3");
    buttonSound.play();
}
function handler(button){
    userChosenColour = button;
    userClickedPattern.push(button);
    console.log(userClickedPattern);
}
$(".btn").click(function(event){
    animatePress(event.target.id);
    handler(this.id);
    judge();
});


function judge(){

    if(userClickedPattern[userClickedPattern.length-1]!=gamePattern[userClickedPattern.length-1]){
        wrong();
    }
    else if(userClickedPattern.length==gamePattern.length){

        userClickedPattern.length = 0;
        setTimeout(nextSequence , 1000);

    }
}
function wrong(){
    $("body").addClass("game-over");
    playSound("wrong");
    setTimeout(function(){
        $("body").removeClass("game-over");
    } , 200);
    userClickedPattern.length = 0;
    gamePattern.length = 0;
    $("h1").text("Game Over, Press Any Key to Restart");
    currentLevel = 1;

}

$(document).keydown(function(){
    if(gamePattern.length==0){
        nextSequence();
    }
});



