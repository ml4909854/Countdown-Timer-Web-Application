let timeremain;
let timervalid = null

function startInterval() {
    let hours = Number(document.getElementById("hours").value)
    let minutes = Number(document.getElementById("minutes").value)
    let seconds = Number(document.getElementById("seconds").value)

    timeremain = hours*3600 + minutes*60 + seconds

    timervalid = setInterval(function(){
        timeremain--

        let hrs = Math.floor(timeremain/3600)
        let min = Math.floor((timeremain%3600)/60)
        let sec = timeremain%60

        document.getElementById("hours").value = hrs
        document.getElementById("minutes").value = min
        document.getElementById("seconds").value = sec

        if(timeremain<=0){
            clearInterval(timervalid)
            timervalid = null
            alert(`task is Ended`)
        }

    } , 1000)
}
    function stopInterval(){
        clearInterval(timervalid)
    }

    function resetInterval(){
       clearInterval(timervalid)
       document.getElementById("hours").value = 0
       document.getElementById("minutes").value = 0
       document.getElementById("seconds").value = 0
    }