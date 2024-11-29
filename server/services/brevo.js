const brevo = require("@getbrevo/brevo"); // https://developers.brevo.com/
require("dotenv/config");

let apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY
);

let sendSmtpEmail = new brevo.SendSmtpEmail();

const sendEmail = async () => {
  sendSmtpEmail.subject = "My First Email"; // Asunto del correo
  sendSmtpEmail.htmlContent = 
    "<html><body><h1>Common: This is my first transactional email {{params.parameter}}</h1></body></html>";
  sendSmtpEmail.sender = {
    name: "John Cena",
    email: "youraccountemail@gmail.com", // Dirección de envío
  };
  sendSmtpEmail.to = [
    { email: "destinationemail@gmail.com", name: "User name" }, // Destinatarios
  ];
  sendSmtpEmail.replyTo = {
    email: "emailtoreplyto@gmail.com", // Dirección para respuestas
    name: "Support",
  };
  sendSmtpEmail.params = { parameter: "My param value" }; // Parámetros personalizados
  
  try {
    const response = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log(JSON.stringify(response));
  } catch (error) {
    console.error(error);
  }
};

const sendEmailWithTemplate = async (recipientEmail, recipientName, params) => {
  const sendSmtpEmail = {
    templateId: 1, // ID de tu plantilla en Brevo
    sender: {
      name: "Uber GreenRoutes",
      email: "jdavidflorezm@gmail.com",
    },
    to: [
      { email: recipientEmail, name: recipientName },
    ],
    replyTo: {
      email: "emailtoreplyto@gmail.com",
      name: "Support",
    },
    params, // Parámetros dinámicos que se pasan al contenido de la plantilla
  };

  try {
    const response = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log("Correo enviado con éxito:", JSON.stringify(response));
    return response;
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    throw error;
  }
};

module.exports = { sendEmail, sendEmailWithTemplate };
