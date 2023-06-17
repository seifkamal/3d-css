const PROP = "--stagger";
const STEP = 150;
const UNIT = "ms";

/** @param {string=} selector */
export function init(selector) {
  if (!selector) {
    return;
  }
  document.querySelectorAll(selector).forEach((el, idx) => {
    if (!(el instanceof HTMLElement)) {
      throw new Error(`${el} is not an HTMLElement`);
    }
    el.style.setProperty(PROP, `${idx * STEP}${UNIT}`);
  });
}
