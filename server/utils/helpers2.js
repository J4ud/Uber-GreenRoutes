const encenderCamara = () => {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(stream => {
      const video = document.createElement('video');
      video.srcObject = stream;
      video.autoplay = true;
      document.body.appendChild(video);
      video.style.width = "100%"; // O ajusta según tus necesidades
      video.style.height = "auto"; // O ajusta según tus necesidades
    })
    .catch(error => {
      console.error('Error al acceder a la cámara:', error);
    });
};


const mostrarMensajeProductoPlastico = () => {
  console.log("Se ha detectado un nuevo producto plástico");
};

  module.exports = { encenderCamara, mostrarMensajeProductoPlastico }

  