
var  number_of_key_buttons = document.querySelectorAll(".key").length;

for(var i = 0; i < number_of_key_buttons ; i++){

    document.querySelectorAll(".key")[i].addEventListener("click", function () {  
     
    var button_Inner_HTML = this.innerHTML;
    Key_Sound(button_Inner_HTML);    

    });

}

document.addEventListener("keypress", function(event) { 

    Key_Sound(event.key);

;});

function Key_Sound(key){
    var directory = `sounds\\${key}.wav`;
    var audio = new Audio(directory);
    audio.play();
}






/*
    var audio = new Audio("sounds\\do.wav");
    audio.play();
*/