import { router, socket } from "../routes.js";

export default function renderScreen4() {
  const app = document.getElementById("app");
  app.innerHTML = `
        <div class="container">
          <div class="content">
             <p class="title">¡Procesando tu reciclaje!</p>
            
          
          
<<<<<<< HEAD
=======
           
>>>>>>> develop-Jaud
          </div>
        </div>
    `;

    


 
  setTimeout(() => {
    router.navigateTo("/depositScreen");
  }, 5000); // 5000 milisegundos = 5 segundos
}
  
