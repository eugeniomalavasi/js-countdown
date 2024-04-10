let secondsPrint = document.getElementById("seconds");
let minutesPrint = document.getElementById("minutes")

// global var to save data
let chrono = 0; 
let seconds = 55;
let minutes = 0;

// start button
const btnStart = document.getElementById("start_time").addEventListener("click", function (){
    chrono = setInterval(function () {
        if (seconds < 59) {
            seconds++;
            console.log(seconds);
        } else {
            seconds = 0;
            minutes++;
            console.log(minutes);
        }
        // output
        // print seconds
        if (seconds <= 9) {
            secondsPrint.innerText = `0${seconds}`;
        } else {
            secondsPrint.innerText = seconds;
        }
        
        // print minutes
        if (minutes <= 9) {
            minutesPrint.innerText = `0${minutes}`;
        } else {
            minutesPrint.innerText = minutes;
        }
    }, 1000);
});

// stop button
const btnStop = document.getElementById("stop_time").addEventListener("click", function () {
    clearInterval(chrono);

})
// reset button
const btnReset = document.getElementById("reset_time").addEventListener("click", function () {
    seconds = 0;
    minutes = 0;
    secondsPrint.innerText = "00";
    minutesPrint.innerText = "00";
})




