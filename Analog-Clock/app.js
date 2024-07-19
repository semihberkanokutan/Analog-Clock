const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');


function clock(){
    let now = new Date().toLocaleTimeString().split(':');
    let hour = now[0];
    let minute = now[1];
    let second = now[2];

    let hourDeg = hour * 30;
    let minuteDeg = minute * 6;
    let secondDeg = second * 6;

    secondHand.style.rotate = secondDeg + 'deg';
    minuteHand.style.rotate = minuteDeg + 'deg';
    hourHand.style.rotate = hourDeg + 'deg';
}

setInterval(clock, 1000);

// let now = new Date().toLocaleTimeString().split(':');
// let hour = now[0];
// let minute = now[1];
// let second = now[2];

// let hourDeg = hour * 30;
// let minuteDeg = minute * 6;
// let secondDeg = second * 6;


// window.addEventListener('DOMContentLoaded', function(){
//     let now = new Date().toLocaleTimeString().split(':');
//     console.log(now);
//     const hour = now[0];
//     const minute = now[1];
//     const second = now[2];

//     const currentSecond = second * 6;
//     secondHand.style.rotate = currentSecond + 'deg';

//     const currentMinute = minute * 6;
//     minuteHand.style.rotate = currentMinute + 'deg';

//     const currentHour = hour * 30;
//     hourHand.style.rotate = currentHour + 'deg';
// })

// function rotateSecHand() {
//     let now = new Date().toLocaleTimeString().split(':');
//     let second = now[2] * 6;
//     secondHand.style.rotate = second + 'deg';
// }

// function rotateMinHand() {
//     let now = new Date().toLocaleTimeString().split(':');
//     let minute = now[1] * 6;
//     minuteHand.style.rotate = minute + 'deg';
// }

// function rotateHourHand() {
//     let now = new Date().toLocaleTimeString().split(':');
//     let hour = now[0] * 30;
//     hourHand.style.rotate = hour + 'deg';
// }

// setInterval(rotateSecHand, 1000);
// setInterval(rotateMinHand, 1000);
// setInterval(rotateHourHand, 1000);
    

