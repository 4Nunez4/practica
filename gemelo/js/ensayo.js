// Obtener los elementos del DOM
const welcomeText = document.querySelector('#welcome-text');
const whatsappLogo = document.querySelector('#whatsapp-logo');
const miniChat = document.querySelector('#mini-chat');
const pageContent = document.querySelector('#page-content');

// Establecer el texto de bienvenida y el mensaje del mini chat
welcomeText.textContent = '¡Bienvenido a nuestra página!';
miniChat.textContent = '¡Hola! ¿En qué podemos ayudarte?';

// Agregar una transición al texto de bienvenida
welcomeText.style.transition = 'opacity 2s';
welcomeText.style.opacity = 0;
setTimeout(() => {
  welcomeText.style.opacity = 1;
}, 1000);

// Mostrar el contenido de la página cuando el usuario haga clic en el texto de bienvenida
welcomeText.addEventListener('click', () => {
  pageContent.style.display = 'block';
});

// Mostrar el mini chat cuando el usuario pase el mouse sobre el logo de WhatsApp
whatsappLogo.addEventListener('mouseover', () => {
  miniChat.style.display = 'block';
});

// Ocultar el mini chat cuando el usuario quite el mouse del logo de WhatsApp
whatsappLogo.addEventListener('mouseout', () => {
  miniChat.style.display = 'none';
});

// Redirigir al usuario al WhatsApp del creador de la página cuando haga clic en el logo
whatsappLogo.addEventListener('click', () => {
  window.location.href = 'https://wa.me/1234567890'; // Reemplaza 1234567890 con el número de teléfono del creador de la página
});
