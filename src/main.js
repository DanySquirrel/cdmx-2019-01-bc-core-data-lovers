  // código que tenga que ver con mostrar los datos en la pantalla. Con esto nos referimos básicamente a la interacción con el DOM. Operaciones como creación de nodos, registro de manejadores de eventos (event listeners o event handlers), ....
  
  const table= document.getElementById("years");
  const printing= (years) => {
    let printedResult= `<p>${years}</p>`;
    table.insertAdjacentHTML("beforeend", printedResult);
  }
