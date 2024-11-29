// eventsExampleHandlers.js
const { sendEmailWithTemplate } = require("../services/brevo");
const { utilFuntion1, utilFuntion2 } = require("../utils/helpers");
const { encenderCamara, mostrarAlertaProductoPlastico, mostrarMensajeProductoPlastico  } = require("../utils/helpers2");
const { getLastUser } = require("../db/entities/users")


//Eventos reales 
const turnOnCamera = (socket, db, io) => {
  return async (data) => {
    console.log("Evento 'turnCamera' recibido"); // Agrega un log aquí
    try {
      await encenderCamara();  // Llama a la función que enciende la cámara
      io.emit("camera turned on");
    } catch (error) {
      io.emit("camera error", { error: "Failed to turn on the camera" });
    }
  };
};

const plasticoReconocido = (socket, db, io) => {
  return (data) => {
    // Emite el evento al servidor o a otros clientes
    io.emit("plastico reconocido", { message: "Se ha reconocido un plástico" });

    // Llama a la función que muestra la alerta
    mostrarMensajeProductoPlastico();
  };
};


// Assuming db and io are required or passed in some way to be accessible
const startProccess = (socket, db, io) => {
  return (data) => {
    io.emit("showSomething");
  };
};

const showsQR = (socket, db, io) => {
  return (data) => {
    io.emit("returnScreen1", { message: "ok" });
  };
};

const CameraScreen= (socket, db, io) => {
  return (data) => {
    io.emit("returnScreen1", { message: "ok" });
  };
};



const DepositedProduct= (socket, db, io) => {
  return (data) => {
    io.emit("depositado", { message: "se ha depositado un producto" });
  };
};
const client2form= (socket, db, io) => {
  return (data) => {
    io.emit("client2form", { message: "Hacer el formulario en el cliente 2" });
  };
};

const pCompleted = (socket, db, io) => {
  return async (data) => {
    console.log("Evento 'pCompleted' recibido:", data);

    try {
      // Obtener el último usuario desde Supabase
      const lastUser = await getLastUser();
      if (!lastUser) {
        console.error("No se encontró ningún usuario en la base de datos.");
        return;
      }

      // Enviar el correo al último usuario con parámetros personalizados
      await sendEmailWithTemplate(
        lastUser.email,
        lastUser.name || "Usuario",
        { parameter: "Tu proceso ha sido completado con éxito" } // Parámetros de la plantilla
      );

      console.log(`Correo enviado a ${lastUser.email}`);
      io.emit("pCompletedSuccess", { message: "Correo enviado correctamente" });
    } catch (error) {
      console.error("Error en el proceso de 'pCompleted':", error);
      io.emit("pCompletedError", { error: "Error al completar el proceso" });
    }
  };
};



module.exports = {
  turnOnCamera,
  plasticoReconocido,
  startProccess,
  showsQR,
  CameraScreen,
  DepositedProduct,
  client2form,
  pCompleted
  
};
