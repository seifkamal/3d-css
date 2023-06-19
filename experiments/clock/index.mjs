import { init as initCamera } from "../../mods/camera.mjs";
import { init as initComponents } from "../../mods/component.mjs";

window.addEventListener("DOMContentLoaded", () => {
  initCamera();
  initComponents();
  initClock();
});

function initClock() {
  const time = document.querySelector("time");
  if (!(time instanceof HTMLElement)) {
    return;
  }

  const tick = () => {
    const now = new Date();
    const hours = withLeadingZero(now.getHours());
    const minutes = withLeadingZero(now.getMinutes());
    const seconds = withLeadingZero(now.getSeconds());
    time.textContent = `${hours}:${minutes}:${seconds}`;
  };

  tick();
  setInterval(tick, 1_000);
}

function withLeadingZero(number) {
  if (0 < number && number < 10) {
    return `0${number}`;
  }
  return number;
}
