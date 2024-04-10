// start button
const btnStart = document.getElementById("start_time").addEventListener("click", function (){
    chrono = setInterval(function () {
        if (seconds < 59) {
            seconds++;
        } else {
            seconds = 0;
            minutes++;
            console.log(minutes);
        }
        console.log(seconds);
    }, 1000);
});
// stop button
const btnStop = document.getElementById("stop_time").addEventListener("click", function () {
    clearInterval(chrono)
})
const btnReset = document.getElementById("reset_time");

let chrono = 0; 
let seconds = 0;
let minutes = 0;


