export default function renderConfirmacionCreditos(credits) {
    const app = document.getElementById("app");
    app.innerHTML = `
        <h1>Confirmación de Créditos</h1>
        <p>Se han enviado ${credits} créditos a tu cuenta.</p>
    `;
  }