import { router, socket } from "../routes.js";

export default function renderCameraScreen() {
  const app = document.getElementById("app");
  app.innerHTML = `
  <header class="navbar">
    <img src="images/frame1.webp" alt="Logo Uber" class="navbar-logo">
  </header>
  <div class="main-container">
    <div class="content-wrapper">
      <p class="camera-title">¡Asegúrate de que tu producto esté dentro del cuadro!</p>
      <p class="camera-description">Esto nos ayudará a procesar correctamente el material y asegurarte que recibas el máximo beneficio.</p>
      <div id="webcam-container"></div>
      <div id="label-container"></div>
      <button id="plastico" style="display: none;">Plástico Reconocido</button>
      <div id="error-message" style="color: red;"></div>
    </div>
  </div>
  `;

  const URL = "https://teachablemachine.withgoogle.com/models/K5Ic-xHK3/";
  let model, webcam, labelContainer, maxPredictions;
  const plasticoButton = document.getElementById("plastico");
  const errorMessage = document.getElementById("error-message");

  
  plasticoButton.addEventListener("click", () => {
    socket.emit("plasticoReconocido");
    router.navigateTo("/processing");
  });

  async function init() {
    try {
      const modelURL = URL + "model.json";
      const metadataURL = URL + "metadata.json";

      model = await tmImage.load(modelURL, metadataURL);
      maxPredictions = model.getTotalClasses();

      const flip = true;
      webcam = new tmImage.Webcam(300, 300, flip);
      await webcam.setup();
      await webcam.play();

      const webcamContainer = document.getElementById("webcam-container");
webcamContainer.innerHTML = ""; // Elimina todo lo que haya en el contenedor
webcamContainer.appendChild(webcam.canvas);

      labelContainer = document.getElementById("label-container");
      for (let i = 0; i < maxPredictions; i++) {
        labelContainer.appendChild(document.createElement("div"));
      }

      window.requestAnimationFrame(loop);
    } catch (error) {
      console.error("Error al inicializar el modelo:", error);
      errorMessage.textContent = "Error al inicializar la cámara o el modelo. Por favor, recarga la página.";
    }
  }

  async function loop() {
    webcam.update();
    await predict();
    window.requestAnimationFrame(loop);
  }

  async function predict() {
    try {
      const prediction = await model.predict(webcam.canvas);
      let plasticoDetectado = false;
  
      for (let i = 0; i < maxPredictions; i++) {
        const classPrediction = prediction[i].className + ": " + prediction[i].probability.toFixed(2);
        labelContainer.childNodes[i].innerHTML = classPrediction;
  
        // Verifica si la clase es "Plastico" y la probabilidad es 1.00
        if (prediction[i].className === "Plastico" && prediction[i].probability === 1.00) {
          plasticoDetectado = true;
        }
      }
  
      if (plasticoDetectado) {
        plasticoButton.style.display = "block";
  
        // Actualiza el estilo del canvas con el borde verde
        webcam.canvas.style.border = "5px solid #a1c480";
  
        // Espera 1 segundo para mantener el marco visible antes de cambiar de pantalla
        setTimeout(() => {
          plasticoButton.click(); // Simula un clic en el botón
      }, 3000);
      } else {
        plasticoButton.style.display = "none";
        webcam.canvas.style.border = "none"; // Elimina el borde si no se detecta plástico
      }
    } catch (error) {
      console.error("Error al hacer la predicción:", error);
      errorMessage.textContent = "Error al procesar la imagen. Por favor, inténtalo de nuevo.";
    }
  }
  

  init();
}
