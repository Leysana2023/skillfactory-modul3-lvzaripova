function timeCountdown() {
    const timDate = new Date("September 13, 2023 18:00");
    const now = new Date();
    const diff = timDate - now;
    //timeCountdown();

    const msinSecond = 1000;
    const msinMinute = 60*1000;
    const msinHour = 60*60*1000;
    const msinDay = 24*60*60*1000;

    const displayDay = Math.floor(diff/msinDay);
    document.querySelector(".DAYS").textContent = displayDay;

    const displayHour = Math.floor((diff%msinDay)/msinHour);
    document.querySelector(".HOURS").textContent = displayHour;

    const displayMinute = Math.floor((diff%msinHour)/msinMinute);
    document.querySelector(".MINUTES").textContent = displayMinute;

    const displayinSecond = Math.floor((diff%msinMinute)/msinSecond);
    document.querySelector(".SECONDS").textContent = displayinSecond;

    if (diff <= 0) {
        document.querySelector(".DAYS").textContent = 0;
        document.querySelector(".HOURS").textContent = 0;
        document.querySelector(".MINUTES").textContent = 0;
        document.querySelector(".SECONDS").textContent = 0;
        clearInterval(timerID);
        vitayoga();
    }
}

let timerID = setInterval (timeCountdown, 1000);
function vitayoga() {
    const heading = document.querySelector("h1");
    heading.textContent = "Welcome! We opened up.";
    heading.classList.add("sky");
}

const button = document.querySelector("#myButton");
button.addEventListener("click", function() {
document.querySelector("#myAudio").play();
})
