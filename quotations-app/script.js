    
const formulario = document.getElementById('formulario');
const buttonSub = document.getElementById('submit-btn');
const quote = document.getElementById('quote-list');
const citation = document.getElementById("citation");
const auteur = document.getElementById("auteur");
const quoteCountElement = document.getElementById("count");  // L'élément DOM

let citations = [];  // Variable global para almacenar las citas
let quoteCount = 0;  // La variable pour stocker le compteur


// Comprobar si hay citas almacenadas en el localStorage
if (localStorage.getItem('citations')) {
  citations = JSON.parse(localStorage.getItem('citations'));
  // JSON.parse se usa para convertir una cadena de texto en formato JSON en un objeto de JS
  quoteCount = citations.length; // Recuperar el número de citas almacenadas
  displayCitations(); // Mostrar las citas almacenadas
} else {
  // Si no hay citas, agregamos una por defecto
  citations.push({
    author: "Simone de Beauvoir",
    text: "On ne naît pas femme, on le devient."
  });
  // Guardar la cita inicial en el localStorage
  localStorage.setItem('citations', JSON.stringify(citations));
}


// Función para agregar una nueva cita
function addCitation(author, text) {
  const newCitation = { author, text };  // Crée un nouvel objet citation
  citations.push(newCitation);   // Ajoute la citation au tableau 'citations'
  // push() permet d'ajouter un nouvel element a la fin d'un tableau
  localStorage.setItem('citations', JSON.stringify(citations));
  //convierte un objeto o valor JavaScript en una cadena JSON,ATTENTION DIFERENTE A JSON.parse
 
//augmenter el nombre de las citaciones
// Mettre à jour le texte de l'élément HTML
    quoteCountElement.innerText = "Affichage de nombre de citations enregistrées : " + quoteCount + " citations";
    quoteCount += 1; // Incrementar el contador de citas
  updateQuoteCount(); // Actualizar el contador en el DOM
}

// Función para mostrar las citas en el DOM
function displayCitations() {
  quote.innerHTML = ''; // Limpiar la lista de citas antes de mostrar
  citations.forEach(citation => {
    quote.innerHTML += `
      <p>Ta citation est : ${citation.text}</p>
      <p>Ton auteur est : ${citation.author}</p>
      <hr>
    `;
  });
}

// Función para actualizar el contador de citas
function updateQuoteCount() {
    quoteCountElement.innerText = `Affichage de nombre de citations enregistrées : ${quoteCount} citations`;
  }
  
  // Función para recuperar los valores del formulario
  function recuperacion(event) {
    event.preventDefault(); // Evitar la recarga de la página al enviar el formulario
  
    // Recuperar las citas del formulario
    const citationValue = citation.value;
    const auteurValue = auteur.value;
  
    // Mostrar la cita en el DOM
    addCitation(auteurValue, citationValue);
  
    // Limpiar los campos del formulario
    citation.value = '';
    auteur.value = '';
  }
  
  // Attacher l'événement "submit" au formulaire
  formulario.addEventListener("submit", recuperacion);






























