import { init as initCamera } from "../../mods/camera.mjs";
import { init as initStagger } from "../../mods/stagger.mjs";
import { init as initControls } from "../../mods/controls.mjs";

window.addEventListener("DOMContentLoaded", () => {
  initCamera();
  initStagger(".door,.step,.cliff");
  initControls();
});
