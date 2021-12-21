const time = () => {
    const week = ['Воскресенье', "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

    let Data = new Date();
    let Day = Data.getDay();
    let hour = Data.getHours();

    function goodMorning() {
        if (hour > 6 && hour < 12) {
            return 'Доброе утро';
        } else if (hour > 12 && hour < 18) {
            return 'Добрый день';
        } else if (hour > 18 && hour < 24) {
            return 'Добрый вечер';
        } else {
            return 'Доброй ночи';
        }
    }

    function addZero(x) {
        if (x < 10) {
            return '0' + x;
        } else {
            return x;
        }
    }

    function formatAMPM(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let second = date.getSeconds();
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        let strTime = 'Текущее время: ' + addZero(hours) + ':' + addZero(minutes) + ':' + addZero(second) + " " + ampm;
        return strTime;
      }
    function getDayRemaining(endTime) {
        let delta = Math.floor((endTime - new Date()) / 1000);
        let days = Math.floor(delta / 86400);
        delta -= days * 86400;
        let dateStr = `${days}`;
        return 'До нового года осталось ' + dateStr + declOfNum(dateStr, [" день ", " дня ", " дней "]);
    }   

    function declOfNum(n, textForms) {  
        n = Math.abs(n) % 100; 
        let n1 = n % 10;
        if (n > 10 && n < 20) { return textForms[2]; }
        if (n1 > 1 && n1 < 5) { return textForms[1]; }
        if (n1 == 1) { return textForms[0]; }
        return textForms[2];
    }

    document.querySelector('.goodMorning').textContent = goodMorning();
    document.querySelector('.today').textContent = `Сегодня: ${week[Data.getDay()]}`;
    document.querySelector('.time').textContent = formatAMPM(new Date());
    document.querySelector('.newYear').textContent = getDayRemaining(new Date('2022-1-1'));


};
time();
setInterval(time, 1000);
export default time;