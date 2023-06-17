export function init() {
  const menu = document.querySelector("menu");
  if (!menu) {
    return;
  }

  menu.querySelectorAll("input").forEach(initInput);
}

/** @param {HTMLInputElement} input */
function initInput(input) {
  const prop = `--${input.name}`;
  const update = () => {
    const value = getInputValue(input);
    if (!value) {
      document.documentElement.style.removeProperty(prop);
      return;
    }
    document.documentElement.style.setProperty(prop, value);
  };

  if (input.hasAttribute("value")) {
    update();
  }

  input.addEventListener("input", update);
}

/** @type {(input: HTMLInputElement) => string} */
function getInputValue(input) {
  switch (input.type) {
    case "checkbox":
      return input.checked ? "" : "none";
    default:
      const unit = input.getAttribute("data-unit") || "";
      return input.value + unit;
  }
}
