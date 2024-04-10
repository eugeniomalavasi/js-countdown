let seconds = 11;
const countDown = setInterval(() => {
    let result = "";
    if (seconds !== 1) {
        seconds--;
        console.log(seconds);
    } else {
        result = "Buon Anno";
        clearInterval(countDown);
    }
    console.log(result);
}, 1000);