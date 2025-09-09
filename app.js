//AMIGO SECRETO

// array para almacenar los nombres 
let amigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  // Validar lo ingresado
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Actualizar el array de amigos
  amigos.push(nombre);

  // Limpiar el campo de entrada
  input.value = "";

  // Mostrar la lista actualizada
  mostrarListaAmigos();
}

function mostrarListaAmigos() {
  // Obtener el elemento de la lista
  const lista = document.getElementById("listaAmigos");

  // Limpiar la lista 
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    lista.innerHTML += `<li>${amigos[i]}</li>`;
  }
}

function sortearAmigo() {
  // Validar que haya amigos disponibles
  if (amigos.length === 0) {
    alert("No hay amigos para sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  const nombreSorteado = amigos[indiceAleatorio];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>${nombreSorteado}</li>`;
}
