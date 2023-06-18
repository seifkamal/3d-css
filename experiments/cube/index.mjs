import { init as initCamera } from "../../mods/camera.mjs";
import { init as initControls } from "../../mods/controls.mjs";
import { init as initComponents } from "../../mods/component.mjs";

window.addEventListener("DOMContentLoaded", () => {
  initCamera();
  initControls();
  initComponents();
});
