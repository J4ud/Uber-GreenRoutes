import { router, socket } from "../routes.js";


export default function renderScreen2() {
  const app = document.getElementById("app");
  app.innerHTML = `
       <header class="navbar">
  <img src="images/frame1.webp" alt="Logo Uber" class="navbar-logo">
</header>
<div class="container">
  <p class="title">Tu código está listo para usar en tu próximo viaje.</p>
  <img src="images/loading-screen.webp" alt="margen" class="bgimage">
  <div class="content">
    <!-- QR Code -->
    <div class="qr-code">
      <img src="images/qr.webp" alt="QR code">
    </div>
    <!-- Text Content -->
    <div class="text-content">
      <p class="description">
        El reciclaje tiene sus beneficios, y este código es la prueba. Canjéalo para aplicar tu cash y viajar sabiendo que hiciste la diferencia.
      </p>
    </div>
  </div>
  <!-- Button Outside Content -->
  <button id="simular" class="qr-button">Simular</button>
</div>
    `;

    


  document.getElementById("simular").addEventListener("click", () => {
    socket.emit("client2form");
    router.navigateTo("/await");
    
  });

  
}