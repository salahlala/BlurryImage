let background = document.querySelector(".bg");
let text = document.querySelector(".loading-text");
let timer = 0;
let counter = setInterval(count, 30);
function count() {
  timer++;
  if (timer > 99) {
    clearInterval(counter);
  }
  text.innerHTML = `${timer}%`;
  text.style.opacity = scale(timer, 0, 100, 1, 0);
  background.style.filter = `blur(${scale(timer, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
