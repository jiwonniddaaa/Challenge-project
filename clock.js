
const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0"); ///"1".padStart(2,"0") => 01 
    const minutes = String(date.getMinutes()).padStart(2,"0");
    clock.innerText=`${hours}꞉${minutes}`;
        setTimeout(function() {
            clock.innerText=`${hours} ${minutes}`;
          }, 500);
}

getClock();
setInterval(getClock, 1000);
