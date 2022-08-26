
var  number_of_key_buttons = document.querySelectorAll(".key").length;
/*
for(var i = 0; i < number_of_key_buttons ; i++){

    document.querySelectorAll(".key")[i].addEventListener("click", function () {  
     
    var button_Inner_HTML = document.getElementById("ae").getElementsByClassName("key")[i].innerHTML;
    Key_Sound(button_Inner_HTML);    

    });
you can also use this but It's working for only onne notes
}
*/


function savior(i){
    var button_Inner_HTML = document.getElementById("ae").getElementsByClassName("key")[i].innerHTML;
    Key_Sound(button_Inner_HTML);
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