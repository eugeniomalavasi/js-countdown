// prelevo elemento da dom
const hpnwyr = document.getElementById("countdown_print");


let seconds = 11;
const countDown = setInterval(() => {
    let result = "";
    if (seconds !== 1) {
        seconds--;
        console.log(seconds);
        // output
        hpnwyr.innerText = seconds;
    } else {
        result = "Buon Anno";
        clearInterval(countDown);
        console.log(result);
        // output
        hpnwyr.innerText = result;
    }
}, 1000);

