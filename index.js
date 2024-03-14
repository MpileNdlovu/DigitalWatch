const myH1 = document.getElementById("myH1");
const hoursInput = document.getElementById("hours");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");
const setAlarm_H1 = document.getElementById("setAlarm_H1");
const myH3 = document.getElementById("myH3");
let myHours;
let myMinutes;
let mySeconds;
let myId;
let tracker = true;

setInterval(updateTime, 1000);

function updateTime() {
  const time = new Date();
  let hours = time.getHours().toString().padStart(2, "0");
  let minutes = time.getMinutes().toString().padStart(2, "0");
  let seconds = time.getSeconds().toString().padStart(2, "0");

  myH1.textContent = `${hours}:${minutes}:${seconds}`;
}

function setAlarm() {
  myHours = hoursInput.value;
  myMinutes = minutesInput.value;
  mySeconds = secondsInput.value;
  setAlarm_H1.textContent = `Time Is Set!!!`;
  myHours = myHours.toString().padStart(2, "0");
  myMinutes = myMinutes.toString().padStart(2, "0");
  mySeconds = mySeconds.toString().padStart(2, "0");
  myH3.textContent = `${myHours}:${myMinutes}:${mySeconds}`;

  myId = setInterval(updateValues, 500);
}

function updateValues() {
  const time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();

  if (hours == myHours && minutes == myMinutes) {
    if (tracker) {
      setAlarm_H1.textContent = `Time Is Up!!!`;
      tracker = false;
    } else {
      setAlarm_H1.textContent = ``;
      tracker = true;
    }
  }
}

function deleteAlarm() {
  clearInterval(myId);
  myH3.textContent = `00:00:00`;
  setAlarm_H1.textContent = `Set Alarm!!!`;
}
