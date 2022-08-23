//months
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
//weekdays
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

//select items
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format p");

let futureDate = new Date(2022, 11, 25, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}:${minutes}`;

//time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  console.log(t);
  //1s = 1000ms
  //1m = 60s
  //1h = 60min
  //1day = 24h

  //values in ms
  const oneDay = 24 * 60 * 60 * 1000; // 1day in ms
  const oneHour = 60 * 60 * 1000; // 1hour in ms
  const oneMinute = 60 * 1000; // 1min in ms

  let days = t / oneDay;
  days = Math.floor(days); // integer (ceo broj)

  let hours = t / oneHour;
  hours = Math.floor((t % oneDay) / oneHour);

  let minutes = t / oneMinute;
  minutes = Math.floor((t % oneHour) / oneMinute);

  let seconds = t / 1000;
  seconds = Math.floor((t % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  //giveaway expired
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class='expired'>sorry, this giveaway has expired :"(</h4>`;
  }
}
//countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
