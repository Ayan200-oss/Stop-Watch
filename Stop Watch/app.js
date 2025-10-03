var hoursheading = document.getElementById("hours");
var minutesheading = document.getElementById("minutes");
var secondsheading = document.getElementById("seconds");
var millisecondsheading = document.getElementById("milliseconds");

var hours = 0;
var minutes = 0;
var seconds = 0;
var milliseconds = 0;

var interval;

function timer(){
    milliseconds++;
    if(milliseconds >= 100){
        milliseconds = 0;
        seconds++;
        if(seconds >= 60){
            seconds = 0;
            minutes++;
            if(minutes >= 60){
            minutes = 0;
            hours++;
            }

        }
    }

    hoursheading.innerText = hours.toString().padStart(2, "0");
    minutesheading.innerText = minutes.toString().padStart(2, "0");
    secondsheading.innerText = seconds.toString().padStart(2, "0");
    millisecondsheading.innerText = milliseconds.toString().padStart(2, "0");
}

function start(){
     clearInterval(interval); 
 interval = setInterval(timer , 10);

}

function stop(){
    clearInterval(interval);
}

function reset(){
 hours = 0;
 minutes = 0;
 seconds = 0;
 milliseconds = 0;

 hoursheading.innerText = "00";
 minutesheading.innerText = "00";
 secondsheading.innerText = "00";
 millisecondsheading.innerText = "00";

}
