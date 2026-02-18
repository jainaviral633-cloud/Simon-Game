var audio = new Audio("./sounds/tom-1.mp3");
for(var i = 0 ; i<(document.querySelectorAll("button")).length ; i++){
(document.querySelectorAll("button"))[i].addEventListener("click" , function(){
    // audio.play();
    var b = this.innerHTML;
    var audio;
    switch (b) {
        case "w":
            audio = new Audio("./sounds/tom-1.mp3");
            break;
        
        case "a":
            audio = new Audio("./sounds/tom-2.mp3");
            
            break;
        case "s":
            audio = new Audio("./sounds/tom-3.mp3");
            
            break;
        case "d":
            audio = new Audio("./sounds/tom-4.mp3");
            
            break;
        
        case "j":
            audio = new Audio("./sounds/snare.mp3");
            
            break;
        case "k":
            audio = new Audio("./sounds/crash.mp3");
            
            break;
        case "l":
            audio = new Audio("./sounds/kick-bass.mp3");
            
            break;
    
    }

        audio.play();
});
}

document.addEventListener("keydown" , function(event){
    // audio.play();
    var b = event.key;
    var audio;
    switch (b) {
        case "w":
            audio = new Audio("./sounds/tom-1.mp3");
            break;
        
        case "a":
            audio = new Audio("./sounds/tom-2.mp3");
            
            break;
        case "s":
            audio = new Audio("./sounds/tom-3.mp3");
            
            break;
        case "d":
            audio = new Audio("./sounds/tom-4.mp3");
            
            break;
        
        case "j":
            audio = new Audio("./sounds/snare.mp3");
            
            break;
        case "k":
            audio = new Audio("./sounds/crash.mp3");
            
            break;
        case "l":
            audio = new Audio("./sounds/kick-bass.mp3");
            
            break; 
    
    }

        audio.play();
});
