const timer = (deadLine) => {
    let timerHours = document.querySelector('#timer-hours');
    let timerMinutes = document.querySelector('#timer-minutes');
    let timerSeconds = document.querySelector('#timer-seconds');
    let timerId = null;

    const getTimeRemaining = () => {
        let dateStop = new Date(deadLine).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;

        let hours = Math.floor(timeRemaining / 60 / 60);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        if (timeRemaining <= 0) {
            clearInterval(timerId);
        }
        return {
            timeRemaining: timeRemaining,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };

    };

    const addZeroTimer = (x) => {
        if (x < 10) {
            return '0' + x;
        } else {
            return x;
        }
    };

    const updateClock = () => {
        let getTime = getTimeRemaining();
        timerHours.textContent = addZeroTimer(getTime.hours);
        timerMinutes.textContent = addZeroTimer(getTime.minutes);
        timerSeconds.textContent = addZeroTimer(getTime.seconds);
    };


    updateClock();
    timerId = setInterval(updateClock, 1000);

};
export default timer;