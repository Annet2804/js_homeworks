let days = document.getElementById("days")
let hours = document.getElementById("hours")
let mins = document.getElementById("minutes")
let seconds = document.getElementById("seconds")

function NewYearTimer() {

    let now= new Date();
    let newYearDate = new Date( now.getFullYear()+1,0,1)
    let miliseconds = newYearDate - now


    let days_s = Math.floor(miliseconds/ (1000*60*60*24));
    let hours_s = formatSMH(Math.floor((miliseconds/(1000*60*60))%24));
    let min_s = formatSMH(Math.floor((miliseconds/(1000*60))%60));
    let seconds_s = formatSMH(Math.floor((miliseconds/(1000))%60));

    days.innerHTML = days_s;
    hours.innerHTML = hours_s;
    mins.innerHTML = min_s;
    seconds.innerHTML = seconds_s
}

function formatSMH(num) {
    if (num < 10) {
        num = '0' + num;
    }
    return num;
}

setInterval(NewYearTimer, 1000)





