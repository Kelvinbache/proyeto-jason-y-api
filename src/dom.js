export const crea = (comentario, persona) => {
  const contenedor = document.getElementById("contenedor");

  /*comentrios de la gente*/
  const comentarios = document.createElement("p");
  comentarios.textContent = `comentario: ${comentario}`;

  /*personajes*/
  const quien = document.createElement("h5");
  quien.textContent = `persona: ${persona} `;

  /*los estoy agregando*/
  contenedor.appendChild(quien);
  contenedor.appendChild(comentarios);
};
