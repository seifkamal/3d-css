const PROP = "--perspective-origin";
const HOST = document.body;

export function init() {
  let rect = HOST.getBoundingClientRect();
  window.addEventListener("resize", () => {
    rect = HOST.getBoundingClientRect();
  });

  window.addEventListener("mousemove", ({ clientX, clientY }) => {
    const xp = Math.ceil((clientX * 100) / rect.width);
    const yp = Math.ceil((clientY * 100) / rect.height);
    HOST.style.setProperty(PROP, `${xp}% ${yp}%`);
  });

  window.addEventListener("mouseout", () => {
    HOST.style.removeProperty(PROP);
  });
}
