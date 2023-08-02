window.addEventListener('DOMContentLoaded', () => {
    let timerActive = false;
    let timeouts = [];
    function reminder() {
        if (timerActive) {
            let audio = new Audio("beep.wav");
            audio.play();
            new window.Notification("Get Up", { body: "Now" })
            console.log("Notification sent");
            let id = setTimeout(reminder, 5000);
            timeouts.push(id)
        }
    }
    document.getElementById('plus5').addEventListener('click', () => {
        while (timeouts.length > 0) {
            clearTimeout(timeouts.pop());
        }
        console.log("Extending Time");
        let id = setTimeout(reminder, 1000*60*5);
        timeouts.push(id);
        timerActive = true;
    });
    
    document.getElementById('confirm').addEventListener('click', () => {
        while (timeouts.length > 0) {
            clearTimeout(timeouts.pop());
        }
        let workout = document.getElementById('workout');
        let eat = document.getElementById('eat');
        let stretch = document.getElementById('stretch');
        if (workout.checked)
        {
            let workoutProgress = document.getElementById('workoutProgress');
            workoutProgress.value += 1;
            workout.checked = false;
        }
        if (eat.checked)
        {
            let eatProgress = document.getElementById('eatProgress');
            eatProgress.value += 1;
            eat.checked = false;
        }
        if (stretch.checked)
        {
            let stretchProgress = document.getElementById('stretchProgress');
            stretchProgress.value += 1;
            stretch.checked = false;
        }
        console.log("Scheduling Notification");
        let id = setTimeout(reminder, 1000*60*60);
        timeouts.push(id);
        timerActive = true;
    });
    console.log("Scheduling Notification");
    let id = setTimeout(reminder, 1000*60*60);
    timeouts.push(id);
    timerActive = true;
})