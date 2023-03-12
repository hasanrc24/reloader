let status = false;
let min = 2000;
let max = 6000;
const button = document.getElementById("btn");
const start = document.getElementById("start");
const stops = document.getElementById("stop");

let intervalId;
let randomInterval;

function startReload() {
  //   status = true;
  //   start.style.display = "none";
  //   stops.style.display = "block";
  intervalId = setInterval(function () {
    randomInterval = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomInterval);
    location.reload();
  }, randomInterval);
}

function stopReload() {
  //   status = false;
  //   stops.style.display = "none";
  //   start.style.display = "block";
  clearInterval(intervalId);
}

start.addEventListener("click", startReload);
stops.addEventListener("click", stopReload);
// function main() {
//   if (status === true) {
//     start.style.display = "none";
//   } else {
//     stops.style.display = "none";
//   }
// }

// main();
