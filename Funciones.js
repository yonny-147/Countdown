'use strict';

const day = document.querySelector('.pos1');
const hour = document.querySelector('.pos2');
const minute = document.querySelector('.pos3');
const second = document.querySelector('.pos4');

const updateCountdown = (deadline) => {
  const time = new Date();
  const remainTime = (new Date(deadline) - time) / 1000;

  if (remainTime <= 0) {
    // Deadline reached, stop the countdown
    clearInterval(countdownInterval);
    return;
  }

  const seconds = ('0' + Math.floor(remainTime % 60)).slice(-2);
  const minutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2);
  const hours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2);
  const days = Math.floor(remainTime / (3600 * 24));

  if(days > 99){
    day.style.left = '20px'
  }
  day.textContent = `${days}`;
  hour.textContent = `${hours}`;
  minute.textContent = `${minutes}`;
  second.textContent = `${seconds}`;
};

const countdownInterval = setInterval(() => {
  updateCountdown('Mon Jan 01 2024 00:00:00 GMT-0500');
}, 1000);


