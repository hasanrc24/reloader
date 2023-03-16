let min = 4000;
let max = 8000;
const button = document.getElementById("btn");
const start = document.getElementById("start");
const stops = document.getElementById("stop");

let intervalId;

function randomNumber() {
  let randomInterval = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomInterval;
}

function startReload() {
  start.style.display = "none";
  stops.style.display = "block";
  console.log(randomNumber());
  if (!localStorage.getItem("isReloading")) {
    localStorage.setItem("isReloading", true);
    intervalId = setInterval(function () {
      chrome.tabs.reload();
    }, randomNumber());
  } else {
    intervalId = setInterval(function () {
      chrome.tabs.reload();
    }, randomNumber());
  }
}

function stopReload() {
  stops.style.display = "none";
  start.style.display = "block";
  if (localStorage.getItem("isReloading")) {
    localStorage.removeItem("isReloading");
    clearInterval(intervalId);
  }
}
if (localStorage.getItem("isReloading")) {
  startReload();
}

start.addEventListener("click", startReload);
stops.addEventListener("click", stopReload);
function main() {
  if (localStorage.getItem("isReloading")) {
    start.style.display = "none";
    stops.style.display = "block";
  } else {
    stops.style.display = "none";
    start.style.display = "block";
  }
}

main();
