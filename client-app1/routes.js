import renderScreen1 from "./screens/start.js";
import renderScreen2 from "./screens/qrScreen.js";
import renderScreen3 from "./screens/cameraScreen.js";
import socket from "./socket.js";
import renderScreen4 from "./screens/processing.js";
import renderScreen5 from "./screens/depositScreen.js";

const router = new Router({ // check this for more features with Router: https://github.com/Graidenix/vanilla-router
  mode: "hash",
  page404: (path) => {
    const app = document.getElementById("app");
    app.innerHTML = `<h1>404 - Not Found</h1><p>The page you are looking for does not exist.</p>`;
  },
});

function clearScripts() {
  document.getElementById("app").innerHTML = "";
}

router.add("/", async () => {
  clearScripts();
  renderScreen1();
});

router.add("/screen2", async () => {
  clearScripts();
  renderScreen2();
});

router.add("/cameraScreen", async () => {
  clearScripts();
  renderScreen3();
});

router.add("/processing", async () => {
  clearScripts();
  renderScreen4();
});
router.add("/depositScreen", async () => {
  clearScripts();
  renderScreen5();
});

router.check().addUriListener();

// Listen for popstate event to handle browser navigation
window.addEventListener("popstate", () => {
  router.check();
});

document.addEventListener("DOMContentLoaded", () => {
  router.check();
});

router.check();

export { router, socket };
