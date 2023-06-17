const CLASS = ".stagger";
const PROP = "--stagger";
const STEP = 150;
const UNIT = "ms";

export function init() {
  document.querySelectorAll(CLASS).forEach((el, idx) => {
    if (!(el instanceof HTMLElement)) {
      throw new Error(`${el} is not an HTMLElement`);
    }
    el.style.setProperty(PROP, `${idx * STEP}${UNIT}`);
  });
}
